---
title: How to Create Your Own GitHub.io Site
date: 2026-03-14
tags: github, tutorial, web
excerpt: A step-by-step beginner's guide to launching your first GitHub Pages site from scratch.
cover: cover.png
---

# How to Create Your Own GitHub.io Site

GitHub Pages lets you host a website directly from a GitHub repository — for free. In this guide we'll go from zero to a live site at `https://yourusername.github.io`.

## What is GitHub Pages?

GitHub Pages is a static site hosting service built into GitHub. Push HTML, CSS, and JavaScript files to a repository, and GitHub publishes them as a live website. No servers, no hosting bills, free HTTPS.

## Step 1: Create a GitHub Account

If you don't have one yet, sign up at [github.com](https://github.com). Choose your username carefully — it becomes part of your site's permanent URL.

## Step 2: Create the Repository

Create a new public repository named **exactly** `{yourusername}.github.io`. This naming convention is required by GitHub Pages. Initialise it with a README.

## Step 3: Add Your First Page

Clone the repository locally and create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
</head>
<body>
  <h1>Hello from GitHub Pages!</h1>
</body>
</html>
```

## Step 4: Enable GitHub Pages

In your repository **Settings → Pages**, set Source to **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Step 5: Push and Wait

```bash
git add index.html
git commit -m "feat: add index.html"
git push
```

Wait about 1 minute, then visit `https://{yourusername}.github.io`. Done!

## Step 6: Level Up with Vite

For a modern development experience with hot reload and bundling:

```bash
npm create vite@latest my-site -- --template vanilla
cd my-site
npm install
npm run dev
```

Add `gh-pages` for deployment:

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then `npm run deploy` — Vite builds to `dist/` and `gh-pages` pushes it to a `gh-pages` branch that GitHub Pages serves.

## Custom Domain (Optional)

1. Buy a domain from any registrar
2. Add a `CNAME` file to your repo root containing your domain (e.g. `joel.dev`)
3. In your domain registrar's DNS settings, add `A` records pointing to GitHub's Pages IPs (listed in their docs)
4. Enable "Enforce HTTPS" in repo Settings → Pages

Free HTTPS is included — GitHub handles the SSL certificate automatically.

![There is your rock](./baba.jpg)
---

That's it. Your portfolio is live. Start adding your work!
