import { STATUE_CONFIG } from '../config/constants.js';

let popupEl = null;
let currentLabel = null;

/**
 * Create or get the popup DOM element
 * @returns {HTMLElement}
 */
function getPopup() {
    if (!popupEl) {
        popupEl = document.createElement('div');
        popupEl.id = 'proximity-popup';
        popupEl.style.cssText = `
            position: fixed;
            bottom: 12%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 215, 0, 0.95);
            color: #333;
            padding: 12px 32px;
            border-radius: 12px;
            font-family: Arial, sans-serif;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.25);
            z-index: 900;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(popupEl);
    }
    return popupEl;
}

/**
 * Check character proximity to statues and show/hide popup
 * @param {THREE.Vector3} characterPos - Character position
 * @param {Array<THREE.Sprite>} statues - Array of statue sprites
 */
export function updateProximityPopup(characterPos, statues) {
    const popup = getPopup();
    let nearestLabel = null;

    for (const statue of statues) {
        const dx = characterPos.x - statue.position.x;
        const dz = characterPos.z - statue.position.z;
        const distance = Math.sqrt(dx * dx + dz * dz);

        if (distance < STATUE_CONFIG.POPUP_DISTANCE) {
            nearestLabel = statue.userData.label;
            break;
        }
    }

    if (nearestLabel) {
        if (currentLabel !== nearestLabel) {
            popup.textContent = nearestLabel;
            currentLabel = nearestLabel;
        }
        popup.style.opacity = '1';
    } else {
        popup.style.opacity = '0';
        currentLabel = null;
    }
}
