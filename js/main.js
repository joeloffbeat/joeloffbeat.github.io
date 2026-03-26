import { App } from './core/App.js';

const app = new App();
app.init()
    .then(() => {
        const ls = document.getElementById('loading-screen');
        if (ls) {
            ls.classList.add('ls-done');
            ls.addEventListener('transitionend', () => ls.remove(), { once: true });
        }
    })
    .catch(err => console.error('Failed to initialize:', err));
window.__app = app; // debug: expose for collision tuning
