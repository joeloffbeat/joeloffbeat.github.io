# Full Mindscape Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Joel's Mindscape into a living, breathing world with cinematic entry, audio, day/night, weather, NPCs, identity overlays, and secrets.

**Architecture:** Four independent phases — each ships working software. Phase 1 adds audio + cinematic intro. Phase 2 makes the world alive. Phase 3 adds identity content. Phase 4 adds secrets. All phases share the existing Three.js/Vite app structure; no rewrites.

**Tech Stack:** Three.js 0.182, Vite 7, Web Audio API, vanilla JS (ES modules), Press Start 2P font

**Spec:** `docs/superpowers/specs/2026-03-28-full-mindscape-overhaul-design.md`

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `js/systems/audio.js` | Create | Web Audio API — BGM, footsteps, UI sounds, water proximity |
| `js/systems/intro.js` | Create | Cinematic press-start screen + orthographic zoom |
| `js/systems/dayNight.js` | Create | Day/night cycle — sky, lights, stars opacity |
| `js/systems/weather.js` | Create | Rain particle system, random trigger |
| `js/entities/npc.js` | Create | Three wandering NPC sprites, one secret |
| `js/entities/character.js` | Modify | Export `worldToTile` for use by App.js |
| `js/entities/decorative.js` | Modify | Add firefly creation + update functions |
| `js/core/App.js` | Modify | Wire all new systems into init + game loop |
| `js/systems/controls.js` | Modify | Add cheat code buffer + Konami code |
| `js/config/worldMap.js` | Modify | Add `now-board`, `signpost` entities; enable `home` overlayId |
| `js/ui/overlayContent.js` | Modify | Add home, now, start, secret-npc, secret-portal, guestbook builders |
| `index.html` | Modify | Audio toggle button, intro screen element, new overlay skeletons |
| `public/now.json` | Create | Joel's manually-updated "now" content |

---

## Phase 1 — Polish & Entry

---

### Task 1: Export `worldToTile` from `character.js`

**Files:**
- Modify: `js/entities/character.js:115`

- [ ] **Step 1: Add `export` keyword to the function**

In `js/entities/character.js`, change line 115 from:
```js
function worldToTile(worldX, worldZ) {
```
to:
```js
export function worldToTile(worldX, worldZ) {
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build 2>&1 | tail -5
```
Expected: no errors, build succeeds.

- [ ] **Step 3: Commit**

```bash
git add js/entities/character.js
git commit -m "feat: export worldToTile from character.js"
```

---

### Task 2: Create `js/systems/audio.js`

**Files:**
- Create: `js/systems/audio.js`

- [ ] **Step 1: Create the file**

```js
// js/systems/audio.js
// Web Audio API — BGM loop, terrain footsteps, UI sounds, water proximity.

const SOUNDS = {
    bgm:       '/assets/audio/bgm.mp3',
    step_G:    '/assets/audio/step_grass.mp3',
    step_B:    '/assets/audio/step_brick.mp3',
    step_R:    '/assets/audio/step_rock.mp3',
    ui_open:   '/assets/audio/ui_open.mp3',
    ui_close:  '/assets/audio/ui_close.mp3',
    ui_blip:   '/assets/audio/ui_blip.mp3',
    water:     '/assets/audio/water_loop.mp3',
};

let _ctx = null;
let _buffers = {};
let _waterGain = null;
let _lastStepTime = -Infinity;
const STEP_COOLDOWN = 0.38; // seconds

async function _decode(url) {
    const res = await fetch(url);
    const ab = await res.arrayBuffer();
    return _ctx.decodeAudioData(ab);
}

function _oneShot(key, vol = 0.6) {
    if (!_ctx || !_buffers[key] || _ctx.state !== 'running') return;
    const src = _ctx.createBufferSource();
    src.buffer = _buffers[key];
    const g = _ctx.createGain();
    g.gain.value = vol;
    src.connect(g);
    g.connect(_ctx.destination);
    src.start();
}

export async function initAudio() {
    _ctx = new (window.AudioContext || window.webkitAudioContext)();

    _buffers = Object.fromEntries(
        await Promise.all(
            Object.entries(SOUNDS).map(async ([k, url]) => [k, await _decode(url)])
        )
    );

    // BGM — looping background music
    const bgmSrc = _ctx.createBufferSource();
    bgmSrc.buffer = _buffers.bgm;
    bgmSrc.loop = true;
    const bgmGain = _ctx.createGain();
    bgmGain.gain.value = 0.35;
    bgmSrc.connect(bgmGain);
    bgmGain.connect(_ctx.destination);
    bgmSrc.start();

    // Water loop — always running, volume driven by proximity
    const waterSrc = _ctx.createBufferSource();
    waterSrc.buffer = _buffers.water;
    waterSrc.loop = true;
    _waterGain = _ctx.createGain();
    _waterGain.gain.value = 0;
    waterSrc.connect(_waterGain);
    _waterGain.connect(_ctx.destination);
    waterSrc.start();

    // Apply saved preference (off by default)
    if (localStorage.getItem('audio') === 'on') {
        setAudioEnabled(true);
    } else {
        _ctx.suspend();
    }
}

export function setAudioEnabled(on) {
    if (!_ctx) return;
    localStorage.setItem('audio', on ? 'on' : 'off');
    if (on) { _ctx.resume(); } else { _ctx.suspend(); }
    const btn = document.getElementById('audio-toggle');
    if (btn) btn.textContent = on ? '🔊' : '🔇';
}

export function isAudioEnabled() {
    return _ctx?.state === 'running';
}

/** Call each frame when character moves. terrain = WORLD_MAP char: 'G'|'B'|'R' */
export function playFootstep(terrain, elapsedSeconds) {
    if (elapsedSeconds - _lastStepTime < STEP_COOLDOWN) return;
    _lastStepTime = elapsedSeconds;
    const key = `step_${terrain}`;
    if (_buffers[key]) _oneShot(key, 0.5);
}

/** event: 'open' | 'close' | 'blip' */
export function playUI(event) {
    _oneShot(`ui_${event}`, 0.7);
}

/** distanceWorldUnits: distance from character to nearest water tile */
export function setWaterProximity(distanceWorldUnits) {
    if (!_waterGain || !_ctx) return;
    const vol = Math.max(0, 0.7 * (1 - distanceWorldUnits / 18));
    _waterGain.gain.setTargetAtTime(vol, _ctx.currentTime, 0.5);
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build 2>&1 | tail -5
```
Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add js/systems/audio.js
git commit -m "feat: add Web Audio system — BGM, footsteps, UI sounds, water proximity"
```

---

### Task 3: Add audio toggle to `index.html` and wire into `App.js`

**Files:**
- Modify: `index.html`
- Modify: `js/core/App.js`

- [ ] **Step 1: Add audio toggle button to `index.html`**

After the closing `</style>` tag (before `</head>`), add this CSS inside the existing `<style>` block — find the `/* --- Title --- */` comment and add before it:

```css
/* --- Audio Toggle --- */
#audio-toggle {
    position: fixed;
    top: 16px;
    right: 16px;
    background: #000;
    color: #fff;
    border: 2px solid #444;
    border-radius: 4px;
    width: 44px;
    height: 44px;
    font-size: 20px;
    cursor: pointer;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
}
#audio-toggle:hover { border-color: #888; }
```

Then, in the `<body>` section of `index.html`, add after `<div id="title">Joel's Mindscape</div>`:

