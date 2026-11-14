# ECOG Website — Cloud Browser QA checklist

Run on a **Ryan-approved current phase Preview** only. Record a SHA/version if verifiable; otherwise mark SHA UNVERIFIED and do not claim exact-head acceptance. Use no church-admin credentials or payment information. Test only changed features plus affected regression surfaces.

| Check | Steps | Expected |
| --- | --- | --- |
| ECOG-Q01 | Load the Preview homepage at desktop width | Hero, phone, buttons and navigation render; no broken assets |
| ECOG-Q02 | Navigate Home, About, New Here and Contact as available | Links resolve inside authorized Preview; verified church copy and headings remain intact |
| ECOG-Q03 | Inspect mobile and tablet widths | Navigation, cards, phone number and contact details remain readable without overlap |
| ECOG-Q04 | Inspect About / What We Believe cards | Heading contrast and alignment remain readable; paragraphs retain approved wording |
| ECOG-Q05 | Inspect directions links wherever present | Apple Maps and Google Maps are distinctly labeled and lead to expected destinations without silently substituting one |
| ECOG-Q06 | Inspect phone number placement and click/tap target | Placement matches phase requirement; `tel:` target matches the displayed, owner-approved number |
| ECOG-Q07 | Inspect Giving button / QR presentation in the approved preview | QR is legible, donor provider and verified destination are unchanged; **do not initiate a donation or checkout** |
| ECOG-Q08 | Inspect external Facebook / church links without authenticated provider actions | Expected destination matches documented owner-approved URL, no unexpected domain substitution |
| ECOG-Q09 | Check keyboard navigation/focus and major contrast issues | Primary controls are reachable and labels readable |
| ECOG-Q10 | Inspect page source/links for unexpected secrets or owner-only controls | No credential leakage or editing controls surfaced in public pages; report suspected exposure immediately |

Use `PASS`, `FAIL`, or `NOT RUN` per case, with exact evidence. Optional external/provider checks remain NOT RUN unless specifically authorized. Do not mistake a generic reachable destination for approval of a payment destination. Do not use public production for preview acceptance.
