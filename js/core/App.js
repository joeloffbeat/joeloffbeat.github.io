import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene } from '../systems/scene.js';
import { createCamera } from '../systems/camera.js';
import { createCharacter, updateCharacterPosition } from '../entities/character.js';
import { createGround, updateWater } from '../entities/ground.js';
import { createStars, updateStars } from '../entities/stars.js';
import { InteractiveEntity } from '../entities/interactiveEntity.js';
import { setupControls } from '../systems/controls.js';
import { setupCameraController, updateCamera } from '../systems/cameraController.js';
import { initInteraction, updateInteraction } from '../systems/interaction.js';
import { initOverlay, open as openOverlay, isOpen as overlayIsOpen } from '../ui/overlay.js';
import { ENTITY_PLACEMENTS } from '../config/worldMap.js';

import {
    LIGHTING, CAMERA, SCENE, RENDERER, CONTROLS, TRAIL, GROUND
} from '../config/constants.js';
import { DEBUG } from '../config/debug.js';

export class App {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.orbitControls = null;
        this.clock = new THREE.Clock();

        this.character = null;
        this.ground = null;
        this.entities = [];
        this.colliders = [];

        this.ambientLight = null;
        this.directionalLight = null;

        this.trailGhosts = [];
        this.trailTimer = 0;

