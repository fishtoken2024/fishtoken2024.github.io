import{_ as s}from"./index-s6c4EPi7.js";function W({darkMode:c=!1}={}){return()=>({label:"Coinbase Wallet",getIcon:async()=>(await s(()=>import("./icon-kE7JVW-7.js"),__vite__mapDeps([]))).default,getInterface:async({chains:l,appMetadata:d})=>{const[n]=l,{name:u,icon:_}=d||{},{default:e}=await s(()=>import("./index-qHp388q0.js").then(a=>a.i),__vite__mapDeps([0,1,2,3,4])),b=e.default?e.default:e,p=`data:image/svg+xml;base64,${window.btoa(_||"")}`,o=new b({appName:u||"",appLogoUrl:p,darkMode:c}),t=o.makeWeb3Provider(n.rpcUrl,parseInt(n.id)),f=t.on.bind(t);return t.on=(a,r)=>(f(a,i=>{if(a==="chainChanged"){r(`0x${i.toString(16)}`);return}r(i)}),t),{provider:t,instance:o}}})}export{W as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-qHp388q0.js","assets/index-s6c4EPi7.js","assets/index-mGxsnoPc.css","assets/events-aiOwJqkz.js","assets/timer-zw8cjXc2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
