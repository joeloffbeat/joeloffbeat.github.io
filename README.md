# Joel's Mindscape

Exploring my interests.

## Features

- Orthographic isometric camera
- Sprite-based character with 8-direction facing and basic walk/idle animations

## File Structure

```
joel-home/
├── index.html
├── package.json
├── js/
│   ├── main.js
│   ├── assets/
│   ├── config/constants.js
│   ├── core/App.js
│   ├── systems/
│   └── entities/
│       ├── car.js
│       ├── character.js
│       └── ground.js
└── README.md
```

## Controls

- `WASD` or Arrow keys: move
- Left click: set destination

## Technical Details

### Three.js Version

The project uses Three.js version 0.132.2 (via CDN). To update:

```javascript
// In main.js and module files
import * as THREE from 'https://cdn.skypack.dev/three@VERSION_NUMBER';
```

### Sprite Animations

The character uses sprite sheets with texture offset animation:
- Sprite sheets are divided into frames
- Texture `offset.x` is adjusted to show different frames
- Frame timing controls animation speed