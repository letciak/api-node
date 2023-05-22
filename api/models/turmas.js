'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas extends Model {
    static associate(models) {
      turmas.belongsTo(models.pessoas, {
        foreignKey: 'docente_id'
      })
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