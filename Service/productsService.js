const { models } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  getProducts: async () => {
    const products = await models.Product.findAll();
    return products;
  },

  addProducts: async (data) => {
    const product = await models.Product.create(data);
    console.log("productss", product);
    return product;
  },

  updateProducts: async (productId, updateProductsData) => {
    const product = await models.Product.findByPk(productId);
    if (product) {
      await product.update(updateProductsData);
      return product;
    }
    return null;
  },

  deleteProducts: async (productId) => {
    const product = await models.Product.findByPk(productId);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  },
};
