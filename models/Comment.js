const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
        

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  }
);

module.exports = Gallery;
