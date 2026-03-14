import { marked } from 'marked';
import travelData from '../../_travel/travel.json';

// ---------------------------------------------------------------------------
// Vite build-time glob imports — patterns MUST be string literals
// Paths starting with / are relative to Vite project root
// ---------------------------------------------------------------------------

// Art images: { '/_arts/digital-art/work1.jpg': '/hashed-url', ... }
const _artFiles = import.meta.glob(
    '/_arts/**/*.{jpg,png,jpeg,gif,webp}',
    { eager: true, query: '?url', import: 'default' }
);

// Post markdown strings: { '/_posts/github-io-guide/index.md': '---\ntitle:...' }
const _postMd = import.meta.glob(
    '/_posts/**/index.md',
    { eager: true, query: '?raw', import: 'default' }
);

// Post images: { '/_posts/github-io-guide/cover.png': '/hashed-url', ... }
const _postImgs = import.meta.glob(
    '/_posts/**/*.{jpg,png,jpeg,gif,webp}',
    { eager: true, query: '?url', import: 'default' }
);

// ---------------------------------------------------------------------------
// Frontmatter parser (no external dependency)
// ---------------------------------------------------------------------------

function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: raw };
    const meta = {};
    for (const line of match[1].split(/\r?\n/)) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;
        const key = line.slice(0, colonIdx).trim();
        const val = line.slice(colonIdx + 1).trim().replace(/^["'](.*)["']$/, '$1');
        if (key) meta[key] = val;
    }
    return { meta, body: match[2] };
}

// ---------------------------------------------------------------------------
// Art categories
// ---------------------------------------------------------------------------

function buildArtCategories() {
    const byCategory = {};
    for (const [path, url] of Object.entries(_artFiles)) {
        // path example: '/_arts/digital-art/work1.jpg'
        const parts = path.split('/');
        const category = parts[parts.length - 2];
        const filename = parts[parts.length - 1];
        if (!byCategory[category]) byCategory[category] = [];
        byCategory[category].push({ filename, url });
    }
    return Object.entries(byCategory)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, images]) => ({
            name,
            displayName: name
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase()),
            images,
        }));
}

// ---------------------------------------------------------------------------
// Blog posts
// ---------------------------------------------------------------------------

function buildPosts() {
    const posts = [];
    for (const [path, raw] of Object.entries(_postMd)) {
        // path example: '/_posts/github-io-guide/index.md'
        const slug = path.split('/').slice(-2)[0];
        const { meta, body } = parseFrontmatter(raw);

        // Collect images for this slug
        const imageUrls = {};
        for (const [imgPath, url] of Object.entries(_postImgs)) {
            const parts = imgPath.split('/');
            if (parts[parts.length - 2] === slug) {
                imageUrls[parts[parts.length - 1]] = url;
            }
        }

        // Render markdown to HTML
        let html = marked.parse(body);

        // Resolve relative image references: src="./filename.png" → Vite URL
        html = html.replace(/src="\.\/([^"]+)"/g, (match, filename) => {
            const resolved = imageUrls[filename];
            return resolved ? `src="${resolved}"` : match;
        });

        posts.push({ slug, meta, html, imageUrls });
    }
    // Newest first
    return posts.sort((a, b) => new Date(b.meta.date || 0) - new Date(a.meta.date || 0));
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const artCategories = buildArtCategories();
export const posts = buildPosts();
export { travelData };
