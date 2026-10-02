# ECOG-P02 — Production Hosting & Domain Cutover

- State: PREVIEW_READY
- Risk: HIGH
- Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED
- Product Owner: Ryan
- Manager / Architect / Planner: ChatGPT
- Activation baseline: `fdcb14aede80215f45b898dd725e1ae633afae49`
- Phase branch: `phase/ecog-p02-production-hosting-domain-cutover`

## Release boundary

This is a non-production preparation checkpoint. It does not authorize or perform nameserver, Cloudflare, DNSSEC/DS, GitHub Pages custom-domain, repository `CNAME`, registrar-transfer/EPP, indexing, merge, deployment, or launch mutations.

Production Launch: NOT AUTHORIZED  
DNS Changes: NOT AUTHORIZED  
Pages Custom Domain: NOT AUTHORIZED  
Cloudflare Cutover: NOT AUTHORIZED  
DNSSEC Changes: NOT AUTHORIZED  
Registrar Transfer: NOT AUTHORIZED  
Production Indexing: NOT AUTHORIZED

PR #15 remains historical evidence only. No stale PR #15 blob is used.

## Preserved facts

- Sunday worship is **10:00 AM**. The old Kingdom 9:30 AM listing is stale historical evidence.
- Primary production host: `everettchurchofgod.com`.
- `www.everettchurchofgod.com` should resolve to the same Pages site and redirect to the apex.
- No giving link may be added unless its external destination is independently verified.
- Kingdom currently controls the authoritative Cloudflare zone through `amos.ns.cloudflare.com` and `izabella.ns.cloudflare.com`.
- Ryan's Cloudflare zone remains Pending and is assigned `jaime.ns.cloudflare.com` and `meiling.ns.cloudflare.com`.
- Kingdom hosting/Cloudflare service is expected to terminate October 2, 2026.
- The domain is reported not to be used for email. Even so, the cutover must verify that no MX or other non-web records exist before delegation.

## Read-only Pages evidence

| Item | Evidence | Result |
|---|---|---|
| Pages enabled | GitHub repository metadata reports `has_pages: true` | Verified |
| Publishing source | Manager/owner activation evidence records `main` / `/(root)`; Pages settings API was unavailable to the connector | Accepted evidence; API re-read unavailable |
| Latest deployment | Pages build/deployment run `36957798523` | SUCCESS |
| Deployed SHA | Run head SHA | `fdcb14aede80215f45b898dd725e1ae633afae49` |
| Project URL | `https://ryan42062001.github.io/ECOG-Website/` | Owner manually verified; web retrieval tool could not independently fetch it |
| Visual/function preview | Desktop, primary navigation, responsive/mobile navigation, and custom 404 | Owner verified |
| Current custom domain | No repository `CNAME`; no custom-domain mutation performed | Not activated |
| Settings details | Pages endpoint unavailable through connected interface | Custom-domain/HTTPS setting state not guessed |

Branch-based Pages publishing republishes the root of `main` whenever an eligible commit reaches that source. A phase-branch commit does not change the live Pages source.

## Current staging safeguards

Repository evidence and FAST must retain:

- all 12 active public pages: `<meta name="robots" content="noindex,nofollow">`;
- `robots.txt`: `User-agent: *` and `Disallow: /`;
- retired `ministries/senior-adults.html`: `noindex,follow`;
- `404.html`: `noindex`;
- sitemap and canonical URLs: production apex `https://everettchurchofgod.com`;
- no staging `github.io/ECOG-Website` canonical or Open Graph metadata;
- no giving link;
- Sunday worship at 10:00 AM.

P02 changes hosting and domain routing only. Search-engine indexing requires a later, separately authorized release gate that changes active-page robots metadata and `robots.txt`, then revalidates sitemap/canonical behavior.

## Custom-domain and repository CNAME procedure

Official GitHub guidance for branch-based Pages says saving a custom domain in repository Pages settings creates a root `CNAME` commit on the publishing source branch. The required file content would be exactly:

```text
everettchurchofgod.com
```

A `CNAME` file alone does not safely authorize or complete the settings change. Because Pages publishes from `main` / root, the file must ultimately exist at `main:/CNAME`; adding it to this unmerged branch would not affect the live Pages deployment, but it is intentionally deferred until the exact production mutation is authorized.

### Authorized future ordering

1. **GO:** exact source candidate has passed FAST, FULL, freeze, and independent HIGH-risk audit; Product Owner explicitly authorizes the named mutations.
2. Verify the GitHub account/domain-verification option if available.
3. In GitHub Pages settings, save `everettchurchofgod.com` as the custom domain **before** pointing authoritative DNS at Pages. GitHub recommends this order to reduce takeover risk.
4. For branch publishing, capture the GitHub-created root `CNAME` commit and reconcile it into the authorized source history, or use an approved exact repository commit containing only `everettchurchofgod.com`.
5. Confirm the Pages setting shows the apex and its DNS check is expected/pending.
6. Only after all nameserver GO checks pass, delegate to `jaime.ns.cloudflare.com` and `meiling.ns.cloudflare.com`.
7. Wait for the Ryan-controlled zone to become Active and verify DNS responses.
8. Wait for GitHub certificate provisioning. GitHub states HTTPS availability can take up to 24 hours; do not treat pending certificate state as success.
9. Enable HTTPS enforcement only after the certificate is available, then verify HTTP redirects to HTTPS.
10. Keep noindex/robots blocking unchanged.

