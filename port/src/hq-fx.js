/* ───────── Painted textures ───────── */
function leafTexture() {
  return canvasTex(128, 512, (x, W, H) => {
    const g = x.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, '#20391f'); g.addColorStop(0.5, '#2f5530'); g.addColorStop(1, '#1d3620');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    for (let y = 10; y < H; y += 14 + (y % 7)) {
      x.strokeStyle = `rgba(150,190,120,${0.18 + (y % 5) * 0.03})`; x.lineWidth = 3 + (y % 4);
      x.beginPath(); for (let px = 8; px <= W - 8; px += 6) x.lineTo(px, y + Math.sin(px * 0.09 + y) * 5); x.stroke();
    }
    const e = x.createLinearGradient(0, 0, W, 0);
    e.addColorStop(0, '#c9c064'); e.addColorStop(0.07, 'rgba(201,192,100,.2)'); e.addColorStop(0.12, 'rgba(0,0,0,0)');
    e.addColorStop(0.88, 'rgba(0,0,0,0)'); e.addColorStop(0.93, 'rgba(201,192,100,.2)'); e.addColorStop(1, '#c9c064');
    x.fillStyle = e; x.fillRect(0, 0, W, H);
  });
}
function posterTexture() {
  return canvasTex(768, 1040, (x, W, H) => {
    x.fillStyle = '#f3f0e8'; x.fillRect(0, 0, W, H);
    const m = 58, pw = W - 2 * m, ph = H - 2 * m;
    x.save(); x.beginPath(); x.rect(m, m, pw, ph); x.clip();
    x.fillStyle = '#e9dcc0'; x.fillRect(m, m, pw, ph);
    x.fillStyle = '#d24f35'; x.beginPath(); x.arc(m + 120, m + 150, 250, 0, 7); x.fill();
    x.strokeStyle = '#1b1b19'; x.lineWidth = 42; x.beginPath(); x.arc(m + pw + 10, m + 380, 205, 0, 7); x.stroke();
    x.fillStyle = '#1b1b19'; x.fillRect(m, m + 470, pw, 34);
    x.fillStyle = '#d8a13e'; x.fillRect(m, m + 526, pw * 0.56, 34);
    x.fillStyle = '#1b1b19'; x.font = 'italic 92px "Instrument Serif", Georgia, serif';
    x.fillText('Systems', m + 34, m + ph - 170); x.fillText('that stay up.', m + 34, m + ph - 90);
    x.font = '500 20px "IBM Plex Mono", Menlo, monospace'; x.fillText('N° 07', m + 34, m + ph - 36);
    x.textAlign = 'right'; x.fillText('BROOKLYN · 1984', m + pw - 34, m + ph - 36);
    x.restore();
  });
}
function floppyTexture(label, sub) {
  return canvasTex(512, 512, (x, W) => {
    x.fillStyle = '#2a2a2d'; x.fillRect(0, 0, W, W);
    x.fillStyle = '#b9bdc4'; x.fillRect(130, 0, 250, 190);
    x.fillStyle = '#8e939b'; x.fillRect(300, 26, 50, 130);
    x.fillStyle = '#f2efe6'; x.fillRect(40, 240, 432, 250);
    x.strokeStyle = '#c9c4b6'; x.lineWidth = 2;
    for (let y = 330; y < 480; y += 34) { x.beginPath(); x.moveTo(60, y); x.lineTo(452, y); x.stroke(); }
    x.fillStyle = '#23324f'; x.font = 'italic 64px "Instrument Serif", Georgia, serif'; x.fillText(label, 66, 316);
    x.font = '500 22px "IBM Plex Mono", monospace'; x.fillStyle = '#6a6458'; x.fillText(sub, 70, 368);
  });
}
function appleTexture() {
  return canvasTex(120, 144, (x) => {
    const p = new Path2D('M15 11C10 7.5 2 9 2 19c0 8 5 16 9 16 2 0 2.5-1 4-1s2 1 4 1c4 0 8.5-7 9.5-11-3.5-1.5-5-4.5-4.5-7.5.5-2.5 2-4 3-4.7C24.5 8.5 19 7.5 15 11ZM15 9.5C15 5 18 1.5 22 1c0 4.5-3 8-7 8.5Z');
    x.scale(4, 4); x.clip(p);
    [['#61bb46', 0, 15.5], ['#fdb827', 15.5, 4], ['#f5821f', 19.5, 4], ['#e03a3e', 23.5, 4], ['#963d97', 27.5, 4], ['#009ddc', 31.5, 6]].forEach(([c, y, h]) => { x.fillStyle = c; x.fillRect(0, y, 30, h); });
  });
}

