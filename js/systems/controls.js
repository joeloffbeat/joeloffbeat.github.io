import * as THREE from 'three';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupControls(camera, ground, controlsState, domElement) {
    // --- Mouse click-to-move ---
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

    // --- Keyboard movement ---
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

    // --- Touch tap-to-move ---
    // D-pad buttons are separate DOM elements and their touches don't reach here,
    // so this handler only fires for taps directly on the canvas.
    let touchStartX = null;
    let touchStartY = null;

    domElement.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        } else {
            // Multi-touch (pinch) — invalidate tap tracking
            touchStartX = null;
            touchStartY = null;
        }
    }, { passive: true });

    domElement.addEventListener('touchmove', (e) => {
        if (touchStartX === null) return;
        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;
        if (Math.hypot(dx, dy) >= 10) {
            touchStartX = null; // treat as drag, not a tap
            touchStartY = null;
        }
    }, { passive: true });

    domElement.addEventListener('touchend', (e) => {
        if (touchStartX === null) return; // guard against untracked touches

        if (e.changedTouches.length === 1 && e.touches.length === 0) {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            touchStartX = null;
            touchStartY = null;

            if (Math.hypot(dx, dy) < 10) {
                // Confirmed tap — raycast same as mousedown
                mouse.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, camera);
                const hits = raycaster.intersectObject(ground);
                if (hits.length > 0) {
                    controlsState.targetPosition.copy(hits[0].point);
                    controlsState.targetPosition.y = 1;
                    controlsState.isMoving = true;
                }
                e.preventDefault(); // suppress 300ms ghost click, only on confirmed taps
            }
        }
    }, { passive: false }); // passive:false required to call preventDefault

    domElement.addEventListener('touchcancel', () => {
        touchStartX = null;
        touchStartY = null;
    }, { passive: true });
}
