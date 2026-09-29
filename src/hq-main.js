/* ───────── Assemble the scene and hand over from the CSS room ───────── */
function buildHQ() {
  const renderer = G.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  const cv = renderer.domElement;
  cv.id = 'hq'; cv.tabIndex = 0;
  cv.setAttribute('role', 'button'); cv.setAttribute('aria-label', 'The Macintosh on the desk. Press Enter to use it.');
  document.body.prepend(cv); document.body.append(hqWrap);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; // nothing that casts a shadow moves unless a key or the mouse is pressed
  renderer.shadowMap.needsUpdate = true;
  G.dpr = Math.min(devicePixelRatio || 1, 1.75);

  const scene = G.scene = new THREE.Scene();
  scene.background = new THREE.Color('#040504');
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(roomReflections(), 0.02, 0.005, 20).texture;
  scene.environmentIntensity = 1;
  pmrem.dispose();
  RectAreaLightUniformsLib.init();

  const cam = G.camera = new THREE.PerspectiveCamera(30, 1, 0.02, 30);
  cam.updateProjectionMatrix = function () {
    const f = this.userData.f; if (!f) return;
    const n = this.near;
    this.projectionMatrix.makePerspective(n * f.l, n * f.r, n * f.t, n * f.b, n, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  };

  makeMaterials();
  buildRoom(); buildMac(); buildKeyboard(); buildMouse(); buildLamp(); buildPlant(); buildMug(); buildFloppies(); buildPoster(); buildLights();

  const comp = G.composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType }));
  comp.addPass(scenePass(scene, cam));
  G.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.34, 0.42, 0.96);
  comp.addPass(G.bloom);
  G.finalPass = new ShaderPass(finalShader());
  comp.addPass(G.finalPass);

  const activate = () => { if (view.zoomed) return; if (power === 'off') powerOn(); else setZoom(true); };
  cv.addEventListener('click', activate);
  cv.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
  hqApi();
  HQ.power(power === 'on');
}

/* Phones never show the room, so three.js is only fetched once the window is wide enough to use it */
function whenWide(load) {
  if (!view.mobile) return load();
  addEventListener('resize', function grow() { if (!view.mobile) { removeEventListener('resize', grow); load(); } });
}
whenWide(async () => {
  try {
    const A = 'three/addons/';
    const m = await Promise.all(['three', A + 'geometries/RoundedBoxGeometry.js', A + 'postprocessing/EffectComposer.js', A + 'postprocessing/Pass.js',
      A + 'postprocessing/UnrealBloomPass.js', A + 'postprocessing/ShaderPass.js', A + 'lights/RectAreaLightUniformsLib.js'].map(s => import(s)));
    THREE = m[0];
    ({ RoundedBoxGeometry } = m[1]); ({ EffectComposer } = m[2]); ({ FullScreenQuad } = m[3]); ({ UnrealBloomPass } = m[4]);
    ({ ShaderPass } = m[5]); ({ RectAreaLightUniformsLib } = m[6]);
    await Promise.all([document.fonts.load('italic 40px "Instrument Serif"'), document.fonts.load('500 20px "IBM Plex Mono"')]).catch(() => {});
    buildHQ();
    requestAnimationFrame(tick);
    syncGfxBtn();
    layout(false);
    requestAnimationFrame(lightsUp);
  } catch (e) {
    console.warn('High graphics mode is unavailable:', e);
    HQ.failed = true;
    syncGfxBtn();
    lightsUp();
  }
});
