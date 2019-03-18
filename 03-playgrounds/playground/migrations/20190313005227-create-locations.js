'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      long: {
        type: Sequelize.FLOAT
      },
      temp: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
          type: Sequelize.DATE,
	  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
          type: Sequelize.DATE,
	  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};
