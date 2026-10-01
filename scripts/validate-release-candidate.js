const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const exists = file => fs.existsSync(path.join(root, file));
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const files = dir => exists(dir)
  ? fs.readdirSync(path.join(root, dir), {withFileTypes: true}).filter(entry => entry.isFile()).map(entry => entry.name).sort()
  : [];

const intendedAi = ['ARCHITECTURE.md', 'CURRENT_PHASE.md', 'DECISIONS.md', 'PROJECT.md', 'REPO_MAP.md'];
assert(JSON.stringify(files('.ai')) === JSON.stringify(intendedAi), '.ai must contain exactly the intended five files');
assert(JSON.stringify(files('.github/workflows')) === JSON.stringify(['ci.yml']), 'ci.yml must be the only active workflow');
for (const old of ['phase-1-validation.yml', 'phase-11-quality.yml']) {
  assert(!exists('.github/workflows/' + old), old + ' must be absent from active workflows');
  assert(exists('.history/pre-speed-v2-1/workflows/' + old), old + ' historical copy missing');
}
for (const file of ['AGENTS.md', 'docs/WORKFLOW.md', 'docs/workflow/PHASE_TEMPLATE.md', 'docs/PRODUCT_ROADMAP.md']) assert(exists(file), 'Required V2.1 document missing: ' + file);
for (const file of ['scripts/validate-content.js', 'scripts/validate-performance.js', 'scripts/validate-site.js', 'scripts/validate-launch-state.js']) assert(exists(file), 'CI validation script missing: ' + file);
const phase = read('.ai/CURRENT_PHASE.md');
const roadmap = read('docs/PRODUCT_ROADMAP.md');
assert(phase.includes('ECOG-P01') && phase.includes('State: PLANNED') && phase.includes('Risk: HIGH') && phase.includes('NOT STARTED'), 'Active phase must keep ECOG-P01 PLANNED/HIGH/NOT STARTED');
assert(roadmap.includes('ECOG-P01') && roadmap.includes('State: PLANNED'), 'Roadmap must keep ECOG-P01 planned');
assert(/not authorized/i.test(phase) && !/production launch is authorized/i.test(phase), 'Migration must not authorize production launch');
const history = read('.history/pre-speed-v2-1/README.md');
assert(/historical/i.test(history) && /not active workflow authority/i.test(history) && /docs\/WORKFLOW\.md/i.test(history), 'Archive must identify historical, non-authoritative status');
assert(!exists('CNAME'), 'CNAME must not exist on the migration candidate');

if (failures.length) {
  console.error('Release-shape validation failed:');
  failures.forEach(failure => console.error('- ' + failure));
  process.exit(1);
}
console.log('Release-shape validation passed.');
