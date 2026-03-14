import * as THREE from 'three';
import { GROUND, WATER_ANIMATION } from '../config/constants.js';
import { WORLD_MAP, TERRAIN, TILE_POOLS, OBJECT_LAYERS, tileToWorld } from '../config/worldMap.js'; // OBJECT_LAYERS/tileToWorld reserved for future use

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

// --- Top surface: staggered isometric diamond grid ---
// Tiles are isometric diamond sprites (32x32 art at 2x = 64x64).
// Diamond top face: 64px wide, ~32px tall (top half of tile).
// Side face: bottom half of tile, overlapped by tiles in front.
// Grid spacing: halfW=32 (horizontal), halfH=16 (vertical per step).
// Tiles tessellate perfectly when diamonds share edges.

const HALF_W = TILE_PX / 2;   // 32 — horizontal step
const HALF_H = TILE_PX / 4;   // 16 — vertical step (2:1 isometric)
const CENTER_X = GROUND.CANVAS_SIZE / 2;  // 1024
// Center grid so depth midpoint (31) lands at canvas center (1024)
// 31*16 + OFFSET_Y = 1024 → OFFSET_Y = 528
const OFFSET_Y = GROUND.CANVAS_SIZE / 2 - (GROUND.GRID - 1) * HALF_H; // 528

function renderTileMap(ctx, pools) {
    const waterTiles = [];
    const maxDepth = (GROUND.GRID - 1) * 2; // 62

    // Draw back-to-front by increasing depth (col+row) so front tiles
    // overlap the side faces of tiles behind them
    for (let depth = 0; depth <= maxDepth; depth++) {
        const minCol = Math.max(0, depth - GROUND.GRID + 1);
        const maxCol = Math.min(GROUND.GRID - 1, depth);
        for (let col = minCol; col <= maxCol; col++) {
            const row = depth - col;
            const terrain = WORLD_MAP[row]?.[col] || TERRAIN.EDGE;

            // VOID tiles are outside the playable map shape — skip rendering entirely
            if (terrain === TERRAIN.VOID) continue;

            const pool = pools[terrain] || pools[TERRAIN.GRASS];
            const idx = Math.floor(tileRandom(col, row) * pool.length);
            const img = pool[idx];

            // Diamond center position on canvas
            const cx = (col - row) * HALF_W + CENTER_X;
            const cy = (col + row) * HALF_H + OFFSET_Y;

            // Draw tile with top-left corner offset from center
            const dx = cx - TILE_PX / 2;
            const dy = cy - TILE_PX / 2;

            if (terrain === TERRAIN.EDGE) ctx.globalAlpha = 0.7;
            ctx.drawImage(img, dx, dy, TILE_PX, TILE_PX);
            ctx.globalAlpha = 1.0;

            if (terrain === TERRAIN.WATER) {
                const offset = (col * 7 + row * 13) % pool.length;
                waterTiles.push({ dx, dy, offset, currentFrame: offset });
            }
        }
    }

    return waterTiles;
}

// --- Stepped island layers (textured, like the reference diorama) ---
// Diamond half-extents matching the tile grid's world footprint
const DIAMOND_HX = GROUND.WIDTH / 2;    // 72
const DIAMOND_HZ = DIAMOND_HX * 0.52;   // ~37.4

