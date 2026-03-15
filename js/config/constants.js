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
        top: 80, bottom: -80,
        left: -80, right: 80,
        near: 0.1, far: 300
    }
};

export const CAMERA = {
    ISOMETRIC_DISTANCE: 60,
    VIEW_SIZE: 45,
    NEAR: 1,
    FAR: 1000
};

export const SCENE = {
    BACKGROUND_COLOR: 0x0a0a0f
};

export const CHARACTER = {
    INITIAL_POSITION: { x: 0, y: 1, z: 3 },
    SCALE: { x: 4, y: 4, z: 3 },
    SPEED: 13.2,  // world-units per second (was 0.22/frame @ 60fps)
    DASH_MULTIPLIER: 2,
    COLLISION_RADIUS: 1.5,
    BOBBING: { BASE_HEIGHT: 2, SPEED: 5, AMOUNT: 0.01 },
    ANIMATIONS: {
        idle: { frames: 1, duration: 8, frameIndices: [1] },
        walk: { frames: 3, duration: 8, frameIndices: [0, 1, 2] }
    }
};

export const GROUND = {
    WIDTH: 144,
    HEIGHT: 144,
    TILE_SIZE: 4.5,
    GRID: 32,
    CANVAS_SIZE: 2048,
    SIDE_WALL_DEPTH: 30
};

export const RENDERER = {
    SHADOW_TYPE: 'PCFSoftShadowMap',
    ENABLE_SHADOWS: true,
    TONE_MAPPING_EXPOSURE: 0.7
};

export const CONTROLS = {
    ENABLE_ROTATE: false,
    ENABLE_DAMPING: true,
    DAMPING_FACTOR: 0.1,
    SCREEN_SPACE_PANNING: false,
    MOUSE_BUTTONS: { LEFT: null, MIDDLE: 0, RIGHT: 2 }
};

export const ASSETS = {
    CHARACTER_SPRITE: '/assets/character.png'
};

export const INTERACTION = {
    HYSTERESIS_DISTANCE: 2,
    TOAST_FADE_DURATION: 0.3
};

export const WATER_ANIMATION = {
    CYCLE_INTERVAL: 500 // ms between water frame changes
};

export const TRAIL = {
    SPAWN_INTERVAL: 0.05,
    LIFETIME: 0.45,
    INITIAL_OPACITY: 0.65,
    ALPHA_TEST: 0.05,    // must stay below INITIAL_OPACITY to avoid discarding ghost body pixels
};

export const IS_TOUCH_DEVICE = 'ontouchstart' in window;