Prepared DNS records match GitHub's documented apex A addresses:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`
- `www CNAME Ryan42062001.github.io` (no repository suffix)

The prepared records are DNS-only. No wildcard record is authorized.

## DNSSEC / DS prerequisite

Current DNSSEC and registrar DS state is **not established by repository or connected read-only evidence**.

Cloudflare's full-setup guidance warns that changing nameservers while the old DNSSEC chain remains active can make the domain unreachable. Therefore:

- **STOP** if registrar DNSSEC status is unknown.
- **STOP** if DS records at the parent cannot be queried and matched to the intended zone state.
- **STOP** if DNSSEC is enabled and the old DS material cannot safely follow the new zone.
- Normal full-setup path: under a separate explicit authorization, disable/remove the old registrar DS configuration, wait for removal to propagate (Cloudflare documents at least 24 hours for the transfer workflow), verify the parent no longer publishes the old DS, and only then replace nameservers.
- Exception: a planned multi-signer/DNSKEY migration is acceptable only with complete provider support and a separately reviewed procedure; none is established here.
- After the new Cloudflare zone is Active and routing is verified, separately authorize enabling Cloudflare DNSSEC and publishing the new DS values at the registrar; verify validation before declaring completion.

No DNSSEC or DS change was performed.

## Nameserver cutover runbook

### Gate 0 — authorization

**GO only if:** Ryan explicitly authorizes the exact Pages-setting/CNAME, DNSSEC/DS, and nameserver actions; candidate SHA is frozen/audited; a cutover operator and observation window are named.

**STOP if:** authorization is ambiguous, candidate moved, FULL/audit is absent, or no operator can restore/repair service.

### Gate 1 — registrar and delegation readiness

**GO only if all are true:**

- eNom account access can change nameservers;
- registrant ownership, renewal status, and registrar contact email are confirmed;
- domain lock/transfer state is recorded (unlock is not required merely to change nameservers unless eNom requires it);
- registrar DNSSEC status and parent DS records are verified;
- any old DS has been safely removed under separate authorization and removal has propagated;
- current NS answers are captured as `amos.ns.cloudflare.com` / `izabella.ns.cloudflare.com`.

**STOP** on unknown DNSSEC/DS state, inaccessible registrar account, disputed ownership, expired/near-expiry uncertainty, or inability to restore nameservers while Kingdom remains viable.

### Gate 2 — Ryan-controlled zone readiness

**GO only if all are true:**

- zone is Pending solely because delegation has not changed;
- assigned NS pair is exactly `jaime.ns.cloudflare.com` / `meiling.ns.cloudflare.com`;
- complete zone export/screenshot is captured;
- the four apex A records and `www` CNAME are DNS-only and exact;
- no conflicting apex, `www`, wildcard, forwarding, or stale origin record exists;
- all MX, TXT, SRV, CAA, verification, and other non-web records are inventoried; absence of email use is confirmed independently;
- proxy status and TTL are recorded for every entry.

**STOP** if any unrelated service record is unexplained or if the new zone is incomplete.

### Gate 3 — source and Pages readiness

**GO only if all are true:**

- staging deployment for the authorized SHA is successful;
- active routes, assets, legacy routes, mobile navigation, and custom 404 pass;
- staging noindex and `robots.txt` block remain active;
- the authorized Pages custom-domain step and exact root `CNAME` change are ready;
- Pages acknowledges `everettchurchofgod.com` or reports only the expected pre-delegation DNS wait.

**STOP** if Pages is disabled, source differs from `main` / root, the candidate is not deployed, metadata leaks `github.io`, or indexing safeguards fail.

### Gate 4 — execute only after explicit authorization

1. Save the Pages custom domain `everettchurchofgod.com`; capture the resulting setting and root `CNAME` change.
2. Reconfirm that no indexing file changed.
3. At eNom, replace only:
   - `amos.ns.cloudflare.com`
   - `izabella.ns.cloudflare.com`
   
   with:
   - `jaime.ns.cloudflare.com`
   - `meiling.ns.cloudflare.com`
4. Do not enter the EPP code and do not start a registrar transfer.
5. Record timestamp, operator, screenshots, and the exact submitted values.
6. Observe parent delegation and Cloudflare status until Active; Cloudflare notes propagation may take up to 24 hours.

**STOP** immediately for unexpected NS values, SERVFAIL/DNSSEC validation failure, zone removal, lost registrar access, unexplained record loss, or inability to reach either a viable Kingdom route or verified Ryan-controlled deployment.

