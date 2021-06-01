module.exports = app => {
    // const produccion = require("../controllers/produccion.controller.js");
    // const ventas = require("../controllers/ventas.controller.js");
    // const productos = require("../controllers/productos.controller.js")
    const usuarios = require("../controllers/usuarios.controller.js");
    const producs = require("../controllers/producs.controller.js");
    const libreria = require("../controllers/libreria.controller.js");
    
    var router = require("express").Router();

    // //Recupera todas las producciones
    // router.get("/", produccion.findAll);

    // //Recupera todas las ventas
    // router.get("/", ventas.findAll);

    // //Recupera todos los productos
    // router.get("/", productos.findAll);

    //Recupera todos los usuarios
    router.get("/", usuarios.findAll);

    //Recupera todos los productos detallado
    router.get("/", producs.findAll);

    router.get("/", libreria.getNotificacion);
}