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

```bash
npm run deploy:gh-pages
```

Set `base` in `vite.config.ts` if deploying to a repository subpath, for example `/repository-name/`.

## Content

Editable data lives in `src/data`. Records that require verified SCAAA information are marked with `isPlaceholder: true`.

The app is multilingual-ready through `src/lib/i18n.ts`, currently prepared for English, Odia, and Hindi.
