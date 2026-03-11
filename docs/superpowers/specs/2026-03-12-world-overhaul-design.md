# World Overhaul Design — Joel's Mindscape

**Date:** 2026-03-12
**Status:** Approved

## Overview

Complete visual and interactive overhaul of the 2D isometric pixel-art world. The flat grass-and-ocean world becomes a floating diorama island with varied terrain, animated water, 7 interactive assets with proximity-triggered overlays, and a cohesive pixel-art aesthetic.

## Reference

- Visual target: `references/overall_aesthetic.png` — floating isometric diorama with layered earth walls, pond, grass, rock, and brick terrain
- All new tile/entity assets sourced from `new_assets/`

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Tile map approach | Data-driven 32×32 array with random sprite selection per terrain type | Full control over terrain layout with clean pixel math (2048/32 = 64px per tile = 2× scale of 32px sprites) |
| Floating island | Side wall meshes with layered earth texture | Matches reference aesthetic exactly |
| Water animation | Tile-cycling at ~500ms with staggered per-tile offsets | Adds life; full texture re-upload at 2 FPS is negligible |
| Interaction model | Toast popup + Click or Press E to open overlay | Accessible on both desktop and mobile |
| Overlay content | Placeholder/mock data | Real API integrations deferred to later phase |
| Text styling | Press Start 2P pixel-art font throughout (toasts, overlays, UI) with monospace fallback | Consistent with world aesthetic |
| Asset management | Copy new_assets to public/assets, remove old unused assets | Clean asset pipeline |

---

## 1. World Terrain — Data-Driven Tile Map

### 1.1 World Dimensions

| Property | Old Value | New Value | Rationale |
|----------|-----------|-----------|-----------|
| `GROUND.WIDTH` | 100 | 96 | 96 / 32 = 3.0 units per tile (clean integer) |
| `GROUND.HEIGHT` | 100 | 96 | Same |
| Grid size | 25×25 | 32×32 | 2048 / 32 = 64px per tile = exact 2× scale of 32px source sprites |
| `GROUND.TILE_SIZE` | 4 | 3 | 96 / 32 = 3.0 |
| Canvas size | 2048×2048 | 2048×2048 | Unchanged |
| Walkable bounds | ±48 | ±48 | 96/2 = 48, minus collision radius |

Tile-to-world conversion: `worldX = (col - 16) * 3.0`, `worldZ = (row - 16) * 3.0`
World-to-tile conversion: `col = Math.floor(worldX / 3.0 + 16)`, `row = Math.floor(worldZ / 3.0 + 16)`

### 1.2 Map Format

New file `js/config/worldMap.js` exports:

- `WORLD_MAP`: A 32×32 2D array of single-character terrain codes
- `TERRAIN` enum: `{ GRASS: 'G', BRICK: 'B', ROCK: 'R', WATER: 'W', STONES: 'S', EDGE: 'E' }`
- `TILE_POOLS`: Mapping from terrain type to array of sprite paths (all `.png` files in each directory)
- `ENTITY_PLACEMENTS`: Array of interactive entity position/config objects

### 1.3 Tile Map Data

```
Row  0: EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
Row  1: EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
Row  2: EERRRRRGGGGGGGGGGGGGGGGGGGGGGRRÉE
Row  3: EERRGGGGGGGGGGGGGGGGGGGGGGGGGRRÉE
Row  4: EEGGGGGGGGGGGGGGGGGGGGGGGRRRRRÉE
Row  5: EEGGGGGGGGGGGGGGGGGGGGGGRRRRRREÉ
Row  6: EEGGGGGGGGGGGGGGGGGGGGGGGRRRRGEE
Row  7: EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEÉ
Row  8: EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEÉ
Row  9: EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEÉ
Row 10: EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEÉ
Row 11: EEGGGGGGGGBBBBBBBGGGGSSSSWWWGGEE
Row 12: EEGGGGGGGGBBBBBBBGGGSSWWWWWWWGEE
Row 13: EEGGGGGGGGBBBBBBBGGSWWWWWWWWSGEE
Row 14: EEGGGGGGGGGGGGGGGGGSWWWWWWWWSGEE
Row 15: EEGGGGGGGGGGGGGGGGSWWWWWWWWWSGEE
Row 16: EEGGGGGGGGGGGGGGGGSSWWWWWWWSSEE
Row 17: EEGGGGGGGGGGGGGGGGGGSSSWWSSGGGEÉ
Row 18: EEGGGGGGGGGGGGGGGGGGGGSSSGGGGGEÉ
Row 19: EEGGGGGGBBBBBBBBBBGGGGGGGGGGGGEE
Row 20: EEGGGGGGBBBBBBBBBBBGGGGGGGGGGGEE
Row 21: EEGGGGGGGBBBBBBBBBBGGGGGGGGGGGEÉ
Row 22: EEGGGGGGGBBBBBBBBGGGGGGGGGGGGGEE
Row 23: EEGGGGGGGGGBBBBBGGGGGGGGGGGGGREE
Row 24: EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEÉ
Row 25: EEGGGGGGGGGGGGGGGGGGGGGGGGGRRGEE
Row 26: EEGGGGGGGGGGGGGGGGGGGGGGGGRRRGEÉ
Row 27: EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEÉ
Row 28: EERRGGGGGGGGGGGGGGGGGGGGGGGGGREE
Row 29: EERRGGGGGGGGGGGGGGGGGGGGGGGGRRÉE
Row 30: EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
Row 31: EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
```

