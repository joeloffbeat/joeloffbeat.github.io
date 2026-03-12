# World Overhaul Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the flat grass-and-ocean isometric world into a floating diorama island with data-driven terrain, animated water, 7 interactive assets with proximity-triggered overlays, and pixel-art UI.

**Architecture:** Data-driven 32×32 tile map rendered to a 2048×2048 canvas texture. InteractiveEntity class for all 7 world objects. Toast + overlay system using DOM elements with Press Start 2P pixel-art font. Floating island effect via side-wall meshes.

**Tech Stack:** Three.js v0.182.0, vanilla JS ES modules, Vite, HTML/CSS DOM overlays.

**Spec:** `docs/superpowers/specs/2026-03-12-world-overhaul-design.md`

---

## Chunk 1: Asset Pipeline & World Data

### Task 1: Copy new assets and remove old ones

**Files:**
- Copy: `new_assets/` → `public/assets/` (tile directories + entity sprites)
- Remove: `public/assets/grass_sprites/`, `public/assets/water_sprites/`, `public/assets/tile_sprites/`

- [ ] **Step 1: Copy tile asset directories**

```bash
cp -r new_assets/grass public/assets/grass
cp -r new_assets/brick public/assets/brick
cp -r new_assets/rock public/assets/rock
cp -r new_assets/water public/assets/water
cp -r new_assets/stones_on_water public/assets/stones_on_water
```

- [ ] **Step 2: Copy entity sprite assets**

```bash
cp new_assets/book_shelf.png public/assets/book_shelf.png
cp new_assets/contact.png public/assets/contact.png
cp new_assets/music_player.png public/assets/music_player.png
cp new_assets/rock_art.png public/assets/rock_art.png
cp new_assets/server.png public/assets/server.png
cp new_assets/workbench.png public/assets/workbench.png
```

- [ ] **Step 3: Remove old asset directories**

```bash
rm -rf public/assets/grass_sprites
rm -rf public/assets/water_sprites
rm -rf public/assets/tile_sprites
```

- [ ] **Step 4: Verify asset structure**

```bash
ls public/assets/
# Expected: brick/ car.png character.png contact.png book_shelf.png grass/ music_player.png rock/ rock_art.png server.png stones_on_water/ water/ workbench.png
ls public/assets/grass/ | wc -l   # Expected: 17
ls public/assets/brick/ | wc -l   # Expected: 24
ls public/assets/water/ | wc -l   # Expected: 29
```

- [ ] **Step 5: Commit**

```bash
git add public/assets/ -A
git commit -m "chore: replace old tile assets with new tileset and entity sprites"
```

---

### Task 2: Create world map data module

**Files:**
- Create: `js/config/worldMap.js`

This file contains the 32×32 tile map, terrain enum, sprite pool paths, and entity placement configs. It is pure data — no rendering logic.

- [ ] **Step 1: Create `js/config/worldMap.js`**

```js
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
        icon: '📚',
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
        icon: '🖥️',
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
        icon: '🎨',
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
        icon: '🔧',
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
        icon: '🎵',
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
        icon: '🐦',
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
        icon: '🚗',
    },
];
```

- [ ] **Step 2: Commit**

```bash
git add js/config/worldMap.js
git commit -m "feat: add world map data module with 32x32 tile map and entity placements"
```

---

### Task 3: Update constants.js

**Files:**
- Modify: `js/config/constants.js`

Update world dimensions, remove old configs (OCEAN, CAR, old ASSETS arrays), add new config sections.

- [ ] **Step 1: Rewrite `js/config/constants.js`**

```js
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
    BACKGROUND_COLOR: 0x0a0a0f
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
    WIDTH: 96,
    HEIGHT: 96,
    TILE_SIZE: 3,
    GRID: 32,
    CANVAS_SIZE: 2048,
    SIDE_WALL_DEPTH: 8
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
    LIFETIME: 0.3,
    INITIAL_OPACITY: 0.3
};
```

- [ ] **Step 2: Commit**

```bash
git add js/config/constants.js
git commit -m "feat: update constants for 96x96 world, remove old OCEAN/CAR configs, add interaction settings"
```

---

## Chunk 2: Ground Rewrite & Floating Island

### Task 4: Rewrite ground.js with data-driven tile map and side walls

**Files:**
- Rewrite: `js/entities/ground.js`

Complete rewrite. Reads from `WORLD_MAP`, renders tiles to canvas, creates 4 side wall meshes, exports `updateWater()` for animated water.

- [ ] **Step 1: Rewrite `js/entities/ground.js`**

