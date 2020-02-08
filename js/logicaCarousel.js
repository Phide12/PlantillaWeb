/**
 * Carga las funcionalidades necesarias para que funcione el carousel.
 */
function cargarCarousel() {
  arrastrarCarousel = false;
  posClickInicial = 0;
  habilitarDesplazamientoAuto = false;

  posicionImagenes = document.getElementById('posicion_imagenes');
  addListener(document.getElementById('contenedor_carousel'), 'mousedown', comenzarArrastre);
  addListener(document, 'mouseup', cancelarArrastre);
  addListener(document.getElementById('contenedor_carousel'), 'mousemove', moverPosicionCarousel);

  if (window.matchMedia("(min-width: 750px)").matches) {
    habilitarDesplazamientoAuto = true;
    cargarDesplazamientoAutomatico();
  }

}

/**
 * devuelve el valor de left eliminando la parte final correspondiente a la medida
 * @returns valor en pixeles del atributo 'left' en el elemento carousel
 */
function obtenerPosicionCarousel() {
  let posicionActual = window.getComputedStyle(posicionImagenes).getPropertyValue('left');
  return parseInt(posicionActual.substr(0, posicionActual.length - 2));
}

/**
 * Inicia la accion de arrastrar, solo al hacer click dentro del carousel.
 */

function comenzarArrastre(evento) {
  arrastrarCarousel = true;
  posClickInicial = evento.clientX - obtenerPosicionCarousel();
}

/**
 * Detiene la accion de arrastrar, al levantar el click
 */
function cancelarArrastre() {
  if (arrastrarCarousel) {
    arrastrarCarousel = false;
    regresarPosicionValida();
  }
}


/**
 * Cambia la posicion horizontal del contenedor que tiene elementos del carousel, al mover el mouse.
 */
function moverPosicionCarousel(evento) {
  if (arrastrarCarousel) {
    let posNueva = evento.clientX - posClickInicial;
    inerciaMovimiento = posNueva * 0.10;//cantidad adicional a la posicion para simular inercia
    posicionImagenes.style.left = (posNueva + inerciaMovimiento) + 'px';
  }
}


/**
 * Controla que el carousel no pueda hacer scroll fuera del espacio delimitado
 * @param redimension si es false no afectara al comportamiento del desplazamiento automatico
 */
function regresarPosicionValida() {
  let posMaximaCarousel = (posicionImagenes.offsetWidth - window.innerWidth) * -1;
  console.log(posicionImagenes.clientWidth);
  let posicionActual = obtenerPosicionCarousel()
  if (posicionActual > 0) {
    posicionImagenes.style.left = 0 + 'px';
    if (habilitarDesplazamientoAuto) {
      desplazamientoDerecha = true;
    }
  } else if (posicionActual < posMaximaCarousel) {
    posicionImagenes.style.left = posMaximaCarousel + 'px';
    if (habilitarDesplazamientoAuto) {
      desplazamientoDerecha = false;
    }
  }
}

/**
 * Controla la configuracion de desplazamiento automatico en el carousel
 */
function cargarDesplazamientoAutomatico() {
  intervaloDesplazamiento = 1640;
  distanciaDesplazamiento = 300;

  desplazamientoDerecha = true;
  setInterval(desplazamientoAutomatico, intervaloDesplazamiento);
}

/**
 * mueve la poscion horizontal del carousel en la direccion que le toca
 */
function desplazamientoAutomatico() {
  if (!arrastrarCarousel) {
    let posicionActual = obtenerPosicionCarousel();
    let calcularPosicion;

    if (desplazamientoDerecha) {
      calcularPosicion = posicionActual - distanciaDesplazamiento;
    } else {
      calcularPosicion = posicionActual + distanciaDesplazamiento;
    }
    posicionImagenes.style.left = calcularPosicion + 'px';

    regresarPosicionValida();

  }
}


addListener(document, 'DOMContentLoaded', cargarCarousel);

