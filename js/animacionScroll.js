/**
 * Carga las funcionalidades que se aplicaran a todas las secciones.
 */
function cargarAnimacionesScroll() {

  listaParrafos = Array.from(document.getElementsByClassName('contenedor_parrafo_2'));
  addListener(window, 'scroll', cargarEnScroll);
}

function cargarEnScroll() {
  for (let i = 0; i < listaParrafos.length; i++) {
    let parrafo = listaParrafos[i];
    if (document.documentElement.scrollTop + window.innerHeight > parrafo.offsetTop) {
      parrafo.classList.add("cargar_imagenes");
      listaParrafos.splice(parrafo, 1);
    }
  }

}

addListener(document, 'DOMContentLoaded', cargarAnimacionesScroll);