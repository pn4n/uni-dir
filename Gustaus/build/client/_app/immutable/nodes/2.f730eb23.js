import{s as Z,n as R}from"../chunks/scheduler.b9582851.js";import{S as ee,i as te,g as d,m as B,s as D,h as v,j as w,n as J,f as r,c as I,E as le,k as y,a as x,D as f,L as K,H as X,G as Y,e as N}from"../chunks/index.99c81ec3.js";import{e as T}from"../chunks/each.746c78c9.js";import{c as ae}from"../chunks/context.872a4bfa.js";import{s as M}from"../chunks/utils.43e38468.js";function O(c,l,s){const a=c.slice();return a[1]=l[s],a}function Q(c,l,s){const a=c.slice();return a[1]=l[s],a}function U(c){let l,s,a=c[1]+"";return{c(){l=d("p"),s=new X(!1),this.h()},l(o){l=v(o,"P",{class:!0});var _=w(l);s=Y(_,!1),_.forEach(r),this.h()},h(){s.a=null,y(l,"class","svelte-1awdgha")},m(o,_){x(o,l,_),s.m(a,l)},p:R,d(o){o&&r(l)}}}function W(c){let l,s=c[1]+"",a;return{c(){l=new X(!1),a=N(),this.h()},l(o){l=Y(o,!1),a=N(),this.h()},h(){l.a=a},m(o,_){l.m(s,o,_),x(o,a,_)},p:R,d(o){o&&(r(a),l.d())}}}function se(c){let l,s,a,o=c[0]("home.header")+"",_,S,$,H,F='<img src="/main/hero.webp" alt="Hero" class="svelte-1awdgha"/>',V,C,L,m,E,G=c[0]("home.contacts.header")+"",j,q,g,k=T(M(c[0]("home.text"))),n=[];for(let t=0;t<k.length;t+=1)n[t]=U(Q(c,k,t));let b=T(M(c[0]("home.contacts.text"))),h=[];for(let t=0;t<b.length;t+=1)h[t]=W(O(c,b,t));return{c(){l=d("div"),s=d("div"),a=d("h1"),_=B(o),S=D();for(let t=0;t<n.length;t+=1)n[t].c();$=D(),H=d("div"),H.innerHTML=F,V=D(),C=d("hr"),L=D(),m=d("div"),E=d("h1"),j=B(G),q=D(),g=d("p");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){l=v(t,"DIV",{class:!0});var i=w(l);s=v(i,"DIV",{});var e=w(s);a=v(e,"H1",{class:!0});var u=w(a);_=J(u,o),u.forEach(r),S=I(e);for(let p=0;p<n.length;p+=1)n[p].l(e);e.forEach(r),$=I(i),H=v(i,"DIV",{"data-svelte-h":!0}),le(H)!=="svelte-9ctvvu"&&(H.innerHTML=F),i.forEach(r),V=I(t),C=v(t,"HR",{}),L=I(t),m=v(t,"DIV",{class:!0});var P=w(m);E=v(P,"H1",{class:!0});var z=w(E);j=J(z,G),z.forEach(r),q=I(P),g=v(P,"P",{class:!0});var A=w(g);for(let p=0;p<h.length;p+=1)h[p].l(A);A.forEach(r),P.forEach(r),this.h()},h(){y(a,"class","svelte-1awdgha"),y(l,"class","grid"),y(E,"class","svelte-1awdgha"),y(g,"class","info svelte-1awdgha"),y(m,"class","grid")},m(t,i){x(t,l,i),f(l,s),f(s,a),f(a,_),f(s,S);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(s,null);f(l,$),f(l,H),x(t,V,i),x(t,C,i),x(t,L,i),x(t,m,i),f(m,E),f(E,j),f(m,q),f(m,g);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(g,null)},p(t,[i]){if(i&1){k=T(M(t[0]("home.text")));let e;for(e=0;e<k.length;e+=1){const u=Q(t,k,e);n[e]?n[e].p(u,i):(n[e]=U(u),n[e].c(),n[e].m(s,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=k.length}if(i&1){b=T(M(t[0]("home.contacts.text")));let e;for(e=0;e<b.length;e+=1){const u=O(t,b,e);h[e]?h[e].p(u,i):(h[e]=W(u),h[e].c(),h[e].m(g,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=b.length}},i:R,o:R,d(t){t&&(r(l),r(V),r(C),r(L),r(m)),K(n,t),K(h,t)}}}function ne(c){const{i:l}=ae();return[l]}class _e extends ee{constructor(l){super(),te(this,l,ne,se,Z,{})}}export{_e as component};