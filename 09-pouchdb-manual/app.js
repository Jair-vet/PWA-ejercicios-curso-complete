

// Entrenamiento PouchDB

// 1- Crear la base de datos
// Nombre:  mensajes
var db = new PouchDB('mensajes');


// Objeto a grabar en base de datos
let mensaje = {
    _id: new Date().toISOString(),
    user: 'spiderman',
    mensaje: 'Mi tía hizo unos panqueques muy buenos',
    sincronizado: false
};


// 2- Insertar en la base de datos
// db.put(mensaje).then(console.log('inserción Lista!'));


// 3- Leer todos los mensajes offline
// Aparezcan en la consola 

db.allDocs({include_docs: true, descending: false})
    .then( docs => {
        console.log( docs.rows);
    });
      
  

// 4- Cambiar el valor 'sincronizado' de todos los objetos
//  en la BD a TRUE
// var remoteCouch = false;

// db.allDocs({include_docs: true, descending: true})
//     .then( docs => {
// 
//         docs.rows.forEach( row => {
//             // console.log(row.docs);
//             let doc = row.doc;
//             doc.sincronizado = true;
//              
            // Actualizamos
//             db.put( doc );
//         })
//     });
      

// 5- Borrar todos los registros, uno por uno, evaluando
// cuales estan sincronizados
// deberá de comentar todo el código que actualiza
// el campo de la sincronización 

db.allDocs({include_docs: true}).then( docs => {

    docs.rows.forEach( row => {

        let doc = row.doc;
        if ( doc.sincronizado ){
            db.remove( doc);
        }
    });
});

