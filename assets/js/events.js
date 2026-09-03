(() => {
  const pageApp = document.querySelector('[data-events-app]');
  const homeApp = document.querySelector('[data-home-events]');
  if (!pageApp && !homeApp) return;

  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  const safeUrl = (value) => {
    if (!value || typeof value !== 'string') return '';
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };
  const parseDate = (value) => {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  };
  const dateParts = (value) => {
    const date = parseDate(value);
    if (!date) return null;
    return {
      month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
      day: new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date),
      weekday: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date),
      long: new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)
    };
  };
  const normalize = (data) => Array.isArray(data) ? data
    .filter((event) => event && typeof event === 'object' && typeof event.title === 'string' && event.title.trim() && parseDate(event.date))
    .sort((a, b) => parseDate(a.date) - parseDate(b.date)) : [];
  const meta = (event) => [event.time, event.location].filter((item) => typeof item === 'string' && item.trim()).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
  const action = (event, label = 'Event Details') => {
    const url = safeUrl(event.detailsUrl);
    return url ? `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">→</span></a>` : '';
  };
  const pageCard = (event) => {
    const date = dateParts(event.date);
    return `<article class="event-card"><div class="event-card__date"><strong>${date.day}</strong><span>${date.month} · ${date.weekday}</span></div><div class="event-card__body"><div class="event-card__meta">${meta(event)}</div>${event.category ? `<p class="eyebrow">${escapeHtml(event.category)}</p>` : ''}<h3>${escapeHtml(event.title)}</h3>${event.description ? `<p class="event-card__description">${escapeHtml(event.description)}</p>` : ''}<div class="event-card__actions">${action(event)}</div></div></article>`;
  };
  const homeCard = (event) => {
    const date = dateParts(event.date);
    return `<article class="home-event-card"><p class="home-event-card__date">${escapeHtml(date.long)}</p><h3>${escapeHtml(event.title)}</h3>${event.time || event.location ? `<p>${[event.time, event.location].filter(Boolean).map(escapeHtml).join(' · ')}</p>` : ''}${action(event, 'View details')}</article>`;
  };

  const renderPage = (events) => {
    const featured = pageApp.querySelector('[data-featured-event]');
    const library = pageApp.querySelector('[data-event-library]');
    const count = pageApp.querySelector('[data-event-count]');
    if (!events.length) {
      featured.hidden = true;
      count.textContent = 'No verified upcoming events posted yet';
      library.innerHTML = `<div class="events-empty"><p class="eyebrow">Calendar updates</p><h3>Upcoming events will appear here.</h3><p>We are preparing the church calendar for the new website. As dates and details are verified, they will be added here.</p><div class="button-row"><a class="button button--secondary" href="contact.html">Contact the Church</a><a class="button button--primary" href="new-here.html">Plan Your Visit</a></div></div>`;
      return;
    }
    const first = events[0]; const date = dateParts(first.date);
    featured.hidden = false;
    featured.innerHTML = `<div class="event-feature__date"><span class="event-feature__month">${date.month}</span><strong class="event-feature__day">${date.day}</strong><span class="event-feature__weekday">${date.weekday}</span></div><div class="event-feature__body"><p class="eyebrow">Next event</p><h2>${escapeHtml(first.title)}</h2><div class="event-feature__meta">${meta(first)}</div>${first.description ? `<p>${escapeHtml(first.description)}</p>` : ''}<div class="button-row">${action(first, 'Event Details')}</div></div>`;
    count.textContent = `${events.length} upcoming ${events.length === 1 ? 'event' : 'events'}`;
    library.innerHTML = events.map(pageCard).join('');
  };
  const renderHome = (events) => {
    const library = homeApp.querySelector('[data-home-event-list]');
    if (!events.length) {
      library.innerHTML = `<div class="home-empty-state"><p class="eyebrow">Calendar coming soon</p><h3>More ways to connect are on the way.</h3><p>We are preparing the church calendar for the new website. Visit the Events page as verified dates are added.</p><a class="button button--secondary" href="events.html">Visit Events</a></div>`;
      return;
    }
    library.innerHTML = events.slice(0, 3).map(homeCard).join('');
  };
  const renderError = () => {
    if (pageApp) {
      pageApp.querySelector('[data-featured-event]').hidden = true;
      pageApp.querySelector('[data-event-count]').textContent = 'Event calendar unavailable';
      pageApp.querySelector('[data-event-library]').innerHTML = `<div class="events-error" role="status"><h3>We couldn't load the event calendar.</h3><p>Please try again later or contact the church for current event information.</p><div class="button-row"><a class="button button--secondary" href="contact.html">Contact the Church</a></div></div>`;
    }
    if (homeApp) homeApp.querySelector('[data-home-event-list]').innerHTML = `<div class="home-events-error" role="status">Upcoming events could not be loaded. Visit the Events page or contact the church for current information.</div>`;
  };

  fetch('data/events.json', { cache: 'no-store' })
    .then((response) => { if (!response.ok) throw new Error('Event data request failed'); return response.json(); })
    .then((data) => { const events = normalize(data); if (pageApp) renderPage(events); if (homeApp) renderHome(events); })
    .catch(renderError);
})();
