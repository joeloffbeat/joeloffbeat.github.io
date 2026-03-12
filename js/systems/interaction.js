import { INTERACTION } from '../config/constants.js';

const isTouchDevice = 'ontouchstart' in window;

let _entities = [];
let _activeEntity = null;
let _toastEl = null;
let _onOpenOverlay = null;

export function initInteraction(entities, toastElement, onOpenOverlay) {
    _entities = entities;
    _toastEl = toastElement;
    _onOpenOverlay = onOpenOverlay;

    // Set mobile-appropriate hint text
    const hint = _toastEl.querySelector('.toast-hint');
    if (hint) {
        hint.innerHTML = isTouchDevice
            ? 'Tap to explore'
            : 'Click or press <kbd>E</kbd>';
    }

    // Toast click handler
    _toastEl.addEventListener('click', () => {
        if (_activeEntity) {
            _onOpenOverlay(_activeEntity.overlayId);
        }
    });

    // E-key handler
    window.addEventListener('keydown', (e) => {
        if ((e.key === 'e' || e.key === 'E') && _activeEntity) {
            _onOpenOverlay(_activeEntity.overlayId);
        }
    });
}

export function updateInteraction(characterPosition, overlayIsOpen) {
    if (overlayIsOpen) {
        hideToast();
        return;
    }

    // Find nearest entity within trigger radius
    let nearest = null;
    let nearestDist = Infinity;

    for (const entity of _entities) {
        const dist = entity.getDistanceTo(characterPosition);
        if (dist < entity.triggerRadius && dist < nearestDist) {
            nearest = entity;
            nearestDist = dist;
        }
    }

    // Hysteresis: keep current entity unless new one is significantly closer
    if (_activeEntity && nearest && nearest !== _activeEntity) {
        const activeDist = _activeEntity.getDistanceTo(characterPosition);
        if (activeDist < _activeEntity.triggerRadius &&
            nearestDist >= activeDist - INTERACTION.HYSTERESIS_DISTANCE) {
            nearest = _activeEntity;
        }
    }

    if (nearest) {
        showToast(nearest);
        _activeEntity = nearest;
    } else {
        hideToast();
        _activeEntity = null;
    }
}

function showToast(entity) {
    if (!_toastEl) return;

    const icon = _toastEl.querySelector('.toast-icon');
    const label = _toastEl.querySelector('.toast-label');
    const desc = _toastEl.querySelector('.toast-desc');

    if (icon) icon.textContent = entity.icon;
    if (label) label.textContent = entity.label;
    if (desc) desc.textContent = entity.description;

    _toastEl.style.opacity = '1';
    _toastEl.style.pointerEvents = 'auto';
}

function hideToast() {
    if (!_toastEl) return;
    _toastEl.style.opacity = '0';
    _toastEl.style.pointerEvents = 'none';
}
