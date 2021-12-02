const CacheVersion = 'v0.0.1'

files = [
    '/',
    '/404',
    '/resources/css/retype.css',
    '/resources/js/config.js',
    '/resources/js/lunr.js',
    '/resorces/js/retype.js',
    '/resources/js/search.json',
    '/resources/images/unverifiedrole.png',
    '/guides/verification/'
]

self.addEventListener("install", e => {
    console.log('[SW]: Installing and caching resources.');
    e.waitUntil(caches.open(CacheVersion + '-cache').then(cache => {
      return cache.addAll(files)
    })
        .then(function() {
          console.log('[SW]: Installated Successfully!');
        })
    );
});

self.addEventListener("activate", e => {
    console.log('[SW] Validating the cache and activating.');
  
    e.waitUntil(caches.keys().then(function (keys) {
          return Promise.all(
            keys.filter(function (key) {
                return !key.startsWith(CacheVersion);
              })
              .map(function (key) {
                return caches.delete(key);
              })
          );
        })
        .then(function() {
          console.log('[SW]: Validated and Activated.');
        })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });