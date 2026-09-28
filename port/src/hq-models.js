/* ───────── Materials ───────── */
function makeMaterials() {
  const M = G.M = {};
  M.plastic = procMat(new THREE.MeshPhysicalMaterial({ color: '#e0d5bd', roughness: 0.5, clearcoat: 0.2, clearcoatRoughness: 0.45 }),
    { key: 'plastic', albedo: 'diffuseColor.rgb*=.95+.08*fbm3(p*24.);', bump: 'hgt=fbm3(p*650.)*.000035;' });
  M.plasticDk = procMat(new THREE.MeshPhysicalMaterial({ color: '#b3a88f', roughness: 0.6 }), { key: 'plasticdk', bump: 'hgt=fbm3(p*650.)*.00003;' });
  M.key = procMat(new THREE.MeshPhysicalMaterial({ color: '#b9b1a1', roughness: 0.55, clearcoat: 0.15, clearcoatRoughness: 0.5 }),
    { key: 'key', albedo: 'diffuseColor.rgb*=.96+.06*fbm3(p*40.);', bump: 'hgt=fbm3(p*900.)*.00002;' });
  M.black = new THREE.MeshStandardMaterial({ color: '#0b0b0b', roughness: 0.7 });
  M.crt = new THREE.MeshPhysicalMaterial({ color: '#2a2e2a', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.03, emissive: '#0a0d0b' });
  M.paint = new THREE.MeshPhysicalMaterial({ color: '#131313', roughness: 0.4, metalness: 0.25, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  M.brass = new THREE.MeshStandardMaterial({ color: '#c49a5c', metalness: 1, roughness: 0.3 });
  M.chrome = new THREE.MeshStandardMaterial({ color: '#d4d4d4', metalness: 1, roughness: 0.22 });
  M.steel = new THREE.MeshStandardMaterial({ color: '#0e0f0f', metalness: 0.6, roughness: 0.5 });
  M.cord = new THREE.MeshStandardMaterial({ color: '#cbc2ae', roughness: 0.55 });
  M.wood = procMat(new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.5, clearcoat: 0.55, clearcoatRoughness: 0.22 }), {
    key: 'wood',
    pre: 'float WN=fbm(vec2(pW.x*1.4,pW.z*6.)), WG=fbm(vec2(pW.x*2.2,pW.z*85.));',
    albedo: `float n=WN; float g=WG; float r=sin((p.z*24.+n*5.5+p.x*.35)*6.2831)*.5+.5;
      vec3 dk=vec3(.028,.012,.006), lt=vec3(.15,.07,.032); diffuseColor.rgb=mix(dk,lt,clamp(.18+.55*n+.22*r*g+.2*g,0.,1.));`,
    rough: 'roughnessFactor=.4+.3*WG;',
    bump: 'hgt=(WG*.6+fbm(vec2(p.x*9.,p.z*300.))*.4)*.00025;'
  });
  M.plaster = procMat(new THREE.MeshStandardMaterial({ color: '#2d3e34', roughness: 0.93 }),
    { key: 'plaster', albedo: 'diffuseColor.rgb*=.8+.3*fbm3(p*3.5)+.12*fbm3(p*22.);', bump: 'hgt=(fbm3(p*55.)*.65+fbm3(p*11.)*.35)*.0016;' });
  /* Unglazed clay: mottled, with a chalky mineral bloom and a darker damp band at the foot */
  M.terracotta = procMat(new THREE.MeshStandardMaterial({ color: '#8f5d48', roughness: 0.96 }), {
    key: 'terra',
    albedo: `float n=fbm3(p*38.), b=smoothstep(.56,.8,fbm3(p*13.+4.));
      diffuseColor.rgb*=.78+.34*n; diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.44,.4,.35),b*.5);
      diffuseColor.rgb*=1.-.32*smoothstep(.035,0.,p.y);`,
    bump: 'hgt=fbm3(p*380.)*.00018+fbm3(p*60.)*.0001;'
  });
  /* Potting mix, flecked with perlite */
  M.soil = procMat(new THREE.MeshStandardMaterial({ color: '#241a12', roughness: 1 }), {
    key: 'soil',
    albedo: 'diffuseColor.rgb*=.55+.9*fbm3(p*260.); diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.7,.68,.63),smoothstep(.76,.84,fbm3(p*700.+7.)));',
    bump: 'hgt=fbm3(p*500.)*.0006;'
  });
  /* Sansevieria 'Laurentii': deep green with broken grey-green cross-bands and golden margins,
     waxy. Drawn in leaf space (vUv): u across the blade, v up it; the integer part of u picks
     each leaf's own pattern */
  M.leaf = procMat(new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.55, specularIntensity: 0.45, clearcoat: 0.12, clearcoatRoughness: 0.5, envMapIntensity: 0.7, side: THREE.DoubleSide }), {
    key: 'leaf',
    pre: `float LS=floor(vUv.x), LU=fract(vUv.x), LV=vUv.y, LE=abs(LU-.5)*2.;
      float LB=sin((LV*19.+fbm(vec2(LU*2.2+LS*7.3,LV*4.+LS*1.7))*2.2+LU*.6+LS*.37)*6.2831)*.5+.5;
      LB=smoothstep(.3,.92,LB+(fbm(vec2(LU*6.+LS*3.1,LV*34.))-.5)*.7);`,
    albedo: `vec3 c=mix(vec3(.004,.05,.03),vec3(.01,.095,.055),fbm(vec2(LU*3.+LS,LV*12.)));
      c=mix(c,vec3(.03,.2,.13),LB*.55*(1.-LE*.5));
      float mw=.86+.05*fbm(vec2(LV*16.+LS*5.,LS*2.));
      c=mix(c,vec3(.2,.32,.05),smoothstep(mw,mw+.05,LE));
      diffuseColor.rgb=mix(c,vec3(.11,.085,.04),smoothstep(.955,1.,LV)*.85);`,
    rough: 'roughnessFactor=.5+.16*fbm(vec2(LU*6.,LV*40.));',
    bump: 'hgt=LB*.00004+fbm(vec2(LU*40.,LV*400.))*.00002;'
  });
  M.leaf.defines = { USE_UV: '' };
  M.enamel = new THREE.MeshPhysicalMaterial({ color: '#eee8da', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 });
  M.enamelBlue = new THREE.MeshPhysicalMaterial({ color: '#1f3563', roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08 });
  M.coffee = new THREE.MeshPhysicalMaterial({ color: '#130904', roughness: 0.06, clearcoat: 1 });
  M.fabric = procMat(new THREE.MeshStandardMaterial({ color: '#252a30', roughness: 0.97 }), { key: 'fabric', bump: 'hgt=fbm3(p*1400.)*.00005;' });
}

