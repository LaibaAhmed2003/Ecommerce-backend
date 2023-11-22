var express = require("express");
var router = express.Router();
const productController = require("../Controller/productsController");
router.get("/getProducts", productController.getProducts);
router.post("/addProducts", productController.addProducts);
router.put("/updateProducts/:id", productController.updateProducts);
router.delete("/deleteProducts/:id", productController.deleteProducts);
router.post("/bulkCreate", productController.bulkProductData);
module.exports = router;
