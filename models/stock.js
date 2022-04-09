'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product'
      })
    }
  }
  Stock.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sold:  {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    in_stock:  {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stock',
    createdAt: true,
    updatedAt: true,
  });
  return Stock;
};