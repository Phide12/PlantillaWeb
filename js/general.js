/**
 * Carga las funcionalidades que se aplicaran a todas las secciones.
 */
function cargarGeneral() {
  setInterval(animarTituloIntermitente, 750);
  addListener(document.getElementById('icono_menu'), 'click', desplegarMenu);
  let botonVolverArriba = document.getElementById('volver_arriba');
  if (botonVolverArriba != null) {
    addListener(botonVolverArriba, 'click', volverArriba);
  }
  addListener(window, 'resize', redimensionar);
}


/**
 * Cambia la visibilidad del elemento nav que contiene las secciones.
 */
function desplegarMenu() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  if (window.getComputedStyle(contenedorMenu).getPropertyValue("display") != 'none') {
    contenedorMenu.style.display = 'none';
  } else {
    contenedorMenu.style.display = 'table-row';
  }
}


/**
 * Hace scroll hasta la parte de arriba de la web.
 */
function volverArriba() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}


/**
 * hace se muestre el caracter '_' de forma intermitente al lado del titulo en la barra de navegacion.
 */
function animarTituloIntermitente() {
  let caracterFinalTitulo = document.getElementById('animacion_titulo');
  if (caracterFinalTitulo.innerHTML == '') {
    caracterFinalTitulo.innerHTML = '_';
  } else {
    caracterFinalTitulo.innerHTML = '';
  }
}


/**
 * gestiona al redimensionar, la situacion del menu dependiendo del tamaño de resolucion.
 */
function redimensionar() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  if (window.matchMedia("(max-width: 749px)").matches) {
    if (window.getComputedStyle(contenedorMenu).getPropertyValue("display") == 'table-row') {
      contenedorMenu.style.display = 'none';
    }
  } else if (window.matchMedia("(min-width: 750px)").matches) {
    if (window.getComputedStyle(contenedorMenu).getPropertyValue("display") == 'none') {
      contenedorMenu.style.display = 'table-row';
    }
  }
}


addListener(document, 'DOMContentLoaded', cargarGeneral);