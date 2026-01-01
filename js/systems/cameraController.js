import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { CAMERA } from '../config/constants.js';

let camera, controls, character;
let state = 'outside'; // 'outside' or 'inside'

// Camera positions
const outsideCameraPos = new THREE.Vector3(
    CAMERA.ISOMETRIC_DISTANCE,
    CAMERA.ISOMETRIC_DISTANCE,
    CAMERA.ISOMETRIC_DISTANCE
);

const insideCameraPos = new THREE.Vector3(
    CAMERA.INSIDE_POSITION.x,
    CAMERA.INSIDE_POSITION.y,
    CAMERA.INSIDE_POSITION.z
);

/**
 * Initialize camera controller
 * @param {THREE.OrthographicCamera} cam - Camera instance
 * @param {OrbitControls} ctrl - OrbitControls instance
 * @param {THREE.Sprite} char - Character sprite
 */
export function setupCameraController(cam, ctrl, char) {
    camera = cam;
    controls = ctrl;
    character = char;
}

/**
 * Get current camera state
 * @returns {string} 'outside' or 'inside'
 */
export function getCameraState() {
    return state;
}

/**
 * Switch to inside view
 */
export function switchToInsideView() {
    state = 'inside';
    controls.enabled = false; // Disable orbit controls inside
    camera.position.copy(insideCameraPos);
    camera.lookAt(0, 0, 0);
}

/**
 * Switch to outside view
 */
export function switchToOutsideView() {
    state = 'outside';
    controls.enabled = true;
    camera.position.copy(outsideCameraPos);
    camera.lookAt(0, 0, 0);
}

/**
 * Update camera (called in animation loop)
 */
export function updateCamera() {
    if (state === 'outside') {
        // OrbitControls handles panning and zooming
        // Camera maintains isometric angle through lookAt
    }
    // No camera movement needed for the static inside view
}

