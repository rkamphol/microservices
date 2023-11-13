'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payee: {
        type: Sequelize.INTEGER
      },
      payer: {
        type: Sequelize.INTEGER
      },
      invoiceNumber: {
        type: Sequelize.STRING
      },
      invoiceDate: {
        type: Sequelize.DATE
      },
      totalAmount: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};