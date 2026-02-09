import * as THREE from 'three';
import { COIN } from '../config/constants.js';

/**
 * Create a single coin
 * @param {number} x - X position
 * @param {number} z - Z position
 * @returns {THREE.Mesh} Coin mesh
 */
export function createCoin(x, z) {
    const geometry = new THREE.SphereGeometry(
        COIN.RADIUS,
        COIN.SEGMENTS,
        COIN.SEGMENTS
    );

    const material = new THREE.MeshStandardMaterial({
        color: COIN.COLOR,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0xFFD700,
        emissiveIntensity: 0.2
    });

    const coin = new THREE.Mesh(geometry, material);
    coin.position.set(x, COIN.HEIGHT, z);
    coin.castShadow = true;

    coin.userData = {
        initialY: COIN.HEIGHT,
        collected: false
    };

    return coin;
}

/**
 * Generate heart-shaped positions using parametric equation
 * @returns {Array<{x: number, z: number}>} Array of positions
 */
export function generateHeartPositions() {
    const positions = [];
    const numCoins = COIN.COIN_COUNT;
    const scale = COIN.HEART_SIZE;

    // Parametric heart: x(t) = 16*sin^3(t), y(t) = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)
    for (let i = 0; i < numCoins; i++) {
        const t = (i / numCoins) * Math.PI * 2;
        const x = scale * 0.0625 * 16 * Math.pow(Math.sin(t), 3);
        const z = -scale * 0.0625 * (
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t)
        );
        positions.push({ x, z });
    }

    return positions;
}

/**
 * Animate coin (bobbing and rotation)
 * @param {THREE.Mesh} coin - Coin mesh
 * @param {number} time - Elapsed time in seconds
 */
export function updateCoin(coin, time) {
    if (coin.userData.collected) return;

    coin.position.y = coin.userData.initialY + Math.sin(time * 3) * 0.2;
    coin.rotation.y += COIN.ROTATION_SPEED * 0.016;
}
