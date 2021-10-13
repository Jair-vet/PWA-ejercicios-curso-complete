
// const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';

const CACHE_INMUTABLE_NAME = 'inmutable-v1';
const CACHE_DYNAMIC_LIMIT = 50;


function limpiarCache( cacheName, numeroItems ){

    caches.open( cacheName )
        .then( cache => {

            return cache.keys()
                .then( keys => {

                    if(keys.length > numeroItems){
                        cache.delete( keys[0] )
                                        // Dispara la funcion hasta que se cumplan los keys
                                            // Recursividad
                            .then( limpiarCache(cacheName, numeroItems) )
                    }


                });

            
        });

}


self.addEventListener('install',e => {


    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then( cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
                '/img/no-img.jpg'
            ]);

        });

        const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
            .then( cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));
               

        // espera hasta que la promesa se resuelva.
        e.waitUntil( Promise.all([cacheProm, cacheInmutable]));

});




self.addEventListener('fetch', e =>{

//     //5- Cahche & Network Race
        // -Competencia por ver quien responde primero-

    const respuesta = new Promise( (resolve, reject) => {

        let rechazada = false;

        const falloUnaVez = () => {
            if(rechazada){
        // Por si ambos fallan
                // Expresión Regular
                if( /\.(png|jpg)$/i.test(e.request.url) ){
                    // la imagen tiene que estar en el cache
                    resolve( caches.match('/img/no-img.jpg') );
                }else{
                    reject('No se encontro Respuesta');
                }
            }else{
                rechazada = true;
            }
        }

//  El Fetch
        fetch( e.request).then( res => {
            res.ok ? resolve(res) : falloUnaVez();
        }).catch( falloUnaVez );

//  El cache
        caches.match( e.request ).then( res => {
            res ? resolve( res ): falloUnaVez();
        }).catch( falloUnaVez );
    
    });



    e.respondWith(respuesta);




// 1- Cache Only  -Cuando queremos que toda la app sea servida desde el cahe-  
// Se va a todos los cahes (a buscar)
// Trae un e del request
// e.respondWith( caches.match( e.request ) )
    
// 2- Cache With Network Fallback -Primero le el cahce, si no funciona va a internet-
//     const respuesta = caches.match( e.request )
//         .then( res => {
    // 
    //             if(res) return res; // para validar el error 404
    // 
    //             // No existe el archivo
    //             // Tengo que ir a la Web
    //             console.log('No existe', e.request.url);
    // 
    //             return fetch( e.request )
    //                     .then( newResp => {
        // 
        //                         caches.open(CACHE_DYNAMIC_NAME)
        //                             .then( cache => {
            //                                 cache.put( e.request, newResp );
            //                                 limpiarCache( CACHE_DYNAMIC_NAME, 50);
            //                             });
            // 
            //                         return newResp.clone();
            //                     });
            //         });
            // 
            //     e.respondWith(respuesta);
                
                
    // 3- Network with cahce fallback  -Siempre hay consumo de Datos (Siempre tiene que hacer una Descarga)-
        // salimos abuscar el recurso
//     const respuesta = fetch(e.request).then( res => {
// 
//         if ( !res) return caches.match(e.request); 
// 
//         caches.open( CACHE_DYNAMIC_NAME )
//             .then( cache => {
//                 cache.put( e.request, res );
//                 // Para que el cache no cresca llamamos a la funcion
//                 limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT) // Para declarar el limite a mostrar
//             });
// 
//         return res.clone();
// 
//     }).catch( error => {
//             // Busca si hace match, si no manda error
//         return caches.match(e.request);
//     });
// e.respondWith(respuesta);


//   //4- with network update -Rendimiento Critico-
//         // Que cargue de manera rapido
//         // --Actualizaciones estarán un paso atras.--
//             // Cuando las actualizaciones son importantes.
//     if(e.request.url.includes('bootstrap')){
//         return e.respondWith( caches.match(e.request));
//     }
//     
//     const respuesta = caches.open( CACHE_STATIC_NAME) // Aqui almacenamos la nueva versión
//         .then( cache => {
// 
//             fetch( e.request ).then( newRes => 
//                 cache.put(e.request, newRes));
//             
//                 // regresar la peticion que le pide
//             return cache.match( e.request); // Mostramos el cache antiguo
// 
//         });
// 
// 
//     
//     e.respondWith(respuesta);
//     


});



