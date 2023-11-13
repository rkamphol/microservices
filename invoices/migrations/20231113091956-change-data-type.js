'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Invoices', 'totalAmount', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Invoices', 'totalAmount', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
