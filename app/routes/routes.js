module.exports = app => {
   // const usuarios = require("../controllers/usuarios.controller.js");
    const producs = require("../controllers/producs.controller.js");
    const libreria = require("../controllers/libreria.controller.js");
    
    var router = require("express").Router();

    //Recupera todos los usuarios
  //  router.get("/", usuarios.findAll);

    //Recupera todos los productos detallado
    app.get("/getProductos", producs.findAll);
    app.post("/regimen", libreria.regimen);
};