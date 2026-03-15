# Mobile Optimization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Joel's Mindscape fully playable on touch devices with a virtual D-pad, tap-to-move, camera follow, and polished CSS touch fixes.

**Architecture:** All changes are additive and isolated by module. A new `mobileControls.js` handles the D-pad DOM; existing systems are minimally patched to wire it in. Camera follow is implemented in the existing stub `cameraController.js`. All touch-device branching uses a single shared `IS_TOUCH_DEVICE` constant.

**Tech Stack:** Three.js 0.182, Vite 7, vanilla JS ES modules, inline CSS in `index.html`, no test framework (verification via `npm run build` + manual browser testing).

**Spec:** `docs/superpowers/specs/2026-03-15-mobile-optimization-design.md`

**Dev server:** `npm run dev` (Vite HMR at localhost:5173)

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `js/config/constants.js` | Modify | Add `IS_TOUCH_DEVICE` export |
| `index.html` | Modify | `viewport-fit=cover`, art grid fix, 44px touch targets, `touch-action: pan-y` |
| `js/systems/cameraController.js` | Modify | Implement character-follow camera with frame-rate-independent lerp |
| `js/core/App.js` | Modify | Fix animate() call order; mobile OrbitControls config; call `initMobileControls()` |
| `js/systems/controls.js` | Modify | Add `touchstart`/`touchend` tap-to-move with null-guarded start tracking |
| `js/systems/interaction.js` | Modify | Replace local `isTouchDevice`; export `getActiveEntity()`; call `setInteractButtonVisible()` |
| `js/ui/mobileControls.js` | **Create** | D-pad DOM, interact button, first-visit hint — only active on touch devices |

---

## Chunk 1: Foundation — Shared Constant + CSS Fixes

### Task 1: Add `IS_TOUCH_DEVICE` to constants

**Files:**
- Modify: `js/config/constants.js`

- [ ] **Step 1: Add the shared constant**

Open `js/config/constants.js`. At the end of the file, after the `TRAIL` export, add:

```javascript
export const IS_TOUCH_DEVICE = 'ontouchstart' in window;
```

- [ ] **Step 2: Remove the duplicate from `interaction.js`**

Open `js/systems/interaction.js`. Line 1 already imports from `constants.js`:
```javascript
import { INTERACTION } from '../config/constants.js';
```
Add `IS_TOUCH_DEVICE` to that same import (do NOT add a second import from the same module):
```javascript
import { INTERACTION, IS_TOUCH_DEVICE } from '../config/constants.js';
```
Then delete line 3 (`const isTouchDevice = 'ontouchstart' in window;`) and replace all remaining uses of `isTouchDevice` in that file with `IS_TOUCH_DEVICE`.

- [ ] **Step 3: Verify build is clean**

```bash
cd /d/workspace/dev/repos/joeloffbeat.github.io
npm run build 2>&1 | tail -20
```

Expected: exits with `✓ built in` and no errors.

- [ ] **Step 4: Commit**

```bash
git add js/config/constants.js js/systems/interaction.js
git commit -m "refactor: centralize IS_TOUCH_DEVICE in constants"
```

---

### Task 2: CSS fixes in `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add `viewport-fit=cover` to the meta tag**

In `index.html` line 5, change:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
to:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

- [ ] **Step 2: Fix the art grid**

Find this CSS rule (around line 237):
```css
.art-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}
```
Change `grid-template-columns` to:
```css
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
```

- [ ] **Step 3: Fix touch target sizes**

