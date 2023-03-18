//service worker v0.0.6

const staticCacheName = 'site-static'
const assets = [
   '/',
   'index.html',
   'set.html',
   'timer.css',
   'timer.png',
   'favicon.ico',
   'timer.js',
   'set.js',
   'app.js',
   'manifest.json',
   'DejaVuSerif.woff2',
   'DejaVuSans.woff2',
   'wecker.mp3' 
];

// install service worker
self.addEventListener('install', evt => {
   console.log('service worker has been installed');
   evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
         console.log('caching shell assets');
         cache.addAll(assets);
      })
   );
});


// activate service worker
self.addEventListener('activate', evt => {
   console.log('service worker has been activated');
});


// fetch event
self.addEventListener('fetch', evt => {
   //console.log('fetch event', evt);
   evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
         return cacheRes || fetch(evt.request);
      })
   );
});

