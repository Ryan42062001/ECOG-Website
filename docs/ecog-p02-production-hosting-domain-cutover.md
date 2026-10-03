# ECOG-P02 — Production Hosting & Domain Cutover

- State: REMEDIATING
- Risk: HIGH
- Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH
- Product Owner: Ryan
- Manager / Architect / Planner: ChatGPT
- Activation baseline: `fdcb14aede80215f45b898dd725e1ae633afae49`
- Phase branch: `phase/ecog-p02-production-hosting-domain-cutover`

## Release boundary

This is a post-audit protected-path remediation checkpoint. The Product Owner authorized the production launch, DNS changes, Pages custom domain, and Cloudflare cutover, but those authorization fields do not claim that any live mutation has completed. This branch adds the exact production `CNAME` candidate without changing nameservers, Cloudflare records, DNSSEC/DS, registrar/EPP state, indexing, merge state, deployment, or live launch state.

Production Launch: AUTHORIZED  
DNS Changes: AUTHORIZED  
Pages Custom Domain: AUTHORIZED  
Cloudflare Cutover: AUTHORIZED  
DNSSEC Changes: NOT AUTHORIZED  
Registrar Transfer: NOT AUTHORIZED  
Production Indexing: NOT AUTHORIZED

PR #15 remains historical evidence only. No stale PR #15 blob is used.

## Post-audit remediation evidence

1. Previous immutable audit target: `c4dc1357c0d363d0a5f43a305a4ad99d808e20b4`.
2. Previous independent HIGH-risk audit: **PASS**.
3. Explicit Product Owner production-cutover authorization: PR #20 comment `5969764264`.
4. Operational attempt: GitHub Pages Custom Domain save was attempted for `everettchurchofgod.com`.
5. Safe failure: Protect Main blocked GitHub's direct `CNAME` commit.
6. Manager decision: branch protection stays intact; remediation authorization is PR #20 comment `5969870029`.
7. Replacement strategy: the exact production `CNAME` travels through the normal protected PR path.
8. Required replacement evidence: new FAST, exact-head FULL, immutable freeze, and targeted fresh HIGH-risk re-audit.
9. The previous audited SHA is preserved and is not silently retargeted.

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

A `CNAME` file alone does not complete the settings change. The exact production mutation is now authorized, but Protect Main blocked GitHub's direct commit. Because Pages publishes from `main` / root, this remediation carries `CNAME` through PR #20. While unmerged it does not change the live Pages source; after an explicitly authorized protected merge it will exist at `main:/CNAME`.

### Authorized future ordering

1. Replacement candidate passes FAST.
2. Manager triggers exact-head FULL.
3. Manager freezes the replacement SHA.
4. A fresh targeted HIGH-risk re-audit passes.
5. Ryan explicitly authorizes merge.
6. Merge PR #20 through protected `main`.
7. Capture the exact merge/canonical SHA.
8. Run post-merge FAST.
9. Verify Pages deployment and the `CNAME`/custom-domain state.
10. If Pages still requires confirmation, perform only the already-authorized `everettchurchofgod.com` Custom Domain setting action.
11. Immediately before registrar mutation, re-query public DS and require no DS; re-query authoritative NS and require the expected Kingdom pair.
12. Perform only the authorized delegation replacement from `amos.ns.cloudflare.com` / `izabella.ns.cloudflare.com` to `jaime.ns.cloudflare.com` / `meiling.ns.cloudflare.com`.
13. Observe the Ryan-controlled Cloudflare zone until Active.
14. Verify HTTPS, apex/`www`, routes, assets, custom 404, and all indexing safeguards.

Prepared DNS records match GitHub's documented apex A addresses:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`
- `www CNAME Ryan42062001.github.io` (no repository suffix)

The prepared records are DNS-only. No wildcard record is authorized.

## Immutable audit target and operational CNAME reconciliation

The previous immutable P02 audit target is `c4dc1357c0d363d0a5f43a305a4ad99d808e20b4`. It remains preserved audit evidence and is not retargeted. The replacement protected-PR candidate containing the exact root `CNAME` must independently pass FAST, exact-head FULL, immutable freeze, and targeted fresh HIGH-risk re-audit.

After an authorized merge, capture the exact merge/canonical SHA and run post-merge FAST. If a subsequent GitHub Pages Custom Domain confirmation creates any canonical source commit, capture its exact SHA, treat it as separately authorized cutover evidence, run FAST on it, and reconcile it into P02 post-cutover/closure evidence. Do not combine unrelated source work with that operational state; unrelated changes require a new candidate and appropriate freeze/audit evidence.

## DNSSEC / DS prerequisite

### Current owner-preview evidence