/* ───────── Shaders ───────── */
const VS_UV = 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }';

/* The window: an out-of-focus Brooklyn night drawn in the shader (bokeh
   lights, traffic, a blinking tower light) behind fogged glass. Each water
   drop is a tiny lens showing a sharp, upside-down copy of the city. */
function rainMaterial(aspect) {
  return new THREE.ShaderMaterial({
    uniforms: { time: U.time, asp: { value: aspect } },
    vertexShader: VS_UV,
    fragmentShader: `
uniform float time; uniform float asp; varying vec2 vUv;
${GLSL_NOISE}
vec3 h3(vec2 p){ vec3 q=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973)); q+=dot(q,q.yxz+33.33); return fract((q.xxy+q.yzz)*q.zyx); }
float skyH(float x, float dens, float base, float amp, float seed, float soft){
  float g=x*dens+seed, id=floor(g), f=fract(g);
  return mix(base+amp*hq_h2(vec2(id,seed)), base+amp*hq_h2(vec2(id+1.,seed)), smoothstep(1.-soft,1.,f));
}
vec3 bokeh(vec2 p, float blur, float cell, float seed, float dens, float base, float amp, float ss){
  vec3 acc=vec3(0.); vec2 id0=floor(p/cell); float r=mix(.09,.8,blur)*cell;
  for(int j=-2;j<=2;j++) for(int i=-2;i<=2;i++){
    vec2 id=id0+vec2(float(i),float(j)); vec3 n=h3(id*1.37+seed);
    if(n.z<.8) continue;
    vec2 c=(id+.25+.5*n.xy)*cell;
    if(c.y>skyH(c.x,dens,base,amp,ss,0.)-.01 || c.y<.045) continue;
    float d=length(p-c), rr=r*(.65+.55*n.y);
    float a=smoothstep(rr,rr*mix(.5,.86,blur),d)*(1.+.5*blur*smoothstep(rr*.45,rr*.95,d));
    vec3 tint=n.x<.16?vec3(.5,.68,1.):mix(vec3(1.,.5,.18),vec3(1.,.74,.4),n.y);
    acc+=tint*a*mix(1.5,.55,blur)*(.35+.65*fract(n.z*13.));
  }
  return acc;
}
vec3 traffic(vec2 p, float blur){
  vec3 acc=vec3(0.); float r=mix(.005,.028,blur);
  for(int k=0;k<7;k++){
    vec3 n=h3(vec2(float(k),11.)); float dir=n.x<.5?1.:-1.;
    float x=fract(n.z+time*(.025+.035*n.y)*dir)*(asp+.3)-.15, y=.016+.016*n.x;
    vec3 c=dir>0.?vec3(1.,.12,.06):vec3(1.,.93,.8);
    for(int s=0;s<2;s++){ float d=length(p-vec2(x+float(s)*.03,y)); acc+=c*smoothstep(r,r*.45,d)*mix(1.8,.7,blur); }
  }
  return acc;
}
vec3 city(vec2 p, float blur){
  float bw=mix(.003,.035,blur), soft=mix(.04,.5,blur);
  vec3 col=mix(vec3(.42,.2,.13),vec3(.02,.03,.075),smoothstep(.12,.55,p.y));
  col+=vec3(.16,.07,.04)*fbm(vec2(p.x*2.2+time*.006,p.y*4.))*smoothstep(.7,.2,p.y);
  float fh=skyH(p.x,9.,.2,.2,3.,soft);
  col=mix(col,vec3(.07,.055,.09),smoothstep(fh+bw,fh-bw,p.y)*.92);
  float nh=skyH(p.x,4.5,.09,.15,7.,soft);
  col=mix(col,vec3(.014,.016,.024),smoothstep(nh+bw,nh-bw,p.y));
  col+=bokeh(p,blur,.028,1.,9.,.2,.2,3.)*.4;
  col+=bokeh(p,blur,.045,2.,4.5,.09,.15,7.);
  col+=vec3(1.,.5,.22)*smoothstep(.07,0.,p.y)*.28;
  for(int k=0;k<3;k++){ float fk=float(k); vec2 c=vec2((.12+.34*fk)*asp,.055+.012*fk); col+=vec3(1.,.7,.35)*smoothstep(mix(.008,.04,blur),0.,length(p-c))*mix(2.,.6,blur); }
  col+=traffic(p,blur);
  vec2 av=vec2(.61*asp,skyH(.61*asp,9.,.2,.2,3.,0.)+.012);
  col+=vec3(1.,.08,.04)*smoothstep(mix(.004,.022,blur),0.,length(p-av))*step(.55,fract(time*.45))*2.;
  return col;
}
struct Drop{ float m; vec2 c; vec2 n; };
Drop pick(Drop a, Drop b){ if(b.m>a.m) return b; return a; }
Drop beads(vec2 st, float sc, float seed){
  vec2 g=st*sc, id=floor(g), f=fract(g)-.5; vec3 n=h3(id+seed);
  vec2 p=(n.xy-.5)*.6; float r=mix(.05,.18,n.z*n.z); vec2 d=f-p;
  Drop o; o.m=smoothstep(r,r*.7,length(d))*step(.45,n.z); o.c=(id+.5+p)/sc; o.n=d/r; return o;
}
Drop slide(vec2 st, float t, float cols, float seed, out float trail, out Drop td){
  float cw=1./cols, id=floor(st.x*cols); vec3 n=h3(vec2(id,seed));
  float y=1.2-fract(t*mix(.03,.075,n.x)+n.y)*1.5, w=cw*.18, ph=n.z*6.2831;
  float xc=(id+.5)*cw+sin(st.y*13.+ph)*w, xh=(id+.5)*cw+sin(y*13.+ph)*w;
  float rx=cw*mix(.17,.25,n.z); vec2 d=(st-vec2(xh,y))/vec2(rx,rx*1.3);
  Drop o; o.m=smoothstep(1.,.72,length(d)); o.c=vec2(xh,y); o.n=d;
  float above=st.y-y;
  trail=smoothstep(rx*.7,rx*.25,abs(st.x-xc))*smoothstep(0.,.01,above)*smoothstep(.35,0.,above);
  float k=cols*2.2, cell=st.y*k, tf=fract(cell)-.5;
  vec2 tl=vec2((st.x-xc)/(rx*.42),tf*2.4);
  td.m=smoothstep(1.,.68,length(tl))*trail*step(.5,h3(vec2(id,floor(cell)+seed)).x);
  td.c=vec2(xc,(floor(cell)+.5)/k); td.n=tl;
  return o;
}
void main(){
  vec2 uv=vUv, st=vec2(uv.x*asp,uv.y);
  float t1, t2; Drop d1, d2;
  Drop D=beads(st,48.,1.); D=pick(D,beads(st+3.7,30.,2.));
  D=pick(D,slide(st,time,16.,1.,t1,d1)); D=pick(D,d1);
  D=pick(D,slide(st,time*1.07,23.,2.,t2,d2)); D=pick(D,d2);
  float trail=max(t1,t2);
  vec3 col=city(st,1.);
  if(D.m>.002){
    vec3 lens=city(D.c-D.n*vec2(.05,.07),.42)*1.45+vec3(.03,.028,.03);
    float e=length(D.n);
    lens*=1.-.6*smoothstep(.72,1.,e);
    lens+=vec3(1.,.82,.6)*smoothstep(.26,0.,length(D.n-vec2(.36,.4)))*.75;
    lens+=vec3(.95,.78,.6)*smoothstep(.62,.95,e)*smoothstep(-.1,-.75,D.n.y)*.22;
    lens+=vec3(.55,.66,1.)*smoothstep(.22,0.,length(D.n-vec2(-.42,-.46)))*.1;
    col=mix(col,lens,D.m);
  }
  float fog=(1.-D.m)*(1.-trail*.85)*(.42+.3*smoothstep(.45,0.,uv.y));
  col=mix(col,col*.72+vec3(.022,.024,.032),fog);
  float edge=smoothstep(0.,.04,uv.x)*smoothstep(1.,.96,uv.x)*smoothstep(0.,.03,uv.y)*smoothstep(1.,.97,uv.y);
  col*=mix(.6,1.,edge);
  gl_FragColor=vec4(col,1.);
}`
  });
}

