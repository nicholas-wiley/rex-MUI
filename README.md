# ReX Prototype

Hugo + Material Web (MD3) prototype for the Research Exchange submission flow.

- **Repo:** https://github.com/nicholas-wiley/rex-MUI
- **Live:** https://nicholas-wiley.github.io/rex-MUI/

## Stack

- **[Hugo](https://gohugo.io/)** — static site generator
- **[@material/web](https://github.com/material-components/material-web)** — Material Design 3 web components (no React)
- **GitHub Pages** — static hosting via `docs/`

## Structure

```
content/steps/      ← one .md file per step (15 total)
layouts/steps/      ← list.html + single.html
layouts/partials/   ← reusable MD3 components (text-field, button, etc.)
data/               ← JSON data consumed by layouts via frontmatter
static/             ← reference assets (Figma exports, field SVGs)
docs/               ← Hugo build output → served by GitHub Pages
```

## Frontmatter conventions

```yaml
---
title: "Article Type"
step: 3
state: "default"   # default | error | empty
data: "article-types"  # points to /data/<value>.json
---
```

## Local development

```bash
hugo serve -D
```

## Build

```bash
hugo
```

Output goes to `docs/`. Commit and push — GitHub Pages serves it automatically.
