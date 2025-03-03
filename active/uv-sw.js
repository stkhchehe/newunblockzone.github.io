importScripts("/ubzv3.github.io/active/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
