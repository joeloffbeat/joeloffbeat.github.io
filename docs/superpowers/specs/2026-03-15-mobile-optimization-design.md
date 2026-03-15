# Mobile Optimization — Joel's Mindscape

**Date:** 2026-03-15
**Status:** Approved

## Overview

Joel's Mindscape is an interactive isometric game-portfolio. The site already uses fluid CSS units (`clamp()`, `vw/vh`, `auto-fill` grids) but lacks functional mobile game controls. On touch devices, players cannot move the character or interact with objects because the input system only handles keyboard and mouse. Additionally, the camera does not follow the character, making the world largely inaccessible on narrow screens.

This spec covers all changes needed for a fully playable mobile experience.

---

## Problem Areas

| Area | Issue |
|------|-------|
| Movement | No touch controls; keyboard-only movement |
| Tap-to-move | `controls.js` listens to `mousedown` only — `touchend` is never handled |
| Camera | No character follow — camera sits fixed at origin; character walks off-screen on mobile |
| OrbitControls + touch | One-finger drag pans the camera (fights with tap-to-move) |
| Art grid | `repeat(3, 1fr)` is hardcoded — collapses to tiny cells on mobile |
| Overlay close button | 32×32px — below the 44px minimum touch target |
| Overlay scroll | `overflow-y: auto` without `touch-action` is jerky on iOS |
| Safe area | No `env(safe-area-inset-*)` + no `viewport-fit=cover` — D-pad clips under iPhone home bar |
| Touch detection | `isTouchDevice` is duplicated across modules |

---

## Design

### 0. Shared `IS_TOUCH_DEVICE` constant (`js/config/constants.js`)

Add to `constants.js`:

```javascript
export const IS_TOUCH_DEVICE = 'ontouchstart' in window;
```

Remove the existing `const isTouchDevice = 'ontouchstart' in window` from `interaction.js` and replace with an import from `constants.js`. All other modules (`mobileControls.js`, `App.js`) use this same import.

---

### 1. Camera Follow (`js/systems/cameraController.js`)

Implement character-follow in the currently-stub module. `setupCameraController()` must store its arguments to module-level variables so `updateCamera()` can close over them. Use a reusable `THREE.Vector3` for the lerp target to avoid per-frame allocation:

```javascript
import * as THREE from 'three';

let _orbitControls = null;
let _character = null;
const _targetVec = new THREE.Vector3();

export function setupCameraController(camera, controls, character) {
    _orbitControls = controls;
    _character = character;
}

export function updateCamera(delta) {
    if (!_orbitControls || !_character) return;
    // Frame-rate independent lerp: 1 - (1-0.08)^(delta*60)
    // At 60fps → t ≈ 0.08; at 30fps → t ≈ 0.15 (converges to same curve)
    const t = 1 - Math.pow(0.92, delta * 60);
    _targetVec.set(_character.position.x, 0, _character.position.z);
    _orbitControls.target.lerp(_targetVec, t);
    // OrbitControls.update() is called immediately after this in animate(),
    // so damping applies against the newly lerped target each frame.
    // The 0.08 factor (base speed) was chosen with DAMPING_FACTOR: 0.1 active;
    // the compound smoothing creates a pleasant feel without sluggishness.
}
```

**Important: `App.js` animate() call order must change.** `updateCamera(delta)` must be called BEFORE `orbitControls.update()` so OrbitControls applies damping against the newly lerped target in the same frame. The current order is wrong for follow-cam:

```javascript
// BEFORE (wrong for follow-cam):
this.orbitControls.update();
updateCamera();

// AFTER:
updateCamera(delta);          // lerp target first
this.orbitControls.update();  // then apply damping against new target
```

This benefits all platforms, not just mobile.

---

### 2. Touch Tap-to-Move (`js/systems/controls.js`)

Add `touchstart` and `touchend` listeners on `domElement`. Initialize `touchStartX/Y` to `null` (not 0) so stray `touchend` events from outside the canvas (e.g., D-pad buttons) don't accidentally trigger a raycast:

