module.exports = app => {
    const produccion = require("../controllers/produccion.controller");
    const ventas = require("../controllers/ventas.controller");
    const productos = require("../controllers/productos.controller")

    var router = require("express").Router();

    //Recupera todas las producciones
    router.get("/produccion", produccion.findAll);

    //Recupera todas las ventas
    router.get("/ventas", ventas.findAll);

    //Recupera todos los productos
    router.get("/productos", productos.findAll);

    
}