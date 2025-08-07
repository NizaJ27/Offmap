# Offmap Tech Architecture

## 1. Static Site Structure
- **Framework:** Plain HTML, CSS, JS (no build step, no frameworks)
- **Directory Layout:**
  - `/src/` for all public-facing site assets
  - `/docs/` for project documentation
  - `/src/legal/` for compliance docs
  - `/src/images/` for all media assets
  - `/src/styles/` for CSS (tokens, base)
  - `/src/scripts/` for JS

## 2. Deployment
- **Platform:** GitHub Pages (served from `/src/` via GitHub Actions)
- **CI/CD:**
  - Linting: Stylelint for CSS, HTMLHint for HTML
  - Accessibility: Axe a11y smoke test
  - Link checking: Linkinator
  - Auto-deploy on merge to `main`
  - `.nojekyll` disables Jekyll processing for full static asset support

## 3. Accessibility & Compliance
- All UI components must meet WCAG 2.1 AA contrast and keyboard navigation
- Alt text required for all images and icons
- Legal docs: GDPR, ADA, FTC influencer disclosures
- Cookie policy and privacy policy linked in footer

## 4. Security
- No user data stored on server (static only)
- Downloadable guides delivered as static PDFs
- All third-party scripts (if any) must be privacy reviewed

## 5. Performance & SEO
- All images optimized (SVG/WEBP preferred)
- CSS and JS minified (manual, as needed)
- Semantic HTML5 markup for all pages
- Meta tags for social sharing (Open Graph, Twitter)
- Sitemap.xml and robots.txt (add in later phase)

## 6. Documentation & Onboarding
- All contributors follow Conventional Commits
- Docs for setup, contribution, and deployment in `/docs/`
- CODEOWNERS for PR review

## 7. Extensibility
- New city guides added as new HTML pages and PDF assets
- All content and assets referenced with relative paths

---

**Reviewed by:**
- Technical Lead
- DevOps Engineer
- Accessibility Specialist
- Security Specialist
- Performance/SEO Expert
- Documentation Lead
