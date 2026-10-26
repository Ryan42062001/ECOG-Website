# ECOG-P03 — Homepage Facebook Spotlight

- **State:** CLOSED
- **Risk:** LOW
- **Status:** CLOSED / FACEBOOK HOMEPAGE RELEASE VERIFIED
- **Product Owner:** Ryan
- **Manager phase contract:** [Issue #23](https://github.com/Ryan42062001/ECOG-Website/issues/23)
- **Closure Sync authority:** [PR #24 comment 6428217574](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574)
- **Original canonical base:** `8b78795081f66c72a31432e6e62cc7670decfa47`
- **Historical feature branch:** `phase/ecog-p03-homepage-facebook-spotlight`
- **Released PR:** [#24 — MERGED / CLOSED](https://github.com/Ryan42062001/ECOG-Website/pull/24)
- **Frozen source HEAD:** `ca84a8930249e127551280bd0b56d6377debed7d`
- **Canonical merge SHA:** `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd`
- **Closure Sync branch:** `phase/ecog-p03-closure-sync` — documentation-only; DRAFT protected PR and separate merge authorization required
- **Execution mode:** Regular Chat / same Primary Builder
- **Production indexing:** NOT AUTHORIZED

## Final released outcome

The original goal was a prominent, **link-first** way for visitors to discover the Everett Church of God Facebook page, not an embedded feed. The released homepage retains **Plan Your Visit** as a cyan primary pill, **Watch a Message** as an outlined pill, and **Visit Our Facebook** as a matching outlined pill. The separate **Stay Connected With Our Church Family** section sits directly after service times and before the New Here content.

Both clickable Facebook actions continue to target exactly https://www.facebook.com/EverettCOG/ with safe new-tab behavior and assistive-technology context. The work used static markup/CSS, without Facebook embeds, iframes, SDKs, trackers, added fonts, APIs, authentication, or external libraries.

The owner reported an initial mobile hero Facebook action looked like an underlined text link; Manager authorized a bounded outlined-button correction in [comment 6427620205](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427620205). After a corrected mobile preview, Ryan explicitly accepted the button appearance, reflected in [Manager comment 6427794726](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726). That preview decision by itself was not merge or production-deployment authorization.

Following the separately controlled release merge and successful Pages deployment, Ryan opened the **live production homepage** and confirmed that the three hero actions, including the outlined Facebook action, appear as expected. [Manager's production acceptance and closure authorization](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574) records this as owner-observed production-homepage smoke acceptance; it does not assert independent route-by-route testing.

## Immutable release and CI history

| Phase evidence | Exact result |
| --- | --- |
| Initial FAST [40401573279](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401573279) | FAILURE (historical) |
| Initial implementation FAST [40401849954](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401849954) | FAILURE (historical; 30/35 adversarial tests due to duplicate indexing-field fixture match, not a relaxation of P02 controls) |
| First preview HEAD `346c239118b820f1e67cad6b992dd5e91bb24096` / [FAST 40402008658](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40402008658) | SUCCESS; subsequent owner punch list was still required |
| Corrected approved preview HEAD `4b37841328d1f501dc5b96ae3b0d7026c049c1e3` / [FAST 40404116363](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40404116363) | SUCCESS, 35/35 adversarial tests |
| Documentation-only Phase Sync / frozen source HEAD `ca84a8930249e127551280bd0b56d6377debed7d` / [FAST 40405308945](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40405308945) | SUCCESS, 35/35 adversarial tests |
| Protected PR #24 release merge | Canonical merge `8a58798c9784aebef26a39f0880c0ee8aaf5f2cd`; MERGED / CLOSED |
| Post-merge [FAST 40406287504](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406287504) | COMPLETED / SUCCESS on exact canonical merge SHA |
| GitHub Pages [40406286224](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40406286224) | COMPLETED / SUCCESS on exact canonical merge SHA; build and deploy jobs succeeded |
| Owner's live production-homepage confirmation | Three hero actions verified visually by Ryan, not independently all site routes |

Manager controls: original [activation Issue #23](https://github.com/Ryan42062001/ECOG-Website/issues/23); [punch-list correction comment](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427620205); [owner-preview acceptance / Phase Sync comment](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726); [post-production Closure Sync authorization](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6428217574). Historical earlier failures and successes are deliberately preserved rather than replaced by later PASS results.

## Lifecycle disposition

**CLOSED / FACEBOOK HOMEPAGE RELEASE VERIFIED** is the final ECOG-P03 release lifecycle status. Earlier lifecycle steps (`PREVIEW_READY`, `PUNCH_LIST`, `FREEZE_READY / MANAGER FULL PENDING`) are historical, not present blockers. PR #24 is merged and no longer a draft/open PR. The release already occurred through its separately governed protected merge and normal Pages workflow; no fresh release, deployment, merge, indexing activation, or infrastructure change is authorized through this documentation sync.

This Closure Sync is a **separate documentation-only draft PR** against the verified canonical merge and is not itself merged or deployed by the Builder. New exact-head FAST and Manager review are required, followed by a separate protected-PR merge authorization. Do not begin ECOG-P04 source edits in this assignment.

## Scope and protected controls

The original ECOG-P03 release was limited to these five paths: `index.html`, `assets/css/main.css`, `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, and `docs/ecog-p03-homepage-facebook-spotlight.md`. This Closure Sync changes **exactly** the final three documentation paths.

ECOG-P02 remains CLOSED and its historic production/DNS/Pages/Cloudflare/registrar/DNSSEC/indexing authorization fields and evidence stay untouched. Production Indexing remains NOT AUTHORIZED; all active pages retain `noindex,nofollow` and `robots.txt` still declares `Disallow: /`. This Closure Sync does not modify church facts, contacts, HTML, CSS, JavaScript, links, CNAME, robots, sitemap, page metadata, validators, GitHub Pages configuration, DNS, Cloudflare, registrar/EPP, DNSSEC, or other infrastructure. No external assets, scripts, or dependencies are added.
