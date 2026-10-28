# ECOG-P07 — Post-Launch Navigation, Belief Cards & Apple/Google Maps

**State: PREVIEW_READY / OWNER REVIEW PENDING** · **Risk: MEDIUM** · **Nonproduction only**

- Manager authority: [Issue #32](https://github.com/Ryan42062001/ECOG-Website/issues/32)
- Canonical main starting SHA: `b8f5d1a13413d2145066e8dc7920048b83fe0233`
- Branch: `phase/ecog-p07-post-launch-usability` · one DRAFT PR, UNMERGED
- P05: Issue #29 CLOSED. P06: Issue #30 OPEN in launch / GSC monitoring; indexing is a separate phase and P07 makes no search changes.
- This builder assignment does NOT authorize FULL, freeze, audit, PR-ready, merge, deployment or provider/infrastructure modification.

## Implemented bounded product fixes

1. **Sitewide header Contact:** `assets/js/components.js` adds Contact immediately after Give in the one shared `navItems` collection. `contact.html` is resolved through existing `linkHref` on root pages and `../contact.html` on ministry subpages. The existing `aria-current="page"`, hamburger `aria-expanded`/label controls, keyboard Escape focus restoration and 860px CSS mobile menu remain unchanged. No footer or service CTA removed. Expected desktop fit around 861/1180px and phone open/close remain targeted owner preview checks; no unsupported automated pixel-fit claim.

2. **About / What We Believe:** `assets/css/components.css` applies `.about-beliefs .about-value-card{color:var(--color-ink)}` so headings in white cards no longer inherit white-on-white text. All seven headings and doctrine text stay in `about.html` untouched: The Bible; God; Jesus Christ; Salvation; The Holy Spirit; The Church; Jesus Is Coming Back. Muted paragraphs retain their explicit muted color. The separate bright `.about-values` numbered cards are not changed.

3. **Directions:** Home, New Here and Contact each show two clearly labeled, keyboard-focusable options in **Apple Maps first → Google Maps second** order. Apple: `https://maps.apple.com/directions?destination=11152%20Lincoln%20Highway%2C%20Everett%2C%20PA%2015537`, an official unified Maps HTTPS directions address with no guessed geocoordinates. Google: the **exact original URL** from each page, unchanged. Address: **Everett Church of God, 11152 Lincoln Highway, Everett, PA 15537**. The Home/New Here Google-only clickable map tile becomes a neutral map choices group with two real anchors, preventing misleading Google-exclusive destinations. New Here's old extra Google-only Get Directions control becomes a same-page `#directions-choices` shortcut; Contact preserves existing email/telephone actions. Both map choices open separately with `target="_blank" rel="noopener noreferrer"` and accessible new-tab notice. No SDK, tracking or maps embed.

## Exact source boundary and verification

- Intended changed files: `assets/js/components.js`, `assets/css/components.css`, `index.html`, `new-here.html`, `contact.html`, `scripts/validate-release-candidate.test.js` (appended P07 checks only), `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, and this new document. **Nine changed paths**, below Issue #32 MAX 11.
- No edits to `about.html` doctrine content, `assets/css/main.css` breakpoint/menu logic, `assets/css/giving-contact.css`, `assets/js/main.js`, any P06 source/SEO policy, `robots.txt`, `sitemap.xml`, `_config.yml`, CNAME, data JSON, old legacy/retired/404, workflow, hosting or provider settings.
- The historical original 73 tests, including P06 blocked/indexable authority cases and the genuine production Jekyll output artifact test, must remain intact. New P07 negative/positive cases are appended and exact-head FAST must pass.
- Existing Google maps links remain unchanged per page. Apple's unified directions URL: https://developer.apple.com/documentation/mapkit/unified-map-urls

## Targeted owner preview procedure

1. On desktop above 1180px and at 861–1180px, inspect header for Contact after Give without wrapping/overlap. Visit Contact and verify active link highlight.
2. On phone and at 860px or narrower, open hamburger; Contact is present, tappable and routes to correct page. Exercise keyboard Tab, Enter/Space on toggle, Escape (focus returns to button), close-on-selection and links on nested ministry pages.
3. On About, all seven What We Believe headings must be visible in dark ink against white; paragraphs, content, and separate What Matters section remain unchanged.
4. On Home, New Here and Contact, confirm Apple Maps appears ABOVE Google Maps, tapping both goes to **11152 Lincoln Highway, Everett, PA 15537** on representative Apple/non-Apple devices; the existing Google Maps link still works, new tabs safe, no map-only panel redirects automatically.
5. Validate Contact phone/email and existing Events/YouTube/Give behavior has not changed. Verify exact Vercel Preview SSO/noindex response on immutable and branch alias URLs where available.

**STOP:** PREVIEW_READY for Ryan's feedback. Manager controls consolidated punch list, Phase Sync, exact-head FULL, immutable MEDIUM-risk freeze and fresh independent Auditor in a different chat; owner later separately authorizes a named exact SHA for protected merge and production publishing.
