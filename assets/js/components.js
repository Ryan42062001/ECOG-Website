(() => {
  const headerTarget = document.querySelector('[data-site-header]');
  const footerTarget = document.querySelector('[data-site-footer]');
  const path = window.location.pathname;
  const depth = path.includes('/ministries/') ? '../' : '';
  const lastSegment = path.split('/').filter(Boolean).pop() || '';
  const current = path.endsWith('/') ? 'index.html' : lastSegment;

  const navItems = [
    ['Home', 'index.html'],
    ['New Here', 'new-here.html'],
    ['About', 'about.html'],
    ['Ministries', 'ministries.html'],
    ['Messages', 'messages.html'],
    ['Events', 'events.html'],
    ['Give', 'give.html']
  ];

  const isCurrent = (href) => {
    if (current === href) return true;
    if (path.includes('/ministries/') && href === 'ministries.html') return true;
    return false;
  };

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <nav class="nav container" aria-label="Main navigation">
          <a class="brand" href="${depth}index.html" aria-label="Everett Church of God home">
            <span class="brand__mark" aria-hidden="true">ECOG</span>
            <span class="brand__text">Everett Church of God<small>Everett, Pennsylvania</small></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav__links" id="site-menu">
            ${navItems.map(([label, href]) => `<li><a href="${depth}${href}" ${isCurrent(href) ? 'aria-current="page"' : ''}>${label}</a></li>`).join('')}
          </ul>
          <a class="button button--secondary button--small nav__cta" href="${depth}new-here.html">Plan Your Visit</a>
        </nav>
      </header>`;
  }

  if (footerTarget) {
    const year = new Date().getFullYear();
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <h2>Everett Church of God</h2>
              <p>11152 Lincoln Highway<br>Everett, PA 15537</p>
              <p>Sunday Worship · 9:30 AM<br>Wednesday Bible Study · 7:00 PM</p>
            </div>
            <div>
              <h3>Explore</h3>
              <ul class="footer-links">
                <li><a href="${depth}new-here.html">New Here</a></li>
                <li><a href="${depth}about.html">About</a></li>
                <li><a href="${depth}ministries.html">Ministries</a></li>
                <li><a href="${depth}messages.html">Messages</a></li>
              </ul>
            </div>
            <div>
              <h3>Connect</h3>
              <ul class="footer-links">
                <li><a href="${depth}events.html">Events</a></li>
                <li><a href="${depth}give.html">Give</a></li>
                <li><a href="${depth}contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">© ${year} Everett Church of God. All rights reserved.</div>
        </div>
      </footer>`;
  }
})();
