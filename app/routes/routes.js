module.exports = app => {
    const produccion = require("../controllers/produccion.controller.js");
    const ventas = require("../controllers/ventas.controller.js");
    const productos = require("../controllers/productos.controller.js")

    var router = require("express").Router();

    //Recupera todas las producciones
    router.get("/", produccion.findAll);

    //Recupera todas las ventas
    router.get("/", ventas.findAll);

    //Recupera todos los productos
    router.get("/", productos.findAll);
}