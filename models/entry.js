'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.entry.belongsTo(models.user)
      models.entry.hasMany(models.comment)
    }
  }
  entry.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    is_private: DataTypes.BOOLEAN,
    words: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'entry',
  });
  return entry;
};