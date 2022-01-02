'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      full_name: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      profile_picture: {
        type: Sequelize.STRING,
          allowNull: true,
      },
      bio: {
        type: Sequelize.STRING,
          allowNull: true,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};