```js
import * as THREE from 'three';
import { GROUND, WATER_ANIMATION } from '../config/constants.js';
import { WORLD_MAP, TERRAIN, TILE_POOLS } from '../config/worldMap.js';

const TILE_PX = GROUND.CANVAS_SIZE / GROUND.GRID; // 64

// --- Seeded random per tile (deterministic across page loads) ---
function tileRandom(col, row) {
    let h = col * 1000 + row;
    h = ((h >> 16) ^ h) * 0x45d9f3b;
    h = ((h >> 16) ^ h) * 0x45d9f3b;
    h = (h >> 16) ^ h;
    return (h & 0x7fffffff) / 0x7fffffff;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

async function loadImagePools() {
    const pools = {};
    for (const [type, paths] of Object.entries(TILE_POOLS)) {
        pools[type] = await Promise.all(paths.map(loadImage));
    }
    return pools;
}

// --- Top surface ---

function renderTileMap(ctx, pools) {
    const waterTiles = [];

    for (let row = 0; row < GROUND.GRID; row++) {
        for (let col = 0; col < GROUND.GRID; col++) {
            const terrain = WORLD_MAP[row]?.[col] || TERRAIN.EDGE;
            const pool = pools[terrain] || pools[TERRAIN.GRASS];
            const idx = Math.floor(tileRandom(col, row) * pool.length);
            const img = pool[idx];

            const cx = col * TILE_PX;
            const cy = row * TILE_PX;

            // Edge tiles: draw brick with reduced alpha for darker look
            if (terrain === TERRAIN.EDGE) {
                ctx.globalAlpha = 0.7;
            }

            ctx.drawImage(img, cx, cy, TILE_PX, TILE_PX);
            ctx.globalAlpha = 1.0;

            // Track water tiles for animation
            if (terrain === TERRAIN.WATER) {
                const offset = (col * 7 + row * 13) % pool.length;
                waterTiles.push({ cx, cy, offset, currentFrame: offset });
            }
        }
    }

    return waterTiles;
}

// --- Side walls ---

function renderSideWallTexture(pools) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const brickPool = pools[TERRAIN.BRICK] || [];
    const rockPool = pools[TERRAIN.ROCK] || [];
    const tileSize = 32; // draw at source resolution, texture stretches
    const tilesAcross = Math.ceil(2048 / tileSize);

    // Row 0: green tint (grass edge) — top 32px
    ctx.fillStyle = '#3a7d32';
    ctx.fillRect(0, 0, 2048, 32);

    // Rows 1-3: brick tiles — 96px
    for (let row = 1; row <= 3; row++) {
        for (let i = 0; i < tilesAcross; i++) {
            const img = brickPool[Math.floor(tileRandom(i, row + 100) * brickPool.length)];
            if (img) ctx.drawImage(img, i * tileSize, row * tileSize, tileSize, tileSize);
        }
    }

    // Rows 4-6: rock tiles — 96px
    for (let row = 4; row <= 6; row++) {
        for (let i = 0; i < tilesAcross; i++) {
            const img = rockPool[Math.floor(tileRandom(i, row + 200) * rockPool.length)];
            if (img) ctx.drawImage(img, i * tileSize, row * tileSize, tileSize, tileSize);
        }
    }

    // Row 7: dark fill fading to void — 32px
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0, 224, 2048, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
}

function createSideWalls(wallTexture) {
    const walls = [];
    const W = GROUND.WIDTH;
    const D = GROUND.SIDE_WALL_DEPTH;

    const positions = [
        // North wall (top edge, facing south/camera)
        { pos: [0, -D / 2, -W / 2], rot: [0, 0, 0], size: [W, D] },
        // South wall (bottom edge, facing north)
        { pos: [0, -D / 2, W / 2], rot: [0, Math.PI, 0], size: [W, D] },
        // East wall (right edge, facing west)
        { pos: [W / 2, -D / 2, 0], rot: [0, -Math.PI / 2, 0], size: [W, D] },
        // West wall (left edge, facing east)
        { pos: [-W / 2, -D / 2, 0], rot: [0, Math.PI / 2, 0], size: [W, D] },
    ];

    for (const { pos, rot, size } of positions) {
        const geo = new THREE.PlaneGeometry(size[0], size[1]);
        const mat = new THREE.MeshStandardMaterial({
            map: wallTexture.clone(),
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos[0], pos[1], pos[2]);
        mesh.rotation.set(rot[0], rot[1], rot[2]);
        walls.push(mesh);
    }

    return walls;
}

// --- Public API ---

let _waterTiles = [];
let _waterPools = [];
let _canvasCtx = null;
let _canvasTexture = null;
let _waterTimer = 0;

export async function createGround() {
    const { CANVAS_SIZE, WIDTH, HEIGHT } = GROUND;

    // Main ground canvas
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Fill with dark base
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.magFilter = THREE.NearestFilter;
    canvasTexture.minFilter = THREE.NearestFilter;
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    canvasTexture.generateMipmaps = false;

    // Ground plane
    const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT);
    const material = new THREE.MeshStandardMaterial({ map: canvasTexture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;

    // Load images and render tile map
    const pools = await loadImagePools();
    _waterTiles = renderTileMap(ctx, pools);
    _waterPools = pools[TERRAIN.WATER] || [];
    _canvasCtx = ctx;
    _canvasTexture = canvasTexture;
    canvasTexture.needsUpdate = true;

    // Side walls
    const wallTexture = renderSideWallTexture(pools);
    const walls = createSideWalls(wallTexture);

    return { groundMesh: mesh, walls };
}

export function updateWater(delta) {
    if (_waterTiles.length === 0 || _waterPools.length === 0) return;

    _waterTimer += delta * 1000;
    if (_waterTimer < WATER_ANIMATION.CYCLE_INTERVAL) return;
    _waterTimer = 0;

    for (const wt of _waterTiles) {
        wt.currentFrame = (wt.currentFrame + 1) % _waterPools.length;
        const img = _waterPools[wt.currentFrame];
        _canvasCtx.drawImage(img, wt.cx, wt.cy, TILE_PX, TILE_PX);
    }

    _canvasTexture.needsUpdate = true;
}
```

Note: `createGround()` is now async and returns `{ groundMesh, walls }` instead of just a mesh. App.js will be updated in Task 8 to handle this.

- [ ] **Step 2: Commit**

```bash
git add js/entities/ground.js
git commit -m "feat: rewrite ground with data-driven tile map, side walls, and water animation"
```

---

## Chunk 3: Character Collision Update

### Task 5: Update character.js with tile-based collision

**Files:**
- Modify: `js/entities/character.js`

Replace the ocean boundary check with tile-based collision using the world map data. Remove OCEAN imports.

- [ ] **Step 1: Rewrite `js/entities/character.js`**