Find `.overlay-close` (around line 127). Replace `width: 32px; height: 32px;` with `min-width: 44px; min-height: 44px;` (keeping `width` and `min-width` both at 32/44 is contradictory dead code — just use `min-width`/`min-height`):
```css
.overlay-close {
    background: #333;
    color: #fff;
    border: 2px solid #555;
    border-radius: 4px;
    min-width: 44px;
    min-height: 44px;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Press Start 2P', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Find `.tab-btn` (around line 285). Add `min-height: 44px`:
```css
.tab-btn {
    background: #16213e;
    border: 2px solid #2a3a5e;
    color: #888;
    padding: 8px 14px;
    cursor: pointer;
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(6px, 1vw, 9px);
    border-radius: 3px;
    min-height: 44px;
    transition: border-color 0.2s, color 0.2s;
}
```

Find `.page-btn` (around line 369). Add `min-height: 44px`:
```css
.page-btn {
    background: #16213e;
    border: 2px solid #2a3a5e;
    color: #4a9eff;
    padding: 6px 10px;
    cursor: pointer;
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(6px, 0.9vw, 8px);
    border-radius: 3px;
    min-height: 44px;
}
```

- [ ] **Step 4: Fix overlay scroll for touch**

Find `.overlay-body` (around line 142). Add `touch-action: pan-y`:
```css
.overlay-body {
    padding: 20px;
    overflow-y: auto;
    max-height: 70vh;
    font-size: clamp(7px, 1.2vw, 11px);
    line-height: 1.8;
    touch-action: pan-y;
}
```

- [ ] **Step 5: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 6: Manual check — start dev server and open in browser**

```bash
npm run dev
```

Open `http://localhost:5173`. Open DevTools → toggle mobile emulation (e.g., iPhone 12). Verify:
- Art gallery overlay shows more than 3 columns at small widths when opened
- Close button is larger and easier to tap
- No layout breakage

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "fix: CSS touch targets, art grid auto-fill, touch-action, viewport-fit"
```

---

## Chunk 2: Camera Follow

### Task 3: Implement character-follow camera

**Files:**
- Modify: `js/systems/cameraController.js`
- Modify: `js/core/App.js` (animate call order only)

- [ ] **Step 1: Rewrite `cameraController.js`**

Replace the entire contents of `js/systems/cameraController.js` with:

```javascript
import * as THREE from 'three';

let _orbitControls = null;
let _character = null;
const _targetVec = new THREE.Vector3();

/**
 * Store references needed for camera follow.
 * Called once during App.init().
 */
export function setupCameraController(camera, controls, character) {
    _orbitControls = controls;
    _character = character;
}

/**
 * Per-frame camera follow update.
 * Must be called BEFORE orbitControls.update() so damping applies
 * against the freshly lerped target in the same frame.
 *
 * @param {number} delta - seconds since last frame
 */
export function updateCamera(delta) {
    if (!_orbitControls || !_character) return;
    // Frame-rate independent lerp: 1 - 0.92^(delta*60)
    // At 60fps → t ≈ 0.08; at 30fps → t ≈ 0.15 (same convergence curve)
    const t = 1 - Math.pow(0.92, delta * 60);
    _targetVec.set(_character.position.x, 0, _character.position.z);
    _orbitControls.target.lerp(_targetVec, t);
}
```

- [ ] **Step 2: Fix `animate()` call order in `App.js`**

In `js/core/App.js`, find the `animate()` method. The current order is:
```javascript
this.orbitControls.update();
updateCamera();
```

Change it to:
```javascript
updateCamera(delta);          // lerp target first
this.orbitControls.update();  // then apply damping against new target
```

- [ ] **Step 3: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 4: Manual check**

```bash
npm run dev
```

Open `http://localhost:5173`. Walk the character to a corner of the map (click far away). Verify the camera smoothly follows the character. The camera should not snap — it should ease toward the character each frame.

- [ ] **Step 5: Commit**

```bash
git add js/systems/cameraController.js js/core/App.js
git commit -m "feat: implement smooth camera follow in cameraController"
```

---

## Chunk 3: Touch Input

### Task 4: Touch tap-to-move

**Files:**
- Modify: `js/systems/controls.js`

- [ ] **Step 1: Add touch handlers to `setupControls`**

In `js/systems/controls.js`, replace the entire file contents with:

```javascript
import * as THREE from 'three';

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
}
```

- [ ] **Step 2: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 3: Manual check — mobile emulation**

```bash
npm run dev
```

