import { IS_TOUCH_DEVICE } from '../config/constants.js';

// Module-level references set during initMobileControls
let _controlsState = null;
let _getActiveEntity = null;
let _getOverlayOpen = null;
let _onOpenOverlay = null;

let _interactBtn = null;
let _initialized = false;

/**
 * Initialize the virtual D-pad and interact button.
 * No-op on non-touch devices.
 *
 * @param {object}   controlsState    - App.controlsState (keys + isMoving)
 * @param {function} getActiveEntity  - Returns current active entity or null
 * @param {function} getOverlayOpen   - Returns true when an overlay is open
 * @param {function} onOpenOverlay    - Called with overlayId to open an overlay
 */
export function initMobileControls(controlsState, getActiveEntity, getOverlayOpen, onOpenOverlay) {
    if (!IS_TOUCH_DEVICE || _initialized) return;
    _initialized = true;

    _controlsState = controlsState;
    _getActiveEntity = getActiveEntity;
    _getOverlayOpen = getOverlayOpen;
    _onOpenOverlay = onOpenOverlay;

    injectStyles();
    createDpad();
    createInteractButton();
    showFirstVisitHint();
}

/**
 * Show or hide the interact (⚡) button.
 * Safe to call before initMobileControls — guards against null element.
 */
export function setInteractButtonVisible(visible) {
    if (!_interactBtn) return;
    _interactBtn.style.display = visible ? 'flex' : 'none';
}

// ---------------------------------------------------------------------------
// D-Pad
// ---------------------------------------------------------------------------

/**
 * D-pad layout (3×3 grid, center cell is empty):
 *
 *   NW  N  NE
 *    W  ·   E
 *   SW  S  SE
 *
 * Key mappings:
 *   N  → w      S  → s
 *   W  → a      E  → d
 *   NW → w + a  NE → w + d
 *   SW → s + a  SE → s + d
 */
const DPAD_BUTTONS = [
    { label: '↖', keys: ['w', 'a'], gridArea: '1 / 1' },
    { label: '↑', keys: ['w'],      gridArea: '1 / 2' },
    { label: '↗', keys: ['w', 'd'], gridArea: '1 / 3' },
    { label: '←', keys: ['a'],      gridArea: '2 / 1' },
    // center cell intentionally empty
    { label: '→', keys: ['d'],      gridArea: '2 / 3' },
    { label: '↙', keys: ['s', 'a'], gridArea: '3 / 1' },
    { label: '↓', keys: ['s'],      gridArea: '3 / 2' },
    { label: '↘', keys: ['s', 'd'], gridArea: '3 / 3' },
];

function createDpad() {
    const container = document.createElement('div');
    container.id = 'mobile-dpad';

    for (const btn of DPAD_BUTTONS) {
        const el = document.createElement('button');
        el.className = 'dpad-btn';
        el.textContent = btn.label;
        el.style.gridArea = btn.gridArea;

        let activeIdentifier = null;

        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (_getOverlayOpen && _getOverlayOpen()) return;
            if (activeIdentifier !== null) return; // already held

            activeIdentifier = e.changedTouches[0].identifier;
            _controlsState.isMoving = false;
            for (const key of btn.keys) {
                _controlsState.keys[key] = true;
            }
            el.classList.add('active');
        }, { passive: false });

        const release = (e) => {
            for (const touch of e.changedTouches) {
                if (touch.identifier === activeIdentifier) {
                    activeIdentifier = null;
                    for (const key of btn.keys) {
                        _controlsState.keys[key] = false;
                    }
                    el.classList.remove('active');
                    break;
                }
            }
        };

        el.addEventListener('touchend', release, { passive: true });
        el.addEventListener('touchcancel', release, { passive: true });

        container.appendChild(el);
    }

    document.body.appendChild(container);
}

// ---------------------------------------------------------------------------
// Interact button
// ---------------------------------------------------------------------------

function createInteractButton() {
    const btn = document.createElement('button');
    btn.id = 'mobile-interact';
    btn.textContent = '⚡';
    btn.style.display = 'none'; // hidden until near an entity

    btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        const entity = _getActiveEntity && _getActiveEntity();
        if (!entity) return;
        _onOpenOverlay && _onOpenOverlay(entity.overlayId);
    }, { passive: false });

    document.body.appendChild(btn);
    _interactBtn = btn;
}

// ---------------------------------------------------------------------------
// First-visit hint
// ---------------------------------------------------------------------------

function showFirstVisitHint() {
    if (localStorage.getItem('mobile-hint-seen')) return;

    const hint = document.createElement('div');
    hint.id = 'mobile-hint';
    hint.innerHTML = 'Use the pad to move<br>Tap ⚡ to interact';

    let timer;
    const dismiss = () => {
        clearTimeout(timer);
        localStorage.setItem('mobile-hint-seen', '1');
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 400);
    };

    hint.addEventListener('touchend', (e) => { e.preventDefault(); dismiss(); }, { passive: false });
    document.body.appendChild(hint);
    timer = setTimeout(dismiss, 4000);
}

// ---------------------------------------------------------------------------
// Styles (injected so the module is self-contained)
// ---------------------------------------------------------------------------

function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* --- D-Pad container --- */
        #mobile-dpad {
            position: fixed;
            left: 16px;
            bottom: max(16px, env(safe-area-inset-bottom));
            display: grid;
            grid-template-columns: repeat(3, 48px);
            grid-template-rows: repeat(3, 48px);
            gap: 4px;
            z-index: 50;
            user-select: none;
            -webkit-user-select: none;
        }

        /* --- D-Pad buttons --- */
        .dpad-btn {
            width: 48px;
            height: 48px;
            background: rgba(0, 0, 0, 0.55);
            border: 2px solid rgba(184, 134, 11, 0.6);
            border-radius: 4px;
            color: rgba(255, 215, 0, 0.85);
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            touch-action: none;
            font-family: 'Press Start 2P', monospace;
            transition: background 0.08s, border-color 0.08s;
            -webkit-tap-highlight-color: transparent;
        }

        .dpad-btn.active {
            background: rgba(184, 134, 11, 0.35);
            border-color: rgba(255, 215, 0, 0.9);
        }

        /* --- Interact button --- */
        #mobile-interact {
            position: fixed;
            right: 16px;
            bottom: max(16px, env(safe-area-inset-bottom));
            width: 60px;
            height: 60px;
            background: rgba(0, 0, 0, 0.65);
            border: 2px solid rgba(184, 134, 11, 0.7);
            border-radius: 50%;
            color: rgba(255, 215, 0, 0.9);
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            touch-action: none;
            z-index: 50;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        /* --- First-visit hint --- */
        #mobile-hint {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.88);
            border: 2px solid #b8860b;
            color: #ffd700;
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(8px, 2.5vw, 12px);
            padding: 20px 28px;
            text-align: center;
            line-height: 1.8;
            z-index: 200;
            pointer-events: auto;
            opacity: 1;
            transition: opacity 0.4s ease;
        }
    `;
    document.head.appendChild(style);
}
