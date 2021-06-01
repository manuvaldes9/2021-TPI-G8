//Definicion de consultas para tabla PRODUCS
const db = require("../models");
const Producs = db.producs;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Producs.findAll({ attributes: ['nombre','EAN','precioKG','cantidadP','cantidadV','fecha'] })
    .then(data => {
      const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
      console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
      console.log(err)
    });
};
