

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js")
    .then((registration) => {
     
      console.log("Service worker registration succeeded", registration)
    },
      (error) => {
        Toastify.error(`Service worker registration failed: ${error}`)
        console.log(`Service worker registration failed: ${error}`)
      }

    )
} else {
  console.log("Service workers are not supported.")
}







