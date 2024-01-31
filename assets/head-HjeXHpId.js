import{n as N,i as V,v as F,u as S,r as A,w as q,a as G,o as J,b as X,c as z,g as Q}from"./index-s6c4EPi7.js";function w(t,e={},o){for(const s in t){const n=t[s],r=o?`${o}:${s}`:s;typeof n=="object"&&n!==null?w(n,e,r):typeof n=="function"&&(e[r]=n)}return e}const Y={run:t=>t()},Z=()=>Y,W=typeof console.createTask<"u"?console.createTask:Z;function ee(t,e){const o=e.shift(),s=W(o);return t.reduce((n,r)=>n.then(()=>s.run(()=>r(...e))),Promise.resolve())}function te(t,e){const o=e.shift(),s=W(o);return Promise.all(t.map(n=>s.run(()=>n(...e))))}function T(t,e){for(const o of[...t])o(e)}class oe{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,o,s={}){if(!e||typeof o!="function")return()=>{};const n=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let c=r.message;c||(c=`${n} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(c)||(console.warn(c),this._deprecatedMessages.add(c))}if(!o.name)try{Object.defineProperty(o,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(o),()=>{o&&(this.removeHook(e,o),o=void 0)}}hookOnce(e,o){let s,n=(...r)=>(typeof s=="function"&&s(),s=void 0,n=void 0,o(...r));return s=this.hook(e,n),s}removeHook(e,o){if(this._hooks[e]){const s=this._hooks[e].indexOf(o);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,o){this._deprecatedHooks[e]=typeof o=="string"?{to:o}:o;const s=this._hooks[e]||[];delete this._hooks[e];for(const n of s)this.hook(e,n)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const o in e)this.deprecateHook(o,e[o])}addHooks(e){const o=w(e),s=Object.keys(o).map(n=>this.hook(n,o[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(e){const o=w(e);for(const s in o)this.removeHook(s,o[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...o){return o.unshift(e),this.callHookWith(ee,e,...o)}callHookParallel(e,...o){return o.unshift(e),this.callHookWith(te,e,...o)}callHookWith(e,o,...s){const n=this._before||this._after?{name:o,args:s,context:{}}:void 0;this._before&&T(this._before,n);const r=e(o in this._hooks?[...this._hooks[o]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&n&&T(this._after,n)}):(this._after&&n&&T(this._after,n),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const o=this._before.indexOf(e);o!==-1&&this._before.splice(o,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const o=this._after.indexOf(e);o!==-1&&this._after.splice(o,1)}}}}function se(){return new oe}function ne(t){return Array.isArray(t)?t:[t]}const re=["title","titleTemplate","script","style","noscript"],b=["base","meta","link","style","script","noscript"],ie=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],ae=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],I=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],le=typeof window<"u";function P(t){let e=9;for(let o=0;o<t.length;)e=Math.imul(e^t.charCodeAt(o++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function C(t){return t._h||P(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,o])=>`${e}:${String(o)}`).join(",")}`)}function D(t,e){const{props:o,tag:s}=t;if(ae.includes(s))return s;if(s==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const r of n)if(typeof o[r]<"u"){const c=String(o[r]);return e&&!e(c)?!1:`${s}:${r}:${c}`}return!1}function $(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function ce(t,e,o){const s={tag:t,props:await R(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return I.forEach(n=>{const r=typeof s.props[n]<"u"?s.props[n]:o[n];typeof r<"u"&&((!["innerHTML","textContent","children"].includes(n)||re.includes(s.tag))&&(s[n==="children"?"innerHTML":n]=r),delete s.props[n])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(n=>({...s,props:{...s.props,content:n}})):s}function fe(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function R(t,e){for(const o of Object.keys(t)){if(o==="class"){t[o]=fe(t[o]);continue}if(t[o]instanceof Promise&&(t[o]=await t[o]),!e&&!I.includes(o)){const s=String(t[o]),n=o.startsWith("data-");s==="true"||s===""?t[o]=n?"true":!0:t[o]||(n&&s==="false"?t[o]="false":delete t[o])}}return t}const de=10;async function ue(t){const e=[];return Object.entries(t.resolvedInput).filter(([o,s])=>typeof s<"u"&&ie.includes(o)).forEach(([o,s])=>{const n=ne(s);e.push(...n.map(r=>ce(o,r,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((o,s)=>(o._e=t._i,t.mode&&(o._m=t.mode),o._p=(t._i<<de)+s,o))}const M={base:-10,title:10},j={critical:-80,high:-10,low:20};function k(t){let e=100;const o=t.tagPriority;return typeof o=="number"?o:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in M&&(e=M[t.tag]),typeof o=="string"&&o in j?e+j[o]:e)}const pe=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],U=["onload","onerror","onabort","onprogress","onloadstart"],y="%separator";function v(t,e,o){if(typeof t!="string"||!t.includes("%"))return t;function s(c){let f;return["s","pageTitle"].includes(c)?f=e.pageTitle:c.includes(".")?f=c.split(".").reduce((a,i)=>a&&a[i]||void 0,e):f=e[c],typeof f<"u"?(f||"").replace(/"/g,'\\"'):!1}let n=t;try{n=decodeURI(t)}catch{}return(n.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(c=>{const f=s(c.slice(1));typeof f=="string"&&(t=t.replace(new RegExp(`\\${c}(\\W|$)`,"g"),(a,i)=>`${f}${i}`).trim())}),t.includes(y)&&(t.endsWith(y)&&(t=t.slice(0,-y.length).trim()),t.startsWith(y)&&(t=t.slice(y.length).trim()),t=t.replace(new RegExp(`\\${y}\\s*\\${y}`,"g"),y),t=v(t,{separator:o},o)),t}async function he(t){const e={tag:t.tagName.toLowerCase(),props:await R(t.getAttributeNames().reduce((o,s)=>({...o,[s]:t.getAttribute(s)}),{})),innerHTML:t.innerHTML};return e._d=D(e),e}async function ge(t,e={}){var u;const o=e.document||t.resolvedOptions.document;if(!o)return;const s={shouldRender:t.dirty,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const n=(await t.resolveTags()).map(l=>({tag:l,id:b.includes(l.tag)?C(l):l.tag,shouldRender:!0}));let r=t._dom;if(!r){r={elMap:{htmlAttrs:o.documentElement,bodyAttrs:o.body}};for(const l of["body","head"]){const d=(u=o==null?void 0:o[l])==null?void 0:u.children;for(const p of[...d].filter(h=>b.includes(h.tagName.toLowerCase())))r.elMap[p.getAttribute("data-hid")||C(await he(p))]=p}}r.pendingSideEffects={...r.sideEffects||{}},r.sideEffects={};function c(l,d,p){const h=`${l}:${d}`;r.sideEffects[h]=p,delete r.pendingSideEffects[h]}function f({id:l,$el:d,tag:p}){const h=p.tag.endsWith("Attrs");r.elMap[l]=d,h||(["textContent","innerHTML"].forEach(g=>{p[g]&&p[g]!==d[g]&&(d[g]=p[g])}),c(l,"el",()=>{r.elMap[l].remove(),delete r.elMap[l]})),Object.entries(p.props).forEach(([g,m])=>{const E=`attr:${g}`;if(g==="class")for(const _ of(m||"").split(" ").filter(Boolean))h&&c(l,`${E}:${_}`,()=>d.classList.remove(_)),!d.classList.contains(_)&&d.classList.add(_);else d.getAttribute(g)!==m&&d.setAttribute(g,m===!0?"":String(m)),h&&c(l,E,()=>d.removeAttribute(g))})}const a=[],i={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const l of n){const{tag:d,shouldRender:p,id:h}=l;if(p){if(d.tag==="title"){o.title=d.textContent;continue}l.$el=l.$el||r.elMap[h],l.$el?f(l):b.includes(d.tag)&&a.push(l)}}for(const l of a){const d=l.tag.tagPosition||"head";l.$el=o.createElement(l.tag.tag),f(l),i[d]=i[d]||o.createDocumentFragment(),i[d].appendChild(l.$el)}for(const l of n)await t.hooks.callHook("dom:renderTag",l,o,c);i.head&&o.head.appendChild(i.head),i.bodyOpen&&o.body.insertBefore(i.bodyOpen,o.body.firstChild),i.bodyClose&&o.body.appendChild(i.bodyClose),Object.values(r.pendingSideEffects).forEach(l=>l()),t._dom=r,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:n})}async function ye(t,e={}){const o=e.delayFn||(s=>setTimeout(s,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(s=>o(async()=>{await ge(t,e),delete t._domUpdatePromise,s()}))}function me(t){return e=>{var s,n;const o=((n=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:n.innerHTML)||!1;return o&&e.push(JSON.parse(o)),{mode:"client",hooks:{"entries:updated":function(r){ye(r,t)}}}}}const _e=["templateParams","htmlAttrs","bodyAttrs"],be={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const o=D(t)||(t.key?`${t.tag}:${t.key}`:!1);o&&(t._d=o)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const n=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,r=e[n];if(r){let f=s==null?void 0:s.tagDuplicateStrategy;if(!f&&_e.includes(s.tag)&&(f="merge"),f==="merge"){const a=r.props;["class","style"].forEach(i=>{a[i]&&(s.props[i]?(i==="style"&&!a[i].endsWith(";")&&(a[i]+=";"),s.props[i]=`${a[i]} ${s.props[i]}`):s.props[i]=a[i])}),e[n].props={...a,...s.props};return}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);return}else if(k(s)>k(r))return}const c=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(b.includes(s.tag)&&c===0){delete e[n];return}e[n]=s});const o=[];Object.values(e).forEach(s=>{const n=s._duped;delete s._duped,o.push(s),n&&o.push(...n)}),t.tags=o,t.tags=t.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},ve={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(o=>["titleTemplate","templateParams","title"].includes(o.tag)&&o._m==="server").forEach(o=>{e[o.tag]=o.tag.startsWith("title")?o.textContent:o.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},ke=["script","link","bodyAttrs"];function He(t){const e={},o={};return Object.entries(t.props).forEach(([s,n])=>{s.startsWith("on")&&typeof n=="function"?(U.includes(s)&&(e[s]=`this.dataset.${s} = true`),o[s]=n):e[s]=n}),{props:e,eventHandlers:o}}const Te=t=>({hooks:{"tags:resolve":function(e){for(const o of e.tags)if(ke.includes(o.tag)){const{props:s,eventHandlers:n}=He(o);o.props=s,Object.keys(n).length&&((o.props.src||o.props.href)&&(o.key=o.key||P(o.props.src||o.props.href)),o._eventHandlers=n)}},"dom:renderTag":function(e,o,s){if(!e.tag._eventHandlers)return;const n=e.tag.tag==="bodyAttrs"?o.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([r,c])=>{const f=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),i=`data-h-${a}`;if(s(e.id,f,()=>{}),e.$el.hasAttribute(i))return;e.$el.setAttribute(i,"");let u;const l=d=>{c(d),u==null||u.disconnect()};r in e.$el.dataset?l(new Event(r.replace("on",""))):U.includes(r)&&typeof MutationObserver<"u"?(u=new MutationObserver(d=>{d.some(h=>h.attributeName===`data-${r}`)&&(l(new Event(r.replace("on",""))),u==null||u.disconnect())}),u.observe(e.$el,{attributes:!0})):n.addEventListener(a,l),s(e.id,f,()=>{u==null||u.disconnect(),n.removeEventListener(a,l),e.$el.removeAttribute(i)})})}}}),we=["link","style","script","noscript"],Pe={hooks:{"tag:normalise":({tag:t})=>{t.key&&we.includes(t.tag)&&(t.props["data-hid"]=t._h=P(t.key))}}},Ee={hooks:{"tags:resolve":t=>{const e=o=>{var s;return(s=t.tags.find(n=>n._d===o))==null?void 0:s._p};for(const{prefix:o,offset:s}of pe)for(const n of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(o))){const r=e(n.tagPriority.replace(o,""));typeof r<"u"&&(n._p=r+s)}t.tags.sort((o,s)=>o._p-s._p).sort((o,s)=>k(o)-k(s))}}},Ae={meta:"content",link:"href",htmlAttrs:"lang"},Ce=t=>({hooks:{"tags:resolve":e=>{var f;const{tags:o}=e,s=(f=o.find(a=>a.tag==="title"))==null?void 0:f.textContent,n=o.findIndex(a=>a.tag==="templateParams"),r=n!==-1?o[n].props:{},c=r.separator||"|";delete r.separator,r.pageTitle=v(r.pageTitle||s||"",r,c);for(const a of o.filter(i=>i.processTemplateParams!==!1)){const i=Ae[a.tag];i&&typeof a.props[i]=="string"?a.props[i]=v(a.props[i],r,c):(a.processTemplateParams===!0||["titleTemplate","title"].includes(a.tag))&&["innerHTML","textContent"].forEach(u=>{typeof a[u]=="string"&&(a[u]=v(a[u],r,c))})}t._templateParams=r,t._separator=c,e.tags=o.filter(a=>a.tag!=="templateParams")}}}),$e={hooks:{"tags:resolve":t=>{const{tags:e}=t;let o=e.findIndex(n=>n.tag==="titleTemplate");const s=e.findIndex(n=>n.tag==="title");if(s!==-1&&o!==-1){const n=$(e[o].textContent,e[s].textContent);n!==null?e[s].textContent=n||e[s].textContent:delete e[s]}else if(o!==-1){const n=$(e[o].textContent);n!==null&&(e[o].textContent=n,e[o].tag="title",o=-1)}o!==-1&&delete e[o],t.tags=e.filter(Boolean)}}},Me={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let K;function je(t={}){const e=Oe(t);return e.use(me()),K=e}function O(t,e){return!t||t==="server"&&e||t==="client"&&!e}function Oe(t={}){const e=se();e.addHooks(t.hooks||{}),t.document=t.document||(le?document:void 0);const o=!t.document,s=()=>{f.dirty=!0,e.callHook("entries:updated",f)};let n=0,r=[];const c=[],f={plugins:c,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return r},use(a){const i=typeof a=="function"?a(f):a;(!i.key||!c.some(u=>u.key===i.key))&&(c.push(i),O(i.mode,o)&&e.addHooks(i.hooks||{}))},push(a,i){i==null||delete i.head;const u={_i:n++,input:a,...i};return O(u.mode,o)&&(r.push(u),s()),{dispose(){r=r.filter(l=>l._i!==u._i),e.callHook("entries:updated",f),s()},patch(l){r=r.map(d=>(d._i===u._i&&(d.input=u.input=l),d)),s()}}},async resolveTags(){const a={tags:[],entries:[...r]};await e.callHook("entries:resolve",a);for(const i of a.entries){const u=i.resolvedInput||i.input;if(i.resolvedInput=await(i.transform?i.transform(u):u),i.resolvedInput)for(const l of await ue(i)){const d={tag:l,entry:i,resolvedOptions:f.resolvedOptions};await e.callHook("tag:normalise",d),a.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a),a.tags},ssr:o};return[be,ve,Te,Pe,Ee,Ce,$e,Me,...(t==null?void 0:t.plugins)||[]].forEach(a=>f.use(a)),f.hooks.callHook("init",f),f}function Le(){return K}const xe=F.startsWith("3");function Se(t){return typeof t=="function"?t():S(t)}function H(t,e=""){if(t instanceof Promise)return t;const o=Se(t);return!t||!o?o:Array.isArray(o)?o.map(s=>H(s,e)):typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,n])=>s==="titleTemplate"||s.startsWith("on")?[s,S(n)]:[s,H(n,s)])):o}const We={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=H(e.input)}}},B="usehead";function Ie(t){return{install(o){xe&&(o.config.globalProperties.$unhead=t,o.config.globalProperties.$head=t,o.provide(B,t))}}.install}function De(t={}){t.domDelayFn=t.domDelayFn||(o=>N(()=>setTimeout(()=>o(),0)));const e=je(t);return e.use(We),e.install=Ie(e),e}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__unhead_injection_handler__";function Re(){if(x in L)return L[x]();const t=V(B);return t||Le()}function Ue(t,e={}){const o=e.head||Re();if(o)return o.ssr?o.push(t,e):Ke(o,t,e)}function Ke(t,e,o={}){const s=A(!1),n=A({});q(()=>{n.value=s.value?{}:H(e)});const r=t.push(n.value,o);return G(n,f=>{r.patch(f)}),Q()&&(J(()=>{r.dispose()}),X(()=>{s.value=!0}),z(()=>{s.value=!1})),r}function Be(t){const e=t;return e.headTags=t.resolveTags,e.addEntry=t.push,e.addHeadObjs=t.push,e.addReactiveEntry=(o,s)=>{const n=Ue(o,s);return typeof n<"u"?n.dispose:()=>{}},e.removeHeadObjs=()=>{},e.updateDOM=()=>{t.hooks.callHook("entries:updated",t)},e.unhead=t,e}function Ne(t,e){const o=De(e||{}),s=Be(o);return t&&s.push(t),s}const Fe=({use:t})=>{t(Ne())};export{Fe as install};
