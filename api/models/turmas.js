'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas extends Model {
    static associate(models) {
      //associate já realizada
    }
  }
  turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'turmas',
  });
  return turmas;
};