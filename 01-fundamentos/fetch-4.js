
let img = document.querySelector('img');


// fetch para futuras lecturas. "Funcion blob()"
fetch('superman.png')
   .then( resp => resp.blob() ) // Extraemos el readabeString
   .then( imagen => {

      // console.log(imagen);
      // Creamos un nuevo Url 
      var imgPath = URL.createObjectURL( imagen );
      // Asignamos el valor
      img.src = imgPath;
   })

