import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { GROUND, ASSETS } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();

/**
 * Create ground plane with grass texture
 * @returns {THREE.Mesh} Ground mesh
 */
export function createGround() {
    let grassTexture = textureLoader.load(
            ASSETS.GRASS_TEXTURE,
            (tex) => {
                tex.magFilter = THREE.NearestFilter;
            },
            undefined,
            (error) => console.error('Error loading grass texture:', error)
        );

    // Configure the texture to repeat
    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;
    // Set how many times the texture should repeat across the plane (e.g., 50x50 times)
    grassTexture.repeat.set(15, 15);

    // Define the size of the ground plane
    const groundWidth = 100;
    const groundHeight = 100;

    const groundGeometry = new THREE.PlaneGeometry(groundWidth, groundHeight);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        map: grassTexture
    });

    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);

    // Rotate the plane to lie flat on the ground (default is upright in the XZ plane)
    groundMesh.rotation.x = -Math.PI / 2;

    // Ensure it can receive shadows if you have lighting in your scene
    groundMesh.receiveShadow = true;

    
    return groundMesh;
}

