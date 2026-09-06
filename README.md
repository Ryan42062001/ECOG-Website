# Everett Church of God Website

A modern, accessible, mobile-first replacement website for Everett Church of God in Everett, Pennsylvania.

## Project status

The planned implementation through **Phase 11 — accessibility, SEO, performance, and automated quality gates — is merged into `main`**. The site remains in staging/review mode until church leadership approves launch.

The production domain is intentionally untouched. Production indexing, DNS changes, and a `CNAME` file remain blocked until launch approval.

## Implemented site sections

- Home
- New Here
- About and leadership
- Ministries
- Messages
- Events
- Give
- Contact

The repository also includes completed content-migration work plus accessibility, SEO, local-discovery, performance, and site-integrity safeguards.

## Development workflow

- `main` is the stable reviewed branch.
- New changes should use short-lived feature branches and pull requests.
- Merged or abandoned feature branches should be deleted.
- Production domain or indexing changes require explicit launch approval.

## Technology

This project is intentionally lightweight and suitable for GitHub Pages. It uses semantic HTML, CSS, vanilla JavaScript, and data-driven content where practical. It intentionally avoids a framework, trackers, external fonts, and heavy media dependencies.

## Quality gates

Automated checks cover structural HTML, internal links, JSON, JavaScript syntax, accessibility invariants, SEO/launch safeguards, and performance budgets. Phase 11 also added canonical/Open Graph/Twitter metadata, factual Church JSON-LD, a production sitemap for active routes, and staging `noindex,nofollow` protections.

## Local development

Serve the repository with any local static HTTP server. Avoid opening pages directly with `file://` because some browser features behave differently without an HTTP origin.

Example with Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Documentation

Phase documentation lives in `docs/`, including the original foundation decisions and the later implementation, migration, accessibility, SEO, and performance work.

## Production domain

The existing `everettchurchofgod.com` domain remains untouched during staging. A `CNAME` file should be added only as part of an explicitly approved production launch.

## Content note

Service times, address details, giving/payment details, events, sermons, leadership information, and other public-facing facts must remain based on verified church information. Do not invent production content to fill gaps.
