(()=>{"use strict";var e,t,r,a,o,n={},d={};function c(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=n,c.c=d,e=[],c.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,f=0;f<r.length;f++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](r[f])))?r.splice(f--,1):(d=!1,o<n&&(n=o));if(d){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(o,n),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({11:"1acc1457",53:"935f2afb",59:"1009c622",165:"7648ef86",319:"0e20d6ba",364:"b770c941",411:"dce85098",479:"f1d7c9d9",480:"e2c89501",514:"1be78505",671:"0e384e19",918:"17896441",991:"08bd3888",994:"d17a4caf"}[e]||e)+"."+{11:"375f4566",53:"562308db",59:"a9deb697",165:"50ed46a3",213:"aa53e171",248:"24aaf0ca",319:"487bfe00",364:"5a8aaf05",411:"a6b3b791",454:"a801abbf",479:"30682dd7",480:"f5ad2e85",514:"03d96e03",671:"632c17e1",760:"9398334b",918:"606548fc",991:"899dfc10",994:"effa5e1e"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="adguard-knowledge-base:",c.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,f;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){d=l;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var s=(t,r)=>{d.onerror=d.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),f&&document.head.appendChild(d)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/KnowledgeBase/",c.gca=function(e){return e={17896441:"918","1acc1457":"11","935f2afb":"53","1009c622":"59","7648ef86":"165","0e20d6ba":"319",b770c941:"364",dce85098:"411",f1d7c9d9:"479",e2c89501:"480","1be78505":"514","0e384e19":"671","08bd3888":"991",d17a4caf:"994"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=c.p+c.u(t),d=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],f=r[2],i=0;if(n.some((t=>0!==e[t]))){for(a in d)c.o(d,a)&&(c.m[a]=d[a]);if(f)var u=f(c)}for(t&&t(r);i<n.length;i++)o=n[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},r=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();