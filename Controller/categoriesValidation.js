const Joi = require("joi");

const categoriesValidation = {
  createCategory: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });

    return schema.validate(data);
  },
};

module.exports = categoriesValidation;
