"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tasks", "userId", Sequelize.UUID)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Tasks", "userId")
  },
}
