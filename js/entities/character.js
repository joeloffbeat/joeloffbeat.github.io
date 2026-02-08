import * as THREE from 'three';
import { CHARACTER, ASSETS, GROUND } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();
let characterTexture;

// Sprite sheet layout
const ROWS = 3; // frames per direction (vertical)
const COLS = 8; // directions (horizontal)
const FRAME_WIDTH = 1 / COLS;
const FRAME_HEIGHT = 1 / ROWS;

/**
 * Create character sprite
 * @returns {THREE.Sprite} Character sprite
 */
export function createCharacter() {
    characterTexture = textureLoader.load(
        ASSETS.CHARACTER_SPRITE,
        (tex) => {
            tex.magFilter = THREE.NearestFilter;
        },
        undefined,
        (error) => console.error('Error loading character texture:', error)
    );

    // Configure sprite-sheet repeating (cols x rows)
    characterTexture.wrapS = THREE.RepeatWrapping;
    characterTexture.wrapT = THREE.RepeatWrapping;
    characterTexture.repeat.set(FRAME_WIDTH, FRAME_HEIGHT);

    const material = new THREE.SpriteMaterial({
        map: characterTexture,
        transparent: true,
        alphaTest: 0.5,
        color: 0xCCBBBB // Darken to match scene lighting (removes white cast)
    });
    const character = new THREE.Sprite(material);
    character.castShadow = true;
    // Make sprite 50% bigger than configured scale
    character.scale.set(
        CHARACTER.SCALE.x * 2,
        CHARACTER.SCALE.y * 2,
        CHARACTER.SCALE.z * 3
    );
    character.position.set(
        CHARACTER.INITIAL_POSITION.x,
        CHARACTER.INITIAL_POSITION.y,
        CHARACTER.INITIAL_POSITION.z
    );

    character.userData = {
        isMoving: false,
        isIdle: true,
        direction: 'right',
        directionIndex: 0,
        animations: CHARACTER.ANIMATIONS,
        currentAnimation: 'idle',
        frame: 1,
        frameItr: 0
    };

    // Set initial UV repeat & offset for first frame (col 0, row 0)
    material.map.repeat.set(FRAME_WIDTH, FRAME_HEIGHT);
    material.map.offset.set(0, 1);
    
    return character;
}

function getDirectionIndexFromVector(vec) {
    if (!vec || vec.lengthSq() === 0) return 0;
    const angle = Math.atan2(vec.z, vec.x); // -PI..PI, 0 -> +X
    let deg = (angle * 180 / Math.PI + 360) % 360; // 0..360
    // Map to 8 sectors (45deg each). Sprite indices are arranged clockwise
    // with index 0 = TOP, index 1 = TOP-RIGHT, index 2 = RIGHT, etc.
    // atan2 gives 0 at +X (RIGHT). Shift computed index by +2 to make
    // RIGHT -> 2 and TOP (-Z) -> 0.
    const computed = Math.round(deg / 45) % 8;
    const index = (computed + 3) % 8;
    return index;
}

function makeIdle(character) {
    if (character.userData.currentAnimation !== 'idle') {
        character.userData.currentAnimation = 'idle';
        character.userData.frame = 1;
        character.userData.frameItr = 0;
    }
}

function makeWalk(character) {
    if (character.userData.currentAnimation !== 'walk') {
        character.userData.currentAnimation = 'walk';
        character.userData.frame = 0;
        character.userData.frameItr = 0;
    }
}
/**
 * Update character animation
 * @param {THREE.Sprite} character - Character sprite
 * @param {number} delta - Time delta
 */
function updateCharacterAnimation(character) {
    const anim = character.userData.animations[character.userData.currentAnimation];
    character.userData.frameItr += 1;
        
    if (character.userData.frameItr > anim.duration && anim.frames > 1) {
        character.userData.frameItr = 0;
        let animationIndex = character.userData.frame;
        character.userData.frame = anim.frameIndices[(animationIndex + 1) % anim.frames];
    }

    // Compute UV offset based on current direction (column) and frame (row)
    const dirIndex = character.userData.directionIndex || 0; // 0..7
    const frameIndex = character.userData.frame || 0; // 0..ROWS-1

    // X offset: column * FRAME_WIDTH
    const offsetX = dirIndex * FRAME_WIDTH;
    // Y offset: textures are addressed from bottom, so compute top-left corner
    const offsetY = frameIndex * FRAME_HEIGHT;

    character.material.map.offset.set(offsetX, offsetY);
}

/**
 * Update character position based on input
 * @param {THREE.Sprite} character - Character sprite
 * @param {Object} controlsState - Controls state object
 * @param {THREE.Clock} clock - Three.js clock
 */
