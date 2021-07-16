module.exports = app => {
    const producs = require("../controllers/producs.controller.js");
    const libreria = require("../controllers/libreria.controller.js");
    var router = require("express").Router();

    app.get("/getProductos", producs.findAll);
    app.post("/regimen", libreria.regimen);
};