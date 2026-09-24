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
  G.dpr = Math.min(devicePixelRatio || 1, 1.75);

  const scene = G.scene = new THREE.Scene();
  scene.background = new THREE.Color('#040504');
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.16;
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

  const comp = G.composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }));
  comp.addPass(new RenderPass(scene, cam));
  comp.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } }, vertexShader: VS_UV,
    fragmentShader: 'uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c=texture2D(tDiffuse,vUv); if(any(isnan(c))||any(isinf(c))) c=vec4(0.,0.,0.,1.); gl_FragColor=vec4(min(c.rgb,vec3(64.)),1.); }'
  }));
  G.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.42, 0.55, 1.05);
  comp.addPass(G.bloom);
  comp.addPass(new OutputPass());
  G.finalPass = new ShaderPass(finalShader());
  comp.addPass(G.finalPass);

  const activate = () => { if (view.zoomed) return; if (power === 'off') powerOn(); else setZoom(true); };
  cv.addEventListener('click', activate);
  cv.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
  hqApi();
  HQ.power(power === 'on');
}

(async () => {
  try {
    const A = 'three/addons/';
    const m = await Promise.all(['three', A + 'geometries/RoundedBoxGeometry.js', A + 'postprocessing/EffectComposer.js', A + 'postprocessing/RenderPass.js',
      A + 'postprocessing/UnrealBloomPass.js', A + 'postprocessing/ShaderPass.js', A + 'postprocessing/OutputPass.js',
      A + 'lights/RectAreaLightUniformsLib.js', A + 'environments/RoomEnvironment.js'].map(s => import(s)));
    THREE = m[0];
    ({ RoundedBoxGeometry } = m[1]); ({ EffectComposer } = m[2]); ({ RenderPass } = m[3]); ({ UnrealBloomPass } = m[4]);
    ({ ShaderPass } = m[5]); ({ OutputPass } = m[6]); ({ RectAreaLightUniformsLib } = m[7]); ({ RoomEnvironment } = m[8]);
    await Promise.all([document.fonts.load('italic 40px "Instrument Serif"'), document.fonts.load('500 20px "IBM Plex Mono"')]).catch(() => {});
    buildHQ();
    requestAnimationFrame(tick);
    syncGfxBtn();
    layout(false);
  } catch (e) {
    console.warn('High graphics mode is unavailable:', e);
    HQ.failed = true;
    syncGfxBtn();
  }
})();
