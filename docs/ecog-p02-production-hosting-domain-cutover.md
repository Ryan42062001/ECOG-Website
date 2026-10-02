# ECOG-P02 — Production Hosting & Domain Cutover

- State: BUILDING
- Risk: HIGH
- Status: IMPLEMENTATION ACTIVE
- Product Owner: Ryan
- Manager / Architect / Planner: ChatGPT
- Activation baseline: `fdcb14aede80215f45b898dd725e1ae633afae49`
- Phase branch: `phase/ecog-p02-production-hosting-domain-cutover`

## Objective

Move the already-verified ECOG site from the GitHub Pages staging URL to a controlled production-domain cutover for `everettchurchofgod.com`, while preserving reversibility, keeping indexing blocked until separately authorized, and preventing an outage when Kingdom removes its hosting/Cloudflare service.

This activation prepares and validates the cutover. It does not itself authorize production mutations.

## Preserved P01 evidence

- ECOG-P01 source-readiness phase: CLOSED.
- Frozen/audited P01 candidate: `c913d2e5ad9cb9e3add2f6bbcd9a73c432727e7d`.
- P01 audit: PASS WITH NON-BLOCKING FINDINGS.
- PR #18 merge commit: `9b369af46cee0f4d3fcaf2772b007782287a8e89`.
- P01 Closure Sync PR #19 merge/current activation baseline: `fdcb14aede80215f45b898dd725e1ae633afae49`.
- Closure FAST `36956218816`: SUCCESS.

## Verified staging-host evidence

- GitHub Pages is enabled from `main` / `/(root)`.
- Staging URL: `https://ryan42062001.github.io/ECOG-Website/`.
- Pages deployment run `36957798523`: SUCCESS on activation baseline.
- Owner preview verified desktop navigation/rendering.
- Owner preview verified responsive/mobile behavior.
- Owner preview verified the repository custom `404.html` is served for a nonexistent project route.

## Owner-provided DNS / registrar evidence

Current Kingdom-side evidence:
- Existing nameservers: `amos.ns.cloudflare.com`, `izabella.ns.cloudflare.com`.
- Kingdom reports the current site remains on its servers/Cloudflare account until October 2, 2026 unless DNS is changed first.
- Kingdom reports its hosting and Cloudflare zone will be removed after cancellation.

Ryan-controlled Cloudflare evidence:
- Zone: `everettchurchofgod.com`.
- Current zone state: pending nameserver delegation.
- Assigned nameservers: `jaime.ns.cloudflare.com`, `meiling.ns.cloudflare.com`.
- Prepared website records:
  - apex A `185.199.108.153` — DNS only
  - apex A `185.199.109.153` — DNS only
  - apex A `185.199.110.153` — DNS only
  - apex A `185.199.111.153` — DNS only
  - `www` CNAME `Ryan42062001.github.io` — DNS only
- The domain is not used for email.

Registrar evidence:
- eNom is the current registrar identified in the Kingdom handoff.
- An EPP/auth code was provided.
- Registrar transfer has not been started.

## Authorized implementation scope

The Primary Builder may:

1. Reverify repository and Pages staging readiness using read-only evidence.
2. Document the exact production-cutover sequence and rollback sequence.
3. Define the repository-side `CNAME`/custom-domain change required for later cutover.
4. Prepare, on the phase branch only, bounded source/control changes required for production-domain readiness **only when they do not themselves mutate production settings**.
5. Preserve staging indexing protections during the hosting/domain cutover.
6. Update launch-state validation so the cutover candidate remains fail-closed.
7. Add adversarial validation for unauthorized DNS/custom-domain/indexing states.
8. Record exact DNSSEC, nameserver, Cloudflare activation, HTTPS, apex/`www`, registrar-transfer, and rollback gates.
9. Produce an owner-previewable cutover runbook with exact stop/go conditions.

## Protected boundaries

Until a later explicit Product Owner cutover authorization:

- Do not change registrar nameservers.
- Do not change DNSSEC/DS records.
- Do not make the Ryan-controlled Cloudflare zone authoritative.
- Do not change GitHub Pages custom-domain settings.
- Do not activate a production `CNAME`.
- Do not start or approve the eNom registrar transfer.
- Do not enable production indexing.
- Do not merge a production-cutover candidate.
- Do not deploy/launch production.
- Do not modify PR #15.
- Do not infer or invent church facts.

The Product Owner's "let's do it" authorized **P02 activation**, not silent production mutation.

## Cutover acceptance criteria

Before any production cutover mutation is authorized:

1. GitHub Pages staging deployment remains healthy from the exact intended source.
2. Repository launch-state safeguards pass FAST.
3. The exact custom-domain/`CNAME` strategy is defined and reversible.
4. Ryan-controlled Cloudflare website records are documented and correct.
5. The assigned new nameservers are documented exactly.
6. Existing authoritative nameservers are documented exactly.
7. DNSSEC/DS-record state is verified before delegation changes.
8. The registrar account/change path is identified and usable.
9. Apex and `www` verification steps are defined.
10. HTTPS/certificate provisioning and enforcement checks are defined.
11. Production indexing remains blocked through hosting/domain cutover.
12. A pre-Kingdom and post-Kingdom rollback/continuity model is documented.
13. Owner preview is complete.
14. Exact-head FULL PHASE CI passes on the frozen cutover candidate.
15. A fresh independent HIGH-risk audit passes.
16. Ryan explicitly authorizes the exact production-cutover mutations after audit.

## Production cutover sequence — planning target

The phase should prepare for a controlled sequence broadly shaped as:

1. verify source/staging and cutover candidate;
2. verify DNSSEC/registrar readiness;
3. obtain explicit Product Owner cutover authorization;
4. apply the approved GitHub Pages/custom-domain repository/settings change;
5. change registrar nameservers to the Ryan-controlled Cloudflare pair;
6. wait for Cloudflare zone activation;
7. verify apex, `www`, routing, HTTPS, legacy routes, and 404;
8. verify Kingdom is no longer required for continuity;
9. only after DNS/hosting is stable, separately consider registrar transfer using the EPP code;
10. keep production indexing blocked until separately authorized.

The exact order may be refined by evidence, but no production mutation may be inferred from this planning target.

## Validation

Use Speed Workflow V2.1.

Expected phase flow:

Manager activation → Primary Builder → FAST → owner preview → consolidated punch list → Phase Sync → exact-head FULL PHASE CI → immutable HIGH-risk freeze → fresh independent audit → explicit Product Owner cutover authorization → controlled production cutover → production verification → explicit merge/closure decisions as applicable.

Any mutation after immutable freeze requires new exact-head evidence and a new freeze.

## Release boundary

P02 activation authorizes bounded preparation and validation only.

Production launch, DNS/nameserver changes, Cloudflare authoritative cutover, Pages custom-domain mutation, repository `CNAME` activation, registrar transfer, production indexing, and merge remain separately unauthorized.
