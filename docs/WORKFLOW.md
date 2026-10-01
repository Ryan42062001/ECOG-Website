# Speed Workflow V2.1

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
