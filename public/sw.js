// Enhanced Service Worker for EcoMetalix - Mobile Optimized
const CACHE_NAME = 'ecometalix-mobile-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/robots.txt',
  '/precios',
  '/materiales',
  '/faq',
  '/por-que-nosotros'
];

// Critical assets for mobile performance
const CRITICAL_ASSETS = [
  '/images/logoecometalix.webp',
  '/images/homehero.webp',
  '/images/materialhero.webp'
];

// Font assets for offline availability
const FONT_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install event - cache static assets with mobile optimization
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache static pages
      caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
      // Cache critical images for mobile
      caches.open(CACHE_NAME + '-images').then((cache) => 
        cache.addAll(CRITICAL_ASSETS.map(url => new Request(url, {mode: 'no-cors'})))
      ),
      // Cache fonts for mobile offline
      caches.open(CACHE_NAME + '-fonts').then((cache) => 
        cache.addAll(FONT_ASSETS.map(url => new Request(url, {mode: 'no-cors'})))
      )
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - mobile-optimized caching strategy
self.addEventListener('fetch', (event) => {
  // Skip non-HTTP requests
  if (!event.request.url.startsWith('http')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version immediately if available
        if (response) {
          // For mobile: update cache in background for next visit
          fetch(event.request)
            .then(fetchResponse => {
              if (fetchResponse.ok) {
                const responseClone = fetchResponse.clone();
                caches.open(getCacheName(event.request.url))
                  .then(cache => cache.put(event.request, responseClone));
              }
            })
            .catch(() => {}); // Ignore background update errors
          
          return response;
        }
        
        // Not in cache, fetch from network
        return fetch(event.request)
          .then(fetchResponse => {
            // Cache successful responses for mobile offline
            if (fetchResponse.ok && shouldCache(event.request)) {
              const responseClone = fetchResponse.clone();
              caches.open(getCacheName(event.request.url))
                .then(cache => cache.put(event.request, responseClone));
            }
            return fetchResponse;
          });
      })
      .catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
        // Return cached offline page or error
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
  );
});

// Helper function to determine cache name based on URL
function getCacheName(url) {
  if (url.includes('/images/')) return CACHE_NAME + '-images';
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) return CACHE_NAME + '-fonts';
  return CACHE_NAME;
}

// Helper function to determine if request should be cached
function shouldCache(request) {
  const url = request.url;
  // Cache images, fonts, and app pages
  return url.includes('/images/') || 
         url.includes('fonts.g') || 
         url.includes(self.location.origin);
} 