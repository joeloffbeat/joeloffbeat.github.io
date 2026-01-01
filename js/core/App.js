import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

import { setupScene } from '../systems/scene.js';
import { createCamera } from '../systems/camera.js';
import { createCar } from '../entities/car.js';
import { createCharacter, updateCharacterPosition } from '../entities/character.js';
import { createGround } from '../entities/ground.js';
import { setupControls } from '../systems/controls.js';
import { setupCameraController, updateCamera } from '../systems/cameraController.js';

import {
    LIGHTING,
    CAMERA,
    SCENE,
    RENDERER,
    CONTROLS
} from '../config/constants.js';

/**
 * Main Application Class
 * Manages the Three.js scene, renderer, camera, and game loop
 */
export class App {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.clock = new THREE.Clock();
        
        this.character = null;
        this.ground = null;
        this.car = null;
        
        this.ambientLight = null;
        this.directionalLight = null;
        
        this.controlsState = {
            keys: {
                w: false,
                a: false,
                s: false,
                d: false,
                ArrowUp: false,
                ArrowLeft: false,
                ArrowDown: false,
                ArrowRight: false
            },
            isMoving: false,
            targetPosition: new THREE.Vector3()
        };
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupControls();
        this.createWorld();
        this.setupInputControls();
        this.setupLighting();
        this.setupEventListeners();
        this.animate();
    }

    /**
     * Setup Three.js scene and lighting
     */
    setupScene() {
        const sceneSetup = setupScene();
        this.scene = sceneSetup.scene;
        this.ambientLight = sceneSetup.ambientLight;
        this.directionalLight = sceneSetup.directionalLight;
    }

    /**
     * Setup camera
     */
    setupCamera() {
        this.camera = createCamera();
    }

    /**
     * Setup WebGL renderer
     */
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = RENDERER.ENABLE_SHADOWS;
        this.renderer.shadowMap.type = THREE[RENDERER.SHADOW_TYPE];
        document.body.appendChild(this.renderer.domElement);
    }

    /**
     * Setup OrbitControls
     */
    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableRotate = CONTROLS.ENABLE_ROTATE;
        this.controls.enableDamping = CONTROLS.ENABLE_DAMPING;
        this.controls.dampingFactor = CONTROLS.DAMPING_FACTOR;
        this.controls.screenSpacePanning = CONTROLS.SCREEN_SPACE_PANNING;
        this.controls.mouseButtons = {
            LEFT: CONTROLS.MOUSE_BUTTONS.LEFT,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };
    }

    /**
     * Create world objects (ground, car, character)
     */
    createWorld() {
        // Ground
        this.ground = createGround();
        this.scene.add(this.ground);

        // Car (replaces house)
        // this.car = createCar();
        this.scene.add(this.car);
        // Compute static colliders from car sprite and store for character collision checks
        this.colliders = [];
        //const carBox = new THREE.Box3().setFromObject(this.car);
        // carBox.expandByScalar(0.25);
        //this.colliders.push(carBox);

        // Character
        this.character = createCharacter();
        this.scene.add(this.character);
        this.controlsState.targetPosition.copy(this.character.position);
    }

    /**
     * Setup input controls (keyboard and mouse)
     * Called after world objects are created
     */
    setupInputControls() {
        setupControls(this.camera, this.ground, this.controlsState, this.renderer.domElement);
        setupCameraController(this.camera, this.controls, this.character);
    }

    /**
     * Setup fixed lighting
     */
    setupLighting() {
        this.ambientLight.intensity = LIGHTING.AMBIENT_INTENSITY;
        this.directionalLight.intensity = LIGHTING.DIRECTIONAL_INTENSITY;
        this.scene.background = new THREE.Color(SCENE.BACKGROUND_COLOR);
    }

    /**
     * Setup window event listeners
     */
    setupEventListeners() {
        window.addEventListener('resize', () => this.handleResize(), false);
    }

    /**
     * Handle window resize
     */
    handleResize() {
        const aspect = window.innerWidth / window.innerHeight;
        const d = CAMERA.VIEW_SIZE;
        this.camera.left = -d * aspect;
        this.camera.right = d * aspect;
        this.camera.top = d;
        this.camera.bottom = -d;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * Update interactions (house entry/exit)
     */
    /**
     * Main animation loop
     */
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();

        this.controls.update();
        updateCamera();
        updateCharacterPosition(this.character, this.controlsState, this.clock, this.colliders);

        this.renderer.render(this.scene, this.camera);
    }
}

