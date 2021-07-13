module.exports = app => {
    var path = require('path');
    const usuarios = require("../controllers/usuarios.controller.js");
    const producs = require("../controllers/producs.controller.js");
    const libreria = require("../controllers/libreria.controller.js");
    
    var router = require("express").Router();

    //Recupera todos los usuarios
    app.get("/users", usuarios.findAll); 

    //Recupera todos los productos detallado
    app.get("/getProductos", producs.findAll)

    app.get("/getNotificacion", libreria.getNotificacion); //NO ANDA, NO DEVUELVE NADA



    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/login.html'));
    });

    app.post('/auth', function(req, res) {
        usuarios.login(req, res);
    });

    app.get("/home",(req,res) => {
    res.json({ message: "Hola mundo"})
    });

    app.get("/probando", (req,res) => { 
        const db = require("../models");
        const usuarios = db.usuarios;
        const Op = db.sequelize.Op; 
        usuarios.findOne({ attributes: ['user','probando123']})
    })

}