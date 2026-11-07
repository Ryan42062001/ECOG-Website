# ECOG Website agent instructions

## Owner progress-first override — 2026-11-07

**Read [docs/PROGRESS_FIRST_POLICY.md](docs/PROGRESS_FIRST_POLICY.md) first.** The Product Owner prioritizes delivery of working functionality across the project, followed by one comprehensive independent audit, batched remediation and targeted re-audit before the next release. Earlier phase-by-phase audit timing is superseded **only after this governance PR merges**. All existing source-of-truth, known security failures, safe development tests, CI, Owner merge approval, secrets, production, personal-data and provider boundaries remain binding. Never claim deferred findings PASS, skip required tests or ignore a known exploitable boundary.


## Primary Builder execution mode

**Default to regular ChatGPT Chat** for the Project Manager, Primary Builder and fresh Independent Auditor. Use ChatGPT Work mode (**Super Builder**) only for a specific unavoidable capability gap, after explaining the blocker and receiving Ryan's explicit approval. Never skip validation, change phase authority, reuse the Builder as its own independent Auditor, or bypass CI/audit/merge/deployment protections to avoid Work usage. For the controlling details, read `docs/WORKFLOW.md`.


Follow `docs/WORKFLOW.md`. Preserve verified church facts and the static architecture. Do not merge, deploy, change DNS or Pages settings, add CNAME, or change production indexing without explicit Product Owner authorization. Repository evidence outranks chat memory.
