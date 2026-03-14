# Design Spec: Content System & Integrations
**Date:** 2026-03-14
**Project:** joeloffbeat.github.io — Joel's Mindscape
**Status:** Approved

---

## Overview

This spec covers 12 features across four categories for the Mindscape isometric portfolio site. The primary goal is a **data-driven content system** backed by flat-file folders (`_posts`, `_arts`, `_travel`) loaded at build time via Vite's `import.meta.glob`, plus external API integrations for GitHub projects and Spotify playlists, two bug fixes, and several UI improvements.

---

## 1. Bug Fixes

### 1a. Entity Collision Box Updates

**Problem:** Entity sprite scales in `worldMap.js` were updated but collision boxes (`collisionBox: { w, d, h }`) were not recalculated to match.

**Fix:** Recalculate collision boxes using the formula:
- `w` ≈ 35% of `scale.x` (physical X-axis footprint of a billboarded sprite)
- `d` ≈ 20% of `scale.x` (Z-axis depth footprint). Exception: the car uses `d = 10` (44% of scale.x) because its sprite represents a physically deep 3D object, not a flat billboard.
- `h` ≈ 50–55% of `scale.y` (physical height)

Updated values in `js/config/worldMap.js`:

| Entity | scale.x / scale.y | Old w,d,h | New w,d,h |
|---|---|---|---|
| bookshelf | 14 / 16 | 3, 2, 8 | 5, 2, 8 |
| server | 12 / 16 | 2, 2, 8 | 4, 2, 8 |
| rockart | 16 / 12 | 4, 3, 6 | 6, 2, 6 |
| workbench | 12 / 12 | 4, 2, 5 | 4, 3, 6 |
| musicplayer | 6 / 7 | 2, 2, 7 | 2, 2, 4 |
| contact | 8 / 8 | 2, 2, 8 | 3, 2, 4 |
| car | 22.5 / 13.5 | 8, 12, 12 | 8, 10, 7 |

**Verification:** Enable `DEBUG.COLLIDER_BOXES = true` in `js/config/debug.js`, take a Playwright screenshot, confirm boxes wrap each sprite tightly. Disable after verification.

### 1b. Sprint Black Ghost Fix

**Problem:** During sprint (spacebar + movement), ghost trail sprites occasionally render as solid black for one frame before fading.

**Root cause:** `spawnGhost()` in `App.js` calls `charMat.map.clone()`. Three.js marks cloned textures with `needsUpdate = true` and queues a GPU upload. On the first render frame after cloning, the GPU slot may be unfilled — the sprite renders black.

**Fix:** Replace the texture clone with a **canvas frame snapshot**:

