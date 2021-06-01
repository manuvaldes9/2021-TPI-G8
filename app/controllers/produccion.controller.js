const db = require("../models");
const produccion = db.produccion;
const Op = db.sequelize.Op;

//Definicion de consultas para tabla PRODUCCION
// const produccion = require("../models/produccion.js");
// const Produccion = produccion(sequelize, Sequelize);


exports.findAll = (req, res) => {
    Produccion.findAll({ attributes: ['idProduccion','idProducto','cantidad','fecha'] })
    .then(data => {
      const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
      console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
      console.log(err)
    });
};