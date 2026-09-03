# Phase 1 — Site Foundation

## Goal

Create a stable, mobile-first foundation for the Everett Church of God replacement website without changing the current production domain.

## Included

- Global semantic page structure
- Responsive navigation and mobile menu
- Shared footer
- Foundational design tokens and layout styles
- Homepage framework
- New Here, About, Ministries, Messages, Events, Give, and Contact routes
- Ministry routes for Children, Amplify Students, Men, Women, and Senior Adults
- Empty sermon and event data stores ready for verified content in later phases
- Accessible skip links, keyboard-friendly navigation, reduced-motion support, and visible text links
- Staging-safe robots configuration
- Portable 404 page
- Image and icon asset directories

## Deliberately deferred

- Production `CNAME`
- Production sitemap/canonical URLs
- Final church logo and photography
- Final pastor/ministry copy
- Verified sermon content and live sermon integrations
- Verified event content and live event data
- Giving-provider link
- Contact form or external form provider
- Analytics

## Launch safety

The existing `everettchurchofgod.com` website and DNS are not modified by Phase 1.

The sermon and event data files remain empty during foundation work so development placeholders cannot be mistaken for real church content.

## Phase 1 verification checklist

Before merging this branch:

1. Serve the repository over HTTP and open every top-level and ministry route.
2. Verify navigation at desktop width and below 860 px.
3. Confirm the mobile menu opens, closes, closes after navigation, and closes with Escape.
4. Keyboard-tab through the header and confirm the skip link is visible on focus.
5. Confirm nested ministry pages load shared CSS/JavaScript correctly.
6. Confirm the 404 page works both on a GitHub project Pages URL and later at a root custom domain.
7. Check browser console for JavaScript errors.
8. Run an accessibility/performance pass (for example Lighthouse) before launch-quality signoff.
9. Confirm `data/events.json` and `data/sermons.json` contain no unverified sample records.
10. Keep `robots.txt` blocked and do not add `CNAME` until production launch.
