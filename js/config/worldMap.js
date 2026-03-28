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
    EDGE: 'E',
    VOID: 'V',  // outside the playable area — not rendered, not walkable
};

/** Tiles that block character movement */
export const NON_WALKABLE = new Set([TERRAIN.WATER, TERRAIN.STONES, TERRAIN.EDGE, TERRAIN.VOID]);

/**
 * 32×32 tile map. Each character = terrain type from TERRAIN enum.
 * Top-left = isometric north. 2-tile edge border forms the floating island boundary.
 */
export const WORLD_MAP = [
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    'EERRRRRGGGGGGGGGGGGBBBBBBBBBRREE',
    'EERRGGGGGGGGGGGGGGGGBBBBBBBBBREE',
    'EEGGGGGGGGGGGGGGGGBGGBBBBBBBBBEE',
    'EEGGGGGGGGGGGGGGGGGBBBBBBBBBBBEE',
    'EEGGGGGGGGGGGGGGGGGGGGGGGBBBBGEE',
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
    'EEGGGGGGGBBBBBBBBBBGGGBBGBBBGGEE',
    'EEGGGGGGGBBBBBBBBBBBBBBBBBBBBBEE',
    'EEGGGGGGGGGBBBBBGGGGGGBGGBGGBREE',
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
    const ids = [22,23,24,37,38,39];
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
    for (let i = 104; i <= 114; i++) ids.push(i);
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
    [TERRAIN.EDGE]: rockPaths(), // drawn with alpha=0.7
};

// --- Entity Placement Configs ---

// Isometric tile-to-world mapping.
// Canvas pos: cx=(col-row)*32+1024, cy=(col+row)*16+528
// Canvas→world: worldCoord = (canvasCoord - 1024) * 158.4/2048
export function tileToWorld(col, row) {
    return {
        x: (col - row) * 2.475,
        z: (col + row) * 1.2375 - 38.3625
    };
}

export const ENTITY_PLACEMENTS = [
    {
        id: 'bookshelf',
        spritePath: '/assets/book_shelf.png',
        tileCol: 3, tileRow: 6,
        ...tileToWorld(3, 6),
        scale: { x: 15, y: 12, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 11, d: 3, h: 8 },
        overlayId: 'books-overlay',
        label: 'Bookshelf',
        description: 'Books & Movies',
        icon: '\u{1F4DA}',
    },
    {
        id: 'server',
        spritePath: '/assets/server.png',
        tileCol: 15, tileRow: 4,
        ...tileToWorld(15, 4),
        scale: { x: 10, y: 8, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 8, d: 4, h: 7 },
        overlayId: 'blog-overlay',
        label: 'Server',
        description: 'Tech Blog',
        icon: '\u{1F5A5}\uFE0F',
    },
    {
        id: 'rockart',
        spritePath: '/assets/rock_art.png',
        tileCol: 25, tileRow: 5,
        ...tileToWorld(25, 5),
        scale: { x: 10, y: 10, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 8, d: 4, h: 5 },
        overlayId: 'art-overlay',
        label: 'Rock Art',
        description: 'Art Gallery',
        icon: '\u{1F3A8}',
    },
    {
        id: 'workbench',
        spritePath: '/assets/workbench.png',
        tileCol: 15, tileRow: 12,
        ...tileToWorld(15, 12),
        scale: { x: 12, y: 12, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 12, d: 5, h: 6 },
        overlayId: 'projects-overlay',
        label: 'Workbench',
        description: 'Projects',
        icon: '\u{1F527}',
    },
    {
        id: 'musicplayer',
        spritePath: '/assets/music_player.png',
        tileCol: 25, tileRow: 25,
        ...tileToWorld(25, 25),
        scale: { x: 5, y: 4, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 4, d: 3, h: 4 },
        overlayId: 'music-overlay',
        label: 'Gramophone',
        description: 'Music & Playlists',
        icon: '\u{1F3B5}',
    },
    {
        id: 'contact',
        spritePath: '/assets/contact.png',
        tileCol: 4, tileRow: 28,
        ...tileToWorld(4, 28),
        scale: { x: 12, y: 12, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 7, d: 3, h: 10 },
        overlayId: 'contact-overlay',
        label: 'Birdhouse',
        description: 'Contact Info',
        icon: '\u{1F426}',
    },
    {
        id: 'home',
        spritePath: '/assets/home.png',
        tileCol: 17, tileRow: 24,
        ...tileToWorld(17, 24),
        scale: { x: 18, y: 16, z: 1 },
        triggerRadius: 10,
        collisionBox: { w: 10, d: 8, h: 10, zCenter: -4 },
        overlayId: 'home-overlay',
        label: 'Home',
        description: 'Home',
        icon: '\u{1F3E0}',
    },
    {
        id: 'now-board',
        spritePath: '/assets/bulletin_board.png',
        tileCol: 19, tileRow: 10,
        ...tileToWorld(19, 10),
        scale: { x: 8, y: 9, z: 1 },
        triggerRadius: 8,
        collisionBox: { w: 6, d: 3, h: 7 },
        overlayId: 'now-overlay',
        label: 'Bulletin Board',
        description: "What Joel's up to now",
        icon: '📌',
    },
    {
        id: 'signpost',
        spritePath: '/assets/signpost.png',
        tileCol: 9, tileRow: 15,
        ...tileToWorld(9, 15),
        scale: { x: 5, y: 7, z: 1 },
        triggerRadius: 7,
        collisionBox: { w: 4, d: 2, h: 6 },
        overlayId: 'start-overlay',
        label: 'Signpost',
        description: 'A message for you',
        icon: '🔥',
    },
    {
        id: 'car',
        spritePath: '/assets/car.png',
        tileCol: 11, tileRow: 20,
        ...tileToWorld(11, 20),
        scale: { x: 22.5, y: 13.5, z: 1 },
        triggerRadius: 15,
        collisionBox: { w: 12, d: 7, h: 7 },
        overlayId: 'travel-overlay',
        label: "Joel's Car",
        description: 'Travel Plans',
        icon: '\u{1F697}',
    },
];

export const OBJECT_LAYERS = [
    {
        type: TERRAIN.ROCK,
        height: 3,
        map: [
            'XXXXRXXXXXXXXXXXXXXXXXXXXXXRXXXX', // row 0
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 1
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 2
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 3
            'RXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXR', // row 4
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 5
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 6
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 7
            'RXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXR', // row 8
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 9
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 10
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 11
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 12
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 13
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 14
            'RXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXR', // row 15
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 16
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 17
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 18
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 19
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 20
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 21
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 22
            'RXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXR', // row 23
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 24
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 25
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 26
            'RXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXR', // row 27
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 28
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 29
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // row 30
            'XXXXRXXXXXXXXXXXXXXXXXXXXXXRXXXX', // row 31
        ]
    }
];

// --- Decorative Placements (non-interactive, animated world objects) ---
// Positions are direct world coordinates — not tile-based — so objects can be
// placed in the void outside the tile grid.

export const DECORATIVE_PLACEMENTS = [
    {
        id: 'ship',
        spritePath: '/assets/ship.png',
        position: { x: 40, y: 10, z: -20 }, // northwest void — same west side as bookshelf (tile 3,6 = world -7,−27), further north
        scale: { x: 40, y: 32 },
        animation: { type: 'hover', amplitude: 1.5, speed: 1.2 },
    },
];
