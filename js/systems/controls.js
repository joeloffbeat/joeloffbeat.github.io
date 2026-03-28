import * as THREE from 'three';

// --- Cheat / Konami state ------------------------------------------------

export const cheatState = { noclip: false, fly: false, turbo: false };

const KONAMI_SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let _konamiBuffer = [];
let _charBuffer   = '';
let _cheatMsgTimeout = null;

function _cheatToast(msg) {
    let el = document.getElementById('cheat-toast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'cheat-toast';
        el.style.cssText = [
            'position:fixed', 'top:72px', 'left:50%', 'transform:translateX(-50%)',
            'font-family:"Press Start 2P",monospace', 'font-size:10px', 'color:#00ff44',
            'background:#000', 'padding:8px 18px', 'border:2px solid #00ff44',
            'z-index:50', 'pointer-events:none', 'transition:opacity 0.4s',
        ].join(';');
        document.body.appendChild(el);
    }
    el.textContent = `CHEAT: ${msg}`;
    el.style.opacity = '1';
    clearTimeout(_cheatMsgTimeout);
    _cheatMsgTimeout = setTimeout(() => { el.style.opacity = '0'; }, 3000);
}

function _applyCheat(code) {
    if (code === 'NOCLIP') { cheatState.noclip = !cheatState.noclip; _cheatToast(`NOCLIP ${cheatState.noclip ? 'ON' : 'OFF'}`); }
    if (code === 'FLY')    { cheatState.fly    = !cheatState.fly;    _cheatToast(`FLY ${cheatState.fly ? 'ON' : 'OFF'}`); }
    if (code === 'TURBO')  { cheatState.turbo  = !cheatState.turbo;  _cheatToast(`TURBO ${cheatState.turbo ? 'ON' : 'OFF'}`); }
    if (code === 'RESET')  {
        cheatState.noclip = cheatState.fly = cheatState.turbo = false;
        _cheatToast('CHEATS CLEARED');
    }
}

function _activateKonami() {
    _cheatToast('RAINBOW MODE — press ESC to exit');
    // Inject keyframes once
    if (!document.getElementById('rainbow-kf')) {
        const s = document.createElement('style');
        s.id = 'rainbow-kf';
        s.textContent = '@keyframes rainbowHue{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}';
        document.head.appendChild(s);
    }
    const canvas = document.querySelector('canvas');
    if (canvas) canvas.style.animation = 'rainbowHue 2s linear infinite';

    // Confetti burst
    const colors = ['#ff4444','#ff8800','#ffff00','#44ff44','#44aaff','#cc44ff'];
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    for (let i = 0; i < 50; i++) {
        const el = document.createElement('div');
        const angle = (i / 50) * Math.PI * 2;
        const r = 80 + Math.random() * 120;
        const tx = Math.cos(angle) * r;
        const ty = Math.sin(angle) * r - 60;
        el.style.cssText = `position:fixed;width:8px;height:8px;left:${cx}px;top:${cy}px;background:${colors[i%colors.length]};z-index:999;pointer-events:none;border-radius:2px;transition:transform 0.9s ease-out,opacity 0.9s ease-out`;
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            el.style.transform = `translate(${tx}px,${ty}px)`;
            el.style.opacity = '0';
        });
        setTimeout(() => el.remove(), 1000);
    }

    const off = (e) => {
        if (e.key !== 'Escape') return;
        if (canvas) canvas.style.animation = '';
        _cheatToast('RAINBOW MODE OFF');
        window.removeEventListener('keydown', off);
    };
    window.addEventListener('keydown', off);
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupControls(camera, ground, controlsState, domElement) {
    // --- Mouse click-to-move ---
    domElement.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObject(ground);
        if (hits.length > 0) {
            controlsState.targetPosition.copy(hits[0].point);
            controlsState.targetPosition.y = 1;
            controlsState.isMoving = true;
        }
    });

    domElement.addEventListener('contextmenu', (e) => e.preventDefault());

    // --- Keyboard movement ---
    window.addEventListener('keydown', (e) => {
        if (e.key in controlsState.keys) {
            controlsState.keys[e.key] = true;
            controlsState.isMoving = false;
        }

        // Cheat code buffer (printable chars only, max 10)
        if (e.key.length === 1) {
            _charBuffer = (_charBuffer + e.key.toUpperCase()).slice(-10);
            for (const code of ['NOCLIP','FLY','TURBO','RESET']) {
                if (_charBuffer.endsWith(code)) {
                    _applyCheat(code);
                    _charBuffer = '';
                    break;
                }
            }
        }

        // Konami code buffer
        _konamiBuffer.push(e.key);
        if (_konamiBuffer.length > KONAMI_SEQ.length) _konamiBuffer.shift();
        if (_konamiBuffer.join(',') === KONAMI_SEQ.join(',')) {
            _activateKonami();
            _konamiBuffer = [];
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key in controlsState.keys) {
            controlsState.keys[e.key] = false;
        }
    });

    // --- Touch tap-to-move ---
    // D-pad buttons are separate DOM elements and their touches don't reach here,
    // so this handler only fires for taps directly on the canvas.
    let touchStartX = null;
    let touchStartY = null;

    domElement.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        } else {
            // Multi-touch (pinch) — invalidate tap tracking
            touchStartX = null;
            touchStartY = null;
        }
    }, { passive: true });

    domElement.addEventListener('touchmove', (e) => {
        if (touchStartX === null) return;
        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;
        if (Math.hypot(dx, dy) >= 10) {
            touchStartX = null; // treat as drag, not a tap
            touchStartY = null;
        }
    }, { passive: true });

    domElement.addEventListener('touchend', (e) => {
        if (touchStartX === null) return; // guard against untracked touches

        if (e.changedTouches.length === 1 && e.touches.length === 0) {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            touchStartX = null;
            touchStartY = null;

            if (Math.hypot(dx, dy) < 10) {
                // Confirmed tap — raycast same as mousedown
                mouse.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, camera);
                const hits = raycaster.intersectObject(ground);
                if (hits.length > 0) {
                    controlsState.targetPosition.copy(hits[0].point);
                    controlsState.targetPosition.y = 1;
                    controlsState.isMoving = true;
                }
                e.preventDefault(); // suppress 300ms ghost click, only on confirmed taps
            }
        }
    }, { passive: false }); // passive:false required to call preventDefault

    domElement.addEventListener('touchcancel', () => {
        touchStartX = null;
        touchStartY = null;
    }, { passive: true });
}
