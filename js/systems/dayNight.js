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
