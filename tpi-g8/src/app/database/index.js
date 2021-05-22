const dbConfig = require("./db.config.js");
const Sequelize = require("sequelize");
const productos = require("../models/productos.js");


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


  //Definicion de los modelos a utilizar
  const Productos = productos(sequelize, Sequelize);




  //Seccion de CONSULTAS
  Productos.findAll({ attributes: ['EAN'] })
  .then(data => {
    const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
    console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
  })
  .catch(err => {
    console.log(err)
  })