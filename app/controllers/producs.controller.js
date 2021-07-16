//Definicion de consultas para tabla PRODUCS
const db = require("../models");
const Producs = db.producs;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
        var fecha1 = new Date();
        var fecha2 = new Date();
        fecha2.setMonth(fecha1.getMonth() - 1);
        const db = require("../models");
        const Producs = db.producs;
        const Op = db.Sequelize.Op;
        try {
            Producs.findAll({
                attributes: [
                    "nombre",
                    "EAN",
                    "precioKG",
                    "cantidadP",
                    "cantidadV",
                    "unidad",
                ]//,
                // where: {
                //     fecha: {
                //         [Op.between]: [fecha2, fecha1],
                //     },
                // },
            })
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };



