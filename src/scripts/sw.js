import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './favicon_io/android-chrome-192x192.png',
  './favicon_io/android-chrome-512x512.png',
  './favicon_io/apple-touch-icon.png',
  './favicon_io/favicon-16x16.png',
  './favicon_io/favicon-32x32.png',
  './favicon_io/favicon.ico',
  './favicon_io/site.webmanifest',
  './images/hero.jpg',
  './index.html',
  './app.bundle.js',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