Terrain distribution: Grass ~63%, Brick ~11%, Water ~7%, Stones ~4%, Rock ~5%, Edge ~10%.

### 1.4 Tile Sprite Pools

Each terrain type has multiple sprites. On render, each cell picks a random sprite from its pool. A seeded PRNG (simple hash of `col * 1000 + row`) ensures consistency across page loads.

| Terrain | Sprite Count | Source Directory | Files |
|---------|-------------|-----------------|-------|
| Grass | 17 | `new_assets/grass/` | tile_022–tile_024, tile_027–tile_040 |
| Brick | 24 | `new_assets/brick/` | tile_000–tile_021, tile_025–tile_026 |
| Rock | 8 | `new_assets/rock/` | tile_053–tile_060 |
| Water | 29 | `new_assets/water/` | tile_086–tile_114 |
| Stones on Water | 21 | `new_assets/stones_on_water/` | tile_061–tile_081 |
| Edge | 24 (reuses brick) | Same as Brick pool, drawn with `ctx.globalAlpha = 0.7` for darker tint | — |

All source sprites are 32×32px PNG with RGBA transparency. Canvas renders them at 64×64px (2× clean upscale).

### 1.5 Collision Derivation

Tile-based collision replaces the old ocean boundary check:

- **Non-walkable tiles:** `WATER`, `STONES`, `EDGE`
- **Walkable tiles:** `GRASS`, `BRICK`, `ROCK`
- **Entity collision boxes:** Layered on top as `THREE.Box3` objects (same as current car collider)

**Collision check algorithm** in `character.js`:
1. Given proposed position `(x, z)` and `CHARACTER.COLLISION_RADIUS` (kept at 1.5 units)
2. Compute bounding box: `[x - radius, z - radius]` to `[x + radius, z + radius]`
3. Convert all 4 corners to tile coordinates
4. If ANY corner tile is non-walkable → movement blocked
5. Additionally check against entity `Box3` colliders (existing sphere-AABB test)

This handles the character straddling tile boundaries correctly.

---

## 2. Floating Island Rendering

### 2.1 Top Surface

Existing canvas-composited texture approach (2048×2048 canvas), rewritten to read from the 32×32 data-driven tile map. Each tile drawn at 64×64px on canvas.

### 2.2 Side Walls

Four `PlaneGeometry` meshes, one per edge (north, south, east, west):

