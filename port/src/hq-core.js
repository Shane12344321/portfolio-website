/* ───────── High graphics: a physically lit WebGL studio (three.js) ─────────
   The Mac's screen stays real HTML. The 3D camera never rotates, only moves
   and shifts its lens, so the CRT always projects to an upright rectangle
   and the HTML screen can be pinned onto it with a plain 2D transform. */
let THREE, RoundedBoxGeometry, EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, OutputPass, RectAreaLightUniformsLib, RoomEnvironment;
const G = { cur: null, anim: null, frame: 0, perf: [], dpr: 1, w: 0, h: 0, t: 0, glow: 0, screenOn: false, keys: new Map() };
const U = { time: { value: 0 } };
const hqWrap = document.createElement('div');
hqWrap.id = 'hq-screen';
const glassHome = screenEl.parentElement;

const GLSL_NOISE = `
float hq_h2(vec2 p){ vec3 q=fract(vec3(p.xyx)*.1031); q+=dot(q,q.yzx+33.33); return fract((q.x+q.y)*q.z); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(hq_h2(i),hq_h2(i+vec2(1,0)),u.x), mix(hq_h2(i+vec2(0,1)),hq_h2(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v+=a*vnoise(p); p=p*2.03+vec2(17.1,9.3); a*=.5; } return v; }
float hq_h3(vec3 p){ p=fract(p*.3183099+.1); p*=17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn3(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.-2.*f);
  return mix(mix(mix(hq_h3(i),hq_h3(i+vec3(1,0,0)),f.x),mix(hq_h3(i+vec3(0,1,0)),hq_h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(hq_h3(i+vec3(0,0,1)),hq_h3(i+vec3(1,0,1)),f.x),mix(hq_h3(i+vec3(0,1,1)),hq_h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm3(vec3 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*vn3(p); p=p*2.02+vec3(3.1,7.7,1.3); a*=.5; } return v; }
`;

/* Inject world-space procedural colour, roughness and micro-bump into a standard material */
function procMat(mat, o) {
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP=(modelMatrix*vec4(transformed,1.)).xyz;');
    let f = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;\n' + GLSL_NOISE);
    if (o.albedo) f = f.replace('#include <map_fragment>', `#include <map_fragment>\n{ vec3 p=vWP; ${o.albedo} }`);
    if (o.rough) f = f.replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\n{ vec3 p=vWP; ${o.rough} }`);
    if (o.bump) f = f.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
{ vec3 p=vWP; float hgt=0.; ${o.bump}
  vec3 dpx=dFdx(-vViewPosition), dpy=dFdy(-vViewPosition); float dhx=dFdx(hgt), dhy=dFdy(hgt);
  vec3 r1=cross(dpy,normal), r2=cross(normal,dpx); float det=dot(dpx,r1);
  vec3 nn=abs(det)*normal-sign(det)*(dhx*r1+dhy*r2); if(dot(nn,nn)>1e-24) normal=normalize(nn); }`);
    sh.fragmentShader = f;
  };
  mat.customProgramCacheKey = () => 'proc-' + o.key;
  return mat;
}

/* Small builders */
function rrect(p, w, h, r, cx = 0, cy = 0) {
  const x = cx - w / 2, y = cy - h / 2;
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r);
  p.lineTo(x + w, y + h - r); p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
  return p;
}
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function mesh(geo, mat, x = 0, y = 0, z = 0, parent, shadows = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = m.receiveShadow = shadows;
  (parent || G.scene).add(m);
  return m;
}
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
function rod(a, b, r, mat, parent) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const m = mesh(new THREE.CylinderGeometry(r, r, len, 16), mat, 0, 0, 0, parent);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(V3(0, 1, 0), d.normalize());
  return m;
}
/* A tube coiled around a path: springs and the keyboard's curly cord */
function coil(pts, turns, R, tube, mat, parent) {
  const base = new THREE.CatmullRomCurve3(pts), N = Math.max(60, turns * 18), out = [];
  const up = V3(0, 1, 0);
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = base.getPointAt(t), tan = base.getTangentAt(t);
    let n = up.clone().sub(tan.clone().multiplyScalar(up.dot(tan)));
    if (n.lengthSq() < 1e-4) n = V3(1, 0, 0);
    n.normalize();
    const b = new THREE.Vector3().crossVectors(tan, n), a = t * turns * Math.PI * 2;
    out.push(p.clone().addScaledVector(n, Math.cos(a) * R).addScaledVector(b, Math.sin(a) * R));
  }
  return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(out), N * 2, tube, 6), mat, 0, 0, 0, parent);
}
function blob(w, d, x, z, opacity = 0.55) {
  if (!G.blobTex) G.blobTex = canvasTex(128, 128, (c, W) => {
    const g = c.createRadialGradient(W / 2, W / 2, 0, W / 2, W / 2, W / 2);
    g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.55, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, W, W);
  });
  const m = mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: G.blobTex, transparent: true, opacity, depthWrite: false, color: 0x000000 }), x, 0.0007, z, null, false);
  m.rotation.x = -Math.PI / 2;
  m.renderOrder = 1;
  return m;
}

/* ───────── Camera: fixed orientation, moving position, shifted lens ───────── */
const DEG = Math.PI / 180;
const OV = { x: 0.06, y: 0.40, z: 0.98, top: Math.tan(10 * DEG), bot: -Math.tan(30 * DEG), minHalf: 0.5 };
function overviewState() {
  const a = G.w / G.h;
  let t = OV.top, b = OV.bot, half = (t - b) * a / 2;
  if (half < OV.minHalf) { const k = OV.minHalf / half; t *= k; b *= k; half = OV.minHalf; }
  return { x: OV.x, y: OV.y, z: OV.z, t, b, l: -half, r: half };
}
function zoomState() {
  const a = G.w / G.h, T = Math.tan(14 * DEG);
  const vis = Math.max(G.SH * 1.34, G.SW * 1.22 / a), d = vis / 2 / T;
  return { x: G.SC.x, y: G.SC.y, z: G.SC.z + d, t: T, b: -T, l: -T * a, r: T * a };
}
const lerpState = (A, B, e) => { const o = {}; for (const k in A) o[k] = A[k] + (B[k] - A[k]) * e; return o; };
const easeIO = k => k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
function applyCamera(s) {
  const c = G.camera;
  c.position.set(s.x, s.y, s.z);
  c.userData.f = s;
  c.updateProjectionMatrix();
  c.updateMatrixWorld(true);
}
function placeScreen() {
  const v = G._v || (G._v = new THREE.Vector3()), { x, y, z } = G.SC;
  v.set(x - G.SW / 2, y + G.SH / 2, z).project(G.camera);
  const px = (v.x * 0.5 + 0.5) * G.w, py = (-v.y * 0.5 + 0.5) * G.h;
  v.set(x + G.SW / 2, y - G.SH / 2, z).project(G.camera);
  const s = ((v.x * 0.5 + 0.5) * G.w - px) / 640;
  hqWrap.style.transform = `translate(${px.toFixed(2)}px,${py.toFixed(2)}px) scale(${s.toFixed(5)})`;
}
function resize() {
  G.w = innerWidth; G.h = innerHeight;
  G.renderer.setPixelRatio(G.dpr);
  G.renderer.setSize(G.w, G.h, false);
  G.composer.setPixelRatio(G.dpr);
  G.composer.setSize(G.w, G.h);
  G.finalPass.uniforms.res.value.set(G.w * G.dpr, G.h * G.dpr);
  G.dust.material.uniforms.px.value = 1.4 * G.dpr;
}

/* ───────── Frame loop ───────── */
function updateLights(dt) {
  G.glow += ((G.screenOn ? 1 : 0) - G.glow) * Math.min(1, dt * 5);
  const f = (1 + (Math.random() - 0.5) * 0.035) * (G.zoomDim = (G.zoomDim ?? 1) + ((view.zoomed ? 0.45 : 1) - (G.zoomDim ?? 1)) * Math.min(1, dt * 3));
  G.screenLight.intensity = 3 * G.glow * f;
  G.glowMat.color.setRGB(1.7 * G.glow * f, 1.8 * G.glow * f, 1.78 * G.glow * f);
  G.glowMesh.visible = G.glow > 0.01;
  G.finalPass.uniforms.time.value = G.t;
  G.finalPass.uniforms.vig.value += ((view.zoomed ? 0.35 : 1) - G.finalPass.uniforms.vig.value) * Math.min(1, dt * 3);
}
function adapt(dt) {
  if (G.adapted) return;
  G.perf.push(dt);
  if (G.perf.length < 100) return;
  const s = G.perf.slice(30), avg = s.reduce((a, b) => a + b, 0) / s.length;
  G.perf = [];
  if (avg > 0.024 && G.dpr > 1.01) { G.dpr = 1; resize(); }
  else { if (avg > 0.03) G.bloom.enabled = false; G.adapted = true; }
}
function tick(now) {
  requestAnimationFrame(tick);
  if (!HQ.on) return;
  const dt = Math.min(0.05, (now - (G.last || now)) / 1000);
  G.last = now; G.t += dt; U.time.value = G.t;
  if (G.anim) {
    const k = Math.min(1, (now - G.anim.t0) / G.anim.dur);
    G.cur = lerpState(G.anim.from, G.anim.to, easeIO(k));
    if (k >= 1) { G.anim = null; hqWrap.style.willChange = ''; }
  }
  applyCamera(G.cur); placeScreen(); updateLights(dt);
  const idle = view.zoomed && !G.anim;
  if (idle && ++G.frame % 3) return;
  G.composer.render(dt);
  if (!idle && !G.anim) adapt(dt);
}

/* ───────── Hooks the rest of the page calls ───────── */
function hqApi() {
  window.__hq = G;
  Object.assign(HQ, {
    ready: true,
    setActive(on) {
      if (on === HQ.on) return;
      HQ.on = on;
      if (on) {
        hqWrap.append(screenEl);
        resize(); G.cur = null; HQ.layout(false);
        applyCamera(G.cur); placeScreen(); G.composer.render(0);
        document.body.classList.add('hq');
        clearTimeout(G.doneT); G.doneT = setTimeout(() => HQ.on && document.body.classList.add('hq-done'), 950);
      } else {
        glassHome.prepend(screenEl);
        hqWrap.style.transform = '';
        document.body.classList.remove('hq', 'hq-done');
      }
    },
    layout(animate) {
      if (innerWidth !== G.w || innerHeight !== G.h) resize();
      const to = view.zoomed ? zoomState() : overviewState();
      if (animate && G.cur && !reduceMotion) {
        G.anim = { from: { ...G.cur }, to, t0: performance.now(), dur: 1450 };
        hqWrap.style.willChange = 'transform';
      } else { G.cur = to; G.anim = null; }
    },
    power(on) { G.screenOn = on; },
    key(code, down) {
      const k = G.keys.get(code); if (!k) return;
      G._m = G._m || new THREE.Matrix4();
      G._m.compose(V3(k.p.x, k.p.y - (down ? 0.0022 : 0), k.p.z), new THREE.Quaternion(), k.s);
      G.keyMesh.setMatrixAt(k.i, G._m); G.keyMesh.instanceMatrix.needsUpdate = true;
    },
    mouse(down) { if (G.mouseBtn) G.mouseBtn.position.y = G.mouseBtnY - (down ? 0.0012 : 0); }
  });
}
