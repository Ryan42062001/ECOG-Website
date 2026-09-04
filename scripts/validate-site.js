const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const publicPages = [
  'index.html', 'new-here.html', 'about.html', 'ministries.html',
  'ministries/children.html', 'ministries/students.html', 'ministries/men.html', 'ministries/women.html',
  'messages.html', 'events.html', 'give.html', 'contact.html'
];
const specialPages = ['404.html', 'ministries/senior-adults.html'];
const allPages = [...publicPages, ...specialPages];

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

  for (const match of html.matchAll(/<a\b([^>]*)>/gi)) {
    const attrs = match[1];
    const hrefMatch = attrs.match(/\bhref=["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];
    if (/^(?:https?:|mailto:|tel:|#|javascript:)/i.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = clean.startsWith('/') ? path.join(root, clean.replace(/^\/+/, '')) : path.resolve(path.dirname(full), clean);
    assert(fs.existsSync(target), `${file}: broken internal link ${href}`);
  }
}

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
assert(/prefers-reduced-motion:\s*reduce/i.test(css), 'main.css: reduced-motion safeguard missing');
assert(/\.sr-only\b/i.test(css), 'main.css: .sr-only utility missing');

const components = read('assets/js/components.js');
assert(/aria-label=["']Primary navigation["']/i.test(components), 'components.js: primary navigation label missing');
assert(/<address\s+class=["']footer-address["']/i.test(components), 'components.js: semantic footer address missing');
const mainJs = read('assets/js/main.js');
assert(/Escape/.test(mainJs) && /restoreFocus/.test(mainJs), 'main.js: keyboard menu close/focus restoration safeguard missing');

if (failures.length) {
  console.error(`Full-site validation failed with ${failures.length} issue(s):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Full-site validation passed: ${allPages.length} HTML pages, internal links, JSON data, JS syntax, and accessibility invariants checked.`);
