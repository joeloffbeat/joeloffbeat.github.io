/**
 * Spotify playlist prefetch script.
 * Run: node scripts/prefetch-spotify.js
 * Uses Spotify's public OEmbed API — no credentials required.
 * Writes public/spotify-data.json — fetched in the browser as a same-origin JSON file.
 *
 * Called automatically by npm's prebuild lifecycle before 'vite build'.
 * Exits 0 on failure so the build is never blocked.
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const OUTPUT_PATH = resolve('public/spotify-data.json');

const PLAYLIST_IDS = [
    '1Cg9uI5aG5AyV8XucYeRVo',
    '0ZXXm4OFRZbVesTTQNJF94',
    '4oMf1ISgUpNurkbtg4sgLa',
    '6rFuvz5YJ1ya4gTTu2l2jL',
    '1yLgaMBPN5jlIGHWSZs5I9',
    '70qw5Aq4QYMov18y50mt12',
    '1m9WACns4DKBpl4Ys73fT1',
    '3qywj0squFlv6OwuICVCZ1',
    '1RVhnHGLjhM8VAj2ePeBKA',
];

async function fetchOEmbed(id) {
    const url = `https://open.spotify.com/oembed?url=https://open.spotify.com/playlist/${id}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`OEmbed ${id} returned ${res.status}`);
    return res.json();
}

async function main() {
    try {
        const results = await Promise.all(PLAYLIST_IDS.map(id =>
            fetchOEmbed(id).catch(err => {
                console.warn(`[prefetch-spotify] Skipping ${id}: ${err.message}`);
                return null;
            })
        ));

        const playlists = results
            .map((data, i) => {
                if (!data) return null;
                return {
                    id: PLAYLIST_IDS[i],
                    name: data.title ?? '',
                    coverUrl: data.thumbnail_url ?? null,
                    externalUrl: `https://open.spotify.com/playlist/${PLAYLIST_IDS[i]}`,
                };
            })
            .filter(Boolean);

        mkdirSync(resolve('public'), { recursive: true });
        writeFileSync(OUTPUT_PATH, JSON.stringify({ fetchedAt: new Date().toISOString(), playlists }, null, 2));
        console.log(`[prefetch-spotify] ✓ Wrote ${playlists.length} playlists to public/spotify-data.json`);

    } catch (err) {
        console.warn(`[prefetch-spotify] Failed: ${err.message}`);
        console.warn('[prefetch-spotify] Music overlay will use the profile link fallback.');
    }
}

main();
