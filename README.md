# Joel's Mindscape

A 2D isometric web experience built with Three.js and Vite.

**Live Demo:** [https://joeloffbeat.github.io](https://joeloffbeat.github.io)

## Features

- **Isometric world** — orthographic camera with tiled grass and ocean terrain
- **Character** — sprite-sheet based, 8-direction facing, walk/idle animations
- **Dash** — hold Space while moving for 2x speed with a ghost trail effect
- **Collision** — car obstacle with Box3 collision, water boundary blocking
- **Click-to-move** — left-click anywhere on the ground to walk there
- **Keyboard movement** — WASD / Arrow keys (isometric-mapped)

## Controls

| Input | Action |
|---|---|
| WASD / Arrow Keys | Move character |
| Space (hold) | Dash (2x speed + trail) |
| Left Click | Click-to-move |
| Scroll | Zoom |
| Right Click + Drag | Pan camera |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Development

```bash
git clone https://github.com/joeloffbeat/joeloffbeat.github.io.git
cd joeloffbeat.github.io
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds with Vite and deploys to GitHub Pages.

## Project Structure

```
js/
├── config/
│   └── constants.js        # All tunable values
├── core/
│   └── App.js              # Main class — init, game loop, trail, popup
├── entities/
│   ├── character.js         # Sprite, animation, movement, collision
│   ├── ground.js            # Canvas-composited isometric tile map
│   └── car.js               # Car sprite
└── systems/
    ├── scene.js             # Scene + lighting setup
    ├── camera.js            # Orthographic camera factory
    ├── cameraController.js  # Camera controller stub
    └── controls.js          # Keyboard + mouse input
```

## Tech Stack

- **Three.js** — 3D rendering (orthographic / isometric)
- **Vite** — build tooling, HMR, esbuild minification
- **Press Start 2P** — pixel art web font (Google Fonts)

## License

Open source — personal and educational use.

## Credits

Created by Joel. Built with Three.js and Vite.