Open `http://localhost:5173` in DevTools mobile emulation (iPhone 12). Tap on the ground — character should walk to where you tapped. Pinch-to-zoom should not trigger a walk. Drag should not trigger a walk.

- [ ] **Step 4: Commit**

```bash
git add js/systems/controls.js
git commit -m "feat: add touch tap-to-move with null-guarded start tracking"
```

---

### Task 5: Mobile OrbitControls config

**Files:**
- Modify: `js/core/App.js`

- [ ] **Step 1: Import `IS_TOUCH_DEVICE` in `App.js`**

In `js/core/App.js`, find the import block at the top. Add `IS_TOUCH_DEVICE` to the constants import:

```javascript
import {
    LIGHTING, CAMERA, SCENE, RENDERER, CONTROLS, TRAIL, GROUND, IS_TOUCH_DEVICE
} from '../config/constants.js';
```

- [ ] **Step 2: Verify `THREE.TOUCH.DOLLY_PAN` exists**

In the browser console (or Node REPL with `import * as THREE from 'three'`), confirm the constant is defined:
```javascript
console.log(THREE.TOUCH.DOLLY_PAN); // expect: 2
```
If it prints `2`, proceed. If it prints `undefined`, use the numeric literal `2` instead of `THREE.TOUCH.DOLLY_PAN` in the next step.

- [ ] **Step 3: Disable single-touch pan on mobile**

In `js/core/App.js`, find `initOrbitControls()`. After the existing `this.orbitControls.mouseButtons = { ... }` assignment, add:

```javascript
    if (IS_TOUCH_DEVICE) {
        // Disable single-touch pan so it doesn't fight tap-to-move.
        // Two-finger pinch-to-zoom (DOLLY_PAN = 2) is preserved.
        this.orbitControls.touches = {
            ONE: null,
            TWO: THREE.TOUCH.DOLLY_PAN // numeric value: 2
        };
    }
```

- [ ] **Step 4: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 5: Manual check**

Open `http://localhost:5173` in mobile emulation. Single-finger drag on the canvas should no longer pan the camera (the follow-camera handles positioning). Pinch should still zoom.

- [ ] **Step 6: Commit**

```bash
git add js/core/App.js
git commit -m "feat: disable single-touch OrbitControls pan on mobile"
```

---

## Chunk 4: Mobile Controls UI

### Task 6: Create `mobileControls.js` — D-pad, interact button, hint

**Files:**
- Create: `js/ui/mobileControls.js`

This module does nothing on non-touch devices — `initMobileControls` returns early if `!IS_TOUCH_DEVICE`.

- [ ] **Step 1: Create `js/ui/mobileControls.js`**

```javascript
import { IS_TOUCH_DEVICE } from '../config/constants.js';

// Module-level references set during initMobileControls
let _controlsState = null;
let _getActiveEntity = null;
let _getOverlayOpen = null;
let _onOpenOverlay = null;

let _interactBtn = null;

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
    if (!IS_TOUCH_DEVICE) return;

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
            for (const key of btn.keys) {
                _controlsState.keys[key] = true;
                _controlsState.isMoving = false;
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

    const dismiss = () => {
        localStorage.setItem('mobile-hint-seen', '1');
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 400);
    };

    hint.addEventListener('touchend', (e) => { e.preventDefault(); dismiss(); }, { passive: false });
    document.body.appendChild(hint);

    setTimeout(dismiss, 4000);
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
```

