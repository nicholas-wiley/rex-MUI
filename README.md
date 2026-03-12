# ReX on MUI

**Purpose:** Frontend-only prototype of ReX submission workflow using Material-UI components.

**Tech stack:**
- Next.js 15 (App Router)
- TypeScript
- Material-UI (MUI) v6
- Static export (GitHub Pages compatible)

---

## Development

```bash
npm run dev
# Open http://localhost:3000
```

---

## Build & Deploy (GitHub Pages)

```bash
npm run build
# Generates /out folder with static HTML

# Deploy to GitHub Pages:
# 1. Create repo: rex-on-mui
# 2. Enable GitHub Pages (Settings → Pages → Deploy from branch: gh-pages)
# 3. Push /out to gh-pages branch
```

---

## Structure

```
app/
├── layout.tsx          # MUI ThemeProvider
├── page.tsx            # Landing / Stepper overview
├── step-1/page.tsx     # Article Metadata
├── step-2/page.tsx     # Authors & Affiliations
├── step-3/page.tsx     # Funders
├── step-4/page.tsx     # Review
└── step-5/page.tsx     # Submit

theme/
└── rex-theme.ts        # MUI theme config (customize later)

components/
└── (reusable components)

data/
└── mock-data.json      # Fake data for testing
```

---

## MUI Components Used

- `Stepper` - Progress indicator
- `TextField`, `Autocomplete` - Form inputs
- `Button`, `Paper`, `Container` - Layout
- `Table`, `Chip` - Data display

---

## TODO

- [ ] Implement Steps 2-5
- [ ] Add form validation
- [ ] Mock data for testing
- [ ] Customize theme to match ReX Figma design
- [ ] GitHub Actions for auto-deploy

---

**Based on:** [ReX Components Figma](https://www.figma.com/design/CmAtBaedooTgME20c0pE7s/ReX-Components?node-id=947-47690)
