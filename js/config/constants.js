/**
 * Application Constants and Configuration
 */

export const LIGHTING = {
    AMBIENT_INTENSITY: 0,
    DIRECTIONAL_INTENSITY: 1,
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
    BACKGROUND_COLOR: 0x111111, // Sky blue
    INITIAL_BACKGROUND: 0x87CEEB
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
    GRASS_TEXTURE: '/assets/grass.png',
    CHARACTER_SPRITE: '/assets/character.png',
    CAR_SPRITE: '/assets/car.png',
    FLAG_SPRITE: '/assets/tvk_flag.png',
    STATUE_VARKALA: '/assets/varkala_shirley.png',
    STATUE_HAMPI: '/assets/hampi_shirley.png',
    STATUE_PONDY: '/assets/pondy_shirley.png'
};

export const STATUES = [
    { asset: 'STATUE_VARKALA', label: 'Varkala', x: -20, z: 35 },
    { asset: 'STATUE_HAMPI',   label: 'Hampi',   x: 0,   z: 40 },
    { asset: 'STATUE_PONDY',   label: 'Pondy',   x: 20,  z: 35 }
];

export const STATUE_CONFIG = {
    SCALE: { x: 6, y: 10, z: 1 },
    POPUP_DISTANCE: 8 // How close the character needs to be
};

export const COIN = {
    RADIUS: 0.5,
    SEGMENTS: 8, // Low poly for pixel look
    COLOR: 0xFFEF0F, // Gold
    COLLECTION_DISTANCE: 1.5,
    HEART_SIZE: 20, // Scale of heart shape
    COIN_COUNT: 40, // Number of coins
    HEIGHT: 0.5, // Height above ground
    ROTATION_SPEED: 2 // Radians per second
};

export const VICTORY = {
    IMAGE_SIZE: { width: 50, height: 50 },
    IMAGE_PATH: '/assets/valentine.png',
    TEXT_CONTENT: 'Will you be my valentine?',
    DISPLAY_DELAY: 500 // ms
};
