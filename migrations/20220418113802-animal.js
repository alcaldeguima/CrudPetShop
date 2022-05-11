"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("animais", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      especie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("animais");
  },
};
