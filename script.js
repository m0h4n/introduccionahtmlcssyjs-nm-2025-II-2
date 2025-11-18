// -----------------------------
// Pop-up tradicional con JS
// Forma clásica usando "getElementsByClassName" y "getElementById"
// Asignación de eventos con "onclick"
// -----------------------------

// -----------------------------
// Selección de elementos del DOM (HTML Document Object Model)
// -----------------------------
// El DOM es el puente entre HTML y JavaScript. Permite que tu JS “vea” y “modifique” 
// la página web como si fuera un conjunto de objetos que puedes manipular dinámicamente.
// para este ejemplo usamos getElementsByClassName devuelve una colección (array-like) de todos los elementos que tienen esa clase
// getElementById devuelve un único elemento que tenga ese id
let ventana = document.getElementsByClassName("ventana-emergente"); // Selecciona el/los div(s) del pop-up
let botonAbrirVentana = document.getElementById("boton-abrir");      // Selecciona el botón de abrir
let botonCerrarVentana = document.getElementById("boton-cerrar");    // Selecciona el botón de cerrar

// -----------------------------
// Asignación de eventos con onclick
// -----------------------------
// La forma tradicional consiste en usar la propiedad onclick del elemento
// para asignarle directamente la función que queremos que se ejecute cuando se haga click

// Abrir el pop-up
botonAbrirVentana.onclick = function () {
  // Cambiamos la propiedad display del primer elemento de la colección a "block"
  // para mostrar el pop-up
  ventana[0].style.display = "block";

  // [0] se refiere al primer elemento que tiene la clase "ventana-emergente"
  // Es necesario porque getElementsByClassName devuelve una colección, no un solo elemento

  // Ejemplo de cambiar otro estilo desde JS
  // ventana[0].style.transform = "rotate(30deg)"; // podemos manipular cualquier propiedad CSS
};

// Cerrar el pop-up
botonCerrarVentana.onclick = function () {
  // console.log("se cerró el pop up"); // útil para depuración
  // Cambiamos display a "none" para ocultar la ventana
  ventana[0].style.display = "none"; 
};








// // Pop-up moderno con JS
// // Segunda alternativa de sintaxis moderna con "querySelector" y "addEventListener"
// // -----------------------------

// // -----------------------------
// // Selección de elementos del DOM (HTML Document Object Model)
// // -----------------------------
// // El DOM es el puente entre HTML y JavaScript. Permite que tu JS “vea” y “modifique” 
// // la página web como si fuera un conjunto de objetos que puedes manipular dinámicamente.
// // querySelector selecciona elementos del HTML usando selectores CSS.
// // Nos permite “apuntar” a etiquetas, clases o ids desde JavaScript.
// // Para este ejemplo usamos const porque la referencia al elemento no va a cambiar, aunque sí podemos modificar sus propiedades (como style.display).

// const ventana = document.querySelector(".ventana-emergente"); // Selecciona el div del pop-up
// const botonAbrirVentana = document.querySelector("#boton-abrir");     // Selecciona el botón de abrir
// const botonCerrarVentana = document.querySelector("#boton-cerrar");   // Selecciona el botón de cerrar

// // -----------------------------
// // Funciones para abrir y cerrar el pop-up
// // -----------------------------

// // Función para abrir el pop-up
// function abrirPopup() {
//   // Cambiamos la propiedad display de CSS para mostrar la ventana
//   ventana.style.display = "block";
// }

// // Función para cerrar el pop-up
// function cerrarPopup() {
//   // Cambiamos la propiedad display de CSS para ocultar la ventana
//   ventana.style.display = "none";
//   // console.log("Se cerró el pop-up"); // útil para depuración
// }

// // -----------------------------
// // Asignación de eventos con addEventListener
// // -----------------------------
// // addEventListener escucha eventos (como clicks) sobre un elemento del DOM
// // El DOM es el puente entre HTML y JavaScript. Permite que tu JS “vea” y “modifique” 
// // la página web como si fuera un conjunto de objetos que puedes manipular dinámicamente.
// // Esto permite separar HTML (estructura) de JS (comportamiento)

// // Escuchamos el evento click para abrir el pop-up
// botonAbrirVentana.addEventListener("click", abrirPopup); 
// // Aquí no usamos onclick en HTML, mantenemos el HTML limpio

// // Escuchamos el evento click para cerrar el pop-up
// botonCerrarVentana.addEventListener("click", cerrarPopup);





// -----------------------------
// Funcionalidad extra: cerrar el pop-up al hacer click fuera de él
// -----------------------------
// Escuchamos clicks en todo el documento
// event.target nos dice sobre qué elemento se hizo click
// ventana.contains(event.target) verifica si el click fue dentro del pop-up
// event.target !== botonAbrir evita que se cierre al hacer click en el botón de abrir
document.addEventListener("click", function(event) {
  if (
    ventana.style.display === "block" &&
    !ventana.contains(event.target) &&
    event.target !== botonAbrir
  ) {
    cerrarPopup(); // Cerramos la ventana si el click fue fuera
  }
});



