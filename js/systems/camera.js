import * as THREE from 'three';
import { CAMERA } from '../config/constants.js';

/**
 * Create isometric orthographic camera
 * @returns {THREE.OrthographicCamera} Configured camera
 */
export function createCamera() {
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
        -CAMERA.VIEW_SIZE * aspect,
        CAMERA.VIEW_SIZE * aspect,
        CAMERA.VIEW_SIZE,
        -CAMERA.VIEW_SIZE,
        CAMERA.NEAR,
        CAMERA.FAR
    );
    
    // Camera sits on the Z axis (x=0) so the diamond's north vertex points
    // straight up on screen (12 o'clock) matching the reference orientation.
    // Y/Z ratio of 2.0/0.85 (~67°) gives a flat, surface-dominant view like the reference.
    const d = CAMERA.ISOMETRIC_DISTANCE;
    camera.position.set(0, d * 2.0, d * 0.85);
    
    // Ensure camera looks at the origin to maintain isometric perspective
    camera.lookAt(0, 0, 0);
    
    return camera;
}

