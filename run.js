const empresas = require('dacs-empresas');
const localStorage = require('localStorage');
const api_regimen = 'https://60a829368532520017ae5a5f.mockapi.io/regimen';
const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
const api_login = 'https://cli-serv-grupo1.herokuapp.com/api/auth/login'
const api_registro = 'https://cli-serv-grupo1.herokuapp.com/api/auth/register'
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjBhZjU2YzAyNDkwMDAxNTVhNzAyZSIsImlhdCI6MTYyNjM4NjI4NiwiZXhwIjoxNjI2NDcyNjg2fQ.MbyqBb4stlknlPzA4Epd00CMWpVQaLU_WQLa6668uH0';

empresas.getNotificacion(api_notificacion,"9a9c8b7e-c249-4cb5-a171-655502d0c89e").then(json => console.log(json[0].fecha));
// Login al ministerio

// empresas.loginMinisterio(api_login, "grupo8@frre.utn.edu.ar","dacs-frre").then().then(tkn => localStorage.setItem('token', tkn));

// const token = localStorage.getItem('token');

// console.log(token);

//Generación de registros
const registro1 = empresas.generarRegistro("1","Ripio",1234567895825,3800,"m^3",3500,2699);
const registro2 = empresas.generarRegistro("2","Cemento", 8596963247852, 849,"Bolsa x50 kg", 2365, 2300);
const registro3 = empresas.generarRegistro("3","Cal", 6958254573628, 351.80, "Bolsa x20 kg", 3285, 3146);


var lista_reg = empresas.cargarRegistro(registro1, lista_reg);
lista_reg = empresas.cargarRegistro(registro2, lista_reg);
lista_reg = empresas.cargarRegistro(registro3, lista_reg);


//Generación de un regímen
var fecha;
var regimen = empresas.generarRegimen(2020, 10, lista_reg, fecha, "15362585915", "Ricardo Ramirez e Hijos S.R.L");


//Carga de un regimen a la API
empresas.postRegimen(api_regimen, regimen);

