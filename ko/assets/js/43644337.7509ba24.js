"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1047],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),i=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=i(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=i(a),u=n,N=k["".concat(d,".").concat(u)]||k[u]||s[u]||o;return a?r.createElement(N,p(p({ref:e},m),{},{components:a})):r.createElement(N,p({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3163:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(7462),n=(a(7294),a(4137));const o={title:"How to setup outbound proxy",sidebar_position:8},p=void 0,l={unversionedId:"adguard-for-android/solving-problems/outbound-proxy",id:"adguard-for-android/solving-problems/outbound-proxy",title:"How to setup outbound proxy",description:"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud574 \ubcf4\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/outbound-proxy.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/outbound-proxy",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/outbound-proxy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/outbound-proxy.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to setup outbound proxy",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to block ads in the YouTube app",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/youtube-ads"},next:{title:"How to protect AdGuard from being disabled by the system",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/background-work"}},d={},i=[{value:"Proxy configuration examples",id:"proxy-configuration-examples",level:2},{value:"Tor\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",id:"tor\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:3},{value:"PIA(Private Internet Access)\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",id:"piaprivate-internet-access\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:3},{value:"TorGuard\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",id:"torguard\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:3},{value:"NordVPN\uacfc \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",id:"nordvpn\uacfc-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:3},{value:"Shadowsock\uacfc \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",id:"shadowsock\uacfc-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:3},{value:"How to use AdGuard with Clash",id:"how-to-use-adguard-with-clash",level:3},{value:"\uc81c\ud55c",id:"\uc81c\ud55c",level:2}],m={toc:i};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc")," \ud574 \ubcf4\uc138\uc694.")),(0,n.kt)("p",null,"AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open ",(0,n.kt)("strong",{parentName:"p"},"Settings")," and then proceed to ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),"."),(0,n.kt)("h2",{id:"proxy-configuration-examples"},"Proxy configuration examples"),(0,n.kt)("p",null,"In this article we give examples of how to set up some of the most popular proxies to work with AdGuard."),(0,n.kt)("h3",{id:"tor\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},"Tor\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),'. Download "Orbot: Proxy with Tor" directly from ',(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=org.torproject.android&noprocess"},"Google Play")," or by tapping ",(0,n.kt)("strong",{parentName:"p"},"Integrate with Tor")," and then ",(0,n.kt)("strong",{parentName:"p"},"Install"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Orbot\uc744 \uc5f4\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uba54\uc778 \ud654\uba74\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc2dc\uc791")," \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go back to the ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," screen of AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tor\uc640 \ud1b5\ud569")," \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All the required fields will be pre-filled:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS4")," \ub610\ub294 ",(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"9050"))))),(0,n.kt)("p",{parentName:"li"},"Or you can tap ",(0,n.kt)("strong",{parentName:"p"},"Proxy server")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server"),", enter these values manually, and set Orbot as a default proxy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."),(0,n.kt)("p",{parentName:"li"},"Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard."))),(0,n.kt)("h3",{id:"piaprivate-internet-access\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},"PIA(Private Internet Access)\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a PIA VPN client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \uc11c\ubc84 \ucd94\uac00")," \ubc84\ud2bc\uc744 \ub204\ub974\uace0 \ub2e4\uc74c \ub370\uc774\ud130\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy-nl.privateinternetaccess.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You also need to fill out the ",(0,n.kt)("strong",{parentName:"p"},"Username/Password")," fields. To do so, log in to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.privateinternetaccess.com/pages/client-sign-in"},"Client Control Panel")," on the PIA website. Click the ",(0,n.kt)("strong",{parentName:"p"},"Generate Password")," button under the ",(0,n.kt)("strong",{parentName:"p"},"Generate PPTP/L2TP/SOCKS Password"),' section. A username starting with "x" and a random password will be shown. Use them to fill out the ',(0,n.kt)("strong",{parentName:"p"},"Proxy username")," and ",(0,n.kt)("strong",{parentName:"p"},"Proxy password")," fields in AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"torguard\uc640-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},"TorGuard\uc640 \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a TorGuard client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \uc11c\ubc84 \ucd94\uac00")," \ubc84\ud2bc\uc744 \ub204\ub974\uace0 \ub2e4\uc74c \ub370\uc774\ud130\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy.torguard.org")," or ",(0,n.kt)("em",{parentName:"td"},"proxy.torguard.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")," or ",(0,n.kt)("em",{parentName:"td"},"1085")," or ",(0,n.kt)("em",{parentName:"td"},"1090")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password")," fields, enter your proxy username and proxy password you have chosen at TorGuard signup.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"nordvpn\uacfc-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},"NordVPN\uacfc \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \uc11c\ubc84 \ucd94\uac00")," \ubc84\ud2bc\uc744 \ub204\ub974\uace0 \ub2e4\uc74c \ub370\uc774\ud130\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"any server from ",(0,n.kt)("a",{parentName:"em",href:"https://support.nordvpn.com/Connectivity/Proxy/"},"this list")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password")," fields, enter your NordVPN Username and Password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"shadowsock\uacfc-\ud568\uaed8-adguard\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},"Shadowsock\uacfc \ud568\uaed8 AdGuard\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you have already configured a Shadowsocks server and a client on your device.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You should remove Shadowsocks app from filtering before setting up the process (",(0,n.kt)("strong",{parentName:"p"},"App management")," \u2192\xa0",(0,n.kt)("strong",{parentName:"p"},"Shadowsocks")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),") to avoid infinite loops and drops.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," and fill in the fields:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-clash"},"How to use AdGuard with Clash"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a Clash client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Clash and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Route System Traffic")," and toggle the switch. This will set Clash to proxy mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"App management"),". Choose ",(0,n.kt)("strong",{parentName:"p"},"Clash For Android")," and disable ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),". This will eliminate traffic looping.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," and fill in the fields:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uac12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \uc720\ud615"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"7891"))))))),(0,n.kt)("h2",{id:"\uc81c\ud55c"},"\uc81c\ud55c"),(0,n.kt)("p",null,"There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have ",(0,n.kt)("strong",{parentName:"p"},"Ad blocking")," flag enabled in the ",(0,n.kt)("strong",{parentName:"p"},"Apps Management")," tab."))}s.isMDXComponent=!0}}]);