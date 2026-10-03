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

Production launch is not complete. PR #15 remains DRAFT / UNMERGED historical production-cutover evidence.

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

- State: FREEZE_READY
- Risk: HIGH
- Status: PHASE SYNC COMPLETE / FULL PHASE CI REQUIRED

Objective:

Move the already-verified ECOG site from staging hosting to a controlled production-domain cutover without losing DNS authority, breaking unrelated domain services, prematurely enabling indexing, or depending on the cancelled Kingdom hosting environment.

Current verified/prepared state:

1. ECOG-P01 is CLOSED and source readiness is complete.
2. GitHub Pages is enabled from canonical `main` / `/(root)`.
3. GitHub Pages deployment run `36957798523` succeeded on `fdcb14aede80215f45b898dd725e1ae633afae49`.
4. Owner preview verified desktop, mobile/responsive navigation, and the custom 404 on the GitHub Pages staging URL.
5. A Ryan-controlled Cloudflare zone exists but is still pending nameserver delegation.
6. The new Cloudflare zone is prepared with GitHub Pages website DNS records.
7. eNom is the current registrar identified by the Kingdom handoff and an EPP/auth code is available.
8. Kingdom hosting/Cloudflare service is expected to terminate October 2, 2026.
9. The domain is not used for email.

Phase work must:

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

Owner-preview punch-list evidence:

1. A public lookup reported no parent DS record; this clears the preview-time active-DS blocker only.
2. DS and current authoritative NS must be queried again immediately before delegation; missing, inconsistent, or inconclusive evidence is a STOP.
3. Ryan currently lacks eNom control-panel access, so an identified authorized registrar operator remains required.
4. Any GitHub-created operational `main:/CNAME` commit must be captured by exact SHA, validated by FAST, and reconciled as post-cutover/closure evidence without silently retargeting the pre-cutover audit SHA.

Production launch, nameserver changes, Cloudflare authoritative-DNS changes, Pages custom-domain mutation, repository `CNAME` activation, registrar transfer, and production indexing remain NOT AUTHORIZED by phase activation.
