const fs = require('fs');
const os = require('os');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');
const { validateReleaseCandidate } = require('./validate-release-candidate');
const { validateLaunchState } = require('./validate-launch-state');

const checkoutRoot = path.resolve(__dirname, '..');
const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'ecog-p06-blocked-baseline-'));
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
  '404.html',
  'about.html',
  'contact.html',
  'events.html',
  'give.html',
  'index.html',
  'messages.html',
  'ministries.html',
  'new-here.html',
  'ministries',
  'index.php',
  'robots.txt',
  'sitemap.xml',
];

// Keep the existing 35 historical BLOCKED-state tests and their mutation
// bodies unchanged, even when the unmerged P06 source candidate is indexable.
// Every original test reads a disposable BLOCKED snapshot of the checkout.
// Separately assert the REAL checkout remains a coherent candidate below.
const p06FixturePublicFiles = [
  'index.html', 'new-here.html', 'about.html', 'ministries.html',
  'ministries/children.html', 'ministries/students.html',
  'ministries/men.html', 'ministries/women.html',
  'messages.html', 'events.html', 'give.html', 'contact.html'
];
for (const relativePath of fixturePaths) {
  const original = path.join(checkoutRoot, relativePath);
  const target = path.join(repoRoot, relativePath);
  fs.mkdirSync(path.dirname(target), {recursive: true});
  if (fs.statSync(original).isDirectory()) fs.cpSync(original, target, {recursive: true});
  else fs.copyFileSync(original, target);
}
function replaceFixtureExact(relativePath, from, to) {
  const file = path.join(repoRoot, relativePath);
  const content = fs.readFileSync(file, 'utf8');
  assert.equal(content.split(from).length, 2,
    'P06 blocked-fixture setup: exactly one required candidate marker in ' + relativePath);
  fs.writeFileSync(file, content.replace(from, to));
}
replaceFixtureExact('.ai/CURRENT_PHASE.md',
  'P06 Candidate Source Mode: INDEXABLE_CANDIDATE',
  'P06 Candidate Source Mode: BLOCKED');
for (const file of p06FixturePublicFiles) {
  replaceFixtureExact(file, '<meta name="robots" content="index,follow">',
    '<meta name="robots" content="noindex,nofollow">');
}
replaceFixtureExact('robots.txt',
  'User-agent: *\nAllow: /\nSitemap: https://everettchurchofgod.com/sitemap.xml\n',
  'User-agent: *\nDisallow: /\n\n# Development/staging site. Crawling will be enabled at production launch.\n');
process.on('exit', () => fs.rmSync(repoRoot, {recursive: true, force: true}));

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

function mutateFile(root, relativePath, mutate) {
  const file = path.join(root, relativePath);
  const original = fs.readFileSync(file, 'utf8');
  const updated = mutate(original);
  assert.notEqual(updated, original, `test setup must change ${relativePath}`);
  fs.writeFileSync(file, updated);
}

function expectLaunchRejected(root, pattern) {
  const result = validateLaunchState(root);
  assert.ok(result.failures.length > 0, 'launch state unexpectedly passed');
  assert.match(result.failures.join('\n'), pattern);
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
  mutatePhase(root, text => text.replace('State: CLOSED', 'State: PREVIEW_READY'));
  expectRejected(root, /State must be exactly/);
});

test('rejects regression to the remediation lifecycle', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('State: CLOSED', 'State: REMEDIATING')
    .replace('Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED', 'Status: CUTOVER REMEDIATION / PROTECTED CNAME PATH'));
  expectRejected(root, /State must be exactly|Status must be exactly/);
});

test('rejects wrong ECOG-P02 Risk', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Risk: HIGH', 'Risk: MEDIUM'));
  expectRejected(root, /Risk must be exactly/);
});

test('rejects wrong ECOG-P02 Status', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED', 'Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED'));
  expectRejected(root, /Status must be exactly/);
});

