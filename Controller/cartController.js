const cartService = require("../Service/cartService");
const cartValidation = require("../Controller/cartValidation");

const cartController = {
  // getCart: async (req, res, next) => {
  //   res.send(await cartService.getCart());
  // },
  getCart: async (req, res, next) => {
    try {
      const userCart = await cartService.getCart(productID, cartID);
      res.json(userCart);
    } catch (error) {
      console.error("Error getting cart:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addToCart: async (req, res) => {
    try {
      const { error, value } = cartValidation.addToCart.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const { productId, cartId } = value;
        const newlyAdded = await cartService.addToCart(productId, cartId);
        return res.send(newlyAdded);
      }
    } catch (error) {
      res.send(error);
    }
  },
  updatedCartController: async (req, res, next) => {
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
  },
  deleteCartController: async (req, res, next) => {
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
  },
  addToCartController: async (req, res, next) => {
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
  },
  deleteFromCartController: async (req, res, next) => {
    try {
      const { error, value } = cartValidation.deleteFromCart.validate(
        req.body,
        {
          abortEarly: false,
        }
      );
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
  },
  cartByIdController: async (req, res, next) => {
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
  },
};

module.exports = cartController;
