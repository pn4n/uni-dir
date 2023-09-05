import{s as ge,n as W,m as Rt,d as Ut,r as Nt,b as ae,h as Tt,p as me}from"../chunks/scheduler.b9582851.js";import{S as ve,i as be,g as p,m as P,s as w,h as g,j as I,n as A,f as _,c as D,k as m,a as U,D as s,F as re,o as K,E as nt,M as Re,L as st,r as Ee,u as Te,v as ke,d as G,t as Q,w as ye,N as Pt,O as pe,e as kt,p as At,b as Bt}from"../chunks/index.99c81ec3.js";import{h as yt,u as Ht,L as Ft}from"../chunks/LoadingDirectus.a02b2fb1.js";import{e as he}from"../chunks/each.746c78c9.js";import{c as He}from"../chunks/context.872a4bfa.js";import{g as Ue,a as Mt}from"../chunks/utils.43e38468.js";import{e as jt}from"../chunks/forms.1ba9677d.js";function zt(t){let e,l,r,c=t[1]("menu.sum")+"",d,o,n,u,i,f=t[1]("menu.currency")+"",L,h,T,a=t[1]("menu.chechkout")+"",b,v,k;return{c(){e=p("article"),l=p("div"),r=p("p"),d=P(c),o=w(),n=p("p"),u=P(t[0]),i=w(),L=P(f),h=w(),T=p("button"),b=P(a),this.h()},l(O){e=g(O,"ARTICLE",{class:!0});var C=I(e);l=g(C,"DIV",{class:!0});var j=I(l);r=g(j,"P",{class:!0});var N=I(r);d=A(N,c),N.forEach(_),o=D(j),n=g(j,"P",{class:!0});var E=I(n);u=A(E,t[0]),i=D(E),L=A(E,f),E.forEach(_),j.forEach(_),h=D(C),T=g(C,"BUTTON",{class:!0,type:!0});var y=I(T);b=A(y,a),y.forEach(_),C.forEach(_),this.h()},h(){m(r,"class","svelte-13hn5ox"),m(n,"class","svelte-13hn5ox"),m(l,"class","sum-div svelte-13hn5ox"),m(T,"class","outline contrast svelte-13hn5ox"),m(T,"type","button"),m(e,"class","grid svelte-13hn5ox")},m(O,C){U(O,e,C),s(e,l),s(l,r),s(r,d),s(l,o),s(l,n),s(n,u),s(n,i),s(n,L),s(e,h),s(e,T),s(T,b),v||(k=re(T,"click",t[2]),v=!0)},p(O,[C]){C&1&&K(u,O[0])},i:W,o:W,d(O){O&&_(e),v=!1,k()}}}function Vt(t,e,l){const{i:r}=He();let{sum:c=0}=e,{dialog:d}=e;const o=()=>{d.showModal()};return t.$$set=n=>{"sum"in n&&l(0,c=n.sum),"dialog"in n&&l(3,d=n.dialog)},[c,r,o,d]}class qt extends ve{constructor(e){super(),be(this,e,Vt,zt,ge,{sum:0,dialog:3})}}function It(t,e,l){const r=t.slice();return r[9]=e[l][0],r[10]=e[l][1],r}function Lt(t){let e,l,r=t[10].counter+"",c,d,o,n=t[10].title+"",u,i,f,L=t[10].price+"",h,T,a,b=t[10].price*t[10].counter+"",v,k;return{c(){e=p("tr"),l=p("th"),c=P(r),d=w(),o=p("td"),u=P(n),i=w(),f=p("td"),h=P(L),T=w(),a=p("td"),v=P(b),k=w(),this.h()},l(O){e=g(O,"TR",{});var C=I(e);l=g(C,"TH",{scope:!0});var j=I(l);c=A(j,r),j.forEach(_),d=D(C),o=g(C,"TD",{});var N=I(o);u=A(N,n),N.forEach(_),i=D(C),f=g(C,"TD",{});var E=I(f);h=A(E,L),E.forEach(_),T=D(C),a=g(C,"TD",{});var y=I(a);v=A(y,b),y.forEach(_),k=D(C),C.forEach(_),this.h()},h(){m(l,"scope","row")},m(O,C){U(O,e,C),s(e,l),s(l,c),s(e,d),s(e,o),s(o,u),s(e,i),s(e,f),s(f,h),s(e,T),s(e,a),s(a,v),s(e,k)},p(O,C){C&2&&r!==(r=O[10].counter+"")&&K(c,r),C&2&&n!==(n=O[10].title+"")&&K(u,n),C&2&&L!==(L=O[10].price+"")&&K(h,L),C&2&&b!==(b=O[10].price*O[10].counter+"")&&K(v,b)},d(O){O&&_(e)}}}function St(t){let e,l,r,c,d="#",o,n,u=t[5]("menu.order.title")+"",i,f,L,h=t[5]("menu.order.price")+"",T,a,b,v=t[5]("menu.order.subtotal")+"",k,O,C,j,N,E,y,B=t[5]("menu.order.total")+"",F,q,ne,Fe,Ie,Me,de,Le,Oe,M,J,je,X,ot=t[5]("form.name")+"",ze,Ve,se,qe,Z,$,at=t[5]("form.email")+"",Se,Ge,ie,Je,x,it=t[5]("form.phone")+"",Ye,Ke,oe,Qe,ee,ut=t[5]("form.address")+"",We,Xe,ue,Ze,te,ct=t[5]("form.comment")+"",$e,xe,ce,et,fe,ft=t[5]("form.submit")+"",tt,we,lt,_t,_e=he(Object.entries(t[1])),z=[];for(let R=0;R<_e.length;R+=1)z[R]=Lt(It(t,_e,R));return{c(){e=p("table"),l=p("thead"),r=p("tr"),c=p("th"),c.textContent=d,o=w(),n=p("th"),i=P(u),f=w(),L=p("th"),T=P(h),a=w(),b=p("th"),k=P(v),O=w(),C=p("tbody");for(let R=0;R<z.length;R+=1)z[R].c();j=w(),N=p("tfoot"),E=p("tr"),y=p("th"),F=P(B),q=w(),ne=p("td"),Fe=w(),Ie=p("td"),Me=w(),de=p("td"),Le=P(t[3]),Oe=w(),M=p("form"),J=p("input"),je=w(),X=p("label"),ze=P(ot),Ve=w(),se=p("input"),qe=w(),Z=p("div"),$=p("label"),Se=P(at),Ge=w(),ie=p("input"),Je=w(),x=p("label"),Ye=P(it),Ke=w(),oe=p("input"),Qe=w(),ee=p("label"),We=P(ut),Xe=w(),ue=p("input"),Ze=w(),te=p("label"),$e=P(ct),xe=w(),ce=p("input"),et=w(),fe=p("button"),tt=P(ft),this.h()},l(R){e=g(R,"TABLE",{});var V=I(e);l=g(V,"THEAD",{});var H=I(l);r=g(H,"TR",{});var Y=I(r);c=g(Y,"TH",{scope:!0,"data-svelte-h":!0}),nt(c)!=="svelte-j337pg"&&(c.textContent=d),o=D(Y),n=g(Y,"TH",{scope:!0});var ht=I(n);i=A(ht,u),ht.forEach(_),f=D(Y),L=g(Y,"TH",{scope:!0});var dt=I(L);T=A(dt,h),dt.forEach(_),a=D(Y),b=g(Y,"TH",{scope:!0});var mt=I(b);k=A(mt,v),mt.forEach(_),Y.forEach(_),H.forEach(_),O=D(V),C=g(V,"TBODY",{});var pt=I(C);for(let rt=0;rt<z.length;rt+=1)z[rt].l(pt);pt.forEach(_),j=D(V),N=g(V,"TFOOT",{});var gt=I(N);E=g(gt,"TR",{});var le=I(E);y=g(le,"TH",{scope:!0});var vt=I(y);F=A(vt,B),vt.forEach(_),q=D(le),ne=g(le,"TD",{}),I(ne).forEach(_),Fe=D(le),Ie=g(le,"TD",{}),I(Ie).forEach(_),Me=D(le),de=g(le,"TD",{});var bt=I(de);Le=A(bt,t[3]),bt.forEach(_),le.forEach(_),gt.forEach(_),V.forEach(_),Oe=D(R),M=g(R,"FORM",{method:!0});var S=I(M);J=g(S,"INPUT",{type:!0,id:!0,name:!0}),je=D(S),X=g(S,"LABEL",{for:!0});var De=I(X);ze=A(De,ot),Ve=D(De),se=g(De,"INPUT",{type:!0,id:!0,name:!0}),De.forEach(_),qe=D(S),Z=g(S,"DIV",{class:!0});var Ce=I(Z);$=g(Ce,"LABEL",{for:!0});var Ne=I($);Se=A(Ne,at),Ge=D(Ne),ie=g(Ne,"INPUT",{type:!0,id:!0,name:!0}),Ne.forEach(_),Je=D(Ce),x=g(Ce,"LABEL",{for:!0});var Pe=I(x);Ye=A(Pe,it),Ke=D(Pe),oe=g(Pe,"INPUT",{type:!0,id:!0,name:!0}),Pe.forEach(_),Ce.forEach(_),Qe=D(S),ee=g(S,"LABEL",{for:!0});var Ae=I(ee);We=A(Ae,ut),Xe=D(Ae),ue=g(Ae,"INPUT",{type:!0,id:!0,name:!0}),Ae.forEach(_),Ze=D(S),te=g(S,"LABEL",{for:!0});var Be=I(te);$e=A(Be,ct),xe=D(Be),ce=g(Be,"INPUT",{type:!0,id:!0,name:!0}),Be.forEach(_),et=D(S),fe=g(S,"BUTTON",{class:!0});var Et=I(fe);tt=A(Et,ft),Et.forEach(_),S.forEach(_),this.h()},h(){m(c,"scope","col"),m(n,"scope","col"),m(L,"scope","col"),m(b,"scope","col"),m(y,"scope","col"),m(J,"type","text"),m(J,"id","order"),m(J,"name","order"),J.hidden=!0,m(se,"type","text"),m(se,"id","name"),m(se,"name","name"),se.required=!0,m(X,"for","name"),m(ie,"type","email"),m(ie,"id","email"),m(ie,"name","email"),m($,"for","email"),m(oe,"type","phone"),m(oe,"id","phone"),m(oe,"name","phone"),oe.required=!0,m(x,"for","phone"),m(Z,"class","grid"),m(ue,"type","text"),m(ue,"id","address"),m(ue,"name","address"),m(ee,"for","address"),m(ce,"type","text"),m(ce,"id","comment"),m(ce,"name","comment"),m(te,"for","comment"),m(fe,"class","outline"),m(M,"method","POST")},m(R,V){U(R,e,V),s(e,l),s(l,r),s(r,c),s(r,o),s(r,n),s(n,i),s(r,f),s(r,L),s(L,T),s(r,a),s(r,b),s(b,k),s(e,O),s(e,C);for(let H=0;H<z.length;H+=1)z[H]&&z[H].m(C,null);s(e,j),s(e,N),s(N,E),s(E,y),s(y,F),s(E,q),s(E,ne),s(E,Fe),s(E,Ie),s(E,Me),s(E,de),s(de,Le),U(R,Oe,V),U(R,M,V),s(M,J),Re(J,t[4]),s(M,je),s(M,X),s(X,ze),s(X,Ve),s(X,se),s(M,qe),s(M,Z),s(Z,$),s($,Se),s($,Ge),s($,ie),s(Z,Je),s(Z,x),s(x,Ye),s(x,Ke),s(x,oe),s(M,Qe),s(M,ee),s(ee,We),s(ee,Xe),s(ee,ue),s(M,Ze),s(M,te),s(te,$e),s(te,xe),s(te,ce),s(M,et),s(M,fe),s(fe,tt),t[7](M),lt||(_t=[re(J,"input",t[6]),Rt(we=jt.call(null,M,t[8]))],lt=!0)},p(R,[V]){if(V&2){_e=he(Object.entries(R[1]));let H;for(H=0;H<_e.length;H+=1){const Y=It(R,_e,H);z[H]?z[H].p(Y,V):(z[H]=Lt(Y),z[H].c(),z[H].m(C,null))}for(;H<z.length;H+=1)z[H].d(1);z.length=_e.length}V&8&&K(Le,R[3]),V&16&&J.value!==R[4]&&Re(J,R[4]),we&&Ut(we.update)&&V&1&&we.update.call(null,R[8])},i:W,o:W,d(R){R&&(_(e),_(Oe),_(M)),st(z,R),t[7](null),lt=!1,Nt(_t)}}}function Gt(t,e,l){let r,c;const{i:d}=He();let{cart_list:o}=e,{form_status:n}=e,u;function i(){r=this.value,l(4,r),l(1,o)}function f(h){ae[h?"unshift":"push"](()=>{u=h,l(2,u)})}const L=()=>(l(0,n="loading"),async({update:h})=>{await h(),l(0,n="complete")});return t.$$set=h=>{"cart_list"in h&&l(1,o=h.cart_list),"form_status"in h&&l(0,n=h.form_status)},t.$$.update=()=>{t.$$.dirty&2&&l(4,r=JSON.stringify(o)),t.$$.dirty&4&&l(0,n=u==null?void 0:u.success),t.$$.dirty&2&&l(3,c=Object.values(o).reduce((h,T)=>h+T.price*T.counter,0))},[n,o,u,c,r,d,i,f,L]}class Jt extends ve{constructor(e){super(),be(this,e,Gt,St,ge,{cart_list:1,form_status:0})}}function Yt(t){let e,l,r,c,d;return{c(){e=p("div"),l=p("img"),this.h()},l(o){e=g(o,"DIV",{"aria-busy":!0,class:!0});var n=I(e);l=g(n,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),n.forEach(_),this.h()},h(){Tt(l.src,r=t[0])||m(l,"src",r),m(l,"alt",t[1]),m(l,"loading","lazy"),m(l,"class","svelte-123myd0"),m(e,"aria-busy",t[2]),m(e,"class","svelte-123myd0")},m(o,n){U(o,e,n),s(e,l),c||(d=re(l,"load",t[3]),c=!0)},p(o,[n]){n&1&&!Tt(l.src,r=o[0])&&m(l,"src",r),n&2&&m(l,"alt",o[1]),n&4&&m(e,"aria-busy",o[2])},i:W,o:W,d(o){o&&_(e),c=!1,d()}}}function Kt(t,e,l){let{src:r}=e,{alt:c}=e,d=!0;const o=()=>{l(2,d=!1)};return t.$$set=n=>{"src"in n&&l(0,r=n.src),"alt"in n&&l(1,c=n.alt)},[r,c,d,o]}class Qt extends ve{constructor(e){super(),be(this,e,Kt,Yt,ge,{src:0,alt:1})}}function Wt(t){let e,l=t[3]("menu.add")+"",r,c,d;return{c(){e=p("button"),r=P(l),this.h()},l(o){e=g(o,"BUTTON",{class:!0});var n=I(e);r=A(n,l),n.forEach(_),this.h()},h(){m(e,"class","outline svelte-73uhtl")},m(o,n){U(o,e,n),s(e,r),c||(d=re(e,"click",t[12]),c=!0)},p:W,d(o){o&&_(e),c=!1,d()}}}function Xt(t){let e,l="+",r,c,d,o,n="-",u,i;return{c(){e=p("button"),e.textContent=l,r=w(),c=p("input"),d=w(),o=p("button"),o.textContent=n,this.h()},l(f){e=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-10drvz"&&(e.textContent=l),r=D(f),c=g(f,"INPUT",{type:!0,class:!0}),d=D(f),o=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(o)!=="svelte-xvb3el"&&(o.textContent=n),this.h()},h(){m(e,"class","outline svelte-73uhtl"),m(c,"type","number"),m(c,"class","svelte-73uhtl"),m(o,"class","outline svelte-73uhtl")},m(f,L){U(f,e,L),U(f,r,L),U(f,c,L),Re(c,t[0][t[1].id].counter),U(f,d,L),U(f,o,L),u||(i=[re(e,"click",t[9]),re(c,"input",t[10]),re(o,"click",t[11])],u=!0)},p(f,L){L&3&&Pt(c.value)!==f[0][f[1].id].counter&&Re(c,f[0][f[1].id].counter)},d(f){f&&(_(e),_(r),_(c),_(d),_(o)),u=!1,Nt(i)}}}function Zt(t){let e,l,r=Ue(t[1],t[4])+"",c,d,o,n,u,i,f=t[1].price+"",L,h,T=t[3]("menu.currency")+"",a,b,v,k,O;o=new Qt({props:{src:t[2]+"/assets/"+t[1].img,alt:"menu item"}});function C(E,y){return y&3&&(k=null),k==null&&(k=!!E[0].hasOwnProperty(E[1].id)),k?Xt:Wt}let j=C(t,-1),N=j(t);return{c(){e=p("article"),l=p("header"),c=P(r),d=w(),Ee(o.$$.fragment),n=w(),u=p("footer"),i=p("p"),L=P(f),h=w(),a=P(T),b=w(),v=p("div"),N.c(),this.h()},l(E){e=g(E,"ARTICLE",{class:!0});var y=I(e);l=g(y,"HEADER",{class:!0});var B=I(l);c=A(B,r),B.forEach(_),d=D(y),Te(o.$$.fragment,y),n=D(y),u=g(y,"FOOTER",{class:!0});var F=I(u);i=g(F,"P",{class:!0});var q=I(i);L=A(q,f),h=D(q),a=A(q,T),q.forEach(_),b=D(F),v=g(F,"DIV",{class:!0});var ne=I(v);N.l(ne),ne.forEach(_),F.forEach(_),y.forEach(_),this.h()},h(){m(l,"class","svelte-73uhtl"),m(i,"class","svelte-73uhtl"),m(v,"class","grid svelte-73uhtl"),m(u,"class","svelte-73uhtl"),m(e,"class","container svelte-73uhtl")},m(E,y){U(E,e,y),s(e,l),s(l,c),s(e,d),ke(o,e,null),s(e,n),s(e,u),s(u,i),s(i,L),s(i,h),s(i,a),s(u,b),s(u,v),N.m(v,null),O=!0},p(E,[y]){(!O||y&2)&&r!==(r=Ue(E[1],E[4])+"")&&K(c,r);const B={};y&6&&(B.src=E[2]+"/assets/"+E[1].img),o.$set(B),(!O||y&2)&&f!==(f=E[1].price+"")&&K(L,f),j===(j=C(E,y))&&N?N.p(E,y):(N.d(1),N=j(E),N&&(N.c(),N.m(v,null)))},i(E){O||(G(o.$$.fragment,E),O=!0)},o(E){Q(o.$$.fragment,E),O=!1},d(E){E&&_(e),ye(o),N.d()}}}function $t(t,e,l){const{i:r,language:c}=He();let{item:d}=e,{url:o}=e,{cart_list:n}=e,{items_list:u}=e;const i=v=>{const k=u.find(O=>O.id===v);console.log(n),l(0,n[v]={title:k.title,price:k.price,counter:1},n)},f=v=>{l(0,n[v].counter++,n),console.log(n)},L=v=>{l(0,n[v].counter--,n),n[v].counter<1&&delete n[v]},h=()=>f(d.id);function T(){n[d.id].counter=Pt(this.value),l(0,n)}const a=()=>L(d.id),b=()=>i(d.id);return t.$$set=v=>{"item"in v&&l(1,d=v.item),"url"in v&&l(2,o=v.url),"cart_list"in v&&l(0,n=v.cart_list),"items_list"in v&&l(8,u=v.items_list)},[n,d,o,r,c,i,f,L,u,h,T,a,b]}class xt extends ve{constructor(e){super(),be(this,e,$t,Zt,ge,{item:1,url:2,cart_list:0,items_list:8})}}function Ot(t,e,l){const r=t.slice();return r[15]=e[l],r}function wt(t,e,l){const r=t.slice();return r[18]=e[l],r}function el(t){let e,l=t[5]("directus_failed")+"",r,c,d,o=t[21].message+"",n;return{c(){e=p("p"),r=P(l),c=w(),d=p("p"),n=P(o),this.h()},l(u){e=g(u,"P",{class:!0});var i=I(e);r=A(i,l),i.forEach(_),c=D(u),d=g(u,"P",{class:!0});var f=I(d);n=A(f,o),f.forEach(_),this.h()},h(){m(e,"class","svelte-1dwxdgc"),m(d,"class","svelte-1dwxdgc")},m(u,i){U(u,e,i),s(e,r),U(u,c,i),U(u,d,i),s(d,n)},p(u,i){i&1&&o!==(o=u[21].message+"")&&K(n,o)},i:W,o:W,d(u){u&&(_(e),_(c),_(d))}}}function tl(t){let e,l,r,c,d,o,n,u=he(t[14].menu_items),i=[];for(let a=0;a<u.length;a+=1)i[a]=Ct(Ot(t,u,a));const f=a=>Q(i[a],1,1,()=>{i[a]=null});function L(a){t[12](a)}function h(a){t[13](a)}let T={};return t[4]!==void 0&&(T.sum=t[4]),t[3]!==void 0&&(T.dialog=t[3]),r=new qt({props:T}),ae.push(()=>pe(r,"sum",L)),ae.push(()=>pe(r,"dialog",h)),{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=w(),l=p("div"),Ee(r.$$.fragment),this.h()},l(a){for(let v=0;v<i.length;v+=1)i[v].l(a);e=D(a),l=g(a,"DIV",{});var b=I(l);Te(r.$$.fragment,b),b.forEach(_),this.h()},h(){l.hidden=o=t[4]<1},m(a,b){for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(a,b);U(a,e,b),U(a,l,b),ke(r,l,null),n=!0},p(a,b){if(b&67){u=he(a[14].menu_items);let k;for(k=0;k<u.length;k+=1){const O=Ot(a,u,k);i[k]?(i[k].p(O,b),G(i[k],1)):(i[k]=Ct(O),i[k].c(),G(i[k],1),i[k].m(e.parentNode,e))}for(At(),k=u.length;k<i.length;k+=1)f(k);Bt()}const v={};!c&&b&16&&(c=!0,v.sum=a[4],me(()=>c=!1)),!d&&b&8&&(d=!0,v.dialog=a[3],me(()=>d=!1)),r.$set(v),(!n||b&16&&o!==(o=a[4]<1))&&(l.hidden=o)},i(a){if(!n){for(let b=0;b<u.length;b+=1)G(i[b]);G(r.$$.fragment,a),n=!0}},o(a){i=i.filter(Boolean);for(let b=0;b<i.length;b+=1)Q(i[b]);Q(r.$$.fragment,a),n=!1},d(a){a&&(_(e),_(l)),st(i,a),ye(r)}}}function Dt(t){let e,l,r;function c(o){t[11](o)}let d={item:t[18],url:t[14].url,items_list:t[14].items};return t[1]!==void 0&&(d.cart_list=t[1]),e=new xt({props:d}),ae.push(()=>pe(e,"cart_list",c)),{c(){Ee(e.$$.fragment)},l(o){Te(e.$$.fragment,o)},m(o,n){ke(e,o,n),r=!0},p(o,n){const u={};n&1&&(u.item=o[18]),n&1&&(u.url=o[14].url),n&1&&(u.items_list=o[14].items),!l&&n&2&&(l=!0,u.cart_list=o[1],me(()=>l=!1)),e.$set(u)},i(o){r||(G(e.$$.fragment,o),r=!0)},o(o){Q(e.$$.fragment,o),r=!1},d(o){ye(e,o)}}}function Ct(t){let e,l=Ue(t[15],t[6])+"",r,c,d,o,n,u,i=he(t[15].items),f=[];for(let h=0;h<i.length;h+=1)f[h]=Dt(wt(t,i,h));const L=h=>Q(f[h],1,1,()=>{f[h]=null});return{c(){e=p("h1"),r=P(l),c=w(),d=p("div");for(let h=0;h<f.length;h+=1)f[h].c();o=w(),n=p("hr"),this.h()},l(h){e=g(h,"H1",{});var T=I(e);r=A(T,l),T.forEach(_),c=D(h),d=g(h,"DIV",{class:!0});var a=I(d);for(let b=0;b<f.length;b+=1)f[b].l(a);a.forEach(_),o=D(h),n=g(h,"HR",{}),this.h()},h(){m(d,"class","grid-container svelte-1dwxdgc")},m(h,T){U(h,e,T),s(e,r),U(h,c,T),U(h,d,T);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(d,null);U(h,o,T),U(h,n,T),u=!0},p(h,T){if((!u||T&1)&&l!==(l=Ue(h[15],h[6])+"")&&K(r,l),T&3){i=he(h[15].items);let a;for(a=0;a<i.length;a+=1){const b=wt(h,i,a);f[a]?(f[a].p(b,T),G(f[a],1)):(f[a]=Dt(b),f[a].c(),G(f[a],1),f[a].m(d,null))}for(At(),a=i.length;a<f.length;a+=1)L(a);Bt()}},i(h){if(!u){for(let T=0;T<i.length;T+=1)G(f[T]);u=!0}},o(h){f=f.filter(Boolean);for(let T=0;T<f.length;T+=1)Q(f[T]);u=!1},d(h){h&&(_(e),_(c),_(d),_(o),_(n)),st(f,h)}}}function ll(t){let e,l;return e=new Ft({}),{c(){Ee(e.$$.fragment)},l(r){Te(e.$$.fragment,r)},m(r,c){ke(e,r,c),l=!0},p:W,i(r){l||(G(e.$$.fragment,r),l=!0)},o(r){Q(e.$$.fragment,r),l=!1},d(r){ye(e,r)}}}function rl(t){let e,l,r,c,d,o=t[5]("menu.chechkout")+"",n,u,i,f,L,h,T,a,b,v,k,O;function C(y){t[8](y)}function j(y){t[9](y)}let N={};t[1]!==void 0&&(N.cart_list=t[1]),t[2]!==void 0&&(N.form_status=t[2]),i=new Jt({props:N}),ae.push(()=>pe(i,"cart_list",C)),ae.push(()=>pe(i,"form_status",j));let E={ctx:t,current:null,token:null,hasCatch:!0,pending:ll,then:tl,catch:el,value:14,error:21,blocks:[,,,]};return yt(b=t[0].streamed.dir,E),{c(){e=p("dialog"),l=p("article"),r=p("header"),c=p("a"),d=w(),n=P(o),u=w(),Ee(i.$$.fragment),T=w(),a=kt(),E.block.c(),this.h()},l(y){e=g(y,"DIALOG",{class:!0});var B=I(e);l=g(B,"ARTICLE",{});var F=I(l);r=g(F,"HEADER",{});var q=I(r);c=g(q,"A",{href:!0,"aria-label":!0,class:!0}),I(c).forEach(_),d=D(q),n=A(q,o),q.forEach(_),u=D(F),Te(i.$$.fragment,F),F.forEach(_),B.forEach(_),T=D(y),a=kt(),E.block.l(y),this.h()},h(){m(c,"href","#close"),m(c,"aria-label","Close"),m(c,"class","close"),l.hidden=h=t[4]<1,m(e,"class","svelte-1dwxdgc")},m(y,B){U(y,e,B),s(e,l),s(l,r),s(r,c),s(r,d),s(r,n),s(l,u),ke(i,l,null),t[10](e),U(y,T,B),U(y,a,B),E.block.m(y,E.anchor=B),E.mount=()=>a.parentNode,E.anchor=a,v=!0,k||(O=re(c,"click",t[7]),k=!0)},p(y,[B]){t=y;const F={};!f&&B&2&&(f=!0,F.cart_list=t[1],me(()=>f=!1)),!L&&B&4&&(L=!0,F.form_status=t[2],me(()=>L=!1)),i.$set(F),(!v||B&16&&h!==(h=t[4]<1))&&(l.hidden=h),E.ctx=t,B&1&&b!==(b=t[0].streamed.dir)&&yt(b,E)||Ht(E,t,B)},i(y){v||(G(i.$$.fragment,y),G(E.block),v=!0)},o(y){Q(i.$$.fragment,y);for(let B=0;B<3;B+=1){const F=E.blocks[B];Q(F)}v=!1},d(y){y&&(_(e),_(T),_(a)),ye(i),t[10](null),E.block.d(y),E.token=null,E=null,k=!1,O()}}}function nl(t,e,l){let r;const{i:c,language:d}=He();let{data:o}=e,n,u={},i;const f=()=>n.close();function L(k){u=k,l(1,u)}function h(k){i=k,l(2,i)}function T(k){ae[k?"unshift":"push"](()=>{n=k,l(3,n)})}function a(k){u=k,l(1,u)}function b(k){r=k,l(4,r),l(1,u)}function v(k){n=k,l(3,n)}return t.$$set=k=>{"data"in k&&l(0,o=k.data)},t.$$.update=()=>{t.$$.dirty&2&&l(4,r=Object.values(u).reduce((k,O)=>k+O.price*O.counter,0)),t.$$.dirty&4&&Mt(i)},[o,u,i,n,r,c,d,f,L,h,T,a,b,v]}class _l extends ve{constructor(e){super(),be(this,e,nl,rl,ge,{data:0})}}export{_l as component};