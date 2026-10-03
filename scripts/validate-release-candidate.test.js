const fs = require('fs');
const os = require('os');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');
const { validateReleaseCandidate } = require('./validate-release-candidate');

const repoRoot = path.resolve(__dirname, '..');
const fixturePaths = [
  '.ai',
  '.github/workflows',
  '.history/pre-speed-v2-1',
  'CNAME',
  'AGENTS.md',
  'docs/WORKFLOW.md',
  'docs/workflow/PHASE_TEMPLATE.md',
  'docs/PRODUCT_ROADMAP.md',
  'scripts/validate-content.js',
  'scripts/validate-performance.js',
  'scripts/validate-site.js',
  'scripts/validate-launch-state.js',
];

function copyFixturePath(root, relativePath) {
  const source = path.join(repoRoot, relativePath);
  const destination = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(destination), {recursive: true});
  if (fs.statSync(source).isDirectory()) {
    fs.cpSync(source, destination, {recursive: true});
  } else {
    fs.copyFileSync(source, destination);
  }
}

function createFixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ecog-release-candidate-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  fixturePaths.forEach(relativePath => copyFixturePath(root, relativePath));
  return root;
}

function mutatePhase(root, mutate) {
  const file = path.join(root, '.ai', 'CURRENT_PHASE.md');
  const original = fs.readFileSync(file, 'utf8');
  const updated = mutate(original);
  assert.notEqual(updated, original, 'test setup must change CURRENT_PHASE.md');
  fs.writeFileSync(file, updated);
}

function mutateRoadmap(root, mutate) {
  const file = path.join(root, 'docs', 'PRODUCT_ROADMAP.md');
  const original = fs.readFileSync(file, 'utf8');
  const updated = mutate(original);
  assert.notEqual(updated, original, 'test setup must change PRODUCT_ROADMAP.md');
  fs.writeFileSync(file, updated);
}

function expectRejected(root, pattern) {
  const failures = validateReleaseCandidate(root);
  assert.ok(failures.length > 0, 'candidate unexpectedly passed');
  assert.match(failures.join('\n'), pattern);
}

test('canonical candidate passes', () => {
  assert.deepEqual(validateReleaseCandidate(repoRoot), []);
});

test('rejects a missing CNAME', t => {
  const root = createFixture(t);
  fs.rmSync(path.join(root, 'CNAME'));
  expectRejected(root, /CNAME must exist/);
});

test('rejects a wrong CNAME domain', t => {
  const root = createFixture(t);
  fs.writeFileSync(path.join(root, 'CNAME'), 'example.com\n');
  expectRejected(root, /CNAME must contain exactly/);
});

test('rejects www instead of the apex CNAME', t => {
  const root = createFixture(t);
  fs.writeFileSync(path.join(root, 'CNAME'), 'www.everettchurchofgod.com\n');
  expectRejected(root, /CNAME must contain exactly/);
});

test('rejects multiple-domain CNAME content', t => {
  const root = createFixture(t);
  fs.writeFileSync(path.join(root, 'CNAME'), 'everettchurchofgod.com\nwww.everettchurchofgod.com\n');
  expectRejected(root, /CNAME must contain exactly/);
});

test('rejects a CNAME directory', t => {
  const root = createFixture(t);
  fs.rmSync(path.join(root, 'CNAME'));
  fs.mkdirSync(path.join(root, 'CNAME'));
  expectRejected(root, /CNAME must be a regular file and not a symlink/);
});

test('rejects a CNAME symlink when supported', t => {
  const root = createFixture(t);
  const target = path.join(root, 'CNAME');
  fs.rmSync(target);
  try {
    fs.symlinkSync('AGENTS.md', target);
  } catch (error) {
    if (['EPERM', 'EACCES', 'ENOTSUP'].includes(error.code)) {
      t.skip('symlink creation is not supported in this environment');
      return;
    }
    throw error;
  }
  expectRejected(root, /CNAME must be a regular file and not a symlink/);
});

test('rejects an extra .ai file', t => {
  const root = createFixture(t);
  fs.writeFileSync(path.join(root, '.ai', 'EXTRA.md'), 'unexpected');
  expectRejected(root, /exactly the intended five entries/);
});

test('rejects an extra .ai directory', t => {
  const root = createFixture(t);
  fs.mkdirSync(path.join(root, '.ai', 'unexpected-directory'));
  expectRejected(root, /exactly the intended five entries/);
});

