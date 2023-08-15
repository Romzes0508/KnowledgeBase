"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3709],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const i={title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/firefox-certificates",id:"adguard-for-android/solving-problems/firefox-certificates",title:"Manual installation of the security certificate into the Firefox browser",description:"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/firefox-certificates.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/firefox-certificates",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/firefox-certificates",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/firefox-certificates.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Problems caused by multiple user profiles",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/multiple-user-profiles"},next:{title:"\u0421ertificate installation issues on devices with Android 11+",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/manual-certificate"}},d={},s=[{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"descarga la aplicaci\xf3n AdGuard"),".")),(0,n.kt)("p",null,"For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox."),(0,n.kt)("h3",{id:"method-1"},"Method 1"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This method works in Firefox for Android version 90.0 and later.")),(0,n.kt)("p",null,"To make Firefox trust the AdGuard certificate, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the browser.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"About Firefox"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg",alt:"About Firefox *mobile"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the Firefox logo five times.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Secret Settings"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg",alt:"Secret Settings *mobile"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Toggle ",(0,n.kt)("strong",{parentName:"p"},"Use third party CA certificates"),"."))),(0,n.kt)("h3",{id:"method-2"},"Method 2"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This method will only work on ",(0,n.kt)("strong",{parentName:"p"},"rooted")," devices.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; On the Windows platform, ",(0,n.kt)("strong",{parentName:"p"},"Samsung")," owners may need to install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the ",(0,n.kt)("strong",{parentName:"p"},"developer mode")," and enable ",(0,n.kt)("strong",{parentName:"p"},"USB debugging"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," app on your phone;"),(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section, find the sub-item ",(0,n.kt)("strong",{parentName:"li"},"About phone"),";"),(0,n.kt)("li",{parentName:"ul"},"Tap the ",(0,n.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,n.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,n.kt)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,n.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/releases/"},"Firefox")," browser (release version);")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"AdGuard settings")," (gear icon in the bottom right corner) \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"HTTPS filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Security certificate")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Instructions for Firefox")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Install for old versions"),";")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the folder ",(0,n.kt)("inlineCode",{parentName:"p"},"data/data/org.mozilla.firefox/files/mozilla")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell su")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cd data/data/..."),", then browse to the folder named ",(0,n.kt)("inlineCode",{parentName:"p"},"xxxxxxx.default")," and memorize its name;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the specified folder we are interested in two files:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cert9.db")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key4.db")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We need to move these files to a folder of the browser where the security certificate issue occurred:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The full command will look like this:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))),(0,n.kt)("p",{parentName:"li"},"In case you received the system notification ",(0,n.kt)("strong",{parentName:"p"},"permission denied"),", you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser."),(0,n.kt)("p",{parentName:"li"},"The full command should look something like this:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))),(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell su")," does not work, you should try ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell")," initially, and then ",(0,n.kt)("inlineCode",{parentName:"p"},"su"),"."))))}m.isMDXComponent=!0}}]);