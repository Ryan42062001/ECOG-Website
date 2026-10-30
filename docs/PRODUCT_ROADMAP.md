# Product roadmap

## Historical progression

- Phase 1 foundation — completed
- Phase 2 design system — completed
- Phase 3 homepage — completed
- Phase 4 New Here — completed
- Phase 5 About & Leadership — completed
- Phase 6 Ministries — completed
- Phase 7 Messages — completed
- Phase 8 Events — completed
- Phase 9 Giving & Contact — completed
- Phase 10 content migration/reconciliation — completed
- Phase 11 accessibility / SEO / performance / quality — completed
- Phase 12 launch-validation scaffolding — merged/completed as pre-launch infrastructure
- ECOG-P01 source-readiness work — completed/closed; production launch not authorized

Production hosting/domain cutover is complete. Production indexing remains separately controlled and NOT AUTHORIZED. PR #15 is closed unmerged as historical evidence.

## ECOG-P01 — Production Cutover & Launch Verification

- State: CLOSED
- Risk: HIGH
- Status: CLOSED / PRODUCTION LAUNCH NOT AUTHORIZED

Closure outcome:

1. PR #15 was reconciled against current canonical main without copying stale product blobs.
2. Sunday worship was confirmed by the Product Owner as 10:00 AM.
3. `everettchurchofgod.com` was approved as the primary production host, with `www` intended to redirect/alias to the apex.
4. Launch without a giving link was approved unless an external destination is independently verified.
5. The source-readiness candidate passed FAST, exact-head FULL PHASE CI, and fresh independent HIGH-risk audit.
6. PR #18 was explicitly authorized by Ryan and merged to canonical main at `9b369af46cee0f4d3fcaf2772b007782287a8e89`.
7. Post-merge FAST run `36955932363` passed.
8. The independent audit's stale lifecycle-header finding is corrected by Closure Sync.
9. No production launch, DNS/Cloudflare mutation, Pages enablement/settings/custom-domain mutation, CNAME activation, or production indexing was authorized by the phase merge.

Remaining production-launch prerequisites:

1. Establish Ryan-controlled registrar access and domain ownership/renewal control.
2. Establish Ryan-controlled Cloudflare/DNS access or a safe zone handoff.
3. Preserve the complete DNS/routing/TLS configuration, including MX/SPF/DKIM/DMARC and every non-web record.
4. Establish and verify a Ryan-controlled hosting target.
5. If GitHub Pages is selected, verify enablement, source/build health, project URL, noindex behavior, custom-domain readiness, and HTTPS/certificate state.
6. Preserve and test mail and other non-web services through any nameserver or DNS change.
7. Reverify launch-time public facts, compatibility routes, indexing safeguards, sitemap/canonical behavior, and the external giving boundary.
8. Obtain a separate explicit Product Owner authorization for the exact production-launch actions.

Kingdom Church Websites controlled the observed Cloudflare zone during ECOG-P01, while Ryan-controlled zone access remained unestablished. That operational handoff remains a production-launch blocker, not a claim of completed launch readiness.


## ECOG-P02 — Production Hosting & Domain Cutover

- State: CLOSED
- Risk: HIGH
- Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED

Objective:

Move the already-verified ECOG site from staging hosting to a controlled production-domain cutover without losing DNS authority, breaking unrelated domain services, prematurely enabling indexing, or depending on the cancelled Kingdom hosting environment.

### ECOG-P02 closure outcome

- Production domain cutover: VERIFIED COMPLETE.
- Canonical production host: `https://everettchurchofgod.com`.
- `www` production entry point: owner smoke-tested successfully.
- Authoritative DNS: Ryan-controlled Cloudflare on `jaime.ns.cloudflare.com` / `meiling.ns.cloudflare.com`.
- GitHub Pages DNS check: SUCCESS.
- HTTPS certificate: ISSUED; Enforce HTTPS enabled.
- Production indexing: NOT AUTHORIZED and remains blocked.
- Registrar transfer/EPP: NOT AUTHORIZED; deferred to a later separately controlled action.
- DNSSEC/DS changes: NOT AUTHORIZED.
- Canonical cutover merge SHA: `7637332c3c250e15a723c0c14118c726279bfdd9`.
- Post-merge FAST: `37130439079` SUCCESS.
- Pages deployment: `37130438697` SUCCESS.

