(self.webpackChunkself_create=self.webpackChunkself_create||[]).push([[659],{8674:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(758);function i(e,t){var n=(0,r.useRef)({deps:t,obj:void 0,initialized:!1}).current;return!1!==n.initialized&&function(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}(n.deps,t)||(n.deps=t,n.obj=e(),n.initialized=!0),n.obj}},3063:(e,t,n)=>{"use strict";n.d(t,{P7:()=>w,U_:()=>k});var r=n(3205),i=n(7294),a=n(758),o=n(2367),s=n(9755),l=n(9532),c=n(8008),u=n(5007),d=n(3171),f=n(9464),h=n(4218);function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var m=function(e){function t(e){var n,i,a,s;(0,o.A)(this,t),i=this,a=t,a=(0,c.A)(a),n=(0,l.A)(i,v()?Reflect.construct(a,[],(0,c.A)(i).constructor):a.apply(i,s)),(0,r.A)(n,"animationId",-1),(0,r.A)(n,"destroyed",!1),(0,r.A)(n,"handleWindowResize",(function(){n.renderer.setSize(n.domElement.clientWidth,n.domElement.clientHeight);var e=n.domElement.clientWidth/n.domElement.clientHeight;n.updateFrustum(e)})),n.domElement=e;var u=e.clientWidth,h=e.clientHeight;return n.renderer=new d.JeP,n.scene=new f.Z58,n.scene.background=new f.Q1f(657930),n.renderer.setSize(u,h),n.initCamera("orthographic"),n.domElement.append(n.renderer.domElement),n.initCameraControls(),n.addLight(),n.resize(),n}return(0,u.A)(t,e),(0,s.A)(t,[{key:"dispose",value:function(){this.renderer.dispose(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"initCameraControls",value:function(){var e=this,t=new h.N(this.camera,this.renderer.domElement);this.controls=t,t.addEventListener("change",(function(){e.render()}))}},{key:"initCamera",value:function(e){var t="perspective"===e,n=this.domElement.clientWidth/this.domElement.clientHeight;if(t)this.camera=new f.ubm(50,n,.1,2e3),this.camera.position.set(0,0,50);else{this.camera=new f.qUd(-500,500,500/n,-500/n,.1,2e3),this.camera.position.set(0,0,60)}}},{key:"addLight",value:function(){var e=new f.ZyN(16777215,1.5),t=new f.$p8(16777215,Math.PI);e.position.set(5,20,-5),t.position.set(0,20,0),this.add(t,e)}},{key:"setControlEnabled",value:function(e){this.controls.enabled=e}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"add",value:function(){var e;(e=this.scene).add.apply(e,arguments)}},{key:"cleanup",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);r.forEach((function(e){e.removeFromParent(),requestIdleCallback((function(){e.traverse((function(e){return function(e){null==e||e.dispatchEvent({type:"removed"}),e.geometry&&(e.geometry.dispose(),delete e.geometry)}(e)}))}))})),r.length&&this.render()}},{key:"resize",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"updateFrustum",value:function(e){if(this.camera instanceof f.qUd){var t=this.camera.right;this.camera.left=-t,this.camera.right=t,this.camera.top=t/e,this.camera.bottom=-t/e,this.camera.updateProjectionMatrix()}else this.camera instanceof f.ubm&&(this.camera.aspect=e,this.camera.updateProjectionMatrix())}},{key:"renderSync",value:function(){this.destroyed||(this.render(),this.dispatchEvent({type:"afterRender"}))}},{key:"animate",value:function(e){this.renderSync(),this.animationId=requestAnimationFrame(this.animate.bind(this,e)),e&&!this.destroyed&&e()}},{key:"cancelAnimate",value:function(){-1!==this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=-1),this.renderSync()}}])}(function(){return(0,s.A)((function e(){(0,o.A)(this,e),this.listeners=new Map,this.tracedTypeSet=new Set}),[{key:"addEventListener",value:function(e,t){var n=this.listeners.get(e);n||(n=[],this.listeners.set(e,n)),n.includes(t)||n.push(t)}},{key:"removeEventListener",value:function(e,t){var n=this.listeners.get(e);if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}}},{key:"hasEventListener",value:function(e,t){var n=this.listeners.get(e);return!!n&&n.includes(t)}},{key:"getEventListeners",value:function(e){return this.listeners.get(e)}},{key:"dispatchEvent",value:function(e){var t=this.listeners.get(e.type);if(void 0!==t){e.target=this;for(var n=t.slice(0),r=0,i=n.length;r<i;r+=1)n[r].call(this,e);e.target=null}this.log(e)}},{key:"trace",value:function(){var e=this;(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){return e.tracedTypeSet.add(t)}))}},{key:"log",value:function(e){if(this.tracedTypeSet.has(e.type)){var t=this.getEventListeners(e.type)||[];console.log("".concat(e.type," event executed ").concat(t.length," listeners")),console.log(t)}}}])}()),p=n(6070);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=(0,a.createContext)(null);function b(e){var t=(0,a.useState)(null),n=(0,i.A)(t,2),r=n[0],o=n[1],s=(0,a.useCallback)((function(e){o((function(){return e?new m(e):(null==r||r.dispose(),null)}))}),[]);(0,a.useEffect)((function(){return function(){r&&r.dispose()}}));var l="inner"===e.mode?e.style||{}:{position:"absolute",top:0,right:0,bottom:0,left:0,userSelect:"none"};return(0,p.jsxs)(w.Provider,{value:r,children:[(0,p.jsx)("div",{ref:s,style:l}),r&&e.children]})}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){return(0,p.jsx)(b,g(g({},t),{},{children:(0,p.jsx)(e,g({},n))}))}}},2659:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(758),i=n(8674),a=n(3063),o=n(2367),s=n(9755),l=n(7761),c=n.n(l),u=n(9464),d=function(){function e(t){(0,o.A)(this,e),this.renderer=t;var n=new u.bdM(20,100),r=new u.eaF(n,new u.V9B({color:"#c1c1c1"}));r.position.z=-1,this.renderer.add(r),this.renderer.render(),this.time=0}return(0,s.A)(e,[{key:"clean",value:function(){this.renderer.cleanup(this.lineMesh),this.time=0,this.renderer.cancelAnimate()}},{key:"draw",value:function(t){var n=e.createGeometry(t),r=e.createMaterial();this.material=r;var i=new u.eaF(n,r),a=e.createRainbow(),o=new u.GOR(a);o.wrapS=u.GJx,o.wrapT=u.GJx,r.uniforms.map.value=o,this.lineMesh=i,this.renderer.add(i),this.renderer.render(),this.time=0,this.renderer.animate(this.animation.bind(this))}},{key:"animation",value:function(){this.time+=.01,this.material&&(this.material.uniforms.time.value=this.time)}}],[{key:"createRainbow",value:function(){var e=document.createElement("canvas");e.width=20,e.height=50;var t=e.getContext("2d");if(t){var n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#FF0000"),n.addColorStop(.17,"#FF7F00"),n.addColorStop(.33,"#FFFF00"),n.addColorStop(.5,"#00FF00"),n.addColorStop(.67,"#0000FF"),n.addColorStop(.83,"#4B0082"),n.addColorStop(.95,"#8F00FF"),n.addColorStop(1,"#FF0000"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height)}return e}},{key:"createMaterial",value:function(){return new u.BKk({uniforms:{color:{value:new u.Q1f("#0000ff")},endColor:{value:new u.Q1f("#ffffff")},time:{value:0},map:{value:null},dash:{value:!1}},vertexShader:"\n      attribute float lineMiter;\n      attribute vec2 lineNormal; \n      attribute float pDistance;\n      attribute float allDistance;\n      varying float lineU;\n      varying float lineAll;\n      varying vec2 vUv;\n\n      void main() {\n        float thickness = 6.0;\n        lineU = pDistance;\n        lineAll = allDistance;\n        vUv = uv;\n        vec3 pointPos = position.xyz + vec3(lineNormal * thickness / 2.0 * lineMiter, 0.0);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pointPos, 1.0);\n      }\n      ",fragmentShader:"\n        uniform vec3 color;\n        uniform vec3 endColor;\n        uniform float time;\n        uniform sampler2D map;\n        uniform bool dash; \n        varying float lineU;\n        varying float lineAll;\n        varying vec2 vUv;\n\n        void main() {\n            float flowOffset = (sin(time + lineU/lineAll * 6.28) + 1.0) * 0.5;\n            vec3 aColor = mix(color, endColor, flowOffset);\n            float dashSize = 3.;\n            float gapSize = 1.;\n            // 虚线\n            float offset = time * 2.0;\n            if(dash && mod(lineU + offset, (dashSize + gapSize)) > dashSize) {\n              discard;\n            }\n           \n            // 如果有贴图就使用贴图颜色，否则使用aColor\n            // 给纹理采样添加流动效果\n            vec2 flowUV = vUv;\n            flowUV.y = mod(flowUV.y + time * 0.5, 1.0); // 纹理Y方向流动\n            vec4 texColor = texture2D(map, flowUV);\n            float len = length(texColor);\n            if ( len > 0.) {\n              gl_FragColor = vec4(texColor.rgb, 1.0);\n            } else {\n              gl_FragColor = vec4(aColor, 1.0);\n            }\n        }\n      "})}},{key:"createGeometry",value:function(e){for(var t=c()(e),n=[],r=[],i=[],a=[],o=0,s=0,l=0;l<e.length;l+=1){var d=s,f=e[l];r.push(f,f);var h=l/(e.length-1);a.push(0,h,1,h),l!==e.length-1&&n.push(d+2,d+1,d+0,d+3,d+1,d+2);var v=0;if(l>0){var m=e[l-1];v=Math.sqrt((m[0]-f[0])*(m[0]-f[0])+(m[1]-f[1])*(m[1]-f[1]))}o+=v,i.push(o,o),s+=2}var p=[],y=[];t.forEach((function(e){var t=e[0],n=e[1];p.push(t[0],t[1],t[0],t[1]),y.push(-n,n)}));var g=new u.LoY;return g.setAttribute("position",new u.qtW(r.flat(),3)),g.setAttribute("lineNormal",new u.qtW(p,2)),g.setAttribute("lineMiter",new u.qtW(y,1)),g.setAttribute("pDistance",new u.qtW(i,1)),g.setAttribute("allDistance",new u.qtW(i.map((function(){return o})),1)),g.setAttribute("uv",new u.qtW(a,2)),g.setIndex(new u.A$4(n,1)),g}}])}(),f=n(6070);const h=(0,a.U_)((function(){var e=(0,r.useContext)(a.P7),t=(0,i.A)((function(){return new d(e)}),[]);return(0,r.useEffect)((function(){return t.draw([[-10,0,0],[0,10,0],[10,0,0],[15,5,0]]),function(){t.clean()}}),[]),(0,f.jsx)("div",{})}))},1516:e=>{e.exports=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}},9624:e=>{e.exports=function(e,t){return e[0]*t[0]+e[1]*t[1]}},6996:e=>{e.exports=function(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e}},9731:e=>{e.exports=function(e,t,n){return e[0]=t,e[1]=n,e}},951:e=>{e.exports=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}},619:(e,t,n)=>{var r=n(1516),i=n(9731),a=n(6996),o=n(951),s=n(9624),l=[0,0];e.exports.computeMiter=function(e,t,n,o,c){return r(e,n,o),a(e,e),i(t,-e[1],e[0]),i(l,-n[1],n[0]),c/s(t,l)},e.exports.normal=function(e,t){return i(e,-t[1],t[0]),e},e.exports.direction=function(e,t,n){return o(e,t,n),a(e,e),e}},7761:(e,t,n)=>{var r=n(619),i=[0,0],a=[0,0],o=[0,0],s=[0,0];function l(e,t,n){e.push([[t[0],t[1]],n])}e.exports=function(e,t){var n=null,c=[];t&&(e=e.slice()).push(e[0]);for(var u=e.length,d=1;d<u;d++){var f=e[d-1],h=e[d],v=d<e.length-1?e[d+1]:null;if(r.direction(i,h,f),n||(n=[0,0],r.normal(n,i)),1===d&&l(c,n,1),v){r.direction(a,v,h);var m=r.computeMiter(o,s,i,a,1);l(c,s,m)}else r.normal(n,i),l(c,n,1)}if(e.length>2&&t){var p=e[u-2],y=e[0],g=e[1];r.direction(i,y,p),r.direction(a,g,y),r.normal(n,i);var w=r.computeMiter(o,s,i,a,1);c[0][0]=s.slice(),c[u-1][0]=s.slice(),c[0][1]=w,c[u-1][1]=w,c.pop()}return c}}}]);