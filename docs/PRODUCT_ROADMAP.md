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

- State: BUILDING
- Risk: LOW
- Status: BUILDING / OWNER-APPROVED TWO-FEATURE HOMEPAGE SCOPE
- Manager contract: [Issue #25](https://github.com/Ryan42062001/ECOG-Website/issues/25)
- Activation clearance: [Comment 6429378217](https://github.com/Ryan42062001/ECOG-Website/issues/25#issuecomment-6429378217)
- Canonical base: `7037d42005ca50462c65b52c132b6ab277157ce8`
- Feature branch: `phase/ecog-p04-facebook-branding-homepage-phone`
- PR: one DRAFT PR targeting main, merge NOT AUTHORIZED

Owner-selected feature A: make the existing hero Visit Our Facebook CTA a #0866FF filled pill with a lightweight decorative white Facebook f SVG, preserving white readable text, safe official URL and accessible new-tab context. Keep Plan Your Visit cyan and first, Watch a Message outlined and second, and the standalone Facebook spotlight unchanged.

Second feature: add a visible, tappable fourth Call Us item to the homepage service-time/location strip showing **814-652-9287**, linking only to `tel:+18146529287`. Preserve the three existing service items, all published church facts, metadata and the Contact page; maintain responsive layout.

Only five cumulative source paths are authorized; P02 and P03 remain CLOSED with all historical evidence unchanged. Indexing remains NOT AUTHORIZED; noindex,nofollow and robots.txt Disallow: / stay enforced. Exact-head FAST and owner desktop/mobile preview required. Stop at PREVIEW_READY; FULL, freeze, audit, merge, production deployment and infrastructure changes are not authorized.
