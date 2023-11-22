const { models } = require("../models");

module.exports = {
  getCart: async () => {
    const carts = await models.cart.findAll({ include: models.user });
    return carts;
  },
  addCart: async (data) => {
    const carts = await models.cart.create(data);
    console.log(carts);
    return carts;
  },

  updatedCart: async (cartId, updateCartData) => {
    const carts = await models.cart.findByPk(cartId);
    if (carts) {
      carts.update(updateCartData);
    }
    return carts;
  },

  deleteCart: async (cartId) => {
    const carts = await models.cart.findByPk(cartId);
    if (carts) {
      carts.destroy();
      return "CART DELETED SUCCESSFULLY";
    }
    return null;
  },

  addToCart: async (product_id, user_id) => {
    try {
      let userCart = await models.cart.findOne({
        where: { user_id },
      });
      if (!userCart) {
        userCart = await models.cart.create({ user_id });
      }

      let product = await models.product.findByPk(product_id);
      if (!product) {
        return res.status(404).json("Product not found !");
      }
      const myProduct = await userCart.addProduct(product);
      return myProduct;
    } catch (error) {
      console.log(error);
    }
  },

  deleteFromCart: async (productID, cartID) => {
    try {
      const deleteProduct = await models.product_cart.destroy({
        where: {
          productID,
          cartID,
        },
      });
      return deleteProduct;
    } catch (error) {
      console.log(error);
    }
  },

  cartById: async (cartId) => {
    try {
      const cartById = await models.cart.findByPk(cartId, {
        include: [
          {
            model: models.user,
          },
          {
            model: models.product,
            through: models.product_cart,
          },
        ],
      });
      if (cartById) {
        return cartById;
      } else {
        return "No cart with this ID";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
