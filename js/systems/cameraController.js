import * as THREE from 'three';

let _orbitControls = null;
let _character = null;
const _targetVec = new THREE.Vector3();

/**
 * Store references needed for camera follow.
 * Called once during App.init().
 */
export function setupCameraController(camera, controls, character) {
    _orbitControls = controls;
    _character = character;
}

/**
 * Per-frame camera follow update.
 * Must be called BEFORE orbitControls.update() so damping applies
 * against the freshly lerped target in the same frame.
 *
 * @param {number} delta - seconds since last frame
 */
export function updateCamera(delta) {
    if (!_orbitControls || !_character) return;
    // Frame-rate independent lerp: 1 - 0.92^(delta*60)
    // At 60fps → t ≈ 0.08; at 30fps → t ≈ 0.15 (same convergence curve)
    const t = 1 - Math.pow(0.92, delta * 60);
    _targetVec.set(_character.position.x, 0, _character.position.z);
    _orbitControls.target.lerp(_targetVec, t);
}
