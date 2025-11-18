
// Para controlar reproducción de audio a través de un botón. Otra forma de escuchar eventos.

// function playSound() {
//   let audio = document.getElementById("audio");
//   audio.play(); // pause()
// }



// lo anterior es lo mismo que
// function playSound() {
//  document.getElementById("audio").play();
 
// }



// Para primer ejemplo de Botón también con opción de Play/Pause


function playSound() {
  let audio = document.getElementById("audio");
  if(audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Para Botón de Play/Pause. Usarlo con JS, y cambiar textos según el estado del botón.

document.getElementById("playPauseBtn").addEventListener("click", function () {
  let audio2 = document.getElementById("audio2");
  if (audio2.paused) {
    audio2.play();
    this.textContent = "Pausar";
  } else {
    audio2.pause();
    this.textContent = "Reproducir";
        // this.innerHTML = "Reproducir"; // otra forma de cambiar nombre
  }
});






// La misma sintaxis anterior, pero declarando primero la variable para el elemento playPauseBtn

// let botonplaypause = document.getElementById("playPauseBtn");

// botonplaypause.onclick = function() {
//   let audio = document.getElementById("audio2");
//   if (audio.paused) {
//     audio.play();
//     this.textContent = "Pausar";
     
//   } else {
//     audio.pause();
//     this.textContent = "Reproducir";
    
//   }
// }



// código para forzar que primero cargue el contenido el HTML y luego sí la función en JS. Esto se puede evitar poniendo defer en la etiqueta script en HTML.
//   document.addEventListener('DOMContentLoaded', function() {
//     var audio2 = document.getElementById('audio2');
//     var playPauseBtn = document.getElementById('playPauseBtn');

//     playPauseBtn.addEventListener('click', function() {
//       if (audio2.paused) {
//         audio2.play();
//         playPauseBtn.textContent = 'Pausar';
//       } else {
//         audio2.pause();
//         playPauseBtn.textContent = 'Reproducir';
//       }
//     });
//   });

// Para forzar el autoplay, apenas se cargue la página. Con onload en el <body> del HTML
// function playSound() {
//   var audio = document.getElementById("audio");
//   audio.play(); // pause()
// }
