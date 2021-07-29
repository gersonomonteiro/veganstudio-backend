"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      recipe_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ingredients: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      method: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      region: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contests");
  },
};
