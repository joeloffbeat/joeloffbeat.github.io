/**
 * Store references for the camera controller.
 * OrbitControls handles panning and zooming; the isometric angle is locked.
 */
export function setupCameraController(camera, controls, character) {
    // Reserved for future use (e.g. follow-cam, screen shake).
}

/**
 * Per-frame update — currently a no-op since OrbitControls.update() is
 * called directly in App.animate().
 */
export function updateCamera() {}
