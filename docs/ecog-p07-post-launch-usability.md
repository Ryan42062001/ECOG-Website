# ECOG-P07 — Post-Launch Navigation, Belief Cards & Apple/Google Maps

**Current lifecycle: CLOSURE_READY / FINAL VALIDATION PENDING** · Risk: MEDIUM · Product deployed and owner live-verified · Documentation closure PR DRAFT / UNMERGED

**Controlling authority:** [Manager bounded Closure Sync #6513328213](https://github.com/Ryan42062001/ECOG-Website/issues/32#issuecomment-6513328213). This is a historical release record and a **new docs-only closure proposal**, NOT completed formal issue closure or renewed permission to deploy product source.

## Precise release identity and independent approval

| Gate | Verified evidence |
| --- | --- |
| Original owner-accepted product preview | `9ba114575baf0a7b25b1b8084edd66e603f7307d`, [Product FAST #40627455361](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40627455361) SUCCESS 79/79 |
| Docs-only Phase Sync / frozen source | `91c8a00eb0757dad94199eec2713de0d72acaf57`; exact-source [FAST #40985314892](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40985314892) SUCCESS 79/79 and [FULL #40985754753](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40985754753) SUCCESS plus deterministic union repeat |
| New immutable MEDIUM freeze / independent audit | [Freeze #6512653712](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512653712); [fresh independent READ-ONLY audit PASS #6512772175](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512772175), no blocker or medium source defects |
| Separate Product Owner exact-SHA release authorization | [#6512965830](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512965830) explicitly approved only `91c8a00eb0757dad94199eec2713de0d72acaf57` for controlled production merge/Pages |
| Feature PR #33 | CLOSED / MERGED from `91c8a00eb0757dad94199eec2713de0d72acaf57` |
| Protected production merge SHA | `9c42eec7af733f6b8a71d612d3a17e0db1cedd81`; merge tree identical to the frozen audited source tree |
| Postmerge exact-SHA FAST | [#40988687568](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40988687568) COMPLETED / SUCCESS, **79/79** including complete validation union and actual Jekyll publish-boundary test |
| Exact-SHA GitHub Pages build + deploy | [#40988687355](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40988687355) COMPLETED / SUCCESS (both build and deployment) |
| Owner production HTTP | [Issue #32 #6513293212](https://github.com/Ryan42062001/ECOG-Website/issues/32#issuecomment-6513293212), **10/10 PASS** |
| Owner live visual and device acceptance | **“Yes i verified that”** recorded by Manager in [#6513328213](https://github.com/Ryan42062001/ECOG-Website/issues/32#issuecomment-6513328213) |

## Three live improvements accepted by owner

1. **Contact navigation:** Contact after Give in the shared desktop and mobile/hamburger header, with existing mobile semantics, nested relative routes and active-page handling preserved.
2. **Seven About belief H3 headings:** What We Believe headings are dark and horizontally centered on white cards; the seven doctrinal texts are preserved and their descriptions remain left-aligned. Scoped CSS preserves unrelated About layouts.
3. **Directions:** Explicit Apple Maps FIRST and working original Google Maps SECOND choices on Home, New Here and Contact, pointing to Everett Church of God, **11152 Lincoln Highway, Everett, PA 15537**. Links retain accessibility and new-tab safety. These were owner-observed live acceptance checks, not an independently exhaustive cross-device/keyboard certification.

The owner-accepted source's immutable preview root, immutable `/about.html`, and branch alias previously returned **3/3 observed anonymous HTTP 302 redirects to Vercel SSO plus `X-Robots-Tag: noindex`**, per [#6512456973](https://github.com/Ryan42062001/ECOG-Website/pull/33#issuecomment-6512456973). That evidence applies to those preview endpoints, not authenticated response headers or every preview URL.

## Live production HTTP results — exact observed scope

Owner PowerShell `Invoke-WebRequest -UseBasicParsing` returned the expected **HTTP 200** for `/`, `/about.html`, `/new-here.html`, `/contact.html`, `/robots.txt`, `/sitemap.xml`, `/data/events.json`, and `/data/sermons.json`. The exact engineering paths `/docs/PRODUCT_ROADMAP.md` and `/scripts/validate-launch-state.js` returned the expected **HTTP 404**. **10/10 PASS**. The observed status checks do not prove the body of every page, every mobile/browser behavior, or that Google has indexed twelve URLs; live visual/app functionality was accepted separately by the owner.

## New bounded documentation-only Closure Sync

- Starting protected `main` and immutable production baseline: `9c42eec7af733f6b8a71d612d3a17e0db1cedd81`.
- New branch: `phase/ecog-p07-closure-sync`. One **NEW DRAFT PR**, separate from merged feature PR #33.
- Exactly three allowed paths: `.ai/CURRENT_PHASE.md` (top P07 section only), `docs/PRODUCT_ROADMAP.md` (appended P07 section only), and this `docs/ecog-p07-post-launch-usability.md`.
- **Byte-for-byte preservation:** all historical P06/P02–P04 phase text below the P07 top section; all roadmap content before P07; existing website HTML/CSS/JS, all 79 tests/validators, SEO/robots/sitemap, Jekyll exclusion config, CNAME, Events/Sermons JSON, 404/retired/legacy, assets, CI workflows, secrets and production Pages/provider settings.
- P05 Issue #29 CLOSED; P06 Issue #30 remains **OPEN / LAUNCHED–GOOGLE INDEXING MONITORING**. No Search Console resubmission, indexed-page count claim or P06 closure is included.
- A NEW exact-head FAST (including full validation union and all 79 tests) must validate the closure-docs SHA; record its actual run/job result on the new draft PR after completion.

**STOP at CLOSURE_READY / FINAL VALIDATION PENDING for Manager review.** P07 Issue #32 remains OPEN. The Manager must separately obtain Ryan's explicit **exact new closure-docs SHA** protected-merge authorization, complete guarded merge and post-closure FAST/Pages verification, then formally close P07 if all gates pass. The previous P07 *product release* permission does NOT authorize merging this new docs-only PR. No Builder merge, production deployment, ready-state transition, issue closure, provider/Google/DNS changes or infrastructure actions.
