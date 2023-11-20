const Joi = require("joi");
module.exports = {
  createUser: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  updateUser: Joi.object().keys({
    id: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  deleteUser: Joi.object().keys({
    id: Joi.number().required(),
    email: Joi.string().email(),
  }),
};