test('rejects required strings placed outside an invalid ECOG-P02 section', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('State: CLOSED', 'State: PREVIEW_READY')
    + '\n## Decoy section\n\n'
    + 'State: CLOSED\n'
    + 'Risk: HIGH\n'
    + 'Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED\n'
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
  mutatePhase(root, text => text.replace('Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED\n', ''));
  expectRejected(root, /Status must appear exactly once/);
});

test('rejects wrong roadmap lifecycle inside the ECOG-P02 section', t => {
  const root = createFixture(t);
  mutateRoadmap(root, text => text.replace(
    '## ECOG-P02 — Production Hosting & Domain Cutover\n\n- State: CLOSED',
    '## ECOG-P02 — Production Hosting & Domain Cutover\n\n- State: PREVIEW_READY'
  ));
  expectRejected(root, /Roadmap ECOG-P02 State must be exactly/);
});

test('rejects valid roadmap strings placed only in a decoy section', t => {
  const root = createFixture(t);
  mutateRoadmap(root, text => text
    .replace('- Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED', '- Status: CUTOVER RUNBOOK READY / OWNER PREVIEW REQUIRED')
    + '\n## Decoy\n\n- State: CLOSED\n- Risk: HIGH\n- Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED\n');
  expectRejected(root, /Roadmap ECOG-P02 Status must be exactly/);
});


test('rejects the old pre-cutover lifecycle and authorization state', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('State: CLOSED', 'State: FREEZE_READY')
    .replace('Status: CLOSED / PRODUCTION HOSTING & DOMAIN CUTOVER VERIFIED', 'Status: PHASE SYNC COMPLETE / FULL PHASE CI REQUIRED')
    .replace('Production Launch: AUTHORIZED', 'Production Launch: NOT AUTHORIZED')
    .replace('DNS Changes: AUTHORIZED', 'DNS Changes: NOT AUTHORIZED')
    .replace('Pages Custom Domain: AUTHORIZED', 'Pages Custom Domain: NOT AUTHORIZED')
    .replace('Cloudflare Cutover: AUTHORIZED', 'Cloudflare Cutover: NOT AUTHORIZED'));
  expectRejected(root, /State must be exactly/);
});


test('custom-domain hosting with indexing NOT AUTHORIZED passes launch-state validation', () => {
  const result = validateLaunchState(repoRoot);
  assert.deepEqual(result.failures, []);
  assert.equal(result.hostingState, 'CUSTOM DOMAIN');
  assert.equal(result.indexingState, 'NOT AUTHORIZED');
});

test('rejects an active page missing noindex while indexing is NOT AUTHORIZED', t => {
  const root = createFixture(t);
  mutateFile(root, 'index.html', text => text.replace('<meta name="robots" content="noindex,nofollow">', '<meta name="robots" content="index,follow">'));
  expectLaunchRejected(root, /indexing-blocked noindex,nofollow safeguard missing/);
});

test('rejects crawl-enabled robots while indexing is NOT AUTHORIZED', t => {
  const root = createFixture(t);
  mutateFile(root, 'robots.txt', () => 'User-agent: *\nAllow: /\n');
  expectLaunchRejected(root, /indexing-blocked sitewide crawl block missing/);
});

test('rejects sitemap advertising while indexing is NOT AUTHORIZED', t => {
  const root = createFixture(t);
  mutateFile(root, 'robots.txt', text => text + '\nSitemap: https://everettchurchofgod.com/sitemap.xml\n');
  expectLaunchRejected(root, /indexing-blocked state must not advertise sitemap/);
});

test('rejects Production Indexing AUTHORIZED while crawl blocks remain', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Production Indexing: NOT AUTHORIZED', 'Production Indexing: AUTHORIZED'));
  expectLaunchRejected(root, /indexing-authorized page must not contain noindex/);
});

test('launch-state rejects a missing Production Indexing field', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Production Indexing: NOT AUTHORIZED\n', ''));
  expectLaunchRejected(root, /Production Indexing must appear exactly once/);
});

test('launch-state rejects a duplicate Production Indexing field', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace('Production Indexing: NOT AUTHORIZED', 'Production Indexing: NOT AUTHORIZED\nProduction Indexing: NOT AUTHORIZED'));
  expectLaunchRejected(root, /Production Indexing must appear exactly once/);
});