```html
<button id="audio-toggle" title="Toggle audio">🔇</button>
```

- [ ] **Step 2: Wire audio into `App.js`**

Add these imports at the top of `js/core/App.js`:

```js
import { initAudio, setAudioEnabled, isAudioEnabled, playFootstep, playUI, setWaterProximity } from '../systems/audio.js';
import { worldToTile } from '../entities/character.js';
import { WORLD_MAP, tileToWorld } from '../config/worldMap.js';
```

Add `this._prevCharPos` and `this._waterPositions` initialization inside the `constructor()`:

```js
this._prevCharPos = new THREE.Vector3();
this._waterPositions = [];
```

At the end of `createWorld()`, after `this.decoratives = ...`, add:

```js
// Precompute water tile world positions for proximity audio
for (let row = 0; row < WORLD_MAP.length; row++) {
    for (let col = 0; col < WORLD_MAP[row].length; col++) {
        if (WORLD_MAP[row][col] === 'W') {
            const wp = tileToWorld(col, row);
            this._waterPositions.push({ x: wp.x, z: wp.z });
        }
    }
}
this._prevCharPos.copy(this.character.position);
```

At the end of `initUI()`, add:

```js
// Audio init (non-blocking — loads buffers in background)
initAudio().catch(err => console.warn('[audio] init failed:', err));

// Audio toggle button
document.getElementById('audio-toggle').addEventListener('click', () => {
    setAudioEnabled(!isAudioEnabled());
});
```

Wire `playUI` into overlay open/close. In `App.js` `initUI()`, change the openOverlay call:

```js
initInteraction(this.entities, toastEl, (overlayId) => {
    playUI('open');
    openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
});
```

Add footstep + water proximity calls at the end of `animate()`, before `this.renderer.render(...)`:

```js
// Footsteps
const charMoved = this.character.position.distanceTo(this._prevCharPos);
if (charMoved > 0.25) {
    const { col, row } = worldToTile(this.character.position.x, this.character.position.z);
    const terrain = WORLD_MAP[row]?.[col] ?? 'G';
    playFootstep(terrain, this.clock.getElapsedTime());
    this._prevCharPos.copy(this.character.position);
}

// Water proximity audio
let minWaterDist = 999;
const cx = this.character.position.x, cz = this.character.position.z;
for (const wp of this._waterPositions) {
    const d = Math.hypot(cx - wp.x, cz - wp.z);
    if (d < minWaterDist) minWaterDist = d;
}
setWaterProximity(minWaterDist);
```

Also wire `playUI('close')` in `overlay.js`. Open `js/ui/overlay.js` and find the close function. Add `playUI('close')` before the overlay hides — but `overlay.js` can't easily import from `audio.js` without coupling. Instead, in `App.js` after `initOverlay()`, patch the close button:

```js
document.addEventListener('click', (e) => {
    if (e.target.closest('.overlay-close')) playUI('close');
});
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

Open browser. The 🔇 button appears top-right. Click it — changes to 🔊. Walking on grass/brick/rock plays different footstep sounds. Walking near the lake triggers water gurgling. Opening/closing overlays plays chimes.

- [ ] **Step 4: Commit**

```bash
git add index.html js/core/App.js
git commit -m "feat: wire audio system — footsteps, proximity water, UI sounds, toggle button"
```

---

### Task 4: Create `js/systems/intro.js`

**Files:**
- Create: `js/systems/intro.js`

- [ ] **Step 1: Create the file**

```js
// js/systems/intro.js
// Cinematic press-start screen shown on first visit per session.
// Camera zoom from 1.8× to 1× plays while the screen fades out.

import { CAMERA } from '../config/constants.js';

let _active = false;
let _zoomActive = false;
let _zoomElapsed = 0;
const ZOOM_DURATION = 2.5;
const ZOOM_START = 1.8;
let _camera = null;
let _onComplete = null;
let _screenEl = null;

export function playIntro(camera, onComplete) {
    _camera = camera;
    _onComplete = onComplete;

    if (sessionStorage.getItem('intro-done')) {
        onComplete();
        return;
    }

    _active = true;
    _screenEl = document.getElementById('intro-screen');
    if (_screenEl) _screenEl.style.display = 'flex';

    const unlock = (e) => {
        // Ignore modifier-only keys
        if (['Shift', 'Control', 'Alt', 'Meta'].includes(e?.key)) return;
        window.removeEventListener('keydown', unlock);
        window.removeEventListener('pointerdown', unlock);
        _finish();
    };
    window.addEventListener('keydown', unlock);
    window.addEventListener('pointerdown', unlock);
}

function _finish() {
    _active = false;
    _zoomActive = true;
    _zoomElapsed = 0;

    if (_screenEl) {
        _screenEl.style.opacity = '0';
        setTimeout(() => { if (_screenEl) _screenEl.style.display = 'none'; }, 700);
    }

    sessionStorage.setItem('intro-done', '1');
    _onComplete?.();
}

/** Call every frame from App.js animate(). Handles the camera zoom-in. */
export function updateIntro(delta) {
    if (!_zoomActive || !_camera) return;
    _zoomElapsed += delta;

    const t = Math.min(_zoomElapsed / ZOOM_DURATION, 1);
    const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const scale = ZOOM_START - (ZOOM_START - 1) * ease;
    const d = CAMERA.VIEW_SIZE * scale;
    const aspect = window.innerWidth / window.innerHeight;
    _camera.left   = -d * aspect;
    _camera.right  =  d * aspect;
    _camera.top    =  d;
    _camera.bottom = -d;
    _camera.updateProjectionMatrix();

    if (t >= 1) _zoomActive = false;
}

