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
