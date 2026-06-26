const CACHE_NAME = 'beat-maker-v6';
const ASSETS = [
  '/beat-maker/',
  '/beat-maker/index.html',
  '/beat-maker/manifest.json',
  '/beat-maker/beat-maker.png'
];

// Install Service Worker and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached assets when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
