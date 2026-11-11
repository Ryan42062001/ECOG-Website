# ECOG-P08 — Homepage Phone Position & Verified Giving QR

**Current status:** PREVIEW_READY / PASTOR RECEIVING-ACCOUNT VERIFICATION + OWNER PREVIEW PENDING.
**Risk:** HIGH donor/payment destination, LOW homepage layout; source remains NONPRODUCTION DRAFT.

## Authorization and original QR provenance

- Binding Manager authorization: https://github.com/Ryan42062001/ECOG-Website/issues/37#issuecomment-6783047049
- Protected starting production main: f04e7ef6f49f5113fe99eafa4535c8a1c38b202c
- Branch: phase/ecog-p08-homepage-giving-qr, ONE DRAFT PR, no production merge permission.
- Ryan supplied a poster from the pastor reading “Scan to GIVE”; its original QR was decoded to exactly https://everettcog.churchcenter.com/home.
- The destination is a Church Center HOME portal. This is not a verified direct donation form and is not evidence about the actual intended bank/receiving account.
- One local static image: assets/images/giving-church-center-qr.svg. Python qrcode encoded the exact URL at error correction Q, version 4 (33x33 modules), with a four-module white quiet zone, white background and black modules. SVG viewBox 0 0 41 41, intrinsic 196px.
- Independent decoder proof: convert the EXACT generated SVG to 980x980 raster via CairoSVG, then use OpenCV QRCodeDetector (a different QR implementation) to detect/decode; detector returned exactly https://everettcog.churchcenter.com/home. SHA-256 of the independently decoded QR SVG: 3982d43a3de6f874a566ff7a31fab1527cc5925125c6409fb37b0109e00db094. This is an encoding/integrity check ONLY, not recipient validation.
- Zero external QR image endpoints, redirect/tracking links, embed scripts, runtime QR dependencies or donation test payments.

## User-facing changes within eight paths

1. index.html: the service strip's FOUR cells now show Sunday Worship / 10:00 AM, Wednesday Bible Study / 7:00 PM, the existing Call Us telephone 814-652-9287 with unchanged tel:+18146529287, and a fourth Give Online cell. The QR is local, visibly labeled and described by accessible img alt. A real Open Church Center text anchor points to the exact URL, is keyboard-focusable and opens a new tab with rel="noopener noreferrer" plus screen-reader notice. Conditional instruction says choose Give there IF available. City and full address remain in other site areas.
2. assets/css/main.css: scoped service-strip--home QR width 9.5rem (about 152 CSS px, ~3.7px per QR module), high-contrast white backing, focused link outline and compact instructions. Desktop four columns, tablet 2x2 at width <=900px and mobile stack at <=620px remain in place with no global card styling changes. Owner must physically scan on representative screens and check cropping/wrapping; source/CSS assertions alone are not visual-device PASS.
3. give.html: prominent accessible Open Church Center action to the SAME portal and explicit note it opens a HOME portal and a Give option may or may not be available. Retains phone, Contact page and original no-ECOG card/bank data collection statement. No embedded form and no claim of an independently verified financial beneficiary.
4. assets/images/giving-church-center-qr.svg: one independently decoded local high-contrast asset, no provider dependencies.
5. scripts/validate-release-candidate.test.js: six appended P08 cases, leaving all original 79 completely intact. Assert exact four-cell order, unchanged tel link, matching explicit homepage/Give portal anchors, accessible image/links, QR SHA/quiet zone, 4/2/1 breakpoints and keyboard focus, site safe alternate methods, real Jekyll-produced QR file identical to generated source, and negative mutations for the URL, telephone and image.
6–8. Top new P08 lifecycle in .ai/CURRENT_PHASE.md; appended P08 roadmap section only; this new document. Preserve all pre-P08 history byte-for-byte, and all P06 indexing/sitemap/robots/canonicals, Jekyll publication config, P07 nav/maps, Events/Sermons data, doctrine, legacy/404, workflow and hosting settings.

## Testing and evidence scope

- NEW exact-head FAST with complete release-shape/content/full-site/JS/accessibility/indexing/performance union and all 85 expected tests (79 original + six P08).
- The existing production-matched ghcr.io/actions/jekyll-build-pages:v1.0.13 artifact test remains, and a P08 test additionally checks the new QR is present and byte-identical in the actual generated _site directory. No workflow/dependency edits.
- Verify all eight and ONLY eight allowed paths in the final diff and that protected main is unchanged.
- Vercel must show an SSO-protected non-indexable exact-SHA Preview; independently observed anonymous HTTP 302 to Vercel SSO and X-Robots-Tag: noindex on the exact URL is required for a fully proven preview HTTP gate. Project configuration alone is not HTTP proof.

## NONNEGOTIABLE preproduction receiving identity gate

Pastor or an authorized Everett Church of God administrator must independently confirm:
1. Church Center portal ownership/identity belongs to the intended Everett Church of God organization.
2. The actual beneficiary/bank or receiving account is the church's intended authorized account.
3. Ordinary donors can access the correct working Give flow via the displayed HOME portal and review the correct recipient identity.
4. Owner scans the QR and clicks the text link at multiple device/view sizes, tests the unchanged phone call action and accepts the Giving page wording. No real gift transaction is authorized for testing.

If a direct pastor-verified donation URL is supplied later, it is a NEW scope change that requires owner approval, QR regeneration, independent re-decode and exact-head tests/audit; never silently guess /giving.

## Progress-First phase-specific audit and stop

After Owner preview and pastor review, a FRESH independent focused read-only donor-link/QR/security auditor in a separate chat examines the immutable changed scope and all evidence. Known BLOCKER, CRITICAL or HIGH findings halt donor-related merge/use until corrected with targeted re-audit; MEDIUM/LOW/NIT findings are documented for final integration-audit backlog per merged Progress-First Policy. A focused phase audit does not substitute for final comprehensive release audit, and this Builder cannot serve as its own independent auditor.

**STOP at PREVIEW_READY / RECIPIENT VERIFICATION REQUIRED.** No automatic production merge, FULL without Manager authority, deployment, GSC, DNS/Cloudflare/Vercel/GitHub settings, Church Center bank/provider configuration changes, payment processing or issue closure.
