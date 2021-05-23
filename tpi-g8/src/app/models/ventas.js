module.exports = (sequelize, Sequelize) => {
    const ventas = sequelize.define("VENTAS", {
      idVenta: {
        type: Sequelize.INTEGER, 
        primaryKey: true
      },
      fecha: {
        type: Sequelize.DATE
      },
      idDetalle: {
        type: Sequelize.INTEGER
      }
    });
  
    return ventas;
  };