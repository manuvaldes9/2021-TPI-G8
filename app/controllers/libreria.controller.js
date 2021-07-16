const empresas = require("dacs-empresas");
// const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
//  //var token = '1f6f7d32-bf23-4d4e-8ed1-48195c6d5822';
// const api_login = 'https://60a829368532520017ae5a5f.mockapi.io/login'

// var token = empresas.loginMinisterio( api_login, "20858585961","JId9WHOHcqX4mdR");

// exports.getNotificacion=(req,res) =>{
// try{
//  empresas.getNotificacion(api_notificacion,token).then(data => { 
//     res.json(data);
//  //   empresas.getNotificacion(api_notificacion,token).then(json => console.log(json[0].fecha));
// });}
// catch(e){console.error(e);}
// };

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

