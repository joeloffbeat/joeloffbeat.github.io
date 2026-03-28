# The Full Mindscape — Design Spec

**Date:** 2026-03-28
**Status:** Approved
**Approach:** Option C — all four pillars (atmosphere, identity, wow moments, cinematic polish), sequenced into four shippable phases.

---

## Context & Goals

Joel's Mindscape is a Three.js isometric RPG-style portfolio. It's already in Bruno Simon territory — a walkable world where each building is a content section. The goal of this overhaul is to make it feel *alive*, tell Joel's story clearly, create discoverable surprise moments, and give it a cinematic opening that matches its ambition.

**Joel's identity to convey:** Associate Software Tech Lead at KLA Corporation (India). Multi-disciplinary creator — code, data, illustrations, caricatures, video. Wants to attract similar minds and inspire people to start making things.

**Primary goal:** Something people bookmark, return to, and share.

**Reference:** Bruno Simon (bruno-simon.com) — the direct spiritual ancestor. That's the bar.

---

## What Stays Untouched

The existing isometric world, tile map, character movement, collision, click-to-move, dash + ghost trail, mobile D-pad controls, all existing overlays (blog, art, projects, music, books, travel, contact), and the loading screen animation. Zero regression risk across all four phases.

---

## Phase 1 — Polish & Entry

**Goal:** Transform the first 10 seconds from "page loaded" to "experience started."

### 1.1 Cinematic Intro Sequence

**New file:** `js/systems/intro.js`

After the existing loading screen completes and fades out:

1. The world renders but is **paused** — character is present but controls are locked.
2. Camera starts **zoomed out and elevated** (z-offset boosted ~30 units above normal), looking down at the world from a bird's-eye isometric view.
3. Over 2.5 seconds, the camera **lerps down** to its normal follow position while the `#title` element fades in with a pixel-art flicker effect (CSS `@keyframes` toggling opacity 0→1→0.8→1 rapidly at start).
4. A **"PRESS ANY KEY / TAP TO EXPLORE"** prompt appears at the bottom center, pixel-font styled, blinking at 1Hz.
5. On first keypress or tap, the prompt fades, controls unlock, and the ambient audio fades in (if audio is enabled).

The intro only plays once per session. If the user has already seen it (tracked via `sessionStorage`), the world loads directly into normal play mode.

**Integration:** `App.js` calls `intro.play()` after the loading screen resolves. `intro.js` exports `play(camera, controls, onComplete)` — it animates the camera, shows the prompt, listens for first input, then calls `onComplete` to hand control back to `App.js`.

### 1.2 Audio System

**New file:** `js/systems/audio.js`

Uses the **Web Audio API** (`AudioContext`) for precise, low-latency control. Falls back gracefully if the browser blocks autoplay — audio only starts after first user interaction.

**Audio layers:**

| Layer | Description | Trigger |
|---|---|---|
| Ambient BGM | Looped chiptune/pixel-art track, ~60–80 BPM, gentle | World activates |
| Footsteps — grass | Soft step sound | Character moves on G tile |
| Footsteps — brick | Harder tap | Character moves on B tile |
| Footsteps — rock | Crunchy step | Character moves on R tile |
| UI: toast in | Short pixel "blip" | Entity toast appears |
| UI: overlay open | Ascending 2-tone pixel chime | Overlay opens |
| UI: overlay close | Descending 1-tone pixel chime | Overlay closes |
| Proximity: water | Gentle water loop, volume scales with distance to nearest W tile | Always, fades by distance |

**Footstep timing:** One sound per ~0.4 seconds while moving. Tracked in `audio.js` with a cooldown timer. The terrain under the character is looked up via the existing `worldToTile()` helper in `character.js`.

**Audio toggle:** A `🔊` / `🔇` button rendered in `index.html` (fixed, top-right, z-index 15). Clicking toggles `AudioContext` suspended/running state and persists preference to `localStorage`. **Muted by default** — audio only activates after user explicitly unmutes OR after first interaction if they've previously unmuted.

**`audio.js` public API:**
```js
audio.init()                   // creates AudioContext, loads buffers
audio.setEnabled(bool)         // mute/unmute
audio.playFootstep(terrain)    // called by character.js on each step
audio.playUI(eventName)        // called by overlay.js and interaction.js
audio.updateProximity(pos)     // called each frame by App.js game loop
```

**Asset strategy:** Audio files go in `public/assets/audio/`. MP3 format for broad support. Each file under 100KB. Ambient BGM under 500KB (loop point set via Web Audio API `loopStart`/`loopEnd`).

---

## Phase 2 — Living World

**Goal:** The world breathes. Time passes. Things move. It never looks exactly the same twice.

### 2.1 Day/Night Cycle

**New file:** `js/systems/dayNight.js`

