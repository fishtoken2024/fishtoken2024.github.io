import{cf as I,cg as V,ch as W,ci as D,cj as G,ck as Y,cl as H,cm as J,j as A,bR as v,c2 as $,c3 as _,cn as K,u as h,co as R,c9 as O,b$ as x,cp as Q,bT as t,c6 as q,cq as X,cr as Z,bS as C,c5 as ee,cs as te,bW as k,ct as ne,cu as ae,cb as se,ce as B,J as ie,c4 as L,r as M,a as j,cc as re,c7 as oe,cd as le,cv as ue,cw as P,cx as N,l as ce,c8 as pe}from"./index-s6c4EPi7.js";import{b as de}from"./index-BqvQ59iz.js";function ye({abi:e,address:s,client:n}){const a=n,[o,u]=a?"public"in a&&"wallet"in a?[a.public,a.wallet]:"public"in a?[a.public,void 0]:"wallet"in a?[void 0,a.wallet]:[a,a]:[void 0,void 0],m=o!=null,w=u!=null,d={};let g=!1,y=!1,f=!1;for(const p of e)if(p.type==="function"?p.stateMutability==="view"||p.stateMutability==="pure"?g=!0:y=!0:p.type==="event"&&(f=!0),g&&y&&f)break;return m&&(g&&(d.read=new Proxy({},{get(p,l){return(...c)=>{const{args:i,options:r}=F(c);return I(o,V,"readContract")({abi:e,address:s,functionName:l,args:i,...r})}}})),y&&(d.simulate=new Proxy({},{get(p,l){return(...c)=>{const{args:i,options:r}=F(c);return I(o,W,"simulateContract")({abi:e,address:s,functionName:l,args:i,...r})}}})),f&&(d.createEventFilter=new Proxy({},{get(p,l){return(...c)=>{const i=e.find(b=>b.type==="event"&&b.name===l),{args:r,options:T}=S(c,i);return I(o,D,"createContractEventFilter")({abi:e,address:s,eventName:l,args:r,...T})}}}),d.getEvents=new Proxy({},{get(p,l){return(...c)=>{const i=e.find(b=>b.type==="event"&&b.name===l),{args:r,options:T}=S(c,i);return I(o,G,"getContractEvents")({abi:e,address:s,eventName:l,args:r,...T})}}}),d.watchEvent=new Proxy({},{get(p,l){return(...c)=>{const i=e.find(b=>b.type==="event"&&b.name===l),{args:r,options:T}=S(c,i);return I(o,Y,"watchContractEvent")({abi:e,address:s,eventName:l,args:r,...T})}}}))),w&&y&&(d.write=new Proxy({},{get(p,l){return(...c)=>{const{args:i,options:r}=F(c);return I(u,H,"writeContract")({abi:e,address:s,functionName:l,args:i,...r})}}})),(m||w)&&y&&(d.estimateGas=new Proxy({},{get(p,l){return(...c)=>{const{args:i,options:r}=F(c);return I(o??u,J,"estimateContractGas")({abi:e,address:s,functionName:l,args:i,...r,account:r.account??u.account})}}})),d.address=s,d.abi=e,d}function F(e){const s=e.length&&Array.isArray(e[0]),n=s?e[0]:[],a=(s?e[1]:e[0])??{};return{args:n,options:a}}function S(e,s){let n=!1;Array.isArray(e[0])?n=!0:e.length===1?n=s.inputs.some(u=>u.indexed):e.length===2&&(n=!0);const a=n?e[0]:void 0,o=(n?e[1]:e[0])??{};return{args:a,options:o}}const me=t("div",{class:"fixed inset-0 bg-gray-500/20 transition-opacity"},null,-1),fe={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},be={class:"min-h-full flex items-end justify-center p-4 text-center sm:items-center"},he={class:"absolute right-0 top-0 z-10 hidden pr-4 pt-4 sm:block"},ve=A({__name:"Modal",props:{visible:{type:Boolean}},emits:["close"],setup(e){const s={enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},n={enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"};return(a,o)=>{const u=Z;return v(),$(h(X),{show:e.visible,as:"template"},{default:_(()=>[x(h(K),{as:"div",class:"relative z-50",onClose:o[1]||(o[1]=m=>a.$emit("close"))},{default:_(()=>[x(h(R),O({as:"template"},s),{default:_(()=>[me]),_:1},16),t("div",fe,[t("div",be,[x(h(R),O({as:"template"},n),{default:_(()=>[x(h(Q),{class:"relative min-h-150 w-full max-w-screen-md transform overflow-hidden rounded-lg bg-[#151928] text-left shadow-xl transition-all sm:my-8"},{default:_(()=>[t("div",he,[x(u,{onClick:o[0]||(o[0]=m=>a.$emit("close"))})]),q(a.$slots,"default")]),_:3})]),_:3},16)])])]),_:3})]),_:3},8,["show"])}}}),we={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Te=t("path",{fill:"currentColor",d:"M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"},null,-1),_e=[Te];function ge(e,s){return v(),C("svg",we,[..._e])}const xe={name:"material-symbols-arrow-right-alt-rounded",render:ge},z=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"AddressInsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[],name:"FailedInnerCall",type:"error"},{inputs:[],name:"InvalidTokenId",type:"error"},{inputs:[{internalType:"uint256",name:"price",type:"uint256"}],name:"NotEnoughBalance",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"Minted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"uint256[]",name:"prices",type:"uint256[]"}],name:"addItem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLatestIncrementId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"setPriceBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newuri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"totalBalancesOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],Ce={class:"h-full w-full flex flex-col items-center justify-center bg-black/40 space-y-6"},Ie={class:"text-center"},ke={class:"text-2xl font-bold"},Me={class:"text-lg"},$e=t("td",{class:"px-4 py-1 font-bold"},"Id:",-1),Fe={class:"px-4 py-1 font-bold"},Be=t("td",{class:"px-4 py-1 font-bold"},"Price:",-1),Ae={class:"px-4 py-1 font-bold"},Ee=t("td",{class:"px-4 py-1 font-bold"},"Sold:",-1),Pe={class:"px-4 py-1 font-bold"},Se={class:"inline-flex items-center justify-center space-x-1"},Re=t("span",null,"BUY",-1),it=A({__name:"BuyModal",props:{item:null},emits:["close","buy"],setup(e,{emit:s}){const n=e,a=s,{isConnected:o,isConnecting:u,connect:m,client:w}=ee(),{wrap:d}=te();async function g(){o.value||await m(),await d(async()=>{if(!w.value||!n.item)return;const[y]=await w.value.getAddresses(),{request:f}=await w.value.simulateContract({address:"0xf5B1fbF0C3B58a444aC04397cEF39C90A9DCab2d",account:y,abi:z,chain:ie(),functionName:"mint",args:[BigInt(n.item.id)],value:n.item.price});return w.value.writeContract(f)}),n.item&&a("buy",n.item)}return(y,f)=>{const p=xe,l=L,c=ve;return v(),$(c,{visible:!!e.item,onClose:f[0]||(f[0]=i=>a("close"))},{default:_(()=>[e.item?(v(),C("div",{key:0,style:se({backgroundImage:`url('${e.item.metadata.image}')`}),class:"absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"},[t("div",Ce,[t("div",Ie,[t("p",ke,k(e.item.metadata.name),1),t("p",Me,k(e.item.metadata.description),1)]),t("table",null,[t("tbody",null,[t("tr",null,[$e,t("td",Fe,k(e.item.id),1)]),t("tr",null,[Be,t("td",Ae,k(("formatNativeToken"in y?y.formatNativeToken:h(ne))(e.item.price)),1)]),t("tr",null,[Ee,t("td",Pe,k(h(ae)(e.item.totalSupply)),1)])])]),x(l,{disabled:h(u),class:"w-36",size:"large",onClick:g},{default:_(()=>[t("span",Se,[Re,x(p,{class:"h-6 w-6"})])]),_:1},8,["disabled"])])],4)):B("",!0)]),_:1},8,["visible"])}}}),Oe=["alt","src"],Ne={key:1,class:"absolute left-0 top-0 h-full w-full bg-background"},qe={class:"h-full w-full flex items-center justify-center"},Le={class:"content invisible absolute left-0 top-0 h-full w-full from-white/0 to-blue bg-gradient-to-b opacity-0 transition-all duration-200 ease-in-out"},je={class:"h-full w-full flex items-end justify-start"},ze={class:"px-4 py-6 space-y-2"},Ue={class:"max-w-2/3 text-xl font-bold"},Ve={key:0},We={key:1,class:"space-y-4"},De=t("span",{class:"block h-4 min-w-48 w-full animate-pulse rounded-full bg-white/10"},null,-1),Ge=t("span",{class:"block h-4 min-w-48 w-full animate-pulse rounded-full bg-white/10"},null,-1),Ye=t("span",{class:"block h-4 min-w-48 w-full animate-pulse rounded-full bg-white/10"},null,-1),He=t("span",{class:"block h-4 min-w-48 w-full animate-pulse rounded-full bg-white/10"},null,-1),Je=[De,Ge,Ye,He],Ke={key:0,class:"flex items-center justify-start space-x-2"},Qe=["alt","src"],Xe={class:"text-[#90a0cc]"},Ze=A({__name:"ShopItem",props:{as:{type:Function,default:"div"},image:null,title:null,icon:null,name:null},setup(e){const s=e,n=M(!1);function a(){n.value=!0}return j(()=>s.image,()=>n.value=!1),(o,u)=>{const m=le;return v(),$(oe(e.as),{class:"rounded-bl-[2.9%] rounded-br-[33.34%] rounded-tl-[33.34%] rounded-tr-[2.9%] shop-item relative block overflow-hidden"},{default:_(()=>[e.image?(v(),C("img",{key:0,alt:e.title,class:re([{invisible:!h(n)},"absolute left-0 top-0 h-full w-full"]),src:e.image,onLoad:a},null,42,Oe)):B("",!0),!e.image||!h(n)?(v(),C("div",Ne,[t("div",qe,[x(m,{class:"h-8 w-8 animate-spin opacity-50"})])])):B("",!0),t("div",Le,[t("div",je,[t("div",ze,[t("p",Ue,[e.title&&h(n)?(v(),C("span",Ve,k(e.title),1)):(v(),C("span",We,Je))]),e.name&&e.icon&&h(n)?(v(),C("div",Ke,[t("img",{alt:e.name,src:e.icon,class:"h-10 w-10"},null,8,Qe),t("span",Xe,k(e.name),1)])):B("",!0),q(o.$slots,"default")])])])]),_:3})}}});function et(e,s={}){return de(e,s).json()}function rt(e,s,n={}){const{refetch:a=!0,immediate:o=!0}=n,u=ue(),m=M(!1),w=M(!1),d=M([]),g=M(),y=M(),f=ye({address:"0xf5B1fbF0C3B58a444aC04397cEF39C90A9DCab2d",abi:z,client:u});async function p(i){const r=BigInt(i),[T,b,E]=await Promise.all([f.read.uri([r]).then(U=>U.replace("{id}",String(i))),f.read.getPrice([r]),f.read.totalSupply([r]).then(Number)]);return{id:i,metadata:T,price:b,totalSupply:E}}async function l(){const i=Math.max(1,N(e)??1);let r=N(s);if(i!==r){const b=await f.read.getLatestIncrementId().then(Number);r=Math.min(b,r??b),g.value=b}if(i>r){d.value=[];return}const T=Array.from({length:r-i+1},(b,E)=>E+i);d.value=await Promise.all(T.map(p))}async function c(){m.value||(y.value=void 0,m.value=!0,await l().then(()=>w.value=!0).catch(i=>y.value=i).finally(()=>{m.value=!1}))}return j([P(a),P(e),P(s)],([i])=>i&&c(),{deep:!0}),o&&c(),{isFetching:m,isFetched:w,data:d,total:g,error:y,execute:c}}const tt={class:"w-full text-left"},nt={key:1,class:"block h-8 w-22 animate-pulse rounded-full bg-white/20"},ot=A({__name:"NftItem",props:{item:null},emits:["buy"],setup(e,{emit:s}){const n=e,a=s,o=ce(()=>n.item.metadata),{data:u,isFetching:m}=et(o,{refetch:!0,immediate:!0});function w(){u.value&&a("buy",{...n.item,metadata:u.value})}return(d,g)=>{var p,l;const y=L,f=Ze;return v(),$(f,{image:(p=h(u))==null?void 0:p.image,title:(l=h(u))==null?void 0:l.name,class:"active h-100 max-w-[320px] w-full"},{default:_(()=>[t("div",tt,[h(m)?(v(),C("span",nt)):(v(),$(y,{key:0,class:"w-22",rounded:"",size:"small",variant:"outlined",onClick:w},{default:_(()=>[pe("BUY")]),_:1}))])]),_:1},8,["image","title"])}}});export{xe as _,ot as a,et as b,it as c,rt as u};