const sequelize = require("../common/dbconnection");
const User = require("./schemas/userSchema");
const Product = require("./schemas/productSchema");
const Category = require("./schemas/categorySchema");
const Cart = require("./schemas/cartSchema");

// Define associations
User.hasMany(Cart, { onDelete: "CASCADE", foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Product, { onDelete: "CASCADE", foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Product.belongsToMany(Cart, { through: "CartItem", foreignKey: "product_id" });
Cart.belongsToMany(Product, { through: "CartItem", foreignKey: "cart_id" });

const models = sequelize.models;
console.log(models);
module.exports = { sequelize, models };
