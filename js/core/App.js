import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene } from '../systems/scene.js';
import { createCamera } from '../systems/camera.js';
import { createCharacter, updateCharacterPosition } from '../entities/character.js';
import { createGround } from '../entities/ground.js';
import { createCar } from '../entities/car.js';
import { createCoin, generateHeartPositions, updateCoin } from '../entities/coin.js';
import { createVictoryImage, triggerVictory } from '../systems/victory.js';
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

        this.coins = [];
        this.victoryImage = null;
        this.gameState = {
            coinsCollected: 0,
            totalCoins: 0,
            victoryTriggered: false
        };

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

        // Car - positioned at right end of ground (ground is 100x100, from -50 to +50)
        this.car = createCar();
        this.car.position.set(45, 0, 0); // Right end of map, centered on Z-axis
        this.scene.add(this.car);

        // Initialize colliders array for character collision detection
        this.colliders = [];
        // Create manual bounding box for car (sprites don't work well with setFromObject)
        // Car is scaled to (22.5, 13.5, 1), create a box on the ground plane
        const carWidth = 11; // Half of 22.5, adjusted for better collision feel
        const carDepth = 6; // Reasonable depth for car collision
        const carBox = new THREE.Box3(
            new THREE.Vector3(45 - carWidth, 0, 0 - carDepth),
            new THREE.Vector3(45 + carWidth, 10, 0 + carDepth)
        );
        this.colliders.push(carBox);

        // Character
        this.character = createCharacter();
        this.scene.add(this.character);
        this.controlsState.targetPosition.copy(this.character.position);

        // Coins in heart shape
        const coinPositions = generateHeartPositions();
        this.gameState.totalCoins = coinPositions.length;

        coinPositions.forEach((pos, index) => {
            const isFinalCoin = (index === coinPositions.length - 1); // Mark last coin as final
            const coin = createCoin(pos.x, pos.z, isFinalCoin);
            this.coins.push(coin);
            this.scene.add(coin);
        });

        // Victory image (hidden initially)
        this.victoryImage = createVictoryImage();
        this.scene.add(this.victoryImage);
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

        // Update coins
        this.coins.forEach(coin => updateCoin(coin, this.clock.getElapsedTime()));

        // Check coin collection
        this.checkCoinCollection();

        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Check if character collected any coins
     */
    checkCoinCollection() {
        if (this.gameState.victoryTriggered) return;

        const characterPos = this.character.position;

        this.coins.forEach(coin => {
            if (coin.userData.collected) return;

            // Calculate distance on XZ plane only (ignore Y-axis height difference)
            const dx = characterPos.x - coin.position.x;
            const dz = characterPos.z - coin.position.z;
            const distance = Math.sqrt(dx * dx + dz * dz);

            if (distance < 1.5) {
                coin.userData.collected = true;
                this.scene.remove(coin);
                this.gameState.coinsCollected++;

                if (this.gameState.coinsCollected === this.gameState.totalCoins) {
                    this.gameState.victoryTriggered = true;
                    triggerVictory(this.victoryImage);
                }
            }
        });
    }
}