## Post-cutover verification checklist

Do not declare success until every item passes from multiple public resolvers/networks:

- [ ] Cloudflare zone status is Active.
- [ ] Parent and recursive NS answers are `jaime.ns.cloudflare.com` and `meiling.ns.cloudflare.com`.
- [ ] No stale/invalid DS causes DNSSEC SERVFAIL.
- [ ] Apex returns only approved GitHub Pages addresses/behavior.
- [ ] `www` resolves through the exact CNAME and reaches the same site.
- [ ] GitHub Pages recognizes `everettchurchofgod.com`.
- [ ] Apex is canonical; `www` redirects to apex.
- [ ] Certificate is issued for required hostnames.
- [ ] HTTPS works without certificate, hostname, chain, or mixed-content errors.
- [ ] HTTP redirects to HTTPS after enforcement.
- [ ] Home, New Here, About, Ministries, Messages, Events, Give, and Contact load.
- [ ] Four active ministry routes load.
- [ ] All `index.php/` compatibility routes work.
- [ ] CSS, JavaScript, JSON, and other assets load.
- [ ] A nonexistent route serves the custom 404.
- [ ] Active pages remain `noindex,nofollow`.
- [ ] `robots.txt` still returns `Disallow: /`.
- [ ] Senior Adults remains `noindex,follow`.
- [ ] 404 remains `noindex`.
- [ ] Sitemap/canonical/OG metadata use `https://everettchurchofgod.com`, with no `github.io/ECOG-Website` leakage.
- [ ] Giving link remains absent.
- [ ] Sunday worship remains 10:00 AM.
- [ ] Any inventoried non-web service still resolves and functions.

## Rollback and continuity

### A. Kingdom still available

Rollback to Kingdom is permitted only if all are true:

- Kingdom confirms its origin and old zone remain operational;
- the captured old records and routing remain valid;
- eNom access is available;
- restoring old nameservers will not reintroduce an invalid DNSSEC/DS chain;
- the Product Owner authorizes rollback.

Then restore the captured old nameserver pair exactly, verify delegation/HTTPS/routes, and keep indexing blocked. Do not restore unverified stale records.

### B. Kingdom terminated

Never point back to Kingdom after its origin/zone is removed. The only acceptable recovery target is a verified Ryan-controlled deployment. Preserve the Ryan-controlled zone, repair Pages/custom-domain/certificate configuration, or route to another separately authorized and verified Ryan-controlled static deployment.

**STOP / outage escalation:** if Kingdom is unavailable and no verified Ryan-controlled deployment is healthy, do not improvise nameserver, proxy, origin, or indexing changes. Record the failure and return the exact proposed mutation to Ryan/Manager for emergency authorization.

## Registrar transfer / EPP plan

The registrar transfer is deliberately separate from website activation.

1. Complete and verify hosting/DNS cutover first.
2. Wait until the Ryan-controlled Cloudflare zone is Active; Cloudflare does not accept an authorization code while the zone is Pending.
3. Confirm the domain is eligible for transfer and not subject to a registry/60-day restriction.
4. Confirm accurate registrant contact data, renewal/expiration state, payment method, and transfer-approval email access.
5. Under separate Product Owner authorization, unlock all applicable registrar/transfer/privacy locks.
6. Request a fresh EPP code when ready; the existing code may expire. Do not expose it in repository evidence.
7. Enter the code only in the authorized destination registrar workflow, confirm payment and contacts, and approve the transfer request at eNom.
8. Verify nameservers and DNS resolution remain unchanged throughout and after transfer.
9. Re-lock the domain and confirm renewal/contact controls after completion.

Do not start the transfer during P02 preparation. Hosting stability must not depend on registrar-transfer timing.

## Remaining blockers before cutover authorization

- Explicit Product Owner authorization for the exact production mutations.
- Exact-head FULL PHASE CI, immutable freeze, and fresh HIGH-risk audit.
- eNom account/change access and registrant/renewal confirmation.
- DNSSEC status and parent DS verification.
- Complete Ryan-zone record inventory, including confirmation that no non-web records are missing.
- Pages custom-domain/domain-verification readiness.
- Exact root `CNAME` change approval.
- Certificate issuance and HTTPS enforcement remain future operational checks.
- A viable rollback path at execution time.
- Registrar transfer remains deferred.

## Official procedural references

- GitHub: Managing a custom domain for GitHub Pages — https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub: Configuring a publishing source — https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub: Securing Pages with HTTPS — https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- Cloudflare: Full setup / nameserver change — https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Cloudflare: Registrar transfer — https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/

## Owner preview

Owner preview should confirm:

1. the intended custom domain and apex/`www` behavior;
2. the exact prepared DNS records;
3. registrar and DNSSEC/DS access;
4. acceptance of the GO/STOP runbook;
5. the currently viable rollback case;
6. that indexing remains deferred;
7. which exact mutations may later be authorized.

No production action should be taken during preview.
