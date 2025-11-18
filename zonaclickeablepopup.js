// OTRA FORMA DE SINTAXIS DE POP UP - DIRECTA
// SIGNANDO EL ONCLICK DESDE EL BOTÓN y nombrando desde el botón la función


// Función para abrir pop-ups
function abrirPopUpZonaClickeable() {
  document.getElementsByClassName("ventana-emergente")[0].style.display = "block";
}


// Función para cerrar el pop-up
let botonCerrarVentana = document.getElementById("boton-cerrar");
botonCerrarVentana.onclick = function () {
  console.log("se cerró el pop up");
  document.getElementsByClassName("ventana-emergente")[0].style.display = "none";
};