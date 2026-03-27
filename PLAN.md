# Rebrand Static Site Into A Video Game Portal

## Summary
- Convert the entire project from sports to video games, keeping it as a static site built only with HTML, CSS, and vanilla JS.
- Replace the current navigation with `Jocuri Video`, `Event`, `Ghid`, `Platforme Jocuri`, `Jocuri`, `Comunitate`.
- Remove all sports-related text, labels, imagery usage, and interactions so the site becomes fully game-focused.

## Key Changes
- `index.html` becomes the main gaming homepage.
  - Hero/banner highlights recent game releases with a strong CSS-driven gaming visual and descriptive text on the right.
  - Add homepage preview sections for featured games, upcoming events, and community activity so the page works as the site hub.
  - Treat `Jocuri Video` as the homepage + brand link, not as a separate content page.
- Add dedicated pages for the new tab structure.
  - `Event`: listing page with 3 upcoming event cards; each card shows title, short description, date, and links to its own detail page.
  - 3 separate event detail pages: fuller description, date, location/platform, what attendees can expect, and back link to the event list.
  - `Ghid`: separate page with the 3 required headings exactly as requested: `TUTORIALE INCEPUT`, `STRATEGII`, `GAMEPLAY`; each heading gets example cards/blocks.
  - `Platforme Jocuri`: separate page for `Steam` and `Epic Games`; each section includes short platform description plus at least 2 popular games and approximate display prices.
  - `Jocuri`: separate page with 4 to 6 featured games, each with short description, genre/platform info, and a CTA-style card layout.
  - `Comunitate`: separate page with a vanilla JS review slider containing multiple community reviews.
- Refactor the frontend structure.
  - Consolidate repeated inline CSS into `style.css` and repeated behavior into `script.js`.
  - Remove the jQuery dependency and rewrite all interactions in vanilla JS.
  - Normalize visible Romanian text/diacritics and make the layout responsive for desktop and mobile.
- Recommended quality improvements.
  - Add active nav state, consistent footer, and reusable card/panel components.
  - Build the visual identity with gradients, glow, layered panels, and typography instead of depending on new local image assets.

## Public Interfaces
- Main navigation labels become: `Jocuri Video`, `Event`, `Ghid`, `Platforme Jocuri`, `Jocuri`, `Comunitate`.
- `script.js` should own shared interactions only: slider behavior, optional smooth scrolling for homepage anchors, and small UI helpers.
- All content stays static and curated in HTML; no backend, API, or live data feed is introduced.

## Test Plan
- Verify every main tab opens the correct destination and no old sport/jucător links remain.
- Verify the homepage banner shows latest-release content with text on the right on desktop and stacks cleanly on mobile.
- Verify `Ghid` contains all 3 required headings and example content under each.
- Verify `Platforme Jocuri` contains both `Steam` and `Epic Games`, each with at least 2 games and approximate prices.
- Verify `Comunitate` slider supports next/prev navigation, active indicators, and auto-advance; if JS is unavailable, reviews should still remain readable in a stacked layout.
- Verify `Event` contains 3 upcoming event posts and each opens the correct dedicated event detail page.
- Verify the project no longer loads jQuery and all interactions still work with vanilla JS only.

## Assumptions
- Site language remains Romanian.
- `Jocuri Video` is the homepage/brand entry.
- `Jocuri` is a separate page, not a homepage section.
- Visual direction uses CSS effects and layout polish, without adding new local image assets.
- Event data, game lists, and platform prices are static curated content, not live-fetched values.