```javascript
let touchStartX = null, touchStartY = null;

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
            // Confirmed tap — perform raycast (same as mousedown)
            mouse.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const hits = raycaster.intersectObject(ground);
            if (hits.length > 0) {
                controlsState.targetPosition.copy(hits[0].point);
                controlsState.targetPosition.y = 1;
                controlsState.isMoving = true;
            }
            e.preventDefault(); // suppress 300ms ghost click — only on confirmed taps
        }
    }
}, { passive: false }); // passive: false required to allow preventDefault
```

D-pad buttons are separate DOM elements overlaid on top of the canvas. Their `touchstart`/`touchend` events do not propagate to `renderer.domElement`, so D-pad touches never reach this handler — by design.

`preventDefault()` is only called on confirmed taps (not drags) so it does not interfere with OrbitControls' two-finger pinch-to-zoom (which operates on `touchstart`/`touchmove`).

---

### 3. Mobile OrbitControls Configuration (`js/core/App.js`)

In `initOrbitControls()`, after setting up OrbitControls, conditionally disable single-touch orbit/pan on touch devices so it doesn't fight tap-to-move:

```javascript
if (IS_TOUCH_DEVICE) {
    this.orbitControls.touches = {
        ONE: null,                  // disable single-touch pan
        TWO: THREE.TOUCH.DOLLY_PAN  // keep pinch-to-zoom + two-finger pan
    };
}
```

Note: verify `THREE.TOUCH.DOLLY_PAN` exists in Three.js v0.182. If the constant is not available, use the numeric value `2`.

---

### 4. Virtual D-Pad (`js/ui/mobileControls.js`)

New module, only creates DOM when `IS_TOUCH_DEVICE` is true. Creates:
- `#mobile-dpad` — 3×3 grid D-pad, bottom-left
- `#mobile-interact` — ⚡ button, bottom-right (hidden by default; shown when in entity range)

**D-pad key mapping:**

```
NW(w+a)  N(w)   NE(w+d)
W(a)     ·      E(d)
SW(s+a)  S(s)   SE(s+d)
```

**Multi-touch key tracking:** Each button stores the `touchIdentifier` of its active touch on `touchstart`. On `touchend`/`touchcancel`, only clears its keys if `e.changedTouches[0].identifier` matches. This allows holding two directions simultaneously.

**Overlay-open guard:** Each D-pad `touchstart` handler calls `if (getOverlayOpen()) return` before setting any keys in `controlsState`.

**Interact button:** On tap, calls `const entity = getActiveEntity(); if (!entity) return; onOpenOverlay(entity.overlayId)`. The getter is called at tap-time (not init-time) to handle the race where the player walks out of range just before tapping.

**Exported API:**

```javascript
export function initMobileControls(controlsState, getActiveEntity, getOverlayOpen, onOpenOverlay) {}
// setInteractButtonVisible must null-guard the button element in case called before init
export function setInteractButtonVisible(visible) {
    const btn = document.getElementById('mobile-interact');
    if (!btn) return;
    btn.style.display = visible ? 'block' : 'none';
}
```

**`App.js`** calls `initMobileControls()` in `initUI()` after `initInteraction()`, passing:
- `this.controlsState`
- `getActiveEntity` imported from `interaction.js`
- `() => overlayIsOpen` — ES modules export live bindings, so `overlayIsOpen` in `App.js` always reflects the current value of `isOpen` in `overlay.js`; the lambda is a safe live getter
- `(id) => openOverlay(id)`

**`interaction.js`** imports `setInteractButtonVisible` from `../ui/mobileControls.js` (unconditional import, fine for tree-shaking). Calls it in `showToast()` and `hideToast()`, guarded by `IS_TOUCH_DEVICE`. Also adds a new getter export:

```javascript
export function getActiveEntity() { return _activeEntity; }
```

