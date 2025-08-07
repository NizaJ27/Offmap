# Offmap

A travel-vlogger-built hub offering free insider tips and premium deep-dive city guides.

## Live Snapshot
- **URL**: <https://NizaJ27.github.io/offmap/>

## Phase Checklist
- [x] Phase 0 – Repo Init
- [x] Phase 1 – Business Analysis
- [x] Phase 2 – Brand & Style Guides
- [x] Phase 3 – Design Spec & Wireframes
- [x] Phase 4 – Tech Architecture
- [x] Phase 5 – Build Sprint 1
- [x] Phase 6 – Content + SEO/AIO
- [ ] Phase 7 – Compliance QA
- [ ] Phase 8 – Staging Review
- [ ] Phase 9 – Production Launch
- [ ] Phase 10 – Post-Launch

## Directory Map
```
/ (root)
  README.md
  LICENSE
  package.json
  vite.config.js
  docs/
    business-analysis.md
    audience-personas.md
    development_plan.md
    content-assets.md
    brand-style-guides.md
    design-spec-wireframes.md
    tech-architecture.md
    image-assets.md
  src/
    index.html
    404.html
    destinations.html
    contact.html
    lisbon.html
    rome.html
    chiangmai.html
    tokyo.html
    newyork.html
    lebanon.html
    images/
    legal/
      privacy-policy.md
      terms-of-service.md
      accessibility-statement.md
      cookie-policy.md
    scripts/
      main.js
    styles/
      base.css
      tokens.css
```

## Quick Start
```bash
git clone https://github.com/NizaJ27/offmap.git
cd offmap
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Commit Conventions
GitHub flow + Conventional Commits

## Accessibility Testing Notes

- All pages have been manually checked in browser preview (macOS, Chrome) and verified to have:
  - `<html lang="en">` present
  - All main content wrapped in a `<main>` element
  - Proper use of landmarks and semantic HTML
- Automated CLI tools (Axe CLI) may report false positives due to headless/static environment limitations.
- Browser-based tools (Axe DevTools, Lighthouse, WAVE) show no critical accessibility issues.
- Manual keyboard navigation and color contrast checks pass per WCAG 2.1 AA.

If you encounter accessibility warnings in CI, please verify in a browser before taking action.
