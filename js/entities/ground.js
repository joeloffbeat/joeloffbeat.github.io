import * as THREE from 'three';
import { GROUND, ASSETS, OCEAN } from '../config/constants.js';

const GRID = Math.floor(GROUND.WIDTH / GROUND.TILE_SIZE);

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

export function createGround() {
    const { CANVAS_SIZE } = GROUND;

    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#3a6b24';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.magFilter = THREE.NearestFilter;
    canvasTexture.minFilter = THREE.NearestFilter;
    canvasTexture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.PlaneGeometry(GROUND.WIDTH, GROUND.HEIGHT);
    const material = new THREE.MeshStandardMaterial({ map: canvasTexture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;

    compositeGround(canvas, canvasTexture);

    return mesh;
}

async function compositeGround(canvas, texture) {
    try {
        const [grassImages, waterImages, borderImages] = await Promise.all([
            Promise.all(ASSETS.GRASS_SPRITES.map(loadImage)),
            Promise.all(ASSETS.WATER_SPRITES.map(loadImage)),
            Promise.all(ASSETS.TILE_SPRITES.map(loadImage))
        ]);

        const size = GROUND.CANVAS_SIZE;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        // Tile dimensions
        const tileW = Math.ceil(size / GRID);
        const tileH = tileW;
        const halfW = tileW / 2;
        const halfH = tileH / 2;
        const overlap = 6;

        // Ocean boundary in canvas coordinates (matches collision in character.js)
        const oceanCanvasX = (OCEAN.START_COL / GRID) * size;
        const oceanCanvasY = (OCEAN.START_ROW / GRID) * size;

        // Background fills matching tile colors to hide any sub-pixel gaps
        ctx.fillStyle = '#3a6b24';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = '#2a8ab5';
        ctx.fillRect(oceanCanvasX, oceanCanvasY, size - oceanCanvasX, size - oceanCanvasY);

        // Staggered grid fills the full rectangular canvas (no diamond gaps)
        const totalRows = Math.ceil(size / halfH) + 4;
        const totalCols = Math.ceil(size / tileW) + 4;

        for (let row = -2; row < totalRows; row++) {
            for (let col = -2; col < totalCols; col++) {
                // Staggered positioning: odd rows offset by half tile
                const x = col * tileW + (row % 2 !== 0 ? halfW : 0);
                const y = row * halfH;

                // Draw with overlap to eliminate seam gaps
                const drawX = x - overlap / 2;
                const drawY = y - overlap / 2;
                const drawW = tileW + overlap;
                const drawH = tileH + overlap;

                // Skip tiles entirely outside canvas
                if (drawX + drawW < 0 || drawX > size ||
                    drawY + drawH < 0 || drawY > size) continue;

                // Tile center for biome detection
                const cx = x + halfW;
                const cy = y + halfH;

                // Determine biome: ocean, border (grass-ocean edge), or grass
                const isOcean = cx >= oceanCanvasX && cy >= oceanCanvasY;
                const isBorder = !isOcean && (
                    (cx >= oceanCanvasX - tileW && cx < oceanCanvasX && cy >= oceanCanvasY) ||
                    (cy >= oceanCanvasY - tileH && cy < oceanCanvasY && cx >= oceanCanvasX) ||
                    (cx >= oceanCanvasX - tileW && cx < oceanCanvasX &&
                     cy >= oceanCanvasY - tileH && cy < oceanCanvasY)
                );

                let pool;
                if (isOcean) pool = waterImages;
                else if (isBorder) pool = borderImages;
                else pool = grassImages;

                ctx.drawImage(
                    pool[Math.floor(Math.random() * pool.length)],
                    drawX, drawY, drawW, drawH
                );
            }
        }

        texture.needsUpdate = true;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.generateMipmaps = false;
    } catch (err) {
        console.error('Error loading ground tiles:', err);
    }
}
