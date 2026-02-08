import * as THREE from 'three';
import {
    LIGHTING,
    SCENE
} from '../config/constants.js';

/**
 * Setup Three.js scene with lighting
 * @returns {Object} Scene setup with scene, ambientLight, and directionalLight
 */
export function setupScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(SCENE.INITIAL_BACKGROUND);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(
        0xffffff,
        LIGHTING.AMBIENT_INTENSITY
    );
    scene.add(ambientLight);

    // Directional Light (Sun)
    const directionalLight = new THREE.DirectionalLight(
        0xffffff,
        LIGHTING.DIRECTIONAL_INTENSITY
    );
    directionalLight.position.set(
        LIGHTING.DIRECTIONAL_POSITION.x,
        LIGHTING.DIRECTIONAL_POSITION.y,
        LIGHTING.DIRECTIONAL_POSITION.z
    );
    directionalLight.castShadow = true;
    
    // Shadow configuration
    const shadowBounds = LIGHTING.SHADOW_CAMERA_BOUNDS;
    directionalLight.shadow.camera.top = shadowBounds.top;
    directionalLight.shadow.camera.bottom = shadowBounds.bottom;
    directionalLight.shadow.camera.left = shadowBounds.left;
    directionalLight.shadow.camera.right = shadowBounds.right;
    directionalLight.shadow.camera.near = shadowBounds.near;
    directionalLight.shadow.camera.far = shadowBounds.far;
    directionalLight.shadow.mapSize.width = LIGHTING.SHADOW_MAP_SIZE;
    directionalLight.shadow.mapSize.height = LIGHTING.SHADOW_MAP_SIZE;
    
    scene.add(directionalLight);

    return { scene, ambientLight, directionalLight };
}

