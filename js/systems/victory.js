import * as THREE from 'three';
import { VICTORY } from '../config/constants.js';

/**
 * Create victory image plane
 * @returns {THREE.Mesh} Victory image mesh
 */
export function createVictoryImage() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
        VICTORY.IMAGE_PATH,
        (tex) => {
            tex.magFilter = THREE.NearestFilter;
            tex.minFilter = THREE.NearestFilter;
        },
        undefined,
        (error) => console.error('Error loading victory image:', error)
    );

    const geometry = new THREE.PlaneGeometry(
        VICTORY.IMAGE_SIZE.width,
        VICTORY.IMAGE_SIZE.height
    );

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        color: 0xBBBBBB // Darken to match scene lighting (removes white cast)
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2; // Lay flat
    plane.position.set(0, 0.1, 0); // Center of map, slightly above ground
    plane.visible = false;

    return plane;
}

/**
 * Start celebration coin rain effect
 */
function startCoinRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'coin-rain';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        pointer-events: none;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const coins = [];

    // Create initial batch of coins
    for (let i = 0; i < 60; i++) {
        coins.push(createRainCoin(canvas.width, canvas.height, true));
    }

    function createRainCoin(w, h, initialSpread) {
        return {
            x: Math.random() * w,
            y: initialSpread ? Math.random() * -h : Math.random() * -100,
            size: 8 + Math.random() * 12,
            speed: 2 + Math.random() * 4,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: 0.02 + Math.random() * 0.04,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: 0.05 + Math.random() * 0.1
        };
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < coins.length; i++) {
            const c = coins[i];
            c.y += c.speed;
            c.wobble += c.wobbleSpeed;
            c.x += Math.sin(c.wobble) * 1.5;
            c.rotation += c.rotationSpeed;

            // Draw coin
            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.rotation);
            const scaleX = Math.abs(Math.cos(c.rotation));
            ctx.scale(Math.max(scaleX, 0.3), 1);

            // Coin body
            ctx.beginPath();
            ctx.arc(0, 0, c.size, 0, Math.PI * 2);
            ctx.fillStyle = '#FFD700';
            ctx.fill();
            ctx.strokeStyle = '#DAA520';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Coin shine
            ctx.beginPath();
            ctx.arc(-c.size * 0.2, -c.size * 0.2, c.size * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.fill();

            ctx.restore();

            // Reset coin when it falls off screen
            if (c.y > canvas.height + c.size) {
                coins[i] = createRainCoin(canvas.width, canvas.height, false);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Show victory HTML overlay with Yes/Yes buttons
 */
export function showVictoryOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'victory-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 105, 180, 0.95);
        color: white;
        padding: 30px 60px;
        border-radius: 20px;
        font-family: Arial, sans-serif;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: fadeIn 1s ease-out;
    `;

    // Question text
    const text = document.createElement('div');
    text.textContent = VICTORY.TEXT_CONTENT;
    text.style.cssText = `
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
    `;
    overlay.appendChild(text);

    // Button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        gap: 20px;
        justify-content: center;
    `;

    const buttonStyle = `
        padding: 12px 40px;
        font-size: 22px;
        font-weight: bold;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.15s;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;

    // "Yes" button
    const yesBtn = document.createElement('button');
    yesBtn.textContent = 'Yes';
    yesBtn.style.cssText = buttonStyle + `
        background: white;
        color: #FF69B4;
    `;

    // "No" button (turns to "Yes" on hover)
    const noBtn = document.createElement('button');
    noBtn.textContent = 'No';
    noBtn.style.cssText = buttonStyle + `
        background: white;
        color: #FF69B4;
    `;

    // No button: text changes to "Yes" on hover
    noBtn.addEventListener('mouseenter', () => {
        noBtn.textContent = 'Yes';
        noBtn.style.transform = 'scale(1.1)';
        noBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    noBtn.addEventListener('mouseleave', () => {
        noBtn.textContent = 'No';
        noBtn.style.transform = 'scale(1)';
        noBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });

    // Yes button: normal hover
    yesBtn.addEventListener('mouseenter', () => {
        yesBtn.style.transform = 'scale(1.1)';
        yesBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    yesBtn.addEventListener('mouseleave', () => {
        yesBtn.style.transform = 'scale(1)';
        yesBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });

    // Both buttons trigger celebration on click
    [yesBtn, noBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            text.textContent = 'Happy Valentines Day!';
            buttonContainer.remove();
            startCoinRain();
        });
    });

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
    overlay.appendChild(buttonContainer);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(overlay);
}

/**
 * Trigger victory sequence
 * @param {THREE.Mesh} victoryImage - Victory image mesh
 */
export function triggerVictory(victoryImage) {
    setTimeout(() => {
        victoryImage.visible = true;
        showVictoryOverlay();
    }, VICTORY.DISPLAY_DELAY);
}
