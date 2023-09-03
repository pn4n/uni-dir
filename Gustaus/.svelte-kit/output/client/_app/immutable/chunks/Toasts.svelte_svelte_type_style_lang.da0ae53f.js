import{w as b}from"./singletons.d03b53be.js";import{y as f}from"./scheduler.4be4d217.js";let D=1;const S=()=>D++,o={closable:!1,duration:5e3,infinite:!1,rich:!1},k={start:.75,opacity:0,duration:150},g=n=>{if(typeof n=="number")return n;if(!/ms|s$/.test(n))throw new Error("[SVoast] `duration` prop was given a string but not a leading identifier (ms/s).");const e=parseFloat(n.split(/ms|s/)[0]);return/(?=ms)(?!s)/.test(n)?e:e*1e3},v=(n,e)=>({...n,...e}),c=b([]),a=(n,e,{opts:r,id:t})=>{var T;const i=t||S(),s=((T=r==null?void 0:r.component)==null?void 0:T[1])||{},{closable:w,component:y,infinite:m,rich:I,onMount:u,onRemove:d,duration:h}=v(o,r),_=g(h),A={id:i,type:n,message:e,duration:_,closable:w,component:y,infinite:m,rich:I,...s};return typeof window<"u"&&(u==null||u()),E(A,i),!m&&n!=="promise"&&setTimeout(()=>{l(i),d==null||d()},_),i},E=(n,e)=>{f(c).find(r=>r.id===e)?c.update(r=>r.map(t=>t.id===e?{...t,...n}:t)):c.update(r=>r=f(M).includes("bottom")?[...r,n]:[n,...r])},l=n=>{f(c).find(e=>e.id===n)&&c.update(e=>e.filter(r=>r.id!==n))},O=n=>{f(c)[n]&&c.update(e=>e.filter((r,t)=>n!==t))},U=()=>{c.set([])},F=(n,e=o)=>a("info",n,{opts:e}),N=(n,e=o)=>a("attention",n,{opts:e}),P=(n,e=o)=>a("success",n,{opts:e}),B=(n,e=o)=>a("warning",n,{opts:e}),L=(n,e=o)=>a("error",n,{opts:e}),j=(n,e)=>{var t;if(!(n instanceof Promise))throw Error("`promise` is not a valid Promise.");const r=a("promise",e.loading,{opts:e});(t=e==null?void 0:e.onStart)==null||t.call(e),n.then(i=>{var s;a("success",e.success,{opts:e,id:r}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,i)}).catch(i=>{var s;a("error",e.error,{opts:e,id:r}),(s=e==null?void 0:e.onError)==null||s.call(e,i)}).finally(()=>{var i;e!=null&&e.infinite||setTimeout(()=>{l(r)},g(e.duration||o.duration)),(i=e==null?void 0:e.onFinish)==null||i.call(e)})},x=()=>{const{subscribe:n}=c;return{info:F,attention:N,success:P,warning:B,error:L,promise:j,removeById:l,removeByIndex:O,removeAll:U,subscribe:n}},q=x(),M=b("bottom-left");export{k as D,v as o,M as p,q as t};