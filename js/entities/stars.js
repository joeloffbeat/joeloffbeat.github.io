import * as THREE from 'three';

const STAR_COUNT = 500;
const STAR_RADIUS = 320;

let _geometry = null;
let _colors = null;
let _phases = null;
let _speeds = null;
let _bases = null;
let _timer = 0;

export function createStars() {
    const positions = new Float32Array(STAR_COUNT * 3);
    _colors = new Float32Array(STAR_COUNT * 3);
    _phases = new Float32Array(STAR_COUNT);
    _speeds = new Float32Array(STAR_COUNT);
    _bases = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
        // Uniform distribution on a sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = STAR_RADIUS * (0.85 + Math.random() * 0.3);

        positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        _phases[i] = Math.random() * Math.PI * 2;
        _speeds[i] = 0.4 + Math.random() * 2;      // 0.4–2.4 Hz blink rate
        _bases[i]  = 0.4 + Math.random() * 0.6;    // 0.4–1.0 peak brightness

        const b = _bases[i] * 0.6;
        _colors[i * 3]     = b;
        _colors[i * 3 + 1] = b * 0.97; // very slight blue-white tint
        _colors[i * 3 + 2] = b;
    }

    _geometry = new THREE.BufferGeometry();
    _geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    _geometry.setAttribute('color', new THREE.BufferAttribute(_colors, 3));

    const material = new THREE.PointsMaterial({
        size: 2.0,
        vertexColors: true,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        sizeAttenuation: false, // orthographic — constant pixel size
    });

    return new THREE.Points(_geometry, material);
}

export function updateStars(delta) {
    if (!_geometry) return;

    _timer += delta;

    for (let i = 0; i < STAR_COUNT; i++) {
        const t = _timer * _speeds[i] + _phases[i];
        const brightness = _bases[i] * (0.2 + 0.8 * (0.5 + 0.5 * Math.sin(t)));
        _colors[i * 3]     = brightness;
        _colors[i * 3 + 1] = brightness * 0.97;
        _colors[i * 3 + 2] = brightness;
    }

    _geometry.attributes.color.needsUpdate = true;
}
