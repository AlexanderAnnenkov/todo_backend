"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tasks", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tasks")
  },
}
