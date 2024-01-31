import{u as E,c as S,a as A}from"./NftItem.vue_vue_type_script_setup_true_lang-iBtnEXw4.js";import{bR as n,bS as o,bT as s,j as w,b$ as l,cc as D,l as _,u as t,bW as k,r as b,ce as F,bU as q,bV as O,c2 as R,c3 as H,cd as K,c4 as U,c8 as W}from"./index-s6c4EPi7.js";import"./index-BqvQ59iz.js";const G={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},J=s("path",{fill:"currentColor",d:"m7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T5.426 12q0-.2.063-.375T5.7 11.3l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7zm6.6 0l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T12.026 12q0-.2.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7z"},null,-1),Q=[J];function X(i,c){return n(),o("svg",G,[...Q])}const Y={name:"material-symbols-keyboard-double-arrow-left-rounded",render:X},Z={class:"bg-gradient-linear bg-gradient-[277deg,#405FFF_28.05%,#9C70FF_88.11%] inline-flex items-center justify-center h-6.5 w-6.5 cursor-pointer rounded disabled:cursor-not-allowed disabled:opacity-50",type:"button"},ee={class:"inline-flex items-center justify-center h-6 w-6 shrink-0 rounded bg-background"},te=w({__name:"PaginationNav",props:{direction:{default:"prev"}},setup(i){return(c,e)=>{const a=Y;return n(),o("button",Z,[s("span",ee,[l(a,{class:D([[{"-scale-100":i.direction==="next"}],"h-5 w-5 shrink-0"])},null,8,["class"])])])}}}),ne={class:"inline-flex items-center justify-center space-x-6"},oe={class:"flex items-center justify-center space-x-2"},se={class:"inline-flex items-center justify-center bg-gradient-linear bg-gradient-[277deg,#405FFF_28.05%,#9C70FF_88.11%] h-6 w-12 rounded"},ie={class:"inline-flex items-center justify-center h-5.5 w-11.5 rounded bg-background font-bold"},ce={class:"font-bold uppercase"},le=w({__name:"Pagination",props:{total:null,limit:null,index:null,loading:{type:Boolean}},emits:["prev","next"],setup(i,{emit:c}){const e=i,a=c,g=_(()=>Math.ceil(e.total/e.limit)),p=_(()=>Math.floor(e.index/e.limit)+1),r=_(()=>e.index+e.limit-1),d=_(()=>e.index>e.limit),u=_(()=>r.value<e.total);function v(){d.value&&a("prev",r.value-e.limit*2+1,r.value-e.limit)}function y(){u.value&&a("next",r.value+1,Math.min(r.value+e.limit,e.total))}return(m,B)=>{const h=te;return n(),o("div",ne,[l(h,{disabled:!t(d)||i.loading,direction:"prev",onClick:v},null,8,["disabled"]),s("div",oe,[s("div",se,[s("div",ie,k(t(p)),1)]),s("span",ce,"of "+k(t(g)),1)]),l(h,{disabled:!t(u)||i.loading,direction:"next",onClick:y},null,8,["disabled"])])}}}),ae={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.765 17.757L12 21l-8-4.5v-9l2.236-1.258m2.57-1.445L12 3l8 4.5V16m-5.439-5.441L20 7.5M12 12v9m0-9L4 7.5M3 3l18 18"},null,-1),de=[re];function _e(i,c){return n(),o("svg",ae,[...de])}const ue={name:"tabler-box-off",render:_e},me={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},pe=s("path",{d:"M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z",fill:"currentColor"},null,-1),he=[pe];function fe(i,c){return n(),o("svg",me,[...he])}const xe={name:"bx-bxs-error",render:fe},ge={class:"min-h-screen py-16"},ve={key:0,class:"flex flex-col items-center justify-center pt-16 space-y-6"},ye={class:"text-lg text-red-500"},be={key:1,class:"flex flex-col items-center justify-center pt-16 space-y-6"},$e=s("span",{class:"text-lg"},"Loading...",-1),ke={key:2,class:"flex flex-col items-center justify-center pt-16 space-y-6"},we=s("p",{class:"text-xl"},"No items available",-1),Be={key:3,class:"text-center space-y-6"},Ce={class:"grid place-items-stretch gap-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4"},je={key:4,class:"flex flex-col items-center justify-center pt-16 space-y-6"},$=20,Me=w({__name:"explode",setup(i){const c=b(1),e=b($),{data:a,isFetched:g,isFetching:p,error:r,total:d,execute:u}=E(c,e,{refetch:!1}),v=_(()=>g.value&&a.value.length===0),y=_(()=>d.value&&d.value>$),m=b();function B(f){m.value=f}function h(){m.value=void 0,u()}function C(f,x){c.value=f,e.value=x,u()}return(f,x)=>{const N=xe,M=K,L=ue,P=A,I=le,V=U,z=S;return n(),o(q,null,[s("section",ge,[t(r)?(n(),o("div",ve,[l(N,{class:"h-12 w-12 text-yellow-600"}),s("span",ye,k(t(r)),1)])):F("",!0),t(p)?(n(),o("div",be,[l(M,{class:"h-12 w-12 animate-spin opacity-80"}),$e])):t(v)?(n(),o("div",ke,[l(L,{class:"h-24 w-24"}),we])):t(a).length>0?(n(),o("div",Be,[s("div",Ce,[(n(!0),o(q,null,O(t(a),(j,T)=>(n(),o("div",{key:T,class:"flex items-center justify-center"},[l(P,{item:j,onBuy:B},null,8,["item"])]))),128))]),t(y)&&t(d)?(n(),R(I,{key:0,index:t(c),limit:$,loading:t(p),total:t(d),onNext:C,onPrev:C},null,8,["index","loading","total"])):F("",!0)])):(n(),o("div",je,[l(V,{rounded:"",variant:"outlined",onClick:t(u)},{default:H(()=>[W("Explode")]),_:1},8,["onClick"])]))]),l(z,{item:t(m),onBuy:h,onClose:x[0]||(x[0]=j=>m.value=void 0)},null,8,["item"])],64)}}});export{Me as default};
