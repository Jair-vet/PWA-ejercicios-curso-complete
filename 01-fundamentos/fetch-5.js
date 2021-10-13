


fetch('https://reqres.in/api/users/1')
   .then( resp => {

      resp.clone().json() // Crea una copia de la respuesta
         .then( usuario => {
            console.log(usuario.data);
         });

      resp.clone().json() // Crea una copia de la respuesta
      .then( usuario => {
         console.log(usuario.data);
      });

      resp.json().then( usuario => {
         console.log(usuario.data);
      })
      .catch( error => {
         console.log('Error en la Petición');
         console.log(error);
      })

   });
  