1. Access the character sprite's source image (`charMat.map.image`)
2. Calculate the current frame's pixel bounds using `map.offset` and `map.repeat`
3. Draw that region into a small `<canvas>` using `ctx.drawImage(img, srcX, srcY, fw, fh, 0, 0, fw, fh)`
4. Wrap the canvas in a `THREE.CanvasTexture` — canvas data is synchronously available, no GPU delay
5. Set `magFilter = NearestFilter` on the snapshot texture
6. Set `depthWrite: false` and `alphaTest: 0.5` on the ghost `SpriteMaterial` (matches character's alphaTest, prevents dark edge artifacts)

**Note on UV coordinate system:** Three.js UV `offset.y = 0` maps to the bottom of the image, but HTML canvas `y = 0` is the top. The Y pixel offset must be inverted: `oy = imgH - round(imgH * (offset.y + repeat.y))`.

**File:** `js/core/App.js` — `spawnGhost()` method only.

---

## 2. UI Changes

### 2a. Wider Overlay Modal

**Change:** `index.html` `.overlay-content` CSS — update `width` from `min(90vw, 800px)` to `min(92vw, 1100px)`.

**Rationale:** Extra horizontal space allows the art grid to fit 3–4 columns comfortably, blog posts to display readable line lengths, and project/playlist cards to use a denser grid.

### 2b. Birdhouse Contact Links

**Change:** `js/ui/overlayContent.js` `contact-overlay` — add Instagram and X links.

```
📧 hello@joel.dev
🐙 github.com/joeloffbeat
💼 LinkedIn
📷 instagram.com/joeloffbeat   ← new
𝕏 x.com/joeloffbeat            ← new (replaces old Twitter entry)
```

All links open in `_blank` with `rel="noopener noreferrer"`.

---

## 3. Content System Architecture

### 3a. Folder Structure

Three content folders at the **project root**. Their location outside `js/` makes them easy for the author to navigate and edit without touching source code.

```
_posts/
  {slug}/
    index.md          ← frontmatter + markdown body
    {image}.*         ← any images referenced in the post
_arts/
  {category-name}/    ← folder name becomes a tab label
    {image}.*
_travel/
  travel.json
```

### 3b. Content Loader

**New file:** `js/content/contentLoader.js`

Single module that runs all `import.meta.glob` calls (must be string literals — Vite resolves at build time). Glob paths beginning with `/` are resolved relative to the Vite project root, matching `_posts/`, `_arts/`, `_travel/` at the repository root. Exports structured data consumed by overlay builders.

```js
// Art: folder → images map
// { '/_arts/digital-art/work1.jpg': '/hashed-url', ... }
const _artFiles = import.meta.glob(
  '/_arts/**/*.{jpg,png,jpeg,gif,webp}',
  { eager: true, query: '?url', import: 'default' }
);

// Posts: markdown strings
// Uses query: '?raw' (Vite 5+ syntax; as: 'raw' is removed in Vite 5+)
const _postMd = import.meta.glob(
  '/_posts/**/index.md',
  { eager: true, query: '?raw', import: 'default' }
);

// Post images: slug → filename → resolved URL
const _postImgs = import.meta.glob(
  '/_posts/**/*.{jpg,png,jpeg,gif,webp}',
  { eager: true, query: '?url', import: 'default' }
);

import travelData from '/_travel/travel.json';
```

**Exports:**
- `artCategories`: `Array<{ name: string, displayName: string, images: Array<{ filename, url }> }>`
- `posts`: `Array<{ slug, meta: { title, date, tags, excerpt, cover }, html, imageUrls: Record<filename, url> }>`
- `travelData`: raw JSON object

### 3c. Frontmatter Parser

15-line regex parser in `contentLoader.js`. No extra dependency.

```
---
title: Post Title
date: 2026-03-14
tags: tag1, tag2
excerpt: One-line description shown in the list.
cover: cover.png
---
Markdown body...
```

Parses into `{ meta: { title, date, tags, excerpt, cover }, body: string }`.

### 3d. Markdown Rendering

**Dependency:** `marked` — add to `dependencies` in `package.json` (runtime browser code, not a build-only tool). Used to convert markdown body to HTML. Post-render, all `<img src="./filename">` attributes in the rendered HTML are replaced with their Vite-resolved URL from the `_postImgs` map for that slug.

---

## 4. Async Overlay System Refactor

### 4a. `overlay.js`

`open(overlayId)` becomes `async`. Sequence:

1. Inject `<div class="overlay-loading">Loading...</div>` into `.overlay-body` (not a class on `<body>`)
2. Show modal (add `overlay-visible` class) so the loading indicator is visible
3. `await resolveOverlayContent(overlayId)`
4. Set `titleEl.textContent` and replace `bodyEl.innerHTML` with content HTML
5. Call `content.onReady(bodyEl)` if present

**Call site update in `App.js`:** The `openOverlay` wrapper passed to `initInteraction` is a plain sync callback. Since it now calls an async function, it must handle rejections explicitly:

```js
// js/core/App.js — initUI()
initInteraction(this.entities, toastEl, (overlayId) => {
    openOverlay(overlayId).catch(err => console.error('Overlay error:', err));
});
```

Without this `.catch()`, a failed async content builder produces an unhandled promise rejection.

### 4b. `overlayContent.js`

Rewritten as an **async builder registry**. Each overlay has its own builder function. Static overlays return synchronously (coerced to Promise by `async`); API-backed overlays return a Promise.

```js
const BUILDERS = {
  'art-overlay':      buildArtOverlay,      // sync
  'blog-overlay':     buildBlogOverlay,     // sync
  'travel-overlay':   buildTravelOverlay,   // sync
  'projects-overlay': buildProjectsOverlay, // async — GitHub API
  'music-overlay':    buildMusicOverlay,    // async — Spotify prefetch JSON
  'books-overlay':    buildBooksOverlay,    // sync — unchanged content
  'contact-overlay':  buildContactOverlay,  // sync — updated links
};

export async function resolveOverlayContent(id) {
  const builder = BUILDERS[id];
  if (!builder) return null;
  return builder();
}
```

**Return type:** `{ title: string, html: string, onReady?: (bodyEl: HTMLElement) => void }`

`onReady` is optional. Its absence is handled in `overlay.js` with an `if (content.onReady)` guard. `onReady` is used to wire interactive elements (tab buttons, pagination buttons, blog "read more" links) after `innerHTML` injection, avoiding inline `onclick` attributes.

---

## 5. Art Overlay — Tabs + Pagination

### Data source
`artCategories` from `contentLoader.js`. Categories are sorted alphabetically. If `_arts/` is empty or missing, show a placeholder message.

### Tab UI
One `<button class="tab-btn">` per category. Active tab highlighted. On click, hide all `.tab-panel` elements, show the matching one.

```html
<div class="tab-bar">
  <button class="tab-btn active" data-tab="0">Digital Art</button>
  <button class="tab-btn" data-tab="1">Sketches</button>
</div>
<div class="tab-panel" data-panel="0"> ... </div>
<div class="tab-panel tab-panel-hidden" data-panel="1"> ... </div>
```

Tab state and pagination state are managed in a closure inside `onReady`.

### Pagination
9 items per page. Each tab maintains its own `currentPage` counter (reset to 0 when switching tabs). Controls:

```
← Prev    Page 1 of 3    Next →
```

Controls hidden if total items ≤ 9. Rendered as a `<div class="pagination">` inside each tab panel. `onReady` attaches `click` listeners to buttons via `data-action="prev"` / `data-action="next"` attributes on each panel's pagination div.

### Image display
Each art item is a `<div class="art-item">` with `background-image: url(...)`, `aspect-ratio: 1`, and a caption showing the filename (without extension, underscores replaced with spaces).

---

## 6. Blog Overlay — List + Full Reader

### List view
Posts sorted newest-first. 5 posts per page. Each entry:
- Title (prominent)
- Date + comma-separated tags
- Excerpt (from frontmatter)
- `Read more →` button with `data-post-slug` attribute

### Full reader view
Clicking `Read more →` calls a `renderPost(slug)` function defined inside the `onReady` closure. This replaces `bodyEl.innerHTML` with:

```html
<button class="blog-back" data-action="back">← Back</button>
<div class="blog-post-content">
  {rendered markdown HTML}
</div>
```

`Back` button click calls `renderList(savedPage)` — a `renderList(page)` function also defined inside the same `onReady` closure. `renderList` re-renders the list HTML into `bodyEl` **and re-attaches all pagination + read-more event listeners** via a single `bodyEl.addEventListener('click', handler)` delegated listener. Using event delegation (one listener on `bodyEl` rather than per-button) means listeners survive `innerHTML` replacements because the delegation is re-registered each time `renderList` or `renderPost` is called.

### Image resolution
After rendering markdown to HTML, scan all `<img>` tags. For each `src` value like `./cover.png`, look up the resolved URL in `post.imageUrls['cover.png']` and replace the `src`. Images without a matching entry are left as-is.

### Markdown styling
Add CSS to `.blog-post-content`: `h1`–`h3` headers in gold, `p` with readable line-height, `code`/`pre` blocks in monospace with dark background, `img` at 100% max-width.

---

## 7. Travel Overlay

### Data format — `_travel/travel.json`
```json
{
  "current": {
    "place": "City, Country",
    "dates": "Month YYYY",
    "flag": "🇸🇬",
    "notes": "Optional note"
  },
  "upcoming": [
    {
      "place": "City, Country",
      "dates": "Date range",
      "flag": "🇯🇵",
      "status": "confirmed",
      "notes": "Optional note"
    }
  ],
  "past": [
    { "place": "City, Country", "dates": "Month YYYY", "flag": "🇪🇸" }
  ]
}
```

`status` field (upcoming only): `"confirmed"` | `"exploring"` — shown as a small badge.

### Overlay layout
Three sections stacked vertically: **Now**, **Coming Up**, **Been There**. Cards use a consistent design: flag emoji large, place bold, dates muted. "Now" section has a highlight border (green).

---

## 8. Projects Overlay — GitHub API

**Endpoint:** `GET https://api.github.com/users/joeloffbeat/repos?sort=updated&per_page=6&type=public`

**Caching:** Module-level variable. After first successful fetch, subsequent overlay opens use cached data (no re-fetch within the session).

**Rate limit handling:** GitHub's unauthenticated API allows 60 requests/hour per IP. On error, inspect the response status:
- HTTP 403 with `X-RateLimit-Remaining: 0` → show "GitHub rate limit reached. View all projects at github.com/joeloffbeat"
- Other errors → show generic fallback list

**Card layout:**
- Repo name — links to `https://github.com/joeloffbeat/{name}` (opens `_blank`)
- Description (truncated at 80 chars if needed)
- Language dot + language name
- ⭐ star count
- `Open ↗` button

**Loading state:** Inject `<div class="overlay-loading">Fetching projects...</div>` before the await, replace after.

**Error state:** Fallback to a hardcoded list of 3 key projects + "View all on GitHub ↗" link.

---

## 9. Music Overlay — Spotify Integration

### Architecture: Build-time prefetch (no browser CORS issue)

The Spotify Accounts token endpoint (`POST https://accounts.spotify.com/api/token`) does **not** include CORS headers and cannot be called from a browser. Using Client Credentials from browser code always fails with a CORS error.

**Solution:** A Node.js prebuild script runs `POST /api/token` server-side (Node has no CORS restrictions), fetches the user's public playlists, and writes a static `public/spotify-data.json`. The browser fetches this same-origin JSON file — no credentials, no CORS.

### Credentials

Stored in `.env.local` at the project root (gitignored). Read by the Node prebuild script only — **never embedded in the browser bundle**.

```
SPOTIFY_CLIENT_ID=77a00f0d00114cab91d5bf3985e700f3
SPOTIFY_CLIENT_SECRET=9aa4d72af6474e90b944cdea926739ad
```

Note: No `VITE_` prefix. These are Node-only variables, not Vite client variables.

For CI/CD (GitHub Actions): set `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` as repository secrets.

### Prebuild script — `scripts/prefetch-spotify.js`

Runs before `vite build`. Uses `dotenv` to load `.env.local`. Writes output to `public/spotify-data.json`.

```
Flow:
1. Load .env.local via dotenv.config({ path: '.env.local' })
   (dotenv default reads .env; the path option must be explicit for .env.local)
2. POST accounts.spotify.com/api/token → access_token
3. GET api.spotify.com/v1/users/joeloffbeat/playlists?limit=6
4. Write { playlists: [...], fetchedAt: ISO-date } to public/spotify-data.json
5. Exit 0 on success, exit 0 with warning on failure (build continues)
```

Script exits with code 0 even on failure so it never blocks the build. If the file is not generated, the overlay shows the fallback.

### `package.json` scripts update

```json
"prebuild": "node scripts/prefetch-spotify.js",
"build": "vite build"
```

`prebuild` runs automatically before `build` in npm lifecycle. Also add a standalone script:
```json
"prefetch": "node scripts/prefetch-spotify.js"
```

For dev workflow: run `npm run prefetch` once to generate the file, then `npm run dev`.

### Generated file — `public/spotify-data.json`

Added to `.gitignore` (generated artifact). Structure:
```json
{
  "fetchedAt": "2026-03-14T12:00:00Z",
  "playlists": [
    {
      "id": "...",
      "name": "Playlist Name",
      "trackCount": 24,
      "coverUrl": "https://i.scdn.co/...",
      "externalUrl": "https://open.spotify.com/playlist/..."
    }
  ]
}
```

### Overlay layout

- **Header link:** "Open Spotify Profile ↗" → `https://open.spotify.com/user/joeloffbeat`
- **Playlist grid:** cover image (80×80px), playlist name, track count, `Open ↗` link

**Fallback (fetch error or missing JSON):** Display profile link button only with a message "View playlists on Spotify".

### Dependencies

Add `dotenv` to `devDependencies` (Node-only, not bundled by Vite).

---

## 10. Sample Blog Post

**File:** `_posts/github-io-guide/index.md`

```
---
title: How to Create Your Own GitHub.io Site
date: 2026-03-14
tags: github, tutorial, web
excerpt: A step-by-step beginner's guide to launching your first GitHub Pages site from scratch.
cover: cover.png
---
```

**Sections:**
1. What is GitHub Pages?
2. Create a GitHub account
3. Create a repo named `{username}.github.io`
4. Add an `index.html`
5. Enable GitHub Pages in repo settings (source: main branch / root)
6. Push and wait for the green checkmark
7. Visit `https://{username}.github.io`
8. Next steps: Vite scaffold, custom domain

Includes a placeholder `cover.png` (a simple 800×400 grey placeholder the user can replace).

---

## 11. New CSS Classes

Added to `index.html` `<style>` block:

| Class | Purpose |
|---|---|
| `.tab-bar` | Flex row of tab buttons |
| `.tab-btn` | Individual tab button, dark bg |
| `.tab-btn.active` | Active tab highlight (gold border, lighter bg) |
| `.tab-panel` | Tab content container |
| `.tab-panel-hidden` | `display: none` |
| `.pagination` | Flex row: prev button, page indicator, next button |
| `.page-btn` | Prev/Next button, disabled state |
| `.blog-back` | Back button for post reader |
| `.blog-post-content` | Prose wrapper for rendered markdown |
| `.blog-post-content h1–h3` | Header styles (gold colour) |
| `.blog-post-content img` | Full-width images in posts |
| `.blog-post-content pre` | Code block style (monospace, dark bg) |
| `.travel-section` | Labelled section (Now / Coming Up / Been There) |
| `.travel-card` | Travel destination card |
| `.travel-badge` | Status badge (confirmed / exploring) |
| `.overlay-loading` | Centred loading indicator injected into `.overlay-body` |
| `.github-card` | GitHub project card (extends `.overlay-card`) |
| `.spotify-playlist-card` | Spotify playlist card |
| `.spotify-cover` | 80×80 playlist cover image |

---

## 12. Files Changed Summary

| File | Change Type | Notes |
|---|---|---|
| `js/config/worldMap.js` | Edit | 7 collision box updates |
| `js/core/App.js` | Edit | `spawnGhost()` canvas snapshot + `.catch()` in overlay call |
| `index.html` | Edit | Wider overlay + new CSS classes |
| `js/ui/overlay.js` | Edit | Async `open()`, loading element injection, `onReady` call |
| `js/ui/overlayContent.js` | Rewrite | Async builder registry |
| `js/content/contentLoader.js` | New | All `import.meta.glob` calls, frontmatter parser |
| `scripts/prefetch-spotify.js` | New | Node prebuild script for Spotify data |
| `_posts/github-io-guide/index.md` | New | Sample blog post |
| `_posts/github-io-guide/cover.png` | New | Placeholder cover image |
| `_arts/` | New | Placeholder folder structure |
| `_travel/travel.json` | New | Travel data (placeholder values) |
| `.env.local` | New | Spotify credentials (gitignored) |
| `.gitignore` | Edit | Add `.env.local` and `public/spotify-data.json` (both are generated/secret artifacts that must not be committed) |
| `package.json` | Edit | Add `marked` (dependencies), `dotenv` (devDependencies), `prebuild` + `prefetch` scripts |

---

## Out of Scope

- Server-side rendering or backend of any kind
- Spotify "Now Playing" (requires OAuth user flow)
- CMS or admin UI for content editing
- Image optimization pipeline
- Comments, likes, or any user-generated content
- Lightbox / full-screen image zoom for art items
