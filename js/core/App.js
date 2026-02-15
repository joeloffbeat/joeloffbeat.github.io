import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene } from '../systems/scene.js';
import { createCamera } from '../systems/camera.js';
import { createCharacter, updateCharacterPosition } from '../entities/character.js';
import { createGround } from '../entities/ground.js';
import { createCar } from '../entities/car.js';
import { setupControls } from '../systems/controls.js';
import { setupCameraController, updateCamera } from '../systems/cameraController.js';

import {
    LIGHTING, CAMERA, SCENE, RENDERER, CONTROLS, CAR, TRAIL
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
        this.car = null;
        this.colliders = [];

        this.ambientLight = null;
        this.directionalLight = null;

        this.trailGhosts = [];
        this.trailTimer = 0;
        this.carPopupEl = null;

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

    init() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initOrbitControls();
        this.createWorld();
        this.initInputControls();
        this.applyLighting();
        this.carPopupEl = document.getElementById('car-popup');
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

    createWorld() {
        this.ground = createGround();
        this.scene.add(this.ground);

        this.car = createCar();
        this.car.position.set(CAR.POSITION.x, CAR.POSITION.y, CAR.POSITION.z);
        this.scene.add(this.car);

        const { width, depth, height, padding } = CAR.COLLISION;
        const cx = CAR.POSITION.x;
        const cz = CAR.POSITION.z;
        const carCollider = new THREE.Box3(
            new THREE.Vector3(cx - width, 0, cz - depth),
            new THREE.Vector3(cx, height, cz + padding)
        );
        this.colliders.push(carCollider);

        // Visualize collider as red box (debug)
        if (DEBUG.COLLIDER_BOXES) {
            const colliderHelper = new THREE.Box3Helper(carCollider, 0xff0000);
            this.scene.add(colliderHelper);
        }

        this.character = createCharacter();
        this.scene.add(this.character);
        this.controlsState.targetPosition.copy(this.character.position);
    }

    initInputControls() {
        setupControls(this.camera, this.ground, this.controlsState, this.renderer.domElement);
        setupCameraController(this.camera, this.orbitControls, this.character);
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

        this.orbitControls.update();
        updateCamera();
        updateCharacterPosition(this.character, this.controlsState, this.clock, this.colliders);

        this.updateTrail(delta);
        this.updateCarPopup();

        this.renderer.render(this.scene, this.camera);
    }

    // -- Car proximity popup ------------------------------------------------------

    updateCarPopup() {
        const dx = this.character.position.x - CAR.POSITION.x;
        const dz = this.character.position.z - CAR.POSITION.z;
        const near = Math.sqrt(dx * dx + dz * dz) < CAR.POPUP_DISTANCE;
        this.carPopupEl.style.opacity = near ? '1' : '0';
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
        const map = charMat.map.clone();
        map.offset.copy(charMat.map.offset);
        map.repeat.copy(charMat.map.repeat);

        const material = new THREE.SpriteMaterial({
            map,
            transparent: true,
            opacity: TRAIL.INITIAL_OPACITY,
            alphaTest: 0.1
        });

        const ghost = new THREE.Sprite(material);
        ghost.scale.copy(this.character.scale);
        ghost.position.copy(this.character.position);
        ghost.userData.life = TRAIL.LIFETIME;

        this.scene.add(ghost);
        this.trailGhosts.push(ghost);
    }
}