Maps real-world local time to a visual state on a 24-hour cycle:

| Time | Sky color | Ambient light | Directional light | Stars |
|---|---|---|---|---|
| 05:00–07:00 (Dawn) | `#ff8c42 → #87ceeb` | 0.4 → 0.8 | Warm orange, low angle | Fade out |
| 07:00–17:00 (Day) | `#87ceeb` | 0.8 | White, overhead | Hidden |
| 17:00–20:00 (Dusk) | `#87ceeb → #ff4500` | 0.8 → 0.5 | Orange-red | Hidden → fade in |
| 20:00–23:00 (Evening) | `#1a1a3e` | 0.3 | Blue-tinted | Visible |
| 23:00–05:00 (Night) | `#080820` | 0.15 | Dim blue | Fully visible |

**Implementation:** `dayNight.js` exports `update(renderer, scene, deltaTime)`. Called each frame from `App.js`. It reads `new Date().getHours() + minutes/60`, interpolates all color/intensity values using linear lerp, and sets:
- `renderer.setClearColor(skyColor)`
- `scene.ambientLight.intensity`
- `scene.directionalLight.color` and `intensity`
- `stars.setVisibility(t)` — where the existing stars mesh fades in/out

Transitions between states are smooth — values interpolate continuously, not by threshold jumps.

**`dayNight.js` public API:**
```js
dayNight.update(renderer, scene, stars, deltaTime)  // call each frame from App.js
dayNight.getPhase()   // returns: 'dawn' | 'day' | 'dusk' | 'evening' | 'night'
dayNight.getSkyBrightness()  // returns 0.0–1.0, used by fireflies and weather
```

### 2.2 Weather System

**New file:** `js/systems/weather.js`

**Rain events:**
- Triggered randomly. Check every 5 minutes of real time; 20% chance of starting rain. Rain lasts 2–5 minutes, then clears over 30 seconds.
- While raining: a `THREE.Points` particle system of ~800 white lines (elongated points) falls diagonally across the scene. Fall speed: 30 units/sec. Particles recycle from top when they exit the bottom.
- Sky color during rain: shifted 30% toward grey regardless of time-of-day color.
- Ambient light intensity reduced by 20% during rain.
- Water proximity audio volume increases 40% during rain.

**Weather state:** `weather.js` exports `update(scene, deltaTime)` and `isRaining()`. The particle mesh is added/removed from the scene as weather starts/stops with a 3-second fade.

### 2.3 NPC Wanderers

**New file:** `js/entities/npc.js`

Three NPC sprites wander the walkable area of the map. They use the same `PlaneGeometry + MeshBasicMaterial` pattern as `interactiveEntity.js` (fixed isometric rotation). NPCs use the existing character sprite sheet but display a **single static idle frame** (not animated) via `texture.offset` and `texture.repeat` to crop one frame. Each NPC uses a different column from the sprite sheet's idle row to look visually distinct, and a unique `material.color` tint (e.g. `0xffdddd`, `0xddffdd`, `0xddddff`).

**Pathfinding:** Each NPC picks a random walkable tile (not WATER, STONES, EDGE, VOID), walks toward it at 60% of Joel's walk speed, pauses 1–3 seconds on arrival, then picks a new destination. No collision with Joel — they pass through him (visual only). They do respect the same NON_WALKABLE tile set.

**Scale:** Each NPC sprite is 6×8 world units — slightly smaller than Joel to feel like background characters.

**One secret NPC:** One of the three NPCs has `isSecret: true`. When Joel walks within trigger radius (6 units), the entity toast shows "???" instead of a name. Pressing E / interact opens a small overlay with a hidden message: *"Hey. You found me. Joel says: stop waiting. Build the thing."* This NPC's sprite uses a distinct color tint (`material.color = new THREE.Color(0.8, 0.9, 1.0)`) to be subtly different.

**Integration:** `App.js` creates the NPC array after world init, adds them to the scene, calls `npc.update(delta, walkableTiles)` each frame, and passes them to `interaction.js` alongside the existing entity list for proximity detection.

### 2.4 Fireflies

**New file:** (added to `js/entities/decorative.js` as a new decorative type)

At night (when `dayNight.getPhase() === 'night'` or `'evening'`), 12–15 firefly sprites appear near grass tiles. They use the same hover animation as the decorative ship but smaller (`scale: { x: 0.8, y: 0.8 }`), with a random phase offset so they don't all pulse together.

Firefly sprite: programmatically generated at init — a 16×16 `CanvasTexture` with a radial gradient (white center → transparent edge). No external asset required. `MeshBasicMaterial` with `transparent: true`, `blending: THREE.AdditiveBlending` for the glow look.

They hover 2–4 units above the ground, drift slowly in random XZ directions (±0.3 units/sec), and wrap within a bounding box near the center of the grass area.

