const fetch = require('node-fetch');
const empresas = require('./lib/grupo8.js');
const api_regimen = 'https://60a829368532520017ae5a5f.mockapi.io/regimen';
const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
const id = '2';

//GET a los datos de la API
empresas.getNotificacion(api_notificacion, id).then(sal => console.log(sal)); 
// Al parecer, para usar los resultados de esta función es obligatorio hacerlo dentro del .then() -- Habría que ver si le seguimos dando vueltas o lo dejamos ahí y ya fue


//Generación de un regímen
var fecha = "2025-05-31";
var regimen = empresas.generarRegimen(2025, 10, [{ registroNro: 1 }, { registroNro: 2 }, { registroNro: 3 }], fecha, "15362585915", "Ricardo Ramirez e Hijos S.R.L");
console.log(regimen);
// Está hecha la generación del regímen, pero falta la generación de los registros, debería hacerse de la misma manera que los regímenes.
// Tenemos que poder armar una lista de registros también, hay que ver si eso es una función o le dejamos el trabajo al usuario de la librería.
// Podemos tener también una función como agregarRegistro(regimen, registro) e ir agregándolos después de creados.


//Carga de un regimen a la API
empresas.postRegimen(api_regimen, regimen);