test('rejects a symlink replacing an authorized .ai file when supported', t => {
  const root = createFixture(t);
  const target = path.join(root, '.ai', 'PROJECT.md');
  fs.rmSync(target);
  try {
    fs.symlinkSync('ARCHITECTURE.md', target);
  } catch (error) {
    if (['EPERM', 'EACCES', 'ENOTSUP'].includes(error.code)) {
      t.skip('symlink creation is not supported in this environment');
      return;
    }
    throw error;
  }
  expectRejected(root, /PROJECT\.md must be a regular file/);
});

test('rejects wrong ECOG-P02 State', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('State: REMEDIATING', 'State: PREVIEW_READY'));
  expectRejected(root, /State must be exactly/);
});

test('rejects wrong ECOG-P02 Risk', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Risk: HIGH', 'Risk: MEDIUM'));
  expectRejected(root, /Risk must be exactly/);
});

test('rejects wrong ECOG-P02 Status', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH', 'Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED'));
  expectRejected(root, /Status must be exactly/);
});

test('rejects required strings placed outside an invalid ECOG-P02 section', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('State: REMEDIATING', 'State: PREVIEW_READY')
    + '\n## Decoy section\n\n'
    + 'State: REMEDIATING\n'
    + 'Risk: HIGH\n'
    + 'Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH\n'
    + 'Production Launch: NOT AUTHORIZED\n'
    + 'DNS Changes: NOT AUTHORIZED\n'
    + 'Pages Custom Domain: NOT AUTHORIZED\n');
  expectRejected(root, /State must be exactly/);
});

test('rejects missing Production Launch authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Production Launch: AUTHORIZED', 'Production Launch: NOT AUTHORIZED'));
  expectRejected(root, /Production Launch must be exactly/);
});

test('rejects missing DNS Changes authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('DNS Changes: AUTHORIZED', 'DNS Changes: NOT AUTHORIZED'));
  expectRejected(root, /DNS Changes must be exactly/);
});

test('rejects missing Pages Custom Domain authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Pages Custom Domain: AUTHORIZED', 'Pages Custom Domain: NOT AUTHORIZED'));
  expectRejected(root, /Pages Custom Domain must be exactly/);
});


test('rejects missing Cloudflare Cutover authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Cloudflare Cutover: AUTHORIZED', 'Cloudflare Cutover: NOT AUTHORIZED'));
  expectRejected(root, /Cloudflare Cutover must be exactly/);
});

test('rejects DNSSEC Changes authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('DNSSEC Changes: NOT AUTHORIZED', 'DNSSEC Changes: AUTHORIZED'));
  expectRejected(root, /DNSSEC Changes must be exactly/);
});

test('rejects Registrar Transfer authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Registrar Transfer: NOT AUTHORIZED', 'Registrar Transfer: AUTHORIZED'));
  expectRejected(root, /Registrar Transfer must be exactly/);
});

test('rejects Production Indexing authorization', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Production Indexing: NOT AUTHORIZED', 'Production Indexing: AUTHORIZED'));
  expectRejected(root, /Production Indexing must be exactly/);
});
test('rejects a duplicate structured field', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Risk: HIGH', 'Risk: HIGH\nRisk: HIGH'));
  expectRejected(root, /Risk must appear exactly once/);
});

test('rejects a missing structured field', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH\n', ''));
  expectRejected(root, /Status must appear exactly once/);
});

test('rejects wrong roadmap lifecycle inside the ECOG-P02 section', t => {
  const root = createFixture(t);
  mutateRoadmap(root, text => text.replace('- State: REMEDIATING', '- State: PREVIEW_READY'));
  expectRejected(root, /Roadmap ECOG-P02 State must be exactly/);
});

test('rejects valid roadmap strings placed only in a decoy section', t => {
  const root = createFixture(t);
  mutateRoadmap(root, text => text
    .replace('- Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH', '- Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED')
    + '\n## Decoy\n\n- State: REMEDIATING\n- Risk: HIGH\n- Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH\n');
  expectRejected(root, /Roadmap ECOG-P02 Status must be exactly/);
});


test('rejects the old pre-cutover lifecycle and authorization state', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('State: REMEDIATING', 'State: FREEZE_READY')
    .replace('Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH', 'Status: PHASE SYNC COMPLETE / FULL PHASE CI REQUIRED')
    .replace('Production Launch: AUTHORIZED', 'Production Launch: NOT AUTHORIZED')
    .replace('DNS Changes: AUTHORIZED', 'DNS Changes: NOT AUTHORIZED')
    .replace('Pages Custom Domain: AUTHORIZED', 'Pages Custom Domain: NOT AUTHORIZED')
    .replace('Cloudflare Cutover: AUTHORIZED', 'Cloudflare Cutover: NOT AUTHORIZED'));
  expectRejected(root, /State must be exactly/);
});
