/**
 * Carga las funcionalidades que se aplicaran a todas las secciones.
 */
function cargarAnimacionesScroll() {
  console.log(document.getElementsByClassName('contenido_parrafo3'));
  
  listaParrafos = Array.from(document.getElementsByClassName('contenido_parrafo2'));
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