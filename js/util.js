/**
 *  funcion para añadir eventos y que no peten en IE.
 *  Este script debe ser llamado primero, los otros utilizan esta funcion.
 *  @param element elemento al que se aplicara el evento
 *  @param type tipo de evento que se aplicara al elemento
 *  @param callback
 */
function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  }
}