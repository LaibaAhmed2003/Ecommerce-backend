const categoriesService = require("../Service/categoriesService");
const categoriesValidation = require("./categoriesValidation");

const categoriesController = {
  getCategories: async (req, res) => {
    try {
      const categories = await categoriesService.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCategory: async (req, res) => {
    const { name } = req.body;
    const { error } = categoriesValidation.createCategory({ name });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newCategory = await categoriesService.createCategory(name);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = categoriesController;
