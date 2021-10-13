// Peticion POST
// https://reqres.in/api/users

let usuario = {
   nombre: 'Jair',
   edad: 21
};

fetch( 'https://reqres.in/api/users', {
   method: 'POST', // PUT
   body: JSON.stringify(usuario), // asi le mandamos la DATA
   headers: {
      'Content-Type': 'application/json'
   }
})
.then( resp => resp.json() )
.then( console.log)
.catch( error => {
   console.log('Error en la Petición');
   console.log(error);
});