```js
import * as THREE from 'three';
import { CHARACTER, ASSETS, GROUND } from '../config/constants.js';
import { WORLD_MAP, NON_WALKABLE } from '../config/worldMap.js';

const textureLoader = new THREE.TextureLoader();

// Sprite sheet layout
const COLS = 8;
const ROWS = 3;
const FRAME_WIDTH = 1 / COLS;
const FRAME_HEIGHT = 1 / ROWS;

// Pre-computed bounds
const HALF_W = GROUND.WIDTH / 2;
const HALF_H = GROUND.HEIGHT / 2;

export function createCharacter() {
    const texture = textureLoader.load(
        ASSETS.CHARACTER_SPRITE,
        (tex) => { tex.magFilter = THREE.NearestFilter; },
        undefined,
        (err) => console.error('Error loading character texture:', err)
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(FRAME_WIDTH, FRAME_HEIGHT);
    texture.offset.set(0, 1);

    const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.5
    });

    const sprite = new THREE.Sprite(material);
    sprite.castShadow = true;
    sprite.scale.set(CHARACTER.SCALE.x, CHARACTER.SCALE.y, CHARACTER.SCALE.z);
    sprite.position.set(
        CHARACTER.INITIAL_POSITION.x,
        CHARACTER.INITIAL_POSITION.y,
        CHARACTER.INITIAL_POSITION.z
    );

    sprite.userData = {
        direction: 'right',
        directionIndex: 0,
        currentAnimation: 'idle',
        frame: 1,
        frameItr: 0
    };

    return sprite;
}

// -- Direction helpers --------------------------------------------------------

function getDirectionIndex(vec) {
    if (!vec || vec.lengthSq() === 0) return 0;
    const deg = (Math.atan2(vec.z, vec.x) * 180 / Math.PI + 360) % 360;
    return (Math.round(deg / 45) % 8 + 3) % 8;
}

// -- Animation state ----------------------------------------------------------

function setAnimation(sprite, name) {
    if (sprite.userData.currentAnimation === name) return;
    sprite.userData.currentAnimation = name;
    sprite.userData.frame = name === 'idle' ? 1 : 0;
    sprite.userData.frameItr = 0;
}

function updateAnimation(sprite) {
    const { currentAnimation, directionIndex } = sprite.userData;
    const anim = CHARACTER.ANIMATIONS[currentAnimation];

    sprite.userData.frameItr += 1;
    if (sprite.userData.frameItr > anim.duration && anim.frames > 1) {
        sprite.userData.frameItr = 0;
        sprite.userData.frame = anim.frameIndices[
            (sprite.userData.frame + 1) % anim.frames
        ];
    }

    sprite.material.map.offset.set(
        directionIndex * FRAME_WIDTH,
        sprite.userData.frame * FRAME_HEIGHT
    );
}

// -- Tile-based collision -----------------------------------------------------

function worldToTile(worldX, worldZ) {
    const col = Math.floor(worldX / GROUND.TILE_SIZE + GROUND.GRID / 2);
    const row = Math.floor(worldZ / GROUND.TILE_SIZE + GROUND.GRID / 2);
    return { col, row };
}

function isTileBlocked(col, row) {
    if (col < 0 || col >= GROUND.GRID || row < 0 || row >= GROUND.GRID) return true;
    const terrain = WORLD_MAP[row]?.[col];
    if (!terrain) return true;
    return NON_WALKABLE.has(terrain);
}

function isTerrainBlocked(x, z) {
    const r = CHARACTER.COLLISION_RADIUS;
    // Check all 4 corners of the character's bounding box
    const corners = [
        worldToTile(x - r, z - r),
        worldToTile(x + r, z - r),
        worldToTile(x - r, z + r),
        worldToTile(x + r, z + r),
    ];
    return corners.some(c => isTileBlocked(c.col, c.row));
}

function isBlocked(pos, colliders) {
    // Tile-based terrain check
    if (isTerrainBlocked(pos.x, pos.z)) return true;

    // Entity collider check (Box3 intersection)
    const sphere = new THREE.Sphere(pos, CHARACTER.COLLISION_RADIUS);
    for (let i = 0; i < colliders.length; i++) {
        if (colliders[i].intersectsSphere(sphere)) return true;
    }
    return false;
}

function clampToGround(pos) {
    const pad = CHARACTER.COLLISION_RADIUS + 0.1;
    const clamped = pos.clone();
    clamped.x = Math.max(-HALF_W + pad, Math.min(HALF_W - pad, clamped.x));
    clamped.z = Math.max(-HALF_H + pad, Math.min(HALF_H - pad, clamped.z));
    return clamped;
}

function tryMove(sprite, delta, colliders) {
    let proposed = sprite.position.clone().add(delta);
    proposed = clampToGround(proposed);
    if (!isBlocked(proposed, colliders)) {
        sprite.position.copy(proposed);
        return true;
    }
    return false;
}

// -- Public update ------------------------------------------------------------

export function updateCharacterPosition(character, controlsState, clock, colliders = [], inputBlocked = false) {
    if (inputBlocked) {
        // Still bobbing, just no movement processing
        const { BASE_HEIGHT, SPEED: bSpeed, AMOUNT } = CHARACTER.BOBBING;
        character.position.y = BASE_HEIGHT + Math.sin(clock.getElapsedTime() * bSpeed) * AMOUNT;
        updateAnimation(character);
        return;
    }

    const { keys, targetPosition } = controlsState;
    const speed = CHARACTER.SPEED * (keys[' '] ? CHARACTER.DASH_MULTIPLIER : 1);
    const moveDir = new THREE.Vector3();
    let isKeyPressed = false;

    // Clamp click target to ground
    if (controlsState.isMoving) {
        controlsState.targetPosition = clampToGround(controlsState.targetPosition);
    }

    // Isometric keyboard mapping
    if (keys.w || keys.ArrowUp)    { moveDir.x -= 1; moveDir.z -= 1; isKeyPressed = true; }
    if (keys.s || keys.ArrowDown)  { moveDir.x += 1; moveDir.z += 1; isKeyPressed = true; }
    if (keys.a || keys.ArrowLeft)  { moveDir.x -= 1; moveDir.z += 1; isKeyPressed = true; }
    if (keys.d || keys.ArrowRight) { moveDir.x += 1; moveDir.z -= 1; isKeyPressed = true; }

    if (isKeyPressed && moveDir.lengthSq() > 0) {
        controlsState.isMoving = false;
        setAnimation(character, 'walk');
        moveDir.normalize();
        character.userData.directionIndex = getDirectionIndex(moveDir);
        moveDir.multiplyScalar(speed);

        if (!tryMove(character, moveDir, colliders)) {
            setAnimation(character, 'idle');
        }
    } else if (controlsState.isMoving) {
        setAnimation(character, 'walk');

        const dx = character.position.x - targetPosition.x;
        const dz = character.position.z - targetPosition.z;
        if (Math.sqrt(dx * dx + dz * dz) > 0.1) {
            const dir = new THREE.Vector3().subVectors(targetPosition, character.position);
            dir.y = 0;
            dir.normalize();
            character.userData.directionIndex = getDirectionIndex(dir);
            character.userData.direction = dir.x > 0 ? 'right' : 'left';
            dir.multiplyScalar(speed);

            if (!tryMove(character, dir, colliders)) {
                controlsState.isMoving = false;
                setAnimation(character, 'idle');
            }
        } else {
            controlsState.isMoving = false;
            setAnimation(character, 'idle');
        }
    } else {
        setAnimation(character, 'idle');
    }

    // Bobbing
    const { BASE_HEIGHT, SPEED: bSpeed, AMOUNT } = CHARACTER.BOBBING;
    character.position.y = BASE_HEIGHT + Math.sin(clock.getElapsedTime() * bSpeed) * AMOUNT;

    updateAnimation(character);
}
```

