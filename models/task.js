"use strict"

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100],
      },
      unique: true,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "updated_at",
    },
    index: {
      type: DataTypes.INTEGER,
    },
  })
  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      foreignKey: {
        type: DataTypes.UUID,
        field: "userId",
      },
    })
  }
  return Task
}
