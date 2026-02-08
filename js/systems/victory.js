import * as THREE from 'three';
import { VICTORY } from '../config/constants.js';

/**
 * Create victory image plane
 * @returns {THREE.Mesh} Victory image mesh
 */
export function createVictoryImage() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
        VICTORY.IMAGE_PATH,
        (tex) => {
            tex.magFilter = THREE.NearestFilter;
            tex.minFilter = THREE.NearestFilter;
        },
        undefined,
        (error) => console.error('Error loading victory image:', error)
    );

    const geometry = new THREE.PlaneGeometry(
        VICTORY.IMAGE_SIZE.width,
        VICTORY.IMAGE_SIZE.height
    );

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        color: 0xBBBBBB // Darken to match scene lighting (removes white cast)
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2; // Lay flat
    plane.position.set(0, 0.1, 0); // Center of map, slightly above ground
    plane.visible = false;

    return plane;
}

/**
 * Show victory HTML overlay
 */
export function showVictoryOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'victory-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 105, 180, 0.95);
        color: white;
        padding: 30px 60px;
        border-radius: 20px;
        font-family: Arial, sans-serif;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: fadeIn 1s ease-out;
    `;

    overlay.textContent = VICTORY.TEXT_CONTENT;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(overlay);
}

/**
 * Trigger victory sequence
 * @param {THREE.Mesh} victoryImage - Victory image mesh
 */
export function triggerVictory(victoryImage) {
    setTimeout(() => {
        victoryImage.visible = true;
        showVictoryOverlay();
    }, VICTORY.DISPLAY_DELAY);
}
