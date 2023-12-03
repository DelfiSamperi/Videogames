const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genres', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    id: {
      //type: DataTypes.UUID,
      type: DataTypes.INTEGER,
      autoincrement: true,
      //allowNull:false,
      //unique: true,
      primaryKey: true,
      //defaultValue: DataTypes.UUIDV4
    }
  }, { timestamps: false });
};

// results.genres.name