- **Dimensions:** Each wall is `96 × 8` world units (full island width × 8 units deep)
- **Texture:** Dedicated canvas (2048×256px) with layered earth pattern:
  - Row 0 (top 16px): Green tint strip (grass edge)
  - Rows 1-3 (middle 48px): Brick tile sprites from the brick pool, tiled horizontally
  - Rows 4-6 (lower 48px): Rock tile sprites from the rock pool, tiled horizontally
  - Row 7 (bottom 16px): Dark fill (#1a1008) fading to void
- **Positioning:** Each wall positioned at the corresponding edge of the ground plane, rotated to face outward, extending 8 units downward
- **Material:** `MeshStandardMaterial` with the canvas texture, same `NearestFilter` settings
- **All 4 walls share the same texture** (single canvas generated once)

### 2.3 Background

Scene background color: `0x0a0a0f` (near-black void). Property name: `SCENE.BACKGROUND_COLOR` (fixing existing inconsistency where `scene.js` referenced `SCENE.INITIAL_BACKGROUND`).

### 2.4 Lighting Adjustments

- `RENDERER.TONE_MAPPING_EXPOSURE`: Increase from 0.3 to 0.7
- `LIGHTING.AMBIENT_INTENSITY`: Keep at 1
- Side walls receive ambient light; directional light position unchanged

---

## 3. Animated Water

### 3.1 Implementation

- During initial tile map rendering, water tile canvas positions tracked in a `waterTiles[]` array: `[{canvasX, canvasY, offset}]`
- `offset` = `(col * 7 + row * 13) % waterSpriteCount` — staggered start per tile
- A timer in `ground.js` (called from `App.animate()`) advances water frame every ~500ms
- Each water tile redrawn on the canvas at its tracked position with the next sprite in the water pool
- `canvasTexture.needsUpdate = true` after each cycle

### 3.2 Performance Note

`canvasTexture.needsUpdate = true` triggers a **full 2048×2048 texture re-upload to the GPU** even though only water tiles changed. Three.js `CanvasTexture` does not support partial updates. At ~2 FPS effective animation rate, the full re-upload is negligible (measured ~0.5ms per upload on modern GPUs).

### 3.3 `stones_on_water` tiles remain static — no animation.

---

## 4. Interactive Asset System

### 4.1 InteractiveEntity Class

New `js/entities/interactiveEntity.js`:

```
InteractiveEntity {
  // Config (passed in)
  id: string              // e.g., 'bookshelf'
  spritePath: string      // e.g., '/assets/book_shelf.png'
  position: {x, y, z}    // world coordinates
  scale: {x, y, z}       // sprite scale
  triggerRadius: number   // distance threshold for toast popup
  collisionBox: {w, d, h} // AABB dimensions
  overlayId: string       // overlay content key
  label: string           // toast title
  description: string     // toast subtitle
  icon: string            // emoji icon for toast display

  // Internal (created by create())
  sprite: THREE.Sprite
  collider: THREE.Box3
}
```

Methods:
- `create()` — loads sprite texture (NearestFilter), creates Sprite, computes Box3 collider
- `getDistanceTo(position)` — XZ-plane Euclidean distance
- `dispose()` — cleanup textures and geometry

### 4.2 Entity Definitions

| Entity | Tile (col,row) | Scale (x,y,z) | Trigger Radius | Icon | Label | Description | Overlay |
|--------|---------------|---------------|----------------|------|-------|-------------|---------|
| Bookshelf | (5, 3) | (7, 8, 1) | 8 | 📚 | Bookshelf | Books & Movies | books-overlay |
| Server | (10, 3) | (6, 8, 1) | 8 | 🖥️ | Server | Tech Blog | blog-overlay |
| Rock Art | (26, 5) | (8, 6, 1) | 8 | 🎨 | Rock Art | Art Gallery | art-overlay |
| Workbench | (13, 10) | (8, 5, 1) | 8 | 🔧 | Workbench | Projects | projects-overlay |
| Music Player | (18, 14) | (6, 7, 1) | 8 | 🎵 | Gramophone | Music & Playlists | music-overlay |
| Contact | (7, 15) | (6, 8, 1) | 8 | 🐦 | Birdhouse | Contact Info | contact-overlay |
| Car | (11, 20) | (22.5, 13.5, 1) | 15 | 🚗 | Joel's Car | Travel Plans | travel-overlay |

- Car retains its existing larger scale (22.5×13.5) since it uses the original `car.png` sprite which is a different resolution
- All other entities use 1024×1024 source sprites scaled to ~6-8 world units
- Tile-to-world: `worldX = (col - 16) * 3.0`, `worldZ = (row - 16) * 3.0`
- All sprites: `center = (0.5, 0)` (bottom-center anchored), `alphaTest = 0.5`

### 4.3 Proximity Priority & Hysteresis

When multiple entities are within trigger radius:
- **Nearest wins:** Toast shows for the entity with smallest XZ distance
- **Hysteresis:** Once an entity's toast is showing, it stays until character either (a) leaves its trigger radius entirely, or (b) another entity becomes closer by more than 2 world units. This prevents flickering when equidistant.
- **activeEntity** tracked in the interaction system state

---

## 5. Toast Popup System

### 5.1 Behavior

- `js/systems/interaction.js` runs each frame in the game loop
- Checks character distance to all interactive entities
- Nearest entity within `triggerRadius` wins (with hysteresis, see 4.3)
- Toast fades in/out with CSS transition (0.3s)

### 5.2 Toast Element

Single DOM element, content updated dynamically:

```html
<div id="entity-toast">
  <span class="toast-icon">📚</span>
  <span class="toast-label">Bookshelf</span>
  <span class="toast-desc">Books & Movies</span>
  <span class="toast-hint">
    Click or press <kbd>E</kbd>
  </span>
</div>
```

Styling:
- Font: `'Press Start 2P', monospace` (pixel-art, with monospace fallback if font fails to load)
- Background: `rgba(255, 215, 0, 0.95)` with `#b8860b` border
- Position: Fixed bottom center (`bottom: 12%; left: 50%; transform: translateX(-50%)`)
- `pointer-events: auto` — clickable
- Click handler → opens corresponding overlay
- Responsive: font-size scales with `clamp(8px, 1.5vw, 14px)` for small viewports

### 5.3 Input Handlers

- **Click:** Click on toast → `overlay.open(activeEntity.overlayId)`
- **Keyboard:** Keydown `e`/`E` → if toast visible, open overlay
- **Touch:** Toast is clickable via standard touch events (no special handling needed)
- **Mobile hint:** On touch devices, hide the "press E" text and show only "Tap to explore"
  - Detection: `'ontouchstart' in window` at init time
  - Updates `toast-hint` inner text accordingly

---

## 6. Overlay Page System

### 6.1 Structure

`js/ui/overlay.js` — Overlay manager:
- `open(overlayId)` — shows overlay with content, pauses character movement
- `close()` — hides overlay, resumes character movement
- Handles Escape key, click-outside, and ✕ button close
- Exposes `isOpen` boolean for input blocking

### 6.2 DOM Structure

```html
<div id="overlay-container" class="overlay-hidden">
  <div class="overlay-backdrop"></div>
  <div class="overlay-content">
    <div class="overlay-header">
      <h2 class="overlay-title"><!-- dynamic --></h2>
      <button class="overlay-close">✕</button>
    </div>
    <div class="overlay-body"><!-- dynamic content --></div>
  </div>
</div>
```

### 6.3 Styling

- **Font:** `'Press Start 2P', monospace` throughout — titles, body text, buttons
- **Backdrop:** `rgba(0, 0, 0, 0.85)`
- **Content panel:** Dark background (`#1a1a2e`), pixel-art border (`3px solid #444`), max-width 800px, centered
- **Animation:** Fade-in + scale (0.95 → 1.0) over 0.3s, `ease-out`
- **Scrollable:** `overlay-body` has `overflow-y: auto; max-height: 70vh`
- **Responsive:** Content panel uses `width: min(90vw, 800px)`, font-size uses `clamp()` for readability on small screens
- **Font fallback:** `font-display: swap` behavior inherited from Google Fonts link. Monospace fallback renders immediately if font fails.

### 6.4 Input Blocking

While overlay is open (`overlay.isOpen === true`):
- `character.js` skips movement processing
- `controls.js` click-to-move raycasting skipped
- Camera pan/zoom still works
- Only Escape, ✕ button, and backdrop click process

The interaction system checks `overlay.isOpen` before processing E-key.

### 6.5 Overlay Content (Placeholder Phase)

`js/ui/overlayContent.js` — exports a `getOverlayContent(overlayId)` function returning `{ title, html }`:

| Overlay ID | Title | Content |
|------------|-------|---------|
| books-overlay | 📚 Books & Movies | Grid of 6 book/movie cards with placeholder titles, colored cover divs, star ratings |
| music-overlay | 🎵 Music & Playlists | "Now Playing" section + 4 playlist cards with track counts |
| contact-overlay | 🐦 Contact Info | Styled card with email, GitHub, LinkedIn, Twitter links |
| projects-overlay | 🔧 Projects | 4 GitHub-style cards: name, description, language badge, star count |
| art-overlay | 🎨 Art Gallery | 3×3 grid of colored placeholder squares with captions |
| blog-overlay | 🖥️ Tech Blog | 3 blog post entries: title, date, excerpt, "Read more" link |
| travel-overlay | 🚗 Travel Plans | 4 destination cards with location name, dates, placeholder image |

All content uses placeholder data and non-functional links. Real API integrations planned for future phase.

---

## 7. Asset Management

### 7.1 Copy to public/assets

New asset directories under `public/assets/`:

| Destination | Source | File Count |
|-------------|--------|-----------|
| `public/assets/grass/` | `new_assets/grass/` | 17 files |
| `public/assets/brick/` | `new_assets/brick/` | 24 files |
| `public/assets/rock/` | `new_assets/rock/` | 8 files |
| `public/assets/water/` | `new_assets/water/` | 29 files |
| `public/assets/stones_on_water/` | `new_assets/stones_on_water/` | 21 files |
| `public/assets/book_shelf.png` | `new_assets/book_shelf.png` | 1 file |
| `public/assets/contact.png` | `new_assets/contact.png` | 1 file |
| `public/assets/music_player.png` | `new_assets/music_player.png` | 1 file |
| `public/assets/rock_art.png` | `new_assets/rock_art.png` | 1 file |
| `public/assets/server.png` | `new_assets/server.png` | 1 file |
| `public/assets/workbench.png` | `new_assets/workbench.png` | 1 file |

### 7.2 Remove old assets

- `public/assets/grass_sprites/` — replaced by `public/assets/grass/`
- `public/assets/water_sprites/` — replaced by `public/assets/water/`
- `public/assets/tile_sprites/` — replaced by `public/assets/brick/` and `public/assets/stones_on_water/`

### 7.3 Keep

- `public/assets/character.png` — unchanged
- `public/assets/car.png` — reused as InteractiveEntity sprite

---

## 8. Code Architecture

### 8.1 New Files

| File | Responsibility |
|------|---------------|
| `js/config/worldMap.js` | 32×32 tile map data, TERRAIN enum, TILE_POOLS, ENTITY_PLACEMENTS |
| `js/entities/interactiveEntity.js` | Reusable InteractiveEntity class (sprite, collider, distance check) |
| `js/systems/interaction.js` | Per-frame proximity checks, toast state, E-key handler, hysteresis logic |
| `js/ui/overlay.js` | Overlay lifecycle (open/close), input blocking flag, DOM management |
| `js/ui/overlayContent.js` | `getOverlayContent(id)` returning `{title, html}` per overlay |

### 8.2 Modified Files

| File | Changes |
|------|---------|
| `js/entities/ground.js` | Rewrite: data-driven 32×32 tile rendering, 4 side wall meshes, water animation timer. Exports `updateWater(delta)` for game loop. |
| `js/config/constants.js` | Update `GROUND` dimensions (96×96, TILE_SIZE=3, grid=32). Remove `OCEAN`, `CAR`, old `ASSETS` sprite arrays. Add `INTERACTION` and `OVERLAY` config sections. Update `SCENE.BACKGROUND_COLOR` to `0x0a0a0f`. Fix `RENDERER.TONE_MAPPING_EXPOSURE` to 0.7. |
| `js/core/App.js` | Remove car-specific code. Add: entity spawning from `ENTITY_PLACEMENTS`, interaction system init, overlay manager init, `updateWater()` call in game loop. Pass `overlay.isOpen` to character update. |
| `js/entities/character.js` | Replace ocean boundary check with tile-based collision (world→tile→terrain type). Import `WORLD_MAP` and `TERRAIN`. Check all 4 corners of character's collision radius bounding box. |
| `js/systems/scene.js` | Use `SCENE.BACKGROUND_COLOR` consistently (fix existing bug). |
| `index.html` | Add `#entity-toast` element, `#overlay-container` structure, new CSS for toast/overlay/responsive. Remove `#car-popup`. |

### 8.3 Removed Files/Code

| Item | Reason |
|------|--------|
| `js/entities/car.js` | Car becomes an InteractiveEntity |
| `#car-popup` in `index.html` | Replaced by generic `#entity-toast` |
| `updateCarPopup()` in `App.js` | Replaced by interaction system |
| `OCEAN` config in `constants.js` | Replaced by tile-based water |
| `public/assets/grass_sprites/`, `water_sprites/`, `tile_sprites/` | Replaced by new assets |

### 8.4 Design Principles

- **Single responsibility:** Each module handles one concern
- **Data-driven:** World layout and entity placement in config files, not scattered through logic
- **DRY:** All 7 entities use the same InteractiveEntity class and interaction system
- **Easy to edit:** Change the world by editing the 32×32 array. Add entities by adding to ENTITY_PLACEMENTS.
- **Separation of concerns:** Game logic (JS) / presentation (CSS) / data (config)
- **Progressive enhancement:** Placeholder content swappable for real APIs later
- **Clean pixel math:** 2048 / 32 = 64px tiles = 2× integer scale of 32px sprites. No sub-pixel artifacts.
