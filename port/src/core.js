/* ───────── Helpers ───────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k, d) { try { const v = localStorage.getItem('jv-mac:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('jv-mac:' + k, JSON.stringify(v)); } catch (e) {} }
};
const prefs = Object.assign({ pattern: 'gray', sound: true, scan: true, gfx: 'high', music: true }, store.get('prefs', {}));
/* Filled in by the high-graphics module once three.js loads */
const HQ = { ready: false, on: false, failed: false, setActive() {}, layout() {}, power() {}, key() {}, mouse() {} };
const savePrefs = () => store.set('prefs', prefs);

/* ───────── 1-bit sprites ('#' black, '.' white, ' ' clear) ───────── */
function bmp(rows, scale = 1) {
  const h = rows.length, w = Math.max(...rows.map(r => r.length));
  let out = '';
  rows.forEach((row, y) => {
    for (let x = 0; x < w;) {
      const c = row[x] || ' ';
      if (c === ' ') { x++; continue; }
      let n = 1; while (row[x + n] === c) n++;
      out += `<rect x="${x}" y="${y}" width="${n}" height="1"${c === '.' ? ' fill="#fff"' : ''}/>`;
      x += n;
    }
  });
  return 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * scale}" height="${h * scale}" shape-rendering="crispEdges">${out}</svg>`);
}
const SPR = {
  apple: bmp(['       ##    ', '      ##     ', '      #      ', '  ####  #### ', ' ########### ', '############ ', '###########  ', '###########  ', '###########  ', '############ ', ' ############', ' ########### ', '  #########  ', '   ###  ###  ']),
  happy: bmp([' ################ ', '#................#', '#..############..#', '#..#..........#..#', '#..#..#....#..#..#', '#..#..#....#..#..#', '#..#.....#....#..#', '#..#.....#....#..#', '#..#....##....#..#', '#..#..........#..#', '#..#..#....#..#..#', '#..#...####...#..#', '#..#..........#..#', '#..############..#', '#................#', '#................#', '#.........####...#', '#................#', ' ################ ', ' #..............# ', ' ################ ']),
  disk: bmp(['################', '#..#........#..#', '#..#.....##.#..#', '#..#.....##.#..#', '#..#.....##.#..#', '#..##########..#', '#..............#', '#..............#', '#.############.#', '#.#..........#.#', '#.#.########.#.#', '#.#..........#.#', '#.#.######...#.#', '#.#..........#.#', '#.#..........#.#', '################']),
  trash: bmp(['     ######     ', '     #....#     ', '################', '#..............#', '################', ' #............# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #..#..#..#...# ', ' #............# ', ' ############## ']),
  caution: bmp(['       ##       ', '      #..#      ', '      #..#      ', '     #....#     ', '     #.##.#     ', '    #..##..#    ', '    #..##..#    ', '   #...##...#   ', '   #...##...#   ', '  #....##....#  ', '  #..........#  ', ' #.....##.....# ', ' #.....##.....# ', '#..............#', '################']),
  note: bmp(['  ############  ', ' #............# ', '#......##......#', '#......##......#', '#..............#', '#.....###......#', '#......##......#', '#......##......#', '#......##......#', '#.....####.....#', ' #............# ', '  ####.#######  ', '     #.#        ', '    #.#         ', '    ##          ']),
  arrow: bmp(['#          ', '##         ', '#.#        ', '#..#       ', '#...#      ', '#....#     ', '#.....#    ', '#......#   ', '#.......#  ', '#........# ', '#.....#####', '#..#..#    ', '#.# #..#   ', '##  #..#   ', '#    #..#  ', '     #..#  ', '      ##   '], 2)
};
const PATTERNS = {
  gray: ['#.#.#.#.', '.#.#.#.#'],
  light: ['#.......', '........', '....#...', '........'],
  diagonal: ['#.......', '.#......', '..#.....', '...#....', '....#...', '.....#..', '......#.', '.......#'],
  bricks: ['########', '#.......', '#.......', '#.......', '########', '....#...', '....#...', '....#...'],
  white: ['........']
};
const PAT = {};
for (const [k, rows] of Object.entries(PATTERNS)) {
  const full = []; for (let y = 0; y < 8; y++) full.push(rows[y % rows.length].padEnd(8, '.'));
  PAT[k] = bmp(full);
}

