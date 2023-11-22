const productsService = require("../Service/productsService");
const productScheme = require("./productValidation");
const Product = require("../models/schemas/productSchema");
const ProductData = require("../productData.json");

module.exports = {
  getProducts: async (req, res) => {
    const product = await productsService.getProducts();
    res.send(product);
  },
  addProducts: async (req, res) => {
    try {
      const { error, value } = productScheme.createProduct.validate(req.body);
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const product = await productsService.addProducts(value);
        return res.send(product);
      }
    } catch (error) {
      res.send(error);
    }
  },
  updateProducts: async (req, res) => {
    try {
      const { error, value } = productScheme.updateProduct.validate(req.body);
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const productId = req.params.id;
        const updateProductId = req.body;
        const product = await productsService.updateProducts(
          productId,
          updateProductId,
          value
        );
        return res.send(product);
      }
    } catch (error) {
      res.send(error);
    }
  },
  deleteProducts: (req, res) => {
    try {
      const { error, value } = productScheme.deleteProduct.validate(req.body);
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const productId = req.params.id;
        const deleteId = req.body;
        const deleteProduct = productsService.deleteProducts(
          productId,
          deleteId
        );
        res.send(deleteProduct);
      }
    } catch (error) {
      res.send(error);
    }
  },
  bulkProductData: async (req, res) => {
    const Products = await Product.bulkCreate(ProductData);
    res.status(201).json({
      success: true,
      Products,
    });
  },
};
