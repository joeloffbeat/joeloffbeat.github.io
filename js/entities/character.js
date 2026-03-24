import * as THREE from 'three';
import { CHARACTER, ASSETS, GROUND } from '../config/constants.js';
import { WORLD_MAP, NON_WALKABLE } from '../config/worldMap.js';

const textureLoader = new THREE.TextureLoader();

// Sprite sheet layout
const COLS = 8;
const ROWS = 3;
const FRAME_WIDTH = 1 / COLS;
const FRAME_HEIGHT = 1 / ROWS;

// Pre-computed bounds
const HALF_W = GROUND.WIDTH / 2;
const HALF_H = GROUND.HEIGHT / 2;

// Reusable vectors for camera-relative direction — avoids per-frame allocation
const _camFwd   = new THREE.Vector3();
const _camRight = new THREE.Vector3();
const _yUp      = new THREE.Vector3(0, 1, 0);

/**
 * Populate _camFwd / _camRight from the camera's current orientation,
 * projected onto the XZ plane so elevation doesn't affect movement speed.
 */
function updateCameraVectors(camera) {
    camera.getWorldDirection(_camFwd);
    _camFwd.y = 0;
    // Guard: camera pointing straight up or down → forward is degenerate
    if (_camFwd.lengthSq() < 0.001) _camFwd.set(0, 0, -1);
    _camFwd.normalize();
    // Right = forward × worldUp (Three.js right-hand rule)
    _camRight.crossVectors(_camFwd, _yUp).normalize();
}

export function createCharacter() {
    const texture = textureLoader.load(
        ASSETS.CHARACTER_SPRITE,
        (tex) => { tex.magFilter = THREE.NearestFilter; },
        undefined,
        (err) => console.error('Error loading character texture:', err)
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(FRAME_WIDTH, FRAME_HEIGHT);
    texture.offset.set(0, 1);

    const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.5
    });

    const sprite = new THREE.Sprite(material);
    sprite.castShadow = true;
    sprite.scale.set(CHARACTER.SCALE.x, CHARACTER.SCALE.y, CHARACTER.SCALE.z);
    sprite.position.set(
        CHARACTER.INITIAL_POSITION.x,
        CHARACTER.INITIAL_POSITION.y,
        CHARACTER.INITIAL_POSITION.z
    );

    sprite.userData = {
        direction: 'right',
        directionIndex: 0,
        currentAnimation: 'idle',
        frame: 1,
        frameItr: 0
    };

    return sprite;
}

// -- Direction helpers --------------------------------------------------------

function getDirectionIndex(vec) {
    if (!vec || vec.lengthSq() === 0) return 0;
    const deg = (Math.atan2(vec.z, vec.x) * 180 / Math.PI + 360) % 360;
    return (Math.round(deg / 45) % 8 + 2) % 8;
}

// -- Animation state ----------------------------------------------------------

function setAnimation(sprite, name) {
    if (sprite.userData.currentAnimation === name) return;
    sprite.userData.currentAnimation = name;
    sprite.userData.frame = name === 'idle' ? 1 : 0;
    sprite.userData.frameItr = 0;
}

function updateAnimation(sprite) {
    const { currentAnimation, directionIndex } = sprite.userData;
    const anim = CHARACTER.ANIMATIONS[currentAnimation];

    sprite.userData.frameItr += 1;
    if (sprite.userData.frameItr > anim.duration && anim.frames > 1) {
        sprite.userData.frameItr = 0;
        sprite.userData.frame = anim.frameIndices[
            (sprite.userData.frame + 1) % anim.frames
        ];
    }

    sprite.material.map.offset.set(
        directionIndex * FRAME_WIDTH,
        sprite.userData.frame * FRAME_HEIGHT
    );
}

// -- Tile-based collision -----------------------------------------------------

// Inverse of isometric tileToWorld:
//   worldX = (col-row)*2.475, worldZ = (col+row)*1.2375-38.3625
//   Canvas→world scale factor: 158.4/2048
function worldToTile(worldX, worldZ) {
    const sum = (worldZ + 38.3625) / 1.2375;  // col + row
    const diff = worldX / 2.475;               // col - row
    const eps = 1e-9;
    const col = Math.floor((sum + diff) / 2 + eps);
    const row = Math.floor((sum - diff) / 2 + eps);
    return { col, row };
}

function isTileBlocked(col, row) {
    if (col < 0 || col >= GROUND.GRID || row < 0 || row >= GROUND.GRID) return true;
    const terrain = WORLD_MAP[row]?.[col];
    if (!terrain) return true;
    return NON_WALKABLE.has(terrain);
}

function isTerrainBlocked(x, z) {
    const r = CHARACTER.COLLISION_RADIUS;
    // Check all 4 corners of the character's bounding box
    const corners = [
        worldToTile(x - r, z - r),
        worldToTile(x + r, z - r),
        worldToTile(x - r, z + r),
        worldToTile(x + r, z + r),
    ];
    return corners.some(c => isTileBlocked(c.col, c.row));
}

