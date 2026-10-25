# Speed Workflow V2.1

## Execution mode — owner policy (2026-10-24)

- **Regular Chat is the default execution environment** for the Project Manager, the single Primary Builder for a phase, and each fresh Independent Auditor. Builder and Auditor must remain independent conversations when an independent audit is required.
- **Super Builder means ChatGPT Work mode.** Reserve it for a narrowly defined task that genuinely requires browser/computer use, a complete interactive development environment, local terminal/integration execution, or another unavailable capability that connected GitHub/provider tools and CI cannot accomplish reliably.
- **Escalation requires owner approval.** The regular Builder should first report the exact blocker, which validation is unavailable, the smallest proposed Super Builder task, and the reason ordinary connected tools, CI, and owner preview are insufficient. Do not spend Work-mode usage merely for convenience.
- **Do not weaken verification.** If regular Chat cannot run or prove a required test, mark that evidence unresolved and stop at the applicable gate; never replace it with an unsupported PASS. Use available connected tools, exact-head GitHub Actions checks, and owner-operated previews where authorized.
- **Execution-mode choice changes no project governance.** Keep the existing phase authority, one Primary Builder/phase PR, source-of-truth hierarchy, immutable SHA and CI/audit gates, fresh auditor independence, protected branch rules, and separate explicit owner approvals for merge, deployment, secrets, paid resources, destructive actions, and production changes.
- Prior references to a "Codex Builder" describe the builder role or historically used execution mode, **not a requirement to use Work mode by default**.


Product Owner: Ryan  
Manager / Architect / Planner: ChatGPT

Default implementation uses one fresh Primary Builder for one coherent phase. A fresh independent Auditor is required at a MEDIUM or HIGH freeze.

## Lifecycle

PLANNED → BUILDING → PREVIEW_READY → PUNCH_LIST → FREEZE_READY → AUDITING → REMEDIATING when required → CLOSED

## Evidence flow

Manager phase contract → Builder → FAST → owner preview → consolidated punch list → Phase Sync → exact-head FULL PHASE CI → immutable freeze → independent audit when required → remediation / re-audit → explicit Ryan merge authorization → merge → post-merge FAST → Closure Sync → closure FAST → CLOSED

## Rules

- No automatic merge.
- No silent frozen-SHA retarget.
- Changes after freeze require new exact-head evidence.
- Production launch is a separate explicit Product Owner decision.
- Phase merge does not authorize DNS or custom-domain changes.
- Phase merge does not authorize production indexing unless specifically included in an explicitly authorized launch.
- Never invent church facts.
