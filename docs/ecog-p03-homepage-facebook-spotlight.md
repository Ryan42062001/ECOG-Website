# ECOG-P03 — Homepage Facebook Spotlight

- **State:** FREEZE_READY
- **Risk:** LOW
- **Owner:** Ryan
- **Manager contract:** [Issue #23](https://github.com/Ryan42062001/ECOG-Website/issues/23)
- **Canonical base:** `8b78795081f66c72a31432e6e62cc7670decfa47`
- **Branch:** `phase/ecog-p03-homepage-facebook-spotlight`
- **PR:** one DRAFT PR targeting `main`, no automatic merge
- **Execution:** Regular Chat / one Primary Builder
- **Indexing:** NOT AUTHORIZED

## Owner-approved outcome

The pastor wants church life on Facebook highlighted prominently. Ryan approved the **link-first** design, not an embedded feed. Both the hero-level link and the featured homepage section point only to https://www.facebook.com/EverettCOG/.

## Bounded implementation

1. Preserve the existing hero content and primary **Plan Your Visit** CTA, alongside **Watch a Message**.
2. Offer a discoverable, accessible Facebook link beside those hero actions.
3. Place a featured **Stay Connected With Our Church Family** section directly after service times and before **New here?**.
4. Preserve responsive/mobile navigation, keyboard focus, and safe external-link behavior.
5. Use only static HTML and CSS. Do not add Facebook embeds, iframe/SDK, trackers, external fonts, APIs, or sign-in surfaces.

Authorized cumulative paths: `index.html`, `assets/css/main.css` when needed, `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, and this new file.

## Protected controls

ECOG-P02 remains CLOSED with its original exact authorization fields and historical closure evidence untouched. CNAME, robots.txt, sitemap.xml, active-page robots metadata, canonical/OG hosts, DNS, Cloudflare, Pages configuration, DNSSEC, registrar/EPP, and all production infrastructure stay unchanged. **Production Indexing: NOT AUTHORIZED** and sitewide `Disallow: /` remain in force.

## Validation and handoff

- Commit a coherent implementation candidate and collect exact-head FAST evidence (run ID, URL, conclusion).
- Verify two Facebook destinations, existing CTA/navigation/YouTube links, responsive focus, no embed/tracker or indexing changes, and the exact five-path boundary.
- Historical owner-preview gate completed: Ryan reviewed the corrected mobile hero and approved the new outlined Facebook button at exact source SHA `4b37841328d1f501dc5b96ae3b0d7026c049c1e3`.
- Phase Sync authorized by [Manager comment 6427794726](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726); only documentation is updated. Manager controls verification, exact-head FULL PHASE CI, immutable freeze, and LOW-risk audit determination.
- **Do not merge or deploy.** Merge requires Ryan's later separate explicit approval.

## Owner preview checklist

- [ ] Desktop: primary Plan Your Visit CTA and Watch a Message remain clear; Facebook hero link is discoverable.
- [ ] Desktop: featured section sits directly below service times and before New here?; typography, spacing, and contrast look good.
- [ ] Mobile: hero actions, Facebook panel, menu/toggle, and service strip stack without horizontal scrolling.
- [ ] Keyboard: skip link, nav, both Facebook anchors, and existing CTAs show visible focus; new tabs are announced.
- [ ] Both new links open exactly https://www.facebook.com/EverettCOG/; YouTube remains correct.
- [ ] Events and remaining homepage links work; no embed, SDK, tracker, external font, or authentication introduced.
- [ ] Production indexing remains blocked; no merge or production changes are authorized.

## Owner punch list (Manager-authorized)

- **Status:** PUNCH_LIST / bounded hero-button correction complete; owner re-preview pending.
- **Authorization:** https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427620205.
- **Feedback:** Ryan's mobile screenshot showed the hero Facebook action rendered as underlined text rather than a button.
- **Correction:** Use the existing `button button--outline-light` style for **Visit Our Facebook**, preserving the official Everett Church of God destination and screen-reader new-tab announcement.
- **Mobile:** scope full-width stacking for all three hero actions at viewport widths 620px and below.
- **Unchanged:** primary cyan Plan Your Visit, Watch a Message, the standalone featured Facebook section, existing page behaviors, and all P02/indexing protections.
- **Historical gate outcome:** corrected owner re-preview was accepted after exact-head FAST `40404116363` SUCCESS. This acceptance is not merge or production-deployment authorization.

## FAST evidence

Historical completed first-preview FAST: [40402008658](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40402008658), SUCCESS on previous SHA `346c239118b820f1e67cad6b992dd5e91bb24096` only. Earlier FAST failures [40401573279](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401573279) and [40401849954](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401849954) are historical failures.

Corrected PUNCH_LIST source SHA: `4b37841328d1f501dc5b96ae3b0d7026c049c1e3`. Exact-head FAST [40404116363](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40404116363) **COMPLETED / SUCCESS** (35/35 adversarial tests and validation union PASS). Owner accepted the corrected mobile hero via [Manager comment 6427794726](https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726).

Earlier initial BUILDING FAST [40401573279](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401573279): FAILURE. Initial coherent implementation FAST [40401849954](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401849954): FAILURE (30/35 tests due to duplicate P03 indexing-field fixture collision). Those failures remain historical; the first-preview SUCCESS [40402008658](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40402008658) applies only to its old SHA.

## Phase Sync / FREEZE_READY

- **State:** FREEZE_READY / OWNER PREVIEW ACCEPTED — MANAGER FULL PENDING.
- **Owner approval:** corrected mobile/desktop hero presentation is accepted; only visual preview acceptance, not merge/deployment authority.
- **Approved product-source SHA:** `4b37841328d1f501dc5b96ae3b0d7026c049c1e3`.
- **Manager Phase Sync authorization:** https://github.com/Ryan42062001/ECOG-Website/pull/24#issuecomment-6427794726.
- **Phase Sync scope:** documentation-only. `index.html` and `assets/css/main.css` retain exactly the approved source blobs. The cumulative PR path set stays the original five.
- **Phase Sync CI:** run new exact-head FAST on the resulting docs-only commit; retain exact run ID, SHA and conclusion in PR #24 after the GitHub Actions result is observed.
- **Next authority:** Stop at FREEZE_READY after Phase Sync FAST. Manager controls FULL, freeze and any subsequent LOW-risk audit requirement. Separate explicit Ryan authorization remains necessary before any merge or production deployment; indexing remains NOT AUTHORIZED.

