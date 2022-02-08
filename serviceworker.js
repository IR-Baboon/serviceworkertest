self.addEventListener('install', (installEvent) => {
  console.log('[Service Worker] Installing Service Worker ...', installEvent);
  installEvent.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (activateEvent) => {
  console.log('[Service Worker] Activating Service Worker ...', activateEvent);
  return self.clients.claim();
});

self.addEventListener('fetch', (fetchEvent) => {
  console.log(`[Service Worker] Fetching ${fetchEvent.request.url}`);
  fetchEvent.respondWith(fetch(fetchEvent.request));
});
