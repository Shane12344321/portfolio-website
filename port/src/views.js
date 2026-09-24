/* ───────── Windows: what each menu item opens ───────── */
const V = (id, def) => WM.VIEWS.set(id, def);
const tags = list => `<div class="tags">${list.map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>`;
const bullets = list => `<ul>${list.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`;
const ext = (href, label, cls = 'mbtn') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;

V('about-me', { title: 'About Me', w: 440, h: 330, render(c) {
  c.innerHTML = `<div class="hd"><canvas class="portrait" width="72" height="72" aria-hidden="true"></canvas><div><h2>${esc(C.name)}</h2><div class="sub">${esc(C.role)} · ${esc(C.location)}</div></div></div>
    ${C.about.map(p => `<p>${esc(p)}</p>`).join('')}
    <dl class="kv">${C.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
    <pre class="term">${esc(C.whoami)}</pre>`;
  paint(c.querySelector('canvas'), ART.portrait);
} });

V('resume', { title: 'Résumé', w: 470, h: 350, render(c) {
  c.classList.add('doc');
  c.innerHTML = `<div class="dim">Print… is dimmed in the File menu. It's 1984, so ask for a PDF instead.</div>
    <h2>${esc(C.name)}</h2><div class="sub">${esc(C.role)} · ${esc(C.location)} · ${esc(C.contact.email)}</div>
    <h3>Experience</h3>
    ${C.work.map(j => `<div class="row2"><b>${esc(j.title)}, ${esc(j.company)}</b><span>${esc(j.dates)}</span></div>${bullets(j.points)}`).join('')}
    <h3>Selected projects</h3>
    ${bullets(C.projects.map(p => `${p.name}: ${p.kind.toLowerCase()} (${p.year})`))}
    <h3>Education</h3>
    <div class="row2"><b>${esc(C.education.degree)}, ${esc(C.education.school)}</b><span>${esc(C.education.dates)}</span></div>
    <h3>Skills</h3>
    <p>${Object.values(C.skills).flatMap(s => s.items.map(i => i[0])).map(esc).join(' · ')}</p>`;
} });

