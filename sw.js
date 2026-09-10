const CACHE = 'ceibs-campus-tour-v8';
const ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png', './assets/ceibs-symbol.png',
  './assets/user-gate.jpg', './assets/jinhe-tree.jpg', './assets/user-academic-building.jpg', './assets/user-auditorium-v7.jpg',
  './assets/user-library.jpg', './assets/library-lounge.jpg', './assets/user-gym.jpg', './assets/innolab.jpg',
  './assets/user-pyramid-new.jpg', './assets/user-duan-interior.jpg', './assets/user-campus-map.jpg', './assets/user-residence-room.jpg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response;
  }).catch(()=>caches.match('./index.html'))));
});
