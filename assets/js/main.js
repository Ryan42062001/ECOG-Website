(() => {
  const initNavigation = () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('#site-menu');
    if (!toggle || !menu || toggle.dataset.initialized === 'true') return;

    toggle.dataset.initialized = 'true';
    const menuLinks = [...menu.querySelectorAll('a')];

    const closeMenu = ({ restoreFocus = false } = {}) => {
      const wasOpen = menu.classList.contains('is-open');
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      if (restoreFocus && wasOpen) toggle.focus();
    };

    const openMenu = () => {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      menuLinks[0]?.focus();
    };

    toggle.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
      }
    });

    document.addEventListener('click', (event) => {
      if (menu.classList.contains('is-open') && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  };

  initNavigation();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation, { once: true });
  }
})();
