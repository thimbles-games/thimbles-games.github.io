const CACHE_NAME = "thimbles-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",

  "/assets/icon.ico",
  "/assets/project_structure.txt",

  "/assets/www/33.mp3",
  "/assets/www/cloud01.png",
  "/assets/www/cloud02.png",
  "/assets/www/cloud03.png",
  "/assets/www/cloud04.png",
  "/assets/www/fon.gif",
  "/assets/www/fon.png",
  "/assets/www/fon2.png",
  "/assets/www/fon3.png",
  "/assets/www/off.png",
  "/assets/www/on.png",
  "/assets/www/qrcode2.png",
  "/assets/www/segoeprint.ttf",
  "/assets/www/stak.png",

  "/assets/www/гиф/fon.png",
  "/assets/www/гиф/fon11.png",
  "/assets/www/гиф/fon2.png",
  "/assets/www/гиф/fon21.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