C.projects.forEach(p => V('project-' + p.id, { title: p.name, w: 460, h: 340, render(c) {
  c.innerHTML = `<canvas class="art" width="420" height="120" aria-hidden="true"></canvas>
    <h2>${esc(p.name)}</h2><div class="sub">${esc(p.kind)}</div>
    <div class="meta"><span>${p.year}</span><span>${esc(p.role)}</span><span>${esc(p.status)}</span></div>
    <p>${esc(p.summary)}</p>
    <div class="stats">${p.stats.map(([n, l]) => `<div class="stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>
    <h3>Highlights</h3>${bullets(p.highlights)}
    <h3>Built with</h3>${tags(p.stack)}
    <div class="actions">${ext(p.link.href, p.link.label)}</div>`;
  paint(c.querySelector('canvas'), ART[p.art] || ART.pages);
} }));

V('projects', { title: 'Projects', w: 430, h: 230, render(c) {
  const used = C.projects.length * 38 + 212;
  c.innerHTML = `<div class="finderhead"><span>${C.projects.length} items</span><span>${used}K in disk</span><span>${400 - used}K available</span></div>
    <table class="list"><thead><tr><th>Name</th><th>Kind</th><th class="num">Year</th></tr></thead>
    <tbody>${C.projects.map(p => `<tr class="row" tabindex="0" data-id="${p.id}"><td><b>${esc(p.name)}</b></td><td>${esc(p.kind)}</td><td class="num">${p.year}</td></tr>`).join('')}</tbody></table>
    <p class="note">Click once to select, again to open. Or use the Projects menu.</p>`;
  c.querySelectorAll('.row').forEach(r => {
    const go = () => WM.open('project-' + r.dataset.id, { from: r.getBoundingClientRect() });
    r.addEventListener('click', () => { if (r.classList.contains('sel')) return go(); c.querySelectorAll('.row').forEach(x => x.classList.toggle('sel', x === r)); });
    r.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  });
} });

C.work.forEach((j, i) => V('work-' + i, { title: j.company, w: 430, h: 290, render(c) {
  c.innerHTML = `<h2>${esc(j.title)}</h2><div class="sub">${esc(j.company)} · ${esc(j.place)}</div>
    <div class="meta"><span>${esc(j.dates)}</span><span>${esc(j.team)} team</span></div>
    <p>${esc(j.summary)}</p><h3>What I did</h3>${bullets(j.points)}<h3>Stack</h3>${tags(j.stack)}`;
} }));

V('timeline', { title: 'Career Timeline', w: 410, h: 290, render(c) {
  c.innerHTML = `<ol class="tl">${C.work.map((j, i) => `<li><span class="yr">${esc(j.dates)}</span><div><b>${esc(j.title)}</b><br>${esc(j.company)}, ${esc(j.place)}<br><button type="button" class="linkbtn" data-i="${i}">Details…</button></div></li>`).join('')}
    <li><span class="yr">${esc(C.education.dates)}</span><div><b>${esc(C.education.degree)}</b><br>${esc(C.education.school)}<br><button type="button" class="linkbtn" data-edu="1">Details…</button></div></li></ol>`;
  c.addEventListener('click', e => {
    const b = e.target.closest('.linkbtn'); if (!b) return;
    WM.open(b.dataset.edu ? 'education' : 'work-' + b.dataset.i, { from: b.getBoundingClientRect() });
  });
} });

V('education', { title: 'Education', w: 380, h: 210, render(c) {
  const e = C.education;
  c.innerHTML = `<h2>${esc(e.degree)}</h2><div class="sub">${esc(e.school)}</div><div class="meta"><span>${esc(e.dates)}</span></div>${bullets(e.notes)}`;
} });

Object.entries(C.skills).forEach(([cat, s]) => V('skills-' + slug(cat), { title: cat, w: 400, h: 270, render(c) {
  c.innerHTML = `<p>${esc(s.blurb)}</p>
    <div class="bars">${s.items.map(([n, v, note]) => `<div class="b"><span>${esc(n)}</span><div class="bar" role="img" aria-label="${esc(n)}: ${v} out of 100"><i style="--v:${v}%"></i></div><span class="yrs">${esc(note || '')}</span></div>`).join('')}</div>
    <p class="note">Bars show comfort, not years.</p>`;
} }));

V('learning', { title: 'Currently Learning', w: 340, h: 190, render(c) {
  c.innerHTML = `<p>What's on the desk right now:</p>${bullets(C.learning)}`;
} });

async function copyEmail(noteEl) {
  const addr = C.contact.email;
  try { await navigator.clipboard.writeText(addr); return true; }
  catch (e) {
    const t = noteEl?.closest('.content')?.querySelector('.email');
    if (t) { const r = document.createRange(); r.selectNodeContents(t); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    return false;
  }
}
V('contact', { title: 'Contact Card', w: 380, h: 270, render(c) {
  const k = C.contact;
  c.innerHTML = `<h2>${esc(C.name)}</h2><div class="sub">${esc(C.role)}</div>
    <dl class="kv"><dt>Email</dt><dd><span class="email">${esc(k.email)}</span></dd>
    <dt>GitHub</dt><dd>${ext(k.github.href, k.github.label, 'lnk')}</dd>
    <dt>LinkedIn</dt><dd>${ext(k.linkedin.href, k.linkedin.label, 'lnk')}</dd>
    <dt>Based in</dt><dd>${esc(C.location)}</dd><dt>Hours</dt><dd>${esc(C.hours)}</dd></dl>
    <div class="actions"><button type="button" class="mbtn def" id="copy-email">Copy Email</button></div>
    <p class="note" aria-live="polite"></p>`;
  const note = c.querySelector('.note');
  c.querySelector('#copy-email').addEventListener('click', async () => {
    note.textContent = (await copyEmail(note)) ? `Copied ${k.email} to the clipboard.` : 'Address selected. Press ⌘C to copy it.';
  });
} });

V('github', { title: 'GitHub Activity', w: 440, h: 310, render(c) {
  c.innerHTML = `<div class="sub">${esc(C.contact.github.label)}</div><canvas class="heat" aria-hidden="true"></canvas>
    <div class="note contrib"></div>
    <h3>Pinned</h3>
    <table class="list"><thead><tr><th>Repository</th><th>About</th><th class="num">Stars</th></tr></thead>
    <tbody>${C.repos.map(([n, d, s]) => `<tr><td><b>${esc(n)}</b></td><td>${esc(d)}</td><td class="num">${s.toLocaleString('en-US')}</td></tr>`).join('')}</tbody></table>
    <div class="actions">${ext(C.contact.github.href, 'Open GitHub')}</div>`;
  const total = drawHeat(c.querySelector('canvas'));
  c.querySelector('.contrib').textContent = `${total.toLocaleString('en-US')} contributions in the last year`;
} });

V('about-portfolio', { title: 'About This Portfolio', w: 390, h: 250, fixed: true, render(c) {
  c.innerHTML = `<div class="about-box"><img src="${SPR.happy}" alt=""><div>
    <h2>${esc(C.first)}'s Macintosh</h2><div class="sub">Portfolio version 1.0 · System 1.1</div>
    <div class="mem" style="margin-top:10px"><span>Portfolio</span><div class="bar"><i style="--v:73%"></i></div><span>94K</span></div>
    <div class="mem"><span>System</span><div class="bar"><i style="--v:27%"></i></div><span>34K</span></div>
    <p class="note">Everything lives in the menu bar. Shortcuts work with or without ⌘. Press Esc to step back from the desk.</p></div></div>`;
} });

V('notepad', { title: 'Note Pad', w: 300, h: 220, render(c) {
  c.classList.add('flush');
  c.innerHTML = '<textarea class="np" id="notepad" aria-label="Note Pad" spellcheck="false"></textarea>';
  const t = c.firstChild;
  t.value = store.get('notepad', 'Notes you type here stay in this browser.\n\nTry Projects ▸ Slate next.');
  t.addEventListener('input', () => store.set('notepad', t.value));
} });

V('puzzle', { title: 'Puzzle', w: 200, h: 234, fixed: true, render(c) {
  const tiles = [...Array(15)].map((_, i) => i + 1).concat(0);
  const nb = i => [i - 4, i + 4, i % 4 ? i - 1 : -1, i % 4 < 3 ? i + 1 : -1].filter(j => j >= 0 && j < 16);
  let b = 15, last = -1;
  for (let k = 0; k < 200; k++) { const o = nb(b).filter(j => j !== last), j = o[Math.random() * o.length | 0]; [tiles[b], tiles[j]] = [tiles[j], tiles[b]]; last = b; b = j; }
  c.innerHTML = '<div class="puz"></div><p class="pz-msg" aria-live="polite"></p>';
  const grid = c.firstChild, msg = c.lastChild;
  const draw = () => {
    grid.innerHTML = tiles.map((t, i) => t ? `<button type="button" data-i="${i}">${t}</button>` : '<span class="blank"></span>').join('');
    msg.textContent = tiles.every((t, i) => t === (i + 1) % 16) ? 'Solved. Nicely done.' : 'Slide the tiles into order.';
  };
  grid.addEventListener('click', e => {
    const bt = e.target.closest('button'); if (!bt) return;
    const i = +bt.dataset.i, z = tiles.indexOf(0);
    if (nb(z).includes(i)) { [tiles[z], tiles[i]] = [tiles[i], tiles[z]]; audio.tick(); draw(); grid.querySelector(`[data-i="${z}"]`)?.focus({ preventScroll: true }); }
  });
  draw();
} });

function applyPrefs() {
  $('#desktop').style.setProperty('--desk-pat', `url("${PAT[prefs.pattern] || PAT.gray}")`);
  document.body.classList.toggle('noscan', !prefs.scan);
  syncSoundBtn();
}
V('control', { title: 'Control Panel', w: 330, h: 300, fixed: true, render(c) {
  c.innerHTML = `<h3 style="margin-top:0">Desktop pattern</h3><div class="cp-row">${Object.keys(PAT).map(k => `<button type="button" class="swatch${prefs.pattern === k ? ' on' : ''}" data-p="${k}" aria-label="${k} pattern" aria-pressed="${prefs.pattern === k}" style="background-image:url('${PAT[k]}')"></button>`).join('')}</div>
    <h3>Sound effects</h3><div class="cp-row"><label class="opt"><input type="radio" name="snd" id="snd-on" value="1"> On</label><label class="opt"><input type="radio" name="snd" id="snd-off" value="0"> Off</label></div>
    <h3>Music</h3><div class="cp-row"><label class="opt"><input type="radio" name="mus" id="mus-on" value="1"> Jazz</label><label class="opt"><input type="radio" name="mus" id="mus-off" value="0"> Off</label></div>
    <h3>Screen</h3><div class="cp-row"><label class="opt"><input type="checkbox" id="cp-scan"> CRT scanlines</label></div>`;
  c.querySelector(prefs.sound ? '#snd-on' : '#snd-off').checked = true;
  c.querySelector('#cp-scan').checked = prefs.scan;
  c.querySelector(prefs.music ? '#mus-on' : '#mus-off').checked = true;
  c.addEventListener('click', e => {
    const s = e.target.closest('.swatch'); if (!s) return;
    prefs.pattern = s.dataset.p; savePrefs(); applyPrefs();
    c.querySelectorAll('.swatch').forEach(x => { x.classList.toggle('on', x === s); x.setAttribute('aria-pressed', String(x === s)); });
  });
  c.addEventListener('change', e => {
    if (e.target.name === 'snd') { prefs.sound = e.target.value === '1'; if (prefs.sound) audio.tick(); }
    if (e.target.id === 'cp-scan') prefs.scan = e.target.checked;
    if (e.target.name === 'mus') { setMusic(e.target.value === '1'); return; }
    savePrefs(); applyPrefs();
  });
} });

/* ───────── The menu bar: the only way around ───────── */
const go = id => o => WM.open(id, o);
WM.setMenus([
  { apple: true, title: 'Apple', items: [
    { label: 'About This Portfolio…', act: go('about-portfolio') }, '-',
    { label: 'Note Pad', act: go('notepad') }, { label: 'Puzzle', act: go('puzzle') }, { label: 'Control Panel', act: go('control') }] },
  { title: 'File', items: [
    { label: 'About Me', key: 'I', act: go('about-me') }, { label: 'Résumé', act: go('resume') }, '-',
    { label: 'Close Window', act: () => WM.closeActive(), enabled: WM.hasActive },
    { label: 'Close All', act: () => WM.closeAll(), enabled: () => WM.count() > 0 }, '-',
    { label: 'Print…', disabled: true }] },
  { title: 'Projects', items: [
    ...C.projects.map((p, i) => ({ label: p.name, key: i < 9 ? String(i + 1) : undefined, act: go('project-' + p.id) })), '-',
    { label: 'All Projects…', key: 'P', act: go('projects') }] },
  { title: 'Work', items: [
    ...C.work.map((j, i) => ({ label: j.company, act: go('work-' + i) })), '-',
    { label: 'Timeline…', key: 'T', act: go('timeline') }, { label: 'Education…', act: go('education') }] },
  { title: 'Skills', items: [
    ...Object.keys(C.skills).map(k => ({ label: k + '…', act: go('skills-' + slug(k)) })), '-',
    { label: 'Currently Learning…', act: go('learning') }] },
  { title: 'Contact', items: [
    { label: 'Contact Card…', key: 'K', act: go('contact') },
    { label: 'Copy Email Address', act: async () => {
      const ok = await copyEmail();
      WM.alert({ icon: 'note', html: ok ? `Copied <b>${esc(C.contact.email)}</b> to the clipboard.` : `Couldn't reach the clipboard. The address is <b>${esc(C.contact.email)}</b>.` });
    } }, '-',
    { label: 'GitHub Activity…', key: 'G', act: go('github') }, { label: 'Availability…', act: () => WM.alert({ icon: 'note', html: `<b>Availability</b><br>${esc(C.contact.availability)}` }) }] },
  { title: 'Special', items: [
    { label: 'Clean Up Windows', act: () => WM.cleanUp(), enabled: () => WM.count() > 0 }, '-',
    { label: 'Step Back', key: '.', act: () => setZoom(false), enabled: () => !view.mobile }, '-',
    { label: 'Restart', act: () => shutDown(true) }, { label: 'Shut Down', act: () => shutDown(false) }] }
]);

/* ───────── Boot the page ───────── */
$('#icon-disk img').src = SPR.disk;
$('#icon-trash img').src = SPR.trash;
WM.iconBehavior('icon-disk', () => WM.alert({ icon: 'note', html: `The <b>Portfolio</b> disk opens from the menu bar. Try <b>Projects</b>, or <b>File ▸ About Me</b>.`, buttons: [{ label: 'OK' }, { label: 'Open Projects', def: true, act: () => WM.openMenuByTitle('Projects') }] }));
WM.iconBehavior('icon-trash', () => WM.alert({ icon: 'caution', html: 'The Trash is empty. Everything here shipped.' }));
$('#plac-name').textContent = C.name;
$('#plac-role').textContent = C.role;
screenEl.style.cursor = `url("${SPR.arrow}") 1 1, default`;
applyPrefs();
updatePlacard();
layout(false);
