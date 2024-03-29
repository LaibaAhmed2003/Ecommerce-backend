// const joi = require("joi");

// module.exports = {
//   getCart: joi.object().keys({
//     cartId: joi.number().required(),
//   }),

//   addToCart: joi.object().keys({
//     product_id: joi.number().required(),
//     cart_id: joi.number().required(),
//   }),
//   updatedCart: joi.object().keys({
//     cartId: joi.number().required(),
//   }),
//   deleteCart: joi.object().keys({
//     productID: joi.number().required(),
//     cartID: joi.number().required(),
//   }),
//   cartById: joi.object().keys({
//     cartId: joi.number().required(),
//   }),
// };

const joi = require("joi");
module.exports = {
  addCart: joi.object().keys({
    userID: joi.number().required(),
  }),
  deleteCart: joi.object().keys({
    cartId: joi.number(),
  }),
  updatedCart: joi.object().keys({
    cartId: joi.number().required(),
  }),
  addToCart: joi.object().keys({
    productID: joi.number().required(),
    cartID: joi.number().required(),
  }),
  cartById: joi.object().keys({
    cartId: joi.number().required(),
  }),
  deleteFromCart: joi.object().keys({
    productID: joi.number().required(),
    cartID: joi.number().required(),
  }),
};
