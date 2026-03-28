/**
 * Overlay content builder registry.
 * Each builder returns { title, html, onReady? }.
 * onReady(bodyEl) is called after innerHTML injection to wire up event listeners.
 */

import { artCategories, posts, travelData, moviesData, booksData } from '../content/contentLoader.js';

// HTML-escape a string before injecting it into innerHTML
function esc(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Only allow https:// and mailto: URLs in href/src attributes
function safeHref(url) {
    try {
        const u = new URL(url);
        if (u.protocol === 'https:' || u.protocol === 'mailto:') return url;
    } catch (_) { /* fall through */ }
    return '#';
}

// ---------------------------------------------------------------------------
// Art Overlay — tabs (one per _arts/ subfolder) + pagination (9 items/page)
// ---------------------------------------------------------------------------

function buildArtOverlay() {
    if (artCategories.length === 0) {
        return {
            title: '\u{1F3A8} Art Gallery',
            html: '<div class="overlay-loading">No artwork yet. Add images to _arts/ subfolders.</div>',
        };
    }

    const tabBtns = artCategories
        .map((cat, i) => `<button class="tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}">${cat.displayName}</button>`)
        .join('');

    const panels = artCategories
        .map((cat, i) => `
            <div class="tab-panel${i === 0 ? '' : ' tab-panel-hidden'}" data-panel="${i}">
                <div class="art-grid" data-category="${i}"></div>
                <div class="pagination" data-category="${i}" style="display:none">
                    <button class="page-btn" data-action="prev" data-cat="${i}">&#8592; Prev</button>
                    <span class="page-info" data-category="${i}"></span>
                    <button class="page-btn" data-action="next" data-cat="${i}">Next &#8594;</button>
                </div>
            </div>`)
        .join('');

    return {
        title: '\u{1F3A8} Art Gallery',
        html: `<div class="tab-bar">${tabBtns}</div>${panels}`,
        onReady: (bodyEl) => {
            // Compute how many images fit in the visible overlay area
            const gridEl = bodyEl.querySelector('.art-grid');
            const availW = (gridEl?.offsetWidth || window.innerWidth * 0.8) - 8;
            const availH = window.innerHeight * 0.68 - 60; // subtract tabs + pagination
            const cols = Math.max(2, Math.floor(availW / 155));
            const rows = Math.max(2, Math.floor(availH / 185));
            const PER_PAGE = cols * rows;
            const pages = artCategories.map(() => 0);
            let activePanelIdx = 0;

            function renderPage(tabIdx) {
                const cat = artCategories[tabIdx];
                const page = pages[tabIdx];
                const total = cat.images.length;
                const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
                const slice = cat.images.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

                const grid = bodyEl.querySelector(`.art-grid[data-category="${tabIdx}"]`);
                const paginationEl = bodyEl.querySelector(`.pagination[data-category="${tabIdx}"]`);
                const pageInfo = bodyEl.querySelector(`.page-info[data-category="${tabIdx}"]`);

                grid.innerHTML = slice.map(img => {
                    const caption = img.filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
                    return `<div class="art-item" style="background-image:url(${img.url})" data-url="${esc(img.url)}" data-caption="${esc(caption)}">
                        <div class="art-caption">${caption}</div>
                    </div>`;
                }).join('');

                const prevBtn = paginationEl.querySelector(`[data-action="prev"][data-cat="${tabIdx}"]`);
                const nextBtn = paginationEl.querySelector(`[data-action="next"][data-cat="${tabIdx}"]`);
                if (total > PER_PAGE) {
                    paginationEl.style.display = 'flex';
                    pageInfo.textContent = `Page ${page + 1} of ${totalPages}`;
                    prevBtn.style.visibility = page === 0 ? 'hidden' : 'visible';
                    nextBtn.style.visibility = page >= totalPages - 1 ? 'hidden' : 'visible';
                } else {
                    paginationEl.style.display = 'none';
                }
            }

            function showLightbox(url, caption) {
                bodyEl.innerHTML = `
                    <button class="blog-back" data-action="art-back">&#8592; Back to Gallery</button>
                    <div class="art-lightbox">
                        <img class="art-lightbox-img" src="${esc(url)}" alt="${esc(caption)}">
                        ${caption ? `<div class="art-lightbox-caption">${esc(caption)}</div>` : ''}
                    </div>`;
            }

            function restoreGallery() {
                bodyEl.innerHTML = `<div class="tab-bar">${tabBtns}</div>${panels}`;
                if (activePanelIdx !== 0) {
                    bodyEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    bodyEl.querySelector(`.tab-btn[data-tab="${activePanelIdx}"]`).classList.add('active');
                    bodyEl.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel-hidden'));
                    bodyEl.querySelector(`.tab-panel[data-panel="${activePanelIdx}"]`).classList.remove('tab-panel-hidden');
                }
                renderPage(activePanelIdx);
            }

            renderPage(0);

            bodyEl.addEventListener('click', (e) => {
                // Back from lightbox
                if (e.target.closest('[data-action="art-back"]')) {
                    restoreGallery();
                    return;
                }

                // Tab switching
                const tabBtn = e.target.closest('.tab-btn');
                if (tabBtn) {
                    const idx = parseInt(tabBtn.dataset.tab);
                    activePanelIdx = idx;
                    bodyEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    tabBtn.classList.add('active');
                    bodyEl.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel-hidden'));
                    bodyEl.querySelector(`.tab-panel[data-panel="${idx}"]`).classList.remove('tab-panel-hidden');
                    renderPage(idx);
                    return;
                }

                // Pagination
                const pageBtn = e.target.closest('.page-btn');
                if (pageBtn && !pageBtn.disabled) {
                    const catIdx = parseInt(pageBtn.dataset.cat);
                    const total = artCategories[catIdx].images.length;
                    const totalPages = Math.ceil(total / PER_PAGE);
                    if (pageBtn.dataset.action === 'prev' && pages[catIdx] > 0) pages[catIdx]--;
                    if (pageBtn.dataset.action === 'next' && pages[catIdx] < totalPages - 1) pages[catIdx]++;
                    renderPage(catIdx);
                    return;
                }

                // Art item → lightbox
                const artItem = e.target.closest('.art-item');
                if (artItem) {
                    showLightbox(artItem.dataset.url, artItem.dataset.caption);
                }
            });
        },
    };
}

// ---------------------------------------------------------------------------
// Blog Overlay — list (5/page) + full post reader (same overlay, back button)
// ---------------------------------------------------------------------------

function buildBlogOverlay() {
    return {
        title: '\u{1F5A5}\uFE0F Tech Blog',
        html: '<div class="blog-list"></div>',
        onReady: (bodyEl) => {
            const PER_PAGE = 5;
            let currentPage = 0;

            function renderList(page) {
                currentPage = page;
                const total = posts.length;
                const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
                const slice = posts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

                const entries = slice.map(p => `
                    <div class="blog-entry">
                        <div class="card-title">${esc(p.meta.title || 'Untitled')}</div>
                        <div class="card-meta">${esc(p.meta.date || '')}${p.meta.tags ? ' &middot; ' + esc(p.meta.tags) : ''}</div>
                        <p class="blog-excerpt">${esc(p.meta.excerpt || '')}</p>
                        <button class="blog-link" data-action="read" data-slug="${esc(p.slug)}">Read more &#8594;</button>
                    </div>`).join('');

                const pagination = total > PER_PAGE ? `
                    <div class="pagination">
                        <button class="page-btn" data-action="prev-page" ${page === 0 ? 'disabled' : ''}>&#8592; Prev</button>
                        <span>Page ${page + 1} of ${totalPages}</span>
                        <button class="page-btn" data-action="next-page" ${page >= totalPages - 1 ? 'disabled' : ''}>Next &#8594;</button>
                    </div>` : '';

                bodyEl.innerHTML = `<div class="blog-list">${entries}</div>${pagination}`;
            }

            function renderPost(slug) {
                const post = posts.find(p => p.slug === slug);
                if (!post) { renderList(currentPage); return; }
                bodyEl.innerHTML = `
                    <button class="blog-back" data-action="back">&#8592; Back</button>
                    <div class="blog-post-content">${post.html}</div>`;
            }

            // Single delegated listener — survives innerHTML replacements on bodyEl's children
            bodyEl.addEventListener('click', (e) => {
                const target = e.target.closest('[data-action]');
                if (!target) return;
                const action = target.dataset.action;
                if (action === 'read') { renderPost(target.dataset.slug); return; }
                if (action === 'back') { renderList(currentPage); return; }
                const totalPages = Math.ceil(posts.length / PER_PAGE);
                if (action === 'prev-page' && currentPage > 0) { renderList(currentPage - 1); return; }
                if (action === 'next-page' && currentPage < totalPages - 1) { renderList(currentPage + 1); }
            });

            renderList(0);
        },
    };
}

// ---------------------------------------------------------------------------
// Travel Overlay
// ---------------------------------------------------------------------------

function buildTravelOverlay() {
    const d = travelData;

    function card(item, showBadge = false) {
        return `
            <div class="travel-card">
                <span class="travel-flag">${esc(item.flag || '')}</span>
                <div class="travel-info">
                    <div class="card-title">${esc(item.place)}</div>
                    <div class="card-meta">${esc(item.dates)}</div>
                    ${showBadge && item.status ? `<span class="travel-badge travel-badge-${esc(item.status)}">${esc(item.status)}</span>` : ''}
                    ${item.notes ? `<div class="card-meta" style="margin-top:4px;color:#aaa">${esc(item.notes)}</div>` : ''}
                </div>
            </div>`;
    }

    let html = '';
    if (d.current) html += `<div class="travel-section travel-current"><h3>\u{1F4CD} Now</h3>${card(d.current)}</div>`;
    if (d.upcoming?.length) {
        html += `<div class="travel-section"><h3>\u2708\uFE0F Coming Up</h3>${d.upcoming.map(i => card(i, true)).join('')}</div>`;
    }
    if (d.past?.length) {
        html += `<div class="travel-section"><h3>\u{1F5FA}\uFE0F Been There</h3>${d.past.map(i => card(i)).join('')}</div>`;
    }

    return { title: '\u{1F697} Travel Plans', html };
}

// ---------------------------------------------------------------------------
// Projects Overlay — GitHub API
// ---------------------------------------------------------------------------

const LANG_COLORS = {
    JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5',
    Rust: '#dea584', Go: '#00add8', Dart: '#00b4ab', default: '#888',
};

const FALLBACK_PROJECTS = [
    {
        name: 'joeloffbeat.github.io',
        description: 'Isometric pixel-art portfolio built with Three.js',
        language: 'JavaScript',
        stargazers_count: 0,
        html_url: 'https://github.com/joeloffbeat/joeloffbeat.github.io',
    },
];

// ---------------------------------------------------------------------------
// Repo filter config — edit these two lists to control what appears.
//
// SHOWN_REPOS: if non-empty, ONLY these repos are displayed (allowlist).
//              Set to [] to show all (minus IGNORED_REPOS).
// IGNORED_REPOS: repos always hidden, regardless of SHOWN_REPOS.
// ---------------------------------------------------------------------------
const SHOWN_REPOS = [
    'joeloffbeat.github.io',
];

const IGNORED_REPOS = [
    // e.g. 'my-old-experiment',
];

function filterRepos(repos) {
    return repos.filter(p => {
        if (IGNORED_REPOS.includes(p.name)) return false;
        if (SHOWN_REPOS.length > 0) return SHOWN_REPOS.includes(p.name);
        return true;
    });
}

let _cachedProjects = null;

async function buildProjectsOverlay() {
    let projects = filterRepos(FALLBACK_PROJECTS);
    let errorHtml = '';

    try {
        if (!_cachedProjects) {
            const res = await fetch(
                'https://api.github.com/users/joeloffbeat/repos?sort=updated&per_page=100&type=public'
            );
            if (!res.ok) {
                const rateLimited = res.status === 403 && res.headers.get('X-RateLimit-Remaining') === '0';
                throw new Error(rateLimited ? 'rate-limit' : `HTTP ${res.status}`);
            }
            _cachedProjects = await res.json();
        }
        projects = filterRepos(_cachedProjects);
    } catch (err) {
        const msg = err.message === 'rate-limit'
            ? 'GitHub rate limit reached. Showing cached projects.'
            : 'Could not load live projects. Showing defaults.';
        errorHtml = `<div class="card-meta" style="color:#f88;margin-bottom:12px">${msg}</div>`;
    }

    const cards = projects.map(p => {
        const color = LANG_COLORS[p.language] || LANG_COLORS.default;
        return `
            <a class="overlay-card github-card" href="${safeHref(p.html_url)}" target="_blank" rel="noopener noreferrer">
                <div class="card-info">
                    <div class="card-title">${esc(p.name)}</div>
                    <div class="card-meta">${p.description ? esc(p.description.slice(0, 80)) : ''}</div>
                    ${p.language ? `
                        <div class="project-lang">
                            <span class="lang-dot" style="background:${color}"></span>
                            ${esc(p.language)}
                            <span style="margin-left:auto">\u2B50 ${p.stargazers_count}</span>
                        </div>` : ''}
                </div>
            </a>`;
    }).join('');

    return {
        title: '\u{1F527} Projects',
        html: `
            ${errorHtml}
            <div class="overlay-grid">${cards}</div>
            <div style="text-align:center;margin-top:16px">
                <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="blog-link">
                    View all on GitHub \u2197
                </a>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Music Overlay — Spotify (fetches pre-generated public/spotify-data.json)
// ---------------------------------------------------------------------------

async function buildMusicOverlay() {
    let playlistsHtml = '';

    try {
        const res = await fetch('/spotify-data.json');
        if (res.ok) {
            const data = await res.json();
            playlistsHtml = (data.playlists || []).map(p => `
                <a class="overlay-card spotify-playlist-card" href="${safeHref(p.externalUrl)}" target="_blank" rel="noopener noreferrer">
                    ${p.coverUrl
                        ? `<img class="spotify-cover" src="${safeHref(p.coverUrl)}" alt="${esc(p.name)}" loading="lazy">`
                        : `<div class="spotify-cover" style="background:#282828"></div>`}
                    <div class="card-info">
                        <div class="card-title">${esc(p.name)}</div>
                    </div>
                </a>`).join('');
        }
    } catch (_) { /* fallback below */ }

    return {
        title: '\u{1F3B5} Music & Playlists',
        html: `
            <div class="overlay-section">
                <a href="https://open.spotify.com/user/9v9n3x28qu2liz2rbmpukpqcv" target="_blank" rel="noopener noreferrer" class="blog-link">
                    Open Spotify Profile \u2197
                </a>
            </div>
            ${playlistsHtml
                ? `<div class="overlay-section"><h3>My Playlists</h3><div class="overlay-grid">${playlistsHtml}</div></div>`
                : `<div class="overlay-section"><div class="card-meta">Playlist data unavailable \u2014 view them on Spotify.</div></div>`}`,
    };
}

// ---------------------------------------------------------------------------
// Books & Movies Overlay — two tabs, data from _watched/*.json
// ---------------------------------------------------------------------------

function buildBooksOverlay() {
    function stars(n) {
        const r = Math.floor(n || 0);
        return '\u2605'.repeat(Math.min(5, Math.max(0, r))) +
               '\u2606'.repeat(Math.max(0, 5 - Math.min(5, r)));
    }

    function cover(item, placeholder) {
        const src = safeHref(item.cover || '');
        if (src !== '#') {
            return `<img class="watched-cover" src="${src}" alt="${esc(item.title)}" loading="lazy">`;
        }
        return `<div class="watched-cover-placeholder" style="background:hsl(${Math.abs((item.title || 'x').charCodeAt(0) * 17) % 360},40%,25%)">${placeholder}</div>`;
    }

    function movieCard(m) {
        const meta = [m.year, m.genre].filter(Boolean).map(esc).join(' &middot; ');
        return `
            <div class="watched-card">
                <div class="watched-info">
                    <div class="watched-title">${esc(m.title)}</div>
                    ${meta ? `<div class="watched-meta">${meta}</div>` : ''}
                    <div class="watched-stars">${stars(m.rating)}</div>
                    ${m.notes ? `<div class="watched-notes">${esc(m.notes)}</div>` : ''}
                </div>
            </div>`;
    }

    function bookCard(b) {
        const meta = [b.author, b.year, b.genre].filter(Boolean).map(esc).join(' &middot; ');
        return `
            <div class="watched-card">
                <div class="watched-info">
                    <div class="watched-title">${esc(b.title)}</div>
                    ${meta ? `<div class="watched-meta">${meta}</div>` : ''}
                    <div class="watched-stars">${stars(b.rating)}</div>
                    ${b.notes ? `<div class="watched-notes">${esc(b.notes)}</div>` : ''}
                </div>
            </div>`;
    }

    const booksHtml = booksData.length
        ? `<div class="watched-grid">${booksData.map(bookCard).join('')}</div>`
        : '<div class="overlay-loading">No books yet. Add entries to _watched/books.json.</div>';

    const moviesHtml = moviesData.length
        ? `<div class="watched-grid">${moviesData.map(movieCard).join('')}</div>`
        : '<div class="overlay-loading">No movies yet. Add entries to _watched/movies.json.</div>';

    return {
        title: '\u{1F4DA} Books & Movies',
        html: `
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="books">\u{1F4DA} Books</button>
                <button class="tab-btn" data-tab="movies">\u{1F3AC} Movies</button>
            </div>
            <div class="tab-panel" data-panel="books">${booksHtml}</div>
            <div class="tab-panel tab-panel-hidden" data-panel="movies">${moviesHtml}</div>`,
        onReady: (bodyEl) => {
            bodyEl.addEventListener('click', (e) => {
                const btn = e.target.closest('.tab-btn');
                if (!btn) return;
                const tab = btn.dataset.tab;
                bodyEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                bodyEl.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel-hidden'));
                bodyEl.querySelector(`.tab-panel[data-panel="${CSS.escape(tab)}"]`).classList.remove('tab-panel-hidden');
            });
        },
    };
}

// ---------------------------------------------------------------------------
// Contact Overlay — tabs: contact info + guestbook (Giscus)
// ---------------------------------------------------------------------------

function buildContactOverlay() {
    const REPO_ID     = 'R_kgDOQxPGlQ';
    const CATEGORY_ID = 'DIC_kwDOQxPGlc4C5eoV';

    return {
        title: '🐦 Contact Info',
        html: `
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="contact">📬 Contact</button>
                <button class="tab-btn" data-tab="guestbook">📖 Guestbook</button>
            </div>
            <div class="tab-panel" data-panel="contact">
                <div class="contact-card">
                    <div class="contact-name">Joel</div>
                    <div class="contact-links">
                        <a href="mailto:joeloffbeat@gmail.com" class="contact-link">📧 joeloffbeat@gmail.com</a>
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">🐙 GitHub</a>
                        <a href="https://www.linkedin.com/in/joel-antony-xaviour-97394a140/" target="_blank" rel="noopener noreferrer" class="contact-link">💼 LinkedIn</a>
                        <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">📷 Instagram</a>
                        <a href="https://x.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">𝕏 X</a>
                    </div>
                </div>
            </div>
            <div class="tab-panel tab-panel-hidden" data-panel="guestbook">
                <div class="giscus-container" style="padding:8px 0;min-height:200px"></div>
            </div>`,
        onReady: (bodyEl) => {
            let giscusLoaded = false;

            bodyEl.addEventListener('click', (e) => {
                const btn = e.target.closest('.tab-btn');
                if (!btn) return;
                const tab = btn.dataset.tab;
                bodyEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                bodyEl.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel-hidden'));
                const panel = bodyEl.querySelector(`.tab-panel[data-panel="${CSS.escape(tab)}"]`);
                panel.classList.remove('tab-panel-hidden');

                if (tab === 'guestbook' && !giscusLoaded) {
                    giscusLoaded = true;
                    const s = document.createElement('script');
                    s.src = 'https://giscus.app/client.js';
                    s.setAttribute('data-repo',             'joeloffbeat/joeloffbeat.github.io');
                    s.setAttribute('data-repo-id',          REPO_ID);
                    s.setAttribute('data-category',         'Guestbook');
                    s.setAttribute('data-category-id',      CATEGORY_ID);
                    s.setAttribute('data-mapping',          'specific');
                    s.setAttribute('data-term',             'guestbook');
                    s.setAttribute('data-reactions-enabled','1');
                    s.setAttribute('data-emit-metadata',    '0');
                    s.setAttribute('data-input-position',   'top');
                    s.setAttribute('data-theme',            'dark');
                    s.setAttribute('data-lang',             'en');
                    s.setAttribute('crossorigin',           'anonymous');
                    s.async = true;
                    bodyEl.querySelector('.giscus-container').appendChild(s);
                }
            });
        },
    };
}

// ---------------------------------------------------------------------------
// Secret NPC Overlay
// ---------------------------------------------------------------------------

function buildSecretNpcOverlay() {
    return {
        title: '❓ ???',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">Hey.</div>
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc">
                        You found me.<br><br>
                        Most people never explore this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every system, every sprite.<br><br>
                        <span style="color:#ffd700">The real secret?</span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                </div>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Home Overlay — About Joel + explore links
// ---------------------------------------------------------------------------

function buildHomeOverlay() {
    return {
        title: '🏠 Joel\'s Mindscape',
        html: `
            <div class="contact-card">
                <div class="contact-name">JOEL</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#4a9eff;font-size:clamp(7px,1.1vw,10px)">
                    Creator &middot; Data Nerd
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc;text-align:center">
                        Building things at the intersection of data, code, and art.<br><br>
                        coding &middot; data science &middot; illustrations<br>
                        caricatures &middot; video editing &middot; making stuff.
                    </p>
                </div>
                <div class="overlay-section">
                    <h3 style="text-align:center;margin-bottom:14px">EXPLORE THE MINDSCAPE</h3>
                    <div class="contact-links">
                        <a href="#" class="contact-link home-nav-link" data-overlay="blog-overlay">🖥️ Tech Blog</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="projects-overlay">🔧 Projects</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="art-overlay">🎨 Art Gallery</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="music-overlay">🎵 Music &amp; Playlists</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="books-overlay">📚 Books &amp; Movies</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="travel-overlay">🚗 Travel Plans</a>
                    </div>
                </div>
            </div>`,
        onReady: (bodyEl) => {
            bodyEl.addEventListener('click', (e) => {
                const link = e.target.closest('.home-nav-link');
                if (!link) return;
                e.preventDefault();
                // Lazy import avoids circular dep with overlay.js
                import('./overlay.js').then(({ open }) => {
                    open(link.dataset.overlay).catch(console.error);
                });
            });
        },
    };
}

// ---------------------------------------------------------------------------
// Now Overlay — bulletin board with what Joel is up to
// ---------------------------------------------------------------------------

async function buildNowOverlay() {
    let data = null;
    try {
        const res = await fetch('/now.json');
        if (res.ok) data = await res.json();
    } catch (_) {}

    if (!data) {
        return {
            title: '📌 Now',
            html: '<div class="overlay-loading">Board is empty. Update public/now.json.</div>',
        };
    }

    const items = [
        { label: 'Building',       value: data.building,       icon: '🔨' },
        { label: 'Reading',        value: data.reading,        icon: '📖' },
        { label: 'Watching',       value: data.watching,       icon: '📺' },
        { label: 'Listening to',   value: data.listening,      icon: '🎧' },
        { label: 'Thinking about', value: data.thinking_about, icon: '💭' },
    ].filter(i => i.value);

    const rows = items.map(i => `
        <div class="now-item">
            <div class="now-icon">${esc(i.icon)}</div>
            <div class="now-body">
                <div class="now-label">${esc(i.label)}</div>
                <div class="now-value">${esc(i.value)}</div>
            </div>
        </div>`).join('');

    return {
        title: "📌 What Joel's Up To Now",
        html: `<div class="now-list">${rows}</div>`,
    };
}

// ---------------------------------------------------------------------------
// Start Something Overlay — rotating motivational signpost
// ---------------------------------------------------------------------------

function buildStartOverlay() {
    const PROMPTS = [
        "You've been thinking about that project for months. Start today. Seriously.",
        "Draw something. It doesn't have to be good. Just draw it.",
        "The gap between your taste and your output closes only by making more things.",
        "What would you build if you knew it would fail? Build that.",
        "Joel started this website to inspire himself as much as anyone else. What's yours?",
    ];
    const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];

    return {
        title: '🔥 Start Something',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(9px,1.6vw,14px);line-height:2.2;color:#ffd700;text-align:center">
                    ${esc(prompt)}
                </div>
                <div class="contact-links" style="margin-top:28px">
                    <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → Checkout my GitHub
                    </a>
                    <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → Follow the creative journey
                    </a>
                </div>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Secret Portal Overlay — triggered by stepping on hidden tile (27, 27)
// ---------------------------------------------------------------------------

function buildSecretPortalOverlay() {
    return {
        title: '✨ You Found It',
        html: `
            <div class="contact-card">
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.5;color:#ccc">
                        Most people never walk this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every sprite, every system.<br><br>
                        <span style="color:#ffd700;font-size:clamp(8px,1.3vw,12px)">
                            The real secret?
                        </span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                    <div class="contact-links" style="margin-top:24px">
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                            → Start on GitHub
                        </a>
                    </div>
                </div>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Peter Parker Overlay — "just a photographer" (secretly Spider-Man)
// ---------------------------------------------------------------------------

function buildPeterParkerOverlay() {
    return {
        title: '📸 Peter Parker',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">Hey! I'm Peter.</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#e0342a;font-size:clamp(7px,1.1vw,10px)">
                    Photographer &middot; Daily Bugle &middot; Totally Normal Guy
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc;text-align:center">
                        Just a freelance photographer passing through.<br>
                        I shoot photos of, uh... mostly Spider-Man, actually.<br><br>
                        <span style="color:#e0342a;font-size:clamp(8px,1.3vw,11px)">
                            Wait — you didn't hear that from me.
                        </span><br><br>
                        Anyway. Cool world you've got here. Very... web-like. Architecturally.<br>
                        I mean — structurally. I don't know anything about webs.
                    </p>
                    <p style="font-size:clamp(8px,1.3vw,11px);line-height:2;color:#ffd700;text-align:center;margin-top:20px">
                        "With great power comes great responsibility."
                    </p>
                    <p style="font-size:clamp(6px,0.95vw,9px);line-height:2;color:#666;text-align:center;margin-top:8px">
                        — My uncle said that. Great guy. Miss him.
                    </p>
                </div>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Luke Skywalker Overlay — Jedi wisdom
// ---------------------------------------------------------------------------

function buildLukeSkywalkerOverlay() {
    return {
        title: '⚔️ Luke Skywalker',
        html: `
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">I am a Jedi.</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#4a9eff;font-size:clamp(7px,1.1vw,10px)">
                    Jedi Knight &middot; Son of Skywalker &middot; Last Hope of the Galaxy
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.4;color:#ccc;text-align:center">
                        I once thought I had to face everything alone.<br>
                        I was wrong.<br><br>
                        <span style="color:#4a9eff;font-size:clamp(8px,1.3vw,11px)">
                            You built this world yourself.
                        </span><br><br>
                        I sense a strong will in you — the will to create,<br>
                        to connect, to leave something behind.<br><br>
                        That is the Force working through you.
                    </p>
                    <p style="font-size:clamp(8px,1.3vw,11px);line-height:2;color:#ffd700;text-align:center;margin-top:20px">
                        "The Force will be with you. Always."
                    </p>
                    <p style="font-size:clamp(6px,0.95vw,9px);line-height:2;color:#666;text-align:center;margin-top:8px">
                        — Now go. There is much to build.
                    </p>
                </div>
            </div>`,
    };
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const BUILDERS = {
    'art-overlay':        buildArtOverlay,
    'blog-overlay':       buildBlogOverlay,
    'travel-overlay':     buildTravelOverlay,
    'projects-overlay':   buildProjectsOverlay,
    'music-overlay':      buildMusicOverlay,
    'books-overlay':      buildBooksOverlay,
    'contact-overlay':    buildContactOverlay,
    'secret-npc-overlay':    buildSecretNpcOverlay,
    'secret-portal-overlay': buildSecretPortalOverlay,
    'home-overlay':          buildHomeOverlay,
    'now-overlay':           buildNowOverlay,
    'start-overlay':         buildStartOverlay,
    'peter-parker-overlay':  buildPeterParkerOverlay,
    'luke-skywalker-overlay': buildLukeSkywalkerOverlay,
};

export async function resolveOverlayContent(id) {
    const builder = BUILDERS[id];
    if (!builder) return null;
    return builder();
}
