# AI collaboration workflow — ECOG Website

**Proposal:** Owner-directed role allocation, 2026-11-13. Becomes active only after Ryan reviews and merges this documentation PR. Existing `docs/WORKFLOW.md`, `docs/PROGRESS_FIRST_POLICY.md`, `AGENTS.md`, active phase/Manager contracts, branch protections and all exact-SHA evidence gates still apply. This document changes **who does the work**, not what can be released or deployed.

## Team and boundaries

| Role | Primary tool | Allowed responsibility |
| --- | --- | --- |
| Product Owner | Ryan | Chooses scope, confirms church facts/donor destination, explicitly authorizes protected merges, Pages production releases, DNS and other provider changes |
| Primary Builder | **Claude Code** | Owns one phase implementation branch/PR at a time; writes code/tests/docs, verifies CI; integrates reproducible QA findings |
| Fallback Builder | **ChatGPT Codex** in a separately activated session | When Claude credits are unavailable, may take over a *clearly handed-off, non-overlapping* branch/task; verifies live repo and exact SHA first; never competes with Claude on the same branch |
| Browser QA | **ChatGPT Work — Cloud Browser** | Tests an explicitly authorized source Preview as a visitor, using `docs/workflow/QA_CHECKLIST.md`; files actionable GitHub `qa-finding` issues; never codes or deploys |
| Independent Auditor | A **fresh non-builder AI session**, preferably ChatGPT for HIGH-risk donor/payment, DNS or security scope | Reviews changed code, exact SHA and evidence. Must not be the same session that implemented the change |
| Manager | ChatGPT regular Chat | Plans phases, reconciles GitHub CI/PRs, tracks risk and reviews evidence, escalates release decisions to Ryan |

The previous policy made regular Chat the default builder and reserved Work as a "Super Builder". **After approved merge, Claude becomes the default Builder and Work's normal job is bounded Cloud Browser QA.** Using Work for source coding, personal Chrome, or desktop computer control remains a separate exceptional task requiring Ryan's explicit approval and guardrails.

## Phase delivery sequence

1. Ryan defines and prioritizes a phase; Claude reads the active repository phase contract and builds on the approved phase branch, with exactly one Builder owning that branch.
2. Claude runs all required tests and exact-head CI, and produces a preview only through previously authorized mechanisms. A source screenshot does not count as a deployed-browser PASS.
3. When the proper source Preview is accessible and its commit matches the target, a separate Work session performs the project-specific checklist. Work records **PASS / FAIL / NOT RUN** for each applicable check; missing evidence is never PASS.
4. Work opens one `qa-finding` GitHub issue per reproducible problem, with steps, expected/actual, risk and safe screenshot (no secrets). Claude fixes the issues; Work retests affected screens at the updated deployed SHA.
5. At phase end, a fresh independent reviewer audits the exact changed scope and required CI/evidence. BLOCKER/CRITICAL/HIGH means HOLD and targeted re-review after fix; document MEDIUM/LOW/NIT per the progress-first policy.
6. Only Ryan authorizes protected merge, production Pages release, DNS, Giving destination changes, or other provider/real-user/irreversible operations. Final comprehensive audit remains required at the repo's final release gate.

## ECOG-specific QA and privacy

- Default to **Cloud Browser** isolated from Ryan's personal signed-in Chrome/desktop. Never log into church admin, domain registrar, donor, or payment accounts. Do not use `@Chrome` or `@Computer` for routine QA.
- Run **only an explicitly authorized branch Preview**; never assume the Vercel Preview is reachable or authorized. If it requires SSO, stop rather than bypassing access. Public production is not a substitute.
- Check home, navigation, About beliefs copy/contrast, Contact and phone positions, mobile layout, Apple/Google Maps link labeling, and the **owner-supplied Giving QR/link destination**. Inspect the link/QR destination without initiating donations, entering payment details, or visiting a checkout with authenticated accounts. Donor-destination mismatches are a HIGH-risk HOLD.
- Preserve verified church facts, doctrinal wording, phone number, and original links; Work must not change copy, DNS, Cloudflare, GitHub Pages, Vercel, indexing configuration, or giving provider settings.
- Never invent test results, captured screenshots or a Preview SHA. If a check depends on church owner observation or privileged access, mark NOT RUN and give Ryan the precise manual step.

## Evidence handoff

Every Work report must identify repository, phase PR, **deployed Preview SHA**, checklist revision, each applicable Q number with PASS/FAIL/NOT RUN, reproducible findings and GitHub issue URLs, screenshot redaction and any blockers. Manager verifies Builder PR SHA, tests and audit independently before requesting owner approval.

**Work activation:** `docs/workflow/WORK_MODE_PROMPT.md`. **QA cases:** `docs/workflow/QA_CHECKLIST.md`. Neither document grants access to Production or private church/provider accounts.
