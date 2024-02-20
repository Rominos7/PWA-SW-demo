import { precacheAndRoute, createHandlerBoundToURL  } from "workbox-precaching";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { CacheOnly, NetworkOnly, CacheFirst, NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";

clientsClaim();

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});
registerRoute(navigationRoute);

registerRoute(
  /manifest|logo|favicon/,
  new StaleWhileRevalidate({
    cacheName: "additional-static-cache",
  })
);

registerRoute(
  'https://swapi.dev/api/people/1',
  new CacheOnly({
    cacheName: "cache-only",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  "https://swapi.dev/api/people/2",
  new NetworkOnly({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  "https://swapi.dev/api/people/3",
  new CacheFirst({
    cacheName: "cache-first",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  "https://swapi.dev/api/people/4",
  new NetworkFirst({
    cacheName: "network-first",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  'https://swapi.dev/api/people/5',
  new StaleWhileRevalidate({
    cacheName: "stale-while-revalidate",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// eslint-disable-next-line no-restricted-globals,no-underscore-dangle
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        // eslint-disable-next-line no-restricted-globals
        self.skipWaiting();
    }
});