/* Soft volumetric cone under the lamp */
function beamMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { k: { value: 1 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    vertexShader: 'varying float vH; varying vec3 vN, vV; void main(){ vH=uv.y; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
    fragmentShader: 'uniform float k; varying float vH; varying vec3 vN, vV; void main(){ float f=pow(abs(dot(normalize(vN),normalize(vV))),2.); float a=f*pow(vH,1.6)*.05*k; gl_FragColor=vec4(vec3(1.,.8,.55)*a,1.); }'
  });
}

/* Dust motes drifting in the beam */
function dustPoints(h, R, count) {
  const pos = new Float32Array(count * 3), seed = new Float32Array(count * 3), r = rng(9);
  for (let i = 0; i < count; i++) {
    const t = 0.12 + r() * 0.88, rad = R * t * Math.sqrt(r()), a = r() * Math.PI * 2;
    pos.set([Math.cos(a) * rad, h / 2 - t * h, Math.sin(a) * rad], i * 3);
    seed.set([r(), r(), r()], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 3));
  const mat = new THREE.ShaderMaterial({
    uniforms: { time: U.time, px: { value: 1 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `uniform float time, px; attribute vec3 seed; varying float vA;
void main(){ vec3 p=position; p.x+=sin(time*.21+seed.x*6.28)*.012; p.y+=sin(time*.13+seed.y*6.28)*.018; p.z+=cos(time*.17+seed.z*6.28)*.012;
  vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
  gl_PointSize=px*(1.2+seed.x*2.2)/(-mv.z); vA=.25+.75*(.5+.5*sin(time*(.6+seed.y)+seed.z*40.)); }`,
    fragmentShader: 'varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d)*vA*.55; gl_FragColor=vec4(vec3(1.,.86,.65)*a,1.); }'
  });
  return new THREE.Points(geo, mat);
}

/* Steam curling off the coffee */
function steamMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { time: U.time }, transparent: true, depthWrite: false,
    vertexShader: VS_UV,
    fragmentShader: `uniform float time; varying vec2 vUv;
${GLSL_NOISE}
void main(){ float y=vUv.y; float x=vUv.x-.5;
  float n=fbm(vec2(x*3.+sin(y*4.-time*.7)*.4, y*2.6-time*.45));
  float n2=fbm(vec2(x*6.-time*.12, y*5.-time*.9));
  float sway=(n-.5)*.5*y;
  float w=mix(.08,.3,y);
  float a=smoothstep(w,0.,abs(x+sway))*smoothstep(0.,.12,y)*smoothstep(1.,.35,y)*smoothstep(.38,.8,n2)*.17;
  gl_FragColor=vec4(vec3(.92,.9,.87),a); }`
  });
}

/* Film finish: lens vignette, slight chromatic fringing, grain */
function finalShader() {
  return {
    uniforms: { tDiffuse: { value: null }, time: U.time, res: { value: new THREE.Vector2(1, 1) }, vig: { value: 1 } },
    vertexShader: VS_UV,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float time, vig; uniform vec2 res; varying vec2 vUv;
void main(){ vec2 c=vUv-.5; float d=dot(c,c); vec2 o=c*d*.005*vig;
  vec3 col=vec3(texture2D(tDiffuse,vUv+o).r, texture2D(tDiffuse,vUv).g, texture2D(tDiffuse,vUv-o).b);
  float v=smoothstep(.9,.2,length(c*vec2(1.,1.2))); col*=mix(1.,mix(.5,1.,v),vig);
  float g=fract(sin(dot(floor(vUv*res)+fract(time*7.3)*113., vec2(12.9898,78.233)))*43758.5453);
  col+=(g-.5)*.028;
  gl_FragColor=vec4(col,1.); }`
  };
}
