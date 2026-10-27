const fs = require('fs');
const path = require('path');

const defaultRoot = path.resolve(__dirname, '..');
const productionOrigin = 'https://everettchurchofgod.com';
const productionHost = 'everettchurchofgod.com';
const phaseHeading = '## ECOG-P02 — Production Hosting & Domain Cutover';
const p06Heading = '## ECOG-P06 — Google Search Indexing Readiness & Controlled Launch';
const p06Field = 'P06 Candidate Source Mode:';
const candidateModes = ['BLOCKED', 'INDEXABLE_CANDIDATE'];

// Pure checker for a separately observed HTTP response: does not make network
// requests and does not constitute evidence that a live preview is protected.
function validatePreviewResponseEvidence(observation) {
  const failures = [];
  if (!observation || typeof observation !== 'object') return ['Preview HTTP response evidence missing'];
  let url;
  try { url = new URL(observation.url); }
  catch { return ['Preview HTTP response URL invalid']; }
  if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.vercel\.app$/i.test(url.hostname)) {
    failures.push('Preview must use an HTTPS vercel.app deployment hostname');
  }
  if (observation.target !== 'preview' || observation.customDomain === true) {
    failures.push('Preview target must be preview without a custom-domain override');
  }
  if (!Number.isInteger(observation.status) || observation.status < 200 || observation.status >= 400) {
    failures.push('Preview HTTP response status unverified or unsuccessful');
  }
  const tag = typeof observation.xRobotsTag === 'string' ? observation.xRobotsTag : '';
  if (!/(?:^|[,;\s])noindex(?:$|[,;\s])/i.test(tag)) failures.push('Preview X-Robots-Tag: noindex missing');
  return failures;
}

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const getDescription = html => {
  const doubleQuoted = html.match(/<meta\s+name=["']description["']\s+content="([^"]+)"/i);
  if (doubleQuoted) return doubleQuoted[1];
  const singleQuoted = html.match(/<meta\s+name=["']description["']\s+content='([^']+)'/i);
  return singleQuoted ? singleQuoted[1] : null;
};

const pages = [
  ['index.html', '/'],
  ['new-here.html', '/new-here.html'],
  ['about.html', '/about.html'],
  ['ministries.html', '/ministries.html'],
  ['ministries/children.html', '/ministries/children.html'],
  ['ministries/students.html', '/ministries/students.html'],
  ['ministries/men.html', '/ministries/men.html'],
  ['ministries/women.html', '/ministries/women.html'],
  ['messages.html', '/messages.html'],
  ['events.html', '/events.html'],
  ['give.html', '/give.html'],
  ['contact.html', '/contact.html']
];

const activeCompatibilityPages = [
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
  'index.php/womens-ministry/index.html'
];
const retiredCompatibilityPage = 'index.php/senior-adults-ministry/index.html';

function validateLaunchState(root = defaultRoot) {
  const failures = [];
  const assert = (condition, message) => { if (!condition) failures.push(message); };
  const fullPath = file => path.join(root, file);
  const read = file => fs.readFileSync(fullPath(file), 'utf8');

  let cnameStat = null;
  try {
    cnameStat = fs.lstatSync(fullPath('CNAME'));
  } catch (error) {
    if (error.code !== 'ENOENT') failures.push(`Unable to inspect CNAME: ${error.message}`);
  }

  let hostingState = 'STAGING / DEFAULT DOMAIN';
  if (cnameStat) {
    hostingState = 'CUSTOM DOMAIN';
    assert(cnameStat.isFile() && !cnameStat.isSymbolicLink(), 'CNAME must be a regular file and not a symlink');
    if (cnameStat.isFile() && !cnameStat.isSymbolicLink()) {
      assert(/^everettchurchofgod\.com(?:\r?\n)?$/.test(read('CNAME')), `CNAME must contain exactly ${productionHost}`);
    }
  }

  let phase = '';
  try {
    phase = read('.ai/CURRENT_PHASE.md');
  } catch (error) {
    failures.push(`Unable to read .ai/CURRENT_PHASE.md: ${error.message}`);
  }

  const phaseLines = phase.split(/\r?\n/);
  const headingIndexes = phaseLines
    .map((line, index) => line.trim() === phaseHeading ? index : -1)
    .filter(index => index >= 0);
  assert(headingIndexes.length === 1, 'CURRENT_PHASE must contain exactly one ECOG-P02 section heading');

  // Distinct P06 *source mode*, never a substitute for external P05/owner
  // authorization. Fail closed on absent, duplicate, malformed or decoy fields.
  const p06Positions = phaseLines
    .map((line, index) => line.trim() === p06Heading ? index : -1)
    .filter(index => index >= 0);
  assert(p06Positions.length === 1, 'ECOG-P06 heading must appear exactly once');
  const globallyScopedFields = phaseLines.filter(line => line.startsWith(p06Field));
  assert(globallyScopedFields.length === 1, 'ECOG-P06 candidate source mode must appear exactly once');
  let p06CandidateMode = 'INVALID';
  if (p06Positions.length === 1) {
    const start = p06Positions[0] + 1;
    let end = phaseLines.length;
    for (let i = start; i < phaseLines.length; i += 1) {
      if (/^#{1,2}\s/.test(phaseLines[i])) { end = i; break; }
    }
    const scoped = phaseLines.slice(start, end).filter(line => line.startsWith(p06Field));
    assert(scoped.length === 1, 'ECOG-P06 candidate source mode missing inside P06 section');
    if (scoped.length === 1 && globallyScopedFields.length === 1) {
      const value = scoped[0].slice(p06Field.length).trim();
      if (candidateModes.includes(value)) p06CandidateMode = value;
      else failures.push('ECOG-P06 candidate source mode invalid');
    }
  }

  let indexingState = 'INVALID';
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
    const matches = sectionLines.filter(line => line.startsWith('Production Indexing:'));
    assert(matches.length === 1, 'ECOG-P02 Production Indexing must appear exactly once inside its section');
    if (matches.length === 1) {
      if (matches[0] === 'Production Indexing: NOT AUTHORIZED') {
        indexingState = 'NOT AUTHORIZED';
      } else if (matches[0] === 'Production Indexing: AUTHORIZED') {
        indexingState = 'AUTHORIZED';
      } else {
        failures.push('ECOG-P02 Production Indexing must be exactly AUTHORIZED or NOT AUTHORIZED');
      }
    }
  }

// Historical P02 control is immutable. Preserve the original mutation-test
// diagnostic branch if it is tampered with, but ALWAYS reject such tampering.
if (indexingState === 'AUTHORIZED') failures.push('ECOG-P02 historical indexing authority must remain NOT AUTHORIZED');
const sourceIndexingState = indexingState === 'AUTHORIZED' ? 'AUTHORIZED'
  : indexingState === 'NOT AUTHORIZED' && p06CandidateMode === 'BLOCKED' ? 'NOT AUTHORIZED'
    : indexingState === 'NOT AUTHORIZED' && p06CandidateMode === 'INDEXABLE_CANDIDATE' ? 'INDEXABLE_CANDIDATE' : 'INVALID';
if (sourceIndexingState === 'INVALID') failures.push('ECOG-P06 candidate source state fails closed');

for (const [file, route] of pages) {
  const html = read(file);
  const canonical = `${productionOrigin}${route}`;
  const description = getDescription(html);
  assert((html.match(/<title>[^<]+<\/title>/gi) || []).length === 1, `${file}: expected one title`);
  assert(description && description.trim().length >= 50, `${file}: production description missing or too short`);
  assert(new RegExp(`<link\\s+rel=["']canonical["']\\s+href=["']${escapeRegExp(canonical)}["']`, 'i').test(html), `${file}: canonical must be ${canonical}`);
  for (const property of ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url']) {
    assert(html.includes(`property="${property}"`), `${file}: ${property} missing`);
  }
  assert(html.includes(`property="og:url" content="${canonical}"`), `${file}: og:url must be ${canonical}`);
  assert(html.includes('name="twitter:card" content="summary"'), `${file}: twitter summary card missing`);
  assert(!/github\.io\/ECOG-Website/i.test(html), `${file}: staging URL leaked into production metadata`);

  const robotsMetas = [...html.matchAll(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/gi)];
  assert(robotsMetas.length === 1, String(file) + ': expected exactly one explicit robots meta');
  if (/https?:\/\/[^"'<>\s]*(?:github\.io|vercel\.app)/i.test(html)) {
    failures.push(file + ': staging/preview URL leaked into public HTML');
  }
  if (sourceIndexingState === 'NOT AUTHORIZED') {
    assert(/name=["']robots["']\s+content=["']noindex,nofollow["']/i.test(html), `${file}: indexing-blocked noindex,nofollow safeguard missing`);
  } else if (sourceIndexingState === 'AUTHORIZED' || sourceIndexingState === 'INDEXABLE_CANDIDATE') {
    assert(!/\bnoindex\b/i.test(html), `${file}: indexing-authorized page must not contain noindex`);
    const robotsMeta = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
    assert(!!robotsMeta && /^index,follow$/i.test(robotsMeta[1].replace(/\s+/g, '')), `${file}: indexing-authorized robots meta must be index,follow when present`);
  }
}

const expectedUrls = pages.map(([, route]) => `${productionOrigin}${route}`);
const sitemap = read('sitemap.xml');
const listedUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert(listedUrls.length === expectedUrls.length && new Set(listedUrls).size === listedUrls.length, 'sitemap.xml: unexpected count or duplicate URLs');
for (const url of expectedUrls) assert(listedUrls.includes(url), `sitemap.xml: missing ${url}`);
assert(!/senior-adults\.html|index\.php\/|github\.io/i.test(sitemap), 'sitemap.xml: retired, compatibility, or staging URL detected');

const home = read('index.html');
const schemaMatch = home.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
assert(!!schemaMatch, 'index.html: Church JSON-LD missing');
if (schemaMatch) {
  try {
    const schema = JSON.parse(schemaMatch[1]);
    assert(schema['@type'] === 'Church' && schema.name === 'Everett Church of God', 'index.html: Church schema identity incorrect');
    assert(schema.telephone === '+1-814-652-9287' && schema.email === 'everettcog@comcast.net', 'index.html: Church schema contact incorrect');
    assert(schema.address?.streetAddress === '11152 Lincoln Highway' && schema.address?.addressLocality === 'Everett' && schema.address?.addressRegion === 'PA' && schema.address?.postalCode === '15537' && schema.address?.addressCountry === 'US', 'index.html: Church schema address incorrect');
    assert(schema.sameAs?.includes('https://www.facebook.com/EverettCOG/') && schema.sameAs?.includes('https://www.youtube.com/@everettchurchofgod417'), 'index.html: Church schema social profiles incorrect');
    for (const key of ['geo', 'foundingDate', 'logo', 'image']) assert(!(key in schema), `index.html: unverified schema property ${key}`);
  } catch (error) {
    failures.push(`index.html: invalid JSON-LD (${error.message})`);
  }
}

const retired = read('ministries/senior-adults.html');
assert(/name=["']robots["']\s+content=["']noindex,follow["']/i.test(retired), 'Senior Adults retired page must remain noindex,follow');
assert(!/rel=["']canonical["']/i.test(retired), 'Senior Adults retired page must not have a canonical');
const notFound = read('404.html');
assert(/name=["']robots["']\s+content=["'][^"']*noindex/i.test(notFound), '404.html must remain noindex');

const activeCompatibilityTargets = [
  ['messages.html', '../../messages.html'],
  ['contact.html', '../../contact.html'],
  ['give.html', '../../give.html'],
  ['new-here.html', '../../new-here.html#visit-details'],
  ['about.html', '../../about.html#leadership-title'],
  ['about.html', '../../about.html#beliefs-title'],
  ['ministries.html', '../../ministries.html'],
  ['ministries/children.html', '../../ministries/children.html'],
  ['ministries/students.html', '../../ministries/students.html'],
  ['ministries/men.html', '../../ministries/men.html'],
  ['ministries/women.html', '../../ministries/women.html']
];
for (const [index, file] of activeCompatibilityPages.entries()) {
  const html = read(file);
  assert(!/\bnoindex\b/i.test(html), `${file}: active compatibility route must remain crawlable`);
  const [destination, refresh] = activeCompatibilityTargets[index];
  const refreshMatch = html.match(/<meta\s+http-equiv=["']refresh["']\s+content=["']0;\s*url=([^"']+)["']/i);
  assert(!!refreshMatch && refreshMatch[1] === refresh,
    `${file}: legacy compatibility immediate refresh destination invalid`);
  assert(html.includes(`<link rel="canonical" href="${productionOrigin}/${destination}">`),
    `${file}: legacy compatibility canonical destination invalid`);
}
const retiredCompatibility = read(retiredCompatibilityPage);
assert(/name=["']robots["']\s+content=["']noindex,follow["']/i.test(retiredCompatibility), `${retiredCompatibilityPage}: retired compatibility noindex missing`);
assert(!/index\.php\//i.test(sitemap), 'sitemap.xml: compatibility routes must remain excluded');

const robots = read('robots.txt');
const directives = robots.split(/\r?\n/).map(line => line.trim()).filter(line => line && !line.startsWith('#'));
const agents = directives.filter(line => /^User-agent:/i.test(line));
assert(agents.length === 1 && /^User-agent:\s*\*$/.test(agents[0]),
  'robots.txt: exactly one global User-agent required');
if (sourceIndexingState === 'NOT AUTHORIZED') {
  assert(/^User-agent:\s*\*\s*$/im.test(robots) && /^Disallow:\s*\/\s*$/im.test(robots), 'robots.txt: indexing-blocked sitewide crawl block missing');
  assert(!/^Allow:\s*\/\s*$/im.test(robots), 'robots.txt: indexing-blocked state must not allow sitewide crawling');
  assert(!/Sitemap:/i.test(robots), 'robots.txt: indexing-blocked state must not advertise sitemap');
  assert(directives.filter(line => /^Disallow:/i.test(line)).length === 1,
    'robots.txt: blocked state must have exactly one disallow rule');
} else if (sourceIndexingState === 'INDEXABLE_CANDIDATE' || sourceIndexingState === 'AUTHORIZED') {
  assert(/^User-agent:\s*\*\s*$/im.test(robots), 'robots.txt: User-agent * missing');
  assert(/^Allow:\s*\/\s*$/im.test(robots), 'robots.txt: indexing-authorized Allow: / missing');
  assert(!/^Disallow:\s*\/\s*$/im.test(robots), 'robots.txt: indexing-authorized state must not block all crawling');
  assert(/^Sitemap:\s*https:\/\/everettchurchofgod\.com\/sitemap\.xml\s*$/im.test(robots),
    'robots.txt: indexing-authorized sitemap directive missing or incorrect');
  assert(directives.filter(line => /^Sitemap:/i.test(line)).length === 1,
    'robots.txt: indexing-authorized sitemap must appear exactly once');
  assert(directives.filter(line => /^Allow:/i.test(line)).length === 1,
    'robots.txt: indexing-authorized allow must appear exactly once');
  assert(!directives.some(line => /^Disallow:/i.test(line)),
    'robots.txt: indexing-authorized unexpected Disallow rule');
}

  return { failures, hostingState, indexingState: sourceIndexingState, p06CandidateMode };
}

if (require.main === module) {
  const result = validateLaunchState();
  if (result.failures.length) {
    console.error(`Launch-state validation failed: hosting=${result.hostingState}; indexing=${result.indexingState}; ${result.failures.length} issue(s):`);
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }
  console.log(`Launch-state validation passed: hosting=${result.hostingState}; indexing=${result.indexingState}; ${pages.length} active pages, sitemap, robots, retired routes, compatibility routes, and production metadata checked.`);
}

module.exports = { validateLaunchState, validatePreviewResponseEvidence };
