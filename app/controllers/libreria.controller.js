const empresas = require('dacs-empresas');
const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
// var token = '1f6f7d32-bf23-4d4e-8ed1-48195c6d5822';
const api_login = 'https://60a829368532520017ae5a5f.mockapi.io/login'

var token = empresas.loginMinisterio( api_login, "20858585961","JId9WHOHcqX4mdR");

exports.getNotificacion=(req,res) =>{
empresas.getNotificacion(api_notificacion,token).then(json => {
                //
});
}
