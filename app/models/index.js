const dbConfig = require("../database/db.config.js");
const Sequelize = require("sequelize");

// PASAMOS ESTA SECCION AL CONTROLADOR CORRESPONDIENTE
// const productos = require("../models/productos.js");
// const produccion = require("../models/produccion.js");
// const ventas = require("../models/ventas.js");

//Instancia de sequelize para la conexion a la BBDD
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  //Esta parte es porque nuestra BBDD usa certificación SSL 
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true
    }
  }
});


//Autenticacion a la BBDD
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch((err) => {
    console.error('Unable to connecto to db: ' + err);
  });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produccion = require("./produccion.js")(sequelize, Sequelize);

module.exports = db;
// PASAMOS ESTA SECCION AL CONTROLADOR

  //Definicion de los modelos a utilizar
  // const Productos = productos(sequelize, Sequelize);
  // const Produccion = produccion(sequelize, Sequelize);
  // const Ventas = ventas(sequelize, Sequelize);


  

  // //Seccion de CONSULTAS
  // Productos.findAll({ attributes: ['EAN','nombre','precioKG','stock'] })
  // .then(data => {
  //   const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
  //   console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
  // })
  // .catch(err => {
  //   console.log(err)
  // });

  // Produccion.findAll({ attributes: ['idProduccion','idProducto','cantidad','fecha'] })
  // .then(data => {
  //   const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
  //   console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
  // })
  // .catch(err => {
  //   console.log(err)
  // });

  // Ventas.findAll({ attributes: ['idVenta','fecha','idDetalle'] })
  // .then(data => {
  //   const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
  //   console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
  // })
  // .catch(err => {
  //   console.log(err)
  // })