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
