import { App } from './core/App.js';

/**
 * Application Entry Point
 */
const app = new App();
app.init().catch(err => console.error('Failed to initialize:', err));
