import * as THREE from 'three';
import { ASSETS } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();

/**
 * Create a flag pole as a Sprite using `assets/tvk_flag.png`.
 * @returns {THREE.Sprite}
 */
export function createFlagPole() {
    const tex = textureLoader.load(
        ASSETS.FLAG_SPRITE,
        (t) => {
            t.magFilter = THREE.NearestFilter;
            t.minFilter = THREE.NearestFilter;
        },
        undefined,
        (err) => console.error('Error loading flag sprite:', err)
    );

    const material = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        alphaTest: 0.5,
        color: 0x999999 // Match scene lighting tone
    });
    const sprite = new THREE.Sprite(material);

    // Anchor bottom-center so the flag sits on the ground
    sprite.center.set(0, 0.1);

    sprite.scale.set(10, 15, 1);

    sprite.position.set(0, 0, 0);

    return sprite;
}
