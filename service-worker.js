const CACHE_VERSION = 'plan-alimentacion-v46';
const APP_SHELL = [
  './',
  './index.html',
  './platos.js',
  './rescate.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      /* Sin skipWaiting aquí: la versión nueva espera a que toques "Actualizar"
         o a que abras la app desde cero. Antes se activaba sola y la página se
         recargaba mientras la usabas. No volver a ponerlo. */
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Solo se cachea lo de la propia app. Las peticiones a GitHub (la
  // sincronización) nunca pasan por la caché: una respuesta vieja pisaría
  // datos nuevos.
  if (new URL(event.request.url).origin !== self.location.origin) return;

  // El documento principal va red-primero: así una actualización se ve al momento,
  // sin depender de que el navegador detecte y active un service worker nuevo antes.
  // Cae a caché solo si no hay red (banner de "sin conexión" ya avisa de eso).
  const isDocument = event.request.mode === 'navigate' || event.request.url.endsWith('/index.html');
  if (isDocument) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
