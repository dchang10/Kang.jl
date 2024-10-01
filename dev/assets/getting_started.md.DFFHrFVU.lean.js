import{_ as r}from"./chunks/coordinate.C_naXwub.js";import{_ as o}from"./chunks/raytrace.D-ajFCJV.js";import{_ as l,c as i,a2 as n,j as t,a,o as s}from"./chunks/framework.DJ9CQGGt.js";const L=JSON.parse('{"title":"What is Krang.jl?","description":"","frontmatter":{},"headers":[],"relativePath":"getting_started.md","filePath":"getting_started.md","lastUpdated":null}'),h={name:"getting_started.md"},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.355ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.999ex",height:"1.95ex",role:"img",focusable:"false",viewBox:"0 -705 883.6 862.1","aria-hidden":"true"},m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.029ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.054ex",height:"1.649ex",role:"img",focusable:"false",viewBox:"0 -716 1350 729","aria-hidden":"true"},g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.029ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.17ex",height:"1.005ex",role:"img",focusable:"false",viewBox:"0 -431 517 444","aria-hidden":"true"},y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.029ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.92ex",height:"1.747ex",role:"img",focusable:"false",viewBox:"0 -759 848.5 772","aria-hidden":"true"};function T(Q,e,f,b,v,E){return s(),i("div",null,[e[19]||(e[19]=n('<h1 id="What-is-Krang.jl?" tabindex="-1">What is Krang.jl? <a class="header-anchor" href="#What-is-Krang.jl?" aria-label="Permalink to &quot;What is Krang.jl? {#What-is-Krang.jl?}&quot;">​</a></h1><p>Kerr Raytracer for Analytic Null Geodesics (Krang) is a raytracing code for geometries that are embedded in the Kerr spacetime. Krang solves the Kerr geodesic problem using the analytic solutions that have been derived from the Hamilton-Jacobi Formalism. This choice makes the code efficient and accurate, and is an ideal formalism to isolated sub images that manifest from strong lensing.</p><h2 id="philosophy" tabindex="-1">Philosophy <a class="header-anchor" href="#philosophy" aria-label="Permalink to &quot;Philosophy&quot;">​</a></h2><p>The current philosophy of Krang is to raytrace meshes. Meshes are made by &#39;painting&#39; materials onto geometries. These are then viewed by cameras that are sensitive to particular observables (<em>e.g. intensity and polarization</em>).</p><h2 id="meshes" tabindex="-1">Meshes <a class="header-anchor" href="#meshes" aria-label="Permalink to &quot;Meshes&quot;">​</a></h2><h3 id="materials" tabindex="-1">Materials <a class="header-anchor" href="#materials" aria-label="Permalink to &quot;Materials&quot;">​</a></h3><p>Marterials define the local physics necessary to properly render geometries. Materials may sometimes need additional information that can be stored in geometries by passing <code>attributes</code> to the geometry constructor (see <a href="./examples/polarization_example">Custom Dual Cone Model</a> for an example of passing attributes to geometries).</p><h3 id="geometries" tabindex="-1">Geometries <a class="header-anchor" href="#geometries" aria-label="Permalink to &quot;Geometries&quot;">​</a></h3><p>There are two basic geometries currently available in Krang.</p><ul><li><p><code>ConeGeometry</code> : The first is a spin axis centered cone with its apex placed at the coordinate origin.</p></li><li><p><code>MeshGeometry</code> : Geometry made from a triangular mesh. The mesh is embdedded by placing vertices at points in a Cartesian like coordinate system generated from the Boyer-Lindquist coordinates to a Cartesian like equivalent, and . There are convenience functions defines to <code>translate</code>, <code>rotate</code> and <code>scale</code> these geometries.</p></li></ul><h2 id="raytracing" tabindex="-1">Raytracing <a class="header-anchor" href="#raytracing" aria-label="Permalink to &quot;Raytracing&quot;">​</a></h2>',11)),t("p",null,[e[4]||(e[4]=a("Light rays in this module can be parameterized in terms of either the cones (")),t("mjx-container",d,[(s(),i("svg",p,e[0]||(e[0]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(502,-150) scale(0.707)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="stroke-width:3;"></path></g></g></g></g>',1)]))),e[1]||(e[1]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"θ"),t("mi",null,"s")])])],-1))]),e[5]||(e[5]=a("), or the minotime (")),t("mjx-container",m,[(s(),i("svg",c,e[2]||(e[2]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(833,0)"><path data-c="1D70F" d="M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z" style="stroke-width:3;"></path></g></g></g>',1)]))),e[3]||(e[3]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",{mathvariant:"normal"},"Δ"),t("mi",null,"τ")])],-1))]),e[6]||(e[6]=a("). Parameterization in terms of cones allows for images to be divided into sub images and ray traced individually."))]),e[20]||(e[20]=t("h3",{id:"Raytracing-conical-surfaces",tabindex:"-1"},[a("Raytracing conical surfaces "),t("a",{class:"header-anchor",href:"#Raytracing-conical-surfaces","aria-label":'Permalink to "Raytracing conical surfaces {#Raytracing-conical-surfaces}"'},"​")],-1)),t("p",null,[e[9]||(e[9]=a("Surfaces of constant ")),t("mjx-container",g,[(s(),i("svg",u,e[7]||(e[7]=[t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1)]))),e[8]||(e[8]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1))]),e[10]||(e[10]=a(" define spin axis centered cones whose apex lie at the origin of the Boyer-Lindquist coordinate system."))]),e[21]||(e[21]=t("p",null,[t("img",{src:r,alt:""})],-1)),e[22]||(e[22]=t("p",{style:{"text-align":"center"}},"n=0 and n=1 images of emission coordinates originating from conical surfaces.",-1)),e[23]||(e[23]=t("h3",{id:"Raytracing-with-rays-parameterized-by-Mino-time",tabindex:"-1"},[a("Raytracing with rays parameterized by Mino time "),t("a",{class:"header-anchor",href:"#Raytracing-with-rays-parameterized-by-Mino-time","aria-label":'Permalink to "Raytracing with rays parameterized by Mino time {#Raytracing-with-rays-parameterized-by-Mino-time}"'},"​")],-1)),t("p",null,[e[15]||(e[15]=a("Mino time, ")),t("mjx-container",x,[(s(),i("svg",k,e[11]||(e[11]=[t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D70F",d:"M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z",style:{"stroke-width":"3"}})])])],-1)]))),e[12]||(e[12]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"τ")])],-1))]),e[16]||(e[16]=a(", is a parameter monotonic in affine parameter, ")),t("mjx-container",y,[(s(),i("svg",w,e[13]||(e[13]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D70F" d="M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(604,363) scale(0.707)"><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z" style="stroke-width:3;"></path></g></g></g></g>',1)]))),e[14]||(e[14]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"τ"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1))]),e[17]||(e[17]=a(", defined by $ d\\tau = \\Sigma(r,\\theta)d\\tau', $ where $ \\Sigma(r,\\theta) = r^2 +a^2\\cos^2\\theta. $ ")),e[18]||(e[18]=t("img",{src:o,alt:""},null,-1))]),e[24]||(e[24]=n(`<p style="text-align:center;">Coordinate evolution with Mino time.</p><h3 id="cameras" tabindex="-1">Cameras <a class="header-anchor" href="#cameras" aria-label="Permalink to &quot;Cameras&quot;">​</a></h3><p>Cameras store pre-computed information that is constant for a given camera location. There are currently two types of cameras which can be used for either &#39;slow light&#39; or &#39;fast light&#39; raytracing.</p><ul><li><p><code>IntensityCamera</code> : Precomputes geodesic information necessary to solve the &#39;fast light&#39; raytracing problem.</p></li><li><p><code>SlowLightIntensityCamera</code> : Precomputes geodesic information necessary to solve the &#39;slow light&#39; raytracing problem.</p></li></ul><p>The GPU arrays can be passed to the cameras on construction to raytrace enforce raytracing on the GPU. An sketch of how to do this with a CUDA array is:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CUDA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CUDA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sze, sze)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">camera </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Krang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SlowLightIntensityCamera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(metric, θo, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ρmax, ρmax, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ρmax, ρmax, sze, A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CuArray)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Krang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">render!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(store, camera, scene)</span></span></code></pre></div>`,6))])}const F=l(h,[["render",T]]);export{L as __pageData,F as default};