function isBlocked(pos, colliders) {
    // Tile-based terrain check
    if (isTerrainBlocked(pos.x, pos.z)) return true;

    // Entity collider check (Box3 intersection)
    const sphere = new THREE.Sphere(pos, CHARACTER.COLLISION_RADIUS);
    for (let i = 0; i < colliders.length; i++) {
        if (colliders[i].intersectsSphere(sphere)) return true;
    }
    return false;
}

function clampToGround(pos) {
    const pad = CHARACTER.COLLISION_RADIUS + 0.1;
    const clamped = pos.clone();
    clamped.x = Math.max(-HALF_W + pad, Math.min(HALF_W - pad, clamped.x));
    clamped.z = Math.max(-HALF_H + pad, Math.min(HALF_H - pad, clamped.z));
    return clamped;
}

function tryMove(sprite, displacement, colliders) {
    let proposed = sprite.position.clone().add(displacement);
    proposed = clampToGround(proposed);
    if (!isBlocked(proposed, colliders)) {
        sprite.position.copy(proposed);
        return true;
    }
    return false;
}

// Try full move, then slide along each axis so character doesn't stop dead at walls
function tryMoveWithSlide(sprite, displacement, colliders) {
    if (tryMove(sprite, displacement, colliders)) return true;

    const xOnly = new THREE.Vector3(displacement.x, 0, 0);
    if (xOnly.lengthSq() > 0 && tryMove(sprite, xOnly, colliders)) return true;

    const zOnly = new THREE.Vector3(0, 0, displacement.z);
    if (zOnly.lengthSq() > 0 && tryMove(sprite, zOnly, colliders)) return true;

    return false;
}

// -- Public update ------------------------------------------------------------

export function updateCharacterPosition(character, controlsState, clock, delta, colliders = [], inputBlocked = false, camera = null) {
    if (inputBlocked) {
        character.position.y = CHARACTER.BOBBING.BASE_HEIGHT;
        updateAnimation(character);
        return;
    }

    const { keys, targetPosition } = controlsState;
    const speed = CHARACTER.SPEED * (keys[' '] ? CHARACTER.DASH_MULTIPLIER : 1);
    const moveDir = new THREE.Vector3();
    let isKeyPressed = false;

    // Clamp click target to ground
    if (controlsState.isMoving) {
        controlsState.targetPosition = clampToGround(controlsState.targetPosition);
    }

    // Camera-relative keyboard mapping — forward/right follow the camera's
    // current horizontal orientation so movement feels correct after orbiting.
    if (camera) {
        updateCameraVectors(camera);
    } else {
        // Fallback to fixed world axes (matches default camera angle)
        _camFwd.set(0, 0, -1);
        _camRight.set(1, 0, 0);
    }
    if (keys.w || keys.ArrowUp)    { moveDir.addScaledVector(_camFwd,    1); isKeyPressed = true; }
    if (keys.s || keys.ArrowDown)  { moveDir.addScaledVector(_camFwd,   -1); isKeyPressed = true; }
    if (keys.a || keys.ArrowLeft)  { moveDir.addScaledVector(_camRight, -1); isKeyPressed = true; }
    if (keys.d || keys.ArrowRight) { moveDir.addScaledVector(_camRight,  1); isKeyPressed = true; }

    if (isKeyPressed && moveDir.lengthSq() > 0) {
        controlsState.isMoving = false;
        setAnimation(character, 'walk');
        moveDir.normalize();
        character.userData.directionIndex = getDirectionIndex(moveDir);
        moveDir.multiplyScalar(speed * delta);

        if (!tryMoveWithSlide(character, moveDir, colliders)) {
            setAnimation(character, 'idle');
        }
    } else if (controlsState.isMoving) {
        setAnimation(character, 'walk');

        const dx = character.position.x - targetPosition.x;
        const dz = character.position.z - targetPosition.z;
        if (Math.sqrt(dx * dx + dz * dz) > 0.1) {
            const dir = new THREE.Vector3().subVectors(targetPosition, character.position);
            dir.y = 0;
            dir.normalize();
            character.userData.directionIndex = getDirectionIndex(dir);
            character.userData.direction = dir.x > 0 ? 'right' : 'left';
            dir.multiplyScalar(speed * delta);

            if (!tryMoveWithSlide(character, dir, colliders)) {
                controlsState.isMoving = false;
                setAnimation(character, 'idle');
            }
        } else {
            controlsState.isMoving = false;
            setAnimation(character, 'idle');
        }
    } else {
        setAnimation(character, 'idle');
    }

    character.position.y = CHARACTER.BOBBING.BASE_HEIGHT;

    updateAnimation(character);
}
