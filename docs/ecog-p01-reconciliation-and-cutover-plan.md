# ECOG-P01 reconciliation and cutover plan

Evidence captured read-only on 2026-10-02 UTC and updated after Product Owner preview.

## Release boundary

This document prepares a future cutover. It does not authorize or perform merge, deployment, DNS mutation, Cloudflare mutation, GitHub Pages settings mutation, custom-domain mutation, CNAME activation, production indexing, or production launch. Each remains a separate Product Owner decision.

## Owner-confirmed launch facts

- Kingdom Church Websites currently controls the Cloudflare DNS zone for `everettchurchofgod.com`. Ryan has not established independent zone access.
- The current correct Sunday worship time is **10:00 AM**. The old Kingdom-hosted site's 9:30 AM value is stale historical launch evidence, not an unresolved fact conflict.
- `everettchurchofgod.com` is the approved primary production host. `www.everettchurchofgod.com` should redirect or alias to the apex under the eventually approved DNS/Pages configuration.
- Launch should contain no giving link unless the external giving destination is independently verified. No speculative provider or URL is authorized.
- The Kingdom Church Websites plan was cancelled, and Ryan expects its hosting to end on **October 2, 2026**. It is not a durable post-cutover fallback.

## Preserved PR #15 reconciliation

PR #15 head `b957b46522c433c5ab2234597d4d974f9a0878c5` diverges from canonical baseline `56316ab56edca42547b28c4432f6062961ac0846` at 1 ahead / 5 behind. It is historical evidence only and must not be merged or retargeted.

| PR #15 path/change | Intent | Current canonical finding | Decision |
|---|---|---|---|
| `CNAME` containing `everettchurchofgod.com` | Bind the Pages site to the production host | Canonical has no CNAME. Pages is not currently enabled and zone handoff is incomplete. | Retain as a future cutover requirement, but reject inclusion in this checkpoint. |
| Twelve public pages | Remove staging `noindex,nofollow` at launch | Production metadata remains current while staging noindex is an intentional safety hold. | Retain only the intent. Supersede PR #15 blobs with a fresh launch-time change from then-current canonical. |
| `robots.txt` | Allow crawling and advertise the production sitemap | Canonical deliberately blocks crawling and does not advertise the sitemap. | Retain as an authorized launch-time transition only. |
| Canonical/OG metadata and sitemap behavior | Advertise `https://everettchurchofgod.com` | Current canonical pages and sitemap already use the production origin; validation rejects staging metadata leakage. | Superseded by current canonical state. |
| Retired and error-route safeguards | Preserve Senior Adults and 404 noindex behavior | Current validation covers both safeguards. | Retain current canonical behavior unchanged. |
| Giving boundary | Keep payments external and verified | `give.html` has no outbound payment link and collects no payment data. | Retain the absent-link state until a destination is independently verified. |

No PR #15 product blob is copied into this checkpoint.

## Read-only production findings

### DNS and current destination

Observed public DNS records:

- Apex A: `104.21.85.191`, `172.67.209.140`
- Apex AAAA: `2606:4700:3035::ac43:d18c`, `2606:4700:3032::6815:55bf`
- `www` A/AAAA: the same Cloudflare proxy addresses
- Nameservers: `amos.ns.cloudflare.com`, `izabella.ns.cloudflare.com`
- SOA primary: `amos.ns.cloudflare.com`; responsible mailbox field: `dns.cloudflare.com`
- Observed address TTL: 300 seconds; NS TTL: 86400 seconds; SOA TTL: 1800 seconds

The apex HTTPS URL serves the Kingdom-hosted Everett Church of God site. That site exposes the stale 9:30 AM value and remains historical evidence only. Public records plus Ryan's confirmation establish Kingdom's current Cloudflare-zone control; they do not establish Ryan's independent access.

The `www` name resolves, but its HTTPS routing was not independently retrievable in the available read-only client.

### GitHub Pages

- Repository metadata reports `has_pages: false`.
- Repository homepage metadata lists `https://ryan42062001.github.io/ECOG-Website/`, but the URL was not retrievable by the read-only web client. A metadata link is not deployment evidence.
- No active Pages deployment or successful Pages build was established.
- The available GitHub connector did not permit read access to the Pages settings, deployments, or workflow-list endpoints. Source branch/folder, custom-domain state, HTTPS enforcement, and certificate state therefore could not be independently inspected.
- The candidate project URL's noindex behavior could not be tested because the site was not reachable.

**Continuity conclusion:** the repository's static assets and validation are ready for hosting preparation, but GitHub Pages is not currently usable as continuity protection. Loss of the Kingdom host is therefore both a DNS/control risk and a hosting-enablement risk until an explicitly authorized Pages configuration is enabled and verified.

## Ready before Kingdom shutdown

