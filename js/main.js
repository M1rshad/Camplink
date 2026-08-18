(() => {
  'use strict';

  const app = window.CampLink;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navThemeZones = [...document.querySelectorAll('[data-nav-theme]')];

  const setHeaderState = () => {
    if (!header) return;
    const isScrolled = window.scrollY > 12;
    const headerSampleY = window.scrollY + (header.offsetHeight / 2);
    const activeZone = navThemeZones.find(zone => {
      const top = zone.offsetTop;
      return headerSampleY >= top && headerSampleY < top + zone.offsetHeight;
    });
    header.classList.toggle('is-scrolled', isScrolled);
    header.classList.toggle('is-on-light', isScrolled && activeZone?.dataset.navTheme === 'light');
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
  window.addEventListener('resize', setHeaderState);

  const toggleMenu = (forceClose = false) => {
    if (!menuButton || !mobileMenu) return;
    const open = forceClose ? false : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    header?.classList.toggle('menu-active', open);

    if (window.gsap && !reducedMotion) {
      gsap.to(mobileMenu, {
        clipPath: open ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
        autoAlpha: open ? 1 : 0,
        duration: open ? .65 : .48,
        ease: 'power3.inOut',
        onStart: () => { if (open) mobileMenu.style.visibility = 'visible'; },
        onComplete: () => { if (!open) mobileMenu.style.visibility = 'hidden'; }
      });
      if (open) gsap.fromTo('.mobile-menu__inner > a', { y: 35, opacity: 0 }, { y: 0, opacity: 1, stagger: .055, duration: .55, delay: .2, ease: 'power3.out' });
    } else {
      mobileMenu.style.visibility = open ? 'visible' : 'hidden';
      mobileMenu.style.clipPath = open ? 'inset(0)' : 'inset(0 0 100% 0)';
    }
  };

  menuButton?.addEventListener('click', () => toggleMenu());
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(true)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') toggleMenu(true);
  });

  if (app) {
    const supportButton = document.querySelector('[data-whatsapp-float]');
    if (supportButton) supportButton.href = app.supportUrl('Hi CampLink, I would like help finding a stay.');

    const sorted = [...app.stays].sort((a, b) => a.fromPrice - b.fromPrice || a.name.localeCompare(b.name));
    const grid = document.querySelector('[data-stay-grid]');
    const compareBody = document.querySelector('[data-compare-body]');

    if (grid) {
      grid.innerHTML = sorted.map((stay, index) => `
        <article class="camp-card reveal" data-stay-card data-categories="${stay.categories.join(' ')}">
          <div class="camp-card__top"><p class="camp-card__type">${stay.type}</p><span class="camp-card__number">${String(index + 1).padStart(2, '0')}</span></div>
          <h3>${stay.name}</h3>
          <p class="camp-card__location">${stay.location}</p>
          <p class="camp-card__summary">${stay.tagline}</p>
          <div class="camp-card__chips">${stay.inclusions.slice(0, 3).map(item => `<span>${item}</span>`).join('')}</div>
          <div class="camp-card__price"><small>Public price</small><strong>${stay.priceSummary}</strong></div>
          <div class="camp-card__actions">
            <a class="button button--details" href="stay.html?camp=${encodeURIComponent(stay.slug)}"><span>Details & album</span></a>
            <a class="button" href="${app.bookingUrl(stay)}" target="_blank" rel="noopener"><span>Check dates</span></a>
          </div>
        </article>`).join('');
    }

    if (compareBody) {
      compareBody.innerHTML = sorted.map(stay => `
        <tr><td>${stay.name}</td><td>${stay.type}</td><td>${stay.priceSummary}</td><td>${stay.food}</td><td><a href="stay.html?camp=${encodeURIComponent(stay.slug)}">View details ↗</a></td></tr>`).join('');
    }

    document.querySelectorAll('[data-stay-filter]').forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.stayFilter;
        document.querySelectorAll('[data-stay-filter]').forEach(item => item.classList.toggle('is-active', item === button));
        document.querySelectorAll('[data-stay-card]').forEach(card => {
          card.hidden = filter !== 'all' && !card.dataset.categories.split(' ').includes(filter);
        });
      });
    });

    // Re-apply deep links after the data-driven cards have established the page height.
    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView();
      });
    }
  }

  if (!window.gsap || !window.ScrollTrigger || reducedMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  // Preserve the existing hero entrance and parallax treatment.
  const loadTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  loadTimeline
    .from('.brand, .nav-links a, .menu-toggle', { y: -22, opacity: 0, duration: .7, stagger: .055 })
    .from('.hero-word', { yPercent: 108, opacity: 0, duration: 1.05, stagger: .11 }, '-=.28')
    .from('.hero__eyebrow, .hero__bottom > p, .hero__actions .text-link, .scroll-cue', { y: 24, opacity: 0, duration: .72, stagger: .09 }, '-=.55');

  gsap.fromTo('[data-hero-image]', { scale: 1.08 }, {
    scale: 1,
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  document.querySelectorAll('.reveal').forEach(element => {
    gsap.from(element, { y: 28, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
  });
})();