- Ryan's public DS lookup reported: `everettchurchofgod.com does not have any DS records.`
- Kingdom-side authoritative DNS remained visible, including `amos.ns.cloudflare.com`.
- No parent DS is currently evidenced.
- This clears the specific preview-time blocker of a currently published parent DS record. It does **not** prove that DNSSEC can never become a cutover problem.

### Mandatory cutover-time recheck

Immediately before any nameserver mutation:

1. Query public DS state again from reliable public resolvers/registry evidence.
2. Verify that no parent DS exists.
3. Query current authoritative NS and verify the expected Kingdom pair remains in effect.
4. Record the exact lookup output and timestamp.
5. **STOP** if a DS record exists, the lookup is unavailable or inconclusive, results conflict, authoritative nameservers are unexpected, or DNSSEC behavior is unclear.

If a DS record appears, do not mutate nameservers or DNSSEC under the existing authorization. Return the exact condition for separately reviewed remediation. No DNSSEC or DS change was performed.

## Nameserver cutover runbook

### Gate 0 — authorization

**GO only if all are true:**

- the exact P02 candidate has passed FULL, immutable freeze, and independent HIGH-risk audit;
- Ryan explicitly authorizes the exact Pages custom-domain/CNAME and nameserver actions;
- GitHub Pages staging remains healthy;
- prepared Ryan-controlled Cloudflare records remain exact and DNS-only;
- an immediate public DS query returns no DS;
- current authoritative nameservers are the expected Kingdom pair;
- an authorized operator capable of changing registrar nameservers is identified;
- the Pages custom-domain operation is ready;
- a verified Ryan-controlled recovery target is healthy;
- a cutover operator and observation window are named.

**STOP** for any DS record, unavailable/inconclusive DS lookup, unexpected nameservers, unavailable registrar operator, unexpected Cloudflare record change, unavailable staging site, Pages/custom-domain mismatch, missing Ryan-controlled recovery target, authorization ambiguity, moved candidate, absent FULL/audit, or inability to observe/recover the change.

### Gate 1 — registrar and delegation readiness

Ryan currently does **not** have eNom/registrar control-panel access.

**GO only if all are true:**

- either Ryan/authorized church personnel have obtained registrar access capable of changing nameservers, or Kingdom/eNom has accepted the exact operator handoff below;
- the named operator is available for the approved window;
- Ryan/Manager reconfirms authorization immediately before Kingdom/eNom acts;
- registrant ownership, renewal status, and registrar contact path are confirmed;
- domain lock/transfer state is recorded; no unlock or transfer is requested for the nameserver operation;
- immediate DS and authoritative-NS evidence passes Gate 0;
- current NS answers are `amos.ns.cloudflare.com` and `izabella.ns.cloudflare.com`;
- execution evidence can be captured.

**STOP** if registrar access/operator availability is absent, ownership is disputed, authorization is stale or ambiguous, current delegation differs, or the operator will not follow the exact limited instruction.

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

1. Save the Pages custom domain `everettchurchofgod.com`; capture the resulting setting and exact root `CNAME` commit SHA.
2. Reconfirm that no indexing file changed and run FAST on any canonical source commit created by the Pages action.
3. Ryan/Manager gives immediate confirmation to the identified registrar operator.
4. The operator changes **only** the registrar nameserver delegation:

   **REMOVE / REPLACE**
   - `amos.ns.cloudflare.com`
   - `izabella.ns.cloudflare.com`

   **WITH**
   - `jaime.ns.cloudflare.com`
   - `meiling.ns.cloudflare.com`

5. The operator must not:
   - modify the Ryan-controlled Cloudflare zone;
   - alter the prepared GitHub Pages records;
   - enter the EPP code;
   - begin registrar transfer;
   - change ownership or contacts;
   - change DNSSEC/DS unless a separately reviewed condition and authorization explicitly require it.
6. Record execution time and capture screenshots or registrar confirmation showing the submitted nameserver values.
7. Observe parent delegation and Cloudflare status until Active.

**STOP** immediately for unexpected NS values, a newly published or indeterminate DS record, DNSSEC validation failure, zone removal, lost operator access, unexplained record loss, unauthorized extra mutation, or inability to reach the verified Ryan-controlled deployment.

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

## Remaining gates before live cutover

- Replacement exact-head FULL PHASE CI, immutable freeze, and targeted fresh HIGH-risk re-audit.
- Explicit merge authorization for the replacement candidate.
- An identified authorized registrar operator: Ryan/church personnel with access, or Kingdom/eNom accepting the exact limited handoff.
- Cutover-time reconfirmation that public DS remains absent and authoritative NS remains the expected Kingdom pair.
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

No live cutover action is performed by this remediation. Stop after replacement FAST; Manager-controlled exact-head FULL, freeze, and targeted fresh HIGH-risk re-audit are required next.
