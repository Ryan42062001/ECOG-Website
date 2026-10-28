# Current phase

## ECOG-P06 — Google Search Indexing Readiness & Controlled Launch

State (ECOG-P06): PUNCH_LIST
Risk (ECOG-P06): HIGH
Status (ECOG-P06): PUNCH_LIST REMEDIATION VERIFIED / MANAGER FULL, NEW FREEZE AND INDEPENDENT RE-AUDIT PENDING
Manager Contract: https://github.com/Ryan42062001/ECOG-Website/issues/30
Manager Stage 2A Authorization: https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6431997735
Manager Stage 2B Authorization: https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432299293
Manager Documentation Phase Sync Authorization: https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901
Manager Audit Punch List Remediation Authorization: https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6433412720
Owner Preview Acceptance: https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901
Original Canonical Base: `27051868f0ebb2432efe19e5f5b1634b4876c27d`
Owner-Accepted Product Source SHA: `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`
Owner-Accepted Product FAST: [40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) — SUCCESS (68/68)
Feature Branch: `phase/ecog-p06-indexing-readiness`
Pull Request: #31 — DRAFT / OPEN / UNMERGED
Execution: Regular Chat / SAME P06 Primary Builder
P06 Candidate Source Mode: INDEXABLE_CANDIDATE
P06 Production Indexing Release Authority: NOT GRANTED
P05 Dependency: Issue #29 — REGISTRAR TRANSFER OPERATIONALLY CONFIRMED / FINAL OWNERSHIP, EMAIL, MFA AND BILLING ASSURANCES PENDING

### Controlling P06 readiness state

Ryan explicitly accepted the unchanged visual/content design and the coherent prospective 12-page indexing candidate at exact product SHA `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`, as recorded by Manager in https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901. This is owner preview acceptance only: not independent testing of every route, device, dialer, keyboard interaction, or live public indexing; not authorization to merge, deploy, submit the sitemap, request indexing or modify infrastructure. The Manager authorized ONE documentation-only Phase Sync on the same draft PR via https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432931901.

The product source is intentionally **indexable only within this UNMERGED draft candidate**: exactly the twelve approved public HTML pages use a single `index,follow` robots meta; branch `robots.txt` has `User-agent: *`, `Allow: /`, `Sitemap: https://everettchurchofgod.com/sitemap.xml`. Titles, descriptions, HTTPS apex canonicals/OG, church facts, JSON-LD, CSS/JS, navigation, legacy compatibility/retired/404 routes, exact twelve-URL sitemap and CNAME are preserved. **Production protected `main` remains fully blocked**: all twelve live public HTML pages contain `noindex,nofollow`, root `robots.txt` retains sitewide `Disallow: /`, and no sitemap has been submitted to Google.

