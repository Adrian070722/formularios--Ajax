var cedula = document.getElementById("cedula");
var email = document.getElementById("email");
var fecha = document.getElementById("fecha");
var contrasena = document.getElementById("contrasena");
var mensaje = document.getElementById ("mensaje");
var enviar = document.getElementById ("enviar");


    enviar.addEventListener('click' , (e) =>{
        e.preventDefault();
        
    })

    

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'guardarFormulario.php'); 
  xhr.setRequestHeader('Content-Type', 'application/json');


  const data = JSON.stringify({
    cedula,
    email,
    fecha,
    contrasena,
    mensaje,
  });

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Envio de Datos exitoso !');
    } else {
      console.error('Error enviando los datos', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Network error:', xhr.statusText);
  };

  xhr.send(data); 


