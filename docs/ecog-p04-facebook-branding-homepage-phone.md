# ECOG-P04 — Facebook Hero Branding & Homepage Phone Visibility

- **State:** PREVIEW_READY
- **Risk:** LOW
- **Status:** PREVIEW_READY / OWNER DESKTOP AND MOBILE REVIEW PENDING
- **Manager contract:** [Issue #25](https://github.com/Ryan42062001/ECOG-Website/issues/25)
- **Activation:** [comment 6429378217](https://github.com/Ryan42062001/ECOG-Website/issues/25#issuecomment-6429378217)
- **Canonical base:** `7037d42005ca50462c65b52c132b6ab277157ce8`
- **Feature branch:** `phase/ecog-p04-facebook-branding-homepage-phone`
- **Pull request:** [#27 DRAFT / UNMERGED](https://github.com/Ryan42062001/ECOG-Website/pull/27)
- **Owner:** Ryan
- **Execution:** fresh Primary Builder, Regular Chat
- **Indexing:** NOT AUTHORIZED

## Owner-approved feature A: Facebook-blue homepage hero action

Only the homepage *hero* `Visit Our Facebook` pill uses the scoped `button--facebook` class. It has #0866FF fill and border, white text and a small white Facebook f drawn with inline SVG. The logo is decorative (`aria-hidden="true"`, `focusable="false"`); no external requests or assets are needed. Its darker hover background is #0758DB; the visible keyboard `:focus-visible` treatment has a white outline on the dark hero. Color calculations yield normal white-text contrast approximately **4.82:1** and hovered white-text contrast approximately **6.13:1** (WCAG AA 4.5:1 target).

The existing `Visit Our Facebook` label, `https://www.facebook.com/EverettCOG/`, secure new-tab attributes and screen-reader new-tab/official-church context are unchanged. `Plan Your Visit` remains first, cyan and primary; `Watch a Message` remains second and outlined; the three hero actions retain full-width mobile stacking at 620px and below. The separate `Stay Connected With Our Church Family` section immediately beneath service times is not changed in HTML or styling.

## Owner-approved feature B: visible homepage phone

The service-times/location strip gains a fourth item, **Call Us**, displaying the verified church phone **814-652-9287** as a real accessible and tappable `<a href="tel:+18146529287">` link. The original **Sunday Worship 10:00 AM**, **Wednesday Bible Study 7:00 PM**, and **Join Us Everett, PA** remain intact, as do homepage JSON-LD and the already-published Contact page. This is not a new church fact.

The `service-strip--home` class confines layout rules to this homepage: four equal columns on desktop, two columns at widths at or below 900px, and one column at widths at or below 620px. Existing dividers remain, with narrow-screen borders and the final item's border adjusted. No unrelated page's strip behavior or global JS is modified.

## Cumulative five authorized paths

1. `index.html` — two bounded homepage replacements only: hero anchor, service strip.
2. `assets/css/main.css` — appended P04-scoped styling; the preexisting CSS is untouched.
3. `.ai/CURRENT_PHASE.md` — P04 record before byte-for-byte preserved P03/P02 history.
4. `docs/PRODUCT_ROADMAP.md` — appended P04 lifecycle and scope; earlier roadmap unmodified.
5. `docs/ecog-p04-facebook-branding-homepage-phone.md` — this document.

Do not change `contact.html`, other pages, social-featured section, JS, header/footer/navigation, metadata, robots/CNAME/sitemap, DNS, Cloudflare, Pages, HTTPS, registrar/EPP, DNSSEC, infrastructure, external fonts, SDKs, trackers or embeds. Production indexing is NOT AUTHORIZED; site-wide active page `noindex,nofollow` and robots.txt `Disallow: /` remain protected.

## Release-governance and evidence

ECOG-P02 stays **CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED** with its authorization controls unchanged. ECOG-P03 stays **CLOSED / FACEBOOK HOMEPAGE RELEASE VERIFIED** with complete historical merge and closure evidence. P03 closure post-merge FAST `40416668780` and Pages deployment `40416671137` passed on canonical starting main; they are baseline history, not validation of P04.

This PREVIEW_READY source candidate needs its own exact-HEAD FAST and a READY Vercel preview verified externally. CI run IDs/results and preview deployment details belong in the draft PR after observation, not as unverified source claims. Ryan's approval of the two feature directions is NOT approval to merge or deploy P04.

## Owner desktop/mobile preview checklist

- [ ] Desktop hero: first **Plan Your Visit** is cyan, second **Watch a Message** outlined, third **Visit Our Facebook** filled Facebook blue with white f and white legible label.
- [ ] On mobile (including narrow screens), hero pills stack full-width with no clipping, and the blue icon, text, hover and keyboard focus states remain visible.
- [ ] Facebook hero action opens the approved official URL in a new tab, with accessible new-tab context.
- [ ] Service strip: Sunday 10:00 AM, Wednesday 7:00 PM, Everett PA and **Call Us 814-652-9287**; verify four across on desktop, 2x2 on tablet, 1x4 on mobile with no overflow.
- [ ] Tap the number; check that it invokes `tel:+18146529287`.
- [ ] Standalone Facebook feature section, mobile menu, YouTube/messages links and all other homepage content are unchanged.
- [ ] No page robots/indexing change, third-party embed, new library, tracker or production release occurred.

**STOP at PREVIEW_READY.** Await owner feedback and Manager-controlled punch list, Phase Sync, exact-head FULL, immutable freeze/audit decision and separately authorized protected merge. Do not manually deploy/promote.