/* ───────── Sound: synthesized in the browser, no files ───────── */
const audio = {
  ctx: null, noise: null,
  init() {
    if (!this.ctx) {
      try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
      const len = this.ctx.sampleRate; this.noise = this.ctx.createBuffer(1, len, len);
      const d = this.noise.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  ok() { return prefs.sound && this.ctx; },
  chime() {
    music.duck(3.5);
    if (!this.ok()) return;
    const c = this.ctx, t = c.currentTime + 0.02;
    const out = c.createGain(), lp = c.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.setValueAtTime(3200, t); lp.frequency.exponentialRampToValueAtTime(900, t + 3);
    out.gain.setValueAtTime(0, t); out.gain.linearRampToValueAtTime(0.2, t + 0.015); out.gain.exponentialRampToValueAtTime(0.0008, t + 3.4);
    out.connect(lp).connect(c.destination);
    [174.61, 261.63, 349.23, 440, 523.25, 698.46].forEach(f => {
      [['sawtooth', 0.035, 1.003], ['triangle', 0.09, 1]].forEach(([type, vol, det]) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = type; o.frequency.value = f * det; g.gain.value = vol;
        o.connect(g).connect(out); o.start(t); o.stop(t + 3.5);
      });
    });
  },
  burst(t, dur, freq, vol) {
    const c = this.ctx, s = c.createBufferSource(), bp = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noise; bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    s.connect(bp).connect(g).connect(c.destination); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  },
  floppy() {
    if (!this.ok()) return;
    const t = this.ctx.currentTime;
    this.burst(t, 1.4, 180, 0.05);
    [0, .09, .17, .24, .42, .5, .57, .9, .98, 1.3].forEach(d => this.burst(t + d, 0.035, 1500 + Math.random() * 700, 0.16));
  },
  beep() {
    if (!this.ok()) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = 'square'; o.frequency.setValueAtTime(880, t); o.frequency.setValueAtTime(660, t + 0.08);
    g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.22);
  },
  tick() { if (this.ok()) this.burst(this.ctx.currentTime, 0.012, 3500, 0.08); }
};

