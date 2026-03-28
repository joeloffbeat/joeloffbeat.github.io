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
    texture.minFilter = THREE.NearestFilter;

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