Key changes:
- Imports `WORLD_MAP` and `NON_WALKABLE` instead of `OCEAN` and `WATER`
- New `worldToTile()`, `isTileBlocked()`, `isTerrainBlocked()` functions
- `isBlocked()` now checks terrain first, then entity colliders
- `updateCharacterPosition()` accepts `inputBlocked` parameter (for overlay)
- Removed `OCEAN_WORLD_X/Z` pre-computed constants

- [ ] **Step 2: Commit**

```bash
git add js/entities/character.js
git commit -m "feat: replace ocean boundary with tile-based collision in character movement"
```

---

## Chunk 4: Interactive Entity System

### Task 6: Create InteractiveEntity class

**Files:**
- Create: `js/entities/interactiveEntity.js`

- [ ] **Step 1: Create `js/entities/interactiveEntity.js`**

```js
import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

export class InteractiveEntity {
    constructor(config) {
        this.id = config.id;
        this.spritePath = config.spritePath;
        this.position = new THREE.Vector3(config.x, 0, config.z);
        this.scale = config.scale;
        this.triggerRadius = config.triggerRadius;
        this.collisionBoxSize = config.collisionBox;
        this.overlayId = config.overlayId;
        this.label = config.label;
        this.description = config.description;
        this.icon = config.icon;

        this.sprite = null;
        this.collider = null;
    }

    create() {
        return new Promise((resolve, reject) => {
            textureLoader.load(
                this.spritePath,
                (texture) => {
                    texture.magFilter = THREE.NearestFilter;
                    texture.minFilter = THREE.NearestFilter;

                    const material = new THREE.SpriteMaterial({
                        map: texture,
                        transparent: true,
                        alphaTest: 0.5,
                    });

                    this.sprite = new THREE.Sprite(material);
                    this.sprite.center.set(0.5, 0);
                    this.sprite.scale.set(this.scale.x, this.scale.y, this.scale.z);
                    this.sprite.position.copy(this.position);

                    // Collision box centered on entity position
                    const { w, d, h } = this.collisionBoxSize;
                    this.collider = new THREE.Box3(
                        new THREE.Vector3(
                            this.position.x - w / 2,
                            0,
                            this.position.z - d / 2
                        ),
                        new THREE.Vector3(
                            this.position.x + w / 2,
                            h,
                            this.position.z + d / 2
                        )
                    );

                    resolve(this);
                },
                undefined,
                (err) => {
                    console.error(`Error loading entity sprite ${this.id}:`, err);
                    reject(err);
                }
            );
        });
    }

    getDistanceTo(worldPosition) {
        const dx = worldPosition.x - this.position.x;
        const dz = worldPosition.z - this.position.z;
        return Math.sqrt(dx * dx + dz * dz);
    }

    dispose() {
        if (this.sprite) {
            this.sprite.material.map?.dispose();
            this.sprite.material.dispose();
        }
    }
}
```

- [ ] **Step 2: Commit**

```bash
git add js/entities/interactiveEntity.js
git commit -m "feat: add InteractiveEntity class for reusable world objects"
```

---

### Task 7: Create interaction system (proximity + toast)

**Files:**
- Create: `js/systems/interaction.js`

- [ ] **Step 1: Create `js/systems/interaction.js`**

```js
import { INTERACTION } from '../config/constants.js';

const isTouchDevice = 'ontouchstart' in window;

let _entities = [];
let _activeEntity = null;
let _toastEl = null;
let _onOpenOverlay = null;

export function initInteraction(entities, toastElement, onOpenOverlay) {
    _entities = entities;
    _toastEl = toastElement;
    _onOpenOverlay = onOpenOverlay;

    // Set mobile-appropriate hint text
    const hint = _toastEl.querySelector('.toast-hint');
    if (hint) {
        hint.innerHTML = isTouchDevice
            ? 'Tap to explore'
            : 'Click or press <kbd>E</kbd>';
    }

    // Toast click handler
    _toastEl.addEventListener('click', () => {
        if (_activeEntity) {
            _onOpenOverlay(_activeEntity.overlayId);
        }
    });

    // E-key handler
    window.addEventListener('keydown', (e) => {
        if ((e.key === 'e' || e.key === 'E') && _activeEntity) {
            _onOpenOverlay(_activeEntity.overlayId);
        }
    });
}

export function updateInteraction(characterPosition, overlayIsOpen) {
    if (overlayIsOpen) {
        hideToast();
        return;
    }

    // Find nearest entity within trigger radius
    let nearest = null;
    let nearestDist = Infinity;

    for (const entity of _entities) {
        const dist = entity.getDistanceTo(characterPosition);
        if (dist < entity.triggerRadius && dist < nearestDist) {
            nearest = entity;
            nearestDist = dist;
        }
    }

    // Hysteresis: keep current entity unless new one is significantly closer
    if (_activeEntity && nearest && nearest !== _activeEntity) {
        const activeDist = _activeEntity.getDistanceTo(characterPosition);
        if (activeDist < _activeEntity.triggerRadius &&
            nearestDist >= activeDist - INTERACTION.HYSTERESIS_DISTANCE) {
            nearest = _activeEntity;
        }
    }

    if (nearest) {
        showToast(nearest);
        _activeEntity = nearest;
    } else {
        hideToast();
        _activeEntity = null;
    }
}

function showToast(entity) {
    if (!_toastEl) return;

    const icon = _toastEl.querySelector('.toast-icon');
    const label = _toastEl.querySelector('.toast-label');
    const desc = _toastEl.querySelector('.toast-desc');

    if (icon) icon.textContent = entity.icon;
    if (label) label.textContent = entity.label;
    if (desc) desc.textContent = entity.description;

    _toastEl.style.opacity = '1';
    _toastEl.style.pointerEvents = 'auto';
}

function hideToast() {
    if (!_toastEl) return;
    _toastEl.style.opacity = '0';
    _toastEl.style.pointerEvents = 'none';
}
```

- [ ] **Step 2: Commit**

```bash
git add js/systems/interaction.js
git commit -m "feat: add interaction system with proximity detection, toast, and hysteresis"
```

---

## Chunk 5: Overlay System

### Task 8: Create overlay manager

**Files:**
- Create: `js/ui/overlay.js`

- [ ] **Step 1: Create `js/ui/overlay.js`**

```js
import { getOverlayContent } from './overlayContent.js';

let _containerEl = null;
let _titleEl = null;
let _bodyEl = null;
let _closeBtn = null;
let _backdropEl = null;

export let isOpen = false;

export function initOverlay() {
    _containerEl = document.getElementById('overlay-container');
    _titleEl = _containerEl.querySelector('.overlay-title');
    _bodyEl = _containerEl.querySelector('.overlay-body');
    _closeBtn = _containerEl.querySelector('.overlay-close');
    _backdropEl = _containerEl.querySelector('.overlay-backdrop');

    _closeBtn.addEventListener('click', close);
    _backdropEl.addEventListener('click', close);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) close();
    });
}

export function open(overlayId) {
    const content = getOverlayContent(overlayId);
    if (!content) return;

    _titleEl.textContent = content.title;
    _bodyEl.innerHTML = content.html;

    _containerEl.classList.remove('overlay-hidden');
    _containerEl.classList.add('overlay-visible');
    isOpen = true;
}

export function close() {
    _containerEl.classList.remove('overlay-visible');
    _containerEl.classList.add('overlay-hidden');
    isOpen = false;
}
```

- [ ] **Step 2: Commit**

```bash
git add js/ui/overlay.js
git commit -m "feat: add overlay manager with open/close lifecycle and input blocking"
```

---

### Task 9: Create overlay content (placeholder data)

**Files:**
- Create: `js/ui/overlayContent.js`

- [ ] **Step 1: Create `js/ui/overlayContent.js`**

```js
/**
 * Placeholder content for each overlay. Returns { title, html }.
 * Replace with real API integrations in a future phase.
 */

const OVERLAYS = {
    'books-overlay': {
        title: '📚 Books & Movies',
        html: `
            <div class="overlay-grid">
                ${['The Pragmatic Programmer', 'Dune', 'Interstellar', 'Atomic Habits', 'The Matrix', 'Sapiens'].map((t, i) => `
                    <div class="overlay-card">
                        <div class="card-cover" style="background:hsl(${i * 55}, 50%, 35%)"></div>
                        <div class="card-info">
                            <div class="card-title">${t}</div>
                            <div class="card-meta">${'★'.repeat(3 + (i % 3))}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'music-overlay': {
        title: '🎵 Music & Playlists',
        html: `
            <div class="overlay-section">
                <h3>Now Playing</h3>
                <div class="now-playing">
                    <div class="np-art" style="background:hsl(280, 50%, 35%)"></div>
                    <div class="np-info">
                        <div class="card-title">Bohemian Rhapsody</div>
                        <div class="card-meta">Queen</div>
                    </div>
                </div>
            </div>
            <div class="overlay-section">
                <h3>Playlists</h3>
                <div class="overlay-grid">
                    ${['Chill Vibes', 'Workout Mix', 'Focus Mode', 'Road Trip'].map((t, i) => `
                        <div class="overlay-card">
                            <div class="card-cover" style="background:hsl(${i * 80 + 180}, 50%, 35%)"></div>
                            <div class="card-info">
                                <div class="card-title">${t}</div>
                                <div class="card-meta">${12 + i * 5} tracks</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    },

    'contact-overlay': {
        title: '🐦 Contact Info',
        html: `
            <div class="contact-card">
                <div class="contact-name">Joel</div>
                <div class="contact-links">
                    <a href="#" class="contact-link">📧 hello@joel.dev</a>
                    <a href="#" class="contact-link">🐙 GitHub</a>
                    <a href="#" class="contact-link">💼 LinkedIn</a>
                    <a href="#" class="contact-link">🐦 Twitter</a>
                </div>
            </div>
        `
    },

    'projects-overlay': {
        title: '🔧 Projects',
        html: `
            <div class="overlay-grid">
                ${[
                    { name: 'Mindscape', desc: 'Isometric pixel-art portfolio', lang: 'JavaScript' },
                    { name: 'CLI Tool', desc: 'Developer productivity toolkit', lang: 'Rust' },
                    { name: 'Mobile App', desc: 'Cross-platform habit tracker', lang: 'Dart' },
                    { name: 'API Server', desc: 'RESTful backend service', lang: 'Go' },
                ].map((p, i) => `
                    <div class="overlay-card project-card">
                        <div class="card-info">
                            <div class="card-title">${p.name}</div>
                            <div class="card-meta">${p.desc}</div>
                            <div class="project-lang">
                                <span class="lang-dot" style="background:hsl(${i * 90}, 60%, 50%)"></span>
                                ${p.lang}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'art-overlay': {
        title: '🎨 Art Gallery',
        html: `
            <div class="art-grid">
                ${Array.from({ length: 9 }, (_, i) => `
                    <div class="art-item" style="background:hsl(${i * 40}, 45%, ${30 + i * 3}%)">
                        <div class="art-caption">Artwork ${i + 1}</div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'blog-overlay': {
        title: '🖥️ Tech Blog',
        html: `
            <div class="blog-list">
                ${[
                    { title: 'Building an Isometric World with Three.js', date: '2026-03-01' },
                    { title: 'Pixel Art Tips for Developers', date: '2026-02-15' },
                    { title: 'Data-Driven Game Design Patterns', date: '2026-01-20' },
                ].map(p => `
                    <div class="blog-entry">
                        <div class="card-title">${p.title}</div>
                        <div class="card-meta">${p.date}</div>
                        <p class="blog-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...</p>
                        <a href="#" class="blog-link">Read more →</a>
                    </div>
                `).join('')}
            </div>
        `
    },

    'travel-overlay': {
        title: '🚗 Travel Plans',
        html: `
            <div class="overlay-grid">
                ${[
                    { place: 'Tokyo, Japan', dates: 'Apr 2026' },
                    { place: 'Iceland', dates: 'Jul 2026' },
                    { place: 'Patagonia', dates: 'Nov 2026' },
                    { place: 'New Zealand', dates: 'Feb 2027' },
                ].map((d, i) => `
                    <div class="overlay-card">
                        <div class="card-cover" style="background:hsl(${i * 70 + 100}, 40%, 35%)"></div>
                        <div class="card-info">
                            <div class="card-title">${d.place}</div>
                            <div class="card-meta">${d.dates}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },
};

export function getOverlayContent(overlayId) {
    return OVERLAYS[overlayId] || null;
}
```

- [ ] **Step 2: Commit**

```bash
git add js/ui/overlayContent.js
git commit -m "feat: add placeholder overlay content for all 7 interactive entities"
```

---

## Chunk 6: Wire Everything Together

### Task 10: Fix scene.js background color bug

**Files:**
- Modify: `js/systems/scene.js:13`

- [ ] **Step 1: Fix `SCENE.INITIAL_BACKGROUND` → `SCENE.BACKGROUND_COLOR`**

In `js/systems/scene.js`, line 13, change:
```js
scene.background = new THREE.Color(SCENE.INITIAL_BACKGROUND);
```
to:
```js
scene.background = new THREE.Color(SCENE.BACKGROUND_COLOR);
```

- [ ] **Step 2: Commit**

```bash
git add js/systems/scene.js
git commit -m "fix: use SCENE.BACKGROUND_COLOR consistently in scene setup"
```

---

### Task 11: Update index.html with toast, overlay, and new styles

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Rewrite `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joel's Mindscape</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; }
        body { margin: 0; overflow: hidden; }
        canvas { display: block; }

        /* --- Title --- */
        #title {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(14px, 2.5vw, 28px);
            color: #ffffff;
            background: #000000;
            padding: 16px 32px;
            text-shadow: 3px 3px 0px #333333;
            letter-spacing: 2px;
            border: 3px solid #444444;
            image-rendering: pixelated;
            pointer-events: none;
            z-index: 10;
        }

        /* --- Entity Toast Popup --- */
        #entity-toast {
            position: fixed;
            bottom: 12%;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(8px, 1.5vw, 14px);
            color: #333333;
            background: rgba(255, 215, 0, 0.95);
            padding: 12px 24px;
            border: 3px solid #b8860b;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 20;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
        #entity-toast .toast-icon { font-size: 1.2em; }
        #entity-toast .toast-desc { opacity: 0.7; }
        #entity-toast .toast-hint {
            margin-left: 8px;
            opacity: 0.6;
            font-size: 0.8em;
        }
        #entity-toast kbd {
            background: #333;
            color: #ffd700;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Press Start 2P', monospace;
            font-size: 0.9em;
        }

        /* --- Overlay --- */
        #overlay-container {
            position: fixed;
            inset: 0;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        #overlay-container.overlay-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        #overlay-container.overlay-visible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }
        .overlay-backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
        }
        .overlay-content {
            position: relative;
            background: #1a1a2e;
            border: 3px solid #444;
            border-radius: 4px;
            width: min(90vw, 800px);
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            font-family: 'Press Start 2P', monospace;
            color: #e0e0e0;
            transform: scale(1);
            animation: overlayIn 0.3s ease-out;
        }
        @keyframes overlayIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .overlay-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 2px solid #333;
        }
        .overlay-title {
            font-size: clamp(10px, 2vw, 16px);
            margin: 0;
        }
        .overlay-close {
            background: #333;
            color: #fff;
            border: 2px solid #555;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Press Start 2P', monospace;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .overlay-close:hover { background: #555; }
        .overlay-body {
            padding: 20px;
            overflow-y: auto;
            max-height: 70vh;
            font-size: clamp(7px, 1.2vw, 11px);
            line-height: 1.8;
        }

        /* --- Overlay Content Styles --- */
        .overlay-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
        }
        .overlay-card {
            background: #16213e;
            border: 2px solid #2a3a5e;
            border-radius: 4px;
            overflow: hidden;
        }
        .card-cover {
            height: 80px;
        }
        .card-info {
            padding: 10px;
        }
        .card-title {
            font-size: clamp(7px, 1.1vw, 10px);
            margin-bottom: 4px;
            color: #fff;
        }
        .card-meta {
            font-size: clamp(6px, 0.9vw, 9px);
            color: #888;
        }
        .overlay-section {
            margin-bottom: 20px;
        }
        .overlay-section h3 {
            font-size: clamp(8px, 1.3vw, 12px);
            color: #4a9eff;
            margin-bottom: 12px;
        }
        .now-playing {
            display: flex;
            align-items: center;
            gap: 12px;
            background: #16213e;
            padding: 12px;
            border: 2px solid #2a3a5e;
            border-radius: 4px;
        }
        .np-art {
            width: 48px;
            height: 48px;
            border-radius: 4px;
            flex-shrink: 0;
        }
        .contact-card {
            background: #16213e;
            border: 2px solid #2a3a5e;
            border-radius: 4px;
            padding: 20px;
            text-align: center;
        }
        .contact-name {
            font-size: clamp(12px, 2vw, 18px);
            color: #fff;
            margin-bottom: 16px;
        }
        .contact-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .contact-link {
            color: #4a9eff;
            text-decoration: none;
            font-size: clamp(7px, 1.1vw, 10px);
        }
        .contact-link:hover { color: #7ec8e3; }
        .project-lang {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 6px;
            font-size: clamp(6px, 0.8vw, 8px);
            color: #aaa;
        }
        .lang-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
        }
        .art-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }
        .art-item {
            aspect-ratio: 1;
            border-radius: 4px;
            display: flex;
            align-items: flex-end;
            padding: 6px;
        }
        .art-caption {
            font-size: clamp(5px, 0.7vw, 7px);
            color: rgba(255,255,255,0.7);
        }
        .blog-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .blog-entry {
            background: #16213e;
            border: 2px solid #2a3a5e;
            border-radius: 4px;
            padding: 14px;
        }
        .blog-excerpt {
            color: #999;
            margin: 8px 0;
            font-size: clamp(6px, 0.9vw, 9px);
        }
        .blog-link {
            color: #4a9eff;
            text-decoration: none;
            font-size: clamp(6px, 0.9vw, 9px);
        }
        .blog-link:hover { color: #7ec8e3; }
    </style>
</head>
<body>
    <div id="title">Joel's Mindscape</div>

    <div id="entity-toast">
        <span class="toast-icon"></span>
        <span class="toast-label"></span>
        <span class="toast-desc"></span>
        <span class="toast-hint">Click or press <kbd>E</kbd></span>
    </div>

    <div id="overlay-container" class="overlay-hidden">
        <div class="overlay-backdrop"></div>
        <div class="overlay-content">
            <div class="overlay-header">
                <h2 class="overlay-title"></h2>
                <button class="overlay-close">✕</button>
            </div>
            <div class="overlay-body"></div>
        </div>
    </div>

    <script type="module" src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add toast, overlay DOM structure, and pixel-art responsive CSS"
```

---

### Task 12: Rewrite App.js to wire everything together

**Files:**
- Rewrite: `js/core/App.js`

- [ ] **Step 1: Rewrite `js/core/App.js`**

```js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene } from '../systems/scene.js';
import { createCamera } from '../systems/camera.js';
import { createCharacter, updateCharacterPosition } from '../entities/character.js';
import { createGround, updateWater } from '../entities/ground.js';
import { InteractiveEntity } from '../entities/interactiveEntity.js';
import { setupControls } from '../systems/controls.js';
import { setupCameraController, updateCamera } from '../systems/cameraController.js';
import { initInteraction, updateInteraction } from '../systems/interaction.js';
import { initOverlay, open as openOverlay, isOpen as overlayIsOpen } from '../ui/overlay.js';
import { ENTITY_PLACEMENTS } from '../config/worldMap.js';

import {
    LIGHTING, CAMERA, SCENE, RENDERER, CONTROLS, TRAIL, GROUND
} from '../config/constants.js';
import { DEBUG } from '../config/debug.js';

export class App {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.orbitControls = null;
        this.clock = new THREE.Clock();

        this.character = null;
        this.ground = null;
        this.entities = [];
        this.colliders = [];

        this.ambientLight = null;
        this.directionalLight = null;

        this.trailGhosts = [];
        this.trailTimer = 0;

        this.controlsState = {
            keys: {
                w: false, a: false, s: false, d: false,
                ArrowUp: false, ArrowLeft: false, ArrowDown: false, ArrowRight: false,
                ' ': false
            },
            isMoving: false,
            targetPosition: new THREE.Vector3()
        };
    }

    async init() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initOrbitControls();
        await this.createWorld();
        this.initInputControls();
        this.applyLighting();
        this.initUI();
        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    initScene() {
        const { scene, ambientLight, directionalLight } = setupScene();
        this.scene = scene;
        this.ambientLight = ambientLight;
        this.directionalLight = directionalLight;
    }

    initCamera() {
        this.camera = createCamera();
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = RENDERER.ENABLE_SHADOWS;
        this.renderer.shadowMap.type = THREE[RENDERER.SHADOW_TYPE];
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = RENDERER.TONE_MAPPING_EXPOSURE;
        document.body.appendChild(this.renderer.domElement);
    }

    initOrbitControls() {
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.enableRotate = CONTROLS.ENABLE_ROTATE;
        this.orbitControls.enableDamping = CONTROLS.ENABLE_DAMPING;
        this.orbitControls.dampingFactor = CONTROLS.DAMPING_FACTOR;
        this.orbitControls.screenSpacePanning = CONTROLS.SCREEN_SPACE_PANNING;
        this.orbitControls.mouseButtons = {
            LEFT: CONTROLS.MOUSE_BUTTONS.LEFT,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };
    }

    async createWorld() {
        // Ground + side walls
        const { groundMesh, walls } = await createGround();
        this.ground = groundMesh;
        this.scene.add(this.ground);
        for (const wall of walls) {
            this.scene.add(wall);
        }

        // Interactive entities
        for (const config of ENTITY_PLACEMENTS) {
            const entity = new InteractiveEntity(config);
            await entity.create();
            this.scene.add(entity.sprite);
            this.colliders.push(entity.collider);
            this.entities.push(entity);

            if (DEBUG.COLLIDER_BOXES) {
                this.scene.add(new THREE.Box3Helper(entity.collider, 0xff0000));
            }
        }

        // Character (added last to render on top)
        this.character = createCharacter();
        this.scene.add(this.character);
        this.controlsState.targetPosition.copy(this.character.position);
    }

    initInputControls() {
        setupControls(this.camera, this.ground, this.controlsState, this.renderer.domElement);
        setupCameraController(this.camera, this.orbitControls, this.character);
    }

    initUI() {
        const toastEl = document.getElementById('entity-toast');
        initOverlay();
        initInteraction(this.entities, toastEl, (overlayId) => {
            openOverlay(overlayId);
        });
    }

    applyLighting() {
        this.ambientLight.intensity = LIGHTING.AMBIENT_INTENSITY;
        this.directionalLight.intensity = LIGHTING.DIRECTIONAL_INTENSITY;
        this.scene.background = new THREE.Color(SCENE.BACKGROUND_COLOR);
    }

    onResize() {
        const aspect = window.innerWidth / window.innerHeight;
        const d = CAMERA.VIEW_SIZE;
        this.camera.left = -d * aspect;
        this.camera.right = d * aspect;
        this.camera.top = d;
        this.camera.bottom = -d;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // -- Game loop ----------------------------------------------------------------

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        this.orbitControls.update();
        updateCamera();

        // Pass overlay state to block input during overlay
        const blocked = overlayIsOpen;
        updateCharacterPosition(this.character, this.controlsState, this.clock, this.colliders, blocked);

        // Water animation
        updateWater(delta);

        // Proximity / toast
        updateInteraction(this.character.position, blocked);

        this.updateTrail(delta);

        this.renderer.render(this.scene, this.camera);
    }

    // -- Dash trail ---------------------------------------------------------------

    updateTrail(delta) {
        const keys = this.controlsState.keys;
        const isDashing = keys[' '];
        const isMoving = this.controlsState.isMoving ||
            keys.w || keys.a || keys.s || keys.d ||
            keys.ArrowUp || keys.ArrowLeft || keys.ArrowDown || keys.ArrowRight;

        if (isDashing && isMoving) {
            this.trailTimer += delta;
            if (this.trailTimer >= TRAIL.SPAWN_INTERVAL) {
                this.trailTimer = 0;
                this.spawnGhost();
            }
        } else {
            this.trailTimer = 0;
        }

        for (let i = this.trailGhosts.length - 1; i >= 0; i--) {
            const ghost = this.trailGhosts[i];
            ghost.userData.life -= delta;
            ghost.material.opacity = Math.max(
                0,
                (ghost.userData.life / TRAIL.LIFETIME) * TRAIL.INITIAL_OPACITY
            );

            if (ghost.userData.life <= 0) {
                this.scene.remove(ghost);
                ghost.material.map.dispose();
                ghost.material.dispose();
                this.trailGhosts.splice(i, 1);
            }
        }
    }

    spawnGhost() {
        const charMat = this.character.material;
        const map = charMat.map.clone();
        map.offset.copy(charMat.map.offset);
        map.repeat.copy(charMat.map.repeat);

        const material = new THREE.SpriteMaterial({
            map,
            transparent: true,
            opacity: TRAIL.INITIAL_OPACITY,
            alphaTest: 0.1
        });

        const ghost = new THREE.Sprite(material);
        ghost.scale.copy(this.character.scale);
        ghost.position.copy(this.character.position);
        ghost.userData.life = TRAIL.LIFETIME;

        this.scene.add(ghost);
        this.trailGhosts.push(ghost);
    }
}
```

Key changes from old App.js:
- `init()` is now `async` (because `createGround()` is async)
- Removed: `createCar()`, `updateCarPopup()`, `carPopupEl`, car-specific imports
- Added: `InteractiveEntity` spawning from `ENTITY_PLACEMENTS`, `initUI()`, interaction/overlay wiring
- `animate()`: calls `updateWater(delta)`, `updateInteraction()`, passes `overlayIsOpen` to character update

- [ ] **Step 2: Update `js/main.js` if init is now async**

Check if `main.js` needs updating. Current init call should work since `init()` now returns a promise — it just needs `await` or `.catch()`.

Read `js/main.js` to verify, then update if needed to handle the async init:

```js
import { App } from './core/App.js';

const app = new App();
app.init().catch(err => console.error('Failed to initialize:', err));
```

- [ ] **Step 3: Delete `js/entities/car.js`**

```bash
rm js/entities/car.js
```

- [ ] **Step 4: Commit**

```bash
git add js/core/App.js js/main.js js/entities/car.js
git commit -m "feat: wire up entities, interaction, overlay, and water animation in App"
```

---

### Task 13: Verify build and run

**Files:** None (verification only)

- [ ] **Step 1: Run the dev server**

```bash
npm run dev
```

Expected: Vite starts at localhost:3000, no build errors.

- [ ] **Step 2: Visual verification in browser**

Open http://localhost:3000 and verify:
1. Floating island with layered side walls visible
2. Grass, brick, rock, water, and stone tiles rendering correctly
3. Water tiles animate (shimmer every ~500ms)
4. All 7 entity sprites visible at correct positions
5. Character can walk on grass/brick/rock but NOT on water/edge
6. Approaching an entity shows toast popup
7. Clicking toast or pressing E opens overlay
8. Overlay closes with Escape / ✕ / backdrop click
9. Character movement blocked while overlay is open
10. Dark void background

- [ ] **Step 3: Fix any issues found during verification**

Address any rendering, collision, or interaction bugs.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete world overhaul — floating island, interactive entities, overlays"
```
