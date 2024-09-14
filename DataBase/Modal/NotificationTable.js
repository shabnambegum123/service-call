const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const notificationTable = sequelize.define(
  "Notification",
  {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    Extra: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    SubjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = notificationTable;
