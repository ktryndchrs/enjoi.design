!function(){"use strict";const e=["client/fr.93e9a4d1.js","client/en.f9ca21f0.js","client/en.55186adc.js","client/en.f964b7ee.js","client/fr.438a6b09.js","client/fr.e2c1e84f.js","client/index.7855dd1f.js","client/[slug].885c0fa3.js","client/index.7c4d2d6b.js","client/index.b20af95e.js","client/client.1d555c72.js"].concat(["service-worker-index.html","CNAME","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","successkid.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594594596188").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594594596188"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594594596188").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
