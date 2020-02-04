var escribirTituloSuperior;

function cargarMensajePanelSuperior() {
  if (window.matchMedia("(min-width: 750px)").matches) {
    escribirTituloSuperior = setInterval(escribirSiguienteLetra, 250);
  }
}

//lista de palabras que se muestran
var palabraSuperior = '#Code'.split('');
var palabrasDisponibles = [
  'Java_Script   '.split(''),
  'HTML   '.split(''),
  'CSS   '.split(''),
  'Builders   '.split('')
];

var contadorLetrasSuperior = 0;
var contadorLetrasInferior = 0;
var contadorPalabras = 0;

//funcion que escribe la siguiente letra del mensaje actual, lleva el control del turno de cada palabra.
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