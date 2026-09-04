(() => {
  const root = document.querySelector('[data-messages-app]');
  if (!root) return;

  const featured = root.querySelector('[data-featured-message]');
  const library = root.querySelector('[data-message-library]');
  const count = root.querySelector('[data-message-count]');
  const youtubeUrl = 'https://www.youtube.com/@everettchurchofgod417';

  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));

  const safeUrl = (value) => {
    if (!value) return '';
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  };

  const dateValue = (message) => {
    const value = Date.parse(message.date || '');
    return Number.isNaN(value) ? 0 : value;
  };

  const formatDate = (value) => {
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };

  const meta = (message) => [message.speaker, formatDate(message.date), message.scripture].filter(Boolean);
  const newTabText = '<span class="sr-only"> (opens in a new tab)</span>';

  const watchButton = (message, className = 'button button--secondary') => {
    const url = safeUrl(message.watchUrl);
    if (!url) return '';
    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Watch Message <span aria-hidden="true">↗</span>${newTabText}</a>`;
  };

  const renderFeatured = (message) => {
    if (!featured) return;
    const metadata = meta(message).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
    featured.innerHTML = `<div class="message-feature__media" aria-hidden="true"><span class="message-feature__play">▶</span></div><div class="message-feature__content"><p class="eyebrow">Latest message</p><h2>${escapeHtml(message.title)}</h2>${metadata ? `<div class="message-meta">${metadata}</div>` : ''}${message.description ? `<p class="message-description">${escapeHtml(message.description)}</p>` : ''}<div class="button-row">${watchButton(message)}</div></div>`;
    featured.hidden = false;
  };

  const renderCard = (message) => {
    const metadata = meta(message).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
    return `<article class="message-card"><div class="message-card__media" aria-hidden="true">▶</div><div class="message-card__body">${message.series ? `<span class="message-card__series">${escapeHtml(message.series)}</span>` : ''}<h3>${escapeHtml(message.title)}</h3>${metadata ? `<div class="message-meta">${metadata}</div>` : ''}${message.description ? `<p>${escapeHtml(message.description)}</p>` : ''}${watchButton(message, 'button button--secondary')}</div></article>`;
  };

  const renderEmpty = () => {
    if (featured) featured.hidden = true;
    if (count) count.textContent = 'Watch current messages on our official YouTube channel.';
    library.innerHTML = `<div class="messages-empty"><div class="messages-empty__icon" aria-hidden="true">▶</div><p class="eyebrow">Official message source</p><h3>Watch ECOG on YouTube.</h3><p>Our official YouTube channel is the current source for Everett Church of God messages while the on-site message library is being connected.</p><div class="button-row"><a class="button button--secondary" href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">Visit YouTube <span aria-hidden="true">↗</span>${newTabText}</a><a class="button button--secondary" href="new-here.html">Plan Your Visit</a></div></div>`;
  };

  const renderError = () => {
    if (featured) featured.hidden = true;
    if (count) count.textContent = '';
    library.innerHTML = `<div class="messages-error" role="status"><p>The on-site message library could not be loaded right now.</p><p><a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">Watch messages on our official YouTube channel <span aria-hidden="true">↗</span>${newTabText}</a></p></div>`;
  };

  fetch('data/sermons.json', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) throw new Error('Sermon data must be an array.');
      const messages = data.filter((message) => message && typeof message.title === 'string' && message.title.trim()).sort((a, b) => dateValue(b) - dateValue(a));
      if (!messages.length) return renderEmpty();
      renderFeatured(messages[0]);
      if (count) count.textContent = `${messages.length} ${messages.length === 1 ? 'message' : 'messages'}`;
      library.innerHTML = messages.map(renderCard).join('');
    })
    .catch(renderError);
})();
