// Peticion GET
// https://reqres.in/api/users

fetch( 'https://reqres.in/api/users' )
    .then( resp => resp.json())
    .then( respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    })


// fetch( 'https://www.youtube.com/')
//     .then( resp => resp.text())
//     .then( html => {
// 
            //console.log(html); extrae todo el codigo html
//         document.open();
//         document.write( html);
//         document.close();
//     
// 
//     });
// 



/*
   <---------- Metodos ------------>

Response.arrayBuffer()
Returns a promise that resolves with an ArrayBuffer representation of the response body.

Response.blob()
Returns a promise that resolves with a Blob representation of the response body.

Response.clone()
Creates a clone of a Response object.

Response.error()
Returns a new Response object associated with a network error.

Response.formData()
Returns a promise that resolves with a FormData representation of the response body.

Response.json()
Returns a promise that resolves with the result of parsing the response body text as JSON.

Response.redirect()
Creates a new response with a different URL.

Response.text()
Returns a promise that resolves with a text representation of the response body.

*/