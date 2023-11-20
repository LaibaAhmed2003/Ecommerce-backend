const express = require("express");
const categoriesController = require("../Controller/categoriesController");
const router = express.Router();

// Categories Endpoints
router.get("/getCategory", categoriesController.getCategories);
router.post("/createCategory", categoriesController.createCategory);

module.exports = router;
