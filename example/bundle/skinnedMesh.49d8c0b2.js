var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire5b70;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire5b70=a);var r=a("ilwiq"),i=a("RPVlj"),o=a("7lx9d"),s=a("5Rd1x"),l=a("4CEV9"),d=a("891vQ"),u=a("kp7Te"),c=a("jiuw3"),m=a("1EdOY");let p,w,g,h,x,b,f,v,M,P,y=0;const E={environmentIntensity:3,emissiveIntensity:100,bounces:3,samplesPerFrame:1,resolutionScale:1/window.devicePixelRatio,tiles:1,autoPause:!0,pause:!1,continuous:!1};function F(e){M.action.paused=e,E.pause=e,e&&S()}function R(e){return(new o.GLTFLoader).setMeshoptDecoder(u.MeshoptDecoder).loadAsync(e).then((e=>{e.scene.traverse((e=>{e.material&&(e.material.metalness=0,e.material.map=null)}));const t=e.animations,n=new r.AnimationMixer(e.scene),a=n.clipAction(t[0]);a.play(),a.paused=E.pause;const i=new r.Group;i.add(e.scene);const o=m.generateRadialFloorTexture(2048),s=new r.Mesh(new r.PlaneBufferGeometry,new r.MeshStandardMaterial({map:o,transparent:!0,color:14540253,roughness:.025,metalness:1}));s.scale.setScalar(50),s.rotation.x=-Math.PI/2,s.position.y=.075,i.add(s);return{scene:i,sceneGenerator:new l.DynamicPathTracingSceneGenerator(i),mixer:n,action:a}}))}function C(){const e=window.innerWidth,t=window.innerHeight,n=E.resolutionScale,a=window.devicePixelRatio;h.target.setSize(e*n*a,t*n*a),h.reset(),p.setSize(e,t),p.setPixelRatio(window.devicePixelRatio*n),x.aspect=e/t,x.updateProjectionMatrix()}function S(){const{scene:e,sceneGenerator:t}=M,n=t.generate(e);g=n;const{bvh:a,textures:r,materials:i}=n,o=a.geometry,s=h.material;s.bvh.updateFrom(a),s.normalAttribute.updateFrom(o.attributes.normal),s.tangentAttribute.updateFrom(o.attributes.tangent),s.uvAttribute.updateFrom(o.attributes.uv),s.materialIndexAttribute.updateFrom(o.attributes.materialIndex),s.textures.setTextures(p,2048,2048,r),s.materials.updateFrom(i,r),s.setDefine("MATERIAL_LENGTH",i.length),h.reset()}function T(){requestAnimationFrame(T);const e=Math.min(v.getDelta(),.03);if(M.mixer.update(e),M.scene.updateMatrixWorld(),E.autoPause?(y+=e,(!E.pause&&y>=2.5||E.pause&&y>=5)&&(F(!E.pause),y=0)):y=0,E.pause||E.continuous){!E.pause&&E.continuous&&S(),h.material.materials.updateFrom(g.materials,g.textures),h.material.environmentIntensity=E.environmentIntensity,h.material.environmentBlur=.35,h.material.bounces=E.bounces,x.updateMatrixWorld();for(let e=0,t=E.samplesPerFrame;e<t;e++)h.update();p.autoClear=!1,b.render(p),p.autoClear=!0,P.innerText=`Samples: ${Math.floor(h.samples)}`}else p.render(f,x)}window.innerWidth/window.innerHeight<.65&&(E.resolutionScale*=.5,E.tiles=2),async function(){p=new r.WebGLRenderer({antialias:!0}),p.toneMapping=r.ACESFilmicToneMapping,document.body.appendChild(p.domElement),f=new r.Scene,x=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.025,500),x.position.set(5.5,3.5,7.5),h=new l.PathTracingRenderer(p),h.camera=x,h.material=new l.PhysicalPathTracingMaterial,h.material.filterGlossyFactor=.25,h.tiles.set(E.tiles,E.tiles),b=new i.FullScreenQuad(new r.MeshBasicMaterial({map:h.target.texture,transparent:!0})),w=new s.OrbitControls(x,p.domElement),w.target.set(-.15,2,-.08),x.lookAt(w.target),w.addEventListener("change",(()=>{h.reset()})),w.update(),P=document.getElementById("samples"),v=new r.Clock;const e=new Promise((e=>{(new d.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(t=>{const n=new r.PMREMGenerator(p);n.compileCubemapShader();const a=n.fromEquirectangular(t);h.material.environmentMap=a.texture,t.mapping=r.EquirectangularReflectionMapping,f.background=t,f.environment=t,e()}))}));M="#morphtarget"===window.location.hash?await R("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb"):await R("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/trex/scene.gltf");f.add(M.scene),await e,document.getElementById("loading").remove(),C(),window.addEventListener("resize",C);const t=new c.GUI;t.add(E,"tiles",1,4,1).onChange((e=>{h.tiles.set(e,e)})),t.add(E,"samplesPerFrame",1,10,1),t.add(E,"environmentIntensity",0,10).onChange((()=>{h.reset()})),t.add(E,"bounces",1,5,1).onChange((()=>{h.reset()})),t.add(E,"resolutionScale",.1,1).onChange((()=>{C()})),t.add(E,"autoPause").listen(),t.add(E,"pause").onChange((e=>{E.autoPause=!1,F(e)})).listen(),t.add(E,"continuous").onChange((()=>{E.autoPause=!1})),T()}();
//# sourceMappingURL=skinnedMesh.49d8c0b2.js.map