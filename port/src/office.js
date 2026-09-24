/* ───────── Studio set dressing: skyline and plant, drawn once ───────── */
(function skyline() {
  const r = rng(1984), W = 608, H = 420;
  let far = '', near = '', lit = '';
  for (let x = -10; x < W;) {
    const w = 34 + r() * 40, h = 150 + r() * 170;
    far += `<rect x="${x.toFixed(1)}" y="${(H - h).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"/>`;
    x += w + 2;
  }
  for (let x = -6, i = 0; x < W; i++) {
    const w = 46 + r() * 58, h = 70 + r() * 150, top = H - h;
    near += `<rect x="${x.toFixed(1)}" y="${top.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"/>`;
    if (i === 2 || i === 6) {
      const cx = x + w * 0.55;
      near += `<rect x="${cx - 8}" y="${top - 16}" width="2" height="16"/><rect x="${cx + 6}" y="${top - 16}" width="2" height="16"/><rect x="${cx - 10}" y="${top - 36}" width="20" height="21" rx="2"/><path d="M${cx - 12} ${top - 36}L${cx} ${top - 48}L${cx + 12} ${top - 36}Z"/>`;
    }
    for (let wy = top + 10; wy < H - 8; wy += 13) for (let wx = x + 6; wx < x + w - 8; wx += 10)
      if (r() < 0.2) lit += `<rect x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="4" height="6"/>`;
    x += w + 3;
  }
  $('#city').innerHTML = `<g fill="#3b3656" opacity=".75">${far}</g><g fill="#12151d">${near}</g><g fill="#f6c979" opacity=".85">${lit}</g>`;
})();

(function snakePlant() {
  const leaves = [[-54, 300, 30, -0.3], [-30, 380, 34, -0.16], [-8, 440, 38, -0.04], [14, 400, 34, 0.08], [38, 330, 32, 0.2], [58, 250, 28, 0.36], [-70, 210, 26, -0.48], [4, 300, 30, 0.02]];
  const cx = 160, base = 410;
  const leaf = ([dx, h, w, tilt], i) => {
    const bx = cx + dx * 0.4, tx = bx + Math.sin(tilt) * h, ty = base - Math.cos(tilt) * h;
    const mx = (bx + tx) / 2, my = (base + ty) / 2, nx = Math.cos(tilt) * w / 2, ny = Math.sin(tilt) * w / 2;
    const body = `M${bx - w * .28} ${base}Q${mx - nx - 4} ${my - ny} ${tx} ${ty}Q${mx + nx + 4} ${my + ny} ${bx + w * .28} ${base}Z`;
    const vein = `M${bx} ${base}Q${mx} ${my} ${tx} ${ty}`;
    return `<path d="${body}" fill="${i % 2 ? '#2f5b3b' : '#274d33'}" stroke="#b8b45e" stroke-width="3" stroke-linejoin="round"/><path d="${vein}" stroke="rgba(170,210,150,.22)" stroke-width="${w * .3}" fill="none" stroke-linecap="round"/>`;
  };
  $('#plant').innerHTML = `<defs><linearGradient id="pot" x1="0" x2="1"><stop offset="0" stop-color="#7d3f28"/><stop offset=".4" stop-color="#c06f4b"/><stop offset="1" stop-color="#6d3521"/></linearGradient></defs>
    <ellipse cx="160" cy="566" rx="96" ry="10" fill="#000" opacity=".5"/>
    ${leaves.map(leaf).join('')}
    <path d="M82 400h156l-14 160q-1 8-10 8H106q-9 0-10-8Z" fill="url(#pot)"/>
    <rect x="76" y="392" width="168" height="24" rx="3" fill="#b3623f"/>
    <rect x="76" y="392" width="168" height="4" fill="rgba(255,255,255,.18)"/>`;
})();
