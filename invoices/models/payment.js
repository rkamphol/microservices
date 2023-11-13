'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    payee: DataTypes.INTEGER,
    payer: DataTypes.INTEGER,
    invoice: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    paymentAmount: DataTypes.NUMBER,
    currency: DataTypes.STRING,
    paymentMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};