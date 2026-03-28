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
