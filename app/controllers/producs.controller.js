//Definicion de consultas para tabla PRODUCS
const db = require("../models");
const Producs = db.producs;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  var fecha1 = new Date();
  var fecha2 = new Date();
  fecha2.setMonth(fecha1.getMonth()-1);
  
  const Producs = db.producs;
  const Op = db.Sequelize.Op;
  Producs.findAll({ attributes : ['nombre','EAN','precioKG','cantidadP','cantidadV','fecha','unidad'],
      where :{
          fecha:{
              [Op.between]:[fecha2,fecha1]
          }
      }
  
    })
    .then(data => {
      const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
      return(consulta);
      //console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
      console.log(err)
    });
};