        this.controlsState = {
            keys: {
                w: false, a: false, s: false, d: false,
                ArrowUp: false, ArrowLeft: false, ArrowDown: false, ArrowRight: false,
                ' ': false
            },
            isMoving: false,
            targetPosition: new THREE.Vector3()
        };
    }

    async init() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initOrbitControls();
        await this.createWorld();
        this.initInputControls();
        this.applyLighting();
        this.initUI();
        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    initScene() {
        const { scene, ambientLight, directionalLight } = setupScene();
        this.scene = scene;
        this.ambientLight = ambientLight;
        this.directionalLight = directionalLight;
    }

    initCamera() {
        this.camera = createCamera();
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = RENDERER.ENABLE_SHADOWS;
        this.renderer.shadowMap.type = THREE[RENDERER.SHADOW_TYPE];
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = RENDERER.TONE_MAPPING_EXPOSURE;
        document.body.appendChild(this.renderer.domElement);
    }

    initOrbitControls() {
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.enableRotate = CONTROLS.ENABLE_ROTATE;
        this.orbitControls.enableDamping = CONTROLS.ENABLE_DAMPING;
        this.orbitControls.dampingFactor = CONTROLS.DAMPING_FACTOR;
        this.orbitControls.screenSpacePanning = CONTROLS.SCREEN_SPACE_PANNING;
        this.orbitControls.mouseButtons = {
            LEFT: CONTROLS.MOUSE_BUTTONS.LEFT,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };
    }

    async createWorld() {
        // Stars (behind island)
        this.scene.add(createStars());

        // Ground + side walls
        const { groundMesh, walls } = await createGround();
        this.ground = groundMesh;
        this.scene.add(this.ground);
        for (const wall of walls) {
            this.scene.add(wall);
        }

        // Interactive entities
        for (const config of ENTITY_PLACEMENTS) {
            const entity = new InteractiveEntity(config);
            await entity.create();
            this.scene.add(entity.sprite);
            this.colliders.push(entity.collider);
            this.entities.push(entity);

            if (DEBUG.COLLIDER_BOXES) {
                this.scene.add(new THREE.Box3Helper(entity.collider, 0xff0000));
            }
        }

        // Character (added last to render on top)
        this.character = createCharacter();
        this.scene.add(this.character);
        this.controlsState.targetPosition.copy(this.character.position);
    }

    initInputControls() {
        setupControls(this.camera, this.ground, this.controlsState, this.renderer.domElement);
        setupCameraController(this.camera, this.orbitControls, this.character);
    }

    initUI() {
        const toastEl = document.getElementById('entity-toast');
        initOverlay();
        initInteraction(this.entities, toastEl, (overlayId) => {
            openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
        });
    }

    applyLighting() {
        this.ambientLight.intensity = LIGHTING.AMBIENT_INTENSITY;
        this.directionalLight.intensity = LIGHTING.DIRECTIONAL_INTENSITY;
        this.scene.background = new THREE.Color(SCENE.BACKGROUND_COLOR);
    }

    onResize() {
        const aspect = window.innerWidth / window.innerHeight;
        const d = CAMERA.VIEW_SIZE;
        this.camera.left = -d * aspect;
        this.camera.right = d * aspect;
        this.camera.top = d;
        this.camera.bottom = -d;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // -- Game loop ----------------------------------------------------------------

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        updateCamera(delta);          // lerp target first
        this.orbitControls.update();  // then apply damping against new target

        // Pass overlay state to block input during overlay
        const blocked = overlayIsOpen;
        updateCharacterPosition(this.character, this.controlsState, this.clock, delta, this.colliders, blocked);

        // Stars twinkle
        updateStars(delta);

        // Water animation
        updateWater(delta);

        // Proximity / toast
        updateInteraction(this.character.position, blocked);

        this.updateTrail(delta);

        this.renderer.render(this.scene, this.camera);
    }

    // -- Dash trail ---------------------------------------------------------------

    updateTrail(delta) {
        const keys = this.controlsState.keys;
        const isDashing = keys[' '];
        const isMoving = this.controlsState.isMoving ||
            keys.w || keys.a || keys.s || keys.d ||
            keys.ArrowUp || keys.ArrowLeft || keys.ArrowDown || keys.ArrowRight;

        if (isDashing && isMoving) {
            this.trailTimer += delta;
            if (this.trailTimer >= TRAIL.SPAWN_INTERVAL) {
                this.trailTimer = 0;
                this.spawnGhost();
            }
        } else {
            this.trailTimer = 0;
        }

        for (let i = this.trailGhosts.length - 1; i >= 0; i--) {
            const ghost = this.trailGhosts[i];
            ghost.userData.life -= delta;
            ghost.material.opacity = Math.max(
                0,
                (ghost.userData.life / TRAIL.LIFETIME) * TRAIL.INITIAL_OPACITY
            );

            if (ghost.userData.life <= 0) {
                this.scene.remove(ghost);
                ghost.material.map.dispose();
                ghost.material.dispose();
                this.trailGhosts.splice(i, 1);
            }
        }
    }

    spawnGhost() {
        const charMat = this.character.material;
        const srcTex = charMat.map;
        const img = srcTex.image;

        // Source image pixel dimensions
        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;

        // Current frame size in pixels (repeat = fraction of full texture)
        const fw = Math.round(imgW * srcTex.repeat.x);
        const fh = Math.round(imgH * srcTex.repeat.y);

        // Frame pixel origin.
        // Three.js UV: offset.y=0 is bottom of image; canvas y=0 is top — invert Y.
        const ox = Math.round(imgW * srcTex.offset.x);
        const oy = imgH - Math.round(imgH * (srcTex.offset.y + srcTex.repeat.y));

        // Snapshot the current frame into a canvas (synchronously available — no GPU delay)
        const canvas = document.createElement('canvas');
        canvas.width = fw;
        canvas.height = fh;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, ox, oy, fw, fh, 0, 0, fw, fh);

        const snapTex = new THREE.CanvasTexture(canvas);
        snapTex.magFilter = THREE.NearestFilter;
        snapTex.minFilter = THREE.NearestFilter;

        const material = new THREE.SpriteMaterial({
            map: snapTex,
            transparent: true,
            opacity: TRAIL.INITIAL_OPACITY,
            alphaTest: TRAIL.ALPHA_TEST,
            depthWrite: false,
        });

        const ghost = new THREE.Sprite(material);
        ghost.scale.copy(this.character.scale);
        ghost.position.copy(this.character.position);
        ghost.userData.life = TRAIL.LIFETIME;

        this.scene.add(ghost);
        this.trailGhosts.push(ghost);
    }
}
