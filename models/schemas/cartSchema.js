const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");

const cart = sequelize.define(
  "cart",
  {
    cartId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = cart;
