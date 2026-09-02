# Everett Church of God Website

A modern, accessible, mobile-first website for Everett Church of God in Everett, Pennsylvania.

## Project status

The replacement website is under active development. The current production website remains live until this project is reviewed and approved for launch.

## Development workflow

- `main` is the stable branch.
- Feature work is completed on development branches and reviewed through pull requests.
- The production domain will not be connected until launch approval.

## Planned site sections

- Home
- New Here
- About
- Ministries
- Messages
- Events
- Give
- Contact

## Technology

This project is intentionally lightweight and suitable for GitHub Pages. It uses semantic HTML, CSS, and vanilla JavaScript with data-driven content where practical.

## Local development

Serve the repository with any local static HTTP server. Avoid opening pages directly with `file://` because some browser features behave differently without an HTTP origin.

Example with Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Phase documentation

- [`docs/phase-1-foundation.md`](docs/phase-1-foundation.md) — Phase 1 scope, launch-safety decisions, and verification checklist.

## Production domain

The existing `everettchurchofgod.com` domain will remain untouched during development. A `CNAME` file will be added only during the launch phase.