/* ───────── Stage camera: overview ↔ zoomed into the screen ───────── */
const stage = $('#stage'), room = $('#room'), screenEl = $('#screen'), inner = $('#inner');
const view = { s: 1, zoomed: false, mobile: false };
const OVERVIEW = { x: 250, y: -40, w: 1300, h: 1420 };
function stagePos(el) {
  let x = 0, y = 0;
  for (let e = el; e && e !== stage; e = e.offsetParent) {
    x += e.offsetLeft; y += e.offsetTop;
    const p = e.offsetParent; if (p && p !== stage) { x += p.clientLeft; y += p.clientTop; }
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}
function layout(animate) {
  const vw = innerWidth, vh = innerHeight;
  const wasMobile = view.mobile;
  view.mobile = vw < 720;
  document.documentElement.classList.toggle('mobile', view.mobile);
  HQ.setActive(!view.mobile && HQ.ready && prefs.gfx === 'high');
  if (view.mobile) { stage.classList.remove('anim'); stage.style.transform = ''; view.s = 1; }
  else if (HQ.on) HQ.layout(animate);
  else {
    let s, cx, cy;
    if (view.zoomed) {
      const r = stagePos(screenEl);
      s = Math.min(vw / (r.w + 96), vh / (r.h + 96));
      const dpr = devicePixelRatio || 1, snap = Math.floor(s * dpr) / dpr;
      if (snap >= s * 0.9) s = snap;
      cx = r.x + r.w / 2; cy = r.y + r.h / 2;
    } else {
      const o = OVERVIEW; s = Math.min(vw * 0.92 / o.w, vh * 0.95 / o.h);
      cx = o.x + o.w / 2; cy = o.y + o.h / 2;
    }
    view.s = s;
    stage.classList.toggle('anim', !!animate && !reduceMotion);
    stage.style.transform = `translate(${Math.round(vw / 2 - cx * s)}px,${Math.round(vh / 2 - cy * s)}px) scale(${s})`;
  }
  if (wasMobile !== view.mobile) WM.fitAll();
}
function setZoom(z) {
  if (view.zoomed === z) return;
  view.zoomed = z;
  document.body.classList.toggle('zoomed', z);
  if (!z) WM.closeMenus();
  updatePlacard();
  layout(true);
}
function updatePlacard() {
  $('#plac-cta').textContent = power === 'off' ? 'Click the Macintosh to switch it on' : 'Click the Macintosh to sit back down';
  $('#hit').setAttribute('aria-label', power === 'off' ? 'Switch on the Macintosh' : 'Sit back down at the Macintosh');
}
/* Screen-space helpers: the screen is 640×428 logical px, scaled by the camera */
const scrScale = () => (screenEl.getBoundingClientRect().width / screenEl.offsetWidth) || 1;
function toInner(rect) {
  const r = inner.getBoundingClientRect(), k = scrScale();
  return { x: (rect.left - r.left) / k, y: (rect.top - r.top) / k, w: rect.width / k, h: rect.height / k };
}

/* ───────── Power ───────── */
let power = 'off', welcomed = false;
function crt(dir) {
  inner.classList.remove('crt-on', 'crt-off'); void inner.offsetWidth;
  if (!reduceMotion) inner.classList.add('crt-' + dir);
}
async function powerOn() {
  if (power !== 'off') return;
  power = 'booting';
  audio.init(); audio.chime();
  setZoom(true);
  const boot = $('#boot');
  boot.hidden = false; boot.className = 'boot'; boot.innerHTML = '';
  screenEl.classList.add('on'); crt('on'); HQ.power(true);
  await wait(reduceMotion ? 150 : 800);
  boot.className = 'boot gray';
  boot.innerHTML = `<img class="happy" src="${SPR.happy}" alt="Happy Mac">`;
  audio.floppy();
  await wait(1600);
  boot.innerHTML = '<div class="welcome">Welcome to Macintosh.</div>';
  await wait(1300);
  boot.hidden = true; power = 'on'; updatePlacard();
  if (!welcomed) {
    welcomed = true; await wait(350);
    WM.alert({ icon: 'note', html: `<b>Welcome to ${esc(C.first)}'s Macintosh.</b><br>This portfolio is browsed entirely from the menu bar at the top of the screen. Start with <b>Projects</b>.`,
      buttons: [{ label: 'OK' }, { label: 'Show Me', def: true, act: () => WM.openMenuByTitle('Projects') }] });
  }
}
async function shutDown(restart) {
  if (power !== 'on') return;
  power = 'halting';
  WM.closeMenus(); WM.dismissModal(); await WM.closeAll(true);
  const boot = $('#boot');
  boot.hidden = false; boot.className = 'boot gray';
  boot.innerHTML = restart ? '' : '<div class="welcome">You may now switch off<br>your Macintosh safely.</div>';
  await wait(restart ? 500 : 1700);
  crt('off'); await wait(reduceMotion ? 60 : 650);
  screenEl.classList.remove('on'); HQ.power(false); boot.hidden = true; power = 'off'; updatePlacard();
  if (restart) { await wait(700); powerOn(); }
  else { await wait(250); setZoom(false); }
}

/* ───────── Hardware: live keyboard, mouse and cord ───────── */
(function buildKeyboard() {
  const P = { '`': 'Backquote', '-': 'Minus', '=': 'Equal', '[': 'BracketLeft', ']': 'BracketRight', '\\': 'Backslash', ';': 'Semicolon', "'": 'Quote', ',': 'Comma', '.': 'Period', '/': 'Slash' };
  const code = ch => /[0-9]/.test(ch) ? 'Digit' + ch : /[A-Z]/.test(ch) ? 'Key' + ch : P[ch];
  const row = (pre, chars, post) => [...pre, ...[...chars].map(ch => [ch, code(ch), 1]), ...post];
  const rows = [
    row([], '`1234567890-=', [['backspace', 'Backspace', 1.9]]),
    row([['tab', 'Tab', 1.5]], 'QWERTYUIOP[]', [['\\', 'Backslash', 1.4]]),
    row([['caps lock', 'CapsLock', 1.8]], "ASDFGHJKL;'", [['return', 'Enter', 2.1]]),
    row([['shift', 'ShiftLeft', 2.3]], 'ZXCVBNM,./', [['shift', 'ShiftRight', 2.3]]),
    [['option', 'AltLeft', 1.4], ['⌘', 'MetaLeft', 1.2], ['', 'Space', 7.5], ['enter', 'NumpadEnter', 1.4], ['option', 'AltRight', 1.4]]
  ];
  $('#keys').innerHTML = rows.map((r, i) => `<div class="krow${i === 4 ? ' bottom' : ''}">${r.map(([l, c, f]) => `<div class="key" data-code="${c}" style="flex-grow:${f}">${esc(l)}</div>`).join('')}</div>`).join('');
})();
const keyEl = c => document.querySelector(`.key[data-code="${c}"]`);
addEventListener('keydown', e => { keyEl(e.code)?.classList.add('down'); HQ.key(e.code, true); });
addEventListener('keyup', e => { keyEl(e.code)?.classList.remove('down'); HQ.key(e.code, false); });
addEventListener('blur', () => $$('.key.down').forEach(k => k.classList.remove('down')));

const mouseBtn = $('#mouse-btn');
const CORD = 'M1226 830C1300 820 1360 850 1330 900S1420 985 1480 945 1520 1040 1445 1060C1428 1068 1438 1082 1440 1112';
$('#cord-ln').setAttribute('d', CORD); $('#cord-sh').setAttribute('d', CORD);
addEventListener('pointerdown', () => { mouseBtn.classList.add('press'); HQ.mouse(true); });
addEventListener('pointerup', () => { mouseBtn.classList.remove('press'); HQ.mouse(false); });

/* ───────── Entry points ───────── */
stage.addEventListener('click', e => {
  if (view.mobile || view.zoomed) return;
  e.preventDefault();
  if (power === 'off') powerOn(); else setZoom(true);
});
screenEl.addEventListener('click', () => { if (view.mobile && power === 'off') powerOn(); });
$('#btn-back').addEventListener('click', () => setZoom(false));
function syncSoundBtn() {
  const b = $('#btn-sound'); b.textContent = prefs.sound ? 'Effects on' : 'Effects off'; b.setAttribute('aria-pressed', String(prefs.sound));
}
$('#btn-sound').addEventListener('click', () => { prefs.sound = !prefs.sound; savePrefs(); syncSoundBtn(); if (prefs.sound) { audio.init(); audio.tick(); } });
function syncGfxBtn() {
  const b = $('#btn-gfx');
  b.hidden = HQ.failed;
  b.disabled = !HQ.ready;
  b.textContent = !HQ.ready ? 'Graphics: loading…' : prefs.gfx === 'high' ? 'Graphics: High' : 'Graphics: Standard';
  b.setAttribute('aria-pressed', String(prefs.gfx === 'high'));
}
$('#btn-gfx').addEventListener('click', () => { prefs.gfx = prefs.gfx === 'high' ? 'standard' : 'high'; savePrefs(); syncGfxBtn(); layout(false); });
syncGfxBtn();
room.addEventListener('scroll', () => { room.scrollTop = 0; room.scrollLeft = 0; });
addEventListener('resize', () => layout(false));
