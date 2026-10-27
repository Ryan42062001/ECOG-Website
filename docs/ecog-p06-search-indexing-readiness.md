# ECOG-P06 — Google Search Indexing Readiness & Controlled Launch

**READINESS_REVIEW / MANAGER SOURCE-CANDIDATE AUTHORIZATION PENDING** — Stage 1 DOCS ONLY. HIGH risk.

**Authority:** [Issue #30](https://github.com/Ryan42062001/ECOG-Website/issues/30); baseline \`27051868f0ebb2432efe19e5f5b1634b4876c27d\`. **Dependency:** [P05 #29](https://github.com/Ryan42062001/ECOG-Website/issues/29) OPEN / registrar transfer PENDING. **Branch:** \`phase/ecog-p06-indexing-readiness\`; one DRAFT PR. **Only authorized changed files:** \`.ai/CURRENT_PHASE.md\`, \`docs/PRODUCT_ROADMAP.md\`, this new document. No source or live indexing authorization.

## Evidence level and indexing baseline

Canonical GitHub source: root \`CNAME\` is \`everettchurchofgod.com\`; \`robots.txt\` contains \`User-agent: *\` and \`Disallow: /\` without Sitemap directive. Exactly 12 unique HTTPS apex URLs are in the existing \`sitemap.xml\`. Each of those 12 source HTML pages has one page-specific title, a description of at least 50 characters, a self-canonical and matching OG URL on the apex host, Twitter summary card and \`noindex,nofollow\` robots meta. The **current sitemap has NOT been submitted** to Google.

Ryan observed Search Console domain property ownership verification. Historical Oct 21 inspection: homepage not indexed, "Duplicate without user-selected canonical", Google selected \`https://liberationlighthousechurch.com/\`; cause and current selection are UNKNOWN. Oct 26, 2026 9:51 PM ET live test was blocked by robots, with page fetch and indexability/canonical N/A. The obsolete 2014 \`http://www.everettchurchofgod.com/sitemap.txt\` was removed from property. Search Console report counts UNKNOWN/processing: do not invent counts or claim historic Google classifications remain current. Google's \`noindex\` can only be read after a crawl; \`robots.txt\` blocking the URL also blocks reading the meta, so these controls are not redundant exclusion guarantees.

Cloudflare transfer request accepted does **not** prove registrar transfer complete. P05 Issue #29 remains OPEN; owner-reported "Pending Transfer / Wait for your domain to be released" must be reconciled with independently verified registrar/registrant, expiration, nameservers, HTTPS, access and renewal before indexing publication. None of these are changed here.

## Verified 12-page source SEO, canonical, sitemap readiness matrix

**All** values below are source assertions at the immutable baseline. "yes" means an exact entry in the current \`sitemap.xml\` file, NOT Google submission. "self=OG" means the absolute \`https://everettchurchofgod.com\` route is both \`rel=canonical\` and \`og:url\`. Every description exists; titles are page-specific. Every row remains blocked for indexing.

| # | Public URL path | HTML source | Verified title | Sitemap | HTTPS apex canonical/OG | Current robots |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `/` | `index.html` | Everett Church of God \| Everett, PA | yes | self=OG | `noindex,nofollow` |
| 2 | `/new-here.html` | `new-here.html` | New Here \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 3 | `/about.html` | `about.html` | About \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 4 | `/ministries.html` | `ministries.html` | Ministries \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 5 | `/ministries/children.html` | `ministries/children.html` | Children \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 6 | `/ministries/students.html` | `ministries/students.html` | Amplify Students \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 7 | `/ministries/men.html` | `ministries/men.html` | Guys \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 8 | `/ministries/women.html` | `ministries/women.html` | Women's Discipleship \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 9 | `/messages.html` | `messages.html` | Messages \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 10 | `/events.html` | `events.html` | Events \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 11 | `/give.html` | `give.html` | Give \| Everett Church of God | yes | self=OG | `noindex,nofollow` |
| 12 | `/contact.html` | `contact.html` | Contact \| Everett Church of God | yes | self=OG | `noindex,nofollow` |

**Future goal, not current reality:** all twelve public pages become coherent crawlable index candidates only in an authorized single indexed-publication commit, not piecemeal. Preserve canonical/OG/source titles and list exactly these 12 apex URLs. The current site's metadata and sitemap are internally consistent; no current Google coverage outcome is inferred.

## Non-public, retired, 404, staging and compatibility URL inventory

| Path/class | Verified current source | Future constraint |
| --- | --- | --- |
| \`/404.html\` / unknown URL | \`404.html\` includes \`noindex\` | Retain noindex, confirm unknown route actually returns HTTP 404 (avoid soft 404/200), exclude from sitemap |
| \`/ministries/senior-adults.html\` | Retired notice has \`noindex,follow\` and no canonical | Keep retired noindex; exclude from sitemap; verify response |
| \`/index.php/senior-adults-ministry/\` | Retired compatibility file \`index.php/senior-adults-ministry/index.html\`: meta refresh and \`noindex,follow\` | Keep noindex; exclude from sitemap; verify served response |
| 11 active \`index.php\` compatibility URLs below | HTML \`meta http-equiv=refresh\` and canonical target; *no* noindex in existing source | Excluded from sitemap; NOT confirmed HTTP 301/308; future policy decision and tests required |
| \`/index.php/\`, old \`/sitemap.txt\`, \`/index.html\`, arbitrary unknown routes, \`/docs/\`, \`/data/\`, \`/scripts/\`, \`/.ai/\`, \`/.history/\`, source assets | Audit targets; live exposure/status not asserted | Check representative HTTP status/headers, unwanted 200/contents, sitemap exclusion and no secrets. Robots.txt is NOT a security boundary |
| \`ryan42062001.github.io/ECOG-Website/\`, Vercel preview and branch aliases | Nonproduction/staging domains | Must not become indexable duplicates when future public pages shed noindex |

### Active compatibility routes: all 11 excluded from sitemap

| Historical URL | Actual source file | Destination | Current mechanism/robots |
| --- | --- | --- | --- |
| `/index.php/messages/` | `index.php/messages/index.html` | `messages.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/contact-us/` | `index.php/contact-us/index.html` | `contact.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/donations/` | `index.php/donations/index.html` | `give.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/services/` | `index.php/services/index.html` | `new-here.html#visit-details` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/our-pastors/` | `index.php/our-pastors/index.html` | `about.html#leadership-title` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/what-we-believe/` | `index.php/what-we-believe/index.html` | `about.html#beliefs-title` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/ways-to-connect/` | `index.php/ways-to-connect/index.html` | `ministries.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/childrens-ministry/` | `index.php/childrens-ministry/index.html` | `ministries/children.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/amplify-students-ministry/` | `index.php/amplify-students-ministry/index.html` | `ministries/students.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/guys-ministry/` | `index.php/guys-ministry/index.html` | `ministries/men.html` | HTML meta refresh and apex destination canonical; no `noindex` today |
| `/index.php/womens-ministry/` | `index.php/womens-ministry/index.html` | `ministries/women.html` | HTML meta refresh and apex destination canonical; no `noindex` today |

**Existing policy conflict to resolve in Stage 2:** \`scripts/validate-launch-state.js\` currently asserts all 11 active compatibility pages contain **no** noindex, while the proposed launch wants retired/redirect/legacy URLs to stay out of Google. The above routes are *meta refresh HTML*, not guaranteed permanent HTTP redirects; a destination canonical is a signal, not proof of exclusion. Manager must choose (A) actual permanent HTTP redirects through a separately authorized platform/routing scope, or (B) a scoped compatibility noindex/canonical rule plus corresponding validator/tests and explicit source-file expansion. Never silently edit these routes or delete the negative tests. Retired and 404 pages already carry noindex.

## Host and HTTP redirect readiness (NOT YET VERIFIED)

| HTTP request | Target outcome at future indexing release | Evidence gap |
| --- | --- | --- |
| \`https://everettchurchofgod.com/\` | HTTP 200, exact HTTPS apex canonical, only intended HTML indexed | Canonical source verified, actual current response headers/status not independently recorded |
| \`http://everettchurchofgod.com/\` | Permanent HTTPS canonical redirect without loops | Record GET/HEAD status and Location chain |
| \`https://www.everettchurchofgod.com/\` | Permanent redirect to HTTPS apex, no competing indexable www copy | P02 historical owner smoke only, current chain/status needs test |
| \`http://www.everettchurchofgod.com/\` | Stable canonical HTTPS apex redirect chain | HTTP codes and final Location unverified |
| \`/index.html\`, trailing-slash/extension aliases and query variants | One preferred canonical, no unintended duplicate indexable content | Current live status/redirect/Google interpretation unverified |
| All \`/index.php/...\` and unknown/retired routes | Confirm approved 301/noindex/404 behavior, avoid soft 404s | Static meta-refresh observed; HTTP 3xx NOT assumed |
| Preview/staging URLs | Real \`X-Robots-Tag: noindex\` on every future indexed-source preview, no custom domain bypass | Must test actual response headers; current preview header UNVERIFIED |

Use a read-only status/redirect matrix (\`curl -sSIL\` and \`curl -sSI\`, plus GET where HEAD differs), checking HTTPS certificate, Host/Location hops and final canonical. Public URL inspection after launch must compare actual served HTML/header state, not simply GitHub source.

## Existing validator analysis and proposed dual-authority architecture — DO NOT IMPLEMENT NOW

- \`scripts/validate-release-candidate.js\`: enforces exactly one P02 historical section and its structured **closed hosting/DNS/Pages/Cloudflare/DNSSEC/registrar/indexing** field values. The P02 indexing authority remains historically NOT AUTHORIZED; do not rewrite P02 history for P06.
- \`scripts/validate-launch-state.js\`: currently reads the **P02** indexing field to choose blocked or authorized mode; checks 12 HTML pages, canonical/OG, sitemap, CNAME/Church JSON-LD, \`robots.txt\`, 404/retired noindex, and currently demands *no* noindex in 11 active compatibility pages. Existing logic cannot validate P06 indexed-state while preserving P02 history unchanged.
- \`scripts/validate-release-candidate.test.js\`: 35 existing cases; first-occurrence mutation fixtures for historical P02 generic state/risk/indexing strings. Top-of-file repeated exact fields may divert fixtures, yielding false fails/PASS. Preserve every existing adversarial test, the P02 section and its unique structured fields; avoid new unscoped field names above it.

**Stage 2 proposed explicit new P06 authority:** a unique scoped field inside the P06 phase section, such as \`Indexing Release Authority (ECOG-P06): NOT AUTHORIZED\` in blocked state. An indexed-source candidate uses a new exact, unique P06 authority value approved *for the frozen candidate*, validated under the P06 heading rather than a P02 field mutation. Its appearance alone does NOT authorize production deployment; P05 completion and Ryan's exact-SHA consent are independent out-of-band gates.

**Two deterministic states, fail closed:** (1) blocked baseline: P02 historic controls intact, P06 NOT AUTHORIZED, all 12 pages carry noindex/nofollow, sitewide Disallow and no Sitemap directive. (2) explicitly future authorized candidate: P02 historic controls unchanged, P06 indexed-candidate authority present exactly once, all 12 approved pages free of noindex, \`robots.txt\` explicitly crawlable + exact apex Sitemap directive, only 12 sitemap entries, coherent HTTPS canonical/OG and approved legacy/retired policy. Missing/duplicate/decoy/malformed P06 value; any half-unblocked page or blocked robots; extra sitemap page; premature legacy indexing; wrong host; stale authority; unexpected 404 indexing must FAIL. Candidate validation and production permission remain separate: a protected merge requires fresh P05 evidence, exact audit and explicit owner approval.

**Proposed Stage 2 SOURCE/TEST PATH EXPANSION FOR MANAGER REVIEW (NOT AUTHORIZED):** all 12 HTML files in matrix; \`robots.txt\`; \`scripts/validate-launch-state.js\`; \`scripts/validate-release-candidate.js\` (if needed for separate P06 lifecycle/authority shape); \`scripts/validate-release-candidate.test.js\`; and three P06 docs/lifecycle paths. If legacy compatibility pages, special/retired pages, GitHub Pages routing/headers, Vercel preview protection, workflow, sitemap or any extra test/config must change, request **individual explicit added-path authorization before editing**. No Stage 1 file in that expanded source set is modified.

**Negative test suite extension required** (do not delete the existing 35): unauthorized source unblocks; P02 tampering; missing/duplicate/decoy P06 authority; 11/12 public noindex mismatch; one rogue page indexable when blocked; robots Disallow while authorized/Allow before authorized; sitemap directive missing/wrong host/extra or duplicate \`<loc>\`; non-apex canonical or OG; 404/retired regression; compatibility route policy violations; no preview header; fake or stale P05/owner approval; unexpected preview host/redirect; rollback blocked state. Run deterministic blocked and authorized fixtures, exact-head FAST, and Manager-controlled FULL, and verify actual HTTP/response-header behavior separately. Never weaken the existing fixture assertions to make tests pass.

## Vercel preview / staging guard — unresolved live-header gate

Read-only Vercel project inspection of \`ecog-website-preview\` returned only \`vercel.app\` project domains, with SSO enabled except custom domains; no project custom-domain preview override found in the retrieved domain list. However actual HTTP \`X-Robots-Tag\` header on a preview remains **UNVERIFIED** because live preview web reader access failed. Vercel documents automatic \`X-Robots-Tag: noindex\` on genuine Preview deployments, but custom or production-domain assignment can suppress the default. Do NOT infer header proof from project metadata. Before any future source unblock, inspect the exact new preview and alias response headers (\`curl -sSI https://<exact-preview-host>/\`, then representative pages/GET), insist on \`x-robots-tag: noindex\`, verify target is Preview and no production/custom-domain override, and test the GitHub \`github.io/ECOG-Website/\` staging address separately (it might not have Vercel protection). If indexable candidate HTML is accessible on unprotected staging, STOP and seek Manager-approved mitigation. No source/headers/config changes now.

Docs: https://vercel.com/docs/headers/response-headers and https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines.

## Future source, launch, Search Console and rollback gates — planning only

**Stage 2 (requires new Manager scope):** recheck main, source/hosts, P05 pending, all 12 pages, special/legacy policy, Vercel and GitHub staging protection; add strict P06 authority and fail-closed blocked/authorized validator/test fixtures; coherently remove noindex on **exactly twelve** pages and prepare compliant \`robots.txt\`/Sitemap directive while keeping 404/retired noindex, canonicals and church facts. No partial public exposure or additional source path without Manager permission. FAST → private nonindexable owner preview → punch list → documentation Phase Sync → Manager exact-head FULL + deterministic repeat → immutable HIGH-risk freeze → fresh independent HIGH-risk Auditor in a SEPARATE CHAT. Remediation requires new SHA evidence/audit.

**Stage 3 (not authorized):** only after independent proof P05 registrar transfer complete, owners/DNS/renewal stable, preview/staging protected, frozen SHA audited and Ryan separately authorizes EXACT SHA for production indexing: protected merge, automatic Pages exact-SHA FAST/deploy. Verify all 12 production HTTP 200/canonicals/metadata/headers, robots/Sitemap and HTTPS/www/apex redirects, legacy/retired/404 behavior, no unintended page exposure. THEN owner-authorized GSC live test, submit \`https://everettchurchofgod.com/sitemap.xml\`, optionally request homepage indexing, track fetch/crawl/indexing/canonical with historical \`liberationlighthousechurch.com\` anomaly documented without assuming cause. Google indexing is NOT guaranteed.

**Rollback:** on premature indexing/preview exposure, wrong 12-page set, malformed authority, bad DNS/SSL/host/legacy or indexing regression, STOP and obtain separate protected rollback authority for a coherent safe product SHA restoring all 12 noindex and robots sitewide Disallow (never edit P02 historical authority). Verify rollback exact-head CI/Pages, HTTP headers/content, Search Console status; removals/deindexing may lag and need approved follow-up. Do not rely on robots as access control.

**Absolute stop:** pending P05, wrong SHA, no explicit Manager source scope, test bypass, missing negative tests, mixed state, unexpected canonical, unverified preview noindex, non-PASS FULL/fresh independent HIGH-risk audit, or absent Ryan exact-SHA production-indexing authorization.

## Stage 1 boundary and handoff

This draft changes only three P06 documentation files; P02–P04 entire historical CLOSED records in \`.ai/CURRENT_PHASE.md\`, earlier roadmap bytes, ALL product HTML/CSS/JS, \`robots.txt\`, \`sitemap.xml\`, \`CNAME\`, validators/tests, DNS/Cloudflare/Pages/registrar/DNSSEC and infrastructure remain unchanged. NEW exact-head FAST **must** pass its original 35/35 adversarial tests plus entire validation union; record run/SHA after observation. STOP at READINESS_REVIEW / MANAGER SOURCE-CANDIDATE AUTHORIZATION PENDING. No indexing request/sitemap submission, FULL, freeze, audit, mark-ready, merge, deployment or new source work.

Official resources:
- https://developers.google.com/search/docs/crawling-indexing/block-indexing
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
