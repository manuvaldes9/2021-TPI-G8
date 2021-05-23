const empresas = require('./lib/grupo8.js')
const api = 'https://60a837a28532520017ae5b4d.mockapi.io/regimen';
const id = '2';


var x = empresas.getNotificacion(api,id).then(x => console.log(x));