Firefly visibility is driven by polling: each frame `decorative.js` reads `dayNight.getPhase()` and adjusts firefly mesh `material.opacity` (0 during day, 1 during night/evening, lerping during dawn/dusk). No event system needed.

---

## Phase 3 — Identity

**Goal:** Visitors know who Joel is within 30 seconds, and leave wanting to follow him.

### 3.1 Home Entity → About Joel Hub

The existing `home` entity in `ENTITY_PLACEMENTS` (currently `overlayId: null`) becomes `overlayId: 'home-overlay'`.

**Overlay content (`home-overlay`):**

```
┌─────────────────────────────────────────┐
│  [pixel avatar / caricature of Joel]    │
│                                         │
│  JOEL                                   │
│  Tech Lead · Creator · Data Nerd        │
│                                         │
│  Associate Software Tech Lead @ KLA     │
│  Corporation — building things at the   │
│  intersection of data, code, and art.   │
│                                         │
│  I love: coding · data science · IoT   │
│           illustrations · caricatures  │
│           video editing · making stuff │
│                                         │
│  "Stop waiting. Build the thing."       │
│                                         │
│  ── EXPLORE THE MINDSCAPE ──            │
│  [Server/Blog] [Workbench/Projects]     │
│  [Rock Art]    [Gramophone]             │
│  [Bookshelf]   [Car/Travel]             │
└─────────────────────────────────────────┘
```

The avatar should use Joel's existing caricature artwork (from `_arts/caricatures/`). If no self-portrait exists, it uses a pixel-art silhouette placeholder styled like the character sprite.

### 3.2 "Now" Bulletin Board — New Entity

**New entity in `ENTITY_PLACEMENTS`:**
```js
{
  id: 'now-board',
  spritePath: '/assets/bulletin_board.png',   // new sprite needed
  tileCol: 19, tileRow: 10,
  ...tileToWorld(19, 10),
  scale: { x: 8, y: 9, z: 1 },
  triggerRadius: 8,
  collisionBox: { w: 6, d: 3, h: 7 },
  overlayId: 'now-overlay',
  label: 'Bulletin Board',
  description: "What Joel's up to now",
  icon: '📌',
}
```

**Overlay content:** A simple `public/now.json` file that Joel manually updates:
```json
{
  "building": "A data pipeline for IoT sensor readings",
  "reading": "The Pragmatic Programmer",
  "watching": "Severance S2",
  "listening": "Tame Impala — Currents",
  "thinking_about": "Starting a YouTube channel about making things"
}
```

`contentLoader.js` fetches `now.json` at startup (or overlay-open time) and renders it into `now-overlay`. No backend required — just a JSON file Joel edits.

### 3.3 "Start Something" Signpost — New Entity

**New entity in `ENTITY_PLACEMENTS`:**
```js
{
  id: 'signpost',
  spritePath: '/assets/signpost.png',   // new sprite needed
  tileCol: 9, tileRow: 15,
  ...tileToWorld(9, 15),
  scale: { x: 5, y: 7, z: 1 },
  triggerRadius: 7,
  collisionBox: { w: 4, d: 2, h: 6 },
  overlayId: 'start-overlay',
  label: 'Signpost',
  description: 'A message for you',
  icon: '🔥',
}
```

**Overlay content (`start-overlay`):** A rotating set of 5 prompts (one shown at random on each open):
1. *"You've been thinking about that project for months. Start today. Seriously."*
2. *"Draw something. Doesn't have to be good. Just draw it."*
3. *"The gap between your taste and your output closes only by making more things."*
4. *"What would you build if you knew it would fail? Build that."*
5. *"Joel started this website to inspire himself as much as anyone else. What's yours?"*

Footer: Links to Joel's GitHub, LinkedIn, and blog for people who feel inspired.

### 3.4 Guestbook at the Birdhouse

The existing `contact` entity (`contact-overlay`) gains a second tab: **"Guestbook"**.

**Tab structure:**
- Tab 1: "Contact" — existing links (GitHub, LinkedIn, email, etc.)
- Tab 2: "Guestbook" — visitor messages

