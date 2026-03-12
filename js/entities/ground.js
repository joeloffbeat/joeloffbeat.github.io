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
