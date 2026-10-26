# Current phase

## ECOG-P04 — Facebook Hero Branding & Homepage Phone Visibility

State: BUILDING
Risk: LOW
Status: BUILDING / OWNER-APPROVED TWO-FEATURE HOMEPAGE SCOPE
Manager Contract: https://github.com/Ryan42062001/ECOG-Website/issues/25
Manager Activation: https://github.com/Ryan42062001/ECOG-Website/issues/25#issuecomment-6429378217
Product Owner: Ryan
Execution: Regular Chat / fresh Primary Builder
Canonical Base: `7037d42005ca50462c65b52c132b6ab277157ce8`
Feature Branch: `phase/ecog-p04-facebook-branding-homepage-phone`
Pull Request: one DRAFT PR to main / UNMERGED
Indexing safeguard: inherited from ECOG-P02; production indexing remains not authorized

P04 scope: brand only the hero Visit Our Facebook link with Facebook-blue #0866FF, white text and an accessible decorative white f SVG; make 814-652-9287 visible as a fourth homepage service-strip item using tel:+18146529287. Preserve cyan Plan Your Visit, outlined Watch a Message, mobile button stacking, unchanged standalone Facebook spotlight, existing church facts and metadata, and all non-homepage pages.

Cumulative path limit: exactly these five possible paths — `index.html`, `assets/css/main.css`, `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, and `docs/ecog-p04-facebook-branding-homepage-phone.md`. ECOG-P02 and ECOG-P03 CLOSED history below must remain exact and unchanged. Production indexing is NOT AUTHORIZED: existing noindex,nofollow and robots.txt Disallow: / are protected. No infrastructure, JS, tracker, external asset, Pages, DNS, registrar, Cloudflare, CNAME or production change.

Gates: coherent implementation, new exact-head FAST, accessible mobile/desktop Vercel preview, then STOP at PREVIEW_READY for Ryan. Owner approval of design scope is not a merge or production-deployment authorization. Manager controls later FULL, freeze, audit determination and explicit merge authorization.

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
