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
  if (menuVisible) {
    contenedorMenu.style.display = 'none';
  } else {
    contenedorMenu.style.display = 'block';
  }
  menuVisible = !menuVisible;
}