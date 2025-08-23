// Clean, versioned SW for GH Pages
const VERSION = 'v1';
const CACHE = 'algebra-' + VERSION;
const BASE = self.location.pathname.replace(/service-worker\.js$/, '');
const PRECACHE = ['', 'index.pwa.html', 'app.js?v=1', 'manifest.json', 'icons/icon-192.png', 'icons/icon-512.png'].map(p => BASE + p);

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(cache => Promise.all(PRECACHE.map(u => cache.add(u).catch(()=>null)))));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(()=> self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request; if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(resp => { const copy = resp.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return resp; })
      .catch(() => caches.match(BASE + 'index.pwa.html')))
  );
});
