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
