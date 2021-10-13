
// Revisar si en la respuesta viene un ok
fetch('no-encontrado.html')
    .then( resp => resp.text() )
    .then( html => {

        // Trer y Mostrar la información
        let body = document.querySelector( 'body');
        body.innerHTML = html;


    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    })





