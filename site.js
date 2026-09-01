(() => {
  const data = window.PORTFOLIO;
  const projects = new Map(data.projects.map(p => [p.slug, p]));
  const slides = [...document.querySelectorAll('.slide')];
  const dialog = document.getElementById('projectDialog');
  const $ = (s) => document.querySelector(s);
  const byId = (id) => document.getElementById(id);

  const escape = (s = '') => String(s).replace(/[&<>'"]/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[c]));
  const validLinks = (links = []) => links.filter(l => l && l.href && l.href.trim() && l.href !== '#');

  byId('statementText').textContent = data.meta.statement;
  byId('emailLink').href = `mailto:${data.meta.email}`;
  byId('emailLink').textContent = `${data.meta.email} ↗`;

  const indexItems = [
    ['01', 'Permanente Inizio', 'permanente'],
    ['02', 'Studies / constraints', 'studies'],
    ['03', 'Space / interaction', 'space'],
    ['04', 'Body / design', 'design'],
    ['05', 'Sound / image', 'image'],
    ['06', 'Voice / production', 'voice'],
    ['07', 'Released productions', 'productions'],
    ['08', 'Research archive', 'contact']
  ];
  byId('indexList').innerHTML = indexItems.map(([n, t, id]) =>
    `<div class="index-item"><span class="n">${n}</span><button data-scroll="${id}">${escape(t)}</button><span>↘</span></div>`
  ).join('');

  const projectButton = (p, cls = 'project-tile') => `
    <button class="${cls}" data-project="${p.slug}">
      <img src="${p.image}" alt="${escape(p.title)}">
      <div class="${cls === 'project-tile' ? 'project-tile-copy' : cls === 'duo-card' ? 'duo-copy' : 'image-card-copy'}">
        <span>${escape(p.category)}</span><h3>${escape(p.title)}</h3>${cls === 'project-tile' ? `<p>${escape(p.summary)}</p>` : ''}
      </div>
    </button>`;

  const get = slug => projects.get(slug);
  const studies = ['campo-aperto', 'superfluous', 'vox-mea-sum', 'nubivagus', 'wasalo'].map(get).filter(Boolean);
  byId('studyGrid').innerHTML = studies.map((p, i) => `
    <button class="study-card" data-project="${p.slug}">
      <span class="num">0${i + 1}</span>
      <div><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p></div>
      <span class="mini">${escape(p.format)} · open ↗</span>
    </button>`).join('');

  byId('spaceProjects').innerHTML = ['acid-reign', 'air-controller', 'sonic-shuffle'].map(get).filter(Boolean).map(p => projectButton(p)).join('');
  byId('designProjects').innerHTML = ['arwe', 'pinacoteca'].map(get).filter(Boolean).map(p => projectButton(p, 'duo-card')).join('');
  byId('imageProjects').innerHTML = ['margherita-data', 'la-caduta-di-troia', 'pinvision'].map(get).filter(Boolean).map(p => projectButton(p, 'image-card')).join('');
  byId('voiceProjects').innerHTML = ['tide', 'poesia'].map(get).filter(Boolean).map(p => `
    <button class="voice-row" data-project="${p.slug}"><h3>${escape(p.title)}</h3><span>${escape(p.category)} ↗</span></button>`
  ).join('');

  byId('archiveProjects').innerHTML = ['dancing-motion', 'archi'].map(get).filter(Boolean).map(p => `
    <button class="archive-row" data-project="${p.slug}"><strong>${escape(p.title)}</strong><span>${escape(p.format)} ↗</span></button>`
  ).join('') + `<a class="archive-row" href="assets/docs/tesi.pdf" target="_blank" rel="noopener"><strong>Thesis — Suono come progetto</strong><span>PDF ↗</span></a>`;

  function renderReleases() {
    const releases = data.releases || [];
    byId('releaseGrid').innerHTML = releases.map(r => {
      const roles = (r.roles || []).map(role => `<span>${escape(role)}</span>`).join('');
      const links = validLinks(r.links).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${escape(l.label)} ↗</a>`).join('');
      return `
        <article class="release-card">
          <img src="${r.image}" alt="${escape(r.artist + ' — ' + r.title)}">
          <div class="release-copy">
            <div class="release-meta">${escape(r.year)} · ${escape(r.type)}</div>
            <h3>${escape(r.artist)}<br><em>${escape(r.title)}</em></h3>
            <p>${escape(r.credits)}</p>
            <div class="release-roles">${roles}</div>
            <div class="release-links">${links}</div>
          </div>
        </article>`;
    }).join('');
  }
  renderReleases();

  function openProject(slug) {
    const p = projects.get(slug);
    if (!p) return;
    byId('dialogImage').src = p.image;
    byId('dialogImage').alt = p.title;
    byId('dialogMeta').textContent = `${p.year} · ${p.category} · ${p.format}`;
    byId('dialogTitle').textContent = p.title;
    byId('dialogSummary').textContent = p.summary;
    byId('dialogTags').innerHTML = (p.tags || []).map(t => `<span class="tag">${escape(t)}</span>`).join('');
    const videos = (p.videoEmbeds || []).filter(v => v && v.embed).map(v => `
      <div class="video-item">
        <div class="audio-label">${escape(v.label || 'Video')}</div>
        <iframe class="video-frame" loading="lazy" src="${v.embed}" title="${escape(p.title + ' — ' + (v.label || 'video'))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>`).join('');
    const audios = (p.audio || []).filter(a => a && a.src).map(a => `
      <div class="audio-item"><div class="audio-label">${escape(a.label)}</div><audio controls preload="none" src="${a.src}"></audio></div>`
    ).join('');
    byId('dialogAudio').innerHTML = videos + audios;
    byId('dialogLinks').innerHTML = validLinks(p.links).map(l =>
      `<a href="${l.href}" ${l.download ? 'download' : ''} target="_blank" rel="noopener">${escape(l.label)} ↗</a>`
    ).join('');
    dialog.showModal();
  }

  document.addEventListener('click', e => {
    const projectEl = e.target.closest('[data-project]');
    if (projectEl) { openProject(projectEl.dataset.project); return; }
    const scrollEl = e.target.closest('[data-scroll]');
    if (scrollEl) { byId(scrollEl.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }); return; }
    const goto = e.target.closest('[data-goto]');
    if (goto) { byId(goto.dataset.goto)?.scrollIntoView({ behavior: 'smooth' }); return; }
    if (e.target.closest('[data-next]')) go(1);
  });

  byId('dialogClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  byId('printBtn').addEventListener('click', () => window.print());

  let current = Math.max(0, slides.findIndex(s => s.id === location.hash.slice(1)));
  const progress = byId('progress');
  function go(delta) {
    current = Math.max(0, Math.min(slides.length - 1, current + delta));
    slides[current].scrollIntoView({ behavior: 'smooth' });
  }

  byId('prevBtn').addEventListener('click', () => go(-1));
  byId('nextBtn').addEventListener('click', () => go(1));
  document.addEventListener('keydown', e => {
    if (dialog.open) { if (e.key === 'Escape') dialog.close(); return; }
    if (['ArrowDown', 'PageDown', 'ArrowRight'].includes(e.key)) { e.preventDefault(); go(1); }
    if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); go(-1); }
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > .55) {
        current = slides.indexOf(entry.target);
        progress.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
        history.replaceState(null, '', `#${entry.target.id}`);
      }
    });
  }, { threshold: [.55] });
  slides.forEach(s => obs.observe(s));

  const cursor = $('.cursor-dot');
  document.addEventListener('pointermove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
})();
