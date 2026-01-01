/**
 * Application Constants and Configuration
 */

export const LIGHTING = {
    AMBIENT_INTENSITY: 0.6,
    DIRECTIONAL_INTENSITY: 0.6,
    DIRECTIONAL_POSITION: { x: 20, y: 30, z: 10 },
    SHADOW_MAP_SIZE: 2048,
    SHADOW_CAMERA_BOUNDS: {
        top: 50,
        bottom: -50,
        left: -50,
        right: 50,
        near: 0.1,
        far: 200
    }
};

export const CAMERA = {
    ISOMETRIC_DISTANCE: 40,
    VIEW_SIZE: 30,
    NEAR: 1,
    FAR: 1000,
    INSIDE_POSITION: { x: 0, y: 25, z: 0 }
};

export const SCENE = {
    BACKGROUND_COLOR: 0x000000, // black
    INITIAL_BACKGROUND: 0x5B8B59
};

export const CHARACTER = {
    INITIAL_POSITION: { x: 0, y: 1, z: 11 },
    SCALE: { x: 2, y: 2, z: 1 },
    SPEED: 0.15,
    BOBBING: {
        BASE_HEIGHT: 2,
        SPEED: 5,
        AMOUNT: 0.01
    },
    ANIMATIONS: {
        // Sprite sheet uses 3 rows (frames per direction). Keep frames=3.
        idle: { frames: 1, duration: 8, frameIndices: [1]},
        walk: { frames: 3, duration: 8, frameIndices: [0, 1, 2]}
    }
};

export const GROUND = {
    SIZE: { width: 100, height: 100 },
    TEXTURE_REPEAT: { x: 100, y: 100 },
    // World units per texture tile. Increase to make each tile larger in world space.
    TILE_SIZE: 4
};

export const RENDERER = {
    SHADOW_TYPE: 'PCFSoftShadowMap',
    ENABLE_SHADOWS: true
};

export const CONTROLS = {
    ENABLE_ROTATE: false,
    ENABLE_DAMPING: true,
    DAMPING_FACTOR: 0.1,
    SCREEN_SPACE_PANNING: false,
    MOUSE_BUTTONS: {
        LEFT: null,
        MIDDLE: 0, // THREE.MOUSE.DOLLY
        RIGHT: 2  // THREE.MOUSE.PAN
    }
};

export const ASSETS = {
    // Point to the local `js/assets/` files so Vite can resolve and copy them during dev/build
    GRASS_TEXTURE: new URL('../assets/grass.png', import.meta.url).href,
    CHARACTER_SPRITE: new URL('../assets/character.png', import.meta.url).href,
    CAR_SPRITE: new URL('../assets/car.png', import.meta.url).href
};