/** Returns true while the press-start gate is blocking controls. */
export function isIntroActive() {
    return _active;
}
```

- [ ] **Step 2: Add intro screen HTML + CSS to `index.html`**

Add to the `<style>` block:

```css
/* --- Intro Screen --- */
#intro-screen {
    position: fixed;
    inset: 0;
    background: #000;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 200;
    opacity: 1;
    transition: opacity 0.7s ease;
}
#intro-title {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(16px, 3vw, 32px);
    color: #fff;
    text-shadow: 3px 3px 0 #333;
    letter-spacing: 4px;
    animation: introFlicker 1s ease-out forwards;
}
@keyframes introFlicker {
    0%   { opacity: 0; }
    30%  { opacity: 1; }
    35%  { opacity: 0.2; }
    45%  { opacity: 1; }
    50%  { opacity: 0.6; }
    60%  { opacity: 1; }
    100% { opacity: 1; }
}
#intro-prompt {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(8px, 1.5vw, 13px);
    color: #ffd700;
    margin-top: 36px;
    animation: blink 1s step-start infinite;
}
@keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}
```

Add to `<body>` (before the `#title` div):

```html
<div id="intro-screen">
    <div id="intro-title">JOEL'S MINDSCAPE</div>
    <div id="intro-prompt">— PRESS ANY KEY TO EXPLORE —</div>
</div>
```

- [ ] **Step 3: Wire intro into `App.js`**

Add import at the top of `App.js`:

```js
import { playIntro, updateIntro, isIntroActive } from '../systems/intro.js';
```

In `App.js init()`, change the call order so `animate()` starts BEFORE the intro:

```js
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
    this.animate(); // start loop first so zoom can animate
    playIntro(this.camera, () => {}); // unlock controls on keypress
}
```

In `animate()`, add `updateIntro(delta)` near the top and include intro state in the blocked check:

```js
animate() {
    requestAnimationFrame(() => this.animate());
    const delta = this.clock.getDelta();

    updateIntro(delta); // camera zoom — no-op after zoom completes

    updateCamera(delta);
    this.orbitControls.update();

    const blocked = overlayIsOpen || isIntroActive();
    updateCharacterPosition(this.character, this.controlsState, this.clock, delta, this.colliders, blocked, this.camera);
    // ... rest unchanged
}
```

- [ ] **Step 4: Verify in dev server**

```bash
npm run dev
```

First visit: black screen with "JOEL'S MINDSCAPE" title flickers in, gold blinking prompt. Press any key — screen fades out, world zooms in from wide view over ~2.5 seconds. Second visit (same session): no intro screen, world loads directly.

- [ ] **Step 5: Commit**

```bash
git add js/systems/intro.js index.html js/core/App.js
git commit -m "feat: add cinematic intro screen — press-start gate, camera zoom, session skip"
```

---

## Phase 2 — Living World

---

### Task 5: Create `js/systems/dayNight.js`

**Files:**
- Create: `js/systems/dayNight.js`

- [ ] **Step 1: Create the file**

```js
// js/systems/dayNight.js
// Maps real local time to sky color, ambient/directional light, and star opacity.
// Cached for 10 seconds to avoid Date() spam at 60fps.

import * as THREE from 'three';

// Each keyframe: hour (0-24), sky hex, ambient intensity, dir intensity, dir color hex, phase name
const KF = [
    { h:  0, sky: 0x080820, amb: 0.15, dirI: 0.10, dirC: 0x3355aa, phase: 'night'   },
    { h:  5, sky: 0x080820, amb: 0.15, dirI: 0.10, dirC: 0x3355aa, phase: 'night'   },
    { h:  6, sky: 0xff7030, amb: 0.42, dirI: 0.50, dirC: 0xff9955, phase: 'dawn'    },
    { h:  7, sky: 0x87ceeb, amb: 0.80, dirI: 1.00, dirC: 0xffffff, phase: 'day'     },
    { h: 17, sky: 0x87ceeb, amb: 0.80, dirI: 1.00, dirC: 0xffffff, phase: 'day'     },
    { h: 19, sky: 0xff4500, amb: 0.48, dirI: 0.55, dirC: 0xff6633, phase: 'dusk'    },
    { h: 20, sky: 0x1a1a3e, amb: 0.28, dirI: 0.25, dirC: 0x4466cc, phase: 'evening' },
    { h: 23, sky: 0x080820, amb: 0.15, dirI: 0.10, dirC: 0x3355aa, phase: 'night'   },
    { h: 24, sky: 0x080820, amb: 0.15, dirI: 0.10, dirC: 0x3355aa, phase: 'night'   },
];

let _phase = 'day';
let _brightness = 0.8;
let _lastCacheMs = -1;
let _cache = null;
const _tmpColor = new THREE.Color();

function _lerp(a, b, t) { return a + (b - a) * t; }

function _lerpHex(hexA, hexB, t) {
    const ra = (hexA >> 16) & 0xff, ga = (hexA >> 8) & 0xff, ba = hexA & 0xff;
    const rb = (hexB >> 16) & 0xff, gb = (hexB >> 8) & 0xff, bb = hexB & 0xff;
    return (Math.round(_lerp(ra, rb, t)) << 16) |
           (Math.round(_lerp(ga, gb, t)) << 8)  |
            Math.round(_lerp(ba, bb, t));
}

function _computeState() {
    const now = new Date();
    const h = now.getHours() + now.getMinutes() / 60;
    let lo = KF[0], hi = KF[KF.length - 1];
    for (let i = 0; i < KF.length - 1; i++) {
        if (h >= KF[i].h && h < KF[i + 1].h) { lo = KF[i]; hi = KF[i + 1]; break; }
    }
    const t = (h - lo.h) / Math.max(hi.h - lo.h, 0.0001);
    return {
        sky:   _lerpHex(lo.sky,  hi.sky,  t),
        amb:   _lerp(lo.amb,     hi.amb,  t),
        dirI:  _lerp(lo.dirI,    hi.dirI, t),
        dirC:  _lerpHex(lo.dirC, hi.dirC, t),
        phase: t < 0.5 ? lo.phase : hi.phase,
    };
}

export function updateDayNight(renderer, ambientLight, directionalLight, starsMesh) {
    const nowMs = Date.now();
    if (nowMs - _lastCacheMs > 10000) { _cache = _computeState(); _lastCacheMs = nowMs; }
    const s = _cache;

    _phase = s.phase;
    _brightness = s.amb;

    renderer.setClearColor(s.sky);
    ambientLight.intensity = s.amb;
    directionalLight.intensity = s.dirI;
    directionalLight.color.setHex(s.dirC);

    if (starsMesh) {
        const target = (_phase === 'night' || _phase === 'evening') ? 1.0
                     : (_phase === 'dawn'  || _phase === 'dusk')    ? 0.4 : 0.0;
        starsMesh.material.opacity += (target - starsMesh.material.opacity) * 0.005;
    }
}

export function getPhase() { return _phase; }
export function getSkyBrightness() { return _brightness; }
```

