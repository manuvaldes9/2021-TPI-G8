module.exports = {
    HOST: "tpi-g8-dacs2021.mysql.database.azure.com",
    USER: "team8@tpi-g8-dacs2021",
    PASSWORD: "aguante-fantin8",
    DB: "grupo8",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };