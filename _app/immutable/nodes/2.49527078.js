import{s as C,f as N,n as w}from"../chunks/scheduler.8b5db029.js";import{S as I,i as O,g as h,s as y,m as P,h as _,j as T,y as E,c as L,n as G,f as u,k as f,a as j,x as b,z as V,o as Y,r as H,u as M,v as S,d as R,t as U,w as D}from"../chunks/index.8283314b.js";const B=""+new URL("../assets/gustavo-cv.6ef64ac2.pdf",import.meta.url).href;function W(v){let e,s,t,r=`<p>GUSTAVO</p> <p class="name svelte-19jkk0n">OLIVEIRA</p> <a class="download-cv svelte-19jkk0n" href="${B}" target="_blank">Download CV</a>`,l,n,a='<div class="fullstack-text svelte-19jkk0n"><p>FULL</p> <p>STACK</p></div> <p>WEB DEVELOPER</p>',o,i,d=v[0]?"Learn more":"Cover down",g,p,x,c;return{c(){e=h("section"),s=h("section"),t=h("div"),t.innerHTML=r,l=y(),n=h("div"),n.innerHTML=a,o=y(),i=h("button"),g=P(d),this.h()},l(m){e=_(m,"SECTION",{class:!0});var $=T(e);s=_($,"SECTION",{class:!0});var k=T(s);t=_(k,"DIV",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1eyc99x"&&(t.innerHTML=r),l=L(k),n=_(k,"DIV",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-19jmteg"&&(n.innerHTML=a),o=L(k),i=_(k,"BUTTON",{class:!0});var A=T(i);g=G(A,d),A.forEach(u),k.forEach(u),$.forEach(u),this.h()},h(){f(t,"class","into svelte-19jkk0n"),f(n,"class","text svelte-19jkk0n"),f(i,"class","cover-button svelte-19jkk0n"),f(s,"class","cover-inner svelte-19jkk0n"),f(e,"class",p=N(v[0]?"cover-down":"cover-up")+" svelte-19jkk0n")},m(m,$){j(m,e,$),b(e,s),b(s,t),b(s,l),b(s,n),b(s,o),b(s,i),b(i,g),x||(c=V(i,"click",v[1]),x=!0)},p(m,[$]){$&1&&d!==(d=m[0]?"Learn more":"Cover down")&&Y(g,d),$&1&&p!==(p=N(m[0]?"cover-down":"cover-up")+" svelte-19jkk0n")&&f(e,"class",p)},i:w,o:w,d(m){m&&u(e),x=!1,c()}}}function z(v,e,s){let t=!0;const r=()=>s(0,t=!t);if(typeof window<"u"){const l=document.querySelector("body"),n=d=>{let g=d.deltaY;t&&g>200&&s(0,t=!1),l&&l.scrollTop===0&&g<-200&&s(0,t=!0)};let a=0;const o=d=>{const g=d.touches[0].pageY;let p=a-g;t&&p>100&&s(0,t=!1),l&&l.scrollTop===0&&p<-100&&s(0,t=!0)},i=d=>{a=d.touches[0].pageY};window.addEventListener("wheel",n),window.addEventListener("touchstart",i),window.addEventListener("touchmove",o)}return[t,r]}class F extends I{constructor(e){super(),O(this,e,z,W,C,{})}}function q(v){let e,s='<p><a href="https://github.com/Gustavolmo" target="_blank">GitHub</a></p> <p><a href="https://www.linkedin.com/in/gustavo-l-m-de-oliveira-037243108/" target="_blank">LinkedIn</a></p> <p>lmo.gustavo@gmail.com</p>';return{c(){e=h("footer"),e.innerHTML=s,this.h()},l(t){e=_(t,"FOOTER",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-i4fkz2"&&(e.innerHTML=s),this.h()},h(){f(e,"class","footer svelte-17it44n")},m(t,r){j(t,e,r)},p:w,i:w,o:w,d(t){t&&u(e)}}}class J extends I{constructor(e){super(),O(this,e,null,q,C,{})}}function K(v){let e,s=`<article class="about-row svelte-1e5i9v8"><p class="about-title svelte-1e5i9v8">FOLLOWING YOUR PASSION</p> <p class="about-content svelte-1e5i9v8">5 years studying for my Master&#39;s in Marketing. 5 years working in administration, first at the
			Brazilian Embassy in Stockholm and later as an executive assistant for Klarna&#39;s CTO in 2022.
			It never felt right, so in January 2023 I decided to take a leap of faith and follow my
			passion. By September I landed my first developer job.</p> <p class="about-content svelte-1e5i9v8">Today I am collaborating at a start-up integrating state-managment with MobX, authetication, payment system, tests and UI.</p></article>`;return{c(){e=h("article"),e.innerHTML=s,this.h()},l(t){e=_(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-16o9gkr"&&(e.innerHTML=s),this.h()},h(){f(e,"class","background-content svelte-1e5i9v8")},m(t,r){j(t,e,r)},p:w,i:w,o:w,d(t){t&&u(e)}}}class X extends I{constructor(e){super(),O(this,e,null,K,C,{})}}const Q=""+new URL("../assets/guests-in-card.709cc3b5.png",import.meta.url).href,Z=""+new URL("../assets/pendel-hub.3961f90c.png",import.meta.url).href,ee=""+new URL("../assets/geo-notice.b0cfcc4c.png",import.meta.url).href,te=""+new URL("../assets/get-geo.2e989fcf.png",import.meta.url).href;function se(v){let e,s=`<article class="project-row svelte-1vvoam9"><img class="project-iamge svelte-1vvoam9" src="${Q}" alt="event-souce"/> <div><div class="card-header svelte-1vvoam9"><p class="project-title svelte-1vvoam9">EVENT-SAUCE</p> <a class="project-website svelte-1vvoam9" target="_blank" href="https://event-sauce.vercel.app/">Website</a></div> <p class="project-text svelte-1vvoam9">Vacation Project - 4 weeks</p> <p class="project-text svelte-1vvoam9">Guest managment tool synched with google calendar</p></div></article> <article class="project-row svelte-1vvoam9"><img class="project-iamge svelte-1vvoam9" src="${Z}" alt="pendel-hub"/> <div><div class="card-header svelte-1vvoam9"><p class="project-title svelte-1vvoam9">PENDEL-HUB</p> <a class="project-website svelte-1vvoam9" target="_blank" href="https://pendel-hub.vercel.app/">Website</a></div> <p class="project-text svelte-1vvoam9">Hackathon - 8 days</p> <p class="project-text svelte-1vvoam9">Prototype for a ride sharing app targeting commuters</p></div></article> <article class="project-row svelte-1vvoam9"><img class="project-iamge svelte-1vvoam9" src="${ee}" alt="geo-notice"/> <div><div class="card-header svelte-1vvoam9"><p class="project-title svelte-1vvoam9">GEO-NOTICE</p> <a class="project-website svelte-1vvoam9" target="_blank" href="https://gustavolmo.github.io/geo-notice-CLIENT/">Website</a></div> <p class="project-text svelte-1vvoam9">Hackathon - 8 hours</p> <p class="project-text svelte-1vvoam9">Anonymous chatroom app integrated with openAI&#39;s moderation api for user posts</p></div></article> <article class="project-row svelte-1vvoam9"><img class="project-iamge svelte-1vvoam9" src="${te}" alt="get-geo"/> <div><div class="card-header svelte-1vvoam9"><p class="project-title svelte-1vvoam9">GET-GEO</p> <a class="project-website svelte-1vvoam9" target="_blank" href="https://gustavolmo.github.io/get-geo/">Website</a></div> <p class="project-text svelte-1vvoam9">My first ever deployed app</p> <p class="project-text svelte-1vvoam9">Light-weight tool for collecting coordinates integrated with Google Maps</p></div></article>`;return{c(){e=h("article"),e.innerHTML=s,this.h()},l(t){e=_(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1xex9cc"&&(e.innerHTML=s),this.h()},h(){f(e,"class","project-content svelte-1vvoam9")},m(t,r){j(t,e,r)},p:w,i:w,o:w,d(t){t&&u(e)}}}class ae extends I{constructor(e){super(),O(this,e,null,se,C,{})}}const ne=""+new URL("../assets/profile-pic-circlewhite.cd108a04.png",import.meta.url).href;function oe(v){let e,s,t,r=`<img class="profile-pic svelte-e6xng1" src="${ne}" alt="profile-pic"/> <p class="content-section svelte-e6xng1">ABOUT</p>`,l,n,a,o,i,d="PROJECTS",g,p,x;return n=new X({}),p=new ae({}),{c(){e=h("section"),s=h("div"),t=h("header"),t.innerHTML=r,l=y(),H(n.$$.fragment),a=y(),o=h("div"),i=h("p"),i.textContent=d,g=y(),H(p.$$.fragment),this.h()},l(c){e=_(c,"SECTION",{class:!0});var m=T(e);s=_(m,"DIV",{class:!0});var $=T(s);t=_($,"HEADER",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-szbvu7"&&(t.innerHTML=r),l=L($),M(n.$$.fragment,$),$.forEach(u),m.forEach(u),a=L(c),o=_(c,"DIV",{class:!0});var k=T(o);i=_(k,"P",{class:!0,"data-svelte-h":!0}),E(i)!=="svelte-118ykma"&&(i.textContent=d),g=L(k),M(p.$$.fragment,k),k.forEach(u),this.h()},h(){f(t,"class","header svelte-e6xng1"),f(s,"class","area svelte-e6xng1"),f(e,"class","content-wrapper svelte-e6xng1"),f(i,"class","content-section --projects svelte-e6xng1"),f(o,"class","area svelte-e6xng1")},m(c,m){j(c,e,m),b(e,s),b(s,t),b(s,l),S(n,s,null),j(c,a,m),j(c,o,m),b(o,i),b(o,g),S(p,o,null),x=!0},p:w,i(c){x||(R(n.$$.fragment,c),R(p.$$.fragment,c),x=!0)},o(c){U(n.$$.fragment,c),U(p.$$.fragment,c),x=!1},d(c){c&&(u(e),u(a),u(o)),D(n),D(p)}}}class le extends I{constructor(e){super(),O(this,e,null,oe,C,{})}}function re(v){let e,s,t,r,l,n;return e=new F({}),t=new le({}),l=new J({}),{c(){H(e.$$.fragment),s=y(),H(t.$$.fragment),r=y(),H(l.$$.fragment)},l(a){M(e.$$.fragment,a),s=L(a),M(t.$$.fragment,a),r=L(a),M(l.$$.fragment,a)},m(a,o){S(e,a,o),j(a,s,o),S(t,a,o),j(a,r,o),S(l,a,o),n=!0},p:w,i(a){n||(R(e.$$.fragment,a),R(t.$$.fragment,a),R(l.$$.fragment,a),n=!0)},o(a){U(e.$$.fragment,a),U(t.$$.fragment,a),U(l.$$.fragment,a),n=!1},d(a){a&&(u(s),u(r)),D(e,a),D(t,a),D(l,a)}}}class ve extends I{constructor(e){super(),O(this,e,null,re,C,{})}}export{ve as component};
