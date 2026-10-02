# ECOG-P01 reconciliation and cutover plan

Evidence captured read-only on 2026-10-02 UTC.

## Release boundary

This document prepares a future cutover. It does not authorize or perform merge, deployment, DNS mutation, GitHub Pages settings mutation, CNAME activation, production indexing, or production launch. Each remains a separate Product Owner decision.

## Preserved PR #15 reconciliation

PR #15 head `b957b46522c433c5ab2234597d4d974f9a0878c5` diverges from canonical baseline `56316ab56edca42547b28c4432f6062961ac0846` at 1 ahead / 5 behind. It is historical evidence only and must not be merged or retargeted.

| PR #15 path/change | Intent | Current canonical finding | Decision |
|---|---|---|---|
| `CNAME` containing `everettchurchofgod.com` | Bind the Pages site to the production host | Canonical has no CNAME. DNS control and Pages custom-domain readiness are unproven. | Retain as a future cutover requirement, but defer/reject inclusion in this pre-production checkpoint. |
| Twelve public pages: `index.html`, `new-here.html`, `about.html`, `ministries.html`, four active ministry pages, `messages.html`, `events.html`, `give.html`, and `contact.html` | Remove staging `noindex,nofollow` at launch | Canonical metadata and production canonical URLs remain current, while staging noindex is an intentional safety hold. | Retain only the intent. Supersede PR #15 page blobs with a fresh launch-time change from then-current canonical; do not copy stale page files. |
| `robots.txt` | Replace the staging crawl block with `Allow: /` and advertise the production sitemap | Canonical still deliberately blocks crawling and does not advertise the sitemap. | Retain as a launch-time transition; defer/reject inclusion until explicit indexing authorization. |
| Canonical/OG metadata and sitemap behavior | Advertise `https://everettchurchofgod.com` | Current canonical pages and `sitemap.xml` already use the production origin, and validation rejects staging metadata leakage. | Superseded by current canonical state; no PR #15 blob is needed. |
| Retired and error-route safeguards | Preserve Senior Adults and 404 noindex behavior | Current canonical validation covers both safeguards. PR #15 did not justify weakening them. | Retain current canonical behavior unchanged. |
| Giving boundary | Keep payments external and verified | Current `give.html` has no outbound payment link and collects no payment data. | Retain current canonical behavior; any provider link remains separately verified and scoped. |

No PR #15 product blob is copied into this checkpoint.

## Read-only public findings

### DNS

A read-only resolver query returned:

- Apex A: `104.21.85.191`, `172.67.209.140`
- Apex AAAA: `2606:4700:3035::ac43:d18c`, `2606:4700:3032::6815:55bf`
- `www` A/AAAA: the same Cloudflare proxy addresses
- Authoritative nameservers: `amos.ns.cloudflare.com`, `izabella.ns.cloudflare.com`
- SOA primary: `amos.ns.cloudflare.com`; responsible mailbox field: `dns.cloudflare.com`
- Observed address-record TTL: 300 seconds; NS TTL: 86400 seconds; SOA TTL: 1800 seconds

These records establish Cloudflare-fronted DNS, not who owns or can change the zone. DNS ownership/control remains unresolved and is a blocking prerequisite.

### HTTP and live destination

- The apex HTTPS URL returned the existing Everett Church of God site.
- The served page identifies “Kingdom Church Websites” in its footer and still shows historical content including Sunday worship at 9:30 AM. This is evidence of the current live destination, not authority to copy its facts.
- The HTTP apex was observed by the read-only web client to reach the same live content.
- The `www` name resolves in DNS, but its HTTPS behavior was not independently retrievable in the available read-only client.
- Direct socket checks were unavailable in the execution environment.
- The GitHub Pages project URL could not be independently retrieved by the available read-only web client. Pages enablement, build source, custom-domain status, and certificate status therefore remain unverified.

## Unresolved launch prerequisites

1. Identify and evidence the authorized Cloudflare account/zone operator.
2. Export the complete current DNS zone and record current proxy settings before mutation.
3. Confirm the existing host/provider shutdown and rollback contacts.
4. Confirm GitHub Pages is enabled, its source branch/path, build health, and the staging project URL.
5. Confirm the intended canonical host strategy: apex primary and explicit `www` redirect/alias behavior.
6. Confirm the exact GitHub Pages DNS records appropriate at cutover time.
7. Confirm custom-domain verification and HTTPS certificate readiness.
8. Reverify all public-facing church facts with Ryan/church leadership; the current live site's 9:30 AM value conflicts with repository-verified 10:00 AM content.
9. Independently verify any external giving destination before adding it.
10. Obtain separate Ryan authorization for merge and, later, production launch.

## Coordinated future cutover sequence

1. Freeze an audited source candidate after owner preview, FULL PHASE CI, and the HIGH-risk independent audit.
2. Reverify church facts, giving boundary, canonical URLs, sitemap membership, all active routes, compatibility routes, retired Senior Adults noindex, and 404 noindex.
3. Export DNS and capture the existing live-site response, TLS details, and rollback contacts.
4. Verify the Pages staging build without changing production.
5. After explicit launch authorization, configure/verify the Pages custom domain and only then introduce the exact CNAME source file if required by the approved Pages configuration.
6. Apply the approved DNS records while preserving the existing host until the replacement is verified.
7. Verify apex and `www` routing, HTTPS certificate validity, hostname coverage, redirects, and absence of mixed/staging metadata.
8. Only after routing and content verification, remove `noindex,nofollow` from the twelve active public pages and transition `robots.txt` to `Allow: /` with the production sitemap.
9. Verify sitemap, canonical and Open Graph URLs, active routes, all legacy compatibility routes, retired-route safeguards, 404 behavior, giving boundary, and public facts from the public network.
10. Monitor before retiring the old host. Record exact evidence and obtain closure authorization.

## Rollback plan

Before mutation, preserve the full DNS export, record-by-record proxy state, old-host account/contact details, current TTLs, and screenshots/headers for the live site. Keep the existing host active throughout cutover verification.

If DNS, certificate, routing, content, compatibility routes, indexing controls, or giving safety fail:

1. Restore the captured DNS records and proxy settings.
2. Re-enable the previous live-host routing without waiting for the replacement to be repaired.
3. Restore staging crawl protection if indexing was changed.
4. Remove or revert the Pages custom-domain/CNAME configuration only according to the captured pre-cutover state.
5. Verify apex and `www` return to the prior host over HTTPS.
6. Preserve failure evidence; do not retry until a new authorized candidate and cutover window exist.

Rollback is planned but not executable until the responsible DNS and hosting operators are identified and the complete pre-cutover state is captured.
