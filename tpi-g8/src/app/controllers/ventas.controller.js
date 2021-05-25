//Definicion de consultas para tabla VENTAS
const ventas = require("../models/ventas.js");
const Ventas = ventas(sequelize, Sequelize);

exports.findAll = (req, res) => {
    Ventas.findAll({ attributes: ['idVenta','fecha','idDetalle'] })
    .then(data => {
    const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
    console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
    console.log(err)
    });
};