import{n as d,s as E}from"./scheduler.8b5db029.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(E(t,s)&&(t=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(t))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=e(r,i)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var h;const w=((h=globalThis.__sveltekit_1u1tr9t)==null?void 0:h.base)??"/gustavolmo-portfolio";var k;const A=((k=globalThis.__sveltekit_1u1tr9t)==null?void 0:k.assets)??w,R="1705339219444",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1},v=location.origin;function U(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function L(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function m(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function N(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=m(t)}}function P(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||T(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===v&&t.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function V(t){let e=null,n=null,o=null,r=null,i=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:c(e),noscroll:c(n),reload:c(i),replace_state:c(a)}}function g(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function i(a){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function S(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==R;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function T(t,e){return t.origin!==v||!t.pathname.startsWith(e)}function Y(t){t.client}const q={url:g({}),page:g({}),navigating:p(null),updated:S()};export{O as I,_ as P,x as S,I as a,P as b,V as c,q as d,w as e,N as f,U as g,Y as h,T as i,v as o,L as s};
