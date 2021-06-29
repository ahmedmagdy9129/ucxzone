'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usersInvestors',{
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    investorId: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    roleId: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    }
  },{
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('usersInvestors')
};