var On=Array.isArray,Vt=Array.prototype.indexOf,Sn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Pn=Array.prototype,Kt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,wt=4,at=8,st=16,R=32,M=64,B=128,w=256,U=512,v=1024,I=2048,N=4096,O=8192,W=16384,Zt=32768,yt=65536,Mn=1<<17,$t=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function Tt(t){return t===this.v}function zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!zt(t,this.v)}function Wt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Qt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Bn(){X=!0}const Un=1,Vn=2,Gn=4,Kn=8,Zn=16,$n=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,rn="[",en="[!",ln="]",At={},nr=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function rr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function er(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),Ct(a.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function J(){return!X||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function lr(t){return an(ut(t))}function ar(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function an(t){return u!==null&&!y&&(u.f&g)!==0&&(T===null?wn([t]):T.push(t)),t}function sr(t,n){return u!==null&&!y&&J()&&(u.f&(g|st))!==0&&(T===null||!T.includes(t))&&nn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),Rt(t,I),J()&&o!==null&&(o.f&v)!==0&&(o.f&(R|M))===0&&(m===null?yn([t]):m.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&I)===0&&(!e&&s===o||(x(s,n),(i&(v|w))!==0&&((i&g)!==0?Rt(s,N):tt(s))))}}let S=!1;function ur(t){S=t}let A;function b(t){if(t===null)throw xt(),At;return A=t}function or(){return b(C(A))}function fr(t){if(S){if(C(A)!==null)throw xt(),At;A=t}}function ir(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=C(n);n.remove(),n=e}}var pt,un,Dt,It;function _r(){if(pt===void 0){pt=window,un=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Dt=_t(n,"firstChild").get,It=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function C(t){return It.call(t)}function cr(t,n){if(!S)return rt(t);var r=rt(A);if(r===null)r=A.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),b(e),e}return b(r),r}function vr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?C(r):r}return A}function pr(t,n=1,r=!1){let e=S?A:t;for(var l;n--;)l=e,e=C(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=nt();return e===null?l==null||l.after(s):e.before(s),b(s),s}return b(e),e}function hr(t){t.textContent=""}function kt(t){var n=g|I,r=u!==null&&(u.f&g)!==0?u:null;return o===null||r!==null&&(r.f&w)!==0?n|=w:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function dr(t){const n=kt(t);return n.equals=mt,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)k(n[r])}}function on(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function fn(t){var n,r=o;Z(on(t));try{Ot(t),n=Bt(t)}finally{Z(r)}return n}function St(t){var n=fn(t),r=(D||(t.f&w)!==0)&&t.deps!==null?N:v;x(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Nt(t){o===null&&u===null&&Jt(),u!==null&&(u.f&w)!==0&&o===null&&Xt(),ot&&Wt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&M)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=Zt}catch(E){throw k(s),E}else n!==null&&tt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|B))===0;if(!i&&!l&&e&&(a!==null&&_n(s,a),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Er(t){Nt();var n=o!==null&&(o.f&R)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ct(t);return e}}function wr(t){return Nt(),cn(t)}function yr(t){const n=L(M,t,!0);return(r={})=>new Promise(e=>{r.outro?hn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Ct(t){return L(wt,t,!1)}function cn(t){return L(at,t,!0)}function gr(t,n=[],r=kt){const e=n.map(r);return vn(()=>t(...e.map(In)))}function vn(t,n=0){return L(at|st|n,t,!0)}function Tr(t,n=!0){return L(at|R,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&k(n),n=r}}function k(t,n=!0){var r=!1;if((n||(t.f&$t)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}bt(t,n&&!r),z(t,0),x(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hn(t,n){var r=[];Mt(t,r,!0),dn(r,()=>{k(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if((t.f&O)===0){if(t.f^=O,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&yt)!==0||(e.f&R)!==0;Mt(e,n,a?r:!1),e=l}}}function mr(t){Lt(t,!0)}function Lt(t,n){if((t.f&O)!==0){t.f^=O,(t.f&v)===0&&(t.f^=v),q(t)&&(x(t,I),tt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&R)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let F=[],et=[];function qt(){var t=F;F=[],Et(t)}function En(){var t=et;et=[],Et(t)}function Ar(t){F.length===0&&queueMicrotask(qt),F.push(t)}function ht(){F.length>0&&qt(),et.length>0&&En()}let j=!1,V=!1,G=null,H=!1,ot=!1;function dt(t){ot=t}let P=[];let u=null,y=!1;function K(t){u=t}let o=null;function Z(t){o=t}let T=null;function wn(t){T=t}let c=null,d=0,m=null;function yn(t){m=t}let Yt=1,$=0,D=!1;function jt(){return++Yt}function q(t){var p;var n=t.f;if((n&I)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&U)!==0,i=e&&o!==null&&!D,_=r.length;if(s||i){var E=t,Y=E.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(E)))&&(a.reactions??(a.reactions=[])).push(E);s&&(E.f^=U),i&&Y!==null&&(Y.f&w)===0&&(E.f^=w)}for(l=0;l<_;l++)if(a=r[l],q(a)&&St(a),a.wv>t.wv)return!0}(!e||o!==null&&!D)&&x(t,v)}return!1}function gn(t,n){for(var r=n;r!==null;){if((r.f&B)!==0)try{r.fn(t);return}catch{r.f^=B}r=r.parent}throw j=!1,t}function Tn(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&B)===0)}function Q(t,n,r,e){if(j){if(r===null&&(j=!1),Tn(n))throw t;return}r!==null&&(j=!0);{gn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?Ht(a,n,!1):n===a&&(r?x(a,I):(a.f&v)!==0&&x(a,N),tt(a))}}function Bt(t){var it;var n=c,r=d,e=m,l=u,a=D,s=T,i=f,_=y,E=t.f;c=null,d=0,m=null,D=(E&w)!==0&&(y||!H||u===null),u=(E&(R|M))===0?t:null,T=null,vt(t.ctx),y=!1,$++;try{var Y=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(z(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!D)for(h=d;h<p.length;h++)((it=p[h]).reactions??(it.reactions=[])).push(t)}else p!==null&&d<p.length&&(z(t,d),p.length=d);if(J()&&m!==null&&!y&&p!==null&&(t.f&(g|N|I))===0)for(h=0;h<m.length;h++)Ht(m[h],t);return l!==null&&$++,Y}finally{c=n,d=r,m=e,u=l,D=a,T=s,vt(i),y=_}}function mn(t,n){let r=n.reactions;if(r!==null){var e=Vt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(x(n,N),(n.f&(w|U))===0&&(n.f^=U),Ot(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function ft(t){var n=t.f;if((n&W)===0){x(t,v);var r=o,e=f,l=H;o=t,H=!0;try{(n&st)!==0?pn(t):bt(t),Pt(t);var a=Bt(t);t.teardown=typeof a=="function"?a:null,t.wv=Yt;var s=t.deps,i}catch(_){Q(_,t,r,e||t.ctx)}finally{H=l,o=r}}}function An(){try{Qt()}catch(t){if(G!==null)Q(t,G,null);else throw t}}function Ut(){try{for(var t=0;P.length>0;){t++>1e3&&An();var n=P,r=n.length;P=[];for(var e=0;e<r;e++){var l=n[e];(l.f&v)===0&&(l.f^=v);var a=Rn(l);xn(a)}}}finally{V=!1,G=null}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(W|O))===0)try{q(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Ut));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(M|R))!==0){if((r&v)===0)return;n.f^=v}}P.push(n)}function Rn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,l=(e&R)!==0,a=l&&(e&v)!==0;if(!a&&(e&O)===0){if((e&wt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,q(r)&&ft(r)}catch(E){Q(E,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Dn(t){var n;for(ht();P.length>0;)V=!0,Ut(),ht();return n}async function xr(){await Promise.resolve(),Dn()}function In(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){T!==null&&T.includes(t)&&tn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&w)===0&&(l.f^=w)}return r&&(l=t,q(l)&&St(l)),t.v}function Rr(t){var n=y;try{return y=!0,t()}finally{y=n}}const kn=-7169;function x(t,n){t.f=t.f&kn|n}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{xt as $,ar as A,ut as B,Vn as C,Mt as D,yt as E,hr as F,dn as G,en as H,O as I,Un as J,Zn as K,C as L,On as M,Gn as N,Ar as O,Kn as P,pr as Q,cr as R,fr as S,gr as T,Nn as U,K as V,Z as W,u as X,_r as Y,rn as Z,At as _,Rr as a,qn as a0,yr as a1,rr as a2,er as a3,wr as a4,Et as a5,Fn as a6,Dr as a7,kt as a8,un as a9,Qn as aa,tr as ab,ct as ac,Cn as ad,Pn as ae,Hn as af,nr as ag,sr as ah,_t as ai,jn as aj,Kt as ak,Ct as al,cn as am,Yn as an,Mn as ao,Wn as ap,mt as aq,Xn as ar,Ln as as,zn as at,$n as au,Jn as av,Dn as aw,lr as ax,xr as ay,zt as az,vn as b,f as c,Tr as d,Bn as e,k as f,A as g,S as h,vr as i,nt as j,rt as k,X as l,or as m,bn as n,In as o,dr as p,ur as q,ir as r,b as s,ln as t,Er as u,mr as v,hn as w,Sn as x,o as y,sn as z};
