import * as THREE from 'three';
import { ASSETS, STATUE_CONFIG } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();

/**
 * Create a statue sprite
 * @param {string} assetKey - Key in ASSETS for the statue texture
 * @param {string} label - Display label for proximity popup
 * @returns {THREE.Sprite}
 */
export function createStatue(assetKey, label) {
    const tex = textureLoader.load(
        ASSETS[assetKey],
        (t) => {
            t.magFilter = THREE.NearestFilter;
            t.minFilter = THREE.NearestFilter;
        },
        undefined,
        (err) => console.error(`Error loading statue sprite (${label}):`, err)
    );

    const material = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        alphaTest: 1,
        color: 0x999999
    });
    const sprite = new THREE.Sprite(material);

    sprite.center.set(0.5, 0);
    if (assetKey === 'STATUE_HAMPI') {
    sprite.scale.set(9,12, STATUE_CONFIG.SCALE.z);
    }
    else{
        sprite.scale.set(STATUE_CONFIG.SCALE.x, STATUE_CONFIG.SCALE.y, STATUE_CONFIG.SCALE.z);
    }
    sprite.userData = { label };

    return sprite;
}