- Current static site source exists on canonical main and passes the complete FAST validation union.
- The 10:00 AM Sunday worship fact, apex-primary choice, `www` intent, and absent-giving-link decision are resolved.
- Production canonical metadata and sitemap content already target the apex.
- Staging crawl protection remains active.
- PR #15 has been reconciled without copying stale product blobs.
- Cutover verification and two-case continuity/rollback procedures are documented.

## Blocked / requires owner action

1. Establish Ryan-controlled registrar and Cloudflare access before Kingdom service/access ends.
2. Obtain and preserve the complete DNS, routing, TLS, and origin handoff package described below.
3. Confirm the exact Kingdom hosting shutdown time and an emergency contact/escalation path.
4. Under separate authorization, enable and verify a Ryan-controlled hosting target before changing production DNS.
5. Verify the Pages source branch/folder, deployment health, project URL, noindex state, custom-domain status, and HTTPS/certificate state after enablement.
6. Preserve all mail and non-website services during any nameserver or record change.
7. Obtain separate explicit Ryan authorization for merge and a later, separate production-launch authorization.

## Kingdom/Cloudflare handoff package

Before October 2, Ryan should obtain from Kingdom:

- registrar identity; registrar account access; registrant/ownership identity and contact email; renewal status; transfer lock and authorization/EPP procedure;
- current nameservers and who can change them;
- Cloudflare account/zone transfer procedure or delegated zone access for Ryan;
- a full DNS-zone export;
- every A, AAAA, CNAME, MX, TXT, SRV, and other record;
- all email SPF, DKIM, and DMARC records and the identity of each mail provider;
- TTL and Cloudflare proxy on/off state for every record;
- redirects, Page Rules, Redirect Rules, Bulk Redirects, Workers/routes, or other domain routing logic;
- SSL/TLS mode, edge-certificate settings where relevant, and any origin certificate dependencies;
- all origin-host records and current hosting-origin details;
- every record unrelated to the website that must survive migration, including mail, verification, calendaring, or other services;
- a timestamped export plus screenshots of zone settings, rule settings, and the current live response;
- the exact hosting termination time and a working technical escalation contact.

Do not change nameservers or recreate only the web records. Email and other domain services must be inventoried and preserved.

## Coordinated future cutover sequence

1. Complete Phase Sync, exact-head FULL PHASE CI, immutable freeze, and the HIGH-risk independent audit.
2. Reverify church facts, absent giving link, canonical URLs, sitemap membership, active routes, compatibility routes, Senior Adults noindex, and 404 noindex.
3. Secure the handoff package and Ryan-controlled registrar/zone access.
4. After separate authorization, enable the Pages source and verify a healthy project deployment while production DNS remains unchanged.
5. Verify the project deployment retains staging noindex and has no `github.io/ECOG-Website` metadata leakage.
6. Capture the complete pre-cutover DNS/routing/TLS state and verify mail/non-web services.
7. After explicit launch authorization, configure and verify the Pages custom domain and introduce the exact source `CNAME` only if required by the approved configuration.
8. Apply approved apex and `www` DNS routing, preserving all unrelated records and making `www` redirect/alias to the apex.
9. Verify apex/`www` routing, HTTPS certificate validity and hostname coverage, redirects, active routes, legacy compatibility routes, and public facts.
10. Only after routing/content verification, remove `noindex,nofollow` from the twelve active public pages and transition `robots.txt` to `Allow: /` with the production sitemap.
11. Verify sitemap, canonical/Open Graph URLs, indexing state, retired Senior Adults safeguards, 404 behavior, giving boundary, and absence of staging metadata from the public network.
12. Record evidence and obtain separate closure authorization.

## Continuity and rollback plan

### A. Pre-cutover rollback

If Kingdom hosting is still online **and** authorized DNS control is available, a failed cutover may restore the captured Kingdom-era DNS routing, proxy states, redirect rules, and TLS settings. Verify apex, `www`, mail, and other services after restoration. This path expires when Kingdom terminates hosting and must not be represented as durable.

### B. Post-Kingdom continuity

After Kingdom hosting ends, rollback cannot depend on restoring its website. Continuity requires a verified Ryan-controlled host. The existing repository is the source candidate; GitHub Pages is a potential host only after separate authorization, enablement, a successful deployment, direct project-URL verification, and confirmation of staging noindex protection.

If the Kingdom site disappears before those conditions are met, no repository-only action can preserve the production domain. Stop and obtain explicit Manager/Ryan authorization for the exact hosting and DNS mutations required. Do not improvise a production change under the punch-list authorization.

For any authorized future cutover failure:

1. Keep or restore staging crawl protection.
2. Route only to a previously verified Ryan-controlled deployment.
3. Restore the full captured DNS/proxy/rule set when its destination remains valid; never restore dead Kingdom origin records.
4. Revert Pages custom-domain/CNAME state only according to the captured pre-cutover configuration.
5. Verify apex, `www`, HTTPS, mail, and every inventoried non-web service.
6. Preserve failure evidence and wait for a new authorized candidate/window.

Rollback planning is complete; executable rollback remains blocked until Ryan-controlled DNS and a verified continuity host exist.
