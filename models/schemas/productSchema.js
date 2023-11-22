const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.JSON,
    rate: {
      type: DataTypes.FLOAT,
    },
    count: {
      type: DataTypes.INTEGER,
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
