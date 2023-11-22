// const cartService = require("../Service/cartService");
// const cartValidation = require("../Controller/cartValidation");

// const cartController = {
//   getCart: async (req, res, next) => {
//     try {
//       const userCart = await cartService.getCart(productID, cartID);
//       res.json(userCart);
//     } catch (error) {
//       console.error("Error getting cart:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   addToCart: async (req, res) => {
//     try {
//       const { error, value } = cartValidation.addToCart.validate(
//         { id: req.params.product_id, ...req.body },
//         {
//           abortEarly: false,
//         }
//       );
//       if (error) {
//         return res.send(error.details.map((err) => err.message));
//       } else {
//         const product_id = Number(req.params.product_id);
//         const { user_id } = value;
//         const newlyAdded = await cartService.addToCart(product_id, user_id);
//         return res.send(newlyAdded);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   },
//   updatedCartController: async (req, res, next) => {
//     try {
//       const { error, value } = cartValidation.updatedCart.validate(req.body);
//       if (error) {
//         return res.send(error.details[0].message);
//       } else {
//         const cartId = req.params.id;
//         const updateCartData = req.body;
//         const updated = await cartService.updatedCart(
//           cartId,
//           updateCartData,
//           value
//         );
//         res.send(updated);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   },
//   deleteCart: async (req, res, next) => {
//     try {
//       const { error, value } = cartValidation.deleteCart.validate(req.body);
//       if (error) {
//         return res.send(error.details[0].message);
//       } else {
//         const cartId = req.params.id;
//         const deleted = await cartService.deleteCart(cartId, value);
//         res.send(deleted);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   },

//   cartByIdController: async (req, res, next) => {
//     try {
//       const { error, value } = cartValidation.cartById.validate(
//         { cartId: req.params.id },
//         {
//           abortEarly: true,
//         }
//       );
//       if (error) {
//         return res.send(error.details.map((err) => err.message));
//       } else {
//         const cartId = Number(value.cartId);
//         const data = await cartService.cartById(cartId);
//         res.send(data);
//       }
//     } catch (error) {}
//   },
// };

// module.exports = cartController;

var express = require("express");
var router = express.Router();
var cartService = require("../Service/cartService");
var cartValidation = require("./cartValidation");

async function cartsController(req, res, next) {
  res.send(await cartService.getCart());
}

async function addCartController(req, res, next) {
  try {
    const { error, value } = cartValidation.addCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await cartService.addCart(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}
async function updatedCartController(req, res, next) {
  try {
    const { error, value } = cartValidation.updatedCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const cartId = req.params.id;
      const updateCartData = req.body;
      const updated = await cartService.updatedCart(
        cartId,
        updateCartData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}
async function deleteCartController(req, res, next) {
  try {
    const { error, value } = cartValidation.deleteCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const cartId = req.params.id;
      const deleted = await cartService.deleteCart(cartId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}
async function addToCartController(req, res, next) {
  try {
    const { error, value } = cartValidation.addToCart.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const { productID, cartID } = value;
      const newlyAdded = await cartService.addToCart(productID, cartID);
      return res.send(newlyAdded);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteFromCartController(req, res, next) {
  try {
    const { error, value } = cartValidation.deleteFromCart.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const { productID, cartID } = value;
      const deleted = await cartService.deleteFromCart(productID, cartID);
      return res.send(deleted.toString());
    }
  } catch (error) {
    res.send(error);
  }
}

async function cartByIdController(req, res, next) {
  try {
    const { error, value } = cartValidation.cartById.validate(
      { cartId: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const cartId = Number(value.cartId);
      const data = await cartService.cartById(cartId);
      res.send(data);
    }
  } catch (error) {}
}

module.exports = {
  cartsController,
  addCartController,
  updatedCartController,
  deleteCartController,
  addToCartController,
  cartByIdController,
  deleteFromCartController,
};
