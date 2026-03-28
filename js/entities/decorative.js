import * as THREE from 'three';
import { SPRITE_ROTATION_X } from '../config/constants.js';

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
            default:
                console.warn(`[decorative] Unknown animation type: "${anim.type}" on "${dec.config.id}"`);
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

// ---------------------------------------------------------------------------
// Fireflies — programmatic CanvasTexture, phase-driven visibility
// ---------------------------------------------------------------------------

const FIREFLY_COUNT = 14;
let _fireflies = [];

function _makeFireflyTexture() {
    const size = 16;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0,   'rgba(255, 255, 180, 1)');
    grad.addColorStop(0.4, 'rgba(200, 255, 100, 0.6)');
    grad.addColorStop(1,   'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.LinearFilter;
    return tex;
}

export function createFireflies(scene) {
    const tex = _makeFireflyTexture();
    _fireflies = [];

    for (let i = 0; i < FIREFLY_COUNT; i++) {
        const geo = new THREE.PlaneGeometry(0.9, 0.9);
        const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            opacity: 0,
        });
        const mesh = new THREE.Mesh(geo, mat);

        // Random start position in grass area (world center ±30 units)
        const x = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 60;
        const y = 2 + Math.random() * 4; // hover 2-6 units above ground
        mesh.position.set(x, y, z);
        mesh.rotation.x = SPRITE_ROTATION_X;

        const ff = {
            mesh,
            baseY: y,
            phase: Math.random() * Math.PI * 2,
            driftX: (Math.random() - 0.5) * 0.3,
            driftZ: (Math.random() - 0.5) * 0.3,
            wrapMin: -30,
            wrapMax:  30,
        };
        _fireflies.push(ff);
        scene.add(mesh);
    }
}

export function updateFireflies(elapsed, phase) {
    // Target opacity: 1 at night/evening, 0 at day, 0.4 at dawn/dusk
    const targetOpacity = (phase === 'night' || phase === 'evening') ? 1.0
                        : (phase === 'dawn'  || phase === 'dusk')    ? 0.35 : 0.0;

    for (const ff of _fireflies) {
        // Hover bob
        ff.mesh.position.y = ff.baseY + Math.sin(elapsed * 1.2 + ff.phase) * 0.6;

        // Drift
        ff.mesh.position.x += ff.driftX * 0.016;
        ff.mesh.position.z += ff.driftZ * 0.016;

        // Wrap within bounds
        if (ff.mesh.position.x > ff.wrapMax) ff.mesh.position.x = ff.wrapMin;
        if (ff.mesh.position.x < ff.wrapMin) ff.mesh.position.x = ff.wrapMax;
        if (ff.mesh.position.z > ff.wrapMax) ff.mesh.position.z = ff.wrapMin;
        if (ff.mesh.position.z < ff.wrapMin) ff.mesh.position.z = ff.wrapMax;

        // Fade opacity toward target
        const cur = ff.mesh.material.opacity;
        ff.mesh.material.opacity = cur + (targetOpacity - cur) * 0.008;
    }
}
