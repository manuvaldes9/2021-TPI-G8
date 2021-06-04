module.exports = (sequelize, Sequelize) => {
    const usuarios = sequelize.define("USUARIOS", {
      usuario: {
        type: Sequelize.STRING, primaryKey: true
      },
      contra: {
        type: Sequelize.STRING
      }
    });
  
    return usuarios;
  };