// Render a tiling canvas of sprites for wall textures
function makeWallTexture(tileImages, tilesWide, tilesHigh, darken) {
    const ts = 32; // tile source size
    const cw = tilesWide * ts;
    const ch = tilesHigh * ts;
    const c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    const x = c.getContext('2d');
    x.imageSmoothingEnabled = false;
    for (let r = 0; r < tilesHigh; r++) {
        for (let i = 0; i < tilesWide; i++) {
            const img = tileImages[Math.floor(tileRandom(i + r * 100, 500 + r) * tileImages.length)];
            if (img) x.drawImage(img, i * ts, r * ts, ts, ts);
        }
    }
    if (darken) {
        x.fillStyle = `rgba(0,0,0,${darken})`;
        x.fillRect(0, 0, cw, ch);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
}


function makeTexturedWall(p1, p2, yTop, yBot, uRepeat, vRepeat) {
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array([
        p1[0], yTop, p1[1],
        p2[0], yTop, p2[1],
        p2[0], yBot, p2[1],
        p1[0], yBot, p1[1],
    ]);
    // UV coordinates for tiled texture
    const uvs = new Float32Array([
        0, 1,
        uRepeat, 1,
        uRepeat, 0,
        0, 0,
    ]);
    const dx = p2[0] - p1[0], dz = p2[1] - p1[1];
    const len = Math.sqrt(dx * dx + dz * dz);
    const nx = dz / len, nz = -dx / len;
    const normals = new Float32Array([
        nx, 0, nz,  nx, 0, nz,  nx, 0, nz,  nx, 0, nz
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    return geo;
}

function renderSideWallTexture(pools) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const brickPool = pools[TERRAIN.BRICK] || [];
    const rockPool = pools[TERRAIN.ROCK] || [];
    const tileSize = 32;
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

    // Row 7: dark void fill — 32px
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0, 224, 2048, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
}

function createSideWalls(pools) {
    const meshes = [];
    const wallTex = renderSideWallTexture(pools);
    const D = GROUND.SIDE_WALL_DEPTH; // 30
    const corners = [
        [0, -DIAMOND_HZ], [DIAMOND_HX, 0], [0, DIAMOND_HZ], [-DIAMOND_HX, 0],
    ];
    for (let i = 0; i < 4; i++) {
        const c1 = corners[i];
        const c2 = corners[(i + 1) % 4];
        const wallLen = Math.sqrt((c2[0] - c1[0]) ** 2 + (c2[1] - c1[1]) ** 2);
        const wallGeo = makeTexturedWall(c1, c2, 0, -D, wallLen / 16, 1);
        const mat = new THREE.MeshStandardMaterial({
            map: wallTex.clone(), side: THREE.FrontSide
        });
        meshes.push(new THREE.Mesh(wallGeo, mat));
    }
    return meshes;
}

// --- Object layers (3D blocks placed at specific tile positions) ---

function createObjectLayers(pools) {
    const meshes = [];
    for (const layer of OBJECT_LAYERS) {
        const tileImgs = pools[layer.type] || pools[TERRAIN.ROCK] || [];
        if (tileImgs.length === 0) continue;
        const tex = makeWallTexture(tileImgs, 2, 2, 0);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        for (let row = 0; row < layer.map.length; row++) {
            const rowStr = layer.map[row];
            for (let col = 0; col < rowStr.length; col++) {
                if (rowStr[col] === 'X') continue;
                const { x, z } = tileToWorld(col, row);
                const geo = new THREE.BoxGeometry(GROUND.TILE_SIZE, layer.height, GROUND.TILE_SIZE);
                const mat = new THREE.MeshStandardMaterial({ map: tex.clone() });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.set(x, layer.height / 2, z);
                meshes.push(mesh);
            }
        }
    }
    return meshes;
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

    // Canvas starts transparent; we clip to the diamond shape of the tile grid
    // so corners are invisible. Diamond corners (with tile padding):
    const pad = TILE_PX / 2; // 32 — tiles extend beyond their center
    const top   = [CENTER_X, OFFSET_Y - pad];
    const right = [(GROUND.GRID - 1) * HALF_W + CENTER_X + pad, (GROUND.GRID - 1) * HALF_H + OFFSET_Y];
    const bot   = [CENTER_X, (GROUND.GRID - 1) * 2 * HALF_H + OFFSET_Y + pad];
    const left  = [-(GROUND.GRID - 1) * HALF_W + CENTER_X - pad, (GROUND.GRID - 1) * HALF_H + OFFSET_Y];

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(top[0], top[1]);
    ctx.lineTo(right[0], right[1]);
    ctx.lineTo(bot[0], bot[1]);
    ctx.lineTo(left[0], left[1]);
    ctx.closePath();
    ctx.clip();

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.magFilter = THREE.NearestFilter;
    canvasTexture.minFilter = THREE.NearestFilter;
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    canvasTexture.generateMipmaps = false;

    // Ground plane — transparent material so clipped corners are invisible
    const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT);
    const material = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        transparent: true,
    });
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

    // Side walls descending below the island surface
    const walls = createSideWalls(pools);

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
        _canvasCtx.drawImage(img, wt.dx, wt.dy, TILE_PX, TILE_PX);
    }

    _canvasTexture.needsUpdate = true;
}