test('decoy-section indexing authorization cannot satisfy an invalid P02 field', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text
    .replace('Production Indexing: NOT AUTHORIZED', 'Production Indexing: UNKNOWN')
    + '\n## Decoy section\n\nProduction Indexing: AUTHORIZED\n');
  expectLaunchRejected(root, /Production Indexing must be exactly AUTHORIZED or NOT AUTHORIZED/);
});


// ECOG-P06 Stage 2A: these tests create disposable files under OS temp.
// NO committed public HTML, robots, sitemap, or production permissions change.
const p06PublicFiles = [
  'index.html', 'new-here.html', 'about.html', 'ministries.html',
  'ministries/children.html', 'ministries/students.html',
  'ministries/men.html', 'ministries/women.html',
  'messages.html', 'events.html', 'give.html', 'contact.html'
];
const blockedP06 = 'P06 Candidate Source Mode: BLOCKED';
const indexableP06 = 'P06 Candidate Source Mode: INDEXABLE_CANDIDATE';

function makeP06IndexableFixture(t) {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(blockedP06, indexableP06));
  for (const file of p06PublicFiles) {
    mutateFile(root, file, html => html.replace(
      '<meta name="robots" content="noindex,nofollow">',
      '<meta name="robots" content="index,follow">'
    ));
  }
  mutateFile(root, 'robots.txt', () =>
    'User-agent: *\nAllow: /\nSitemap: https://everettchurchofgod.com/sitemap.xml\n'
  );
  return root;
}

test('P06 real draft branch is a coherent INDEXABLE_CANDIDATE without production release authority', () => {
  const phase = fs.readFileSync(path.join(checkoutRoot, '.ai/CURRENT_PHASE.md'), 'utf8');
  assert.ok(phase.includes(indexableP06));
  assert.ok(!phase.includes(blockedP06));
  assert.ok(phase.includes('P06 Production Indexing Release Authority: NOT GRANTED'));
  assert.deepEqual(validateReleaseCandidate(checkoutRoot), []);
  const result = validateLaunchState(checkoutRoot);
  assert.deepEqual(result.failures, []);
  assert.equal(result.indexingState, 'INDEXABLE_CANDIDATE');
  assert.equal(result.p06CandidateMode, 'INDEXABLE_CANDIDATE');
});

test('P06 synthetic coherent 12-page indexable source candidate passes in temp fixture only', t => {
  const root = makeP06IndexableFixture(t);
  assert.deepEqual(validateReleaseCandidate(root), []);
  const result = validateLaunchState(root);
  assert.deepEqual(result.failures, []);
  assert.equal(result.indexingState, 'INDEXABLE_CANDIDATE');
  assert.equal(result.p06CandidateMode, 'INDEXABLE_CANDIDATE');
});

test('P06 rejects missing scoped candidate mode', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(blockedP06 + '\n', ''));
  expectLaunchRejected(root, /candidate source mode must appear exactly once/);
});

test('P06 rejects duplicated candidate mode inside its section', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(blockedP06, blockedP06 + '\n' + blockedP06));
  expectLaunchRejected(root, /candidate source mode must appear exactly once/);
});

test('P06 rejects a candidate mode in a decoy section instead of P06', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(blockedP06 + '\n', '') +
    '\n## P06 Decoy\n' + blockedP06 + '\n');
  expectLaunchRejected(root, /candidate source mode missing inside P06 section/);
});

test('P06 rejects invalid candidate mode', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(blockedP06, 'P06 Candidate Source Mode: LIVE_NOW'));
  expectLaunchRejected(root, /candidate source mode invalid/);
});

test('P06 rejects missing phase heading', t => {
  const root = createFixture(t);
  mutatePhase(root, text => text.replace(
    '## ECOG-P06 — Google Search Indexing Readiness & Controlled Launch',
    '## ECOG-P06 — Broken Heading'
  ));
  expectLaunchRejected(root, /ECOG-P06 heading must appear exactly once/);
});