/* ───────── Room: plaster wall, steel window, walnut desk ───────── */
function buildRoom() {
  const M = G.M, X0 = -1.55, X1 = -0.42, Y0 = 0.1, Y1 = 1.4, CX = (X0 + X1) / 2, CY = (Y0 + Y1) / 2, WW = X1 - X0, WH = Y1 - Y0;
  const wall = new THREE.Shape();
  wall.moveTo(-3.5, -0.05); wall.lineTo(3.5, -0.05); wall.lineTo(3.5, 2.6); wall.lineTo(-3.5, 2.6); wall.lineTo(-3.5, -0.05);
  const hole = new THREE.Path();
  hole.moveTo(X0, Y0); hole.lineTo(X0, Y1); hole.lineTo(X1, Y1); hole.lineTo(X1, Y0); hole.lineTo(X0, Y0);
  wall.holes.push(hole);
  mesh(new THREE.ShapeGeometry(wall), M.plaster, 0, 0, -0.5).castShadow = false;
  const RD = 0.14, rz = -0.5 - RD / 2;
  mesh(new THREE.BoxGeometry(0.02, WH, RD), M.plaster, X0 - 0.01, CY, rz);
  mesh(new THREE.BoxGeometry(0.02, WH, RD), M.plaster, X1 + 0.01, CY, rz);
  mesh(new THREE.BoxGeometry(WW + 0.04, 0.02, RD), M.plaster, CX, Y1 + 0.01, rz);
  mesh(new THREE.BoxGeometry(WW + 0.08, 0.028, RD + 0.06), M.plaster, CX, Y0 - 0.014, rz + 0.03);
  const FZ = -0.6, fp = 0.034, fd = 0.03;
  [[X0 + fp / 2, CY, fp, WH], [X1 - fp / 2, CY, fp, WH], [CX, Y1 - fp / 2, WW, fp], [CX, Y0 + fp / 2, WW, fp]]
    .forEach(([x, y, w, h]) => mesh(new THREE.BoxGeometry(w, h, fd), M.steel, x, y, FZ));
  for (let i = 1; i < 3; i++) mesh(new THREE.BoxGeometry(0.018, WH, fd * 0.8), M.steel, X0 + WW * i / 3, CY, FZ);
  for (let i = 1; i < 4; i++) mesh(new THREE.BoxGeometry(WW, 0.018, fd * 0.8), M.steel, CX, Y0 + WH * i / 4, FZ);
  mesh(new THREE.PlaneGeometry(WW - 0.01, WH - 0.01), rainMaterial(WW / WH), CX, CY, FZ - 0.008, null, false);
  mesh(new RoundedBoxGeometry(3.4, 0.04, 0.95, 2, 0.006), M.wood, 0, -0.02, -0.025).castShadow = false;
  const fl = mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshStandardMaterial({ color: '#0b0b0a', roughness: 0.9 }), 0, -0.76, 0, null, false);
  fl.rotation.x = -Math.PI / 2;
  G.win = { x: CX, y: CY, w: WW, h: WH };
}

