

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then( reg => {
// 
//             setTimeout(() => {
//                 reg.sync.register('posteo-gatitos');
//                 console.log('Se enviaron fotos de gatitos al server');
//             }, 3000);

            Notification.requestPermission() // Consentimiento de usuario
                    .then( result => {
                        console.log(result);
                        reg.showNotification('Hola Papi!')
                    })
        });


    

}

// if( window.SyncManager){  }


// 
// fetch('https://reqres.in/api/users')
//     .then( resp => resp.text())
//     .then( console.log);