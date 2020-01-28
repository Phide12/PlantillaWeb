var menuVisible = false;

var intervaloAnimacionTitulo;
var escribirTituloSuperior;

var contadorLetrasSuperior = 0;
var contadorLetrasInferior = 0;
var contadorPalabras = 0;
//lista de palabras que se muestran en el inicio
var palabrasDisponibles = ['Java_Script_'.split(''), 'HTML_'.split(''), 'CSS_'.split(''), 'Builders_'.split('')]

//funcion para añadir eventos y que no peten en IE
function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  }
}

addListener(document, 'DOMContentLoaded', cargarEventos);

function cargarEventos() {
  addListener(document.getElementById('icono_menu'), 'click', desplegarMenu);
  addListener(window, 'resize', redimensionar);
  intervaloAnimacionTitulo = setInterval(animarTituloIntermitente, 750);
  if (window.matchMedia("(min-width: 750px)").matches) {
    escribirTituloSuperior = setInterval(escribirTitulo, 250);
  }
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

//funcion que gestiona la visibilidad del menu, al redimensionar desde pequeno a grande
function redimensionar() {
  let contenedorMenu = document.getElementById('contenedor_menus');
  if (window.matchMedia("(min-width: 750px)").matches) {
    if (contenedorMenu.style.display == 'none') {
      contenedorMenu.style.display = 'table-row';
    }
  } else if (window.matchMedia("(max-width: 751px)").matches){
    console.log('hhh');
    if (contenedorMenu.style.display == 'table-row') {
      contenedorMenu.style.display = 'none';
    }
  }
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



//funcion que escribe el titulo en la parte superior, en la pagina de inicio.
function escribirTitulo() {
  let palabraSuperior = '#Code'.split('');
  let palabraInferior = palabrasDisponibles[contadorPalabras];

  if (contadorLetrasSuperior < palabraSuperior.length) {
    document.getElementById('espacio_titulo_superior').innerHTML += palabraSuperior[contadorLetrasSuperior];
    contadorLetrasSuperior++;
  } else {
    if (contadorLetrasInferior < palabraInferior.length) {
      document.getElementById('espacio_titulo_inferior').innerHTML += palabraInferior[contadorLetrasInferior];
      contadorLetrasInferior++;
    } else {
      document.getElementById('espacio_titulo_superior').innerHTML = '';
      document.getElementById('espacio_titulo_inferior').innerHTML = '';
      contadorLetrasSuperior = 0;
      contadorLetrasInferior = 0;
      if (contadorPalabras < palabrasDisponibles.length-1) {
        contadorPalabras++;
      } else {
        contadorPalabras = 0;
      }
    }
  } 

  
}