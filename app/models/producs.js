module.exports = (sequelize, Sequelize) => {
    const producs = sequelize.define("PRODUCS", {
      nombre: {
        type: Sequelize.STRING
      },
      EAN: {
        type: Sequelize.STRING, primaryKey: true
      },
      precioKG: {
        type: Sequelize.FLOAT
      },
      cantidadP: {
        type: Sequelize.FLOAT
      },
      cantidadV: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      }
    });
  
    return producs;
  };