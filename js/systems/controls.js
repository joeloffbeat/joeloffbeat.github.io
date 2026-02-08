import * as THREE from 'three';

/**
 * Setup input controls (keyboard and mouse)
 * @param {THREE.OrthographicCamera} camera - Camera instance
 * @param {THREE.Mesh} ground - Ground mesh for raycasting
 * @param {Object} controlsState - Controls state object
 * @param {HTMLElement} domElement - DOM element for event listeners
 */
export function setupControls(camera, ground, controlsState, domElement) {
    domElement.addEventListener('mousedown', (event) => 
        onMouseDown(event, camera, ground, controlsState), false
    );
    domElement.addEventListener('contextmenu', (event) => 
        event.preventDefault(), false
    );

    window.addEventListener('keydown', (event) => 
        onKeyDown(event, controlsState), false
    );
    window.addEventListener('keyup', (event) => 
        onKeyUp(event, controlsState.keys), false
    );
}

/**
 * Handle mouse down events for click-to-move
 * @param {MouseEvent} event - Mouse event
 * @param {THREE.OrthographicCamera} camera - Camera instance
 * @param {THREE.Mesh} ground - Ground mesh
 * @param {Object} controlsState - Controls state object
 */
function onMouseDown(event, camera, ground, controlsState) {
    // Only handle left-click for character movement
    if (event.button === 0) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(ground);
        if (intersects.length > 0) {
            controlsState.targetPosition.copy(intersects[0].point);
            controlsState.targetPosition.y = 1; // Character's y position
            controlsState.isMoving = true;
        }
    }
}

/**
 * Handle key down events
 * @param {KeyboardEvent} event - Keyboard event
 * @param {Object} controlsState - Controls state object
 */
function onKeyDown(event, controlsState) {
    if (event.key in controlsState.keys) {
        controlsState.keys[event.key] = true;
        controlsState.isMoving = false;
    }
}

/**
 * Handle key up events
 * @param {KeyboardEvent} event - Keyboard event
 * @param {Object} keys - Keys state object
 */
function onKeyUp(event, keys) {
    if (event.key in keys) {
        keys[event.key] = false;
    }
}

