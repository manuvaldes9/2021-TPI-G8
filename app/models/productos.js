module.exports = (sequelize, Sequelize) => {
    const productos = sequelize.define("PRODUCTOS", {
      EAN: {
        type: Sequelize.STRING, primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      precioKG: {
        type: Sequelize.FLOAT
      },
      stock: {
        type: Sequelize.FLOAT
      }
    });
  
    return productos;
  };