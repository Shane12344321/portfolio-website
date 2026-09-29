/* ───────── Dithered artwork: grayscale drawings run through Atkinson dithering ───────── */
function atkinson(x, w, h) {
  const im = x.getImageData(0, 0, w, h), d = im.data, g = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) g[i] = d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114;
  for (let y = 0; y < h; y++) for (let X = 0; X < w; X++) {
    const i = y * w + X, o = g[i], n = o < 128 ? 0 : 255, e = (o - n) / 8;
    g[i] = n;
    if (X + 1 < w) g[i + 1] += e;
    if (X + 2 < w) g[i + 2] += e;
    if (y + 1 < h) { if (X > 0) g[i + w - 1] += e; g[i + w] += e; if (X + 1 < w) g[i + w + 1] += e; }
    if (y + 2 < h) g[i + 2 * w] += e;
  }
  for (let i = 0; i < w * h; i++) { d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = g[i]; d[i * 4 + 3] = 255; }
  x.putImageData(im, 0, 0);
}
function paint(cv, fn) {
  const x = cv.getContext('2d'), w = cv.width, h = cv.height;
  x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); fn(x, w, h); atkinson(x, w, h);
}
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const lin = (x, x0, y0, x1, y1, stops) => { const g = x.createLinearGradient(x0, y0, x1, y1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; };

const ART = {
  pages(x, w, h) {
    x.fillStyle = lin(x, 0, 0, w, h, [[0, '#c4c4c4'], [1, '#4a4a4a']]); x.fillRect(0, 0, w, h);
    [[-40, -0.14, '#d8d8d8'], [0, -0.05, '#eeeeee'], [40, 0.06, '#ffffff']].forEach(([o, r, fill], i) => {
      x.save(); x.translate(w / 2 + o, h / 2 + 8); x.rotate(r);
      x.fillStyle = 'rgba(0,0,0,.5)'; x.fillRect(-66, -46, 140, 100);
      x.fillStyle = fill; x.fillRect(-72, -52, 140, 100);
      x.fillStyle = '#777';
      for (let l = 0; l < 7; l++) x.fillRect(-60, -40 + l * 12, l === 0 ? 64 : 112 - ((l * 29) % 46), l === 0 ? 5 : 3);
      if (i === 2) { x.fillStyle = '#222'; x.beginPath(); x.arc(54, -36, 7, 0, 7); x.fill(); }
      x.restore();
    });
  },
  orbit(x, w, h) {
    x.fillStyle = lin(x, 0, 0, 0, h, [[0, '#101010'], [1, '#3a3a3a']]); x.fillRect(0, 0, w, h);
    const r = rng(7); x.fillStyle = '#fff'; for (let i = 0; i < 90; i++) x.fillRect(r() * w | 0, r() * h | 0, 1, 1);
    const cx = w * 0.52, cy = h * 0.56;
    const ring = (a, b, back) => { x.beginPath(); x.ellipse(cx, cy, a, b, -0.16, back ? Math.PI : 0, back ? Math.PI * 2 : Math.PI); x.stroke(); };
    x.strokeStyle = '#aaa'; x.lineWidth = 1.5;
    [[170, 36], [124, 26], [82, 17]].forEach(([a, b]) => ring(a, b, true));
    const g = x.createRadialGradient(cx - 12, cy - 14, 3, cx, cy, 36); g.addColorStop(0, '#fff'); g.addColorStop(1, '#2a2a2a');
    x.fillStyle = g; x.beginPath(); x.arc(cx, cy, 32, 0, 7); x.fill();
    [[170, 36], [124, 26], [82, 17]].forEach(([a, b]) => ring(a, b, false));
    [[170, 36, 0.6], [124, 26, 2.4], [82, 17, 1.2], [170, 36, 3.6]].forEach(([a, b, t]) => {
      const px = cx + a * Math.cos(t) * Math.cos(-0.16) - b * Math.sin(t) * Math.sin(-0.16), py = cy + a * Math.cos(t) * Math.sin(-0.16) + b * Math.sin(t) * Math.cos(-0.16);
      x.fillStyle = '#eee'; x.beginPath(); x.arc(px, py, 5, 0, 7); x.fill();
    });
  },
  waves(x, w, h) {
    x.fillStyle = lin(x, 0, 0, 0, h, [[0, '#f4f4f4'], [0.5, '#b0b0b0']]); x.fillRect(0, 0, w, h);
    x.fillStyle = '#fff'; x.beginPath(); x.arc(w * 0.8, h * 0.28, 16, 0, 7); x.fill();
    for (let k = 0; k < 6; k++) {
      const base = h * 0.42 + k * 13, amp = 5 + k * 1.6, tone = 150 - k * 24;
      x.fillStyle = `rgb(${tone},${tone},${tone})`; x.beginPath(); x.moveTo(0, h);
      for (let X = 0; X <= w; X += 3) x.lineTo(X, base + Math.sin(X / (22 + k * 5) + k * 1.7) * amp + Math.sin(X / 9 + k) * 1.5);
      x.lineTo(w, h); x.fill();
    }
    const bx = w * 0.3, by = h * 0.47;
    x.fillStyle = '#111'; x.fillRect(bx - 1, by - 22, 2, 18); x.beginPath(); x.moveTo(bx - 9, by); x.lineTo(bx + 9, by); x.lineTo(bx + 5, by - 6); x.lineTo(bx - 5, by - 6); x.fill();
    x.fillStyle = '#fff'; x.fillRect(bx - 3, by - 26, 6, 5);
  },
  terminal(x, w, h) {
    x.fillStyle = '#6a6a6a'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#8c8c8c'; x.lineWidth = 1;
    for (let r = 0; r < 8; r++) for (let q = 0; q < 22; q++) {
      const cx = q * 22 + (r % 2) * 11, cy = r * 19, s = 11; x.beginPath();
      for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6; x.lineTo(cx + s * Math.cos(a), cy + s * Math.sin(a)); }
      x.closePath(); x.stroke();
    }
    x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(64, 20, 300, 96);
    x.fillStyle = '#fff'; x.fillRect(58, 14, 300, 96);
    x.fillStyle = '#000'; x.fillRect(58, 14, 300, 14);
    x.font = '12px ui-monospace, Menlo, monospace'; x.textBaseline = 'top';
    ['$ hexkit new billing --template axum', '  ✓ config, logging, tracing', '  ✓ Dockerfile + CI workflow', '  ✓ 14 files in 0.8s', '$ _'].forEach((l, i) => x.fillText(l, 66, 34 + i * 14));
  },
  ledger(x, w, h) {
    x.fillStyle = '#f2f2f2'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#bbb'; for (let y = 16; y < h; y += 16) { x.beginPath(); x.moveTo(0, y + .5); x.lineTo(w, y + .5); x.stroke(); }
    const r = rng(3);
    for (let i = 0; i < 18; i++) {
      const bh = 20 + r() * 64 + i * 1.5, bx = 24 + i * 21;
      x.fillStyle = lin(x, 0, h - bh, 0, h, [[0, '#555'], [1, '#999']]); x.fillRect(bx, h - 12 - bh, 13, bh);
    }
    x.strokeStyle = '#000'; x.lineWidth = 2; x.beginPath();
    for (let i = 0; i < 18; i++) x.lineTo(30 + i * 21, h - 40 - i * 3.4 - Math.sin(i) * 6);
    x.stroke();
    x.fillStyle = '#000'; x.fillRect(0, h - 12, w, 1);
  },
  portrait(x, w, h) {
    x.fillStyle = lin(x, 0, 0, w, h, [[0, '#e8e8e8'], [1, '#7a7a7a']]); x.fillRect(0, 0, w, h);
    x.fillStyle = lin(x, 0, 44, 0, h, [[0, '#444'], [1, '#222']]);
    x.beginPath(); x.ellipse(w / 2, h + 6, 32, 30, 0, Math.PI, 0); x.fill();
    const g = x.createRadialGradient(w / 2 - 6, 26, 2, w / 2, 32, 20); g.addColorStop(0, '#f4f4f4'); g.addColorStop(1, '#8a8a8a');
    x.fillStyle = g; x.beginPath(); x.ellipse(w / 2, 32, 15, 18, 0, 0, 7); x.fill();
    x.fillStyle = '#2a2a2a'; x.beginPath(); x.ellipse(w / 2, 20, 16, 9, 0, Math.PI, 0); x.fill();
    x.fillRect(w / 2 - 16, 18, 4, 10);
  }
};

