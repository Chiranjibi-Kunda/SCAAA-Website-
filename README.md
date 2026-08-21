# SCAAA Website

A polished static React + TypeScript + Vite website for Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA), structured so real verified content can replace placeholders later.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Open the development site at the URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

Do not open the root `index.html` file directly. It is a Vite source entry and needs the dev server or a production build.

To preview the production build locally:

```bash
npm run build
npm run preview
```

## Deployment

Firebase Hosting:

```bash
npm run build
firebase init hosting
firebase deploy
```

GitHub Pages:

This repository includes a GitHub Actions workflow that deploys automatically whenever changes are pushed to `master`.

1. In the GitHub repository, open **Settings** > **Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Commit and push the `.github/workflows/deploy-pages.yml` and `vite.config.ts` changes.
4. Open the **Actions** tab and wait for **Deploy GitHub Pages** to succeed.
5. Your site will be available at `https://chiranjibi-kunda.github.io/SCAAA-Website-/`.

The Vite base path is already configured for this repository. The `deploy:gh-pages` script remains available as a manual alternative, but should not be used together with the GitHub Actions deployment.

## Content

Editable data lives in `src/data`. Records that require verified SCAAA information are marked with `isPlaceholder: true`.

The app is multilingual-ready through `src/lib/i18n.ts`, currently prepared for English, Odia, and Hindi.
