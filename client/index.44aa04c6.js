import{S as t,i as e,s,e as l,t as o,b as r,f as n,g as a,d as h,m as c,h as f,j as i,k as u,a as p,q as g,c as m,n as d,o as v}from"./client.0a4a03fe.js";import"svelte-i18n";function E(t,e,s){const l=t.slice();return l[1]=e[s],l}function b(t){let e,s,p,g,m=t[1].title+"";return{c(){e=l("li"),s=l("a"),p=o(m),this.h()},l(t){e=r(t,"LI",{});var l=n(e);s=r(l,"A",{rel:!0,href:!0});var o=n(s);p=a(o,m),o.forEach(h),l.forEach(h),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",g="blogue/"+t[1].slug)},m(t,l){f(t,e,l),i(e,s),i(s,p)},p(t,e){1&e&&m!==(m=t[1].title+"")&&u(p,m),1&e&&g!==(g="blogue/"+t[1].slug)&&c(s,"href",g)},d(t){t&&h(e)}}}function j(t){let e,s,u,j,x,q=t[0],L=[];for(let e=0;e<q.length;e+=1)L[e]=b(E(t,q,e));return{c(){e=p(),s=l("h1"),u=o("Recent posts"),j=p(),x=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),e=m(t),s=r(t,"H1",{});var l=n(s);u=a(l,"Recent posts"),l.forEach(h),j=m(t),x=r(t,"UL",{class:!0});var o=n(x);for(let t=0;t<L.length;t+=1)L[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,e,l),f(t,s,l),i(s,u),f(t,j,l),f(t,x,l);for(let t=0;t<L.length;t+=1)L[t].m(x,null)},p(t,[e]){if(1&e){let s;for(q=t[0],s=0;s<q.length;s+=1){const l=E(t,q,s);L[s]?L[s].p(l,e):(L[s]=b(l),L[s].c(),L[s].m(x,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=q.length}},i:d,o:d,d(t){t&&h(e),t&&h(s),t&&h(j),t&&h(x),v(L,t)}}}function x({params:t,query:e}){return this.fetch("blogue.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,e,s){let{posts:l}=e;return t.$set=t=>{"posts"in t&&s(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),e(this,t,q,j,s,{posts:0})}}export{x as preload};