test('P06 blocks 1 of 12 public pages going indexable prematurely', t => {
  const root = createFixture(t);
  mutateFile(root, 'contact.html', s => s.replace(
    '<meta name="robots" content="noindex,nofollow">',
    '<meta name="robots" content="index,follow">'
  ));
  expectLaunchRejected(root, /contact.html: indexing-blocked noindex,nofollow safeguard missing/);
});

test('P06 synthetic candidate rejects 11-of-12 mixed public page state', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'contact.html', s => s.replace(
    '<meta name="robots" content="index,follow">',
    '<meta name="robots" content="noindex,nofollow">'
  ));
  expectLaunchRejected(root, /contact.html: indexing-authorized page must not contain noindex/);
});

test('P06 synthetic candidate rejects duplicate robots meta', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'about.html', s => s.replace(
    '<meta name="robots" content="index,follow">',
    '<meta name="robots" content="index,follow"><meta name="robots" content="index,follow">'
  ));
  expectLaunchRejected(root, /about.html: expected exactly one explicit robots meta/);
});

test('P06 blocks premature crawl-enable before candidate mode', t => {
  const root = createFixture(t);
  mutateFile(root, 'robots.txt', () => 'User-agent: *\nAllow: /\n');
  expectLaunchRejected(root, /indexing-blocked sitewide crawl block missing/);
});

test('P06 synthetic candidate rejects robots remaining sitewide blocked', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'robots.txt', () => 'User-agent: *\nDisallow: /\n');
  expectLaunchRejected(root, /indexing-authorized Allow: \/ missing/);
});

test('P06 synthetic candidate rejects missing Sitemap directive', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'robots.txt', s => s.replace(
    'Sitemap: https://everettchurchofgod.com/sitemap.xml\n', ''
  ));
  expectLaunchRejected(root, /indexing-authorized sitemap directive missing/);
});

test('P06 synthetic candidate rejects wrong Sitemap host', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'robots.txt', s => s.replace(
    'https://everettchurchofgod.com/sitemap.xml',
    'https://www.everettchurchofgod.com/sitemap.xml'
  ));
  expectLaunchRejected(root, /indexing-authorized sitemap directive missing/);
});

test('P06 synthetic candidate rejects duplicate Sitemap directives', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'robots.txt', s => s + 'Sitemap: https://everettchurchofgod.com/sitemap.xml\n');
  expectLaunchRejected(root, /sitemap must appear exactly once/);
});

test('P06 synthetic candidate rejects extra sitemap location', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'sitemap.xml', s => s.replace(
    '</urlset>', '<url><loc>https://everettchurchofgod.com/unknown.html</loc></url></urlset>'
  ));
  expectLaunchRejected(root, /sitemap.xml: unexpected count or duplicate URLs/);
});

test('P06 synthetic candidate rejects wrong sitemap domain', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'sitemap.xml', s => s.replace(
    'https://everettchurchofgod.com/contact.html',
    'https://www.everettchurchofgod.com/contact.html'
  ));
  expectLaunchRejected(root, /sitemap.xml: missing https:\/\/everettchurchofgod.com\/contact.html/);
});

test('P06 synthetic candidate rejects a non-apex page canonical', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'about.html', s => s.replace(
    '<link rel="canonical" href="https://everettchurchofgod.com/about.html">',
    '<link rel="canonical" href="https://www.everettchurchofgod.com/about.html">'
  ));
  expectLaunchRejected(root, /about.html: canonical must be/);
});

test('P06 synthetic candidate rejects a wrong OG URL', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'about.html', s => s.replace(
    'property="og:url" content="https://everettchurchofgod.com/about.html"',
    'property="og:url" content="https://example.com/about.html"'
  ));
  expectLaunchRejected(root, /about.html: og:url must be/);
});

test('P06 synthetic candidate rejects preview/staging hostname leaked into public source', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'about.html', s => s.replace(
    '</title>', '</title><!-- https://ecog-example.vercel.app/ -->'
  ));
  expectLaunchRejected(root, /staging\/preview URL leaked into public HTML/);
});

