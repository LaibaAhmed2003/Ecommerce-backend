// const { DataTypes } = require("sequelize");
// const sequelize = require("../../common/dbconnection");
// const product = sequelize.define(
//   "product",
//   {
//     id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
//     name: {
//       allowNull: false,
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     price: {
//       allowNull: false,
//       type: DataTypes.NUMBER,
//     },
//   },
//   {
//     timestamps: true,
//     paranoid: true,
//   }
// );
// module.exports = product;

const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Product;
