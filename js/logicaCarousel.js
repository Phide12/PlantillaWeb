/**
 * Carga las funcionalidades necesarias para que funcione el carousel.
 */
function cargarCarousel() {
  arrastrarCarousel = false;
  posClickInicial = 0;
  posNueva = 0;

  posicionImagenes = document.getElementById('posicion_imagenes');
  addListener(document.getElementById('contenedor_carousel'), 'mousedown', comenzarArrastre);
  addListener(document, 'mouseup', cancelarArrastre);
  addListener(document.getElementById('contenedor_carousel'), 'mousemove', moverPosicionCarousel);
}


/**
 * Inicia la accion de arrastrar, solo al hacer click dentro del carousel.
 */

function comenzarArrastre(evento) {
  arrastrarCarousel = true;
  posClickInicial = evento.x - posNueva;
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
    posNueva = evento.x - posClickInicial;
    inerciaMovimiento = posNueva * 0.33;//cantidad adicional a la posicion para simular inercia
    posicionImagenes.style.left = (posNueva + inerciaMovimiento) + 'px';
  }
}


/**
 * Controla que el carousel no pueda hacer scroll fuera del espacio delimitado
 */
function regresarPosicionValida() {
  let posMaximaCarousel = (posicionImagenes.offsetWidth - window.innerWidth) * -1;
    //caso de sobrepasar al arrastrar hacia la izquierda
    if (posNueva > 0) {
      posicionImagenes.style.left = 0 + 'px';
      posNueva = 0;
    //cado se sobrepasar al arrastrar hacia la derecha
    } else if (posNueva < posMaximaCarousel) {
      posicionImagenes.style.left = posMaximaCarousel + 'px';
      posNueva = posMaximaCarousel;
    }
}


addListener(document, 'DOMContentLoaded', cargarCarousel);