test('P06 synthetic candidate preserves retired ministry noindex', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'ministries/senior-adults.html', s => s.replace(
    'content="noindex,follow"', 'content="index,follow"'
  ));
  expectLaunchRejected(root, /Senior Adults retired page must remain noindex/);
});

test('P06 synthetic candidate preserves 404 noindex', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, '404.html', s => s.replace(
    'content="noindex"', 'content="index,follow"'
  ));
  expectLaunchRejected(root, /404.html must remain noindex/);
});

test('P06 synthetic candidate preserves retired compatibility route noindex', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'index.php/senior-adults-ministry/index.html', s => s.replace(
    'content="noindex,follow"', 'content="index,follow"'
  ));
  expectLaunchRejected(root, /retired compatibility noindex missing/);
});

test('P06 synthetic candidate rejects altered active legacy redirect target', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'index.php/messages/index.html', s => s.replace(
    '../../messages.html', '../../contact.html'
  ));
  expectLaunchRejected(root, /legacy compatibility immediate refresh destination invalid/);
});

test('P06 synthetic candidate rejects altered active legacy canonical', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'index.php/messages/index.html', s => s.replace(
    'https://everettchurchofgod.com/messages.html',
    'https://everettchurchofgod.com/contact.html'
  ));
  expectLaunchRejected(root, /legacy compatibility canonical destination invalid/);
});

test('P06 synthetic candidate rejects active legacy noindex contrary to current policy', t => {
  const root = makeP06IndexableFixture(t);
  mutateFile(root, 'index.php/messages/index.html', s => s.replace(
    '</head>', '<meta name="robots" content="noindex"></head>'
  ));
  expectLaunchRejected(root, /active compatibility route must remain crawlable/);
});

test('P06 never treats altered P02 historical indexing authority as permission', t => {
  const root = makeP06IndexableFixture(t);
  mutatePhase(root, s => s.replace(
    'Production Indexing: NOT AUTHORIZED',
    'Production Indexing: AUTHORIZED'
  ));
  expectLaunchRejected(root, /ECOG-P02 historical indexing authority must remain NOT AUTHORIZED/);
  expectRejected(root, /ECOG-P02 Production Indexing must be exactly/);
});

test('P06 preview response fixture accepts observed noindex only with actual HTTP fields', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.deepEqual(validatePreviewResponseEvidence({
    url: 'https://ecog-website-preview-example.vercel.app/',
    target: 'preview', customDomain: false, status: 200,
    xRobotsTag: 'noindex, nofollow'
  }), []);
});

test('P06 preview response fixture rejects missing X-Robots-Tag', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.match(validatePreviewResponseEvidence({
    url: 'https://ecog-website-preview-example.vercel.app/',
    target: 'preview', customDomain: false, status: 200, xRobotsTag: ''
  }).join('\n'), /X-Robots-Tag: noindex missing/);
});

test('P06 preview response fixture rejects production/custom-domain override', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.match(validatePreviewResponseEvidence({
    url: 'https://everettchurchofgod.com/',
    target: 'production', customDomain: true, status: 200, xRobotsTag: 'noindex'
  }).join('\n'), /HTTPS vercel.app deployment hostname/);
});

test('P06 preview response fixture rejects unreachable/protected status', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.match(validatePreviewResponseEvidence({
    url: 'https://ecog-website-preview-example.vercel.app/',
    target: 'preview', customDomain: false, status: 401, xRobotsTag: 'noindex'
  }).join('\n'), /status unverified or unsuccessful/);
});


test('P06 preview observation rejects unknown custom-domain override state', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.match(validatePreviewResponseEvidence({
    url: 'https://ecog-website-preview-example.vercel.app/',
    target: 'preview', status: 200, xRobotsTag: 'noindex'
  }).join('\n'), /custom-domain override/);
});

