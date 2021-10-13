


fetch('https://reqres.in/api/users/1000')
   .then( resp => {


      if ( resp.ok){
         resp.json();
      }else{
         // console.log('No existe el usuario')
         throw new Error('No existe el usuario 1000')
      }


      })
      .then( console.log )
      .catch( error => {
         console.log('Error en la Petición');
         console.log(error);
      })

  