Exactly **18 cumulative authorized PR paths** remain: the three P06 documentation files, two existing P06 validator/test scripts, twelve approved public HTML pages and `robots.txt`. This Phase Sync changes **only the three P06 documentation files**. The accepted product SHA `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722` passed exact-head FAST [#40439661687](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40439661687) — **SUCCESS / 68 of 68**, complete validation union. The NEW Phase Sync HEAD/FAST must be observed and recorded on PR #31; the historical product FAST does not validate a different HEAD. P02/P03/P04 CLOSED records below, historical P02 indexing restriction, old 35 adversarial cases plus 33 added fixtures, both P06 scripts and every other source file remain unchanged by this commit.

**Preview isolation verified for owner-approved product SHA, not authenticated content:** owner-operated HTTP HEAD checks on 2026-10-26 23:03 ET showed **302 to Vercel SSO plus `X-Robots-Tag: noindex`** for the immutable deployment root, its `/about.html` page, and branch alias (https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6432713858). Exact product deployment `dpl_AqFCuBr9yojFjpopqSJVqMMjPL52` was READY at `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`. This is proof of the observed *unauthenticated redirect barrier*, not a header observed on authenticated 200 HTML; any new docs-only preview SHA needs its own 302/noindex check or an honestly unresolved note. GitHub Pages staging root and about path previously returned 301 to canonical production; ten of eleven legacy live HTTP statuses remain unknown. No unsupported additional HTTP-status or Google-crawl claim is made.

**P05 correctly characterized:** Owner-observed Cloudflare Registrar domain UI showed registration **Active**, transfer within the last 60 days, expiry **2027-11-28**, auto-renew on, DNSSEC off and stable existing Pages DNS records. Operational registrar transfer was completed, per Manager P05 evidence https://github.com/Ryan42062001/ECOG-Website/issues/29#issuecomment-6432876462. However P05 Issue #29 is still OPEN: final authorization of registered name holder, church access to/verification of registrant email, control of Cloudflare administration with MFA/backup access, and payment/renewal billing assurance have NOT been formally closed. The operational transfer is NOT itself final P05 phase closure or indexing-publication permission. Do not expose private contact details or TXT values.

**Historical source and CI sequence:** Stage 1 FAST #40436219160 SUCCESS 35/35; Stage 2A validator hardening #40437724407 SUCCESS 68/68, following earlier fixture evidence and documented #40437658742 FAILURE 67/68 (assertion text corrected). Initial Stage 2B source #40439468163 FAILURE 37/68 due to blocked-state fixture assumptions; preserving all original 35 case definitions and isolating the historical blocked snapshot corrected it, then owner-accepted exact source FAST #40439661687 SUCCESS 68/68. All failures remain recorded honestly, not reclassified as PASS.

**STOP: FREEZE_READY / OWNER PREVIEW ACCEPTED / MANAGER FULL PENDING.** Manager independently reviews the documentation-only Phase Sync SHA and NEW exact-head FAST before deciding whether to run Manager-controlled FULL. Subsequent immutable HIGH-risk freeze and FRESH independent HIGH-risk audit in a different chat, administrative P05 completion, and Ryan's separately explicit **exact frozen SHA** protected-merge/production-indexing authorization are distinct future gates. No Builder FULL, freeze, auditor, PR ready transition, merge, deployment, Google sitemap submission/indexing request, DNS, registrar, Cloudflare, Vercel, Pages setting, secrets or infrastructure change.

### Jekyll publish-boundary audit punch-list remediation — controls current stage

An Independent HIGH-risk audit identified a release-blocking publish-scope defect. Owner-operated production HTTP GET/HEAD evidence showed `/docs/PRODUCT_ROADMAP.md` and `/scripts/validate-launch-state.js` publicly served **HTTP 200** on protected `main`; directory-only 404 observations had been insufficient to establish individual-file safety. The Manager authorized a bounded nonproduction fix in https://github.com/Ryan42062001/ECOG-Website/pull/31#issuecomment-6433412720. This is **not** an asserted secret leak; however enabling Google crawling would risk indexing engineering documents or validation code.

The remediation adds root `_config.yml` with a narrow Jekyll `exclude` list for `.ai/`, `.github/`, `.history/`, `docs/`, `scripts/`, `README.md` and `AGENTS.md`, without excluding `data/` or other real site assets. The two required browser-fetched `data/events.json` and `data/sermons.json` remain published byte-identically. Added **five** fail-closed generated-output test cases to the existing P06 test file; all original 68 tests retain their definitions. The Jekyll artifact test runs the SAME `ghcr.io/actions/jekyll-build-pages:v1.0.13` image used by production Pages, builds an isolated checkout, and checks the actual `_site` output for absence of engineering paths and presence of all 12 public pages, retired/404 and 12 legacy routes, CSS/JS, both JSON files, CNAME, robots and sitemap. Negative tests inject engineering leaks or delete required assets and MUST fail the artifact checker.

**Observed remediation-code FAST** [#40448024210](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40448024210) COMPLETED / SUCCESS on code HEAD `b7ad1d3900b8c52b531c0e03688bc0207816d2d1`: **73/73 passed**, release-shape, site/full-site, launch-state and performance validations PASS; FULL SKIPPED. A NEW exact-head FAST is required on this subsequent documentation checkpoint; keep results distinct.

The previous immutability checkpoint/freeze `aa9ea1599b947f006d4947a9ed4fefd210fea3bc` was **INVALIDATED** immediately when remediation code was committed; it must NOT be reused for FULL, freeze, audit or release. The Manager must verify the new exact HEAD, order new exact-head FULL and deterministic repeat, create a NEW immutable HIGH-risk freeze, and commission a FRESH independent HIGH-risk re-audit in a separate chat. The original owner-accepted public-page HTML and `robots.txt` remain byte-identical to `6fb12ab5da5874dad0e0b1809ecf21c7fe84a722`. Cumulative draft PR diff is exactly **19 authorized paths** (original 18 plus `_config.yml`); no workflow/dependency/CI provider changes.

**Remaining live and preview limits:** Production `main` was not changed and the owner's existing 200 responses may persist until a separately authorized protected merge and GitHub Pages deployment; passing an isolated build is NOT proof that live URLs now return 404. The exact old candidate Vercel unauthenticated redirect checks showed 302 SSO plus `X-Robots-Tag: noindex`; any new preview SHA must be independently checked rather than assuming old evidence or provider defaults. P05 transfer is operationally complete but final registrant/email/MFA/admin/billing assurances remain OPEN under Issue #29. The P06 indexable-candidate source mode remains on the unmerged draft; `P06 Production Indexing Release Authority: NOT GRANTED`, historical P02 indexing NOT AUTHORIZED and all P02/P03/P04 CLOSED records remain intact.

**Mandatory STOP after new FAST:** Manager review / FULL / new freeze / independent re-audit only; no Builder FULL, freeze, audit, ready-for-review, merge, Pages deployment, production indexing, sitemap submission, Search Console indexing request, DNS/Cloudflare/Vercel/registrar change or infrastructure mutation.

## ECOG-P04 — Facebook Hero Branding & Homepage Phone Visibility

State (ECOG-P04): CLOSED
Risk: LOW
Status: CLOSED / FACEBOOK HERO BRANDING & HOMEPAGE PHONE RELEASE VERIFIED
Manager Contract: https://github.com/Ryan42062001/ECOG-Website/issues/25
Manager Activation: https://github.com/Ryan42062001/ECOG-Website/issues/25#issuecomment-6429378217
Product Owner: Ryan
Execution: Regular Chat / same Primary Builder
Original Canonical Base: `7037d42005ca50462c65b52c132b6ab277157ce8`
Approved Product Preview SHA: `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`
Frozen Release Candidate: `c995fc16a0b9923037261e41639bec9f806a4567`
Release Pull Request: #27 — MERGED / CLOSED
Canonical P04 Merge: `a9207c879220c0a8b121eabae0155c9cfcf1aa58`
Closure Sync: `phase/ecog-p04-closure-sync` — separate documentation-only DRAFT PR, pending Manager review and separate merge authorization
Production indexing remains NOT AUTHORIZED (inherited from ECOG-P02; canonical page and robots safeguards unchanged)

ECOG-P04's two owner-approved homepage changes were published through the separately authorized protected PR #27 merge and automatic GitHub Pages workflow: only the hero Visit Our Facebook pill is Facebook blue #0866FF with a small decorative white inline SVG f and white text, and a fourth home-only service-strip item displays Call Us — 814-652-9287 as `tel:+18146529287`. The primary cyan Plan Your Visit and secondary outlined Watch a Message hero actions, approved official Facebook URL/new-tab context, three previous Sunday/Wednesday/location items, 4/2/1 responsive strip behavior, standalone P03 Facebook spotlight and Contact page facts remain preserved.

Immutable release evidence and actual sequence:
- Original owner-reviewed product source `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`: FAST [40418871876](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40418871876) SUCCESS, 35/35 adversarial tests. Preview deployment `dpl_3sfCwNKATkR69XL5GfPQSUvKFuiB` READY. Ryan's owner preview acceptance: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430262021 ("Yes I like that").
- Manager authorized bounded documentation-only Phase Sync: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430296767. Phase Sync created `c995fc16a0b9923037261e41639bec9f806a4567` with `index.html` and CSS approved blobs untouched; exact-head FAST [40424969206](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40424969206) SUCCESS, 35/35 adversarial tests.
- Manager authorized and ran exact-head FULL: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430471776. FULL PHASE CI [40425362804](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425362804) SUCCESS on `c995fc16a0b9923037261e41639bec9f806a4567` including exact checkout, full validation union and deterministic repeat.
- Manager immutable LOW-risk freeze: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430489746. Fresh independent audit was not required at LOW risk.
- Ryan separately authorized readying/merging exact frozen HEAD and automatic Pages publication (NOT production indexing or infrastructure): https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430512182. Manager confirmed protected PR merge in https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430534874; PR #27 MERGED / CLOSED to exact canonical SHA `a9207c879220c0a8b121eabae0155c9cfcf1aa58`.
- Exact canonical post-merge [FAST 40425685834](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685834) COMPLETED / SUCCESS; exact-SHA GitHub Pages [40425685263](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685263) COMPLETED / SUCCESS, including build and deploy jobs.
- Ryan then opened the LIVE production homepage and replied "Ya i like it", confirming he observed the Facebook-blue button/white logo and the visible Call Us number: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430627525. This is owner-observed homepage visual acceptance, not independent exhaustive device, keyboard, phone-dialer or route testing.

Product source boundaries remain verified at the P04 merge: `index.html` blob `58014608ba0490ed3706512f68ce51841fdcad7b`; `assets/css/main.css` blob `935c03f82d1d51d891383f46e9cfd34783ceb130`. This later closure sync changes ONLY the three documentation paths `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, `docs/ecog-p04-facebook-branding-homepage-phone.md`. The entire P03 and P02 historical closure records below are unchanged. All page `noindex,nofollow` and sitewide `robots.txt` `Disallow: /` remain required and unchanged; **Production indexing remains NOT AUTHORIZED**. No further source changes, production publication, CNAME, Pages settings, DNS, Cloudflare, registrar, EPP, DNSSEC, TLS, secrets or infrastructure action is authorized through this closure.

This record states P04's verified product-release outcome; the separate protected documentation Closure Sync PR remains DRAFT / UNMERGED until NEW exact-head FAST, Manager review, and separate explicit Ryan closure-PR merge authorization. No Builder FULL, freeze, audit, merge, deploy or new-phase source work during the Closure Sync assignment.

## ECOG-P03 — Homepage Facebook Spotlight

State (ECOG-P03): CLOSED
Risk: LOW
Status: CLOSED / FACEBOOK HOMEPAGE RELEASE VERIFIED
Manager Activation: https://github.com/Ryan42062001/ECOG-Website/issues/23
Manager Closure Authorization: https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574
Product Owner: Ryan
Execution: Regular Chat / same Primary Builder
Original Canonical Base: `8b78795081f66c72a31432e6e62cc7670decfa47`
Frozen Source Candidate: `ca84a8930249e127551280bd0b56d6377debed7d`
Canonical P03 Merge: `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd`
Feature Branch: `phase/ecog-p03-homepage-facebook-spotlight` (historical / merged)
Pull Request: #24 — MERGED / CLOSED
Closure Sync Branch: `phase/ecog-p03-closure-sync` (documentation-only / separate protected PR pending)
Indexing safeguard: inherited from ECOG-P02; indexing remains not authorized

ECOG-P03's homepage Facebook spotlight is released and verified. PR #24 merged the frozen candidate `ca84a8930249e127551280bd0b56d6377debed7d` into protected `main` at canonical merge SHA `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd`. Post-merge exact-SHA FAST [40406287504](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406287504) succeeded; GitHub Pages build and deployment [40406286224](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406286224) succeeded on that same merge SHA. Ryan then opened the live production homepage and confirmed that all three hero buttons appear as expected, including the corrected outlined "Visit Our Facebook" action. This is owner-observed homepage smoke acceptance only; it is not independent verification of every route.

Historical P03 evidence remains valid in its original phase sequence:
- Initial FAST runs `40401573279` and `40401849954`: FAILURE (historical; not silently reclassified).
- First-preview source `346c239118b820f1e67cad6b992dd5e91bb24096` and FAST `40402008658`: SUCCESS, before the owner-requested hero-button correction.
- Manager punch-list authorization: https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427620205.
- Approved corrected product-source `4b37841328d1f501dc5b96ae3b0d7026c049c1e3` and exact-head FAST `40404116363`: SUCCESS (35/35 adversarial tests).
- Ryan accepted the corrected mobile preview; Manager Phase Sync authorization: https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726.
- Documentation-only Phase Sync/frozen source `ca84a8930249e127551280bd0b56d6377debed7d` and exact-head FAST `40405308945`: SUCCESS, before the separately authorized protected PR merge.
- Manager-authorized post-production closure and owner production observation: https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574.

The original P03 change was limited to the five authorized paths, including `index.html` and `assets/css/main.css`; this later Closure Sync changes exactly the three approved documentation paths. No new page edits or production operations are authorized. The P02 CLOSED record and its exact historical production-launch, DNS, Pages, Cloudflare, DNSSEC, registrar, and indexing authority fields below are preserved verbatim. Active pages retain `noindex,nofollow`; `robots.txt` retains sitewide `Disallow: /`. Closure Sync requires its own exact-head FAST and separate Manager review/explicit protected-PR merge authorization. Do not start ECOG-P04 source work in this assignment.

## ECOG-P02 — Production Hosting & Domain Cutover

State: CLOSED
Risk: HIGH
Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED
Production Launch: AUTHORIZED
DNS Changes: AUTHORIZED
Pages Custom Domain: AUTHORIZED
Cloudflare Cutover: AUTHORIZED
DNSSEC Changes: NOT AUTHORIZED
Registrar Transfer: NOT AUTHORIZED
Production Indexing: NOT AUTHORIZED

## ECOG-P02 closure evidence

Operational production hosting/domain cutover is verified complete.

- PR #20 audited remediation head: `ffa4ec0580b508ee0ae8771544fdeb67aace1fe3`.
- PR #20 merged to canonical `main` at `7637332c3c250e15a723c0c14118c726279bfdd9`.
- Post-merge FAST run `37130439079`: SUCCESS.
- GitHub Pages deployment run `37130438697`: SUCCESS on the exact canonical merge SHA.
- Registrar delegation moved from `amos.ns.cloudflare.com` / `izabella.ns.cloudflare.com` to `jaime.ns.cloudflare.com` / `meiling.ns.cloudflare.com`.
- Execution-time DS checks showed no DS records before and after delegation.
- Ryan-controlled Cloudflare became authoritative and was reconciled to the four GitHub Pages apex A records plus DNS-only `www` CNAME.
- GitHub Pages custom-domain DNS check: SUCCESS.
- GitHub Pages certificate issued and Enforce HTTPS enabled.
- Product Owner smoke-tested both `https://everettchurchofgod.com` and `https://www.everettchurchofgod.com` successfully.
- Production indexing remains NOT AUTHORIZED; active-page `noindex,nofollow`, sitewide `robots.txt` `Disallow: /`, and 404 `noindex` remain required.
- Registrar transfer/EPP use remains NOT AUTHORIZED and is outside ECOG-P02 closure.
- DNSSEC/DS mutation remains NOT AUTHORIZED.

Recorded operational evidence is preserved in PR #20 comments through Manager closure authorization comment `6426689576`.


Speed Workflow V2.1 migration status: CLOSED.
ECOG-P01 source-readiness status: CLOSED.

ECOG-P01 closure evidence:
- Frozen/audited source candidate: `c913d2e5ad9cb9e3add2f6bbcd9a73c432727e7d`.
- PR #18 merged to canonical `main` at `9b369af46cee0f4d3fcaf2772b007782287a8e89`.
- Closure Sync PR #19 merged to canonical `main` at `fdcb14aede80215f45b898dd725e1ae633afae49`.
- Canonical closure FAST run `36956218816`: SUCCESS.

Previous immutable audit target `c4dc1357c0d363d0a5f43a305a4ad99d808e20b4` passed the independent HIGH-risk audit. Product Owner production-cutover authorization is recorded in PR #20 comment `5969764264`. A GitHub Pages Custom Domain save for `everettchurchofgod.com` was attempted, but Protect Main safely blocked the direct `CNAME` commit. Manager remediation authorization is recorded in PR #20 comment `5969870029`; branch protection remains intact, and the production `CNAME` now travels through the normal protected PR path. This replacement candidate requires new FAST, exact-head FULL, immutable freeze, and targeted fresh HIGH-risk re-audit. The previous audited SHA is not silently retargeted. Failed remediation head `c231fb0c0449ce0d10fe3bd6f9a520bc20b9f46c` produced FAST run `37128476415`: FAILURE after all 26 release-shape adversarial tests, release-shape validation, and content/site validation passed. The failure occurred in `scripts/validate-launch-state.js` because it incorrectly coupled CNAME presence to indexing enablement. Manager scope expansion is recorded in PR #20 comment `5969998505` and authorizes the validator-only seventh cumulative path. First expanded-scope head `e3e74e402b9c3892a7bcacebe1fe686363b0e237` produced FAST run `37129324800`: FAILURE with 33/34 tests passing because an unanchored `Allow:` regex matched the substring inside `Disallow:`. The correction anchors robots directives to complete lines and does not change product state or authorization.

Verified pre-activation hosting evidence:
- GitHub Pages is enabled from `main` / `/(root)`.
- Staging URL: `https://ryan42062001.github.io/ECOG-Website/`.
- Pages deployment run `36957798523`: SUCCESS on canonical `main` `fdcb14aede80215f45b898dd725e1ae633afae49`.
- Owner preview verified desktop, mobile/responsive behavior, navigation, and custom 404 behavior.

Owner-provided DNS / registrar evidence:
- A Ryan-controlled Cloudflare account contains a pending zone for `everettchurchofgod.com`.
- New Cloudflare assigned nameservers: `jaime.ns.cloudflare.com` and `meiling.ns.cloudflare.com`.
- Existing/Kingdom nameservers observed: `amos.ns.cloudflare.com` and `izabella.ns.cloudflare.com`.
- The pending Ryan-controlled zone is prepared with four GitHub Pages apex A records and a DNS-only `www` CNAME to `Ryan42062001.github.io`.
- The domain is not used for email.
- Current registrar evidence identifies eNom; an EPP/auth code was provided, but registrar transfer has not been started.
- Kingdom reports its existing host/Cloudflare service is expected to be removed October 2, 2026.
- Owner-preview public lookup reported no DS record for `everettchurchofgod.com`; Kingdom-side authoritative DNS remained visible. This evidence is time-sensitive and must be rechecked immediately before any nameserver mutation.
- Ryan does not currently have eNom/registrar control-panel access. A future nameserver change therefore requires either authorized church access or exact execution by Kingdom/eNom after immediate Ryan/Manager confirmation.

Current implementation boundary:
- Production hosting/domain cutover is verified complete. The authorization fields are preserved as historical authority for the completed mutations.
- The root `CNAME` is active on canonical `main` as part of the audited and merged PR #20 cutover.
- Registrar nameserver delegation and the Ryan-controlled Cloudflare DNS reconciliation were completed and verified during the authorized cutover.
- DNSSEC/DS changes remain NOT AUTHORIZED.
- Registrar transfer and EPP use remain NOT AUTHORIZED.
- Custom-domain hosting and production indexing are independent controls: CNAME presence does not authorize indexing.
- Production indexing remains NOT AUTHORIZED; active-page `noindex,nofollow` and the sitewide `robots.txt` block remain required through domain cutover.
- PR #15 remains historical evidence only.
