var express = require("express");
var router = express.Router();
const carts = require("../Controller/cartController");

router.get("/", carts.getCart);
router.post("/add/:product_id", carts.addToCart);
router.put("/update/:id", carts.updatedCartController);
router.delete("/delete/:id", carts.deleteCartController);
// router.post("/addToCart", carts.addToCartController);
router.delete("/deleteFromCart", carts.deleteFromCartController);
router.get("/cartById/:id", carts.cartByIdController);

module.exports = router;
