# Offmap Brand & Style Guide

## Brand Voice & Messaging
- Friendly, knowledgeable, and trustworthy
- Emphasizes discovery, local expertise, and practical value
- Tagline: “Discover and Explore the World’s Hidden Corners”
- Value: “Skip the tourist traps; explore like a friend.”

## Visual Identity
- **Primary Colors:**
  - Deep Green: #233c2c (used for headlines, buttons)
  - Sage Green: #dbe7d0 (backgrounds, callouts)
  - Warm Sand: #f9f7f2 (main background)
  - Accent Yellow: #f6c96b (icons, highlights)
  - **Sandy Cream:** #f6f3e8 (main page background, matches homepage visual)
- **Typography:**
  - Headings: Bold, geometric sans-serif (e.g., Inter, Montserrat, or similar)
  - Body: Clean sans-serif (e.g., Inter, system-ui)
- **Imagery:**
  - Illustrated icons for destinations and features
  - Soft, rounded shapes and map motifs
  - Friendly, approachable testimonial avatars

## UI Elements
- **Buttons:**
  - Primary: Deep green background, white text, rounded corners
  - Secondary: Sage green background, deep green text
  - All buttons: Large, clear, accessible contrast
- **Cards & Callouts:**
  - Soft backgrounds, subtle drop shadows, rounded corners
- **Logos/Badges:**
  - Community logos in monochrome for trust

## Accessibility
- Sufficient color contrast for all text/buttons
- Large, legible type and generous spacing
- Clear focus states for interactive elements
- Alt text for all icons and images

## Example Usage (from homepage):
- Headline: Large, bold, deep green
- Buttons: “Get Free Guide” (sage green), “Explore Paid Tips” (deep green)
- Testimonial cards: Soft backgrounds, rounded avatars, clear text
- Call-to-action: Highlighted in sage green box with bold button

## Design Tokens (see /src/styles/tokens.css)
- --brand-900: #002a38
- --brand-700: #00546e
- --brand-400: #00a1c6
- --sand-50: #f9f9f7
- --text-primary: #1a1a1a
- --space-s: 8px; --space-m: 16px; --space-l: 24px
- --radius: 16px
- --shadow-card: 0 3px 10px rgb(0 0 0 / .07)

## Sample Component Markup
```html
<button class="btn btn-primary">Get Free Guide</button>
<button class="btn btn-secondary">Explore Paid Tips</button>
```