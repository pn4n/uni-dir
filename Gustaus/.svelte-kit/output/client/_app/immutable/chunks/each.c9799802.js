import{d as z,t as B}from"./index.5e2710db.js";import{r as C}from"./scheduler.4be4d217.js";function G(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function H(e,f){e.d(1),f.delete(e.key)}function D(e,f){B(e,1,1,()=>{f.delete(e.key)})}function I(e,f){e.f(),D(e,f)}function J(e,f,x,S,k,g,o,A,p,j,u,q){let i=e.length,c=g.length,d=i;const w={};for(;d--;)w[e[d].key]=d;const h=[],a=new Map,y=new Map,_=[];for(d=c;d--;){const n=q(k,g,d),s=x(n);let t=o.get(s);t?S&&_.push(()=>t.p(n,f)):(t=j(s,n),t.c()),a.set(s,h[d]=t),s in w&&y.set(s,Math.abs(d-w[s]))}const M=new Set,v=new Set;function m(n){z(n,1),n.m(A,u),o.set(n.key,n),u=n.first,c--}for(;i&&c;){const n=h[c-1],s=e[i-1],t=n.key,l=s.key;n===s?(u=n.first,i--,c--):a.has(l)?!o.has(t)||M.has(t)?m(n):v.has(l)?i--:y.get(t)>y.get(l)?(v.add(t),m(n)):(M.add(l),i--):(p(s,o),i--)}for(;i--;){const n=e[i];a.has(n.key)||p(n,o)}for(;c;)m(h[c-1]);return C(_),h}export{H as d,G as e,I as f,J as u};