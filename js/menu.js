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

}

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