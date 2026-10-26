# ECOG-P03 — Homepage Facebook Spotlight

- **State:** PUNCH_LIST
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
- Stop at PREVIEW_READY for Ryan to check desktop/mobile and provide one consolidated punch list.
- Manager controls subsequent Phase Sync, FULL PHASE CI, freeze, and LOW-risk audit determination.
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
- **Gate:** stop at corrected owner re-preview after a NEW exact-head FAST. No FULL, freeze, audit, merge, promotion, or production deploy.

## FAST evidence

Historical completed first-preview FAST: [40402008658](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40402008658), SUCCESS on previous SHA `346c239118b820f1e67cad6b992dd5e91bb24096` only. Earlier FAST failures [40401573279](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401573279) and [40401849954](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40401849954) are historical failures.

New PUNCH_LIST candidate FAST: **pending external GitHub Actions conclusion**. Exact run ID, SHA, result and preview evidence will be recorded in PR #24 after verification; no PASS is claimed by this document.
