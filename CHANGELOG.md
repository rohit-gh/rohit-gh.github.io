# Changelog

All notable changes to this project are documented here.

## [Unreleased] — 2026-07-21

### Added

- Shared design system in `custom.css` — CSS custom properties for typography, spacing, shadows, and layout
- Homepage hero section (`.site-hero`) with title and tagline
- Skip-to-content link for keyboard accessibility
- Semantic HTML structure (`<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- WebP persona images (`rohit-developer.webp`, `rohit-traveller.webp`, `rohit-blogger.webp`) with `<picture>` elements
- LCP preload for developer card image
- Legal page Disclaimer section (`#disclaimer`)
- Expanded Terms of Use and Privacy Policy content
- `meta description` and `theme-color` on all active pages
- Cursor rules (`.cursor/rules/`) documenting architecture, styling, components, and CDN usage

### Changed

- Migrated `index.html` from UIkit 3.0.0-beta.40 (cdnjs) to UIkit 3.25.16 (jsDelivr)
- Migrated `legal.html` from Bootstrap 4 beta to UIkit 3.25.16 — unified stack across all active pages
- Replaced inline styles and jQuery welcome notification with external `custom.css` and deferred scripts
- Updated persona card copy — developer skills, traveller/blogger descriptions, and link labels
- Developer card image links to base-station.io
- Footer uses flex layout (`site-shell`) instead of absolute positioning
- Favicon switched from Cloudinary CDN to local `favicon.ico`
- Legal page navigation uses shared offcanvas shell matching the homepage
- Legal footer includes Back to Home, Terms, and Privacy links
- Card titles upgraded from `h3` to `h2` for correct heading hierarchy

### Removed

- jQuery dependency
- Bootstrap dependency from `legal.html`
- UIkit welcome toast on page load
- Traveller card responsive image flip (image now consistently above content)
- Legacy `rohit-*.jpg` assets (replaced by WebP; JPG retained as `<picture>` fallback paths)

### Fixed

- Viewport and charset meta tags on all pages
- External links use `rel="noopener"`
- Reduced-motion preferences respected for hover animations
