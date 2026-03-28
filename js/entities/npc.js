// js/entities/npc.js
// NPCs with waypoint pathing and animation mirrored from character.js.
//
// Sprite sheet layout (npc.png — same as character.png):
//   8 cols = 8 directions (clockwise from North: N, NE, E, SE, S, SW, W, NW)
//   3 rows = 3 animation states (walk-A, idle, walk-B)
//
// Future NPCs with different sheets only need to change spritePath /
// sheetCols / sheetRows / animations in their def — everything else is generic.

import * as THREE from 'three';
import { CHARACTER } from '../config/constants.js';
import { tileToWorld } from '../config/worldMap.js';

const NPC_SPEED = CHARACTER.SPEED * 0.45;

// ---------------------------------------------------------------------------
// Texture cache — one load per unique sheet path, cloned per NPC instance
// ---------------------------------------------------------------------------
const _texCache = {};

async function _loadSheet(path) {
    if (_texCache[path]) return _texCache[path];
    const tex = await new Promise((res, rej) =>
        new THREE.TextureLoader().load(path, res, undefined, rej)
    );
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    _texCache[path] = tex;
    return tex;
}

// ---------------------------------------------------------------------------
// Direction — mirrors character.js getDirectionIndex exactly
// ---------------------------------------------------------------------------
function getDirectionIndex(dx, dz) {
    if (dx === 0 && dz === 0) return 0;
    const deg = (Math.atan2(dz, dx) * 180 / Math.PI + 360) % 360;
    return (Math.round(deg / 45) % 8 + 2) % 8;
}

// ---------------------------------------------------------------------------
// Animation — mirrors character.js setAnimation / updateAnimation exactly
// ---------------------------------------------------------------------------
function setAnimation(npc, name) {
    if (npc.currentAnimation === name) return;
    npc.currentAnimation = name;
    npc.frame    = npc.def.animations[name].frameIndices[0];
    npc.frameItr = 0;
}

function updateAnimation(npc) {
    const { sheetCols, sheetRows, animations } = npc.def;
    const frameW = 1 / sheetCols;
    const frameH = 1 / sheetRows;
    const anim   = animations[npc.currentAnimation];

    npc.frameItr += 1;
    if (npc.frameItr > anim.duration && anim.frames > 1) {
        npc.frameItr = 0;
        npc.frame    = anim.frameIndices[(npc.frame + 1) % anim.frames];
    }

    const tex = npc.mesh.material.map;
    tex.offset.set(npc.directionIndex * frameW, npc.frame * frameH);
    tex.needsUpdate = true;
}

// ---------------------------------------------------------------------------
// Waypoints
// ---------------------------------------------------------------------------
function wp(tiles) {
    return tiles.map(([col, row]) => tileToWorld(col, row));
}

const PETER_PATH = wp([
    [6,7],[14,5],[22,5],[28,8],[28,20],[22,26],[12,26],[5,22],[5,12],
]);
const LUKE_PATH = wp([
    [10,20],[16,20],[20,21],[20,23],[15,24],[10,24],[6,22],[6,19],[10,19],
]);

// ---------------------------------------------------------------------------
// NPC definitions
// ---------------------------------------------------------------------------
// animations mirrors CHARACTER.ANIMATIONS — change per NPC when using a
// custom sheet with a different number of states, frame order, or timing.

const NPC_DEFS = [
    {
        id: 'peter-parker',
        label: 'Peter Parker',
        description: 'Just a friendly photographer',
        icon: '📸',
        overlayId: 'peter-parker-overlay',
        triggerRadius: 6,
        waypoints: PETER_PATH,

        spritePath: '/assets/npc.png',
        sheetCols:  8,
        sheetRows:  3,
        animations: {
            idle: { frames: 1, duration: 8, frameIndices: [1] },
            walk: { frames: 3, duration: 8, frameIndices: [0, 1, 2] },
        },
    },
    {
        id: 'luke-skywalker',
        label: 'Luke Skywalker',
        description: 'A wandering Jedi',
        icon: '⚔️',
        overlayId: 'luke-skywalker-overlay',
        triggerRadius: 6,
        waypoints: LUKE_PATH,

        spritePath: '/assets/npc.png',
        sheetCols:  8,
        sheetRows:  3,
        animations: {
            idle: { frames: 1, duration: 8, frameIndices: [1] },
            walk: { frames: 3, duration: 8, frameIndices: [0, 1, 2] },
        },
    },
];

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------
export async function createNPCs() {
    const paths = [...new Set(NPC_DEFS.map(d => d.spritePath))];
    await Promise.all(paths.map(_loadSheet));

    return NPC_DEFS.map(def => {
        const frameW    = 1 / def.sheetCols;
        const frameH    = 1 / def.sheetRows;
        const idleFrame = def.animations.idle.frameIndices[0];

        const tex = _texCache[def.spritePath].clone();
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(frameW, frameH);
        tex.offset.set(0, idleFrame * frameH);
        tex.needsUpdate = true;

        const mat    = new THREE.SpriteMaterial({ map: tex, transparent: true, alphaTest: 0.5 });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(CHARACTER.SCALE.x, CHARACTER.SCALE.y, CHARACTER.SCALE.z);

        const start = def.waypoints[0];
        sprite.position.set(start.x, CHARACTER.BOBBING.BASE_HEIGHT, start.z);

        return {
            mesh: sprite,
            def,
            // interaction.js interface
            overlayId:     def.overlayId,
            triggerRadius: def.triggerRadius,
            label:         def.label,
            description:   def.description,
            icon:          def.icon,
            getDistanceTo: (pos) => sprite.position.distanceTo(pos),
            // pathing
            waypointIdx:  0,
            pausing:      false,
            pauseTimer:   0,
            // animation state — mirrors character.js userData fields
            currentAnimation: 'idle',
            directionIndex:   0,
            frame:            idleFrame,
            frameItr:         0,
        };
    });
}

// ---------------------------------------------------------------------------
// Update loop
// ---------------------------------------------------------------------------
export function updateNPCs(npcs, delta) {
    for (const npc of npcs) {
        if (npc.pausing) {
            npc.pauseTimer -= delta;
            if (npc.pauseTimer <= 0) {
                npc.pausing     = false;
                npc.waypointIdx = (npc.waypointIdx + 1) % npc.def.waypoints.length;
            }
            setAnimation(npc, 'idle');
        } else {
            const target = npc.def.waypoints[npc.waypointIdx];
            const dx     = target.x - npc.mesh.position.x;
            const dz     = target.z - npc.mesh.position.z;
            const dist   = Math.hypot(dx, dz);

            if (dist < 0.4) {
                npc.pausing    = true;
                npc.pauseTimer = 0.6 + Math.random() * 1.5;
                setAnimation(npc, 'idle');
            } else {
                const step = NPC_SPEED * delta;
                npc.mesh.position.x  += (dx / dist) * step;
                npc.mesh.position.z  += (dz / dist) * step;
                npc.directionIndex    = getDirectionIndex(dx, dz);
                setAnimation(npc, 'walk');
            }
        }

        updateAnimation(npc);
    }
}
