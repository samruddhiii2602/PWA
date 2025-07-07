self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('samruddhi-portfolio-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'manifest.json',
        'icon 1.jfif',
        'icon 2.jfif'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});