test('P06 preview observation rejects HTTP redirect as proof of protected content', () => {
  const {validatePreviewResponseEvidence} = require('./validate-launch-state');
  assert.match(validatePreviewResponseEvidence({
    url: 'https://ecog-website-preview-example.vercel.app/',
    target: 'preview', customDomain: false, status: 302, xRobotsTag: 'noindex'
  }).join('\n'), /status unverified or unsuccessful/);
});


// ECOG-P06 audit punch-list: prove the real generated GitHub Pages Jekyll
// publish artifact boundary. Uses the SAME pinned container image recorded
// in the production GitHub Pages build, without editing any CI workflow.
// Failure to build is a FAIL, never a skipped/config-text-only PASS.
const {spawnSync} = require('node:child_process');
const jekyllImage = 'ghcr.io/actions/jekyll-build-pages:v1.0.13';
const requiredPublishedFiles = [
  ...p06FixturePublicFiles,
  '404.html', 'ministries/senior-adults.html',
  'index.php/messages/index.html',
  'index.php/contact-us/index.html',
  'index.php/donations/index.html',
  'index.php/services/index.html',
  'index.php/our-pastors/index.html',
  'index.php/what-we-believe/index.html',
  'index.php/ways-to-connect/index.html',
  'index.php/childrens-ministry/index.html',
  'index.php/amplify-students-ministry/index.html',
  'index.php/guys-ministry/index.html',
  'index.php/womens-ministry/index.html',
  'index.php/senior-adults-ministry/index.html',
  'data/events.json', 'data/sermons.json',
  'assets/css/components.css', 'assets/css/events.css',
  'assets/css/giving-contact.css', 'assets/css/main.css',
  'assets/css/messages.css', 'assets/css/ministries.css',
  'assets/css/responsive.css',
  'assets/js/components.js', 'assets/js/events.js',
  'assets/js/main.js', 'assets/js/messages.js',
  'robots.txt', 'sitemap.xml', 'CNAME'
];
const internalPublishedPathDenials = [
  'docs', 'docs/PRODUCT_ROADMAP.md', 'docs/WORKFLOW.md',
  'scripts', 'scripts/validate-launch-state.js',
  'scripts/validate-release-candidate.test.js',
  'README.md', 'AGENTS.md',
  '.ai', '.ai/CURRENT_PHASE.md',
  '.github', '.github/workflows/ci.yml',
  '.history', '_config.yml', '.gitignore'
];

function checkGeneratedPagesArtifact(root) {
  const problems = [];
  for (const relativePath of requiredPublishedFiles) {
    const fullPath = path.join(root, relativePath);
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      problems.push('required published asset absent: ' + relativePath);
    }
  }
  for (const relativePath of internalPublishedPathDenials) {
    if (fs.existsSync(path.join(root, relativePath))) {
      problems.push('engineering-only path exposed in Jekyll output: ' + relativePath);
    }
  }
  for (const relativePath of ['data/events.json', 'data/sermons.json']) {
    const generated = path.join(root, relativePath);
    const source = path.join(checkoutRoot, relativePath);
    if (fs.existsSync(generated) &&
        !fs.readFileSync(generated).equals(fs.readFileSync(source))) {
      problems.push('required public JSON not identical to source: ' + relativePath);
    }
  }
  return problems;
}

