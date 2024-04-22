// Obtener la URL actual con todos los parámetros de consulta
const urlActual = window.location.href;

// Reemplaza "URL_DE_DESTINO" con la URL a la que desees redirigir
const urlDestino = 'http://localhost:5173/mp-auth';

const href =
  urlDestino +
  (urlActual.includes('?') ? urlActual.substring(urlActual.indexOf('?')) : '');

// Redireccionar automáticamente a la URL de destino incluyendo los parámetros de consulta
window.location.href = href;
