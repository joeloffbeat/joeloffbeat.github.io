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
    
    // Set camera to isometric position (equal x, y, z distances)
    camera.position.set(
        CAMERA.ISOMETRIC_DISTANCE,
        CAMERA.ISOMETRIC_DISTANCE,
        CAMERA.ISOMETRIC_DISTANCE
    );
    
    // Ensure camera looks at the origin to maintain isometric perspective
    camera.lookAt(0, 0, 0);
    
    return camera;
}