**Guestbook implementation:** Uses a free, no-backend approach. Two options (Joel picks at implementation time):
- **Option A:** Embed a [Giscus](https://giscus.app) widget (GitHub Discussions-backed) — visitors comment with GitHub accounts.
- **Option B:** Static JSON file `public/guestbook.json` — Joel manually adds entries. Simple, always works.

Recommended: Option A (Giscus). It handles persistence, moderation, and spam automatically. Visitors sign in with GitHub — perfect audience fit for Joel's goals of attracting like-minded builders.

**Guestbook display:** Pixel-card style per entry — name (avatar), date, message (max 200 chars). Sorted newest-first.

---

## Phase 4 — Secrets

**Goal:** The "wait, I have to tell someone about this" layer.

### 4.1 Hidden Portal Tile

One tile in the world (specific coordinates hidden from the player) is a **void portal**. When the character walks onto it, a brief flash effect triggers and a secret overlay appears.

**Trigger:** Handled in `interaction.js` or `character.js` — after each movement step, check if character's current tile matches the secret tile coordinates. No toast, no hint — fully discoverable by exploration.

**Secret overlay content:**
```
YOU FOUND IT.

Most people never walk this far.

Joel built this whole world from scratch —
every tile, every sprite, every system.

The real secret? So can you.
Go build something.

[ close ]
```

**Portal tile location:** `tileCol: 27, tileRow: 27` — bottom-right corner near rocks, far from any entity. Players who explore thoroughly find it.

### 4.2 Konami Code

**File:** `js/systems/controls.js` (add to existing keyboard handler)

Sequence: `↑ ↑ ↓ ↓ ← → ← → B A`

**Effect — "Rainbow Mode":**
- All terrain tiles get a cycling hue-rotation CSS filter applied to the ground canvas texture (re-render with `hue-rotate(Ndeg)` cycling every frame).
- The title banner flashes rainbow colors.
- Confetti particle burst: 50 colored square sprites explode from the character's position and fall with gravity.
- A "CHEAT ACTIVATED: RAINBOW MODE" toast appears for 3 seconds.
- Press Escape to deactivate.

### 4.3 Cheat Codes

**File:** `js/systems/controls.js` — add a keypress buffer (last 10 chars). On each keypress, append to buffer, check buffer suffix against known codes.

| Code | Effect |
|---|---|
| `NOCLIP` | Character ignores collision — walks through water, rocks, buildings |
| `FLY` | Character floats 4 units above ground, no footstep sounds |
| `TURBO` | Permanent dash speed (2×) without needing Space held |
| `RESET` | Clears all active cheats |

Each cheat shows a pixel-style toast: `CHEAT: NOCLIP ON`. Cheats persist until `RESET` is typed or page is refreshed.

### 4.4 Hidden NPC Dialogue

Covered in Phase 2 (§2.3 — the secret NPC). One of the three wanderers has `isSecret: true` and opens a special overlay on interact, with the message: *"Hey. You found me. Joel says: stop waiting. Build the thing."*

---

## New Assets Required

| Asset | Type | Usage |
|---|---|---|
| `public/assets/audio/bgm.mp3` | Audio | Ambient BGM loop |
| `public/assets/audio/step_grass.mp3` | Audio | Grass footstep |
| `public/assets/audio/step_brick.mp3` | Audio | Brick footstep |
| `public/assets/audio/step_rock.mp3` | Audio | Rock footstep |
| `public/assets/audio/ui_open.mp3` | Audio | Overlay open chime |
| `public/assets/audio/ui_close.mp3` | Audio | Overlay close chime |
| `public/assets/audio/ui_blip.mp3` | Audio | Toast blip |
| `public/assets/audio/water_loop.mp3` | Audio | Water proximity loop |
| `public/assets/bulletin_board.png` | Sprite | "Now" board entity |
| `public/assets/signpost.png` | Sprite | "Start Something" entity |
| Firefly texture | Programmatic `CanvasTexture` | Generated in code — no file needed |
| `public/now.json` | Data | Joel's "now" content |

---

## File Change Summary

| File | Change |
|---|---|
| `js/systems/intro.js` | **New** — cinematic intro sequence |
| `js/systems/audio.js` | **New** — full audio system |
| `js/systems/dayNight.js` | **New** — day/night cycle |
| `js/systems/weather.js` | **New** — weather/rain system |
| `js/entities/npc.js` | **New** — NPC wanderers |
| `js/entities/decorative.js` | **Modify** — add firefly type |
| `js/core/App.js` | **Modify** — wire all new systems into game loop |
| `js/systems/controls.js` | **Modify** — add Konami + cheat code detection |
| `js/config/worldMap.js` | **Modify** — add `now-board` and `signpost` entities; enable `home` overlayId |
| `js/content/contentLoader.js` | **Modify** — add `home-overlay`, `now-overlay`, `start-overlay` content |
| `js/ui/overlayContent.js` | **Modify** — add home, now, start, guestbook tab content |
| `index.html` | **Modify** — add audio toggle button; add new overlay HTML skeletons; add intro prompt element |
| `public/now.json` | **New** — Joel's manually-updated "now" content |

---

## Out of Scope

- IoT hardware integration (Joel is still procrastinating — noted for future)
- Backend/server for guestbook (Giscus handles this without one)
- Real weather API integration (random rain is simpler and more fun)
- Multiplayer / seeing other visitors in the world (future consideration)
- Complete visual redesign of existing overlays (content is fine, focus is on the world)
