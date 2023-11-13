'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init({
    payee: DataTypes.INTEGER,
    payer: DataTypes.INTEGER,
    invoiceNumber: DataTypes.STRING,
    invoiceDate: DataTypes.DATE,
    totalAmount: DataTypes.NUMBER,
    currency: { type: DataTypes.STRING, defaultValue: 'usd' },
    status: { type: DataTypes.STRING, defaultValue: 'pending' }
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};