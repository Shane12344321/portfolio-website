/* ───────── Window manager: menus, windows, alerts ───────── */
const WM = (() => {
  const menubar = $('#menubar'), menusRoot = $('#menus'), winRoot = $('#windows'), desktop = $('#desktop'), modalRoot = $('#modal-root'), zoomLayer = $('#zoomlayer');
  const VIEWS = new Map();
  let menus = [], openIdx = -1, menuEl = null, hl = -1, tracking = false, pressedAt = 0, busy = false;
  const wins = new Map(); let active = null, zTop = 10, cascade = 0, modal = null;

  const enabled = it => it && it !== '-' && !it.disabled && !(it.enabled && !it.enabled());
  const live = () => power === 'on' && (view.zoomed || view.mobile);

  /* Menus */
  function setMenus(defs) {
    menus = defs;
    menubar.innerHTML = defs.map((m, i) => `<button class="mtitle" type="button" data-i="${i}" aria-haspopup="menu" aria-expanded="false">${m.apple ? `<img src="${SPR.apple}" alt="Apple menu">` : esc(m.title)}</button>`).join('');
  }
  function openMenu(i, withHighlight) {
    closeMenus(true);
    openIdx = i; const m = menus[i], b = menubar.children[i];
    b.classList.add('open'); b.setAttribute('aria-expanded', 'true');
    const el = document.createElement('div');
    el.className = 'menu'; el.setAttribute('role', 'menu'); el.setAttribute('aria-label', m.title);
    el.innerHTML = m.items.map((it, j) => it === '-' ? '<div class="sep" role="separator"></div>' :
      `<div class="mi${enabled(it) ? '' : ' dis'}" data-i="${j}" role="menuitem"${enabled(it) ? '' : ' aria-disabled="true"'}><span>${esc(it.label)}</span>${it.key ? `<span>⌘${esc(it.key)}</span>` : ''}</div>`).join('');
    menusRoot.append(el);
    const sw = inner.clientWidth, w = el.offsetWidth;
    el.style.left = Math.max(2, Math.min(b.offsetLeft, sw - 3 - w)) + 'px';
    menuEl = el; hl = -1;
    if (withHighlight) move(1);
  }
  function closeMenus() {
    menuEl?.remove(); menuEl = null;
    if (openIdx >= 0) { const b = menubar.children[openIdx]; b?.classList.remove('open'); b?.setAttribute('aria-expanded', 'false'); }
    openIdx = -1; hl = -1; tracking = false;
  }
  function setHl(j) {
    hl = j; menuEl?.querySelectorAll('.mi').forEach(d => d.classList.toggle('hl', +d.dataset.i === j));
  }
  function move(dir) {
    const items = menus[openIdx].items; let j = hl;
    for (let n = 0; n < items.length; n++) { j = (j + dir + items.length) % items.length; if (enabled(items[j])) return setHl(j); }
  }
  async function choose(j) {
    const it = menus[openIdx]?.items[j];
    if (busy || !enabled(it)) return;
    busy = true;
    const d = menuEl.querySelector(`.mi[data-i="${j}"]`), from = menubar.children[openIdx].getBoundingClientRect();
    for (let k = 0; k < 3; k++) { d.classList.remove('hl'); await wait(45); d.classList.add('hl'); await wait(45); }
    closeMenus(); busy = false; audio.tick();
    it.act?.({ from });
  }
  function openMenuByTitle(t) { const i = menus.findIndex(m => m.title === t); if (i >= 0) { openMenu(i); menubar.children[i].focus({ preventScroll: true }); } }

  menubar.addEventListener('pointerdown', e => {
    const b = e.target.closest('.mtitle'); if (!b || !live() || modal) return;
    e.preventDefault(); b.releasePointerCapture?.(e.pointerId);
    const i = +b.dataset.i;
    if (openIdx === i) { closeMenus(); return; }
    openMenu(i); tracking = true; pressedAt = performance.now();
  });
  menubar.addEventListener('click', e => {
    const b = e.target.closest('.mtitle'); if (!b || e.detail !== 0 || !live() || modal) return;
    const i = +b.dataset.i; openIdx === i ? closeMenus() : openMenu(i, true);
  });
  menubar.addEventListener('pointerover', e => {
    const b = e.target.closest('.mtitle'); if (b && openIdx >= 0 && +b.dataset.i !== openIdx) openMenu(+b.dataset.i);
  });
  menusRoot.addEventListener('pointerover', e => { const d = e.target.closest('.mi'); if (d && !d.classList.contains('dis')) setHl(+d.dataset.i); });
  menusRoot.addEventListener('pointerout', e => { if (!e.relatedTarget || !menuEl?.contains(e.relatedTarget)) setHl(-1); });
  menusRoot.addEventListener('click', e => { const d = e.target.closest('.mi'); if (d) choose(+d.dataset.i); });
  document.addEventListener('pointerup', e => {
    if (!tracking) return; tracking = false;
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const d = t?.closest?.('.mi');
    if (d && menuEl?.contains(d)) { choose(+d.dataset.i); return; }
    if (t?.closest?.('.mtitle')) return;
    if (performance.now() - pressedAt > 350) closeMenus();
  });
  document.addEventListener('pointerdown', e => {
    if (openIdx >= 0 && !e.target.closest('.mtitle, .menu')) closeMenus();
  }, true);

  /* Keyboard: menus, shortcuts, Esc */
  function shortcut(key) {
    key = key.toUpperCase();
    for (let i = 0; i < menus.length; i++) {
      const it = menus[i].items.find(it => it !== '-' && it.key && it.key.toUpperCase() === key);
      if (!it) continue;
      if (!enabled(it)) return true;
      const b = menubar.children[i]; b.classList.add('open'); setTimeout(() => b.classList.remove('open'), 130);
      audio.tick(); it.act?.({ from: b.getBoundingClientRect() });
      return true;
    }
    return false;
  }
  document.addEventListener('keydown', e => {
    const typing = e.target.matches?.('input[type=text], textarea');
    if (modal) {
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
        const b = e.key === 'Enter' ? modal.el.querySelector('.mbtn.def') || modal.el.querySelector('.mbtn') : [...modal.el.querySelectorAll('.mbtn:not(.def)')].pop() || modal.el.querySelector('.mbtn');
        b?.click();
      }
      return;
    }
    if (openIdx >= 0) {
      const k = e.key;
      if (k === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (k === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (k === 'ArrowRight' || k === 'ArrowLeft') { e.preventDefault(); const i = (openIdx + (k === 'ArrowRight' ? 1 : -1) + menus.length) % menus.length; openMenu(i, true); menubar.children[i].focus({ preventScroll: true }); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); if (hl >= 0) choose(hl); }
      else if (k === 'Escape') { e.preventDefault(); const b = menubar.children[openIdx]; closeMenus(); b?.focus({ preventScroll: true }); }
      return;
    }
    if (!live()) return;
    if (e.key === 'Escape' && !view.mobile) { e.preventDefault(); setZoom(false); return; }
    if (e.altKey || e.key.length !== 1) return;
    if (e.metaKey || e.ctrlKey) { if (shortcut(e.key)) e.preventDefault(); return; }
    if (!typing && !e.target.closest?.('.puz') && shortcut(e.key)) e.preventDefault();
  });

  /* Zoom rectangles: the classic open/close animation */
  function zoomRects(a, b) {
    if (reduceMotion) return Promise.resolve();
    return new Promise(res => {
      const N = 10, trail = [];
      let i = 0;
      const step = () => {
        if (i >= N) { trail.forEach(d => d.remove()); return res(); }
        const t = (i + 1) / N, e = t * t * (3 - 2 * t);
        const d = document.createElement('div'); d.className = 'zr';
        Object.assign(d.style, { left: a.x + (b.x - a.x) * e + 'px', top: a.y + (b.y - a.y) * e + 'px', width: Math.max(1, a.w + (b.w - a.w) * e) + 'px', height: Math.max(1, a.h + (b.h - a.h) * e) + 'px' });
        zoomLayer.append(d); trail.push(d); if (trail.length > 4) trail.shift().remove();
        i++; setTimeout(step, 16);
      };
      step();
    });
  }

  /* Windows */
  const deskTop = () => desktop.offsetTop;
  function fitRect(def) {
    const W = desktop.clientWidth, H = desktop.clientHeight;
    let w = Math.min(def.w || 380, W - 12), h = Math.min(def.h || 260, H - 10), x, y;
    if (view.mobile) { w = W - 8; x = 4; y = 4 + (cascade % 4) * 12; if (!def.fixed) h = Math.max(120, H - y - 8); }
    else {
      const n = cascade % 7; x = 18 + n * 26; y = 10 + n * 18;
      if (x + w > W - 6) x = Math.max(4, W - 6 - w);
      if (y + h > H - 4) y = Math.max(4, H - 4 - h);
    }
    cascade++;
    return { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) };
  }
  function open(id, opts = {}) {
    if (power !== 'on') return;
    if (wins.has(id)) { focus(wins.get(id)); return wins.get(id); }
    const def = VIEWS.get(id); if (!def) return;
    const r = fitRect(def);
    const el = document.createElement('section');
    el.className = 'win'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', def.title);
    el.innerHTML = `<header class="tbar"><button class="close" type="button" aria-label="Close ${esc(def.title)}"></button><span class="ttl">${esc(def.title)}</span></header><div class="content"></div>${def.fixed ? '' : '<div class="grow" aria-hidden="true"></div>'}`;
    Object.assign(el.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px' });
    el.hidden = true; winRoot.append(el);
    const win = { id, el, def, content: el.querySelector('.content') };
    wins.set(id, win); wire(win);
    def.render(win.content, win);
    const from = opts.from ? toInner(opts.from) : { x: r.x + r.w / 2, y: 0, w: 1, h: 1 };
    zoomRects(from, { x: r.x, y: r.y + deskTop(), w: r.w, h: r.h }).then(() => {
      if (!wins.has(id)) return;
      el.hidden = false; focus(win);
      requestAnimationFrame(() => el.classList.add('shown'));
      def.opened?.(win);
    });
    return win;
  }
  function focus(win) {
    if (!win) return;
    win.el.style.zIndex = ++zTop;
    wins.forEach(w => w.el.classList.toggle('active', w === win));
    active = win;
  }
  async function close(win, fast) {
    if (!win || !wins.has(win.id)) return;
    wins.delete(win.id); win.def.closed?.(win);
    const el = win.el, r = { x: el.offsetLeft, y: el.offsetTop + deskTop(), w: el.offsetWidth, h: el.offsetHeight };
    el.remove();
    const next = [...wins.values()].sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0];
    if (next) focus(next); else active = null;
    if (!fast) await zoomRects(r, { x: r.x + r.w / 2, y: r.y + r.h / 2, w: 1, h: 1 });
  }
  async function closeAll(fast) { for (const w of [...wins.values()]) await close(w, fast); cascade = 0; }
  function cleanUp() {
    cascade = 0;
    [...wins.values()].sort((a, b) => a.el.style.zIndex - b.el.style.zIndex).forEach(w => {
      const r = fitRect(w.def); Object.assign(w.el.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px' });
    });
  }
  function fitAll() {
    const W = desktop.clientWidth, H = desktop.clientHeight;
    wins.forEach(w => {
      const s = w.el.style;
      if (view.mobile) { s.left = '4px'; s.width = (W - 8) + 'px'; }
      if (w.el.offsetWidth > W - 8) s.width = (W - 8) + 'px';
      if (w.el.offsetHeight > H - 8) s.height = (H - 8) + 'px';
      s.left = Math.max(4, Math.min(w.el.offsetLeft, W - w.el.offsetWidth - 4)) + 'px';
      s.top = Math.max(0, Math.min(w.el.offsetTop, H - w.el.offsetHeight - 4)) + 'px';
    });
  }

  /* Dragging and resizing draw a dotted outline, then commit, as in 1984 */
  function track(e, win, mode) {
    e.preventDefault();
    const el = win.el, k = scrScale(), sx = e.clientX, sy = e.clientY, t = e.currentTarget;
    const x0 = el.offsetLeft, y0 = el.offsetTop, w0 = el.offsetWidth, h0 = el.offsetHeight;
    const W = desktop.clientWidth, H = desktop.clientHeight;
    let nx = x0, ny = y0, nw = w0, nh = h0, moved = false, ol = null;
    t.setPointerCapture?.(e.pointerId);
    const mv = ev => {
      const dx = (ev.clientX - sx) / k, dy = (ev.clientY - sy) / k;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 3) return;
      if (!moved) { moved = true; ol = document.createElement('div'); ol.className = 'outline'; desktop.append(ol); }
      if (mode === 'move') { nx = Math.round(Math.min(Math.max(x0 + dx, 48 - w0), W - 48)); ny = Math.round(Math.min(Math.max(y0 + dy, 0), H - 20)); }
      else { nw = Math.round(Math.min(Math.max(w0 + dx, 190), W - x0)); nh = Math.round(Math.min(Math.max(h0 + dy, 110), H - y0)); }
      Object.assign(ol.style, { left: nx + 'px', top: ny + 'px', width: nw + 'px', height: nh + 'px' });
    };
    const up = () => {
      t.removeEventListener('pointermove', mv); t.removeEventListener('pointerup', up); t.removeEventListener('pointercancel', up);
      if (!moved) return; ol.remove();
      Object.assign(el.style, { left: nx + 'px', top: ny + 'px', width: nw + 'px', height: nh + 'px' });
    };
    t.addEventListener('pointermove', mv); t.addEventListener('pointerup', up); t.addEventListener('pointercancel', up);
  }
  function wire(win) {
    const el = win.el, cb = el.querySelector('.close');
    el.addEventListener('pointerdown', () => { if (active !== win) focus(win); }, true);
    el.querySelector('.tbar').addEventListener('pointerdown', e => { if (!e.target.closest('.close')) track(e, win, 'move'); });
    el.querySelector('.grow')?.addEventListener('pointerdown', e => track(e, win, 'size'));
    cb.addEventListener('pointerdown', e => { e.preventDefault(); cb.classList.add('pressed'); cb.setPointerCapture?.(e.pointerId); });
    cb.addEventListener('pointerup', e => {
      cb.classList.remove('pressed');
      const r = cb.getBoundingClientRect();
      if (e.clientX >= r.left - 2 && e.clientX <= r.right + 2 && e.clientY >= r.top - 2 && e.clientY <= r.bottom + 2) close(win);
    });
    cb.addEventListener('pointercancel', () => cb.classList.remove('pressed'));
    cb.addEventListener('click', e => { if (e.detail === 0) close(win); });
  }

  /* Alerts */
  function dismissModal() { modal?.el.remove(); modal = null; }
  function alert({ icon = 'note', html, buttons = [{ label: 'OK', def: true }] }) {
    closeMenus(); dismissModal();
    if (icon === 'caution') audio.beep();
    const m = document.createElement('div'); m.className = 'modal';
    m.innerHTML = `<div class="dialog" role="alertdialog" aria-modal="true"><img class="ico" src="${SPR[icon]}" alt=""><div class="msg">${html}</div><div class="btns"></div></div>`;
    const bx = m.querySelector('.btns');
    buttons.forEach(b => {
      const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'mbtn' + (b.def ? ' def' : ''); btn.textContent = b.label;
      btn.addEventListener('click', () => { dismissModal(); b.act?.(); });
      bx.append(btn);
    });
    modalRoot.append(m); modal = { el: m };
    (m.querySelector('.mbtn.def') || m.querySelector('.mbtn')).focus({ preventScroll: true });
  }

  /* Desktop icons are decoration that point back to the menus */
  function iconBehavior(id, onOpen) {
    const b = $('#' + id);
    b.addEventListener('click', () => {
      if (!live()) return;
      if (b.classList.contains('sel')) { onOpen(); return; }
      $$('.dicon').forEach(x => x.classList.toggle('sel', x === b));
    });
  }
  desktop.addEventListener('pointerdown', e => { if (e.target === desktop) $$('.dicon').forEach(x => x.classList.remove('sel')); });

  return {
    VIEWS, setMenus, openMenuByTitle, closeMenus, open, close, closeAll, cleanUp, fitAll, alert, dismissModal, iconBehavior,
    closeActive: () => close(active), hasActive: () => !!active, count: () => wins.size
  };
})();
