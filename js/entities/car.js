import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { ASSETS } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();

/**
 * Create a car as a Sprite using `assets/car.png`.
 * @returns {THREE.Sprite}
 */
export function createCar() {
    const tex = textureLoader.load(
        ASSETS.CAR_SPRITE,
        (t) => {
            t.magFilter = THREE.NearestFilter;
            t.minFilter = THREE.NearestFilter;
        },
        undefined,
        (err) => console.error('Error loading car sprite:', err)
    );

    const material = new THREE.SpriteMaterial({ map: tex, transparent: true, alphaTest: 0.5 });
    const sprite = new THREE.Sprite(material);

    // Anchor bottom-center of the sprite to the world position so the car sits on the ground
    sprite.center.set(0.5, 0);

    // Sensible default scale: width x, height y.
    sprite.scale.set(15, 9, 1);

    // Place on ground (bottom of sprite at y=0)
    sprite.position.set(0, 0, 0);

    return sprite;
}
