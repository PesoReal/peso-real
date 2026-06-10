const CACHE = 'peso-real-v2';
const STATIC = [
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
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

  // HTML: siempre red, nunca cache — garantiza actualizaciones inmediatas
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    return e.respondWith(
      fetch(e.request).catch(() => caches.match('/app.html'))
    );
  }

  // APIs y servicios externos: siempre red
  if (url.pathname.startsWith('/api/') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('googleapis') ||
      url.hostname.includes('anthropic') ||
      url.hostname.includes('mercadopago') ||
      url.hostname.includes('dolarapi') ||
      url.hostname.includes('brevo')) {
    return e.respondWith(fetch(e.request));
  }

  // Iconos y manifest: cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      });
    })
  );
});
