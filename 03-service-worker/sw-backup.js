
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
        }, 1000);
    });

    // self.skipWaiting(); // Para actualizar el SW sin refresar

    event.waitUntil( instalacion ); // Espera hasta que la promesa se realice

});

// Cuando el SW toma el control de la aplicación

self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW: Activo y listo para controlar la app');

})