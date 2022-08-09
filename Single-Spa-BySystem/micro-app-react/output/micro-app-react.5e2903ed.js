System.register(["react","react-dom","single-spa-react"],function(ye){"use strict";var X,Y,Z,C,T,w,H,J,ee,K,F,te,ne,y,ae,re;return{setters:[p=>{X=p.Children,Y=p.isValidElement,Z=p.Fragment,C=p.useContext,T=p.useMemo,w=p.createElement,H=p.createContext,J=p.useRef,ee=p.useEffect,K=p.useCallback,F=p.forwardRef,te=p.useState,ne=p.useLayoutEffect,y=p.default},p=>{ae=p.default},p=>{re=p.default}],execute:function(){function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var k;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(k||(k={}));var ie=function(e){return e},le="beforeunload",Pe="popstate";function Ee(e){e===void 0&&(e={});var t=e,n=t.window,a=n===void 0?document.defaultView:n,r=a.history;function i(){var c=a.location,h=c.pathname,g=c.search,S=c.hash,x=r.state||{};return[x.idx,ie({pathname:h,search:g,hash:S,state:x.usr||null,key:x.key||"default"})]}var l=null;function o(){if(l)d.call(l),l=null;else{var c=k.Pop,h=i(),g=h[0],S=h[1];if(d.length){if(g!=null){var x=u-g;x&&(l={action:c,location:S,retry:function(){N(x*-1)}},N(x))}}else j(c)}}a.addEventListener(Pe,o);var s=k.Pop,f=i(),u=f[0],v=f[1],m=se(),d=se();u==null&&(u=0,r.replaceState(p({},r.state,{idx:u}),""));function P(c){return typeof c=="string"?c:I(c)}function E(c,h){return h===void 0&&(h=null),ie(p({pathname:v.pathname,hash:"",search:""},typeof c=="string"?L(c):c,{state:h,key:xe()}))}function _(c,h){return[{usr:c.state,key:c.key,idx:h},P(c)]}function O(c,h,g){return!d.length||(d.call({action:c,location:h,retry:g}),!1)}function j(c){s=c;var h=i();u=h[0],v=h[1],m.call({action:s,location:v})}function ve(c,h){var g=k.Push,S=E(c,h);function x(){ve(c,h)}if(O(g,S,x)){var B=_(S,u+1),Q=B[0],D=B[1];try{r.pushState(Q,"",D)}catch{a.location.assign(D)}j(g)}}function ge(c,h){var g=k.Replace,S=E(c,h);function x(){ge(c,h)}if(O(g,S,x)){var B=_(S,u),Q=B[0],D=B[1];r.replaceState(Q,"",D),j(g)}}function N(c){r.go(c)}var ot={get action(){return s},get location(){return v},createHref:P,push:ve,replace:ge,go:N,back:function(){N(-1)},forward:function(){N(1)},listen:function(h){return m.push(h)},block:function(h){var g=d.push(h);return d.length===1&&a.addEventListener(le,oe),function(){g(),d.length||a.removeEventListener(le,oe)}}};return ot}function oe(e){e.preventDefault(),e.returnValue=""}function se(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(a){return a!==n})}},call:function(n){e.forEach(function(a){return a&&a(n)})}}}function xe(){return Math.random().toString(36).substr(2,8)}function I(e){var t=e.pathname,n=t===void 0?"/":t,a=e.search,r=a===void 0?"":a,i=e.hash,l=i===void 0?"":i;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function L(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U=H(null),z=H(null),M=H({outlet:null,matches:[]});function R(e,t){if(!e)throw new Error(t)}function Re(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?L(t):t,r=he(a.pathname||"/",n);if(r==null)return null;let i=ce(e);Se(i);let l=null;for(let o=0;l==null&&o<i.length;++o)l=We(i[o],r);return l}function ce(e,t,n,a){return t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a=""),e.forEach((r,i)=>{let l={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||R(!1),l.relativePath=l.relativePath.slice(a.length));let o=b([a,l.relativePath]),s=n.concat(l);r.children&&r.children.length>0&&(r.index===!0&&R(!1),ce(r.children,t,s,o)),!(r.path==null&&!r.index)&&t.push({path:o,score:Be(o,r.index),routesMeta:s})}),t}function Se(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$e(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Ce=/^:\w+$/,be=3,we=2,ke=1,Le=10,Oe=-2,ue=e=>e==="*";function Be(e,t){let n=e.split("/"),a=n.length;return n.some(ue)&&(a+=Oe),t&&(a+=we),n.filter(r=>!ue(r)).reduce((r,i)=>r+(Ce.test(i)?be:i===""?ke:Le),a)}function $e(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function We(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],s=l===n.length-1,f=r==="/"?t:t.slice(r.length)||"/",u=je({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},f);if(!u)return null;Object.assign(a,u.params);let v=o.route;i.push({params:a,pathname:b([r,u.pathname]),pathnameBase:pe(b([r,u.pathnameBase])),route:v}),u.pathnameBase!=="/"&&(r=b([r,u.pathnameBase]))}return i}function je(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Ne(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce((f,u,v)=>{if(u==="*"){let m=o[v]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return f[u]=Te(o[v]||""),f},{}),pathname:i,pathnameBase:l,pattern:e}}function Ne(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,o)=>(a.push(o),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}function Te(e,t){try{return decodeURIComponent(e)}catch{return e}}function He(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?L(e):e;return{pathname:n?n.startsWith("/")?n:Me(n,t):t,search:_e(a),hash:De(r)}}function Me(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function fe(e,t,n){let a=typeof e=="string"?L(e):e,r=e===""||a.pathname===""?"/":a.pathname,i;if(r==null)i=n;else{let o=t.length-1;if(r.startsWith("..")){let s=r.split("/");for(;s[0]==="..";)s.shift(),o-=1;a.pathname=s.join("/")}i=o>=0?t[o]:"/"}let l=He(a,i);return r&&r!=="/"&&r.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function Ve(e){return e===""||e.pathname===""?"/":typeof e=="string"?L(e).pathname:e.pathname}function he(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const b=e=>e.join("/").replace(/\/\/+/g,"/"),pe=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_e=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,De=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Je(e){$()||R(!1);let{basename:t,navigator:n}=C(U),{hash:a,pathname:r,search:i}=A(e),l=r;if(t!=="/"){let o=Ve(e),s=o!=null&&o.endsWith("/");l=r==="/"?t+(s?"/":""):b([t,r])}return n.createHref({pathname:l,search:i,hash:a})}function $(){return C(z)!=null}function W(){return $()||R(!1),C(z).location}function Ke(){$()||R(!1);let{basename:e,navigator:t}=C(U),{matches:n}=C(M),{pathname:a}=W(),r=JSON.stringify(n.map(o=>o.pathnameBase)),i=J(!1);return ee(()=>{i.current=!0}),K(function(o,s){if(s===void 0&&(s={}),!i.current)return;if(typeof o=="number"){t.go(o);return}let f=fe(o,JSON.parse(r),a);e!=="/"&&(f.pathname=b([e,f.pathname])),(s.replace?t.replace:t.push)(f,s.state)},[e,t,r,a])}function A(e){let{matches:t}=C(M),{pathname:n}=W(),a=JSON.stringify(t.map(r=>r.pathnameBase));return T(()=>fe(e,JSON.parse(a),n),[e,a,n])}function Fe(e,t){$()||R(!1);let{matches:n}=C(M),a=n[n.length-1],r=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let l=W(),o;if(t){var s;let m=typeof t=="string"?L(t):t;i==="/"||((s=m.pathname)==null?void 0:s.startsWith(i))||R(!1),o=m}else o=l;let f=o.pathname||"/",u=i==="/"?f:f.slice(i.length)||"/",v=Re(e,{pathname:u});return Ie(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},r,m.params),pathname:b([i,m.pathname]),pathnameBase:m.pathnameBase==="/"?i:b([i,m.pathnameBase])})),n)}function Ie(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,a,r)=>w(M.Provider,{children:a.route.element!==void 0?a.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,r+1))}}),null)}function G(e){R(!1)}function Ue(e){let{basename:t="/",children:n=null,location:a,navigationType:r=k.Pop,navigator:i,static:l=!1}=e;$()&&R(!1);let o=pe(t),s=T(()=>({basename:o,navigator:i,static:l}),[o,i,l]);typeof a=="string"&&(a=L(a));let{pathname:f="/",search:u="",hash:v="",state:m=null,key:d="default"}=a,P=T(()=>{let E=he(f,o);return E==null?null:{pathname:E,search:u,hash:v,state:m,key:d}},[o,f,u,v,m,d]);return P==null?null:w(U.Provider,{value:s},w(z.Provider,{children:n,value:{location:P,navigationType:r}}))}function ze(e){let{children:t,location:n}=e;return Fe(q(t),n)}function q(e){let t=[];return X.forEach(e,n=>{if(!Y(n))return;if(n.type===Z){t.push.apply(t,q(n.props.children));return}n.type!==G&&R(!1);let a={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(a.children=q(n.props.children)),t.push(a)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},V.apply(this,arguments)}function me(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Ae=["onClick","reloadDocument","replace","state","target","to"],Ge=["aria-current","caseSensitive","className","end","style","to","children"];function qe(e){let{basename:t,children:n,window:a}=e,r=J();r.current==null&&(r.current=Ee({window:a}));let i=r.current,[l,o]=te({action:i.action,location:i.location});return ne(()=>i.listen(o),[i]),w(Ue,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function Qe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Xe=F(function(t,n){let{onClick:a,reloadDocument:r,replace:i=!1,state:l,target:o,to:s}=t,f=me(t,Ae),u=Je(s),v=Ye(s,{replace:i,state:l,target:o});function m(d){a&&a(d),!d.defaultPrevented&&!r&&v(d)}return w("a",V({},f,{href:u,onClick:m,ref:n,target:o}))}),de=F(function(t,n){let{"aria-current":a="page",caseSensitive:r=!1,className:i="",end:l=!1,style:o,to:s,children:f}=t,u=me(t,Ge),v=W(),m=A(s),d=v.pathname,P=m.pathname;r||(d=d.toLowerCase(),P=P.toLowerCase());let E=d===P||!l&&d.startsWith(P)&&d.charAt(P.length)==="/",_=E?a:void 0,O;typeof i=="function"?O=i({isActive:E}):O=[i,E?"active":null].filter(Boolean).join(" ");let j=typeof o=="function"?o({isActive:E}):o;return w(Xe,V({},u,{"aria-current":_,className:O,ref:n,style:j,to:s}),typeof f=="function"?f({isActive:E}):f)});function Ye(e,t){let{target:n,replace:a,state:r}=t===void 0?{}:t,i=Ke(),l=W(),o=A(e);return K(s=>{if(s.button===0&&(!n||n==="_self")&&!Qe(s)){s.preventDefault();let f=!!a||I(l)===I(o);i(e,{replace:f,state:r})}},[l,i,o,a,r,n,e])}function Ze(){return y.createElement("div",null,"\u9996\u9875")}function et(){return y.createElement("div",null,"\u5173\u4E8E")}function tt(e){console.log("Micro-App-React props",e);const t=qe;return y.createElement(t,{basename:"/"},y.createElement(de,{to:"/"},"\u9996\u9875"),y.createElement(de,{to:"/about"},"\u5173\u4E8E"),y.createElement(ze,null,y.createElement(G,{path:"/",element:y.createElement(Ze,null)}),y.createElement(G,{path:"/about",element:y.createElement(et,null)})))}const nt=re({React:y,ReactDOM:ae,rootComponent:tt,errorBoundary(e,t,n){return y.createElement("div",null,"This renders when a catastrophic error occurs")}}),{bootstrap:at,mount:rt,unmount:it,update:lt}=nt;ye({bootstrap:at,mount:rt,unmount:it,update:lt})}}});
