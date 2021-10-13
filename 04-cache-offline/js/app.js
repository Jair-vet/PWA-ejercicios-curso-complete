

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}


// if ( window.caches ){
// 
//      // espacio donde vamos a almacenar información
//     caches.open('prueba-1'); // que intente abrir y si no crearlo
// 
//     caches.open('prueba-2');
// 
//     // caches.has('prueba-2') // Para preguntar si existe
//     //     .then( console.log); // arroja el mensaje en consola
// 
//     // caches.delete('prueba-2') // Borrar el cache para evitar que se consuma el espacio
//     //     .then(console.log);
//     
//     caches.open('cache-v1.1') .then( cache => {
// 
//         // cache.add('./index.html'); una forma de mandar a llamar un archivo
//                     // al cache
// 
//                     // Mas conveniente
//                     // Mandar un arreglo con todo lo que queremos agregar
//         cache.addAll([
//             // archivos del proyecto
//             '/index.html',  
//             '/css/style.css',
//             '/img/main.jpg'
// 
//             // Es una promesa por eso espera a ejecutar una accion
//         ]).then( () => {
//             // Borrar el archivo 
//             // cache.delete('/css/style.css');
// 
//             // Remplazar cualquier cosa en Cache
//             cache.put('index.html', new Response('Hola mundo'));
// 
//         });
// 
// 
// //         cache.match('/index.html') // Seleccionamos el archivo a leer del cache
// //                 .then(res => {
// //                     
// //                     // Para leer el archivo en consola
// //                     res.text().then(console.log);
// //                 })
// // 
// 
//     });
// 
//     // Obtener los archivos que tenemos en el cache
//     caches.keys().then( keys => {
//         console.log(keys);
//     })
// 
// 
// 
// 
// 
// }


