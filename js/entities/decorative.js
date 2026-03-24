import * as THREE from 'three';
import { CAMERA } from '../config/constants.js';

// Same fixed tilt as InteractiveEntity — both face the same camera angle.
const SPRITE_ROTATION_X = -Math.atan2(
    CAMERA.ISOMETRIC_DISTANCE * 2.0,
    CAMERA.ISOMETRIC_DISTANCE * 0.85
);

const textureLoader = new THREE.TextureLoader();

function loadTexture(src) {
    return new Promise((resolve, reject) => {
        textureLoader.load(src, resolve, undefined, reject);
    });
}

/**
 * Load and build meshes for all decorative configs.
 * Returns array of { mesh, config, baseY }.
 * Caller is responsible for adding each mesh to the scene.
 */
export async function createDecoratives(configs) {
    const decoratives = [];
    for (const config of configs) {
        const texture = await loadTexture(config.spritePath);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        const geometry = new THREE.PlaneGeometry(config.scale.x, config.scale.y);
        geometry.translate(0, config.scale.y / 2, 0);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = SPRITE_ROTATION_X;
        mesh.position.set(config.position.x, config.position.y, config.position.z);

        decoratives.push({ mesh, config, baseY: config.position.y });
    }
    return decoratives;
}

/**
 * Per-frame animation update.
 * @param {Array}  decoratives - Array returned by createDecoratives
 * @param {number} elapsed     - Total elapsed time in seconds (clock.getElapsedTime())
 */
export function updateDecoratives(decoratives, elapsed) {
    for (const dec of decoratives) {
        const anim = dec.config.animation;
        if (!anim) continue;

        switch (anim.type) {
            case 'hover':
                dec.mesh.position.y = dec.baseY + Math.sin(elapsed * anim.speed) * anim.amplitude;
                break;
        }
    }
}

/**
 * Release GPU resources for all decorative meshes.
 * Call when tearing down the scene.
 */
export function disposeDecoratives(decoratives) {
    for (const dec of decoratives) {
        dec.mesh.geometry.dispose();
        dec.mesh.material.map?.dispose();
        dec.mesh.material.dispose();
    }
}
