/**
 * Placeholder content for each overlay. Returns { title, html }.
 * Replace with real API integrations in a future phase.
 */

const OVERLAYS = {
    'books-overlay': {
        title: '\u{1F4DA} Books & Movies',
        html: `
            <div class="overlay-grid">
                ${['The Pragmatic Programmer', 'Dune', 'Interstellar', 'Atomic Habits', 'The Matrix', 'Sapiens'].map((t, i) => `
                    <div class="overlay-card">
                        <div class="card-cover" style="background:hsl(${i * 55}, 50%, 35%)"></div>
                        <div class="card-info">
                            <div class="card-title">${t}</div>
                            <div class="card-meta">${'\u2605'.repeat(3 + (i % 3))}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'music-overlay': {
        title: '\u{1F3B5} Music & Playlists',
        html: `
            <div class="overlay-section">
                <h3>Now Playing</h3>
                <div class="now-playing">
                    <div class="np-art" style="background:hsl(280, 50%, 35%)"></div>
                    <div class="np-info">
                        <div class="card-title">Bohemian Rhapsody</div>
                        <div class="card-meta">Queen</div>
                    </div>
                </div>
            </div>
            <div class="overlay-section">
                <h3>Playlists</h3>
                <div class="overlay-grid">
                    ${['Chill Vibes', 'Workout Mix', 'Focus Mode', 'Road Trip'].map((t, i) => `
                        <div class="overlay-card">
                            <div class="card-cover" style="background:hsl(${i * 80 + 180}, 50%, 35%)"></div>
                            <div class="card-info">
                                <div class="card-title">${t}</div>
                                <div class="card-meta">${12 + i * 5} tracks</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    },

    'contact-overlay': {
        title: '\u{1F426} Contact Info',
        html: `
            <div class="contact-card">
                <div class="contact-name">Joel</div>
                <div class="contact-links">
                    <a href="#" class="contact-link">\u{1F4E7} hello@joel.dev</a>
                    <a href="#" class="contact-link">\u{1F419} GitHub</a>
                    <a href="#" class="contact-link">\u{1F4BC} LinkedIn</a>
                    <a href="#" class="contact-link">\u{1F426} Twitter</a>
                </div>
            </div>
        `
    },

    'projects-overlay': {
        title: '\u{1F527} Projects',
        html: `
            <div class="overlay-grid">
                ${[
                    { name: 'Mindscape', desc: 'Isometric pixel-art portfolio', lang: 'JavaScript' },
                    { name: 'CLI Tool', desc: 'Developer productivity toolkit', lang: 'Rust' },
                    { name: 'Mobile App', desc: 'Cross-platform habit tracker', lang: 'Dart' },
                    { name: 'API Server', desc: 'RESTful backend service', lang: 'Go' },
                ].map((p, i) => `
                    <div class="overlay-card project-card">
                        <div class="card-info">
                            <div class="card-title">${p.name}</div>
                            <div class="card-meta">${p.desc}</div>
                            <div class="project-lang">
                                <span class="lang-dot" style="background:hsl(${i * 90}, 60%, 50%)"></span>
                                ${p.lang}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'art-overlay': {
        title: '\u{1F3A8} Art Gallery',
        html: `
            <div class="art-grid">
                ${Array.from({ length: 9 }, (_, i) => `
                    <div class="art-item" style="background:hsl(${i * 40}, 45%, ${30 + i * 3}%)">
                        <div class="art-caption">Artwork ${i + 1}</div>
                    </div>
                `).join('')}
            </div>
        `
    },

    'blog-overlay': {
        title: '\u{1F5A5}\uFE0F Tech Blog',
        html: `
            <div class="blog-list">
                ${[
                    { title: 'Building an Isometric World with Three.js', date: '2026-03-01' },
                    { title: 'Pixel Art Tips for Developers', date: '2026-02-15' },
                    { title: 'Data-Driven Game Design Patterns', date: '2026-01-20' },
                ].map(p => `
                    <div class="blog-entry">
                        <div class="card-title">${p.title}</div>
                        <div class="card-meta">${p.date}</div>
                        <p class="blog-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...</p>
                        <a href="#" class="blog-link">Read more \u2192</a>
                    </div>
                `).join('')}
            </div>
        `
    },

    'travel-overlay': {
        title: '\u{1F697} Travel Plans',
        html: `
            <div class="overlay-grid">
                ${[
                    { place: 'Tokyo, Japan', dates: 'Apr 2026' },
                    { place: 'Iceland', dates: 'Jul 2026' },
                    { place: 'Patagonia', dates: 'Nov 2026' },
                    { place: 'New Zealand', dates: 'Feb 2027' },
                ].map((d, i) => `
                    <div class="overlay-card">
                        <div class="card-cover" style="background:hsl(${i * 70 + 100}, 40%, 35%)"></div>
                        <div class="card-info">
                            <div class="card-title">${d.place}</div>
                            <div class="card-meta">${d.dates}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },
};

export function getOverlayContent(overlayId) {
    return OVERLAYS[overlayId] || null;
}
