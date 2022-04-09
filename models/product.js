'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasOne(models.Stock, {
        foreignKey: 'product_id',
        as: 'stock'
      })
    }
  }
  Product.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    price: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Product',
    createdAt: true,
    updatedAt: true,
  });
  return Product;
};