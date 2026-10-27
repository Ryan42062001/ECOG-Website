# ECOG-P04 — Facebook Hero Branding & Homepage Phone Visibility

- **State (ECOG-P04):** CLOSED
- **Risk:** LOW
- **Status:** CLOSED / FACEBOOK HERO BRANDING & HOMEPAGE PHONE RELEASE VERIFIED
- **Manager contract:** [Issue #25](https://github.com/Ryan42062001/ECOG-Website/issues/25)
- **Activation:** [comment 6429378217](https://github.com/Ryan42062001/ECOG-Website/issues/25#issuecomment-6429378217)
- **Canonical base:** `7037d42005ca50462c65b52c132b6ab277157ce8`
- **Approved product source SHA:** `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`
- **Approved source FAST:** [40418871876](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40418871876) — COMPLETED / SUCCESS
- **Owner approval:** [Comment #6430262021](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430262021)
- **Manager Phase Sync authorization:** [Comment #6430296767](https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430296767)
- **Feature branch:** `phase/ecog-p04-facebook-branding-homepage-phone`
- **Release PR:** [#27 MERGED / CLOSED](https://github.com/Ryan42062001/ECOG-Website/pull/27)
- **Frozen release candidate:** `c995fc16a0b9923037261e41639bec9f806a4567`
- **Canonical merge SHA:** `a9207c879220c0a8b121eabae0155c9cfcf1aa58`
- **Closure branch:** `phase/ecog-p04-closure-sync` — separate documentation-only DRAFT PR / UNMERGED
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

Ryan's owner-preview acceptance: "Yes I like that" (PR #27 comment #6430262021), recorded at https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430262021. Manager documentation-only Phase Sync authorization: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430296767. Approved product source SHA `6e9a4a5c7ab3c48fd473b18539191a5a64f399b3`; exact source FAST [40418871876](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40418871876) COMPLETED / SUCCESS, 35/35 adversarial tests. The source preview deployment `dpl_3sfCwNKATkR69XL5GfPQSUvKFuiB` was READY at that SHA. The preview acceptance covers both designs but does not assert full mobile, route, accessibility interaction or dialer testing. The historical Phase Sync HEAD `c995fc16a0b9923037261e41639bec9f806a4567` passed exact-head FAST [40424969206](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40424969206); subsequent Manager FULL [40425362804](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425362804) and immutable LOW-risk freeze also passed. Ryan later separately authorized the protected merge and automatic Pages publication, as recorded in https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430512182. The earlier preview-only approval itself was not release authorization.

## Historical owner-preview criteria (not individually certified tests)

- [ ] Desktop hero: first **Plan Your Visit** is cyan, second **Watch a Message** outlined, third **Visit Our Facebook** filled Facebook blue with white f and white legible label.
- [ ] On mobile (including narrow screens), hero pills stack full-width with no clipping, and the blue icon, text, hover and keyboard focus states remain visible.
- [ ] Facebook hero action opens the approved official URL in a new tab, with accessible new-tab context.
- [ ] Service strip: Sunday 10:00 AM, Wednesday 7:00 PM, Everett PA and **Call Us 814-652-9287**; verify four across on desktop, 2x2 on tablet, 1x4 on mobile with no overflow.
- [ ] Tap the number; check that it invokes `tel:+18146529287`.
- [ ] Standalone Facebook feature section, mobile menu, YouTube/messages links and all other homepage content are unchanged.
- [ ] No page robots/indexing change, third-party embed, new library, tracker or production release occurred.

**Historical Phase Sync / FREEZE_READY gate, now satisfied:** Ryan had accepted the Facebook-blue hero and 814-652-9287 phone presentation; source FAST `40418871876`, Phase Sync FAST `40424969206`, exact-head FULL `40425362804` and immutable LOW-risk freeze on `c995fc16a0b9923037261e41639bec9f806a4567` all succeeded. The frozen product files were unchanged through the release. The separate explicit protected merge and Pages publication authority was then granted and executed; details follow in the production closure record. This historic stop gate is not a current pending P04 release blocker.

## Post-production Closure Sync — release verified

- **Final lifecycle:** CLOSED / FACEBOOK HERO BRANDING & HOMEPAGE PHONE RELEASE VERIFIED.
- **Manager administrative closure authorization:** https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430627525.
- **Immutable frozen release HEAD:** `c995fc16a0b9923037261e41639bec9f806a4567`; **PR #27 MERGED / CLOSED** into canonical protected main `a9207c879220c0a8b121eabae0155c9cfcf1aa58`.
- **Separate owner merge and publication approval:** https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430512182. Protected merge verification: https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430534874.
- **Exact merge-SHA post-merge FAST:** [40425685834](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685834), COMPLETED / SUCCESS.
- **Exact merge-SHA GitHub Pages build/deploy:** [40425685263](https://github.com/Ryan42062001/ECOG-Website/actions/runs/40425685263), COMPLETED / SUCCESS with build, report-build-status and deploy jobs successful.
- **Owner production smoke:** Ryan confirmed on the live homepage: "Ya i like it" after observing both the Facebook-blue hero with white logo and the visible **Call Us 814-652-9287** item, as recorded in https://github.com/Ryan42062001/ECOG-Website/pull/27#issuecomment-6430627525. This is owner-observed homepage visual acceptance, not comprehensive independent dialer, keyboard, device or all-route testing.
- **Product blob preservation:** `index.html` `58014608ba0490ed3706512f68ce51841fdcad7b`; `assets/css/main.css` `935c03f82d1d51d891383f46e9cfd34783ceb130`. No subsequent source/UI edits.
- **Closure PR scope:** documentation only: `.ai/CURRENT_PHASE.md`, `docs/PRODUCT_ROADMAP.md`, `docs/ecog-p04-facebook-branding-homepage-phone.md`. Existing P02 and P03 historical CLOSED records and prior roadmap evidence remain untouched.
- **Safeguards:** `noindex,nofollow` and `robots.txt` sitewide `Disallow: /` unchanged; Production Indexing NOT AUTHORIZED. No product assets, phone facts, Contact page, CNAME, robots, sitemap, metadata, DNS, Cloudflare, Pages settings, registrar/EPP, DNSSEC, TLS, secrets or infrastructure modified.

This closure document records a previously completed and owner-observed production release. The separate documentation-only closure PR remains DRAFT / OPEN / UNMERGED pending its own **NEW exact-head FAST**, Manager review, and **separate explicit Ryan closure-PR merge authorization**. No Builder FULL, freeze, audit, PR-ready transition, merge, deploy or new-phase implementation is authorized here.
