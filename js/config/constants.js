/**
 * Centralized configuration for the application.
 * All tunable values live here so they can be adjusted in one place.
 */

export const LIGHTING = {
    AMBIENT_INTENSITY: 1,
    DIRECTIONAL_INTENSITY: 1,
    DIRECTIONAL_POSITION: { x: 20, y: 30, z: 10 },
    SHADOW_MAP_SIZE: 2048,
    SHADOW_CAMERA_BOUNDS: {
        top: 50, bottom: -50,
        left: -50, right: 50,
        near: 0.1, far: 200
    }
};

export const CAMERA = {
    ISOMETRIC_DISTANCE: 40,
    VIEW_SIZE: 30,
    NEAR: 1,
    FAR: 1000
};

export const SCENE = {
    BACKGROUND_COLOR: 0x111111
};

export const CHARACTER = {
    INITIAL_POSITION: { x: 0, y: 1, z: 11 },
    SCALE: { x: 4, y: 4, z: 3 },
    SPEED: 0.15,
    DASH_MULTIPLIER: 2,
    COLLISION_RADIUS: 1.5,
    BOBBING: { BASE_HEIGHT: 2, SPEED: 5, AMOUNT: 0.01 },
    ANIMATIONS: {
        idle: { frames: 1, duration: 8, frameIndices: [1] },
        walk: { frames: 3, duration: 8, frameIndices: [0, 1, 2] }
    }
};

export const GROUND = {
    WIDTH: 100,
    HEIGHT: 100,
    TILE_SIZE: 4,
    CANVAS_SIZE: 2048
};

export const RENDERER = {
    SHADOW_TYPE: 'PCFSoftShadowMap',
    ENABLE_SHADOWS: true,
    TONE_MAPPING_EXPOSURE: 0.3
};

export const CONTROLS = {
    ENABLE_ROTATE: false,
    ENABLE_DAMPING: true,
    DAMPING_FACTOR: 0.1,
    SCREEN_SPACE_PANNING: false,
    MOUSE_BUTTONS: { LEFT: null, MIDDLE: 0, RIGHT: 2 }
};

export const ASSETS = {
    CHARACTER_SPRITE: '/assets/character.png',
    CAR_SPRITE: '/assets/car.png',
    GRASS_SPRITES: [
        '/assets/grass_sprites/grass_0.png',
        '/assets/grass_sprites/grass_1.png',
        '/assets/grass_sprites/grass_2.png'
    ],
    WATER_SPRITES: [
        '/assets/water_sprites/water_0.png'
    ],
    TILE_SPRITES: [
        '/assets/tile_sprites/tile_0.png',
        '/assets/tile_sprites/tile_1.png',
        '/assets/tile_sprites/tile_2.png'
    ]
};

export const CAR = {
    POSITION: { x: 50, y: 0, z: 0 },
    SCALE: { x: 22.5, y: 13.5, z: 1 },
    COLLISION: { width: 8, depth: 12, height: 12, padding: 2 },
    POPUP_DISTANCE: 15
};

export const OCEAN = {
    START_COL: 15,
    START_ROW: 15
};

export const WATER = {
    BLOCK_ENTRY: true
};

export const TRAIL = {
    SPAWN_INTERVAL: 0.05,
    LIFETIME: 0.3,
    INITIAL_OPACITY: 0.3
};
