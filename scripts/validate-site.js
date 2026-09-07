const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const decodeHtmlUrl = value => value.replace(/&amp;/g, '&').replace(/&#38;/g, '&');
const publicPages = [
  'index.html', 'new-here.html', 'about.html', 'ministries.html',
  'ministries/children.html', 'ministries/students.html', 'ministries/men.html', 'ministries/women.html',
  'messages.html', 'events.html', 'give.html', 'contact.html'
];
const specialPages = ['404.html', 'ministries/senior-adults.html'];
const allPages = [...publicPages, ...specialPages];
const legacyRoutes = [
  ['index.php/messages/index.html', '../../messages.html', 'https://everettchurchofgod.com/messages.html'],
  ['index.php/contact-us/index.html', '../../contact.html', 'https://everettchurchofgod.com/contact.html'],
  ['index.php/donations/index.html', '../../give.html', 'https://everettchurchofgod.com/give.html'],
  ['index.php/services/index.html', '../../new-here.html#visit-details', 'https://everettchurchofgod.com/new-here.html'],
  ['index.php/our-pastors/index.html', '../../about.html#leadership-title', 'https://everettchurchofgod.com/about.html'],
  ['index.php/what-we-believe/index.html', '../../about.html#beliefs-title', 'https://everettchurchofgod.com/about.html'],
  ['index.php/ways-to-connect/index.html', '../../ministries.html', 'https://everettchurchofgod.com/ministries.html'],
  ['index.php/childrens-ministry/index.html', '../../ministries/children.html', 'https://everettchurchofgod.com/ministries/children.html'],
  ['index.php/amplify-students-ministry/index.html', '../../ministries/students.html', 'https://everettchurchofgod.com/ministries/students.html'],
  ['index.php/guys-ministry/index.html', '../../ministries/men.html', 'https://everettchurchofgod.com/ministries/men.html'],
  ['index.php/womens-ministry/index.html', '../../ministries/women.html', 'https://everettchurchofgod.com/ministries/women.html'],
  ['index.php/senior-adults-ministry/index.html', '../../ministries/senior-adults.html', 'https://everettchurchofgod.com/ministries/senior-adults.html']
];
const legacyPages = legacyRoutes.map(([file]) => file);
const deploymentBases = [
  ['staging project site', 'https://example.test/ECOG-Website/'],
  ['custom-domain root', 'https://example.test/']
];

const routeForFile = (file) => file.endsWith('/index.html') ? file.slice(0, -'index.html'.length) : file;
const validateSiteLocalUrl = (file, rawUrl, environmentName, base) => {
  if (!rawUrl) return;
  const href = decodeHtmlUrl(rawUrl.trim());
  if (/^(?:mailto:|tel:|javascript:|data:)/i.test(href)) return;
  let target;
  let baseUrl;
  try {
    baseUrl = new URL(base);
    target = new URL(href, new URL(routeForFile(file), baseUrl));
  } catch (error) {
    failures.push(`${file}: invalid URL ${rawUrl} for ${environmentName} (${error.message})`);
    return;
  }
  if (!['http:', 'https:'].includes(target.protocol) || target.origin !== baseUrl.origin) return;
  const basePath = baseUrl.pathname;
  if (basePath !== '/' && !target.pathname.startsWith(basePath)) {
    failures.push(`${file}: site-local URL ${rawUrl} escapes ${environmentName} base ${basePath}`);
    return;
  }
  let repoPath = basePath === '/' ? target.pathname.replace(/^\/+/, '') : target.pathname.slice(basePath.length);
  try { repoPath = decodeURIComponent(repoPath); } catch { /* keep encoded path for the file check */ }
  if (!repoPath || repoPath.endsWith('/')) repoPath += 'index.html';
  const targetFile = path.join(root, repoPath);
  assert(fs.existsSync(targetFile) && fs.statSync(targetFile).isFile(), `${file}: broken site-local URL ${rawUrl} under ${environmentName} (expected ${repoPath})`);
  if (!target.hash || !fs.existsSync(targetFile) || !/\.html?$/i.test(repoPath)) return;
  let fragment = target.hash.slice(1);
  try { fragment = decodeURIComponent(fragment); } catch { /* keep encoded fragment */ }
  if (!fragment) return;
  const targetHtml = fs.readFileSync(targetFile, 'utf8');
  const fragmentPattern = new RegExp(`\\b(?:id|name)=["']${escapeRegExp(fragment)}["']`, 'i');
  assert(fragmentPattern.test(targetHtml), `${file}: missing fragment #${fragment} in ${repoPath}`);
};

const htmlReferences = html => {
  const refs = [];
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) refs.push(match[1]);
  for (const match of html.matchAll(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) refs.push(match[1]);
  for (const match of html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) refs.push(match[1]);
  for (const match of html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) refs.push(match[1]);
  return refs;
};

for (const file of allPages) {
  const full = path.join(root, file);
  assert(fs.existsSync(full), `${file}: page missing`);
  if (!fs.existsSync(full)) continue;
  const html = read(file);
  const h1s = [...html.matchAll(/<h1\b/gi)].length;
  assert(h1s === 1, `${file}: expected exactly one h1, found ${h1s}`);
  assert(/<main\b[^>]*\bid=["']main-content["']/i.test(html), `${file}: main#main-content missing`);
  assert(/<a\b[^>]*class=["'][^"']*skip-link[^"']*["'][^>]*href=["']#main-content["']/i.test(html), `${file}: skip link to #main-content missing`);
  assert(/<html\b[^>]*\blang=["']en["']/i.test(html), `${file}: html lang="en" missing`);
  assert(/<meta\b[^>]*name=["']viewport["']/i.test(html), `${file}: viewport meta missing`);
  assert(!/role=["']img["'][^>]*(placeholder|photo|map)/i.test(html), `${file}: development placeholder exposed with role=img`);
}

for (const file of [...allPages, ...legacyPages]) {
  if (!fs.existsSync(path.join(root, file))) continue;
  const html = read(file);
  for (const ref of htmlReferences(html)) {
    for (const [environmentName, base] of deploymentBases) validateSiteLocalUrl(file, ref, environmentName, base);
  }
}

for (const [file, target, canonical] of legacyRoutes) {
  const full = path.join(root, file);
  assert(fs.existsSync(full), `${file}: legacy compatibility page missing`);
  if (!fs.existsSync(full)) continue;
  const html = read(file);
  assert(html.includes(`http-equiv="refresh" content="0; url=${target}"`), `${file}: zero-delay forwarding target incorrect`);
  assert(html.includes(`<link rel="canonical" href="${canonical}">`), `${file}: canonical target incorrect`);
  assert(new RegExp(`<a\\b[^>]*href=["']${escapeRegExp(target)}["']`, 'i').test(html), `${file}: visible fallback link incorrect`);
  if (file === 'index.php/senior-adults-ministry/index.html') {
    assert(/name=["']robots["']\s+content=["']noindex,follow["']/i.test(html), `${file}: retired compatibility noindex safeguard missing`);
  } else {
    assert(!/\bnoindex\b/i.test(html), `${file}: active-destination compatibility route must not contain noindex`);
  }
  for (const [environmentName, base] of deploymentBases) validateSiteLocalUrl(file, target, environmentName, base);
}
assert(!/index\.php\//i.test(read('sitemap.xml')), 'sitemap.xml: legacy compatibility routes must not be listed');

for (const file of ['data/events.json', 'data/sermons.json']) {
  try {
    const data = JSON.parse(read(file));
    assert(Array.isArray(data), `${file}: root value must be an array`);
  } catch (error) {
    failures.push(`${file}: invalid JSON (${error.message})`);
  }
}

const jsDir = path.join(root, 'assets/js');
for (const name of fs.readdirSync(jsDir).filter(name => name.endsWith('.js'))) {
  const file = path.join(jsDir, name);
  try { new vm.Script(fs.readFileSync(file, 'utf8'), {filename: name}); }
  catch (error) { failures.push(`assets/js/${name}: syntax error (${error.message})`); }
}

const css = read('assets/css/main.css');
assert(/:focus-visible/i.test(css), 'main.css: :focus-visible safeguard missing');
assert(/:focus-visible\{outline:3px solid var\(--color-accent-dark\)/i.test(css), 'main.css: high-contrast light-surface focus indicator missing');
assert(/\.section-dark :focus-visible[^}]*outline-color:var\(--color-accent\)/i.test(css), 'main.css: dark-surface focus indicator missing');
assert(/\[data-site-header\]:empty\{[^}]*min-height:var\(--header-height\)/i.test(css), 'main.css: empty header height reservation missing');
assert(/prefers-reduced-motion:\s*reduce/i.test(css), 'main.css: reduced-motion safeguard missing');
assert(/\.sr-only\b/i.test(css), 'main.css: .sr-only utility missing');

const components = read('assets/js/components.js');
assert(/aria-label=["']Primary navigation["']/i.test(components), 'components.js: primary navigation label missing');
assert(/<address\s+class=["']footer-address["']/i.test(components), 'components.js: semantic footer address missing');
assert(components.includes("const homeHref = depth ? '../' : './';"), 'components.js: environment-safe Home root missing');
assert(components.includes("const linkHref = (href) => href === 'index.html' ? homeHref"), 'components.js: generated Home link mapping missing');
assert(!components.includes('${depth}index.html'), 'components.js: index.html Home URL should not be generated');
const sharedDestinations = ['new-here.html', 'about.html', 'ministries.html', 'messages.html', 'events.html', 'give.html', 'contact.html'];
for (const [environmentName, base] of deploymentBases) {
  validateSiteLocalUrl('index.html', './', environmentName, base);
  for (const destination of sharedDestinations) validateSiteLocalUrl('index.html', destination, environmentName, base);
  validateSiteLocalUrl('ministries/children.html', '../', environmentName, base);
  for (const destination of sharedDestinations) validateSiteLocalUrl('ministries/children.html', `../${destination}`, environmentName, base);
}

const mainJs = read('assets/js/main.js');
assert(/Escape/.test(mainJs) && /restoreFocus/.test(mainJs), 'main.js: keyboard menu close/focus restoration safeguard missing');
const messagesHtml = read('messages.html');
const eventsHtml = read('events.html');
const homeHtml = read('index.html');
assert(/data-message-count\s+role=["']status["']/i.test(messagesHtml) && !/data-message-library[^>]*aria-live/i.test(messagesHtml), 'Messages: concise status/live-region pattern missing');
assert(/data-event-count\s+role=["']status["']/i.test(eventsHtml) && !/data-event-library[^>]*aria-live/i.test(eventsHtml), 'Events: concise status/live-region pattern missing');
assert(/data-home-event-status\s+role=["']status["']/i.test(homeHtml) && !/data-home-event-list[^>]*aria-live/i.test(homeHtml), 'Homepage events: concise status/live-region pattern missing');
const messagesJs = read('assets/js/messages.js');
const eventsJs = read('assets/js/events.js');
assert(!messagesJs.includes('role="status"') && !eventsJs.includes('role="status"'), 'Dynamic renderers: nested role=status markup detected');

for (const [file, pattern] of [
  ['index.html', /Church family photo|Latest message will appear here|Map & directions/i],
  ['new-here.html', /Church worship photo|Children's ministry photo|Recent message video|Map & directions/i],
  ['about.html', /Church Family Photo|Pastor Photo/i],
  ['ministries/children.html', /Children's Ministry Photo/i],
  ['ministries/students.html', /Amplify Students Photo/i],
  ['ministries/men.html', /Guys Ministry Photo/i],
  ['ministries/women.html', /Women's Ministry Photo/i]
]) assert(!pattern.test(read(file)), `${file}: production-visible media placeholder wording remains`);

const give = read('give.html');
const giveOutboundAnchors = [...give.matchAll(/<a\b[^>]*\bhref=["'](https?:\/\/[^"']+)["'][^>]*>/gi)].map(match => match[1]);
assert(giveOutboundAnchors.length === 0, `give.html: unverified outbound anchor(s): ${giveOutboundAnchors.join(', ')}`);

if (failures.length) {
  console.error(`Full-site validation failed with ${failures.length} issue(s):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Full-site validation passed: ${allPages.length} primary/special HTML pages, ${legacyPages.length} legacy routes, dual-base local URLs, JSON data, JS syntax, and accessibility invariants checked.`);
