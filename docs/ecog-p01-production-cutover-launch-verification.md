# ECOG-P01 — Production Cutover & Launch Verification

- State: PUNCH_LIST
- Risk: HIGH
- Status: PUNCH LIST COMPLETE / PHASE SYNC READY
- Product Owner: Ryan
- Manager / Architect / Planner: ChatGPT
- Activation baseline: `56316ab56edca42547b28c4432f6062961ac0846`
- Phase branch: `phase/ecog-p01-production-cutover-launch-verification`

## Objective

Prepare a production-cutover candidate from current canonical `main` without performing the production launch. Reconcile the preserved Phase 12 production-cutover evidence in PR #15 against current canonical state, establish the exact release plan and rollback plan, and produce independently auditable evidence for a later owner-authorized launch decision.

## Activation context

Speed Workflow V2.1 is closed on canonical `main`.

Preserved production-cutover evidence:
- PR #15 — `Phase 12 production cutover candidate`
- Preserved PR #15 head: `b957b46522c433c5ab2234597d4d974f9a0878c5`
- Historical PR #15 merge base: `9dd5f8736495f96b77185571e182997c53369466`
- Activation-time relationship of PR #15 head to canonical baseline: diverged, 1 ahead / 5 behind

PR #15 is evidence only. It is not authorized for direct merge or silent retarget.

## Authorized scope

1. Independently reconcile PR #15 against current canonical `main`.
2. Identify the minimal production-cutover source changes that remain valid.
3. Verify current production-domain facts using read-only evidence.
4. Determine who controls `everettchurchofgod.com` DNS before any mutation.
5. Capture and review current public DNS records before proposing changes.
6. Define the coordinated GitHub Pages custom-domain / DNS cutover sequence.
7. Define pre-cutover rollback while Kingdom remains available and a separate post-Kingdom continuity path under Ryan's control.
8. Revalidate launch-sensitive routes, metadata, sitemap, robots/indexing state, canonical URLs, retired-route safeguards, public church facts, and the external giving boundary.
9. Complete owner-preview remediation and prepare exact Phase Sync evidence for later HIGH-risk freeze/audit under Speed Workflow V2.1.
10. Update control-plane state and validation contracts only as needed to represent the active ECOG-P01 lifecycle accurately.

## Protected boundaries

Until separate explicit Product Owner authorization is recorded:

- Do not merge the production-cutover candidate.
- Do not deploy or launch production.
- Do not change DNS records.
- Do not change GitHub Pages settings or custom-domain settings.
- Do not add or activate a production `CNAME`.
- Do not enable production indexing.
- Do not replace or disrupt the existing live site.
- Do not invent or infer unresolved church facts.
- Do not change the external giving destination without independent verification and explicit scope.
- Do not silently retarget PR #15 or any frozen SHA.

Repository evidence outranks chat memory.

## Acceptance criteria

Before ECOG-P01 can reach FREEZE_READY:

1. PR #15 has been reconciled path-by-path against current canonical `main`.
2. Every retained production-cutover change has a documented reason.
3. Every obsolete or unsafe PR #15 change is explicitly rejected or superseded.
4. DNS ownership/control is established from evidence, or remains explicitly unresolved and blocks launch.
5. Current DNS records are captured read-only before any proposed mutation.
6. The production host strategy is explicit for apex and expected host routing.
7. GitHub Pages custom-domain and certificate/HTTPS expectations are documented.
8. Active routes and legacy compatibility routes have a production-verification plan.
9. Canonical URLs, sitemap, robots/indexing, retired Senior Adults safeguards, and 404 behavior have a production-verification plan.
10. No staging `github.io/ECOG-Website` metadata leakage is accepted in the production candidate.
11. The external giving safety boundary is reverified.
12. Public-facing church facts are reverified at launch time.
13. A rollback plan exists before cutover.
14. FAST passes on implementation checkpoints.
15. Owner preview is completed and punch-list findings are consolidated.
16. Exact-head FULL PHASE CI passes before immutable freeze.
17. A fresh independent HIGH-risk audit passes on the immutable candidate, including any required re-audit after remediation.
18. Merge requires explicit Ryan authorization.
19. Production launch requires a separate explicit Ryan authorization after merge readiness; phase merge alone does not authorize launch.

## Validation

Use the Speed Workflow V2.1 validation union. Preserve fail-closed behavior.

Expected evidence flow:

Manager phase contract → Primary Builder → FAST → owner preview → consolidated punch list → Phase Sync → exact-head FULL PHASE CI → immutable freeze → fresh independent HIGH-risk audit → remediation/re-audit if required → explicit Ryan merge authorization → merge → post-merge FAST → Closure Sync → closure FAST → CLOSED.

Production cutover execution remains a separate explicit Product Owner decision.

## Preview and punch list

Preview must focus on launch correctness, safety, reversibility, and public-facing production behavior. Cosmetic work is out of scope unless it blocks launch acceptance.

## Freeze and audit

Record one exact immutable candidate SHA. Any post-freeze change creates a new candidate and requires new exact-head evidence. A fresh independent auditor must verify production boundaries, PR #15 reconciliation, launch-state controls, rollback readiness, and no unauthorized release mutation.

## Release boundary

This activation authorizes planning, reconciliation, bounded implementation, and read-only verification only. It does not authorize production launch, DNS changes, Pages custom-domain mutation, CNAME activation, production indexing, merge, or deployment.
