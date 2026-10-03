# Current phase

## ECOG-P02 — Production Hosting & Domain Cutover

State: REMEDIATING
Risk: HIGH
Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH
Production Launch: AUTHORIZED
DNS Changes: AUTHORIZED
Pages Custom Domain: AUTHORIZED
Cloudflare Cutover: AUTHORIZED
DNSSEC Changes: NOT AUTHORIZED
Registrar Transfer: NOT AUTHORIZED
Production Indexing: NOT AUTHORIZED

Speed Workflow V2.1 migration status: CLOSED.
ECOG-P01 source-readiness status: CLOSED.

ECOG-P01 closure evidence:
- Frozen/audited source candidate: `c913d2e5ad9cb9e3add2f6bbcd9a73c432727e7d`.
- PR #18 merged to canonical `main` at `9b369af46cee0f4d3fcaf2772b007782287a8e89`.
- Closure Sync PR #19 merged to canonical `main` at `fdcb14aede80215f45b898dd725e1ae633afae49`.
- Canonical closure FAST run `36956218816`: SUCCESS.

Previous immutable audit target `c4dc1357c0d363d0a5f43a305a4ad99d808e20b4` passed the independent HIGH-risk audit. Product Owner production-cutover authorization is recorded in PR #20 comment `5969764264`. A GitHub Pages Custom Domain save for `everettchurchofgod.com` was attempted, but Protect Main safely blocked the direct `CNAME` commit. Manager remediation authorization is recorded in PR #20 comment `5969870029`; branch protection remains intact, and the production `CNAME` now travels through the normal protected PR path. This replacement candidate requires new FAST, exact-head FULL, immutable freeze, and targeted fresh HIGH-risk re-audit. The previous audited SHA is not silently retargeted.

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
- Production launch, DNS changes, the Pages custom domain, and Cloudflare cutover are authorized, but no corresponding live mutation is claimed complete.
- The root `CNAME` in this branch is an authorized protected-PR candidate; it is not active on `main` until an explicitly authorized merge.
- No registrar nameserver delegation or Cloudflare record mutation occurred during this remediation.
- DNSSEC/DS changes remain NOT AUTHORIZED.
- Registrar transfer and EPP use remain NOT AUTHORIZED.
- Production indexing remains NOT AUTHORIZED and staging safeguards remain required.
- PR #15 remains historical evidence only.
