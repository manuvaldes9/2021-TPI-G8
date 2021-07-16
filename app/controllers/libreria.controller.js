const empresas = require("dacs-empresas");
const { sequelize } = require("../models");
const api_regimen = 'https://cli-serv-grupo1.herokuapp.com/api/reports'

exports.regimen = (req, res) => {
   var lista;
   try {
      sequelize.query("SELECT * FROM producs WHERE month(fecha)=month(curdate())-1 AND year(fecha)=year(curdate())")
         .then((data) => {
            for (y of data) {
               for (x of y) {
                  reg = empresas.generarRegistro("", x.nombre, parseInt(x.ean), x.precioKG, x.unidad, x.cantidadP, x.cantidadV);
                  lista = empresas.cargarRegistro(reg, lista);
               }
            }
            const fecha_actual = new Date;
            const anio_actual = fecha_actual.getFullYear();
            const mes_actual = fecha_actual.getMonth();
            regimen = empresas.generarRegimen(2021, 02, lista);
            var token = req.query.token;
            res.json(empresas.postRegimen(api_regimen, regimen, token));
         })
         .catch((err) => {
            console.log(err);
         });
   } catch (e) {
      console.error(e);
   }
}

