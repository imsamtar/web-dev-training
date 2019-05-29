var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function d(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e,n){t.style.setProperty(e,n)}let p;function h(t){p=t}function v(){const t=p;return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,r)})}}}const x=[],y=Promise.resolve();let b=!1;const _=[],w=[],M=[];function E(t){w.push(t)}function k(){const t=new Set;do{for(;x.length;){const t=x.shift();h(t),N(t.$$)}for(;_.length;)_.shift()();for(;w.length;){const e=w.pop();t.has(e)||(e(),t.add(e))}}while(x.length);for(;M.length;)M.pop()();b=!1}function N(t){t.fragment&&(t.update(t.dirty),s(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(E))}function T(t,n,o){const{fragment:c,on_mount:i,on_destroy:u,after_render:a}=t.$$;c.m(n,o),E(()=>{const n=i.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(E)}function j(t,e){t.$$.dirty||(x.push(t),b||(b=!0,y.then(k)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function C(e,r,o,c,i,u){const a=p;h(e);const l=r.props||{},f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:null};let g=!1;var m;f.ctx=o?o(e,l,(t,n)=>{f.ctx&&i(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),g&&j(e,t))}):l,f.update(),g=!0,s(f.before_render),f.fragment=c(f.ctx),r.target&&(r.hydrate?f.fragment.l((m=r.target,Array.from(m.childNodes))):f.fragment.c(),r.intro&&e.$$.fragment.i&&e.$$.fragment.i(),T(e,r.target,r.anchor),k()),h(a)}class A{$destroy(){var e,n;n=!0,(e=this).$$&&(s(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function O(t,e,n){const s=Object.create(t);return s.message=e[n],s.index=n,s}function L(t){var e,n,s,r,o,m,$=t.message;return{c(){e=a("li"),n=a("font"),s=l($),r=f(),(o=a("span")).textContent="x",n.className="svelte-1krdtsj",o.id=t.index,o.className="svelte-1krdtsj",e.className="svelte-1krdtsj",m=g(o,"click",t.deleteMessage)},m(t,u){i(t,e,u),c(e,n),c(n,s),c(e,r),c(e,o)},p(t,e){t.msgs&&$!==($=e.message)&&d(s,$)},d(t){t&&u(e),m()}}}function P(e){for(var n,s,r,o,g,m,p,h,v,x=e.msgs.length,y=e.msgs,b=[],_=0;_<y.length;_+=1)b[_]=L(O(e,y,_));return{c(){n=a("div"),s=a("h1"),r=l("Component # "),o=l(e.i),g=f(),m=a("ul");for(var t=0;t<b.length;t+=1)b[t].c();p=f(),h=a("p"),v=l(x),$(n,"width","50%")},m(t,e){i(t,n,e),c(n,s),c(s,r),c(s,o),c(n,g),c(n,m);for(var u=0;u<b.length;u+=1)b[u].m(m,null);c(n,p),c(n,h),c(h,v)},p(t,e){if(t.i&&d(o,e.i),t.deleteMessage||t.msgs){y=e.msgs;for(var n=0;n<y.length;n+=1){const s=O(e,y,n);b[n]?b[n].p(t,s):(b[n]=L(s),b[n].c(),b[n].m(m,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}t.msgs&&x!==(x=e.msgs.length)&&d(v,x)},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t)}}}function q(t,e,n){let{msgs:s,i:r}=e,o=v();return t.$set=(t=>{"msgs"in t&&n("msgs",s=t.msgs),"i"in t&&n("i",r=t.i)}),{msgs:s,i:r,deleteMessage:function(t){let e=Number.parseInt(t.srcElement.id);o("delmsg",{index:e})}}}class B extends A{constructor(t){super(),C(this,t,q,P,o,["msgs","i"])}}function D(t){var e,n,r,o,l,d,p,h,v,x=new B({props:{msgs:t.msgs,i:1}});x.$on("delmsg",t.delMessage);var y=new B({props:{msgs:t.msgs,i:2}});return y.$on("delmsg",t.delMessage),{c(){e=a("form"),n=a("input"),r=f(),o=a("input"),l=f(),d=a("div"),x.$$.fragment.c(),p=f(),y.$$.fragment.c(),m(n,"type","text"),m(o,"type","submit"),o.className="svelte-133nmu5",$(d,"display","flex"),v=[g(n,"input",t.input0_input_handler),g(e,"submit",t.newMessage)]},m(s,u){i(s,e,u),c(e,n),n.value=t.newMsgText,c(e,r),c(e,o),i(s,l,u),i(s,d,u),T(x,d,null),c(d,p),T(y,d,null),h=!0},p(t,e){t.newMsgText&&n.value!==e.newMsgText&&(n.value=e.newMsgText);var s={};t.msgs&&(s.msgs=e.msgs),x.$set(s);var r={};t.msgs&&(r.msgs=e.msgs),y.$set(r)},i(t){h||(x.$$.fragment.i(t),y.$$.fragment.i(t),h=!0)},o(t){x.$$.fragment.o(t),y.$$.fragment.o(t),h=!1},d(t){t&&(u(e),u(l),u(d)),x.$destroy(),y.$destroy(),s(v)}}}function I(t,e,n){let s=["a","b","c"],r="";return{msgs:s,newMsgText:r,delMessage:function(t){let e=t.detail.index;n("msgs",s=s.filter(t=>t!=s[e]))},newMessage:function(t){t.preventDefault(),n("msgs",s=[...s,r]),n("newMsgText",r="")},input0_input_handler:function(){r=this.value,n("newMsgText",r)}}}return new class extends A{constructor(t){super(),C(this,t,I,D,o,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map