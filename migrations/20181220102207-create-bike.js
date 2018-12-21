'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      license: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      stealDate: {
        type: Sequelize.DATE
      },
      thiefDescription: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bikes');
  }
};
