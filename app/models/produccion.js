module.exports = (sequelize, Sequelize) => {
    const produccion = sequelize.define("PRODUCCIONES", {
      idProduccion: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true
      },
      idProducto: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.FLOAT
      },
      fecha: {
        type: Sequelize.DATE
      }
    });
  
    return produccion;
  };