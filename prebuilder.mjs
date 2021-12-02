import { writeFile } from 'fs/promises';

/*if ('serviceWorker' in navigator) {
    console.log('[Service Worker] Registering the worker.');
    navigator.serviceWorker.register('./service-worker.js', {scope: '/'}).then(() => console.log('CLIENT: service worker registration complete.'), err =>
      console.log('CLIENT: service worker registration failure.' + err));
  } else {
    console.log('CLIENT: service worker is not supported.');
  }*/
const data = '"serviceWorker"in navigator?(console.log("[Service Worker] Registering the worker."),navigator.serviceWorker.register("../service-worker.js").then(()=>console.log("[Service Worker] Registration complete."),e=>console.log("[Service Worker] Coudn\'t register because "+e))):console.log("[Service Worker] Browser not supported.");';

writeFile('./build/resources/js/retype.js', data, { flag: 'a'})