Activation / pre-cutover state (historical):

1. ECOG-P01 is CLOSED and source readiness is complete.
2. GitHub Pages is enabled from canonical `main` / `/(root)`.
3. GitHub Pages deployment run `36957798523` succeeded on `fdcb14aede80215f45b898dd725e1ae633afae49`.
4. Owner preview verified desktop, mobile/responsive navigation, and the custom 404 on the GitHub Pages staging URL.
5. A Ryan-controlled Cloudflare zone exists but is still pending nameserver delegation.
6. The new Cloudflare zone is prepared with GitHub Pages website DNS records.
7. eNom is the current registrar identified by the Kingdom handoff and an EPP/auth code is available.
8. Kingdom hosting/Cloudflare service is expected to terminate October 2, 2026.
9. The domain is not used for email.

Phase requirements:

1. Independently verify the staging host and current repository launch-state safeguards.
2. Record the exact Cloudflare/registrar handoff state and cutover dependencies.
3. Define the exact GitHub Pages custom-domain and repository `CNAME` strategy without activating it before authorization.
4. Define the exact nameserver transition from Kingdom's Cloudflare nameservers to Ryan's assigned Cloudflare nameservers.
5. Verify DNSSEC/DS-record prerequisites before any nameserver mutation.
6. Preserve production indexing blocks during the hosting/domain cutover.
7. Define verification for apex, `www`, HTTPS/certificate provisioning, routing, legacy routes, and custom 404 after delegation.
8. Define rollback/continuity behavior for failure before and after Kingdom hosting termination.
9. Keep registrar transfer separate from DNS activation; use the EPP code only after the Ryan-controlled Cloudflare zone is active and the transfer prerequisites are verified.
10. Obtain explicit Product Owner authorization for the exact production cutover mutations before performing them.
11. After successful domain/hosting cutover, treat production indexing activation as a separately controlled release decision.

Owner-preview punch-list evidence (historical):

1. A public lookup reported no parent DS record; this clears the preview-time active-DS blocker only.
2. DS and current authoritative NS must be queried again immediately before delegation; missing, inconsistent, or inconclusive evidence is a STOP.
3. Ryan currently lacks eNom control-panel access, so an identified authorized registrar operator remains required.
4. Any GitHub-created operational `main:/CNAME` commit must be captured by exact SHA, validated by FAST, and reconciled as post-cutover/closure evidence without silently retargeting the pre-cutover audit SHA.

Post-audit cutover remediation (historical):

1. Previous immutable audit target `c4dc1357c0d363d0a5f43a305a4ad99d808e20b4` passed the independent HIGH-risk audit.
2. Product Owner production-cutover authorization is recorded in PR #20 comment `5969764264`.
3. The attempted GitHub Pages Custom Domain save for `everettchurchofgod.com` safely failed because Protect Main blocked GitHub's direct `CNAME` commit.
4. Manager remediation authorization is recorded in PR #20 comment `5969870029`; Protect Main remains unchanged.
5. The replacement strategy carries the exact root `CNAME` through PR #20's protected path.
6. The replacement SHA requires new FAST, exact-head FULL, immutable freeze, and targeted fresh HIGH-risk re-audit; the previous audited SHA is not silently retargeted.
7. Production launch, DNS changes, Pages custom domain, and Cloudflare cutover are authorized but not represented as completed.
8. DNSSEC changes, registrar transfer, and production indexing remain NOT AUTHORIZED.
9. Failed remediation head `c231fb0c0449ce0d10fe3bd6f9a520bc20b9f46c` produced FAST run `37128476415`: FAILURE in `scripts/validate-launch-state.js`; its 26 release-shape adversarial tests had already passed.
10. Manager scope expansion in PR #20 comment `5969998505` authorizes the seventh cumulative path so hosting and indexing validation can be separated.
11. Custom-domain hosting does not authorize search indexing. The current authorized CNAME must coexist with active-page `noindex,nofollow` and the blocking `robots.txt` until a later separate indexing release.
12. Expanded-scope head `e3e74e402b9c3892a7bcacebe1fe686363b0e237` produced FAST run `37129324800`: FAILURE with 33/34 tests passing; the sole failure was an unanchored `Allow:` directive regex matching inside `Disallow:`. The bounded replacement anchors directives to complete lines.