/* ───────── Macintosh 128K ───────── */
function recessGeo(ow, oh, iw, ih, cy, z0, z1) {
  const o = [[-ow / 2, cy - oh / 2], [ow / 2, cy - oh / 2], [ow / 2, cy + oh / 2], [-ow / 2, cy + oh / 2]];
  const i = [[-iw / 2, cy - ih / 2], [iw / 2, cy - ih / 2], [iw / 2, cy + ih / 2], [-iw / 2, cy + ih / 2]], p = [];
  for (let k = 0; k < 4; k++) {
    const a = o[k], b = o[(k + 1) % 4], c = i[(k + 1) % 4], d = i[k];
    p.push(a[0], a[1], z0, b[0], b[1], z0, c[0], c[1], z1, a[0], a[1], z0, c[0], c[1], z1, d[0], d[1], z1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  geo.computeVertexNormals();
  return geo;
}
function buildMac() {
  const M = G.M, g = new THREE.Group();
  g.position.set(0, 0.006, -0.12); G.scene.add(g);
  const W = 0.244, H = 0.344, D = 0.274, bv = 0.004, RW = 0.214, RH = 0.176, RCY = 0.23, GW = 0.194, GH = 0.15, FZ = D / 2;
  const shape = rrect(new THREE.Shape(), W - 2 * bv, H - 2 * bv, 0.011, 0, H / 2);
  shape.holes.push(rrect(new THREE.Path(), RW + 2 * bv, RH + 2 * bv, 0.006, 0, RCY));
  const body = new THREE.ExtrudeGeometry(shape, { depth: D - 2 * bv, bevelEnabled: true, bevelThickness: bv, bevelSize: bv, bevelSegments: 4, curveSegments: 12 });
  body.translate(0, 0, -(D - 2 * bv) / 2);
  mesh(body, M.plastic, 0, 0, 0, g);
  const z0 = FZ - bv, zG = z0 - 0.014;
  mesh(recessGeo(RW, RH, GW, GH, RCY, z0, zG), M.plastic, 0, 0, 0, g);
  const gg = new THREE.PlaneGeometry(GW, GH, 24, 18), pa = gg.attributes.position;
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i) / (GW / 2), y = pa.getY(i) / (GH / 2); pa.setZ(i, 0.006 * (1 - x * x * 0.8) * (1 - y * y * 0.8)); }
  gg.computeVertexNormals();
  mesh(gg, M.crt, 0, RCY, zG + 0.0003, g);
  G.SW = 0.1806; G.SH = G.SW / 1.4953;
  const zS = zG + 0.0072;
  /* The lit picture (behind the HTML screen, feeding the bloom) and its halation in the glass */
  G.glowMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  G.glowMesh = mesh(new THREE.ShapeGeometry(rrect(new THREE.Shape(), G.SW, G.SH, 0.0047), 6), G.glowMat, 0, RCY, zS - 0.0005, g, false);
  G.haloMat = new THREE.MeshBasicMaterial({ map: haloTexture(GW, GH, G.SW, G.SH), color: '#dde6ff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  G.haloMesh = mesh(new THREE.PlaneGeometry(GW, GH), G.haloMat, 0, RCY, zS - 0.0008, g, false);
  G.SC = V3(0, 0.006 + RCY, -0.12 + zS);
  mesh(new THREE.BoxGeometry(0.226, 0.0014, 0.002), M.plasticDk, 0, 0.128, FZ - 0.0006, g, false);
  mesh(new THREE.BoxGeometry(0.056, 0.0042, 0.004), M.black, 0.0385, 0.064, FZ - 0.0012, g, false);
  mesh(new THREE.BoxGeometry(0.019, 0.0125, 0.002), M.plasticDk, 0.0755, 0.064, FZ - 0.0003, g, false);
  mesh(new THREE.BoxGeometry(0.012, 0.0036, 0.002), M.black, 0.0755, 0.064, FZ + 0.0004, g, false);
  mesh(new THREE.CylinderGeometry(0.0011, 0.0011, 0.002, 12), M.black, 0.083, 0.0575, FZ, g, false).rotation.x = Math.PI / 2;
  mesh(new THREE.PlaneGeometry(0.0105, 0.0126), new THREE.MeshStandardMaterial({ map: appleTexture(), transparent: true, roughness: 0.35 }), -0.102, 0.038, FZ + 0.0003, g, false);
  mesh(new RoundedBoxGeometry(W - 0.012, 0.008, D - 0.02, 2, 0.003), M.plasticDk, 0, -0.002, 0, g);
  mesh(new THREE.BoxGeometry(0.13, 0.003, 0.022), M.plasticDk, 0, H - 0.0005, -D / 2 + 0.035, g, false);
  blob(0.36, 0.4, 0, -0.12, 0.7);
}

/* ───────── Keyboard, with real keys that press when you type ───────── */
const KB_ROWS = (() => {
  const P = { '`': 'Backquote', '-': 'Minus', '=': 'Equal', '[': 'BracketLeft', ']': 'BracketRight', '\\': 'Backslash', ';': 'Semicolon', "'": 'Quote', ',': 'Comma', '.': 'Period', '/': 'Slash' };
  const code = ch => /[0-9]/.test(ch) ? 'Digit' + ch : /[A-Z]/.test(ch) ? 'Key' + ch : P[ch];
  const row = (pre, chars, post) => [...pre, ...[...chars].map(ch => [ch, code(ch), 1]), ...post];
  return [
    row([], '`1234567890-=', [['backspace', 'Backspace', 1.9]]),
    row([['tab', 'Tab', 1.5]], 'QWERTYUIOP[]', [['\\', 'Backslash', 1.4]]),
    row([['caps lock', 'CapsLock', 1.8]], "ASDFGHJKL;'", [['return', 'Enter', 2.1]]),
    row([['shift', 'ShiftLeft', 2.3]], 'ZXCVBNM,./', [['shift', 'ShiftRight', 2.3]]),
    [['option', 'AltLeft', 1.5], ['⌘', 'MetaLeft', 1.3], ['', 'Space', 7.4], ['enter', 'NumpadEnter', 1.5], ['option', 'AltRight', 1.5]]
  ];
})();
function buildKeyboard() {
  const M = G.M, g = new THREE.Group();
  g.position.set(0, 0.012, 0.175); g.rotation.x = 0.06; G.scene.add(g);
  mesh(new RoundedBoxGeometry(0.33, 0.024, 0.14, 4, 0.009), M.plastic, 0, 0, 0, g);
  mesh(new THREE.BoxGeometry(0.302, 0.002, 0.108), new THREE.MeshStandardMaterial({ color: '#8d846f', roughness: 0.8 }), 0, 0.0112, -0.0025, g, false);
  const pitch = 0.0195, cap = 0.0172, gap = pitch - cap, keys = [];
  KB_ROWS.forEach((row, r) => {
    let x = -row.reduce((a, k) => a + k[2], 0) * pitch / 2;
    row.forEach(([label, code, u]) => { keys.push({ label, code, x: x + u * pitch / 2, z: -0.041 + r * pitch, w: u * pitch - gap }); x += u * pitch; });
  });
  const im = G.keyMesh = new THREE.InstancedMesh(new RoundedBoxGeometry(cap, 0.0085, cap, 2, 0.0022), M.key, keys.length);
  im.castShadow = im.receiveShadow = true; g.add(im);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion();
  keys.forEach((k, i) => {
    const p = V3(k.x, 0.0162, k.z), s = V3(k.w / cap, 1, 1);
    m4.compose(p, q, s); im.setMatrixAt(i, m4);
    if (!G.keys.has(k.code)) G.keys.set(k.code, { i, p, s });
  });
  const AW = 0.31, AD = 0.106, AZ = -0.0025, ppm = 2048 / AW;
  const tex = canvasTex(2048, Math.round(AD * ppm), x => {
    x.fillStyle = '#5a5347'; x.textBaseline = 'top';
    keys.forEach(k => {
      x.font = `500 ${k.label.length > 1 ? 15 : 22}px "IBM Plex Mono", Menlo, monospace`;
      x.fillText(k.label, (k.x - k.w / 2 + 0.0026 + AW / 2) * ppm, (k.z - cap / 2 + 0.0024 - (AZ - AD / 2)) * ppm);
    });
  });
  mesh(new THREE.PlaneGeometry(AW, AD), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }), 0, 0.0207, AZ, g, false).rotation.x = -Math.PI / 2;
  coil([V3(0.11, 0.012, 0.104), V3(0.12, 0.006, 0.08), V3(0.11, 0.006, 0.05), V3(0.1, 0.012, 0.022)], 16, 0.0042, 0.0013, M.cord);
  blob(0.42, 0.22, 0, 0.178, 0.6);
}

