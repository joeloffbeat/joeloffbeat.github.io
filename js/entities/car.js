import * as THREE from 'three';
import { ASSETS, CAR } from '../config/constants.js';

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

    const material = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        alphaTest: 0.5
    });
    const sprite = new THREE.Sprite(material);

    sprite.center.set(0.5, 0);
    sprite.scale.set(CAR.SCALE.x, CAR.SCALE.y, CAR.SCALE.z);

    return sprite;
}