## ECOG-P03 — Homepage Facebook Spotlight

- State: CLOSED
- Risk: LOW
- Status: CLOSED / FACEBOOK HOMEPAGE RELEASE VERIFIED
- Manager activation: [Issue #23](https://github.com/Ryan42062001/ECOG-Website/issues/23)
- Original canonical baseline: `8b78795081f66c72a31432e6e62cc7670decfa47`
- Original feature branch: `phase/ecog-p03-homepage-facebook-spotlight`
- Release PR: [#24](https://github.com/Ryan42062001/ECOG-Website/pull/24) — MERGED / CLOSED
- Frozen approved release candidate: `ca84a8930249e127551280bd0b56d6377debed7d`
- Canonical merge SHA: `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd`
- Closure Sync: separate `phase/ecog-p03-closure-sync` documentation-only branch and DRAFT PR; separately authorized merge required
- Indexing: NOT AUTHORIZED

### Released scope and owner acceptance

Preserved the existing cyan **Plan Your Visit** and outlined **Watch a Message** hero actions, added the matching outlined **Visit Our Facebook** pill button linking to https://www.facebook.com/EverettCOG/, and retained the separate **Stay Connected With Our Church Family** section immediately after service times. The Facebook links are accessible external links with new-tab context; there is no embedded feed, SDK, tracker, new font, authentication, or new library.

Ryan requested the hero correction after an initial mobile preview, then expressly accepted the corrected three-button presentation. After the merged release, Ryan opened the production homepage and confirmed all three hero buttons, including the outlined Facebook action, appear as expected. That confirmation is **owner-observed homepage production smoke evidence**, not independently established coverage for every route. Manager acceptance and Closure Sync authorization: [PR #24 comment 6428217574](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574).

### Exact release and historical validation evidence

| Stage | SHA / evidence | Verified result |
| --- | --- | --- |
| Initial candidate FAST | [40401573279](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401573279) | FAILURE (historical) |
| Initial implementation FAST | [40401849954](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401849954) | FAILURE (historical, 30/35 adversarial tests) |
| First-preview head | `346c239118b820f1e67cad6b992dd5e91bb24096`; [FAST 40402008658](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40402008658) | SUCCESS (historical, before hero correction) |
| Manager punch list | [PR #24 comment 6427620205](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427620205) | Outlined hero Facebook button authorized |
| Corrected owner-preview head | `4b37841328d1f501dc5b96ae3b0d7026c049c1e3`; [FAST 40404116363](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40404116363) | SUCCESS, 35/35 adversarial tests |
| Owner preview acceptance and Phase Sync authorization | [PR #24 comment 6427794726](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726) | Preview design accepted, not itself merge/deploy authority |
| Frozen Phase Sync candidate | `ca84a8930249e127551280bd0b56d6377debed7d`; [FAST 40405308945](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40405308945) | SUCCESS, 35/35 adversarial tests |
| Protected release merge | PR #24; `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd` | MERGED / CLOSED |
| Post-merge canonical FAST | [40406287504](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406287504) | SUCCESS on exact canonical SHA |
| GitHub Pages deployment | [40406286224](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406286224) | SUCCESS; build and deploy on exact canonical SHA |
| Post-production owner homepage smoke | [Manager comment 6428217574](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574) | Three hero actions observed and accepted |

### Closure boundaries

The released PR #24 touched only the five originally approved paths: `index.html`, `assets/css/main.css`, `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, and `docs/ecog-p03-homepage-facebook-spotlight.md`.

Closure Sync itself is limited to the **three documentation paths**. P02 remains CLOSED with all original authorization fields and closure evidence unchanged. Canonical production hosting is not permission to index: active-page `noindex,nofollow` and `robots.txt` sitewide `Disallow: /` remain in force; production indexing, DNSSEC changes and registrar transfer remain NOT AUTHORIZED. No HTML, CSS, JS, contact, CNAME, sitemap, metadata, DNS/Cloudflare, Pages configuration, or infrastructure changes are part of Closure Sync.

Completion of documentation-only Closure Sync requires a NEW exact-head FAST on its own HEAD and Manager review. The Closure Sync draft PR must not be merged or deployed by the Builder. ECOG-P04 source work is separate and does not begin in this assignment.

## ECOG-P04 — Facebook Hero Branding & Homepage Phone Visibility

- State: CLOSED
- Risk: LOW
- Status: CLOSED / FACEBOOK HERO BRANDING & HOMEPAGE PHONE RELEASE VERIFIED
- Contract: [Issue #25](https://github.com/Ryan42062001/ECOG-Website/issues/25)
- Manager closure authority: [PR #27 comment 6430627525](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430627525)
- Original canonical baseline: `7037d42005ca50462c65b52c132b6ab277157ce8`
- Owner-approved product-source SHA: `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`
- Frozen release HEAD: `c995fc16a0b9923037261e41639bec9f806a4567`
- Release PR: [#27 — MERGED / CLOSED](https://github.com/Ryan42062001/ECOG-Website/pull/27)
- Canonical merge SHA: `a9207c879220c0a8b121eabae0155c9cfcf1aa58`
- Closure branch: `phase/ecog-p04-closure-sync` — documentation-only DRAFT PR; separate protected merge permission required
- Production Indexing: NOT AUTHORIZED

### Released scope

The existing third hero action **Visit Our Facebook** alone became the Facebook-blue `#0866FF` filled pill with white decorative inline f logo and white text, darker hover and visible focus. The existing first cyan **Plan Your Visit**, second outlined **Watch a Message**, mobile full-width stacking, official Facebook destination/new-tab disclosure and standalone Facebook spotlight stay unchanged. A fourth service-strip item now shows **Call Us — 814-652-9287** linked to `tel:+18146529287`, preserving Sunday Worship 10:00 AM, Wednesday Bible Study 7:00 PM and Everett PA, with home-scoped 4/2/1 responsive layout and no Contact page changes.

### Source approval, release and verification history

| Stage | Exact evidence | Result |
| --- | --- | --- |
| Approved owner preview product | `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`, [FAST #40418871876](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40418871876) | SUCCESS, 35/35 adversarial tests; Vercel preview READY |
| Design acceptance | [Owner comment #6430262021](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430262021) | Both designs approved; not yet production authorization |
| Documentation-only Phase Sync | `c995fc16a0b9923037261e41639bec9f806a4567`, [FAST #40424969206](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40424969206) | SUCCESS, 35/35 adversarial tests |
| Manager exact-head FULL | [#40425362804](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425362804) | SUCCESS, including deterministic repeat |
| Manager immutable LOW-risk freeze | [Comment #6430489746](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430489746) | Frozen at `c995fc16a0b9923037261e41639bec9f806a4567`; independent audit not required at LOW risk |
| Separate explicit owner merge and Pages publication authorization | [Comment #6430512182](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430512182) | Approved the precise P04 release; no indexing/infrastructure authorization |
| Protected release merge | [PR #27](https://github.com/Ryan42062001/ECOG-Website/pull/27), canonical SHA `a9207c879220c0a8b121eabae0155c9cfcf1aa58` | MERGED / CLOSED |
| Post-merge canonical FAST | [#40425685834](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685834) | SUCCESS on exact merge SHA |
| GitHub Pages build and deployment | [#40425685263](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685263) | SUCCESS on exact merge SHA, including build and deploy |
| Production-homepage owner smoke | [Manager comment #6430627525](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430627525) | Ryan observed and liked both changes on live homepage; not comprehensive dialer/keyboard/device/route testing |

### Closure controls

P04 is **CLOSED / FACEBOOK HERO BRANDING & HOMEPAGE PHONE RELEASE VERIFIED** as a product-release lifecycle outcome. The separate Closure Sync is an administrative three-file draft PR, not an additional product release. This closure sync leaves product `index.html` blob `58014608ba0490ed3706512f68ce51841fdcad7b`, `assets/css/main.css` blob `935c03f82d1d51d891383f46e9cfd34783ceb130`, Contact page, CSS/JS, all other site assets and legacy routes unchanged.

All pre-P04 roadmap text above remains exact, including P02 and P03 historical CLOSED evidence. P02's structured authority and P03's source closure remain protected. Active-page `noindex,nofollow` and `robots.txt` `Disallow: /` remain; Production Indexing, DNSSEC, registrar/EPP and infrastructure changes are NOT AUTHORIZED. No CNAME, sitemap, canonical/OG metadata, Pages settings, DNS, Cloudflare, TLS or production behavior is changed.

Closure Sync requires a **NEW exact-head FAST**, Manager independent review and separate explicit protected-PR merge authorization. The Builder must STOP without FULL, freeze, audit, PR ready, merge, deployment or new-phase source work.


## ECOG-P06 — Google Search Indexing Readiness & Controlled Launch

- State (ECOG-P06): PUNCH_LIST
- Risk (ECOG-P06): HIGH
- Status (ECOG-P06): PUNCH_LIST REMEDIATION VERIFIED / MANAGER FULL, NEW FREEZE AND INDEPENDENT RE-AUDIT PENDING
- Manager contract: [Issue #30](https://github.com/Ryan42062001/ECOG-Website/issues/30)
- Stage 2A authority: [#6431997735](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6431997735)
- Stage 2B authority: [#6432299293](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432299293)
- Manager Phase Sync authority and owner-preview acceptance: [#6432931901](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901)
- Original canonical base: `27051868f0ebb2432efe19e5f5b1634b4876c27d`
- Accepted indexing-candidate product SHA: `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`
- Accepted exact product FAST: [#40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) — SUCCESS, 68/68 plus complete validation union
- Pull request: [#31](https://github.com/Ryan42062001/ECOG-Website/pull/31) — DRAFT / OPEN / UNMERGED
- Branch source mode: `INDEXABLE_CANDIDATE` / Production indexing release authority **NOT GRANTED**
- P05 status: [Issue #29](https://github.com/Ryan42062001/ECOG-Website/issues/29) OPEN — operational registrar transfer complete, **final ownership/email/MFA/billing assurance pending** ([evidence](https://github.com/Ryan42062001/ECOG-Website/issues/29#issuecomment-6432876462)).
- Indexing production release: NOT AUTHORIZED.

### Accepted owner preview and candidate boundaries

Ryan accepted the unchanged visual design and intended **12 public indexing pages** at exact SHA `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`. In that unmerged source candidate, precisely twelve intended HTML pages have one `index,follow` robots meta; draft-branch `robots.txt` is exactly `User-agent: *`, `Allow: /` and `Sitemap: https://everettchurchofgod.com/sitemap.xml`. Original titles/descriptions/apex self-canonicals/OG URLs, church facts, page content/links, 12-entry `sitemap.xml`, CSS/JS/assets, CNAME, 11 active legacy meta-refresh routes and retired/404 pages are unchanged. **Protected live `main` still has 12 `noindex,nofollow` pages and robots `Disallow: /`**; no Google submission/indexing request has been made.

The exact source FAST [#40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) passed all 68 tests (original 35 cases + 33 Stage 2A fixtures), full launch/content/site/performance validations. Owner's 2026-10-26 23:03 ET read-only HEAD evidence ([comment #6432713858](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432713858)) proves **302 to Vercel SSO with `X-Robots-Tag: noindex`** on immutable source preview root, /about.html and branch alias. It does not prove authenticated HTTP 200 header coverage. GitHub Pages project staging root/about previously redirected 301 to canonical production; ten additional legacy HTTP statuses remain unverified.

### Timeline and fail-closed safeguards

- Stage 1: [FAST #40436219160](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40436219160) SUCCESS, 35/35; 12-page SEO/sitemap/GSC historical inspection recorded.
- Stage 2A: [FAST #40437724407](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40437724407) SUCCESS, 68/68; earlier [#40437658742](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40437658742) FAILED 67/68 (preview-check test assertion wording; later corrected). Unique P06 candidate source mode validated separately from historical P02 restriction.
- Stage 2B first candidate: [FAST #40439468163](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439468163) FAILED 37/68 due to old BLOCKED fixture assumptions; original 35 test bodies preserved, fixtures isolated in temporary blocked snapshot.
- Owner-accepted exact Stage 2B product: `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`, [FAST #40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) SUCCESS 68/68. Owner acceptance and docs-only Phase Sync authorized in [#6432931901](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901).
- Phase Sync: ONLY `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, `docs/ecog-p06-search-indexing-readiness.md` changed. The cumulative PR remains **18 authorized paths** (3 docs + 2 scripts + 12 HTML + robots); both scripts and the approved 12+robots product blobs are unchanged. The Phase Sync commit requires its own **NEW exact-head FAST**, which is recorded in PR #31 after observation rather than falsely copied from the earlier source run.

Earlier P02/P03/P04 CLOSED history above is preserved byte-for-byte. Historical P02 `Production Indexing: NOT AUTHORIZED` remains intact. P05 Cloudflare registration/transfer operationally confirmed Active, transfer within last 60 days, expiry 2027-11-28, auto-renew on, but legal/church registration authorization, church-controlled email verification, MFA/admin/backup access and billing assurance are still outstanding. Do not declare P05 CLOSED or indexing authorized.

**STOP at FREEZE_READY / OWNER PREVIEW ACCEPTED / MANAGER FULL PENDING.** Manager next reviews Phase Sync SHA/FAST and separately controls FULL, HIGH-risk immutable freeze, fresh independent HIGH-risk audit, P05 final release prerequisites and Ryan's subsequent exact-frozen-SHA protected-merge/indexing consent. No Builder FULL, freeze, audit, PR-ready, merge, deploy, sitemap submit, GSC indexing request, registrar/DNS/Cloudflare/Vercel/Pages change or production release.

### Independent audit punch-list — Jekyll publish boundary remediation

Manager remediation authority: [PR #31 comment #6433412720](https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6433412720). Owner's read-only live HTTP checks on protected `main` showed direct requests to `docs/PRODUCT_ROADMAP.md` and `scripts/validate-launch-state.js` return **200**, making the former frozen candidate inadequate for a controlled Google indexing release. Neither file was asserted to expose credentials. The previously immutable SHA `aa9ea1599b947f006d4947a9ed4fefd210fea3bc` is **STALE / NO LONGER VALID FOR AUDIT OR RELEASE**.

A focused `_config.yml` excludes only engineering-only paths `docs/`, `scripts/`, `.ai/`, `.github/`, `.history/`, `README.md`, and `AGENTS.md`. The `data/` directory is deliberately NOT excluded: both browser-required `data/events.json` and `data/sermons.json` are retained and verified byte-identical to source, along with all twelve public HTML pages, twelve legacy compatibility files, retired/404 pages, CSS/JS, sitemap, CNAME and robots. FIVE new negative/positive tests use the actual output of a scratch build with `ghcr.io/actions/jekyll-build-pages:v1.0.13`, the same GitHub Pages production Jekyll builder. The artifact scanner verifies engineering documents/scripts are absent and necessary public files present. All prior 68 cases are preserved.

The code-only remediation SHA `b7ad1d3900b8c52b531c0e03688bc0207816d2d1` passed [FAST #40448024210](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40448024210) **SUCCESS, 73/73**, complete validation union, FULL skipped. NEW exact-head FAST is required for the P06 documentation lifecycle checkpoint and will be recorded in PR #31 after observation. Exactly **19 authorized cumulative PR paths**: original 18 plus only `_config.yml`. Twelve accepted public HTML/robots blobs, scripts other than the bounded existing test file, CSS/JS, JSON content, legacy routes, sitemap, CNAME and workflows stay byte-identical.

P06 source mode remains `INDEXABLE_CANDIDATE` on **DRAFT / UNMERGED** PR only. Production indexing release authority remains **NOT GRANTED**; protected `main` retains original noindex and robots Disallow. Passing Jekyll output tests proves a representative build, **not that existing live 200 engineering URLs have disappeared**; only a later separately authorized deployment permits production HTTP recheck. Existing preview SSO/noindex evidence applies to the earlier exact SHA; new preview protection must be rechecked. P05 registration transfer is operationally complete but final administrative assurances remain outstanding.

**STOP for Manager**: new exact-head FULL and deterministic repeat, NEW immutable HIGH-risk freeze, FRESH independent re-audit, final P05 administrative control checks, and Ryan's separate exact-frozen-SHA protected merge/indexing authorization. No Builder FULL, freeze, audit, merge, publishing, sitemap submission, Search Console indexing request or infrastructure changes.


## ECOG-P07 — Post-Launch Navigation, Belief Cards & Apple/Google Maps

- State (ECOG-P07): FREEZE_READY
- Risk (ECOG-P07): MEDIUM
- Status (ECOG-P07): FREEZE_READY / OWNER PREVIEW ACCEPTED / MANAGER FULL PENDING
- Manager activation: [Issue #32](https://github.com/Ryan42062001/ECOG-Website/issues/32)
- Manager Phase Sync authority and exact owner acceptance: [PR #33 comment #6512501798](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512501798)
- Protected production main: `b8f5d1a13413d2145066e8dc7920048b83fe0233` — unchanged
- Owner-accepted product SHA: `9ba114575baf0a7b25b1b8084edd66e603f7307d`
- Product [exact-head FAST #40627455361](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40627455361): SUCCESS, **79/79**, complete validation union, FULL skipped
- Protected preview: [owner-operated 3/3 anonymous 302 SSO + `X-Robots-Tag: noindex` #6512456973](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512456973)
- Branch `phase/ecog-p07-post-launch-usability`; PR #33 **DRAFT / OPEN / UNMERGED**
- Production protected merge / Pages deployment: **NOT AUTHORIZED**

### Owner-accepted P07 usability package

The Product Owner explicitly approved the final immutable preview at `9ba114575baf0a7b25b1b8084edd66e603f7307d`, replying “Yep everything looks good.” The accepted three changes are **Contact after Give in the shared desktop/mobile header**, **seven dark and horizontally centered H3 headings on white About → What We Believe cards with all doctrinal paragraphs preserved and left-aligned**, and **clearly labeled Apple Maps FIRST / original Google Maps SECOND** directions options on Home, New Here and Contact. The final belief-heading punch-list change added only `.about-beliefs .about-value-card h3{text-align:center}` alongside the earlier scoped contrast correction; original About text is unchanged. This is owner preview acceptance, not independent exhaustive viewport, keyboard or platform coverage and not production release permission.

Owner-operated anonymous read-only HEAD responses for immutable preview root, immutable `/about.html`, and branch preview alias showed **HTTP 302 → Vercel SSO plus `X-Robots-Tag: noindex` on all three tested requests**, documented in [Manager evidence](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512456973). These tests concern the accepted product SHA, not authenticated 200 responses or any new docs-only preview SHA.

All **73 original P06/P02 tests plus six P07 regression tests** passed exact-head FAST [#40627455361](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40627455361) — SUCCESS, 79/79. The production-matched Jekyll generated-artifact boundary remains part of the union; no P06 blocked/indexable fixtures were weakened. The follow-on Phase Sync changes **only** `.ai/CURRENT_PHASE.md` (top P07 section), this appended P07 roadmap section and `docs/ecog-p07-post-launch-usability.md`. The exact same nine P07 PR paths remain within the eleven-path maximum. Accepted product blobs, original roadmap before P07 and P06/P02–P04 phase history remain byte-identical; a distinct Phase Sync exact-head FAST must be verified and recorded on PR #33 after it runs.

P05 Issue #29 is CLOSED. P06 PR #31 merged and production Pages/FAST passed at the protected `main` baseline `b8f5d1a13413d2145066e8dc7920048b83fe0233`; P06 Issue #30 is separately OPEN / LAUNCHED–GSC MONITORING. P07 has no authority to modify P06 Google indexing, `robots.txt`, `sitemap.xml`, `_config.yml`, CNAME, Events/Sermons JSON, payment provider, CI workflow or production infrastructure.

**STOP at FREEZE_READY / OWNER PREVIEW ACCEPTED / MANAGER FULL PENDING.** Manager independently verifies new exact-head FAST, initiates any later FULL and deterministic repeat, declares an immutable MEDIUM-risk freeze and commissions a fresh independent Auditor in another chat. A separate explicit Ryan exact-frozen-SHA protected merge and Pages release approval is required; no Builder FULL, freeze, audit, PR-ready, merge, deploy, Search Console submission or infrastructure/provider action.
