(() => {
  'use strict';
  const app = window.CampLink;
  if (!app) return;

  const stay = app.getStay(new URLSearchParams(location.search).get('camp')) || app.stays[0];
  let currentMedia = 0;
  document.title = `${stay.name} — Packages, Album & Booking | CampLink`;
  const supportButton = document.querySelector('[data-whatsapp-float]');
  if (supportButton) supportButton.href = app.supportUrl(`Hi CampLink, I would like help with ${stay.name}.`);

  const setText = (selector, value) => { const element = document.querySelector(selector); if (element) element.textContent = value; };
  setText('[data-breadcrumb-name]', stay.name);
  setText('[data-detail-kicker]', `${stay.type} · ${stay.location}`);
  setText('[data-stay-name]', stay.name);
  setText('[data-stay-tagline]', stay.tagline);
  setText('[data-stay-price]', stay.priceSummary);
  setText('[data-stay-type]', stay.type);

  const photos = stay.media.filter(item => item.type === 'image').length;
  const videos = stay.media.filter(item => item.type === 'video').length;
  setText('[data-media-count]', videos ? `${photos} photos · ${videos} videos` : `${photos} photos`);

  const bookingLabel = stay.contact.type === 'instagram' ? 'Message on Instagram' : 'WhatsApp to book';
  document.querySelectorAll('[data-booking-link]').forEach(link => { link.href = app.bookingUrl(stay); link.querySelector('span').textContent = bookingLabel; });

  document.querySelector('[data-package-grid]').innerHTML = stay.packages.map(item => `<article class="detail-package"><h3>${item.name}</h3><div class="detail-package__price">${item.price}</div><p class="detail-package__basis">${item.basis}</p><p class="detail-package__description">${item.description}</p></article>`).join('');
  const renderList = (selector, items) => { document.querySelector(selector).innerHTML = items.map(item => `<li>${item}</li>`).join(''); };
  renderList('[data-inclusions]', stay.inclusions);
  renderList('[data-schedule]', stay.schedule);
  renderList('[data-amenities]', stay.amenities);
  renderList('[data-notes]', stay.notes);
  if (stay.nearby?.length) renderList('[data-nearby]', stay.nearby); else document.querySelector('[data-nearby-card]').hidden = true;

  const contactItems = [`<a href="${app.bookingUrl(stay)}" target="_blank" rel="noopener">${stay.contact.label}</a>`];
  if (stay.secondaryContact) contactItems.push(`<span>Also: ${stay.secondaryContact}</span>`);
  if (stay.website) contactItems.push(`<a href="${stay.website}" target="_blank" rel="noopener">Property website ↗</a>`);
  if (stay.maps) contactItems.push(`<a href="${stay.maps}" target="_blank" rel="noopener">Open in Google Maps ↗</a>`);
  if (stay.email) contactItems.push(`<a href="mailto:${stay.email}">${stay.email}</a>`);
  document.querySelector('[data-contact-links]').innerHTML = contactItems.join('');
  if (stay.brochure) { const link = document.querySelector('[data-brochure-link]'); link.href = encodeURI(stay.brochure); link.hidden = false; }

  const viewer = document.querySelector('[data-album-viewer]');
  const caption = document.querySelector('[data-media-caption]');
  const strip = document.querySelector('[data-album-strip]');
  const renderMedia = index => {
    currentMedia = (index + stay.media.length) % stay.media.length;
    const item = stay.media[currentMedia];
    viewer.replaceChildren();
    if (item.type === 'image') {
      const image = new Image(); image.src = item.src; image.alt = item.alt; viewer.append(image);
    } else {
      const video = document.createElement('video'); video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.setAttribute('aria-label', item.alt);
      const source = document.createElement('source'); source.src = item.src; source.type = 'video/mp4'; video.append(source); viewer.append(video);
    }
    caption.textContent = `${currentMedia + 1} / ${stay.media.length} · ${item.type === 'image' ? item.alt : 'Property walkthrough video'}`;
    strip.querySelectorAll('[data-media-index]').forEach((button, i) => button.classList.toggle('is-active', i === currentMedia));
  };

  stay.media.forEach((item, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'album-thumb'; button.dataset.mediaIndex = index; button.setAttribute('aria-label', `View ${item.type} ${index + 1}`);
    if (item.type === 'image') { const image = new Image(); image.src = item.src; image.alt = ''; image.loading = 'lazy'; button.append(image); }
    else { const mark = document.createElement('span'); mark.className = 'album-thumb__video'; mark.textContent = '▶'; button.append(mark); const small = document.createElement('small'); small.textContent = 'VIDEO'; button.append(small); }
    button.addEventListener('click', () => renderMedia(index)); strip.append(button);
  });
  document.querySelector('[data-media-prev]').addEventListener('click', () => renderMedia(currentMedia - 1));
  document.querySelector('[data-media-next]').addEventListener('click', () => renderMedia(currentMedia + 1));
  renderMedia(0);

  const stayIndex = app.stays.findIndex(item => item.slug === stay.slug);
  document.querySelector('[data-other-stays]').innerHTML = [1,2,3].map(offset => app.stays[(stayIndex + offset) % app.stays.length]).map(item => `<article class="other-stay"><small>${item.type}</small><h3>${item.name}</h3><p>${item.priceSummary}</p><a href="stay.html?camp=${encodeURIComponent(item.slug)}">Details & album ↗</a></article>`).join('');

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const toggleMenu = forceClose => {
    const open = forceClose ? false : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', String(!open)); mobileMenu.style.visibility = open ? 'visible' : 'hidden'; mobileMenu.style.clipPath = open ? 'inset(0)' : 'inset(0 0 100% 0)';
    header.classList.toggle('menu-active', open); document.body.classList.toggle('menu-open', open);
  };
  menuButton?.addEventListener('click', () => toggleMenu(false));
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(true)));
})();
