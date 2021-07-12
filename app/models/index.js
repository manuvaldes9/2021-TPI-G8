const dbConfig = require("../database/db.config.js");
const Sequelize = require("sequelize");


//Instancia de sequelize para la conexion a la BBDD
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

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



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.usuarios = require("./usuarios.js")(sequelize, Sequelize);
db.producs = require("./producs.js")(sequelize, Sequelize);

module.exports = db;