/* ───────── Mouse on a felt pad, cord running behind the Mac ───────── */
function buildMouse() {
  const M = G.M;
  mesh(new RoundedBoxGeometry(0.2, 0.003, 0.24, 2, 0.0012), M.fabric, 0.27, 0.0015, 0.165);
  blob(0.26, 0.3, 0.27, 0.165, 0.45);
  const g = new THREE.Group();
  g.position.set(0.27, 0.003, 0.17); g.rotation.y = -0.08; G.scene.add(g);
  mesh(new RoundedBoxGeometry(0.058, 0.032, 0.106, 4, 0.009), M.plastic, 0, 0.016, 0, g);
  G.mouseBtnY = 0.0305;
  G.mouseBtn = mesh(new RoundedBoxGeometry(0.047, 0.006, 0.041, 2, 0.0018), M.plasticDk, 0, G.mouseBtnY, -0.029, g);
  const pts = [V3(0.266, 0.014, 0.116), V3(0.262, 0.006, 0.09), V3(0.232, 0.0035, 0.02), V3(0.172, 0.0035, -0.08), V3(0.136, 0.0035, -0.19), V3(0.1, 0.02, -0.262)];
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 90, 0.0021, 8), M.cord);
}

/* ───────── Desk lamp: the key light, with shadows, a beam and dust ───────── */
function buildLamp() {
  const M = G.M, s = G.scene;
  const P0 = V3(0.4, 0.034, -0.27), P1 = V3(0.435, 0.3, -0.232), P2 = V3(0.215, 0.405, -0.1), T = V3(0.2, 0, 0.03);
  mesh(new THREE.CylinderGeometry(0.066, 0.071, 0.022, 48), M.paint, 0.4, 0.011, -0.27);
  mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.014, 24), M.paint, 0.4, 0.029, -0.27);
  const n = new THREE.Vector3().crossVectors(new THREE.Vector3().subVectors(P1, P0), new THREE.Vector3().subVectors(P2, P1)).normalize();
  [-1, 1].forEach(sg => {
    const o = n.clone().multiplyScalar(0.0075 * sg);
    rod(P0.clone().add(o), P1.clone().add(o), 0.0032, M.paint);
    rod(P1.clone().add(o), P2.clone().add(o), 0.003, M.paint);
  });
  const up = new THREE.Vector3().subVectors(P1, P0), side = V3(-0.014, 0, 0);
  coil([P0.clone().addScaledVector(up, 0.12).add(side), P0.clone().addScaledVector(up, 0.34).add(side), P0.clone().addScaledVector(up, 0.56).add(side)], 22, 0.0042, 0.0009, M.chrome);
  [P0, P1, P2].forEach(P => mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.024, 20), M.brass, P.x, P.y, P.z).quaternion.setFromUnitVectors(V3(0, 1, 0), n));
  const dir = new THREE.Vector3().subVectors(T, P2).normalize();
  const head = new THREE.Group();
  head.position.copy(P2).addScaledVector(dir, 0.014);
  head.quaternion.setFromUnitVectors(V3(0, 1, 0), dir); s.add(head);
  const prof = [[0, -0.014], [0.017, -0.014], [0.021, -0.002], [0.028, 0.018], [0.045, 0.048], [0.064, 0.075], [0.067, 0.08]].map(([x, y]) => new THREE.Vector2(x, y));
  mesh(new THREE.LatheGeometry(prof, 48), M.paint, 0, 0, 0, head);
  const lining = new THREE.MeshStandardMaterial({ color: '#e8e0cf', roughness: 0.6, side: THREE.BackSide, emissive: '#ffcf8a', emissiveIntensity: 0.35 });
  mesh(new THREE.LatheGeometry(prof.map(v => new THREE.Vector2(v.x * 0.96, v.y + 0.0015)), 48), lining, 0, 0, 0, head, false);
  const bulb = mesh(new THREE.SphereGeometry(0.019, 24, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(9, 6.4, 3.6) }), 0, 0.05, 0, head, false);
  head.updateMatrixWorld(true);
  const bw = bulb.getWorldPosition(new THREE.Vector3());
  const spot = G.spot = new THREE.SpotLight('#ffc27e', 2.3, 0, 0.5, 0.7, 2);
  spot.position.copy(bw); spot.target.position.copy(T); s.add(spot, spot.target);
  spot.castShadow = true; spot.shadow.mapSize.set(2048, 2048); spot.shadow.bias = -0.00015; spot.shadow.normalBias = 0.012;
  spot.shadow.camera.near = 0.05; spot.shadow.camera.far = 2;
  const spill = new THREE.PointLight('#ffb070', 0.18, 1.6, 2);
  spill.position.copy(P2).add(V3(0.04, 0.06, -0.08)); s.add(spill);
  /* Lamplight bouncing off the walnut: warms the wall, the Mac's flank and the mug */
  const bounce = new THREE.RectAreaLight('#ff9d5c', 0.9, 0.42, 0.3);
  bounce.position.set(T.x + 0.02, 0.004, T.z); bounce.lookAt(T.x + 0.02, 1, T.z); s.add(bounce);
  const bh = 0.52, br = bh * Math.tan(0.5), cone = new THREE.Group();
  cone.position.copy(bw).addScaledVector(dir, 0.015 + bh / 2);
  cone.quaternion.setFromUnitVectors(V3(0, -1, 0), dir); s.add(cone);
  const beam = beamMaterial();
  cone.add(new THREE.Mesh(new THREE.ConeGeometry(br, bh, 48, 1, true), beam));
  G.dust = dustPoints(bh, br, 420); cone.add(G.dust);
  blob(0.22, 0.22, 0.4, -0.27, 0.6);
  /* Everything the lamp lights, on one dimmer (0 = off, 1 = on) for the warm-up at the start */
  G.setLamp = k => {
    spot.intensity = 2.3 * k; spill.intensity = 0.18 * k; bounce.intensity = 0.9 * k;
    bulb.material.color.setRGB(0.2 + 8.8 * k, 0.18 + 6.2 * k, 0.15 + 3.45 * k);
    lining.emissiveIntensity = 0.35 * k; beam.uniforms.k.value = k; G.dust.material.uniforms.k.value = k;
  };
}