- [ ] **Step 2: Wire into `App.js`**

Add import:
```js
import { updateDayNight, getPhase } from '../systems/dayNight.js';
```

Store stars mesh reference. In `createWorld()`, change:
```js
this.scene.add(createStars());
```
to:
```js
this.starsMesh = createStars();
this.scene.add(this.starsMesh);
```

Add `this.starsMesh = null;` to the constructor.

In `animate()`, after `updateStars(delta)`:
```js
updateDayNight(this.renderer, this.ambientLight, this.directionalLight, this.starsMesh);
```

Remove the static background set in `applyLighting()` — dayNight now manages it. Change:
```js
this.scene.background = new THREE.Color(SCENE.BACKGROUND_COLOR);
```
to:
```js
// background managed by dayNight
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

Open browser. To test quickly: temporarily hard-code a night-time hour by replacing `new Date()` with `{ getHours: () => 22, getMinutes: () => 0 }` in `_computeState()`, verify sky goes dark and stars appear. Then restore it.

- [ ] **Step 4: Commit**

```bash
git add js/systems/dayNight.js js/core/App.js
git commit -m "feat: add day/night cycle — sky, lighting, stars driven by real clock"
```

---

### Task 6: Create `js/systems/weather.js`

**Files:**
- Create: `js/systems/weather.js`

- [ ] **Step 1: Create the file**

```js
// js/systems/weather.js
// Rain particle system. Randomly triggered every 5 real-minutes (20% chance).

import * as THREE from 'three';

const PARTICLE_COUNT = 800;

let _mesh = null;
let _positions = null;
let _raining = false;
let _checkTimer = 0;
let _rainTimer = 0;
let _rainDuration = 0;
let _opacity = 0;

const CHECK_INTERVAL = 300;  // 5 minutes in seconds
const RAIN_CHANCE = 0.2;
const RAIN_MIN = 120;
const RAIN_MAX = 300;

export function createWeather(scene) {
    _positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        _positions[i * 3]     = (Math.random() - 0.5) * 140;
        _positions[i * 3 + 1] = Math.random() * 80;
        _positions[i * 3 + 2] = (Math.random() - 0.5) * 140;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(_positions, 3));

    const mat = new THREE.PointsMaterial({
        color: 0xaaccff,
        size: 0.4,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        sizeAttenuation: true,
    });

    _mesh = new THREE.Points(geo, mat);
    scene.add(_mesh);
}

export function updateWeather(delta) {
    if (!_mesh) return;

    // Check whether to start rain
    _checkTimer += delta;
    if (_checkTimer >= CHECK_INTERVAL) {
        _checkTimer = 0;
        if (!_raining && Math.random() < RAIN_CHANCE) {
            _raining = true;
            _rainTimer = 0;
            _rainDuration = RAIN_MIN + Math.random() * (RAIN_MAX - RAIN_MIN);
        }
    }

    if (_raining) {
        _rainTimer += delta;
        if (_rainTimer >= _rainDuration) _raining = false;
    }

    // Smooth fade in/out
    const target = _raining ? 0.55 : 0;
    const fadeSpeed = _raining ? 0.4 : 0.25; // fade in faster than fade out
    _opacity += (target - _opacity) * fadeSpeed * delta;
    _mesh.material.opacity = Math.max(0, Math.min(0.6, _opacity));

    if (_opacity > 0.01) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            _positions[i * 3]     -= 5  * delta; // slight diagonal
            _positions[i * 3 + 1] -= 38 * delta; // fall speed

            if (_positions[i * 3 + 1] < -5) {
                _positions[i * 3]     = (Math.random() - 0.5) * 140;
                _positions[i * 3 + 1] = 65 + Math.random() * 20;
                _positions[i * 3 + 2] = (Math.random() - 0.5) * 140;
            }
        }
        _mesh.geometry.attributes.position.needsUpdate = true;
    }
}

export function isRaining() { return _raining; }

/** Force rain on for testing. Call stopRain() to clear. */
export function startRainNow() { _raining = true; _rainTimer = 0; _rainDuration = 999; }
export function stopRain()     { _raining = false; }
```

- [ ] **Step 2: Wire into `App.js`**

Add import:
```js
import { createWeather, updateWeather } from '../systems/weather.js';
```

At the end of `createWorld()`:
```js
createWeather(this.scene);
```

In `animate()`, after `updateDecoratives(...)`:
```js
updateWeather(delta);
```

- [ ] **Step 3: Verify rain manually**

In the browser console, run:
```js
// Temporarily import and call:
import('/js/systems/weather.js').then(m => m.startRainNow())
```

Or add a temporary call in App.js `init()`: `startRainNow()` after `createWorld()`. Verify blue diagonal streaks appear, then fade when `stopRain()` is called.

- [ ] **Step 4: Remove test call and commit**

```bash
git add js/systems/weather.js js/core/App.js
git commit -m "feat: add weather system — random rain events with particle fade"
```

---

### Task 7: Create `js/entities/npc.js`

**Files:**
- Create: `js/entities/npc.js`

- [ ] **Step 1: Create the file**

```js
// js/entities/npc.js
// Three sprite NPCs wandering walkable tiles. One secret NPC triggers an overlay.

import * as THREE from 'three';
import { SPRITE_ROTATION_X, CHARACTER, ASSETS } from '../config/constants.js';
import { WORLD_MAP, NON_WALKABLE, tileToWorld } from '../config/worldMap.js';

