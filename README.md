# Research Exchange (ReX) on MUI

**Purpose:** Frontend-only prototype of the ReX submission workflow for scholarly articles, using Material-UI components.

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

### Initial Setup

1. **Create GitHub repository:**
   ```bash
   # Create repo: research-exchange (on GitHub)
   git remote add origin https://github.com/nonlinear/research-exchange.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / root
   - Save

### Deploy Process

```bash
# Build static export
npm run build
# Output: /out folder

# Deploy to gh-pages branch
npm install -g gh-pages  # One-time install
npx gh-pages -d out
```

**Live URL:** https://nonlinear.github.io/research-exchange

### GitHub Actions (Auto-Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Result:** Every push to `main` auto-deploys to GitHub Pages.

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

## Deployment Notes

### basePath Configuration

- **Development:** No basePath (`http://localhost:3000`)
- **Production:** `/research-exchange` (`https://nonlinear.github.io/research-exchange`)

**Handled automatically in `next.config.ts`:**
```ts
basePath: process.env.NODE_ENV === 'production' ? '/research-exchange' : ''
```

### Static Export Limitations

- **No API routes** (GitHub Pages = static files only)
- **No server-side rendering** (all client-side)
- **No Image Optimization** (`unoptimized: true`)

**Workarounds:**
- Use external APIs (client-side fetch)
- Mock data in JSON files
- localStorage for form state

---

## TODO

- [ ] Implement Steps 2-5
- [ ] Add form validation (Formik or react-hook-form)
- [ ] Mock data for testing
- [ ] Customize theme to match ReX Figma design
- [ ] GitHub Actions for auto-deploy
- [ ] Add gh-pages script: `"deploy": "gh-pages -d out"`

---

## References

- **Figma Design:** [ReX Components](https://www.figma.com/design/CmAtBaedooTgME20c0pE7s/ReX-Components?node-id=947-47690)
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

**Created:** 2026-03-12  
**Author:** Nicholas Frota  
**License:** MIT
