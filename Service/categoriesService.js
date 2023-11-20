const Category = require("../models/schemas/categorySchema");

const categoriesService = {
  getCategories: async () => {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      throw new Error("Error retrieving categories");
    }
  },

  createCategory: async (name) => {
    try {
      const existingCategory = await Category.findOne({ where: { name } });

      if (existingCategory) {
        throw new Error("Category already exists");
      }
      const newCategory = await Category.create({ name });
      return newCategory;
    } catch (error) {
      throw new Error("Error creating category");
    }
  },
};

module.exports = categoriesService;
