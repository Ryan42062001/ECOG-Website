# ECOG-P06 — Google Search Indexing Readiness & Controlled Launch

## Current controlling disposition — HOMEPAGE INDEXED / CORRECT GOOGLE CANONICAL / CLOSURE_READY

**CLOSURE_READY / FINAL VALIDATION PENDING; Issue #30 remains OPEN.** The Manager [approved one bounded documentation-only closure PR](https://github.com/Ryan42062001/ECOG-Website/issues/30#issuecomment-6513629723). P06 engineering release and **homepage Google indexing** are verified, not whole-site indexing. The historical preparation, punch-list and audit records after this top summary are **preserved byte-for-byte** as snapshots and do not represent the current live P06 status.

### Approved P06 release and live safety evidence

The independently HIGH-risk re-audited, immutable source `d6d4ed138e68a28f817e887e2521e3baf3ee0737` received a fresh independent **PASS** ([#6457602870](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6457602870)) after the previous publishing-boundary punch-list was remediated and exact-source FULL/deterministic validation completed. P05 Issue #29 CLOSED, and Ryan separately authorized this exact frozen SHA for production indexing ([#6458597968](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6458597968)). Original feature PR #31 is **CLOSED / MERGED** at `b8f5d1a13413d2145066e8dc7920048b83fe0233` and GitHub Pages deployed successfully. Owner's P06 live verification checked **all 12 intended pages HTTP 200 with `index,follow` and matching canonical** ([#6458719076](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6458719076)). Corrected live Jekyll publishing-boundary checks established `docs/PRODUCT_ROADMAP.md` and `scripts/validate-launch-state.js` **404**, required public JSON **200**, and intact robots/sitemap rules ([#6458770151](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6458770151)). Subsequent P07 owner-operated live HTTPS checks also passed [10/10 status probes](https://github.com/Ryan42062001/ECOG-Website/issues/32#issuecomment-6513293212). P07 Issue #32 is now **CLOSED**, independently from P06. Current protected main `0fb47ee16596296c618e107016a3c8990cbfaa07` has no product/source change in this closure candidate.

### Owner GSC inspection — October 29, 2026

| Observed field | Google Search Console evidence |
| --- | --- |
| Inspected homepage | `https://everettchurchofgod.com/` |
| Indexed | **Page is indexed / URL is on Google** |
| Last crawl | **Oct 29, 2026, 10:11:36 AM** displayed; no separate timezone metadata established |
| Crawler | **Googlebot smartphone** |
| Crawl allowed / fetch / indexing allowed | **YES / SUCCESSFUL / YES** |
| User-declared canonical | `https://everettchurchofgod.com/` |
| Google-selected canonical | **Inspected URL** (correct homepage canonical) |
| Direct submitted sitemap | `https://everettchurchofgod.com/sitemap.xml` |
| Sitemaps report | **Success**, submitted/last read **Oct 27, 2026** |
| Sitemap discovery | **12 pages, 0 videos discovered** |
| URL Inspection Discovery → Sitemaps | **Temporary processing error**; not a failure of the separate successful report |
| Other eleven URLs / total indexed count | **UNKNOWN** — discovery is not indexation |

The historical October 21 external selected-canonical snapshot at `https://liberationlighthousechurch.com/` has been superseded for the **current Oct 29 indexed homepage record**: Google's selected canonical is now **Inspected URL**. That external URL remains listed only as an historical referring page. Being indexed does not guarantee ranking, impressions or stable future classification.

### Monitoring handoff and documentation closure gate

Periodically review GSC Page indexing for the other eleven URLs and watch for sustained changes in selected canonical, legacy duplicate handling and the transient URL Inspection sitemap note. Escalate actual regressions under a future separately authorized issue; do not request Google reindexing or resubmit a successful sitemap as part of this administrative closure.

Exactly three authorized P06 docs-only paths on NEW `phase/ecog-p06-closure-sync` from `0fb47ee16596296c618e107016a3c8990cbfaa07`: P06 subsection of `.ai/CURRENT_PHASE.md`, P06 subsection of `docs/PRODUCT_ROADMAP.md`, and **this top controlling summary**. All historical records after this summary and every P07/P02–P04 historical text remain unchanged. Preserve all 79 tests, public HTML/CSS/JS, robots/sitemap/Jekyll, CNAME, JSON, workflows and production infrastructure. After **NEW exact-head FAST 79/79**, STOP for Manager review and Ryan's **separate exact closure-docs SHA authorization**. No Builder FULL, audit, merge, deployment, Search Console change or Issue #30 closure.

---

## Historical owner-accepted Phase Sync checkpoint — superseded by audit punch list

**High risk · PR #31 DRAFT / OPEN / UNMERGED · P06 Candidate Source Mode: INDEXABLE_CANDIDATE · P06 Production Indexing Release Authority: NOT GRANTED.**

**Approval:** Ryan explicitly accepted the unchanged visual/content design and intended 12-page indexable *candidate* at product SHA `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`. Manager recorded his exact consent and separately authorized ONE documentation-only Phase Sync in [PR comment #6432931901](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901). Approval is scoped to visual preview and 12-page intent, not end-to-end navigation/phone/device/keyboard testing, production crawl access, Google submissions, merge, deployment, registrar/DNS/Cloudflare changes or infrastructure.

**Accepted source evidence:** `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722` passed [exact-head FAST #40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) — **SUCCESS, 68/68 tests** plus release shape, content, full-site/12 legacy routes, launch-state `INDEXABLE_CANDIDATE` and performance union. The twelve intended source HTML pages have single `index,follow` robots metas and draft `robots.txt` has `Allow: /` and the apex sitemap directive. Neither is published on protected `main`, which still has `noindex,nofollow` on all twelve and sitewide `Disallow: /`. `sitemap.xml` (twelve intended apex entries), CNAME, CSS/JS, existing titles, descriptions, canonical/OG, JSON-LD, legacy meta-refresh URLs, retired/404 and other source are preserved. The sitemap is NOT submitted to Google.

**Phase Sync scope:** Only `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, `docs/ecog-p06-search-indexing-readiness.md` change. The cumulative PR remains exactly **18 authorized paths**. All twelve accepted HTML files and `robots.txt` must retain the exact source Git blobs at `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`; both P06 validator/test scripts also unchanged. Historical P02/P03/P04 CLOSED records and P02 Production Indexing: NOT AUTHORIZED are not touched. **The final docs-only commit SHA and its NEW exact-head FAST belong in the PR evidence posted after CI completes**, not as fabricated self-references within a commit.

**Preview barrier observed:** Ryan's PowerShell HEAD captures dated 2026-10-26 23:03 ET in [comment #6432713858](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432713858) showed the immutable accepted-source Vercel preview root and /about.html and P06 branch alias responding **302 to Vercel SSO plus `X-Robots-Tag: noindex` on each unauthenticated redirect**. Deployment `dpl_AqFCuBr9yojFjpopqSJVqMMjPL52` was READY on the accepted source SHA. No claim of noindex on an authenticated HTTP 200 page, and these source-SHA headers do not automatically prove any newly deployed docs-only preview. Prior owner tests found 301 GitHub Pages staging root/about to apex, 301 HTTPS-www and HTTP-apex to HTTPS apex, 200 HTTPS apex, and 200 meta-refresh for the old messages URL (not a permanent 301). Ten other historical compatibility-route live HTTP statuses and current Google-selected canonical/indexed count remain UNKNOWN.

**Updated P05 factual dependency:** Manager [P05 evidence #6432876462](https://github.com/Ryan42062001/ECOG-Website/issues/29#issuecomment-6432876462) documented Cloudflare Domain Registration **Active**, registrar UI **transferred within last 60 days**, expiry **2027-11-28**, auto-renew ON, WHOIS privacy enabled, DNSSEC disabled and existing GitHub Pages DNS. This supports that the registrar transfer is **operationally complete**, rather than still pending transfer. **Issue #29 remains OPEN**: legal/church ownership authorization of the registrant, registration mailbox access/verification, church-controlled admin/2FA/backup access, and valid billing/renewal assurances remain pending. No independent registry RDAP check is claimed; no private contacts or Google verification token are exposed. P05 is not fully CLOSED or a cleared publication gate.

**Historical CI accurately preserved:** Stage 1 #40436219160 SUCCESS 35/35; Stage 2A #40437322497 and #40437543473 SUCCESS 66/66, #40437658742 FAILURE 67/68 (assertion mismatch) corrected by final Stage 2A #40437724407 SUCCESS 68/68; initial Stage 2B #40439468163 FAILURE 37/68 (original blocked-state fixtures on a prospective indexed checkout), followed by blocked-snapshot test isolation without altering original 35 definitions and final product #40439661687 SUCCESS 68/68. Do not reinterpret old failures as passes.

**Release STOP:** Manager verification of docs-only Phase Sync HEAD/new FAST is next. Only Manager can subsequently authorize/run FULL, immutable HIGH-risk freeze and commission fresh independent HIGH-risk audit in another chat. Separately, P05 final assurances and explicit Ryan permission tied to the exact frozen SHA are mandatory before protected merge, production indexing, Search Console sitemap submission or indexing request. No release or infrastructure action in this stage.

---

## Historical Stage 1–2B notes (snapshots; superseded where they describe an earlier CURRENT state)

The sections below preserve the chronological Stage 1 inventory and Stage 2A/2B research, test fixtures and gate observations. References below to "current noindex", "P05 transfer PENDING", "Stage 2B NOT AUTHORIZED", unverified old-SHA preview headers or Stage 1's three-file total describe **the earlier point-in-time baseline** and are **not controlling facts for this accepted Stage 2B Phase Sync**. The controlling state is the section above: unmerged branch source `INDEXABLE_CANDIDATE`, live main still blocked, P05 transfer operationally complete but administrative gate open, and owner preview accepted. The historical 12-page SEO matrix describes its initial Stage 1 snapshot; it is not a live-production crawl report.

**STAGE2B_PREVIEW_READY / OWNER PREVIEW AND MANAGER PHASE SYNC PENDING** — branch-only prospective indexing source; production indexing NOT authorized. HIGH risk.

**Authority:** [Issue #30](https://github.com/Ryan42062001/ECOG-Website/issues/30); baseline `27051868f0ebb2432efe19e5f5b1634b4876c27d`. **Dependency:** [P05 #29](https://github.com/Ryan42062001/ECOG-Website/issues/29) OPEN / registrar transfer PENDING. **Branch:** `phase/ecog-p06-indexing-readiness`; one DRAFT PR. **Only authorized changed files:** `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, this new document. No source or live indexing authorization.

## Evidence level and indexing baseline

Canonical GitHub source: root `CNAME` is `everettchurchofgod.com`; `robots.txt` contains `User-agent: *` and `Disallow: /` without Sitemap directive. Exactly 12 unique HTTPS apex URLs are in the existing `sitemap.xml`. Each of those 12 source HTML pages has one page-specific title, a description of at least 50 characters, a self-canonical and matching OG URL on the apex host, Twitter summary card and `noindex,nofollow` robots meta. The **current sitemap has NOT been submitted** to Google.

Ryan observed Search Console domain property ownership verification. Historical Oct 21 inspection: homepage not indexed, "Duplicate without user-selected canonical", Google selected `https://liberationlighthousechurch.com/`; cause and current selection are UNKNOWN. Oct 26, 2026 9:51 PM ET live test was blocked by robots, with page fetch and indexability/canonical N/A. The obsolete 2014 `http://www.everettchurchofgod.com/sitemap.txt` was removed from property. Search Console report counts UNKNOWN/processing: do not invent counts or claim historic Google classifications remain current. Google's `noindex` can only be read after a crawl; `robots.txt` blocking the URL also blocks reading the meta, so these controls are not redundant exclusion guarantees.

Cloudflare transfer request accepted does **not** prove registrar transfer complete. P05 Issue #29 remains OPEN; owner-reported "Pending Transfer / Wait for your domain to be released" must be reconciled with independently verified registrar/registrant, expiration, nameservers, HTTPS, access and renewal before indexing publication. None of these are changed here.

## Verified 12-page source SEO, canonical, sitemap readiness matrix

**All** values below are source assertions at the immutable baseline. "yes" means an exact entry in the current `sitemap.xml` file, NOT Google submission. "self=OG" means the absolute `https://everettchurchofgod.com` route is both `rel=canonical` and `og:url`. Every description exists; titles are page-specific. Every row remains blocked for indexing.

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
| `/404.html` / unknown URL | `404.html` includes `noindex` | Retain noindex, confirm unknown route actually returns HTTP 404 (avoid soft 404/200), exclude from sitemap |
| `/ministries/senior-adults.html` | Retired notice has `noindex,follow` and no canonical | Keep retired noindex; exclude from sitemap; verify response |
| `/index.php/senior-adults-ministry/` | Retired compatibility file `index.php/senior-adults-ministry/index.html`: meta refresh and `noindex,follow` | Keep noindex; exclude from sitemap; verify served response |
| 11 active `index.php` compatibility URLs below | HTML `meta http-equiv=refresh` and canonical target; *no* noindex in existing source | Excluded from sitemap; NOT confirmed HTTP 301/308; future policy decision and tests required |
| `/index.php/`, old `/sitemap.txt`, `/index.html`, arbitrary unknown routes, `/docs/`, `/data/`, `/scripts/`, `/.ai/`, `/.history/`, source assets | Audit targets; live exposure/status not asserted | Check representative HTTP status/headers, unwanted 200/contents, sitemap exclusion and no secrets. Robots.txt is NOT a security boundary |
| `ryan42062001.github.io/ECOG-Website/`, Vercel preview and branch aliases | Nonproduction/staging domains | Must not become indexable duplicates when future public pages shed noindex |

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

**Existing policy conflict to resolve in Stage 2:** `scripts/validate-launch-state.js` currently asserts all 11 active compatibility pages contain **no** noindex, while the proposed launch wants retired/redirect/legacy URLs to stay out of Google. The above routes are *meta refresh HTML*, not guaranteed permanent HTTP redirects; a destination canonical is a signal, not proof of exclusion. Manager must choose (A) actual permanent HTTP redirects through a separately authorized platform/routing scope, or (B) a scoped compatibility noindex/canonical rule plus corresponding validator/tests and explicit source-file expansion. Never silently edit these routes or delete the negative tests. Retired and 404 pages already carry noindex.

## Host and HTTP redirect readiness (NOT YET VERIFIED)

| HTTP request | Target outcome at future indexing release | Evidence gap |
| --- | --- | --- |
| `https://everettchurchofgod.com/` | HTTP 200, exact HTTPS apex canonical, only intended HTML indexed | Canonical source verified, actual current response headers/status not independently recorded |
| `http://everettchurchofgod.com/` | Permanent HTTPS canonical redirect without loops | Record GET/HEAD status and Location chain |
| `https://www.everettchurchofgod.com/` | Permanent redirect to HTTPS apex, no competing indexable www copy | P02 historical owner smoke only, current chain/status needs test |
| `http://www.everettchurchofgod.com/` | Stable canonical HTTPS apex redirect chain | HTTP codes and final Location unverified |
| `/index.html`, trailing-slash/extension aliases and query variants | One preferred canonical, no unintended duplicate indexable content | Current live status/redirect/Google interpretation unverified |
| All `/index.php/...` and unknown/retired routes | Confirm approved 301/noindex/404 behavior, avoid soft 404s | Static meta-refresh observed; HTTP 3xx NOT assumed |
| Preview/staging URLs | Real `X-Robots-Tag: noindex` on every future indexed-source preview, no custom domain bypass | Must test actual response headers; current preview header UNVERIFIED |

Use a read-only status/redirect matrix (`curl -sSIL` and `curl -sSI`, plus GET where HEAD differs), checking HTTPS certificate, Host/Location hops and final canonical. Public URL inspection after launch must compare actual served HTML/header state, not simply GitHub source.

## Existing validator analysis and proposed dual-authority architecture — DO NOT IMPLEMENT NOW

- `scripts/validate-release-candidate.js`: enforces exactly one P02 historical section and its structured **closed hosting/DNS/Pages/Cloudflare/DNSSEC/registrar/indexing** field values. The P02 indexing authority remains historically NOT AUTHORIZED; do not rewrite P02 history for P06.
- `scripts/validate-launch-state.js`: currently reads the **P02** indexing field to choose blocked or authorized mode; checks 12 HTML pages, canonical/OG, sitemap, CNAME/Church JSON-LD, `robots.txt`, 404/retired noindex, and currently demands *no* noindex in 11 active compatibility pages. Existing logic cannot validate P06 indexed-state while preserving P02 history unchanged.
- `scripts/validate-release-candidate.test.js`: 35 existing cases; first-occurrence mutation fixtures for historical P02 generic state/risk/indexing strings. Top-of-file repeated exact fields may divert fixtures, yielding false fails/PASS. Preserve every existing adversarial test, the P02 section and its unique structured fields; avoid new unscoped field names above it.

**Stage 2 proposed explicit new P06 authority:** a unique scoped field inside the P06 phase section, such as `Indexing Release Authority (ECOG-P06): NOT AUTHORIZED` in blocked state. An indexed-source candidate uses a new exact, unique P06 authority value approved *for the frozen candidate*, validated under the P06 heading rather than a P02 field mutation. Its appearance alone does NOT authorize production deployment; P05 completion and Ryan's exact-SHA consent are independent out-of-band gates.

**Two deterministic states, fail closed:** (1) blocked baseline: P02 historic controls intact, P06 NOT AUTHORIZED, all 12 pages carry noindex/nofollow, sitewide Disallow and no Sitemap directive. (2) explicitly future authorized candidate: P02 historic controls unchanged, P06 indexed-candidate authority present exactly once, all 12 approved pages free of noindex, `robots.txt` explicitly crawlable + exact apex Sitemap directive, only 12 sitemap entries, coherent HTTPS canonical/OG and approved legacy/retired policy. Missing/duplicate/decoy/malformed P06 value; any half-unblocked page or blocked robots; extra sitemap page; premature legacy indexing; wrong host; stale authority; unexpected 404 indexing must FAIL. Candidate validation and production permission remain separate: a protected merge requires fresh P05 evidence, exact audit and explicit owner approval.

**Proposed Stage 2 SOURCE/TEST PATH EXPANSION FOR MANAGER REVIEW (NOT AUTHORIZED):** all 12 HTML files in matrix; `robots.txt`; `scripts/validate-launch-state.js`; `scripts/validate-release-candidate.js` (if needed for separate P06 lifecycle/authority shape); `scripts/validate-release-candidate.test.js`; and three P06 docs/lifecycle paths. If legacy compatibility pages, special/retired pages, GitHub Pages routing/headers, Vercel preview protection, workflow, sitemap or any extra test/config must change, request **individual explicit added-path authorization before editing**. No Stage 1 file in that expanded source set is modified.

**Negative test suite extension required** (do not delete the existing 35): unauthorized source unblocks; P02 tampering; missing/duplicate/decoy P06 authority; 11/12 public noindex mismatch; one rogue page indexable when blocked; robots Disallow while authorized/Allow before authorized; sitemap directive missing/wrong host/extra or duplicate `<loc>`; non-apex canonical or OG; 404/retired regression; compatibility route policy violations; no preview header; fake or stale P05/owner approval; unexpected preview host/redirect; rollback blocked state. Run deterministic blocked and authorized fixtures, exact-head FAST, and Manager-controlled FULL, and verify actual HTTP/response-header behavior separately. Never weaken the existing fixture assertions to make tests pass.

## Vercel preview / staging guard — unresolved live-header gate

Read-only Vercel project inspection of `ecog-website-preview` returned only `vercel.app` project domains, with SSO enabled except custom domains; no project custom-domain preview override found in the retrieved domain list. However actual HTTP `X-Robots-Tag` header on a preview remains **UNVERIFIED** because live preview web reader access failed. Vercel documents automatic `X-Robots-Tag: noindex` on genuine Preview deployments, but custom or production-domain assignment can suppress the default. Do NOT infer header proof from project metadata. Before any future source unblock, inspect the exact new preview and alias response headers (`curl -sSI https://<exact-preview-host>/`, then representative pages/GET), insist on `x-robots-tag: noindex`, verify target is Preview and no production/custom-domain override, and test the GitHub `github.io/ECOG-Website/` staging address separately (it might not have Vercel protection). If indexable candidate HTML is accessible on unprotected staging, STOP and seek Manager-approved mitigation. No source/headers/config changes now.

Docs: https://vercel.com/docs/headers/response-headers and https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines.

## Future source, launch, Search Console and rollback gates — planning only

**Stage 2 (requires new Manager scope):** recheck main, source/hosts, P05 pending, all 12 pages, special/legacy policy, Vercel and GitHub staging protection; add strict P06 authority and fail-closed blocked/authorized validator/test fixtures; coherently remove noindex on **exactly twelve** pages and prepare compliant `robots.txt`/Sitemap directive while keeping 404/retired noindex, canonicals and church facts. No partial public exposure or additional source path without Manager permission. FAST → private nonindexable owner preview → punch list → documentation Phase Sync → Manager exact-head FULL + deterministic repeat → immutable HIGH-risk freeze → fresh independent HIGH-risk Auditor in a SEPARATE CHAT. Remediation requires new SHA evidence/audit.

**Stage 3 (not authorized):** only after independent proof P05 registrar transfer complete, owners/DNS/renewal stable, preview/staging protected, frozen SHA audited and Ryan separately authorizes EXACT SHA for production indexing: protected merge, automatic Pages exact-SHA FAST/deploy. Verify all 12 production HTTP 200/canonicals/metadata/headers, robots/Sitemap and HTTPS/www/apex redirects, legacy/retired/404 behavior, no unintended page exposure. THEN owner-authorized GSC live test, submit `https://everettchurchofgod.com/sitemap.xml`, optionally request homepage indexing, track fetch/crawl/indexing/canonical with historical `liberationlighthousechurch.com` anomaly documented without assuming cause. Google indexing is NOT guaranteed.

**Rollback:** on premature indexing/preview exposure, wrong 12-page set, malformed authority, bad DNS/SSL/host/legacy or indexing regression, STOP and obtain separate protected rollback authority for a coherent safe product SHA restoring all 12 noindex and robots sitewide Disallow (never edit P02 historical authority). Verify rollback exact-head CI/Pages, HTTP headers/content, Search Console status; removals/deindexing may lag and need approved follow-up. Do not rely on robots as access control.

**Absolute stop:** pending P05, wrong SHA, no explicit Manager source scope, test bypass, missing negative tests, mixed state, unexpected canonical, unverified preview noindex, non-PASS FULL/fresh independent HIGH-risk audit, or absent Ryan exact-SHA production-indexing authorization.

## Stage 1 boundary and handoff

This draft changes only three P06 documentation files; P02–P04 entire historical CLOSED records in `.ai/CURRENT_PHASE.md`, earlier roadmap bytes, ALL product HTML/CSS/JS, `robots.txt`, `sitemap.xml`, `CNAME`, validators/tests, DNS/Cloudflare/Pages/registrar/DNSSEC and infrastructure remain unchanged. NEW exact-head FAST **must** pass its original 35/35 adversarial tests plus entire validation union; record run/SHA after observation. STOP at READINESS_REVIEW / MANAGER SOURCE-CANDIDATE AUTHORIZATION PENDING. No indexing request/sitemap submission, FULL, freeze, audit, mark-ready, merge, deployment or new source work.

Official resources:
- https://developers.google.com/search/docs/crawling-indexing/block-indexing
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap


## Stage 2A implemented validator hardening and read-only HTTP verification plan

**Stage 2A authority:** [Manager comment 6431997735](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6431997735). This section supersedes the old Stage 1 handoff/pending-code language above; Stage 1 matrix and historical observations are preserved as evidence. **Current status: STAGE2A_VALIDATOR_READY / MANAGER STAGE2B SOURCE AUTHORIZATION PENDING.**

### What is implemented and what it does NOT authorize

- Real branch declaration in P06 section: `P06 Candidate Source Mode: BLOCKED`. The only other accepted value `INDEXABLE_CANDIDATE` is exercised in temporary test directories. It describes a coherent *source test fixture*, not production authority, P05 transfer confirmation, audit status, or Ryan approval. The release authority remains NOT GRANTED.
- `scripts/validate-launch-state.js` now rejects absent, malformed, duplicate, misplaced/decoy or wrong-heading P06 mode; requires historical P02 authority unchanged; fails on mixed HTML/robots mode; checks exact one public robots meta on all twelve, twelve self-canonicals/OG and exact sitemap, excluded retired/404 pages, eleven exact legacy meta-refresh destinations and canonicals, and stricter robots rules. P02 historical state/authorization remains validated and all existing 35 mutation tests retained.
- `scripts/validate-release-candidate.test.js` appends **33** disposable fixture tests. One positive BLOCKED test checks the committed checkout, another positive `INDEXABLE_CANDIDATE` scenario mutates *only temporary copies* of all twelve public HTML files and robots to create a coherent prospective candidate. Negative fixtures reject premature one-page unblocking, an 11/12 mixed candidate, malformed/duplicate/decoy authority, P02 tampering, conflicting robots, wrong/duplicated sitemap and host, invalid canonical/OG, unwanted staging host leak, retired/404 noindex loss, and legacy refresh/canonical/noindex regressions. Synthetic preview-header examples (including absent custom-domain evidence and redirects) exercise a pure `validatePreviewResponseEvidence` helper for URL/target/status/noindex and negative cases; they are NOT actual observed live HTTP headers.
- `scripts/validate-release-candidate.js` was **not changed**. No broad weakening of P02's historical structured fields or original 35 tests. No HTML/CSS/JS/robot/sitemap/CNAME/legacy/staging/redirect change on the real branch.

**Stage 2A interim CI:** [FAST #40437322497](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40437322497) SUCCESS on `2c407248d868ad85f3c5d5112b3b32ad47a8bdac`: **66/66 test cases** with complete validation union. A new exact-head FAST is REQUIRED for the final documentation checkpoint and is recorded on PR #31 only after observation.

### Read-only HTTP evidence procedure (commands for an authorized operator, NOT executed by this Builder)

Run the following on a network with DNS, TLS and access to the exact PR preview. Save response **status, Date, URL, Location chain, Content-Type, X-Robots-Tag**, and for served HTML, actual canonical and robots tags. Follow redirects only after recording the first hop. No mutation, credentials or Search Console indexing actions:

```sh
# Use the exact PR deployment hostname from Vercel deployment metadata.
PREVIEW='https://ecog-website-preview-1gey753ph-ryan-s-team9.vercel.app'
curl --silent --show-error --head --max-time 20 "$PREVIEW/"
curl --silent --show-error --head --max-time 20 "$PREVIEW/about.html"
curl --silent --show-error --location --max-redirs 8 --dump-header - --output /dev/null "$PREVIEW/"
# Require a real x-robots-tag: noindex on HTTP 200 content. A 301/302/401/403
# means the underlying content-header check remains unverified.
# Also check the currently assigned branch alias and Vercel Preview target.

# Check GitHub project/staging behavior separately. No assumptions that
# a Vercel response header applies to github.io.
curl --silent --show-error --head --max-time 20 \
  'https://ryan42062001.github.io/ECOG-Website/'
curl --silent --show-error --location --max-redirs 8 \
  --dump-header - --output /dev/null \
  'https://ryan42062001.github.io/ECOG-Website/'

# Record the first status and subsequent Location chain for each host.
for url in \
  'http://everettchurchofgod.com/' \
  'https://everettchurchofgod.com/' \
  'http://www.everettchurchofgod.com/' \
  'https://www.everettchurchofgod.com/'; do
  curl --silent --show-error --head --max-time 20 "$url"
  curl --silent --show-error --location --max-redirs 8 \
    --dump-header - --output /dev/null --max-time 40 "$url"
done

# All eleven historical compatibility entries, read-only.
for slug in messages contact-us donations services our-pastors \
  what-we-believe ways-to-connect childrens-ministry \
  amplify-students-ministry guys-ministry womens-ministry; do
  url="https://everettchurchofgod.com/index.php/$slug/"
  curl --silent --show-error --head --max-time 20 "$url"
  curl --silent --show-error --location --max-redirs 8 \
    --dump-header - --output /dev/null --max-time 40 "$url"
  # Then inspect GET HTML for refresh=0 and destination canonical;
  # HEAD/Location alone cannot prove a meta-refresh or HTTP 301.
done

# Include additional checks for unknown path HTTP 404, the retired
# ministries/senior-adults.html and index.php/senior-adults-ministry/,
# served sitemap.xml and robots.txt. Do not submit anything to Google.
```

**Evaluation:** actual preview content must have an observed `X-Robots-Tag: noindex` on the preview hostname and representative subpage, along with verified deployment target Preview and no custom-domain override. A synthetic unit test does not prove this header. HTTP 401/403, failed DNS/TLS or inaccessible preview is **UNVERIFIED**, not PASS. The `github.io` staging endpoint must independently demonstrate safe nonindexable behavior for eventual candidate sources; otherwise pause Stage 2B and obtain approved mitigation. For www/apex, capture every status/Location and final HTTPS apex canonical. For eleven meta-refresh URLs, note actual HTTP status rather than claiming permanent server-side redirects from source markup. Capture timestamped evidence and share only nonsecret/public headers.

### Observed results during Stage 2A (limited; not replacements for headers)

- Read-only Vercel connector: project `ecog-website-preview`; Stage 2A interim Git-linked deployment `dpl_2SfvyXiPwgKfC9xkHWRzkUR8Qjm1` is **READY** on SHA `2c407248d868ad85f3c5d5112b3b32ad47a8bdac`, deployment target `null` (Preview), URL `ecog-website-preview-1gey753ph-ryan-s-team9.vercel.app`. The checked project domain list contains only `ecog-website-preview.vercel.app` and no observed custom preview domain override. Neither deployment metadata nor Vercel's [published defaults](https://vercel.com/docs/headers/response-headers) is a substitute for actual headers.
- Direct web reader **could retrieve** rendered `https://everettchurchofgod.com/` page content and the `http://everettchurchofgod.com/` request resolved to the HTTPS apex, but the web reader did NOT expose raw redirect/Location/status headers. No 301/308 assertion is made.
- The exact Vercel branch-alias preview and `https://ryan42062001.github.io/ECOG-Website/` were **INACCESSIBLE** to this environment. `https://www.everettchurchofgod.com/` also did not yield readable evidence. Current live `X-Robots-Tag`, staging exclusion and full www/apex redirect chain therefore remain **UNVERIFIED**.
- One web reader legacy result for `/index.php/messages/` was a **historically cached older page**, not current served HTTP status. No current HTTP 301/200 claim can be made about any of the eleven. Source-only meta-refresh and canonical behavior is checked in CI; real network verification remains **UNVERIFIED**.

### Stage 2B Manager decisions, strict stop and sources

Manager must separately authorize a bounded Stage 2B source/test path expansion, resolve the legacy 11-route indexing policy, and obtain measured Preview and GitHub staging noindex proof *before* any source unblocking. P05 #29 remains OPEN/pending; it is a different, indispensable production-release gate. The eventual HIGH-risk release requires owner-approved exact frozen SHA, Manager FULL, immutable freeze, fresh independent auditor in another chat, P05 verified complete, and separately explicit Ryan consent to production Google indexing.

This Stage 2A draft must remain **nonindexable** and DRAFT / UNMERGED. No FULL, freeze, audit, merge, production deploy, Google sitemap submission/indexing request, registrar/DNS/Cloudflare/Pages/Vercel settings or infrastructure changes.

Official references: [Vercel response headers](https://vercel.com/docs/headers/response-headers), [Vercel preview indexing](https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines), [GitHub Pages custom-domain redirects](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Google redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

## Stage 2B authorized nonproduction source candidate

**Manager authority:** [PR #31 comment #6432299293](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432299293). This Stage 2B statement supersedes the earlier Stage 1/Stage 2A *pending source changes* claims above. Historical GSC, preparation and validator results remain in sequence.

- **Actual DRAFT branch source state:** `P06 Candidate Source Mode: INDEXABLE_CANDIDATE`. Separately, **P06 Production Indexing Release Authority: NOT GRANTED**. A source-mode switch is not owner permission, completion of P05, approval to merge, or permission to submit to Google.
- Exactly twelve approved public pages: each has a single `<meta name="robots" content="index,follow">` replacing the former `noindex,nofollow`. All other page source/metadata bytes remain unchanged. `robots.txt` on this UNMERGED branch is precisely `User-agent: *`, `Allow: /`, `Sitemap: https://everettchurchofgod.com/sitemap.xml`.
- All other files remain unchanged from the authorized baseline, including `sitemap.xml` (12 intended HTTPS apex URLs, not submitted), CNAME, CSS/JS, legacy meta-refresh routes, retired/404 pages, workflow and infrastructure. Cumulative draft PR scope is at most 18 paths (five existing plus these thirteen).
- Main protected production remains separately and fully BLOCKED with page noindex and robots `Disallow: /`. No deployment or production indexing was authorized by this stage.
- Ryan's previous Stage 2A owner-operated checks observed unauthenticated **302 SSO + X-Robots-Tag: noindex** on the preceding exact Vercel immutable preview and branch alias; GitHub project staging root and /about.html 301 to canonical production; https-www and HTTP apex 301 to HTTPS apex; legacy /index.php/messages/ served 200 meta-refresh (NOT 301). Other ten legacy HTTP statuses remain UNVERIFIED. Those results do **not** prove protections on the NEW candidate HEAD; independently reverify exact immutable URL home/about and branch alias including real status/headers and domain assignments.
- If the new candidate publicly serves indexable 200 without noindex, or SSO protection is bypassed (including any custom domain), **STOP** immediately; do not loosen provider SSO or publish to production. Reproducible read-only curl procedures appear in the Stage 2A section.
- NEW exact-head FAST must confirm original 35 + 33 synthetic tests (**68/68 minimum**), complete validation union including intended candidate mode and legacy/retired/404 invariants. Stage 2B review requires authenticated Ryan owner preview and Manager Phase Sync; HIGH-risk exact-head FULL, immutable freeze, independent audit, verified P05 registrar transfer and separate owner exact-SHA release approval are subsequent gates.

**STOP at STAGE2B_PREVIEW_READY.** No FULL, freeze, audit, PR ready, merge, Pages deployment, Google sitemap submission, Search Console indexing request, DNS/Cloudflare/registrar or other infrastructure mutations.