/* ───────── Snake plant in a terracotta pot ───────── */
/* One blade: a pointed strap folded into a shallow V, arched back and slightly twisted.
   The leaf's seed rides in the integer part of its u coordinate (see M.leaf) */
function leafGeo(h, w, arch, twist, seed) {
  const geo = new THREE.PlaneGeometry(1, 1, 6, 40), p = geo.attributes.position, uv = geo.attributes.uv;
  for (let k = 0; k < p.count; k++) {
    const u = p.getX(k), v = p.getY(k) + 0.5, wv = w * Math.pow(Math.sin(Math.PI * (0.14 + 0.86 * v)), 0.7);
    const x = u * wv, z = -Math.pow(Math.abs(u) * 2, 1.5) * wv * 0.2, a = twist * v, c = Math.cos(a), s = Math.sin(a);
    p.setXYZ(k, x * c - z * s, v * h, x * s + z * c + arch * v * v);
    uv.setX(k, seed + 0.002 + uv.getX(k) * 0.996);
  }
  geo.computeVertexNormals();
  return geo;
}
function buildPlant() {
  const M = G.M, g = new THREE.Group(), r = rng(11);
  g.position.set(-0.36, 0, -0.33); G.scene.add(g);
  const lathe = pts => mesh(new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), 64), M.terracotta, 0, 0, 0, g);
  lathe([[0, 0], [0.074, 0], [0.079, 0.003], [0.082, 0.013], [0.078, 0.014], [0.074, 0.006], [0, 0.006]]);                       // saucer
  lathe([[0, 0.006], [0.049, 0.006], [0.052, 0.01], [0.066, 0.103], [0.075, 0.105], [0.078, 0.109], [0.079, 0.13],
    [0.077, 0.135], [0.072, 0.136], [0.069, 0.133], [0.066, 0.116], [0.001, 0.116]]);                                          // pot, rolled rim
  mesh(new THREE.CircleGeometry(0.0664, 48), M.soil, 0, 0.12, 0, g).rotation.x = -Math.PI / 2;
  /* Three clumps off the rhizome, each a fan: the middle blades stand tallest, the outer ones lean away */
  let seed = 0;
  for (const [cx, cz, n] of [[-0.021, 0.008, 5], [0.022, -0.006, 4], [0.003, 0.027, 3]]) {
    const face = r() * Math.PI * 2;
    for (let j = 0; j < n; j++) {
      const t = j / (n - 1) - 0.5, h = (0.47 - Math.abs(t) * 0.26) * (0.78 + r() * 0.3), w = 0.037 + r() * 0.02;
      const leaf = mesh(leafGeo(h, w, (0.012 + r() * 0.04) * (0.5 + Math.abs(t) * 2.4), (r() - 0.5) * 1.1, seed++), M.leaf,
        cx + Math.cos(face) * t * 0.016, 0.114, cz - Math.sin(face) * t * 0.016, g);
      leaf.rotation.set(0.04 + r() * 0.08 + Math.abs(t) * 0.22, face + t * 1.1 + (r() - 0.5) * 0.35, t * 0.5, 'YXZ');
    }
  }
  blob(0.27, 0.27, -0.36, -0.33, 0.65);
}

