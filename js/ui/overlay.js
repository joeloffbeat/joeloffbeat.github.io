import { resolveOverlayContent } from './overlayContent.js';

let _containerEl = null;
let _titleEl = null;
let _bodyEl = null;
let _closeBtn = null;
let _backdropEl = null;

export let isOpen = false;

export function initOverlay() {
    _containerEl = document.getElementById('overlay-container');
    _titleEl = _containerEl.querySelector('.overlay-title');
    _bodyEl = _containerEl.querySelector('.overlay-body');
    _closeBtn = _containerEl.querySelector('.overlay-close');
    _backdropEl = _containerEl.querySelector('.overlay-backdrop');

    _closeBtn.addEventListener('click', close);
    _backdropEl.addEventListener('click', close);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) close();
    });
}

export async function open(overlayId) {
    // Show loading indicator immediately so the user gets feedback
    _titleEl.textContent = '';
    _bodyEl.innerHTML = '<div class="overlay-loading">Loading...</div>';
    _containerEl.classList.remove('overlay-hidden');
    _containerEl.classList.add('overlay-visible');
    isOpen = true;

    try {
        const content = await resolveOverlayContent(overlayId);
        if (!content) {
            _bodyEl.innerHTML = '<div class="overlay-loading">Content not found.</div>';
            return;
        }
        _titleEl.textContent = content.title;
        _bodyEl.innerHTML = content.html;
        if (content.onReady) content.onReady(_bodyEl);
    } catch (err) {
        console.error('Overlay error:', err);
        _bodyEl.innerHTML = '<div class="overlay-loading">Failed to load content.</div>';
    }
}

export function close() {
    _containerEl.classList.remove('overlay-visible');
    _containerEl.classList.add('overlay-hidden');
    isOpen = false;
}
