# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

This is a React 19 + Vite portfolio SPA for an animator/artist, deployed to GitHub Pages.

**Routing**: Uses `HashRouter` (not `BrowserRouter`) intentionally — GitHub Pages can't handle server-side path resolution, so all routing must be client-side via URL hash.

**Theme system**: `App.jsx` holds the `isDark` boolean state and selects between the `L` (light) and `D` (dark) theme objects exported from `src/data/content.js`. The active theme object `t` is passed as a prop to every page and component — there is no CSS variables or context for theming, just inline styles driven by `t`.

**All content lives in one file**: `src/data/content.js` exports everything — theme tokens (`L`, `D`), personal info (`yourName`, `yourCity`), and all data arrays (`ANIMS`, `PHOTOS`, `WORK`, `VOLUNTEER`, `EDU`, `SKILLS_CATEGORIES`). To update portfolio content, edit only this file.

**Shared components** (`src/components/`):
- `Layout.jsx` — sticky nav, footer, responsive mobile menu, wraps every page
- `UI.jsx` — reusable primitives: `Btn`, `Tag`, `SecHead`, `ThemeToggle`, `ExpItem`, `ExpSection`
- `Icons.jsx` — inline SVG icons as React components

**Pages** (`src/pages/`) receive `t` (theme) as a prop. Animations and Photography pages also receive `cols` (masonry column count, computed responsively in `App.jsx`).

**Static assets** live in `/public/`: `/public/animations/` (`.mp4` files), `/public/photos/` (`.jpg` files), `/public/projects/` (`.aep` project files for download). Asset paths in `content.js` are relative to `public/` root.

**Styling**: All styles are inline JS objects. No CSS modules, no Tailwind, no styled-components. Global resets and font imports are injected via a `<style>` tag inside `Layout.jsx`. Responsive breakpoints are handled with `@media` in that same style tag (`.desk`/`.mob` utility classes) and via JS for masonry columns.
