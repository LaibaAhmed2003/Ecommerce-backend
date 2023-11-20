// const cartSchema = require("../models/schemas/cartSchema");
// const carts = [];

// const cartService = {
//   getCart: (userId) => {
//     return carts.filter((cart) => cart.user_id === userId);
//   },
//   addToCart: (userId, productId) => {
//     if (!userId || !productId) {
//       throw new Error("userId and productId are required");
//     }

//     const existingCartItemIndex = carts.findIndex(
//       (cart) => cart.user_id === userId && cart.product_id === productId
//     );

//     if (existingCartItemIndex !== -1) {
//       carts[existingCartItemIndex].quantity += 1;
//     } else {
//       const newCartItem = {
//         user_id: userId,
//         product_id: productId,
//         quantity: 1,
//       };
//       carts.push(newCartItem);
//     }

//     console.log("Added to cart:", userId, productId);

//     return { message: "Product added to cart successfully" };
//   },
//   deleteFromCart: (userId, productId) => {
//     if (!userId || !productId) {
//       throw new Error("userId and productId are required");
//     }

//     const existingCartItemIndex = carts.findIndex(
//       (cart) => cart.user_id === userId && cart.product_id === productId
//     );

//     if (existingCartItemIndex !== -1) {
//       carts.splice(existingCartItemIndex, 1);
//     }

//     console.log("Removed from cart:", userId, productId);

//     return { message: "Product removed from cart successfully" };
//   },
// };

// module.exports = cartService;

// const Cart = require("../models/schemas/cartSchema");

// const cartService = {
//   getCart: async (userId) => {
//     try {
//       const userCart = await Cart.find({ user_id: userId });
//       return userCart;
//     } catch (error) {
//       console.error("Error getting cart:", error);
//       throw new Error("Error getting cart");
//     }
//   },
//   addToCart: async (userId, productId) => {
//     if (!userId || !productId) {
//       throw new Error("userId and productId are required");
//     }

//     try {
//       const existingCartItem = await Cart.findOne({
//         user_id: userId,
//         product_id: productId,
//       });

//       if (existingCartItem) {
//         existingCartItem.quantity += 1;
//         await existingCartItem.save();
//       } else {
//         const newCartItem = new Cart({
//           user_id: userId,
//           product_id: productId,
//           quantity: 1,
//         });

//         await newCartItem.save();
//       }

//       console.log("Added to cart:", userId, productId);

//       return { message: "Product added to cart successfully" };
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       throw new Error("Error adding to cart");
//     }
//   },
//   deleteFromCart: async (userId, productId) => {
//     if (!userId || !productId) {
//       throw new Error("userId and productId are required");
//     }

//     try {
//       const deletedCartItem = await Cart.findOneAndDelete({
//         user_id: userId,
//         product_id: productId,
//       });

//       if (deletedCartItem) {
//         console.log("Removed from cart:", userId, productId);
//         return { message: "Product removed from cart successfully" };
//       } else {
//         console.log("Product not found in cart:", userId, productId);
//         return { message: "Product not found in cart" };
//       }
//     } catch (error) {
//       console.error("Error removing from cart:", error);
//       throw new Error("Error removing from cart");
//     }
//   },
// };

// module.exports = cartService;

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

  addToCart: async (productID, cartID) => {
    try {
      const newlyAdded = await models.product_cart.create({
        productID,
        cartID,
      });
      return newlyAdded;
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
