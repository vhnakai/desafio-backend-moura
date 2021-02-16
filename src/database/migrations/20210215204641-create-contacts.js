'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('contacts',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      phonenumber: {
          type: Sequelize.STRING,
          allowNull: true
      },
      address: {
          type: Sequelize.STRING,
          allowNull: true
      },
      created_at:{ 
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{ 
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contacts');
    
  }
};
