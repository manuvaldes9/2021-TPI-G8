const db = require("../models");
const usuarios = db.usuarios;
const Op = db.sequelize.Op;


exports.findAll = (req, res) => {
    usuarios.findAll({ attributes: ['usuario','contra'] })
    .then(data => {
    const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
    console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
    console.log(err)
    });
};

