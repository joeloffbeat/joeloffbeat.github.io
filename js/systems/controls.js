import * as THREE from 'three';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupControls(camera, ground, controlsState, domElement) {
    domElement.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObject(ground);
        if (hits.length > 0) {
            controlsState.targetPosition.copy(hits[0].point);
            controlsState.targetPosition.y = 1;
            controlsState.isMoving = true;
        }
    });

    domElement.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('keydown', (e) => {
        if (e.key in controlsState.keys) {
            controlsState.keys[e.key] = true;
            controlsState.isMoving = false;
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key in controlsState.keys) {
            controlsState.keys[e.key] = false;
        }
    });
}
