const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const productionOrigin = 'https://everettchurchofgod.com';
const productionHost = 'everettchurchofgod.com';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));
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

const cnameExists = exists('CNAME');
const mode = cnameExists ? 'production' : 'staging';

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

  if (mode === 'staging') {
    assert(/name=["']robots["']\s+content=["']noindex,nofollow["']/i.test(html), `${file}: staging noindex,nofollow safeguard missing`);
  } else {
    assert(!/\bnoindex\b/i.test(html), `${file}: production page must not contain noindex`);
    const robotsMeta = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
    if (robotsMeta) assert(/^index,follow$/i.test(robotsMeta[1].replace(/\s+/g, '')), `${file}: production robots meta must be index,follow when present`);
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

for (const file of activeCompatibilityPages) {
  const html = read(file);
  assert(!/\bnoindex\b/i.test(html), `${file}: active compatibility route must remain crawlable`);
}
const retiredCompatibility = read(retiredCompatibilityPage);
assert(/name=["']robots["']\s+content=["']noindex,follow["']/i.test(retiredCompatibility), `${retiredCompatibilityPage}: retired compatibility noindex missing`);
assert(!/index\.php\//i.test(sitemap), 'sitemap.xml: compatibility routes must remain excluded');

const robots = read('robots.txt');
if (mode === 'staging') {
  assert(/User-agent:\s*\*/i.test(robots) && /Disallow:\s*\//i.test(robots), 'robots.txt: staging crawl block missing');
  assert(!/Sitemap:/i.test(robots), 'robots.txt: staging must not advertise sitemap');
  assert(!cnameExists, 'staging mode must not have CNAME');
} else {
  const cname = read('CNAME').trim();
  assert(cname === productionHost, `CNAME must contain exactly ${productionHost}`);
  assert(/User-agent:\s*\*/i.test(robots), 'robots.txt: User-agent * missing');
  assert(/Allow:\s*\//i.test(robots), 'robots.txt: production Allow: / missing');
  assert(!/Disallow:\s*\//i.test(robots), 'robots.txt: production must not block all crawling');
  assert(new RegExp(`Sitemap:\\s*${escapeRegExp(productionOrigin)}/sitemap\\.xml`, 'i').test(robots), 'robots.txt: production sitemap directive missing or incorrect');
}

if (failures.length) {
  console.error(`Launch-state validation failed in ${mode} mode with ${failures.length} issue(s):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Launch-state validation passed in ${mode} mode for ${pages.length} active pages, sitemap, robots, retired routes, compatibility routes, and production metadata.`);
