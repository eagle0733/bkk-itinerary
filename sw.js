// sw.js — PWA Service Worker（無 Google API 版本）
const VERSION='leaflet-v1.0.0';
const CACHE=`itinerary-leaflet-${VERSION}`;
const SHELL=['./','./index.html','./manifest.webmanifest','./sw.js','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?Promise.resolve():caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  // 只對同網域檔案做快取；Leaflet 圖磚與 CDN 走網路
  if(url.origin===self.location.origin){
    if(e.request.mode==='navigate'){
      e.respondWith((async()=>{
        try{
          const net=await fetch(e.request);
          const cache=await caches.open(CACHE); cache.put(e.request, net.clone());
          return net;
        }catch(err){
          const cached=await caches.match(e.request);
          if(cached) return cached;
          return new Response('<!doctype html><meta charset="utf-8"><title>離線</title><style>body{font-family:system-ui;background:#0f172a;color:#e5e7eb;padding:2rem}</style><h1>離線模式</h1><p>目前無網路，請恢復後重新整理。</p>',{headers:{'Content-Type':'text/html; charset=utf-8'}});
        }
      })());
      return;
    }
    if(e.request.method==='GET'){
      e.respondWith((async()=>{
        const cached=await caches.match(e.request);
        if(cached) return cached;
        try{
          const net=await fetch(e.request);
          const cache=await caches.open(CACHE); cache.put(e.request, net.clone());
          return net;
        }catch{return new Response('');}
      })());
      return;
    }
  }
  e.respondWith(fetch(e.request).catch(()=>new Response('')));
});