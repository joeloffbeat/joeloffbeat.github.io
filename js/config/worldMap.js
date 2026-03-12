/**
 * World map data — 32×32 tile grid, terrain types, sprite pools, entity placements.
 * Pure data module. No rendering or game logic.
 */

export const TERRAIN = {
    GRASS: 'G',
    BRICK: 'B',
    ROCK: 'R',
    WATER: 'W',
    STONES: 'S',
    EDGE: 'E'
};

/** Tiles that block character movement */
export const NON_WALKABLE = new Set([TERRAIN.WATER, TERRAIN.STONES, TERRAIN.EDGE]);

/**
 * 32×32 tile map. Each character = terrain type from TERRAIN enum.
 * Top-left = isometric north. 2-tile edge border forms the floating island boundary.
 */
export const WORLD_MAP = [
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    'EERRRRRGGGGGGGGGGGGGGGGGGGGGRREE',
    'EERRGGGGGGGGGGGGGGGGGGGGGGGGRREE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGRRRRREE',
    'EEGGGGGGGGGGGGGGGGGGGGGGRRRRRREE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGRRRRGEE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE',
    'EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE',
    'EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE',
    'EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE',
    'EEGGGGGGGGBBBBBBBGGGGSSSSWWWGGEE',
    'EEGGGGGGGGBBBBBBBGGGSSWWWWWWWGEE',
    'EEGGGGGGGGBBBBBBBGGSWWWWWWWWSGEE',
    'EEGGGGGGGGGGGGGGGGGSWWWWWWWWSGEE',
    'EEGGGGGGGGGGGGGGGGSWWWWWWWWWSGEE',
    'EEGGGGGGGGGGGGGGGGSSWWWWWWWSSGEE',
    'EEGGGGGGGGGGGGGGGGGGSSSWWSSGGGEE',
    'EEGGGGGGGGGGGGGGGGGGGGSSSGGGGGEE',
    'EEGGGGGGBBBBBBBBBBGGGGGGGGGGGGEE',
    'EEGGGGGGBBBBBBBBBBBGGGGGGGGGGGEE',
    'EEGGGGGGGBBBBBBBBBBGGGGGGGGGGGEE',
    'EEGGGGGGGBBBBBBBBGGGGGGGGGGGGGEE',
    'EEGGGGGGGGGBBBBBGGGGGGGGGGGGGREE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGGGRRGEE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGGRRRGEE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE',
    'EERRGGGGGGGGGGGGGGGGGGGGGGGGGREE',
    'EERRGGGGGGGGGGGGGGGGGGGGGGGGRREE',
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
];

// --- Sprite Pools (all .png files per directory) ---

function grassPaths() {
    const ids = [22,23,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    return ids.map(n => `/assets/grass/tile_${String(n).padStart(3,'0')}.png`);
}

function brickPaths() {
    const ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,25,26];
    return ids.map(n => `/assets/brick/tile_${String(n).padStart(3,'0')}.png`);
}

function rockPaths() {
    const ids = [53,54,55,56,57,58,59,60];
    return ids.map(n => `/assets/rock/tile_${String(n).padStart(3,'0')}.png`);
}

function waterPaths() {
    const ids = [];
    for (let i = 86; i <= 114; i++) ids.push(i);
    return ids.map(n => `/assets/water/tile_${String(n).padStart(3,'0')}.png`);
}

function stonesPaths() {
    const ids = [];
    for (let i = 61; i <= 81; i++) ids.push(i);
    return ids.map(n => `/assets/stones_on_water/tile_${String(n).padStart(3,'0')}.png`);
}

export const TILE_POOLS = {
    [TERRAIN.GRASS]: grassPaths(),
    [TERRAIN.BRICK]: brickPaths(),
    [TERRAIN.ROCK]: rockPaths(),
    [TERRAIN.WATER]: waterPaths(),
    [TERRAIN.STONES]: stonesPaths(),
    [TERRAIN.EDGE]: brickPaths(), // reused, drawn with alpha=0.7
};

// --- Entity Placement Configs ---

const TILE_SIZE = 3;
function tileToWorld(col, row) {
    return { x: (col - 16) * TILE_SIZE, z: (row - 16) * TILE_SIZE };
}

export const ENTITY_PLACEMENTS = [
    {
        id: 'bookshelf',
        spritePath: '/assets/book_shelf.png',
        tileCol: 5, tileRow: 3,
        ...tileToWorld(5, 3),
        scale: { x: 7, y: 8, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 3, d: 2, h: 8 },
        overlayId: 'books-overlay',
        label: 'Bookshelf',
        description: 'Books & Movies',
        icon: '\u{1F4DA}',
    },
    {
        id: 'server',
        spritePath: '/assets/server.png',
        tileCol: 10, tileRow: 3,
        ...tileToWorld(10, 3),
        scale: { x: 6, y: 8, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 2, d: 2, h: 8 },
        overlayId: 'blog-overlay',
        label: 'Server',
        description: 'Tech Blog',
        icon: '\u{1F5A5}\uFE0F',
    },
    {
        id: 'rockart',
        spritePath: '/assets/rock_art.png',
        tileCol: 26, tileRow: 5,
        ...tileToWorld(26, 5),
        scale: { x: 8, y: 6, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 4, d: 3, h: 6 },
        overlayId: 'art-overlay',
        label: 'Rock Art',
        description: 'Art Gallery',
        icon: '\u{1F3A8}',
    },
    {
        id: 'workbench',
        spritePath: '/assets/workbench.png',
        tileCol: 13, tileRow: 10,
        ...tileToWorld(13, 10),
        scale: { x: 8, y: 5, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 4, d: 2, h: 5 },
        overlayId: 'projects-overlay',
        label: 'Workbench',
        description: 'Projects',
        icon: '\u{1F527}',
    },
    {
        id: 'musicplayer',
        spritePath: '/assets/music_player.png',
        tileCol: 18, tileRow: 14,
        ...tileToWorld(18, 14),
        scale: { x: 6, y: 7, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 2, d: 2, h: 7 },
        overlayId: 'music-overlay',
        label: 'Gramophone',
        description: 'Music & Playlists',
        icon: '\u{1F3B5}',
    },
    {
        id: 'contact',
        spritePath: '/assets/contact.png',
        tileCol: 7, tileRow: 15,
        ...tileToWorld(7, 15),
        scale: { x: 6, y: 8, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 2, d: 2, h: 8 },
        overlayId: 'contact-overlay',
        label: 'Birdhouse',
        description: 'Contact Info',
        icon: '\u{1F426}',
    },
    {
        id: 'car',
        spritePath: '/assets/car.png',
        tileCol: 11, tileRow: 20,
        ...tileToWorld(11, 20),
        scale: { x: 22.5, y: 13.5, z: 1 },
        triggerRadius: 15,
        collisionBox: { w: 8, d: 12, h: 12 },
        overlayId: 'travel-overlay',
        label: "Joel's Car",
        description: 'Travel Plans',
        icon: '\u{1F697}',
    },
];
