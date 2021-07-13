const empresas = require('./npm lib/grupo8.js');
const api_regimen = 'https://60a829368532520017ae5a5f.mockapi.io/regimen';
const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
const api_login = 'https://cli-serv-grupo1.herokuapp.com/api/auth/login'
// var token = '1f6f7d32-bf23-4d4e-8ed1-48195c6d5822';

// //GET a los datos de la API
// empresas.getNotificacion(api_notificacion,token).then(json => console.log(json[0].fecha));
// // Al parecer, para usar los resultados de esta función es obligatorio hacerlo dentro del .then() -- Habría que ver si le seguimos dando vueltas o lo dejamos ahí y ya fue

// Login al ministerio
//var token = async () => await empresas.loginMinisterio(api_login, "benjamin.kugler1996@gmail.com","123456").then(res => JSON.stringify(res.token)).then(sal => await sal);
//console.log(token())
// empresas.loginMinisterio(api_login, "benjamin.kugler1996@gmail.com","123456").then(sal => console.log(sal))

// //Generación de registros
// const registro1 = empresas.generarRegistro("Ripio",1234567895825,3800,"m^3",3500,2698);
// const registro2 = empresas.generarRegistro("Cemento", 8596963247852, 849,"Bolsa x50 kg", 2365, 2300);
// const registro3 = empresas.generarRegistro("Cal", 6958254573628, 351.80, "Bolsa x20 kg", 3285, 3146);


// var lista_reg = empresas.cargarRegistro(registro1, lista_reg);
// lista_reg = empresas.cargarRegistro(registro2, lista_reg);
// lista_reg = empresas.cargarRegistro(registro3, lista_reg);


// //Generación de un regímen
// var fecha;
// var regimen = empresas.generarRegimen(2020, 10, lista_reg, fecha, "15362585915", "Ricardo Ramirez e Hijos S.R.L");


// //Carga de un regimen a la API
// empresas.postRegimen(api_regimen, regimen);

