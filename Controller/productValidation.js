const Joi = require("joi");
module.exports = {
  createProduct: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.string().required(),
  }),
  updateProduct: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.string().required(),
  }),
  deleteProduct: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
