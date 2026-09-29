/* ───────── Background jazz: a small generative trio, synthesized live ─────────
   Rhodes comping, walking bass, brushes and ride on a swung 8-bar loop, plus
   vinyl crackle and (when the rainy window is showing) rain. No audio files. */
const music = (() => {
  const BPM = 84, SWING = 0.64, beat = 60 / BPM, VOL = 0.5;
  const CH = {
    Dm9:   { root: 38, v: [53, 57, 60, 64], sc: [2, 4, 5, 7, 9, 11, 0] },
    G13:   { root: 43, v: [53, 59, 64, 69], sc: [7, 9, 11, 0, 2, 4, 5] },
    Cmaj9: { root: 36, v: [52, 55, 59, 62], sc: [0, 2, 4, 7, 9, 11] },
    Fmaj9: { root: 41, v: [52, 57, 60, 64], sc: [5, 7, 9, 0, 2, 4] },
    Em7b5: { root: 40, v: [55, 58, 62, 64], sc: [4, 5, 7, 9, 10, 0, 2] },
    A7b9:  { root: 45, v: [55, 61, 64, 70], sc: [9, 10, 1, 4, 7] },
    Bb13:  { root: 46, v: [56, 62, 67, 72], sc: [10, 0, 2, 4, 5, 7, 8] },
    A7b13: { root: 45, v: [55, 61, 65, 70], sc: [9, 10, 1, 2, 4, 5, 7] }
  };
  const PROG = [['Dm9'], ['G13'], ['Cmaj9'], ['Fmaj9'], ['Em7b5', 'A7b9'], ['Dm9'], ['Bb13'], ['A7b13']];
  const COMP = [[[0, 1.6]], [[1, 0.5], [3, 1.1]], [[0, 0.45], [1.5, 1.4]], [[1.5, 0.5], [3.5, 0.9]], [[0, 2.6]], [[2, 0.6], [3.5, 0.45]], [[0.5, 1.2], [3, 0.5]]];
  const RIDE = [205.3, 304.4, 369.6, 522.7, 540, 800].map(f => f * 1.9);
  let ctx, out, bus, verb, rainG, on = false, timer = 0, next = 0, bar = 0;
  const mel = { left: 0, rest: 1, note: 74 };
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const jit = (a = 0.008) => (Math.random() - 0.5) * a;
  const pc = m => ((m % 12) + 12) % 12;

  function buffer(ch, sec, fill) {
    const len = ctx.sampleRate * sec | 0, b = ctx.createBuffer(ch, len, ctx.sampleRate);
    for (let c = 0; c < ch; c++) fill(b.getChannelData(c), len);
    return b;
  }
  function loop(buf, type, freq, gain) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = buf; s.loop = true; f.type = type; f.frequency.value = freq; g.gain.value = gain;
    s.connect(f).connect(g).connect(out); s.start();
    return g;
  }
  function build() {
    ctx = audio.ctx;
    out = ctx.createGain(); out.gain.value = 0; out.connect(ctx.destination);
    const tape = ctx.createBiquadFilter(); tape.type = 'lowpass'; tape.frequency.value = 5200; tape.Q.value = 0.4;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.3;
    bus = ctx.createGain(); bus.connect(tape).connect(comp).connect(out);
    verb = ctx.createConvolver();
    verb.buffer = buffer(2, 2.4, (d, n) => { for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3.2); });
    const vg = ctx.createGain(); vg.gain.value = 0.3; verb.connect(vg).connect(tape);
    loop(buffer(1, 3, (d, n) => {
      for (let i = 0; i < n; i++) {
        d[i] += (Math.random() * 2 - 1) * 0.01;
        if (Math.random() < 0.0004) { const a = (0.2 + Math.random() * 0.8) * (Math.random() < 0.5 ? -1 : 1); for (let k = 0; k < 30 && i + k < n; k++) d[i + k] += a * Math.exp(-k / 5); }
      }
    }), 'highpass', 900, 0.14);
    rainG = loop(buffer(2, 4, (d, n) => {
      let last = 0;
      for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; last = (last + 0.03 * w) / 1.03; d[i] = last * 3 + w * 0.035; if (Math.random() < 0.002) d[i] += (Math.random() - 0.5) * 0.45; }
    }), 'lowpass', 2400, 0);
  }

  /* Instruments */
  function send(node, amt) { if (amt) { const s = ctx.createGain(); s.gain.value = amt; node.connect(s).connect(verb); } }
  function rhodes(t, midi, vel, dur, pan = 0, wet = 0.3) {
    const f = mtof(midi), car = ctx.createOscillator(), mod = ctx.createOscillator(), tine = ctx.createOscillator();
    const mg = ctx.createGain(), tg = ctx.createGain(), g = ctx.createGain(), p = ctx.createStereoPanner();
    car.frequency.value = f; mod.frequency.value = f; tine.frequency.value = f * 7.02;
    mg.gain.setValueAtTime(f * 1.5 * vel, t); mg.gain.exponentialRampToValueAtTime(f * 0.1, t + 0.9);
    tg.gain.setValueAtTime(0.04 * vel, t); tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.13 * vel, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.05 * vel, t + 0.6); g.gain.setTargetAtTime(0.0001, t + dur, 0.16);
    mod.connect(mg).connect(car.frequency); car.connect(g); tine.connect(tg).connect(g);
    p.pan.value = pan; g.connect(p).connect(bus); send(p, wet);
    const end = t + dur + 1.2;
    [car, mod, tine].forEach(o => { o.start(t); o.stop(end); });
  }
  function bass(t, midi, dur, vel) {
    const f = mtof(midi), o = ctx.createOscillator(), o2 = ctx.createOscillator(), lp = ctx.createBiquadFilter(), g = ctx.createGain(), g2 = ctx.createGain();
    o2.type = 'triangle'; o.frequency.setValueAtTime(f * 1.02, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.05); o2.frequency.value = f;
    lp.type = 'lowpass'; lp.frequency.setValueAtTime(900, t); lp.frequency.exponentialRampToValueAtTime(360, t + 0.25);
    g2.gain.value = 0.35; o.connect(lp); o2.connect(g2).connect(lp); lp.connect(g).connect(bus);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.4 * vel, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.19 * vel, t + 0.25); g.gain.setTargetAtTime(0.0001, t + dur * 0.92, 0.05);
    [o, o2].forEach(x => { x.start(t); x.stop(t + dur + 0.4); });
  }
  function ride(t, vel) {
    const hp = ctx.createBiquadFilter(), bp = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner();
    hp.type = 'highpass'; hp.frequency.value = 6500; bp.type = 'bandpass'; bp.frequency.value = 9500; bp.Q.value = 0.6;
    RIDE.forEach(f => { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(hp); o.start(t); o.stop(t + 1.2); });
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.045 * vel, t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.011 * vel, t + 0.12); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    p.pan.value = 0.35; hp.connect(bp).connect(g).connect(p).connect(bus); send(p, 0.25);
  }
  function hit(t, type, freq, q, vel, dec, pan = 0, atk = 0.002) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner();
    s.buffer = audio.noise; f.type = type; f.frequency.value = freq; f.Q.value = q; p.pan.value = pan;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vel, t + atk); g.gain.exponentialRampToValueAtTime(0.0001, t + atk + dec);
    s.connect(f).connect(g).connect(p).connect(bus); s.start(t, Math.random() * 0.4); s.stop(t + atk + dec + 0.05);
  }
  function kick(t, vel) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.3 * vel, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g).connect(bus); o.start(t); o.stop(t + 0.4);
  }

  /* Composition */
  const fold = m => { while (m > 50) m -= 12; while (m < 33) m += 12; return m; };
  const stepIn = (from, pcs, dir) => { for (let k = 1; k < 12; k++) { const m = from + dir * k; if (pcs.includes(pc(m))) return m; } return from; };
  function walk(b) {
    const cs = PROG[b % PROG.length], A = CH[cs[0]], B = CH[cs[cs.length - 1]], nx = fold(CH[PROG[(b + 1) % PROG.length][0]].root);
    const dir = Math.random() < 0.6 ? 1 : -1;
    const n2 = cs.length === 2 ? A.root + 7 : stepIn(A.root, A.sc, dir);
    const n3 = cs.length === 2 ? B.root : stepIn(n2, A.sc, dir);
    const f3 = fold(n3);
    return [A.root, n2, n3].map(fold).concat(nx + (f3 > nx ? 1 : -1));
  }
  function scheduleBar(t0, b) {
    const cs = PROG[b % PROG.length];
    const chordAt = p => CH[cs[cs.length === 2 && p >= 2 ? 1 : 0]];
    const at = p => t0 + (Math.floor(p) + (p % 1 ? SWING : 0)) * beat;
    [[0, 0.8], [1, 1], [1.5, 0.55], [2, 0.8], [3, 1], [3.5, 0.55]].forEach(([p, v]) => ride(at(p) + jit(), v * (0.85 + Math.random() * 0.3)));
    [1, 3].forEach(p => { hit(at(p), 'bandpass', 8200, 1.2, 0.04, 0.045, -0.3); hit(at(p), 'bandpass', 2600, 0.7, 0.06, 0.22, -0.15, 0.03); });
    [0.5, 1.5, 2.5, 3.5].forEach(p => { if (Math.random() < 0.25) hit(at(p), 'bandpass', 2400, 0.7, 0.02, 0.15, -0.1, 0.02); });
    kick(at(0), 0.5); if (Math.random() < 0.35) kick(at(2), 0.3);
    walk(b).forEach((m, i) => bass(at(i) + jit(0.006), m, beat * 0.95, i === 0 ? 1 : 0.85));
    COMP[Math.random() * COMP.length | 0].forEach(([p, d]) => {
      const c = chordAt(p), vel = 0.7 + Math.random() * 0.3;
      c.v.forEach((m, k) => rhodes(at(p) + k * 0.012 + jit(0.004), m, vel * (k === c.v.length - 1 ? 1 : 0.85), d * beat, -0.2 + k * 0.12));
    });
    if (mel.rest > 0) { mel.rest--; return; }
    if (mel.left <= 0) { if (Math.random() < 0.5) mel.left = 2; else return; }
    [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5].forEach(p => {
      if (Math.random() > 0.42) return;
      const c = chordAt(p);
      let m = Math.max(67, Math.min(81, mel.note + [-2, -1, 1, 2, -3, 3][Math.random() * 6 | 0]));
      for (let k = 0; k < 12 && !c.sc.includes(pc(m)); k++) m += m > mel.note ? 1 : -1;
      mel.note = m;
      rhodes(at(p), m, 0.5 + Math.random() * 0.25, beat * (0.4 + Math.random() * 0.5), 0.25, 0.45);
    });
    if (--mel.left <= 0) mel.rest = 2;
  }
  function tick() {
    if (!on) return;
    const now = ctx.currentTime;
    if (next < now) next = now + 0.05;
    while (next < now + 1.2) { scheduleBar(next, bar++); next += 4 * beat; }
    rainG.gain.setTargetAtTime(HQ.on ? 0.1 : 0, now, 0.8);
  }
  return {
    get on() { return on; },
    start() {
      if (on) return;
      audio.init(); if (!audio.ctx) return;
      if (!ctx) build();
      on = true; next = ctx.currentTime + 0.15;
      out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setTargetAtTime(VOL, ctx.currentTime, 1.2);
      tick(); timer = setInterval(tick, 150);
    },
    stop() {
      if (!on) return;
      on = false; clearInterval(timer);
      out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    },
    duck(sec) {
      if (!on) return;
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t); out.gain.setTargetAtTime(VOL * 0.3, t, 0.08); out.gain.setTargetAtTime(VOL, t + sec, 1);
    }
  };
})();

function syncMusicBtn() {
  const b = $('#btn-music');
  b.textContent = prefs.music ? 'Music on' : 'Music off';
  b.setAttribute('aria-pressed', String(prefs.music));
}
function setMusic(onOff) {
  prefs.music = onOff; savePrefs(); syncMusicBtn();
  onOff ? music.start() : music.stop();
}
$('#btn-music').addEventListener('click', () => { if (prefs.music && !music.on) music.start(); else setMusic(!prefs.music); });
/* Browsers only allow sound after a gesture: start on the first click or key */
function firstGesture(e) {
  removeEventListener('pointerdown', firstGesture, true);
  removeEventListener('keydown', firstGesture, true);
  if (prefs.music && !e.target.closest?.('#btn-music')) music.start();
}
addEventListener('pointerdown', firstGesture, true);
addEventListener('keydown', firstGesture, true);
syncMusicBtn();
