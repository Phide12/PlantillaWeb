var menuVisible = false;
var intervaloAnimacionTitulo;

//funcion para añadir eventos y que no peten en IE
function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  }
}

addListener(document, 'DOMContentLoaded', cargarScripts);

function cargarScripts() {
  addListener(document.getElementById('icono_menu'), 'click', desplegarMenu);
  
  intervaloAnimacionTitulo = setInterval(animarTituloIntermitente, 750);
  
  cargarCarousel();
  cargarMensajePanelSuperior();
  addListener(window, 'resize', redimensionar);
  addListener(document.getElementById('volver_arriba'), 'click', volverArriba);
}

//funcion que cambia la visibilidad del elemento que contiene las secciones
function desplegarMenu() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  if (menuVisible) {
    contenedorMenu.style.display = 'none';
  } else {
    contenedorMenu.style.display = 'table-row';
  }
  menuVisible = !menuVisible;
}

//funcion que hace aparecer el caracter '_' de forma intermitente
function animarTituloIntermitente() {
  let caracterFinalTitulo = document.getElementById('animacion_titulo');
  if (caracterFinalTitulo.innerHTML == '') { 
    caracterFinalTitulo.innerHTML = '_';
  } else if (caracterFinalTitulo.innerHTML == '_') {
    caracterFinalTitulo.innerHTML = '';
  }
}

//funcion que gestiona lo que se vera en la web, al redimensionar la ventana
//no haria falta en una web real, pero esta para probar el diseno responsive
function redimensionar() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  
  if (window.matchMedia("(max-width: 749px)").matches) {
    if (contenedorMenu.style.display == 'table-row') {
      contenedorMenu.style.display = 'none';
    }
  } else if (window.matchMedia("(min-width: 750px)").matches) {
    if (contenedorMenu.style.display == 'none') {
      contenedorMenu.style.display = 'table-row';
    }
    if (escribirTituloSuperior == null) {
      escribirTituloSuperior = setInterval(escribirSiguienteLetra, 250);
    }
  } 
}

//
function volverArriba() {
  window.scroll({
    top: 0, 
    behavior: 'smooth'
  });
}