const FRAME_W = 1 / 8;  // 8 columns in character sprite sheet
const FRAME_H = 1 / 3;  // 3 rows
const NPC_W = 3.5;
const NPC_H = 3.5;
const NPC_SPEED = CHARACTER.SPEED * 0.45;

// NPC definitions: frameCol = which column of the idle row to use
const NPC_DEFS = [
    { id: 'npc-0', frameCol: 2, tintHex: 0xffdddd, isSecret: false, label: 'Villager',  description: 'A wandering villager', icon: '🧑' },
    { id: 'npc-1', frameCol: 4, tintHex: 0xddffdd, isSecret: false, label: 'Villager',  description: 'A wandering villager', icon: '🧑' },
    { id: 'npc-2', frameCol: 6, tintHex: 0xccddff, isSecret: true,  label: '???',       description: 'A mysterious figure',  icon: '❓' },
];

let _walkable = null;

function _getWalkable() {
    if (_walkable) return _walkable;
    _walkable = [];
    for (let row = 0; row < WORLD_MAP.length; row++) {
        for (let col = 0; col < WORLD_MAP[row].length; col++) {
            if (!NON_WALKABLE.has(WORLD_MAP[row][col])) {
                const wp = tileToWorld(col, row);
                _walkable.push({ x: wp.x, z: wp.z });
            }
        }
    }
    return _walkable;
}

function _randomPos() {
    const w = _getWalkable();
    return { ...w[Math.floor(Math.random() * w.length)] };
}

export async function createNPCs() {
    const texture = await new Promise((resolve, reject) =>
        new THREE.TextureLoader().load(ASSETS.CHARACTER_SPRITE, resolve, undefined, reject)
    );
    texture.magFilter = THREE.NearestFilter;

    return NPC_DEFS.map(def => {
        const tex = texture.clone();
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(FRAME_W, FRAME_H);
        // Row 1 (middle row = idle), chosen column
        tex.offset.set(def.frameCol * FRAME_W, FRAME_H);
        tex.needsUpdate = true;

        const geo = new THREE.PlaneGeometry(NPC_W, NPC_H);
        geo.translate(0, NPC_H / 2, 0);

        const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            color: new THREE.Color(def.tintHex),
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.x = SPRITE_ROTATION_X;

        const startPos = _randomPos();
        mesh.position.set(startPos.x, CHARACTER.BOBBING.BASE_HEIGHT, startPos.z);

        const npc = {
            mesh,
            def,
            target: _randomPos(),
            pauseTimer: 0,
            pausing: false,
            // interaction.js interface:
            overlayId:     def.isSecret ? 'secret-npc-overlay' : null,
            triggerRadius: def.isSecret ? 6 : 0,
            label:         def.label,
            description:   def.description,
            icon:          def.icon,
            getDistanceTo: (pos) => mesh.position.distanceTo(pos),
        };

        return npc;
    });
}

