# Current phase

## ECOG-P02 — Production Hosting & Domain Cutover

State: PREVIEW_READY
Risk: HIGH
Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED
Production Launch: NOT AUTHORIZED
DNS Changes: NOT AUTHORIZED
Pages Custom Domain: NOT AUTHORIZED
Cloudflare Cutover: NOT AUTHORIZED
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

ECOG-P02 implementation checkpoint is ready for Product Owner preview. The runbook is preparation only; every production mutation remains separately unauthorized.

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

Current implementation boundary:
- No nameserver change is authorized.
- No Cloudflare authoritative-DNS cutover is authorized.
- No GitHub Pages custom-domain mutation is authorized.
- No production `CNAME` activation is authorized.
- No production indexing change is authorized.
- No registrar transfer is authorized.
- No production launch/deployment is authorized.
- PR #15 remains historical evidence only.
