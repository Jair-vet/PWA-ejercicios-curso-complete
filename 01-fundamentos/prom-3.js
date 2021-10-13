function retornaTrue(){
    return true;
}

function sumarLento( numero ){

    var promesa = new Promise( function (resolve, reject){

        setTimeout( function () {

            resolve( numero + 1);
            // reject( 'Sumar Lento Falló' );

        }, 800)

    });

    return promesa;
}

const sumarRapido = numero => {

    return new Promise((resolve, reject) => {

        setTimeout( () => resolve( numero + 1 ), 300);

    });

}

let cosas= [ sumarLento(6), sumarRapido(10), true, 'hola mundo', retornaTrue() ];

// Resive un arreglo
Promise.all(cosas) // Puede resolver cualquier cosa tareas agrupadas
    .then( respuestas =>{
        console.log( respuestas );
    })
    .catch( console.log );


// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);