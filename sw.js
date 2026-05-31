const CACHE = 'peso-real-v1';
const STATIC = [
  '/app.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API calls: siempre red, nunca cache
  if (url.pathname.startsWith('/api/')) {
    return e.respondWith(fetch(e.request));
  }

  // Firebase y servicios externos: siempre red
  if (url.hostname.includes('firebase') ||
      url.hostname.includes('googleapis') ||
      url.hostname.includes('anthropic') ||
      url.hostname.includes('mercadopago') ||
      url.hostname.includes('dolarapi')) {
    return e.respondWith(fetch(e.request));
  }

  // Resto: cache first, red como fallback
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: devolver app.html para navegacion
        if (e.request.mode === 'navigate') {
          return caches.match('/app.html');
        }
      });
    })
  );
});
