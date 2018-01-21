var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  'appIcon_48x48.png',
  'appIcon_72x72.png',
  'appIcon_96x96.png',
  'appIcon_144x144.png',
  'appIcon128x128.png',
  'appIcon192x192.png',
  'manifest.json',
  'pink_square.jpg',
  'regensburg-3023439_640.jpg',
  'vickan_X-Jobb_animations.html',
  'vickan_X-Jobb_interaction.html',
  'vickan_X-Jobb_interaction_v2.html',
  'vickan_X-Jobb_Loading_icon.html',
  'vickan_X-Jobb_Menu.html',
  'vickan_X-Jobb_static_view.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
