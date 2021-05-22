const empresas = require('./lib/grupo8.js')
const api = 'https://60a837a28532520017ae5b4d.mockapi.io/regimen';

const succeed = function(pepito) {return pepito};

console.log(empresas.getNotificacion(api));