export function updateNPCs(npcs, delta) {
    for (const npc of npcs) {
        if (npc.pausing) {
            npc.pauseTimer -= delta;
            if (npc.pauseTimer <= 0) {
                npc.pausing = false;
                npc.target = _randomPos();
            }
            continue;
        }

        const dx = npc.target.x - npc.mesh.position.x;
        const dz = npc.target.z - npc.mesh.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.5) {
            npc.pausing = true;
            npc.pauseTimer = 1 + Math.random() * 2.5;
            continue;
        }

        const step = NPC_SPEED * delta;
        npc.mesh.position.x += (dx / dist) * step;
        npc.mesh.position.z += (dz / dist) * step;
    }
}
```

- [ ] **Step 2: Wire NPCs into `App.js`**

Add import:
```js
import { createNPCs, updateNPCs } from '../entities/npc.js';
```

Add `this.npcs = [];` in constructor.

At the end of `createWorld()`:
```js
this.npcs = await createNPCs();
for (const npc of this.npcs) this.scene.add(npc.mesh);
```

In `initUI()`, update `initInteraction` to include secret NPC:
```js
const interactables = [
    ...this.entities,
    ...this.npcs.filter(n => n.def.isSecret),
];
initInteraction(interactables, toastEl, (overlayId) => {
    playUI('open');
    openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
});
```

In `animate()`, after `updateDecoratives(...)`:
```js
updateNPCs(this.npcs, delta);
```

- [ ] **Step 3: Add secret NPC overlay content**

In `js/ui/overlayContent.js`, add to the `BUILDERS` object:
```js
'secret-npc-overlay': buildSecretNpcOverlay,
```

And add the function before the `BUILDERS` definition:
```js
function buildSecretNpcOverlay() {
    return {
        title: '❓ ???',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">Hey.</div>
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc">
                        You found me.<br><br>
                        Most people never explore this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every system, every sprite.<br><br>
                        <span style="color:#ffd700">The real secret?</span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                </div>
            </div>`,
    };
}
```

- [ ] **Step 4: Verify in dev server**

```bash
npm run dev
```

Three slightly tinted sprites wander around the map. The blue-tinted mysterious one shows "???" in the toast when you walk close. Pressing E opens the secret message.

- [ ] **Step 5: Commit**

```bash
git add js/entities/npc.js js/core/App.js js/ui/overlayContent.js
git commit -m "feat: add NPC wanderers with secret dialogue overlay"
```

---

### Task 8: Add fireflies to `js/entities/decorative.js`

**Files:**
- Modify: `js/entities/decorative.js`

- [ ] **Step 1: Add firefly creation + update to `decorative.js`**

Append to the end of `js/entities/decorative.js`:

```js
// ---------------------------------------------------------------------------
// Fireflies — programmatic CanvasTexture, phase-driven visibility
// ---------------------------------------------------------------------------

const FIREFLY_COUNT = 14;
let _fireflies = [];

function _makeFireflyTexture() {
    const size = 16;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0,   'rgba(255, 255, 180, 1)');
    grad.addColorStop(0.4, 'rgba(200, 255, 100, 0.6)');
    grad.addColorStop(1,   'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.LinearFilter;
    return tex;
}

export function createFireflies(scene) {
    const tex = _makeFireflyTexture();
    _fireflies = [];

    for (let i = 0; i < FIREFLY_COUNT; i++) {
        const geo = new THREE.PlaneGeometry(0.9, 0.9);
        const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            opacity: 0,
        });
        const mesh = new THREE.Mesh(geo, mat);

        // Random start position in grass area (world center ±30 units)
        const x = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 60;
        const y = 2 + Math.random() * 4; // hover 2-6 units above ground
        mesh.position.set(x, y, z);
        mesh.rotation.x = SPRITE_ROTATION_X;

        const ff = {
            mesh,
            baseY: y,
            phase: Math.random() * Math.PI * 2,
            driftX: (Math.random() - 0.5) * 0.3,
            driftZ: (Math.random() - 0.5) * 0.3,
            wrapMin: -30,
            wrapMax:  30,
        };
        _fireflies.push(ff);
        scene.add(mesh);
    }
}

export function updateFireflies(elapsed, phase) {
    // Target opacity: 1 at night/evening, 0 at day, 0.4 at dawn/dusk
    const targetOpacity = (phase === 'night' || phase === 'evening') ? 1.0
                        : (phase === 'dawn'  || phase === 'dusk')    ? 0.35 : 0.0;

    for (const ff of _fireflies) {
        // Hover bob
        ff.mesh.position.y = ff.baseY + Math.sin(elapsed * 1.2 + ff.phase) * 0.6;

        // Drift
        ff.mesh.position.x += ff.driftX * 0.016;
        ff.mesh.position.z += ff.driftZ * 0.016;

        // Wrap within bounds
        if (ff.mesh.position.x > ff.wrapMax) ff.mesh.position.x = ff.wrapMin;
        if (ff.mesh.position.x < ff.wrapMin) ff.mesh.position.x = ff.wrapMax;
        if (ff.mesh.position.z > ff.wrapMax) ff.mesh.position.z = ff.wrapMin;
        if (ff.mesh.position.z < ff.wrapMin) ff.mesh.position.z = ff.wrapMax;

        // Fade opacity toward target
        const cur = ff.mesh.material.opacity;
        ff.mesh.material.opacity = cur + (targetOpacity - cur) * 0.008;
    }
}
```

- [ ] **Step 2: Wire fireflies into `App.js`**

Add to the import from `decorative.js`:
```js
import { createDecoratives, updateDecoratives, createFireflies, updateFireflies } from '../entities/decorative.js';
```

At the end of `createWorld()`:
```js
createFireflies(this.scene);
```

In `animate()`, after `updateDecoratives(...)`:
```js
updateFireflies(this.clock.getElapsedTime(), getPhase());
```

- [ ] **Step 3: Verify at night**

Temporarily force night phase in `dayNight.js` (change `_lastCacheMs = -1` never resets, or hardcode phase for test). Verify 14 small glowing dots drift around the grass area.

- [ ] **Step 4: Commit**

```bash
git add js/entities/decorative.js js/core/App.js
git commit -m "feat: add fireflies — phase-driven glow sprites appearing at night"
```

---

## Phase 3 — Identity

---

### Task 9: Enable Home entity + add overlay content

**Files:**
- Modify: `js/config/worldMap.js`
- Modify: `js/ui/overlayContent.js`

- [ ] **Step 1: Enable `home` overlay in `worldMap.js`**

Find the `home` entry in `ENTITY_PLACEMENTS` and change `overlayId: null` to:
```js
overlayId: 'home-overlay',
```

- [ ] **Step 2: Add home overlay builder to `overlayContent.js`**

Add `'home-overlay': buildHomeOverlay,` to the `BUILDERS` object.

Add this function before the `BUILDERS` definition:

```js
function buildHomeOverlay() {
    return {
        title: '🏠 Joel\'s Mindscape',
        html: `
            <div class="contact-card">
                <div class="contact-name">JOEL</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#4a9eff;font-size:clamp(7px,1.1vw,10px)">
                    Tech Lead &middot; Creator &middot; Data Nerd &middot; Maker
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc;text-align:center">
                        Associate Software Tech Lead @ KLA Corporation, India.<br>
                        Building things at the intersection of data, code, and art.<br><br>
                        Loves: coding &middot; data science &middot; IoT &middot; illustrations<br>
                        caricatures &middot; video editing &middot; making stuff.
                    </p>
                    <p style="font-size:clamp(8px,1.3vw,11px);line-height:2;color:#ffd700;text-align:center;margin-top:16px">
                        "Stop waiting. Build the thing."
                    </p>
                </div>
                <div class="overlay-section">
                    <h3 style="text-align:center;margin-bottom:14px">EXPLORE THE MINDSCAPE</h3>
                    <div class="contact-links">
                        <a href="#" class="contact-link home-nav-link" data-overlay="blog-overlay">🖥️ Tech Blog</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="projects-overlay">🔧 Projects</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="art-overlay">🎨 Art Gallery</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="music-overlay">🎵 Music &amp; Playlists</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="books-overlay">📚 Books &amp; Movies</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="travel-overlay">🚗 Travel Plans</a>
                    </div>
                </div>
            </div>`,
        onReady: (bodyEl) => {
            bodyEl.addEventListener('click', (e) => {
                const link = e.target.closest('.home-nav-link');
                if (!link) return;
                e.preventDefault();
                // Lazy import avoids circular dep with overlay.js
                import('./overlay.js').then(({ open }) => {
                    open(link.dataset.overlay).catch(console.error);
                });
            });
        },
    };
}
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

Walk up to the house. Toast shows "🏠 Home". Press E — About Joel overlay opens with name, tagline, bio, and working explore links to all sections.

- [ ] **Step 4: Commit**

```bash
git add js/config/worldMap.js js/ui/overlayContent.js
git commit -m "feat: add About Joel home overlay with explore links"
```

---

### Task 10: Add "Now" board entity

**Files:**
- Modify: `js/config/worldMap.js`
- Modify: `js/ui/overlayContent.js`
- Create: `public/now.json`

- [ ] **Step 1: Create `public/now.json`**

```json
{
  "building": "This very Mindscape — adding life to the world",
  "reading": "The Pragmatic Programmer",
  "watching": "Severance S2",
  "listening": "Tame Impala — Currents",
  "thinking_about": "Getting serious about IoT and hardware projects"
}
```

- [ ] **Step 2: Add now-board entity to `ENTITY_PLACEMENTS` in `worldMap.js`**

Add this entry to the `ENTITY_PLACEMENTS` array (after the `server` entry works well):

```js
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
```

- [ ] **Step 3: Add `now-overlay` builder to `overlayContent.js`**

Add `'now-overlay': buildNowOverlay,` to `BUILDERS`.

Add this async builder before `BUILDERS`:

```js
async function buildNowOverlay() {
    let data = null;
    try {
        const res = await fetch('/now.json');
        if (res.ok) data = await res.json();
    } catch (_) {}

    if (!data) {
        return {
            title: '📌 Now',
            html: '<div class="overlay-loading">Board is empty. Update public/now.json.</div>',
        };
    }

    const items = [
        { label: 'Building',       value: data.building,       icon: '🔨' },
        { label: 'Reading',        value: data.reading,        icon: '📖' },
        { label: 'Watching',       value: data.watching,       icon: '📺' },
        { label: 'Listening to',   value: data.listening,      icon: '🎧' },
        { label: 'Thinking about', value: data.thinking_about, icon: '💭' },
    ].filter(i => i.value);

    const rows = items.map(i => `
        <div class="watched-card">
            <div class="watched-info">
                <div class="watched-title">${esc(i.icon)} ${esc(i.label)}</div>
                <div class="watched-meta">${esc(i.value)}</div>
            </div>
        </div>`).join('');

    return {
        title: "📌 What Joel's Up To Now",
        html: `<div class="watched-grid">${rows}</div>`,
    };
}
```

- [ ] **Step 4: Verify in dev server**

Walk to the bulletin board near tile (19, 10). Press E — shows 5 "now" cards. Edit `public/now.json`, refresh, verify new values appear.

- [ ] **Step 5: Commit**

```bash
git add js/config/worldMap.js js/ui/overlayContent.js public/now.json
git commit -m "feat: add Now bulletin board entity and overlay"
```

---

### Task 11: Add "Start Something" signpost entity

**Files:**
- Modify: `js/config/worldMap.js`
- Modify: `js/ui/overlayContent.js`

- [ ] **Step 1: Add signpost entity to `ENTITY_PLACEMENTS`**

```js
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
```

- [ ] **Step 2: Add `start-overlay` builder**

Add `'start-overlay': buildStartOverlay,` to `BUILDERS`.

```js
function buildStartOverlay() {
    const PROMPTS = [
        "You've been thinking about that project for months. Start today. Seriously.",
        "Draw something. It doesn't have to be good. Just draw it.",
        "The gap between your taste and your output closes only by making more things.",
        "What would you build if you knew it would fail? Build that.",
        "Joel started this website to inspire himself as much as anyone else. What's yours?",
    ];
    const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];

    return {
        title: '🔥 Start Something',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(9px,1.6vw,14px);line-height:2.2;color:#ffd700;text-align:center">
                    ${esc(prompt)}
                </div>
                <div class="contact-links" style="margin-top:28px">
                    <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → See what Joel builds on GitHub
                    </a>
                    <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → Follow the creative journey
                    </a>
                </div>
            </div>`,
    };
}
```

- [ ] **Step 3: Verify and commit**

```bash
npm run dev
```

Walk to signpost. Press E — random prompt from the 5 appears.

```bash
git add js/config/worldMap.js js/ui/overlayContent.js
git commit -m "feat: add Start Something signpost entity with rotating prompts"
```

---

### Task 12: Add guestbook tab to contact overlay

**Files:**
- Modify: `js/ui/overlayContent.js`

- [ ] **Step 1: Set up GitHub Discussions for Giscus**

Go to `https://giscus.app`. Fill in:
- Repository: `joeloffbeat/joeloffbeat.github.io`
- Page ↔ Discussions mapping: `Specific page` → term: `guestbook`
- Discussion category: Create a new category called **Guestbook** in your repo's Discussions tab

Giscus will output a `data-repo-id` and `data-category-id`. Copy those two values.

- [ ] **Step 2: Replace `buildContactOverlay` in `overlayContent.js`**

Replace the entire `buildContactOverlay` function with:

```js
function buildContactOverlay() {
    // Replace FILL_IN values with IDs from https://giscus.app
    const REPO_ID     = 'FILL_IN_REPO_ID';
    const CATEGORY_ID = 'FILL_IN_CATEGORY_ID';

    return {
        title: '🐦 Contact Info',
        html: `
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="contact">📬 Contact</button>
                <button class="tab-btn" data-tab="guestbook">📖 Guestbook</button>
            </div>
            <div class="tab-panel" data-panel="contact">
                <div class="contact-card">
                    <div class="contact-name">Joel</div>
                    <div class="contact-links">
                        <a href="mailto:joeloffbeat@gmail.com" class="contact-link">📧 joeloffbeat@gmail.com</a>
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">🐙 GitHub</a>
                        <a href="https://www.linkedin.com/in/joel-antony-xaviour-97394a140/" target="_blank" rel="noopener noreferrer" class="contact-link">💼 LinkedIn</a>
                        <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">📷 Instagram</a>
                        <a href="https://x.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">𝕏 X</a>
                    </div>
                </div>
            </div>
            <div class="tab-panel tab-panel-hidden" data-panel="guestbook">
                <div class="giscus-container" style="padding:8px 0;min-height:200px"></div>
            </div>`,
        onReady: (bodyEl) => {
            let giscusLoaded = false;

            bodyEl.addEventListener('click', (e) => {
                const btn = e.target.closest('.tab-btn');
                if (!btn) return;
                const tab = btn.dataset.tab;
                bodyEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                bodyEl.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel-hidden'));
                const panel = bodyEl.querySelector(`.tab-panel[data-panel="${CSS.escape(tab)}"]`);
                panel.classList.remove('tab-panel-hidden');

                if (tab === 'guestbook' && !giscusLoaded) {
                    giscusLoaded = true;
                    const s = document.createElement('script');
                    s.src = 'https://giscus.app/client.js';
                    s.setAttribute('data-repo',             'joeloffbeat/joeloffbeat.github.io');
                    s.setAttribute('data-repo-id',          REPO_ID);
                    s.setAttribute('data-category',         'Guestbook');
                    s.setAttribute('data-category-id',      CATEGORY_ID);
                    s.setAttribute('data-mapping',          'specific');
                    s.setAttribute('data-term',             'guestbook');
                    s.setAttribute('data-reactions-enabled','1');
                    s.setAttribute('data-emit-metadata',    '0');
                    s.setAttribute('data-input-position',   'top');
                    s.setAttribute('data-theme',            'dark');
                    s.setAttribute('data-lang',             'en');
                    s.setAttribute('crossorigin',           'anonymous');
                    s.async = true;
                    bodyEl.querySelector('.giscus-container').appendChild(s);
                }
            });
        },
    };
}
```

- [ ] **Step 3: Fill in Giscus IDs**

Replace `FILL_IN_REPO_ID` and `FILL_IN_CATEGORY_ID` with the actual values from giscus.app.

- [ ] **Step 4: Verify and commit**

```bash
npm run dev
```

Walk to Birdhouse. Contact tab works as before. Guestbook tab loads Giscus widget on first click.

```bash
git add js/ui/overlayContent.js
git commit -m "feat: add guestbook tab to contact overlay via Giscus"
```

---

## Phase 4 — Secrets

---

### Task 13: Add cheat codes + Konami code to `controls.js`

**Files:**
- Modify: `js/systems/controls.js`

- [ ] **Step 1: Add cheat state + key buffer to `controls.js`**

Add at the top of `js/systems/controls.js`, before the `raycaster` declaration:

```js
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
```

- [ ] **Step 2: Wire cheat detection into the existing `keydown` listener**

In `setupControls`, inside the existing `window.addEventListener('keydown', (e) => { ... })` block, add at the end (before the closing `}`):

```js
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
```

- [ ] **Step 3: Commit**

```bash
git add js/systems/controls.js
git commit -m "feat: add cheat codes (NOCLIP/FLY/TURBO/RESET) and Konami rainbow mode"
```

---

### Task 14: Wire cheat states into character movement

**Files:**
- Modify: `js/core/App.js`
- Modify: `js/entities/character.js`

- [ ] **Step 1: Import cheatState in `App.js`**

Add to imports:
```js
import { cheatState } from '../systems/controls.js';
```

- [ ] **Step 2: Apply TURBO and FLY in `App.js animate()`**

The `updateCharacterPosition` call passes `this.controlsState`. Before that call, apply turbo:

```js
// Turbo cheat: force space key on while turbo is active
if (cheatState.turbo) this.controlsState.keys[' '] = true;

const blocked = overlayIsOpen || isIntroActive();
updateCharacterPosition(this.character, this.controlsState, this.clock, delta, this.colliders, blocked, this.camera);

// FLY cheat: override character y-position to float above ground
if (cheatState.fly) this.character.position.y = CHARACTER.BOBBING.BASE_HEIGHT + 5;
```

Add `import { CHARACTER } from '../config/constants.js';` if not already present (it is, just check).

- [ ] **Step 3: Apply NOCLIP in `character.js`**

Import cheatState at the top of `character.js`:
```js
import { cheatState } from '../systems/controls.js';
```

In `isBlocked(pos, colliders)`, wrap the checks:
```js
function isBlocked(pos, colliders) {
    if (cheatState.noclip) return false; // NOCLIP bypasses all collision
    if (isTerrainBlocked(pos.x, pos.z)) return true;
    const sphere = new THREE.Sphere(pos, CHARACTER.COLLISION_RADIUS);
    for (let i = 0; i < colliders.length; i++) {
        if (colliders[i].intersectsSphere(sphere)) return true;
    }
    return false;
}
```

- [ ] **Step 4: Verify cheats work**

```bash
npm run dev
```

- Type `NOCLIP` while walking → walk through water and buildings
- Type `FLY` → character floats 5 units above ground
- Type `TURBO` → always at dash speed
- Type `RESET` → all cheats clear
- Konami sequence → rainbow canvas + confetti

- [ ] **Step 5: Commit**

```bash
git add js/core/App.js js/entities/character.js
git commit -m "feat: wire cheat states — NOCLIP collision bypass, FLY, TURBO speed"
```

---

### Task 15: Add hidden portal tile

**Files:**
- Modify: `js/core/App.js`
- Modify: `js/ui/overlayContent.js`

- [ ] **Step 1: Add portal check in `App.js animate()`**

Add `this._portalTriggered = false;` to the constructor.

In `animate()`, after the footstep detection block:

```js
// Hidden portal tile — secret area at (27, 27)
if (!this._portalTriggered && !overlayIsOpen) {
    const { col, row } = worldToTile(this.character.position.x, this.character.position.z);
    if (col === 27 && row === 27) {
        this._portalTriggered = true;
        playUI('open');
        openOverlay('secret-portal-overlay').catch(err => console.error(err));
    }
}
```

- [ ] **Step 2: Add `secret-portal-overlay` builder**

Add `'secret-portal-overlay': buildSecretPortalOverlay,` to `BUILDERS`.

```js
function buildSecretPortalOverlay() {
    return {
        title: '✨ You Found It',
        html: `
            <div class="contact-card">
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.5;color:#ccc">
                        Most people never walk this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every sprite, every system.<br><br>
                        <span style="color:#ffd700;font-size:clamp(8px,1.3vw,12px)">
                            The real secret?
                        </span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                    <div class="contact-links" style="margin-top:24px">
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                            → Start on GitHub
                        </a>
                    </div>
                </div>
            </div>`,
    };
}
```

- [ ] **Step 3: Verify**

Use NOCLIP cheat to walk to tile (27, 27) in the bottom-right corner. Secret overlay triggers once per page load.

- [ ] **Step 4: Commit**

```bash
git add js/core/App.js js/ui/overlayContent.js
git commit -m "feat: add hidden portal tile at (27,27) with secret overlay"
```

---

## Self-Review

- [x] **Spec coverage:** Audio (T2–T3 ✓), Intro (T4 ✓), Day/Night (T5 ✓), Weather (T6 ✓), NPCs (T7 ✓), Fireflies (T8 ✓), Home overlay (T9 ✓), Now board (T10 ✓), Signpost (T11 ✓), Guestbook (T12 ✓), Cheat codes (T13–T14 ✓), Portal (T15 ✓), Secret NPC (T7 ✓).
- [x] **No placeholders** except Giscus IDs (intentional — requires user setup).
- [x] **Type consistency:** `cheatState` exported from controls.js, imported identically in App.js and character.js. `worldToTile` exported from character.js, imported in App.js. `getPhase()` exported from dayNight.js, imported in App.js for firefly update. All consistent.
- [x] **`createWeather` takes `scene` param** — called as `createWeather(this.scene)` ✓.
- [x] **`createFireflies` takes `scene` param** — called as `createFireflies(this.scene)` ✓.