- [ ] **Step 2: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors. (Module is created but not yet wired — that's fine.)

- [ ] **Step 3: Commit**

```bash
git add js/ui/mobileControls.js
git commit -m "feat: add mobileControls module with D-pad, interact button, first-visit hint"
```

---

## Chunk 5: Wiring

### Task 7: Wire `interaction.js` — export `getActiveEntity`, call `setInteractButtonVisible`

**Files:**
- Modify: `js/systems/interaction.js`

- [ ] **Step 1: Add `getActiveEntity` export and `setInteractButtonVisible` calls**

In `js/systems/interaction.js`, make the following changes:

1. At the top of the file, the `IS_TOUCH_DEVICE` import was already added to the existing constants import in Task 1 — it reads:
   ```javascript
   import { INTERACTION, IS_TOUCH_DEVICE } from '../config/constants.js';
   ```
   Now add a **new** import for `mobileControls` (do NOT add another `constants.js` import):
   ```javascript
   import { setInteractButtonVisible } from '../ui/mobileControls.js';
   ```

2. After the `initInteraction` export, add a new getter export:

```javascript
export function getActiveEntity() {
    return _activeEntity;
}
```

3. In the private `showToast(entity)` function, add at the end:

```javascript
    if (IS_TOUCH_DEVICE) setInteractButtonVisible(true);
```

4. In the private `hideToast()` function, add at the end:

```javascript
    if (IS_TOUCH_DEVICE) setInteractButtonVisible(false);
```

- [ ] **Step 2: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 3: Commit**

```bash
git add js/systems/interaction.js
git commit -m "feat: export getActiveEntity; wire setInteractButtonVisible to toast"
```

---

### Task 8: Wire `App.js` — call `initMobileControls`

**Files:**
- Modify: `js/core/App.js`

- [ ] **Step 1: Import `mobileControls` and `interaction` exports in `App.js`**

In `js/core/App.js`, update the UI imports. Find:

```javascript
import { initOverlay, open as openOverlay, isOpen as overlayIsOpen } from '../ui/overlay.js';
```

Add below it:

```javascript
import { initMobileControls } from '../ui/mobileControls.js';
import { getActiveEntity } from '../systems/interaction.js';
```

- [ ] **Step 2: Call `initMobileControls` in `initUI()`**

Find the `initUI()` method:

```javascript
initUI() {
    const toastEl = document.getElementById('entity-toast');
    initOverlay();
    initInteraction(this.entities, toastEl, (overlayId) => {
        openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
    });
}
```

Replace with:

```javascript
initUI() {
    const toastEl = document.getElementById('entity-toast');
    initOverlay();
    initInteraction(this.entities, toastEl, (overlayId) => {
        openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
    });
    initMobileControls(
        this.controlsState,
        () => getActiveEntity(),
        () => overlayIsOpen,
        (id) => openOverlay(id).catch(err => console.error('Overlay error:', err))
    );
}
```

- [ ] **Step 3: Verify build is clean**

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ built in` with no errors.

- [ ] **Step 4: Final manual check — full mobile flow**

```bash
npm run dev
```

Open `http://localhost:5173` in DevTools mobile emulation (iPhone 12, portrait). Verify the full flow:

1. **D-pad appears** in bottom-left — 8 directional buttons in a 3×3 grid
2. **Walk N/S/E/W/diagonals** using the D-pad — character moves in the correct direction
3. **Tap ground** — character walks to the tapped point
4. **Pinch canvas** — zooms without triggering walk
5. **Walk near the bookshelf** — ⚡ button appears in bottom-right
6. **Tap ⚡** — books overlay opens
7. **D-pad while overlay open** — pressing D-pad buttons does nothing
8. **Close overlay** — ⚡ button stays visible if still in range
9. **First-visit hint** — shown on first load, dismisses on tap or after 4s
10. **Reload page** — hint is NOT shown again (localStorage)
11. **Camera follow** — walk far from center; camera smoothly follows the character
12. **Art gallery grid** — opens art overlay; grid reflows to more columns on narrow screen

- [ ] **Step 5: Commit**

```bash
git add js/core/App.js
git commit -m "feat: wire initMobileControls into App — mobile optimization complete"
```

---

## Done

All 8 tasks complete. The site is now fully playable on touch devices:

- Virtual D-pad with 8-direction multi-touch support
- Tap-to-move on canvas
- ⚡ interact button wired to entity proximity
- D-pad blocked while overlay is open
- Camera follows character on all devices
- CSS fixes: art grid auto-fill, 44px touch targets, `touch-action: pan-y`, `viewport-fit=cover`
- First-visit mobile hint (localStorage-persisted)
