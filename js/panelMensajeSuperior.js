/**
 * Carga las funcionalidades necesarias para que funcione el panel de mensajes rotatorios.
 */
function cargarMensajePanelSuperior() {
  if (window.matchMedia("(min-width: 750px)").matches) {
    //lista de palabras que se muestran
    palabraSuperior = '#Code'.split('');
    palabrasDisponibles = [
      'Java_Script   '.split(''),
      'HTML   '.split(''),
      'CSS   '.split(''),
      'Builders   '.split('')
    ];

    contadorLetrasSuperior = 0;
    contadorLetrasInferior = 0;
    contadorPalabras = 0;
    setInterval(escribirSiguienteLetra, 250);
  }
}


/**
 * escribe la siguiente letra del mensaje actual, maneja el turno de los mensajes que se muestran.
 */
function escribirSiguienteLetra() {
  let palabraInferior = palabrasDisponibles[contadorPalabras];
  if (contadorLetrasSuperior < palabraSuperior.length) {
    document.getElementById('espacio_titulo_superior').innerHTML += palabraSuperior[contadorLetrasSuperior];
    contadorLetrasSuperior++;
  } else {
    if (contadorLetrasInferior < palabraInferior.length) {
      document.getElementById('espacio_titulo_inferior').innerHTML += palabraInferior[contadorLetrasInferior];
      contadorLetrasInferior++;
    } else {
      resetearMensaje();
    }
  }
}


/**
 * al escrbir las dos palabras enteras pasa a la siguiente, si llega al final resetea el contador 
 * y comienza otra vez el ciclo.
 */
function resetearMensaje() {
  document.getElementById('espacio_titulo_superior').innerHTML = '';
  document.getElementById('espacio_titulo_inferior').innerHTML = '';
  contadorLetrasSuperior = 0;
  contadorLetrasInferior = 0;
  if (contadorPalabras < palabrasDisponibles.length - 1) {
    contadorPalabras++;
  } else {
    contadorPalabras = 0;
  }
}

addListener(document, 'DOMContentLoaded', cargarMensajePanelSuperior);