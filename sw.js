self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', './images/apple-touch-icon.png', './manifest.json', './index.js', './app.js', './sw.js', './onsenui.css', './onsen-css-components.min.css'])
        })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(reponse => {
            return reponse || fetch(event.request);
        })
    );
});