/* A year of contributions, drawn in 1-bit fills */
function drawHeat(cv) {
  const x = cv.getContext('2d'), r = rng(42), cols = 53, P = 7, S = 6;
  cv.width = cols * P; cv.height = 7 * P;
  x.fillStyle = '#fff'; x.fillRect(0, 0, cv.width, cv.height);
  let total = 0;
  const fills = [
    (px, py) => (px === 0 || py === 0 || px === S - 1 || py === S - 1) && (px + py) % 2 === 0,
    (px, py) => (px % 3 === 0 && py % 3 === 0),
    (px, py) => (px + py) % 2 === 0,
    (px, py) => !(px % 2 === 1 && py % 2 === 1),
    () => true
  ];
  for (let c = 0; c < cols; c++) for (let d = 0; d < 7; d++) {
    const busy = Math.sin(c / 5) * 0.3 + (d > 0 && d < 6 ? 0.25 : -0.2) + r();
    const lvl = busy < 0.35 ? 0 : busy < 0.65 ? 1 : busy < 0.9 ? 2 : busy < 1.1 ? 3 : 4;
    total += [0, 2, 4, 7, 11][lvl];
    x.fillStyle = '#000';
    for (let py = 0; py < S; py++) for (let px = 0; px < S; px++) if (fills[lvl](px, py)) x.fillRect(c * P + px, d * P + py, 1, 1);
  }
  return total;
}
