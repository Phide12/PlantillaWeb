function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  }
}

addListener(document, 'DOMContentLoaded', cargarEventos);
var menuVisible = false;

function cargarEventos() {
  addListener(document.getElementById('icono_menu'), 'click', desplegarMenu);
  var intervaloAnimacionTitulo = setInterval(animarTitulo, 750);
}

//funcion que cambia la visibilidad del elemento que contiene las secciones
function desplegarMenu() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  let cabecera = document.getElementById('cabecera');

  if (menuVisible) {
    contenedorMenu.style.display = 'none';
  } else {
    contenedorMenu.style.display = 'table-row';
  }
  menuVisible = !menuVisible;
}

//funcion que hace aparecer el caracter '_' de forma intermitente
function animarTitulo() {
  let caracterFinalTitulo = document.getElementById('animacion_titulo');
  if (caracterFinalTitulo.innerHTML == '') {
    caracterFinalTitulo.innerHTML = '_';
  } else if (caracterFinalTitulo.innerHTML == '_') {
    caracterFinalTitulo.innerHTML = '';
  }
}