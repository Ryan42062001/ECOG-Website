const fs = require('fs');
const path = require('path');

const defaultRoot = path.resolve(__dirname, '..');
const intendedAi = ['ARCHITECTURE.md', 'CURRENT_PHASE.md', 'DECISIONS.md', 'PROJECT.md', 'REPO_MAP.md'];
const phaseHeading = '## ECOG-P02 — Production Hosting & Domain Cutover';
const requiredPhaseFields = [
  ['State', 'FREEZE_READY'],
  ['Risk', 'HIGH'],
  ['Status', 'PHASE SYNC COMPLETE / FULL PHASE CI REQUIRED'],
  ['Production Launch', 'NOT AUTHORIZED'],
  ['DNS Changes', 'NOT AUTHORIZED'],
  ['Pages Custom Domain', 'NOT AUTHORIZED'],
  ['Cloudflare Cutover', 'NOT AUTHORIZED'],
  ['DNSSEC Changes', 'NOT AUTHORIZED'],
  ['Registrar Transfer', 'NOT AUTHORIZED'],
  ['Production Indexing', 'NOT AUTHORIZED'],
];

function validateReleaseCandidate(root = defaultRoot) {
  const failures = [];
  const assert = (condition, message) => { if (!condition) failures.push(message); };
  const fullPath = file => path.join(root, file);
  const exists = file => fs.existsSync(fullPath(file));
  const read = file => fs.readFileSync(fullPath(file), 'utf8');
  const files = dir => {
    if (!exists(dir)) return [];
    try {
      return fs.readdirSync(fullPath(dir), {withFileTypes: true})
        .filter(entry => entry.isFile())
        .map(entry => entry.name)
        .sort();
    } catch (error) {
      failures.push(`Unable to inspect ${dir}: ${error.message}`);
      return [];
    }
  };

  let aiEntries = [];
  if (!exists('.ai')) {
    failures.push('.ai directory missing');
  } else {
    try {
      aiEntries = fs.readdirSync(fullPath('.ai'), {withFileTypes: true});
    } catch (error) {
      failures.push(`Unable to inspect .ai: ${error.message}`);
    }
  }

  const aiNames = aiEntries.map(entry => entry.name).sort();
  assert(JSON.stringify(aiNames) === JSON.stringify(intendedAi), '.ai must contain exactly the intended five entries');
  for (const name of intendedAi) {
    const entry = aiEntries.find(candidate => candidate.name === name);
    assert(Boolean(entry && entry.isFile()), `.ai/${name} must be a regular file`);
  }

  assert(JSON.stringify(files('.github/workflows')) === JSON.stringify(['ci.yml']), 'ci.yml must be the only active workflow');
  for (const old of ['phase-1-validation.yml', 'phase-11-quality.yml']) {
    assert(!exists('.github/workflows/' + old), old + ' must be absent from active workflows');
    assert(exists('.history/pre-speed-v2-1/workflows/' + old), old + ' historical copy missing');
  }
  for (const file of ['AGENTS.md', 'docs/WORKFLOW.md', 'docs/workflow/PHASE_TEMPLATE.md', 'docs/PRODUCT_ROADMAP.md']) {
    assert(exists(file), 'Required V2.1 document missing: ' + file);
  }
  for (const file of ['scripts/validate-content.js', 'scripts/validate-performance.js', 'scripts/validate-site.js', 'scripts/validate-launch-state.js']) {
    assert(exists(file), 'CI validation script missing: ' + file);
  }

  const phase = exists('.ai/CURRENT_PHASE.md') ? read('.ai/CURRENT_PHASE.md') : '';
  const roadmap = exists('docs/PRODUCT_ROADMAP.md') ? read('docs/PRODUCT_ROADMAP.md') : '';
  const phaseLines = phase.split(/\r?\n/);
  const headingIndexes = phaseLines
    .map((line, index) => line.trim() === phaseHeading ? index : -1)
    .filter(index => index >= 0);

  assert(headingIndexes.length === 1, 'CURRENT_PHASE must contain exactly one ECOG-P02 section heading');
  if (headingIndexes.length === 1) {
    const start = headingIndexes[0] + 1;
    let end = phaseLines.length;
    for (let index = start; index < phaseLines.length; index += 1) {
      if (/^#{1,2}\s/.test(phaseLines[index])) {
        end = index;
        break;
      }
    }

    const sectionLines = phaseLines.slice(start, end);
    for (const [key, value] of requiredPhaseFields) {
      const matches = sectionLines.filter(line => line.startsWith(key + ':'));
      assert(matches.length === 1, `ECOG-P02 ${key} must appear exactly once inside its section`);
      if (matches.length === 1) {
        assert(matches[0] === `${key}: ${value}`, `ECOG-P02 ${key} must be exactly "${key}: ${value}"`);
      }
    }
  }

  const roadmapLines = roadmap.split(/\r?\n/);
  const roadmapHeadingIndexes = roadmapLines
    .map((line, index) => line.trim() === phaseHeading ? index : -1)
    .filter(index => index >= 0);
  assert(roadmapHeadingIndexes.length === 1, 'Roadmap must contain exactly one ECOG-P02 section heading');
  if (roadmapHeadingIndexes.length === 1) {
    const start = roadmapHeadingIndexes[0] + 1;
    let end = roadmapLines.length;
    for (let index = start; index < roadmapLines.length; index += 1) {
      if (/^#{1,2}\s/.test(roadmapLines[index])) {
        end = index;
        break;
      }
    }
    const sectionLines = roadmapLines.slice(start, end);
    for (const [key, value] of requiredPhaseFields.slice(0, 3)) {
      const expected = `- ${key}: ${value}`;
      const matches = sectionLines.filter(line => line.startsWith(`- ${key}:`));
      assert(matches.length === 1, `Roadmap ECOG-P02 ${key} must appear exactly once inside its section`);
      if (matches.length === 1) {
        assert(matches[0] === expected, `Roadmap ECOG-P02 ${key} must be exactly "${expected}"`);
      }
    }
  }
  const history = exists('.history/pre-speed-v2-1/README.md') ? read('.history/pre-speed-v2-1/README.md') : '';
  assert(/historical/i.test(history) && /not active workflow authority/i.test(history) && /docs\/WORKFLOW\.md/i.test(history), 'Archive must identify historical, non-authoritative status');
  assert(!exists('CNAME'), 'CNAME must not exist on the migration candidate');

  return failures;
}

if (require.main === module) {
  const failures = validateReleaseCandidate();
  if (failures.length) {
    console.error('Release-shape validation failed:');
    failures.forEach(failure => console.error('- ' + failure));
    process.exit(1);
  }
  console.log('Release-shape validation passed.');
}

module.exports = { validateReleaseCandidate };
