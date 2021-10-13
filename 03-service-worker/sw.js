
// Ciclo de vida del SW

self.addEventListener('install', event =>{

    // Descargar assets
    // Creamos un cahe

    console.log('SW: Instalando SW!!');

    const instalacion = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log('SW: Instalaciones Teminadas');
            self.skipWaiting();
            resolve();
        }, 1);
    });

    // self.skipWaiting(); // Para actualizar el SW sin refresar

    event.waitUntil( instalacion ); // Espera hasta que la promesa se realice

});

// Cuando el SW toma el control de la aplicación

self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW: Activo y listo para controlar la app');

})


// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cahe
//     console.log('SW: ', event.request.url);
//     
//     if( event.request.url.includes('https://reqres.in/') ){
// 
//         const resp  = new Response(`{ok: false, mensaje: jaja}`);
// 
//         event.respondWith(resp);
//     }
});

// SYNC: Recuperamos la conexión a Internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión');
    console.log(event);
    console.log(event.tag);

});


// PUSH: Manejar las push notifications
self.addEventListener('push', event => {

    console.log('Notificación recibida');


});