/* ───────── Coffee, floppies, poster ───────── */
/* The mug sits in the lamplight, not out at the frame's corner: the overview's shifted lens
   is wide, and round things near its bottom corners stretch and lean */
const MUG = { x: 0.405, z: -0.035 };
function buildMug() {
  const M = G.M, g = new THREE.Group();
  g.position.set(MUG.x, 0, MUG.z); g.rotation.y = -0.5; G.scene.add(g);
  const prof = [[0, 0], [0.037, 0], [0.04, 0.003], [0.041, 0.093], [0.0395, 0.096], [0.0365, 0.095], [0.0355, 0.006], [0.0005, 0.006]].map(([x, y]) => new THREE.Vector2(x, y));
  mesh(new THREE.LatheGeometry(prof, 56), M.enamel, 0, 0, 0, g);
  mesh(new THREE.TorusGeometry(0.038, 0.0021, 10, 56), M.enamelBlue, 0, 0.0955, 0, g).rotation.x = Math.PI / 2;
  mesh(new THREE.CircleGeometry(0.0356, 48), M.coffee, 0, 0.079, 0, g, false).rotation.x = -Math.PI / 2;
  mesh(new THREE.TorusGeometry(0.021, 0.0055, 14, 32, Math.PI), M.enamel, 0.04, 0.05, 0, g).rotation.z = -Math.PI / 2;
  const steam = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.18), steamMaterial());
  steam.position.set(MUG.x, 0.18, MUG.z); G.scene.add(steam);
  blob(0.13, 0.13, MUG.x, MUG.z, 0.55);
}
function buildFloppies() {
  const edge = new THREE.MeshStandardMaterial({ color: '#262629', roughness: 0.5 });
  [['Portfolio', 'System 1.1 · 400K', -0.255, 0.0017, 0.19, 0.35], ['System', 'Startup disk', -0.25, 0.0052, 0.186, 0.12]].forEach(([l, s, x, y, z, ry]) => {
    const top = new THREE.MeshStandardMaterial({ map: floppyTexture(l, s), roughness: 0.45 });
    mesh(new THREE.BoxGeometry(0.09, 0.0033, 0.094), [edge, edge, top, edge, edge, edge], x, y, z).rotation.y = ry;
  });
  blob(0.14, 0.14, -0.25, 0.19, 0.5);
}
function buildPoster() {
  const M = G.M, g = new THREE.Group(), W = 0.3, H = 0.4, f = 0.012, d = 0.02;
  g.position.set(0.555, 0.42, -0.492); G.scene.add(g);
  [[0, H / 2 - f / 2, W, f], [0, -H / 2 + f / 2, W, f], [-W / 2 + f / 2, 0, f, H], [W / 2 - f / 2, 0, f, H]]
    .forEach(([x, y, w, h]) => mesh(new THREE.BoxGeometry(w, h, d), M.paint, x, y, 0, g));
  mesh(new THREE.PlaneGeometry(W - 2 * f, H - 2 * f), new THREE.MeshStandardMaterial({ map: posterTexture(), roughness: 0.75 }), 0, 0, -0.002, g);
  mesh(new THREE.PlaneGeometry(W - 2 * f, H - 2 * f), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.04, transparent: true, opacity: 0.1, clearcoat: 1 }), 0, 0, 0.006, g, false);
}

/* ───────── Fill lights: dusk through the window, the CRT's own glow ───────── */
function buildLights() {
  const s = G.scene;
  s.add(new THREE.HemisphereLight('#51608a', '#24170e', 0.45));
  const win = new THREE.RectAreaLight('#8594c4', 1.3, G.win.w, G.win.h * 0.6);
  win.position.set(G.win.x, G.win.y + G.win.h * 0.18, -0.52); win.lookAt(-0.5, 0.5, 1); s.add(win);
  const scr = G.screenLight = new THREE.RectAreaLight('#dfe8ff', 0, G.SW, G.SH);
  scr.position.set(G.SC.x, G.SC.y, G.SC.z + 0.002); scr.lookAt(G.SC.x, G.SC.y - 0.05, 2); s.add(scr);
}
