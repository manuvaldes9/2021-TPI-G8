const express = require('express'); //Traigo la libreria de express
const bodyParser = require('body-parser'); //Luego de instalarlo, lo definimos
const router = express.Router(); //El router nos permite separar nuestras peticiones

var app = express(); //Inicializo express en una variable

//Le digo que usar a la variable app
app.use(bodyParser.json()); //Recibe json
app.use(bodyParser.urlencoded({extended:false})); //Recibe "Form URL encoded"
app.use(router); //Sirve para usar los diferentes métodos (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)

/*
//Esto es un ejemplo de un response, donde para cualquier ruta devuelva un "Hola"
app.use('/', function(req, res) {
    res.send('Hola');
})  //La funcion esta compuesta por 2 parametros, request y response (2 parametros que tiene toda funcion http)
*/

//Para ponerla a funcionar a la funcion, vamos a crear en donde va a escuchar
app.listen(3000); //Le decimos que escuche en el puerto 3000
console.log('La aplicacion está escuchando en http://localhost:3000')