No circular dependency: `mobileControls.js` receives `onOpenOverlay` as a callback, not as an ES import from `interaction.js`.

---

### 5. CSS & HTML — `index.html`

**Viewport meta — REQUIRED for `safe-area-inset-*` to work on iOS:**
```html
<!-- before -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- after -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

Without `viewport-fit=cover`, `env(safe-area-inset-bottom)` evaluates to `0` on all iOS devices.

**Art grid fix** (90px min cell — sufficient for `aspect-ratio: 1` items; 3 still fit on 375px screens):
```css
/* before */
.art-grid { grid-template-columns: repeat(3, 1fr); }
/* after */
.art-grid { grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); }
```

**Touch targets** (all raised to 44px per WCAG 2.5.5 / Apple HIG):
```css
.overlay-close { min-width: 44px; min-height: 44px; }
.tab-btn       { min-height: 44px; }
.page-btn      { min-height: 44px; }
```

**Overlay scroll:**
```css
.overlay-body { touch-action: pan-y; }
```

**D-pad and interact button CSS** (injected via `mobileControls.js`, only when `IS_TOUCH_DEVICE`):
- `bottom: max(16px, env(safe-area-inset-bottom))` — avoids iPhone home bar
- Pixel-art style: semi-transparent dark background, gold border (`#b8860b`), Press Start 2P font
- D-pad buttons: 48×48px cells, 4px gap, brighter on `:active`

---

### 6. First-Visit Hint (mobile only)

On first load on a touch device, if `localStorage.getItem('mobile-hint-seen')` is falsy, show a brief overlay:

> "Use the pad to move · Tap ⚡ to interact"

Auto-dismisses after 4 seconds or on tap. Sets `localStorage.setItem('mobile-hint-seen', '1')` on dismiss. Uses `localStorage` (not `sessionStorage`) so the hint is not reshown every tab/session. Pixel-art style matching the existing toast. Implemented inside `mobileControls.js`.

---

## Files Changed

| File | Change |
|------|--------|
| `index.html` | Add `viewport-fit=cover` to meta; art grid fix; touch targets (44px); `touch-action: pan-y` |
| `js/config/constants.js` | Add `export const IS_TOUCH_DEVICE` |
| `js/systems/cameraController.js` | Implement character follow with frame-rate-independent lerp; `updateCamera(delta)` |
| `js/systems/controls.js` | Add `touchstart`/`touchend` tap-to-move with null-guarded touch tracking |
| `js/systems/interaction.js` | Import `IS_TOUCH_DEVICE`; add `getActiveEntity()` export; call `setInteractButtonVisible()` guarded by `IS_TOUCH_DEVICE` |
| `js/core/App.js` | Reorder `updateCamera(delta)` before `orbitControls.update()` in `animate()`; mobile OrbitControls config; call `initMobileControls()` |
| `js/ui/mobileControls.js` | **NEW** — D-pad + interact button + first-visit hint |

---

## Out of Scope

- Landscape/portrait lock (camera-follow + OrbitControls handles both)
- Performance reduction for mobile (Three.js runs fine on modern phones at this scene complexity)
- Alternative non-game mobile landing page

---

## Success Criteria

- [ ] Character moves in all 8 directions via D-pad on touch device
- [ ] Holding two D-pad directions simultaneously produces correct diagonal movement
- [ ] Tapping ground moves character (tap-to-move)
- [ ] Pinch-to-zoom works without triggering tap-to-move
- [ ] ⚡ interact button appears only when near entity and opens overlay on tap
- [ ] D-pad is inactive while overlay is open
- [ ] Camera follows character smoothly on all devices (no one-frame lag)
- [ ] Art gallery grid reflows correctly (auto-fill) on narrow screens
- [ ] Overlay scrolls with `touch-action: pan-y`
- [ ] D-pad does not clip under iPhone home bar (`safe-area-inset-bottom` + `viewport-fit=cover`)
- [ ] First-visit hint shown once, dismissed by tap or after 4s, not reshown after
