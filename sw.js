const CACHE = 'ceibs-campus-tour-v5';
const ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png', './assets/ceibs-symbol.png',
  './assets/gate.jpg', './assets/innolab.jpg', './assets/classroom-wide.jpg', './assets/classroom-group.jpg',
  './assets/jinhe-tree.jpg', './assets/student-event.jpg', './assets/library-lounge.jpg',
  './assets/pyramid-water.jpg', './assets/duan-center-plaque.jpg', './assets/campus-map.png',
  './assets/map-gate.png', './assets/map-ac1-auditorium.png', './assets/map-library.png', './assets/map-canteen.png',
  './assets/map-gym.png', './assets/map-innolab.png', './assets/map-residence.png', './assets/map-pyramid.png', './assets/map-duan.png',
  './assets/user-gate.jpg', './assets/user-ac1.jpg', './assets/user-auditorium.jpg', './assets/user-library.jpg',
  './assets/user-gym.jpg', './assets/user-gym-interior.jpg', './assets/user-duan-center.jpg', './assets/user-student-life.jpg', './assets/user-campus-map.jpg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response;
  }).catch(()=>caches.match('./index.html'))));
});
