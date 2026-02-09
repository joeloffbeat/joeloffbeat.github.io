# Joel's Mindscape

A 3D isometric web game built with Three.js and Vite, featuring collectible coins arranged in a heart shape and a Valentine's Day surprise!

**Live Demo:** [https://joeloffbeat.github.io](https://joeloffbeat.github.io)

## Features

- **Isometric 3D Graphics:** Orthographic camera with isometric view
- **Character System:** Sprite-based character with 8-direction facing and walk/idle animations
- **Collectible Coins:** 18 gold coins arranged in a heart shape
- **Special Final Coin:** The last coin moves in a circular pattern with enhanced effects
- **Victory Condition:** Collect all coins to reveal a Valentine's Day message
- **Collision Detection:** Car obstacle with proper collision handling
- **Click-to-Move:** Point-and-click navigation system
- **Keyboard Controls:** WASD/Arrow keys for movement

## Controls

- **WASD** or **Arrow Keys:** Move character
- **Left Click:** Click on ground to set destination
- **Mouse Wheel:** Zoom in/out
- **Right Click + Drag:** Pan camera

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joeloffbeat/joeloffbeat.github.io.git
cd joeloffbeat.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will open automatically at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This project automatically deploys to GitHub Pages when you push to the `main` branch.

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` workflow:
1. Checks out the code
2. Installs dependencies
3. Builds the project with Vite
4. Deploys to GitHub Pages

### Manual Deployment

You can also deploy manually:

```bash
npm run deploy
```

## Project Structure

```
joeloffbeat.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── assets/                 # Game assets
│   │   ├── grass.png
│   │   ├── character.png
│   │   ├── car.png
│   │   └── valentine.png
│   └── favicon.svg             # Website icon
├── js/
│   ├── config/
│   │   └── constants.js        # Game configuration
│   ├── core/
│   │   └── App.js              # Main application class
│   ├── systems/                # Game systems
│   │   ├── scene.js            # Scene setup
│   │   ├── camera.js           # Camera configuration
│   │   ├── cameraController.js # Camera controls
│   │   ├── controls.js         # Input handling
│   │   └── victory.js          # Victory display
│   └── entities/               # Game entities
│       ├── character.js        # Player character
│       ├── ground.js           # Ground plane
│       ├── car.js              # Car obstacle
│       └── coin.js             # Collectible coins
├── index.html                  # Entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md
```

## Technical Details

### Tech Stack

- **Three.js v0.182.0:** 3D graphics library
- **Vite v7.3.0:** Build tool and dev server
- **ES6 Modules:** Modern JavaScript module system

### Key Systems

**Entity-Component Pattern**
- Entities use factory functions (createCharacter, createCoin, etc.)
- Components store entity data in userData
- Systems update entities each frame

**Collision Detection**
- Character uses sphere-based collision (COLLISION_RADIUS)
- Car uses Box3 bounding box with manual dimensions
- XZ-plane distance calculation for coin collection

**Animation System**
- Sprite-sheet based character animation
- UV offset manipulation for frame switching
- Parametric equations for coin heart arrangement
- Special movement pattern for final coin (circular motion)

**Heart-Shaped Coin Layout**

Coins are positioned using parametric heart equation:
```javascript
x(t) = 16 * sin³(t)
y(t) = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)
```

### Configuration

All game parameters are centralized in [js/config/constants.js](js/config/constants.js):
- Lighting intensities
- Character speed and animations
- Coin appearance and behavior
- Camera settings
- Asset paths

## Development

### Hot Reload

Vite provides instant hot module replacement (HMR) during development. Changes to code automatically update in the browser.

### Building

Vite bundles and optimizes:
- JavaScript minification with Terser
- Asset optimization
- Tree-shaking for smaller bundle size

## License

This project is open source and available for personal and educational use.

## Credits

Created by Joel
Built with Three.js and Vite