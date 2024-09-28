const cacheName = 'v1'

console.log('Hello from the service worker')



self.addEventListener("install", event => {
  console.log('Service Worker:Activated')

})

self.addEventListener('activate', e => {
  console.log("Service worker : Activated")
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log("Service worker is clearing old cache")
            return caches.delete(cache)
          }
        })
      )
    })
  )
})



// self.addEventListener("fetch", event => {
//   console.log("Service worker : Fetching data")
//   event.respondWith(
//     fetch(event.request)
//       .then(res => {
//         //make clone of response
//         const resClone = res.clone()
//         caches.open(cacheName).then(cache => {
//           cache.put(event.request, resClone)
//         });
//         return res
//       }).catch(err => caches.match(event.request).then(res => res))
//   )
// })  



self.addEventListener("fetch", event => {
  console.log("Service worker : Fetching data")
  event.respondWith(
    caches.match(event.request)
      .then(cacheResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          caches.open(cacheName).then(cache => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
        })
        return cacheResponse || fetchPromise
      })

  )
})