export function updateCharacterPosition(character, controlsState, clock, colliders = []) {
    const { keys, isMoving, targetPosition } = controlsState;
    const speed = CHARACTER.SPEED;
    const moveDirection = new THREE.Vector3();
    let isKeyPressed = false;

    const COLLISION_RADIUS = CHARACTER.COLLISION_RADIUS || (CHARACTER.SCALE.x * 1.5 * 0.5);

    function intersectsColliders(pos) {
        if (!colliders || colliders.length === 0) return false;
        const sphere = new THREE.Sphere(pos, COLLISION_RADIUS);
        for (let i = 0; i < colliders.length; i++) {
            if (colliders[i].intersectsSphere(sphere)) return true;
        }
        return false;
    }

    // Clamp a proposed position to the ground bounds so the character cannot leave the ground
    function clampToGround(pos) {
        const halfW = (GROUND.SIZE.width || 0) / 2;
        const halfH = (GROUND.SIZE.height || 0) / 2;
        const pad = COLLISION_RADIUS + 0.1; // small padding so character doesn't step outside
        const minX = -halfW + pad;
        const maxX = halfW - pad;
        const minZ = -halfH + pad;
        const maxZ = halfH - pad;
        const clamped = pos.clone();
        if (clamped.x < minX) clamped.x = minX;
        if (clamped.x > maxX) clamped.x = maxX;
        if (clamped.z < minZ) clamped.z = minZ;
        if (clamped.z > maxZ) clamped.z = maxZ;
        return clamped;
    }

    // Ensure click target stays inside ground
    if (controlsState.isMoving && controlsState.targetPosition) {
        controlsState.targetPosition = clampToGround(controlsState.targetPosition);
    }

    // Isometric movement: camera is at (40, 40, 40) looking at origin
    // W/Up: move toward camera view (up-left on screen) = -x, -z
    // S/Down: move away from camera (down-right) = +x, +z
    // A/Left: move left on screen = -x, +z
    // D/Right: move right on screen = +x, -z
    if (keys.w || keys.ArrowUp) {
        moveDirection.x -= 1;
        moveDirection.z -= 1;
        isKeyPressed = true;
    }
    if (keys.s || keys.ArrowDown) {
        moveDirection.x += 1;
        moveDirection.z += 1;
        isKeyPressed = true;
    }
    if (keys.a || keys.ArrowLeft) {
        moveDirection.x -= 1;
        moveDirection.z += 1;
        character.userData.direction = 'left';
        isKeyPressed = true;
    }
    if (keys.d || keys.ArrowRight) {
        moveDirection.x += 1;
        moveDirection.z -= 1;
        character.userData.direction = 'right';
        isKeyPressed = true;
    }

    if (isKeyPressed && moveDirection.lengthSq() > 0) {
        // Keyboard movement takes priority over click-to-move
        controlsState.isMoving = false;
        // switch animation
        makeWalk(character);
        moveDirection.normalize();
        // update facing direction column (8-way)
        character.userData.directionIndex = getDirectionIndexFromVector(moveDirection);
        moveDirection.multiplyScalar(speed);
        // collision check
        let proposed = character.position.clone().add(moveDirection);
        proposed = clampToGround(proposed);
        if (!intersectsColliders(proposed)) {
            character.position.copy(proposed);
        } else {
            // stop movement when colliding
            makeIdle(character);
        }
    } else if (controlsState.isMoving) {
        // Click-to-move
        makeWalk(character);
        const distance = character.position.distanceTo(targetPosition);
        if (distance > 0.1) {
            const direction = new THREE.Vector3();
            direction.subVectors(targetPosition, character.position);
            direction.normalize();
            direction.multiplyScalar(speed);
            let proposed = character.position.clone().add(direction);
            proposed = clampToGround(proposed);
            if (!intersectsColliders(proposed)) {
                character.position.copy(proposed);
            } else {
                // collision while moving to target: stop moving
                controlsState.isMoving = false;
                makeIdle(character);
            }
            character.userData.direction = direction.x > 0 ? 'right' : 'left';
            character.userData.directionIndex = getDirectionIndexFromVector(direction);
        } else {
            controlsState.isMoving = false;
            makeIdle(character);
        }
    } else {
        makeIdle(character);
    }

    // Bobbing animation
    const bobbing = CHARACTER.BOBBING;
    character.position.y = bobbing.BASE_HEIGHT + 
        Math.sin(clock.getElapsedTime() * bobbing.SPEED) * bobbing.AMOUNT;

    updateCharacterAnimation(character);
}

