const express = require('express'); //Traigo la libreria de express
const bodyParser = require('body-parser'); //Luego de instalarlo, lo definimos
const cors = require("cors");
//const router = express.Router(); //El router nos permite separar nuestras peticiones

const app = express(); //Inicializo express en una variable

var corsOptions ={
    origin: "localhost:8080"
}

app.use(cors(corsOptions));

//Le digo que usar a la variable app
app.use(bodyParser.json()); //Recibe json
app.use(bodyParser.urlencoded({extended:true})); //Recibe "Form URL encoded"
//app.use(router); //Sirve para usar los diferentes métodos (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)


//Para ponerla a funcionar a la funcion, vamos a crear en donde va a escuchar
//app.listen(3000); //Le decimos que escuche en el puerto 3000
//console.log('La aplicacion está escuchando en http://localhost:3000')

const db = require("./app/models");
db.sequelize.sync();

app.get("/",(req,res) => {
    res.json({ message: "Holiwis"})
});

require("./app/routes/routes.js")(app);

const PORT =  process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


// const produccion = import('./app/controllers/produccion.controller.js');
// produccion.findAll;
// console.log(produccion.findAll);