let cachedActualPagesOutput = null;
function buildActualPagesOutput() {
  if (cachedActualPagesOutput) return cachedActualPagesOutput;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ecog-p06-jekyll-site-'));
  const source = path.join(tempDir, 'site-source');
  fs.cpSync(checkoutRoot, source, {
    recursive: true,
    filter: item => {
      const relative = path.relative(checkoutRoot, item);
      return !relative.split(path.sep).some(segment =>
        segment === '.git' || segment === '_site' || segment === 'node_modules');
    }
  });
  const identity = typeof process.getuid === 'function'
    ? [String(process.getuid()), String(process.getgid())].join(':') : null;
  const args = ['run', '--rm'];
  if (identity) args.push('--user', identity);
  args.push(
    '-e', 'GITHUB_WORKSPACE=/github/workspace',
    '-e', 'GITHUB_REPOSITORY=Ryan42062001/ECOG-Website',
    '-e', 'GITHUB_API_URL=https://api.github.com',
    '-e', 'INPUT_SOURCE=.',
    '-e', 'INPUT_DESTINATION=./_site',
    '-e', 'INPUT_FUTURE=false',
    '-e', 'INPUT_VERBOSE=false',
    '-e', 'INPUT_BUILD_REVISION=' + (process.env.GITHUB_SHA || 'local-reproducible-check'),
    '-e', 'INPUT_TOKEN=',
    '-v', source + ':/github/workspace',
    jekyllImage
  );
  const built = spawnSync('docker', args, {
    encoding: 'utf8', timeout: 300000, maxBuffer: 10 * 1024 * 1024
  });
  assert.ifError(built.error || null);
  assert.equal(built.status, 0,
    'actual GitHub Pages Jekyll container build failed:\n' +
    (built.stderr || '').slice(-6000) + '\n' + (built.stdout || '').slice(-6000));
  const output = path.join(source, '_site');
  assert.ok(fs.existsSync(output) && fs.statSync(output).isDirectory(),
    'Jekyll did not produce a real _site artifact');
  cachedActualPagesOutput = output;
  return output;
}

function temporaryGeneratedOutput(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ecog-p06-published-negative-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  fs.cpSync(buildActualPagesOutput(), root, {recursive: true});
  return root;
}

test('P06 real GitHub Pages Jekyll v1.0.13 build publishes public assets but excludes engineering files', () => {
  const actual = buildActualPagesOutput();
  assert.deepEqual(checkGeneratedPagesArtifact(actual), [],
    'actual Jekyll-generated _site content must match the checked publication boundary');
});

test('P06 generated-artifact checker rejects a published internal roadmap or script', t => {
  const generated = temporaryGeneratedOutput(t);
  for (const relativePath of ['docs/PRODUCT_ROADMAP.md', 'scripts/validate-launch-state.js']) {
    const leaked = path.join(generated, relativePath);
    fs.mkdirSync(path.dirname(leaked), {recursive: true});
    fs.writeFileSync(leaked, 'published engineering file\n');
  }
  const problems = checkGeneratedPagesArtifact(generated).join('\n');
  assert.match(problems, /engineering-only path exposed.*docs\/PRODUCT_ROADMAP\.md/);
  assert.match(problems, /engineering-only path exposed.*scripts\/validate-launch-state\.js/);
});

test('P06 generated-artifact checker rejects missing required events or sermons JSON', t => {
  const generated = temporaryGeneratedOutput(t);
  fs.rmSync(path.join(generated, 'data/events.json'));
  fs.rmSync(path.join(generated, 'data/sermons.json'));
  const problems = checkGeneratedPagesArtifact(generated).join('\n');
  assert.match(problems, /required published asset absent: data\/events\.json/);
  assert.match(problems, /required published asset absent: data\/sermons\.json/);
});

test('P06 generated-artifact checker rejects missing public pages and required browser JS', t => {
  const generated = temporaryGeneratedOutput(t);
  fs.rmSync(path.join(generated, 'about.html'));
  fs.rmSync(path.join(generated, 'assets/js/events.js'));
  const problems = checkGeneratedPagesArtifact(generated).join('\n');
  assert.match(problems, /required published asset absent: about\.html/);
  assert.match(problems, /required published asset absent: assets\/js\/events\.js/);
});

test('P06 generated-artifact checker rejects missing sitemap, CNAME and legacy route', t => {
  const generated = temporaryGeneratedOutput(t);
  for (const relativePath of ['sitemap.xml', 'CNAME', 'index.php/messages/index.html']) {
    fs.rmSync(path.join(generated, relativePath));
  }
  const problems = checkGeneratedPagesArtifact(generated).join('\n');
  assert.match(problems, /required published asset absent: sitemap\.xml/);
  assert.match(problems, /required published asset absent: CNAME/);
  assert.match(problems, /required published asset absent: index\.php\/messages\/index\.html/);
});
