/**
 * Spotify playlist prefetch script.
 * Run: node scripts/prefetch-spotify.js
 * Reads SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET from .env.local
 * Writes public/spotify-data.json — fetched in the browser as a same-origin JSON file.
 *
 * Called automatically by npm's prebuild lifecycle before 'vite build'.
 * Exits 0 on failure so the build is never blocked.
 */

import dotenv from 'dotenv';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// Load .env.local (dotenv default reads .env — must specify path explicitly)
dotenv.config({ path: '.env.local' });

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const OUTPUT_PATH = resolve('public/spotify-data.json');

async function main() {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        console.warn('[prefetch-spotify] No credentials in .env.local — skipping. Music overlay will use fallback.');
        return;
    }

    try {
        // Step 1: Get access token via Client Credentials
        const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
            },
            body: 'grant_type=client_credentials',
        });

        if (!tokenRes.ok) {
            throw new Error(`Token endpoint returned ${tokenRes.status}: ${await tokenRes.text()}`);
        }

        const { access_token } = await tokenRes.json();

        // Step 2: Fetch user's public playlists
        const playlistsRes = await fetch(
            'https://api.spotify.com/v1/users/joeloffbeat/playlists?limit=6',
            { headers: { 'Authorization': `Bearer ${access_token}` } }
        );

        if (!playlistsRes.ok) {
            throw new Error(`Playlists endpoint returned ${playlistsRes.status}: ${await playlistsRes.text()}`);
        }

        const { items } = await playlistsRes.json();

        const playlists = (items || []).map(p => ({
            id: p.id,
            name: p.name,
            trackCount: p.tracks?.total ?? 0,
            coverUrl: p.images?.[0]?.url ?? null,
            externalUrl: p.external_urls?.spotify ?? `https://open.spotify.com/playlist/${p.id}`,
        }));

        // Step 3: Write output
        mkdirSync(resolve('public'), { recursive: true });
        writeFileSync(OUTPUT_PATH, JSON.stringify({ fetchedAt: new Date().toISOString(), playlists }, null, 2));
        console.log(`[prefetch-spotify] \u2713 Wrote ${playlists.length} playlists to public/spotify-data.json`);

    } catch (err) {
        console.warn(`[prefetch-spotify] Failed: ${err.message}`);
        console.warn('[prefetch-spotify] Music overlay will use the profile link fallback.');
    }
}

main();
