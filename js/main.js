/* Greenstone mockup — shared UI (header, menu, footer, search, hours) */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Icons (Lucide-style, 24px, stroke) ---------- */
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    arrowL: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    car: '<path d="M5 17h14v-5l-2-5H7l-2 5z"/><path d="M5 12h14"/><circle cx="8" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    store: '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12v8h13v-8"/><path d="M10 20v-4.5h4V20"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    food: '<path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10"/><path d="M17 21V3c-2.2 1.2-3.5 3.6-3.5 7v3H17"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z"/>',
    home: '<path d="M4 11 12 4l8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
    cctv: '<path d="M3 7.5 15.5 4l2 6.5L5 14z"/><path d="m17.5 10.5 3 1-1 3-3-1"/><path d="M8 13.5V18H3"/>',
    stroller: '<path d="M4 5h3l2.5 9H18l2-6H8.2"/><circle cx="9.5" cy="18.5" r="1.5"/><circle cx="17" cy="18.5" r="1.5"/>',
    wheel: '<circle cx="12" cy="4.5" r="1.6"/><path d="M11 8v6h5l2 5"/><path d="M8 11.5a5.5 5.5 0 1 0 7.6 6.4"/>',
    parking: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"/>',
    covered: '<path d="M3 9 12 4l9 5"/><path d="M5 20v-9M19 20v-9"/><path d="M8 17h8v-3l-1-2H9l-1 2z"/>',
    taxi: '<path d="M10 4h4l.5 2"/><path d="M5 17h14v-4.5L17.5 8h-11L5 12.5z"/><circle cx="8" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/><path d="M5 12.5h14"/>',
    bus: '<rect x="5" y="3.5" width="14" height="14" rx="2.5"/><path d="M5 10h14M8 17.5V20M16 17.5V20"/><circle cx="8.5" cy="14" r=".9"/><circle cx="15.5" cy="14" r=".9"/>',
    gift: '<rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M3 9h18M12 9v11"/><path d="M12 9c-1.5-3.5-5.5-4-5.5-1.5S10 9 12 9c2 0 5.5.5 5.5-1.5S13.5 5.5 12 9z"/>',
    gym: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
    nav: '<path d="M4 11 20 4l-7 16-2-7z"/>',
    shield: '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
    fb: '<path d="M14 21v-7.5h2.6l.4-3H14V8.6c0-.9.3-1.5 1.6-1.5H17V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.3H8.4v3H11V21"/>',
    ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor"/>',
    tag: '<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8.5" r="1.4"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.5"/>',
  };
  const icon = (n, cls = '') => `<svg class="${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
  window.GA_ICON = icon;

  /* ---------- Centre info ---------- */
  P.wifi = '<path d="M2.5 9a15 15 0 0 1 19 0"/><path d="M5.5 12.5a10 10 0 0 1 13 0"/><path d="M8.6 16a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19.2" r=".9" fill="currentColor"/>';
  P.recycle = '<path d="M7 19H4.5a1.8 1.8 0 0 1-1.5-2.7L5.4 12"/><path d="M11 19h8.5a1.8 1.8 0 0 0 1.5-2.7L19.4 14"/><path d="m14 16-3 3 3 3"/><path d="M8.3 13.5 9.4 9.4 5.3 8.3"/><path d="m9.4 9.4 2.9-4.9a1.8 1.8 0 0 1 3 0L17 7.4"/><path d="m13.6 8.6 4.1 1.1 1.1-4.1"/>';
  P.bank = '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 20h18"/>';
  P.kids = '<circle cx="12" cy="6" r="2.5"/><path d="M8 21v-6l-2-3 3-3h6l3 3-2 3v6"/>';
  P.wash = '<path d="M5 17h14v-4l-2-4H7l-2 4z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/><path d="M8 5c0 1 1 1 1 2M12 4c0 1 1 1 1 2M16 5c0 1 1 1 1 2"/>';
  P.post = '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>';
  P.tiktok = '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.4 2.6 2.2 4.4 5 4.6"/>';
  const CENTRE = {
    phone: '011 524 0445', phoneHref: 'tel:+27115240445',
    address: 'Cnr Van Riebeeck & Modderfontein Rd, Greenstone Hill, Edenvale',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Greenstone+Shopping+Centre+Edenvale',
    leasing: 'nclifford@broll.com', expo: 'katlego@emergemarketing.co.za',
    fb: 'https://www.facebook.com/pages/Greenstone-Shopping-Centre/338570753285',
    ig: 'https://www.instagram.com/greenstoneshoppingcentre/',
    tt: 'https://www.tiktok.com/@greenstoneshoppingcentre',
    padel: 'https://playtomic.com/clubs/padel-365-greenstone',
  };
  window.GA_CENTRE = CENTRE;

  // [open, close] in minutes. Sun = 0. Mon–Fri 09–19, Sat 09–18, Sun & PH 09–17
  const HOURS = { 0: [540, 1020], 1: [540, 1140], 2: [540, 1140], 3: [540, 1140], 4: [540, 1140], 5: [540, 1140], 6: [540, 1080] };
  const fmt = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  function nowSA() {
    const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Johannesburg', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const g = t => p.find(x => x.type === t).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(g('weekday'));
    return { day, mins: (+g('hour') % 24) * 60 + +g('minute') };
  }
  function status() {
    const { day, mins } = nowSA();
    const [o, c] = HOURS[day];
    if (mins >= o && mins < c) return { open: true, label: `Open until ${fmt(c)}`, html: `<span class="st open">Open</span> until ${fmt(c)} today`, today: `${fmt(o)} – ${fmt(c)}`, day };
    let nd = mins < o ? day : (day + 1) % 7;
    const when = nd === day ? 'today' : nd === (day + 1) % 7 ? 'tomorrow' : '';
    return { open: false, label: `Closed, opens ${when} ${fmt(HOURS[nd][0])}`, html: `<span class="st closed">Closed</span> · opens ${when} at ${fmt(HOURS[nd][0])}`, today: `${fmt(o)} – ${fmt(c)}`, day };
  }
  window.GA_STATUS = status;

  /* ---------- Header / menu / footer / tabbar ---------- */
  const page = document.body.dataset.page || 'home';
  const links = [
    ['Stores', 'stores.html', 'stores'],
    ['Food & drink', 'stores.html?cat=Food%20%26%20Drink', 'dining'],
    ['Entertainment', 'index.html#play', 'play'],
    ["What's on", 'index.html#whats-on', 'whatson'],
    ['Visit', 'index.html#visit', 'visit'],
    ['Leasing & Expos', 'index.html#business', 'biz'],
  ];
  const st = status();
  const total = (window.GA_STORES || []).length || 150;

  const header = `
  <div class="announce"><span class="long"><strong>Indoor padel &amp; pickleball</strong> is now on at Padel365, Greenstone.</span><span class="short"><strong>Padel &amp; pickleball</strong> now on.</span> <a href="${CENTRE.padel}" target="_blank" rel="noopener">Book a court</a></div>
  <header class="header" id="header">
    <div class="wrap header-in">
      <a href="index.html" class="logo" aria-label="Greenstone Shopping Centre home"><img src="assets/brand/greenstone-logo.svg" alt="Greenstone Shopping Centre" width="150" height="45"></a>
      <nav class="nav" aria-label="Main">${links.map(([t, h, k]) => `<a href="${h}" class="${k === page ? 'active' : ''}">${t}</a>`).join('')}</nav>
      <div class="header-actions">
        <a href="index.html#visit" class="status">${st.html}</a>
        <button class="icon-btn" data-open-search aria-label="Search stores">${icon('search')}</button>
        <a class="btn btn-ink hdr-cta" href="${CENTRE.directions}" target="_blank" rel="noopener">Get directions</a>
        <button class="burger" data-toggle-menu aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span></button>
      </div>
    </div>
  </header>`;

  const mItems = [
    ['Home', 'index.html', 'Welcome to Greenstone'],
    ['Stores', 'stores.html', `${total} stores over two levels`],
    ['Food & drink', 'stores.html?cat=Food%20%26%20Drink', 'Restaurants, coffee & takeaways'],
    ['Entertainment', 'index.html#play', 'Karting, trampolines, padel & more'],
    ["What's on", 'index.html#whats-on', 'Events, promos & competitions'],
    ['Visit', 'index.html#visit', 'Hours, parking & directions'],
    ['Leasing & Expos', 'index.html#business', 'Grow your brand with us'],
  ];
  const menu = `
  <div class="mnav" id="mnav" aria-hidden="true">
    <div class="mnav-in wrap">
      <nav class="mnav-links" aria-label="Menu">
        ${mItems.map(([t, h, d], i) => `<a href="${h}" style="--i:${i}"><span class="t">${t}</span><span class="d">${d}</span>${icon('arrow')}</a>`).join('')}
      </nav>
      <a class="mnav-card" href="index.html#visit" style="--i:7">
        <img src="assets/img/interior-levels.jpg" alt="" loading="lazy">
        <span><span class="status">${st.html}</span><small>Cnr Van Riebeeck &amp; Modderfontein Rd, Edenvale</small></span>
      </a>
      <div class="mnav-actions" style="--i:8">
        <a class="btn btn-red" href="${CENTRE.directions}" target="_blank" rel="noopener">${icon('nav')}Directions</a>
        <a class="btn btn-line" href="${CENTRE.phoneHref}">${icon('phone')}${CENTRE.phone}</a>
      </div>
      <div class="mnav-social" style="--i:9">
        <a href="${CENTRE.fb}" target="_blank" rel="noopener">${icon('fb')}Facebook</a>
        <a href="${CENTRE.ig}" target="_blank" rel="noopener">${icon('ig')}Instagram</a>
        <a href="${CENTRE.tt}" target="_blank" rel="noopener">${icon('tiktok')}TikTok</a>
      </div>
    </div>
  </div>`;

  const tabbar = `
  <nav class="tabbar" id="tabbar" aria-label="Quick links">
    <a href="stores.html" class="${page === 'stores' ? 'active' : ''}">${icon('store')}Stores</a>
    <a href="index.html#whats-on">${icon('cal')}What's on</a>
    <a href="${CENTRE.directions}" target="_blank" rel="noopener">${icon('nav')}Directions</a>
    <a href="#" data-toggle-menu>${icon('menu')}Menu</a>
  </nav>`;

  const footer = `
  <footer class="footer">
    <div class="wrap">
      <div class="f-news">
        <div><h2 class="h-1">Be first to know</h2><p>Events, competitions and specials from Greenstone, straight to your inbox.</p></div>
        <form data-news><input type="email" required placeholder="Email address" aria-label="Email address"><button class="btn btn-white" type="submit">Subscribe</button></form>
      </div>
      <div class="f-grid">
        <div class="f-brand">
          <img class="f-logo" src="assets/brand/greenstone-logo.svg" alt="Greenstone Shopping Centre">
          <p>Real retail, real life. Over ${Math.floor(total / 10) * 10} stores, restaurants and family entertainment in Edenvale.</p>
          <div class="socials">
            <a href="${CENTRE.fb}" target="_blank" rel="noopener" aria-label="Facebook">${icon('fb')}</a>
            <a href="${CENTRE.ig}" target="_blank" rel="noopener" aria-label="Instagram">${icon('ig')}</a>
            <a href="${CENTRE.tt}" target="_blank" rel="noopener" aria-label="TikTok">${icon('tiktok')}</a>
          </div>
        </div>
        <div class="f-col"><h4>Explore</h4><ul>
          <li><a href="stores.html">Store directory</a></li>
          <li><a href="stores.html?cat=Food%20%26%20Drink">Food &amp; drink</a></li>
          <li><a href="index.html#play">Entertainment</a></li>
          <li><a href="index.html#whats-on">What's on</a></li>
        </ul></div>
        <div class="f-col"><h4>Visit</h4><ul>
          <li><a href="index.html#visit">Trading hours</a></li>
          <li><a href="index.html#amenities">Amenities</a></li>
          <li><a href="index.html#recycle">Recycling</a></li>
          <li><a href="index.html#faq">FAQs</a></li>
        </ul></div>
        <div class="f-col"><h4>Business</h4><ul>
          <li><a href="index.html#business">Leasing</a></li>
          <li><a href="index.html#business">Exhibitions</a></li>
          <li><a href="assets/docs/exhibitions-brochure-2026.pdf" target="_blank" rel="noopener">Exhibitions brochure (PDF)</a></li>
        </ul></div>
        <div class="f-col"><h4>Contact</h4><ul>
          <li><a href="${CENTRE.phoneHref}">${CENTRE.phone}</a></li>
          <li>Cnr Van Riebeeck &amp; Modderfontein Rd, Greenstone Hill, Edenvale, 1609</li>
          <li><a href="${CENTRE.directions}" target="_blank" rel="noopener">Get directions →</a></li>
        </ul></div>
      </div>
      <div class="f-bottom">
        <div class="legal">
          <span>© ${new Date().getFullYear()} Greenstone Shopping Centre</span>
          <a href="#">Privacy Policy</a><a href="#">PAIA Manual</a>
        </div>
        <a class="gp" href="https://www.broll.com" target="_blank" rel="noopener"><span>Managed by</span><img src="assets/brand/broll.svg" alt="Broll"></a>
      </div>
    </div>
  </footer>`;

  const searchOverlay = `
  <div class="sheet-backdrop" id="backdrop"></div>
  <div class="menu" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search stores">
    <div class="menu-top">
      <span class="h-3">Find a store</span>
      <button class="icon-btn" data-close-search aria-label="Close search">${icon('x')}</button>
    </div>
    <div class="hero-search" style="max-width:none;margin-top:8px">
      <label class="search-field">${icon('search')}<input type="search" placeholder="Store, brand or category…" data-store-search autocomplete="off" aria-label="Search stores"></label>
      <div class="results" style="position:static;box-shadow:none;max-height:none;margin-top:12px;background:none;padding:0"></div>
    </div>
  </div>
  <div class="toast" id="toast"></div>`;

  document.body.insertAdjacentHTML('afterbegin', header + menu);
  document.body.insertAdjacentHTML('beforeend', footer + tabbar + searchOverlay);

  /* ---------- Behaviour ---------- */
  let lockY = 0;
  const lock = on => {
    const r = document.documentElement;
    if (on && !r.classList.contains('locked')) { lockY = scrollY; r.classList.add('locked'); }
    else if (!on && r.classList.contains('locked')) { r.classList.remove('locked'); scrollTo({ top: lockY, behavior: 'instant' }); }
  };
  window.GA_LOCK = lock;
  const menuEl = $('#mnav'), searchEl = $('#searchOverlay'), hdrEl = $('#header');
  const setMenu = open => {
    if (open) menuEl.style.setProperty('--mtop', Math.max(0, hdrEl.getBoundingClientRect().bottom) + 'px');
    menuEl.classList.toggle('open', open); hdrEl.classList.toggle('menu-open', open);
    menuEl.setAttribute('aria-hidden', !open);
    $$('[data-toggle-menu]').forEach(b => { b.setAttribute('aria-expanded', open); if (b.classList.contains('burger')) b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    lock(open);
  };
  $$('[data-toggle-menu]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); setMenu(!menuEl.classList.contains('open')); }));
  $$('#mnav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('resize', () => { if (innerWidth >= 1024 && menuEl.classList.contains('open')) setMenu(false); });
  $$('[data-open-search]').forEach(b => b.addEventListener('click', () => { searchEl.classList.add('open'); lock(true); setTimeout(() => $('input', searchEl).focus(), 50); }));
  $$('[data-close-search]').forEach(b => b.addEventListener('click', () => { searchEl.classList.remove('open'); lock(false); }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { setMenu(false); searchEl.classList.remove('open'); lock(false); }
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); searchEl.classList.add('open'); lock(true); $('input', searchEl).focus(); }
  });

  // header shadow + hide tabbar on fast scroll down
  const hdr = $('#header'), tb = $('#tabbar'); let lastY = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY; hdr.classList.toggle('scrolled', y > 8);
    if (Math.abs(y - lastY) > 12) { tb.classList.toggle('hide', y > lastY && y > 400); lastY = y; }
  }, { passive: true });

  document.addEventListener('focusin', e => { if (e.target.matches('input')) tb.classList.add('hide'); });
  document.addEventListener('focusout', e => { if (e.target.matches('input')) tb.classList.remove('hide'); });

  // toast
  window.GA_TOAST = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2600); };

  // status everywhere
  $$('[data-status]').forEach(el => el.innerHTML = st.html);
  $$('[data-today]').forEach(el => el.textContent = st.today);
  $$('[data-news]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); f.reset(); window.GA_TOAST("Thanks, you're subscribed."); }));

  /* ---------- Store search (hero + overlay) ---------- */
  const STORES = window.GA_STORES || [];
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, '');
  function find(q) {
    q = norm(q.trim()); if (!q) return [];
    return STORES.map(s => {
      const n = norm(s.name), c = norm(s.cat);
      const score = n.startsWith(q) ? 3 : n.split(' ').some(w => w.startsWith(q)) ? 2 : n.includes(q) ? 1.5 : c.includes(q) ? 1 : 0;
      return { s, score };
    }).filter(x => x.score).sort((a, b) => b.score - a.score || a.s.name.localeCompare(b.s.name)).slice(0, 8).map(x => x.s);
  }
  window.GA_FIND = find;
  const resultHTML = s => `<a class="result" href="stores.html?store=${s.id}"><span class="lg"><img src="${s.logo}" alt="" loading="lazy"></span><span><b>${s.name}</b><small>${s.cat}</small></span><span class="shop">${s.shop && s.shop !== 'Kiosk' ? 'Shop ' + s.shop : s.shop || ''}</span></a>`;
  $$('[data-store-search]').forEach(inp => {
    const box = inp.closest('.hero-search').querySelector('.results');
    let hl = -1;
    const render = () => {
      const r = find(inp.value); hl = -1;
      if (!inp.value.trim()) { box.classList.remove('show'); box.innerHTML = ''; return; }
      box.innerHTML = r.length ? r.map(resultHTML).join('') + `<a class="result all" href="stores.html?q=${encodeURIComponent(inp.value)}">See all results</a>` : `<div class="empty">No stores match “${inp.value}”. Try a category like “food” or “banks”.</div>`;
      box.classList.add('show');
    };
    inp.addEventListener('input', render);
    inp.addEventListener('focus', render);
    inp.addEventListener('keydown', e => {
      const items = $$('.result', box);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); hl = Math.max(0, Math.min(items.length - 1, hl + (e.key === 'ArrowDown' ? 1 : -1))); items.forEach((x, i) => x.classList.toggle('hl', i === hl)); }
      if (e.key === 'Enter') { e.preventDefault(); location.href = items[hl] ? items[hl].href : `stores.html?q=${encodeURIComponent(inp.value)}`; }
    });
    document.addEventListener('click', e => { if (!inp.closest('.hero-search').contains(e.target) && !inp.closest('#searchOverlay')) box.classList.remove('show'); });
  });
  $$('[data-search-go]').forEach(b => b.addEventListener('click', () => { const v = b.closest('.hero-search').querySelector('input').value; location.href = 'stores.html' + (v ? '?q=' + encodeURIComponent(v) : ''); }));

  /* ---------- Page transitions: fade content out/in, header stays ---------- */
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('ready')));
  addEventListener('pageshow', e => { if (e.persisted) root.classList.remove('leaving'); root.classList.add('ready'); });
  document.addEventListener('click', e => {
    if (reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]'); if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = a.getAttribute('href'); if (!href || href.startsWith('#') || /^(mailto|tel):/i.test(href)) return;
    const url = new URL(a.href, location.href);
    const sameSite = url.origin === location.origin || (location.protocol === 'file:' && url.protocol === 'file:');
    if (!sameSite) return;
    if (url.pathname === location.pathname && url.search === location.search && url.hash) return; // same-page anchor
    e.preventDefault();
    root.classList.add('leaving');
    setTimeout(() => { location.href = url.href; }, 240);
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Icon placeholders: <i data-i="name"></i> ---------- */
  $$('i[data-i]').forEach(el => el.outerHTML = icon(el.dataset.i));
})();
