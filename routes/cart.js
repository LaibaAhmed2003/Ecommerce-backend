var express = require("express");
var router = express.Router();
const carts = require("../Controller/cartController");
/* GET products listing. */
router.get("/", carts.cartsController);
router.post("/add", carts.addCartController);
router.put("/update/:id", carts.updatedCartController);
router.delete("/delete/:id", carts.deleteCartController);
router.post("/addToCart", carts.addToCartController);
router.delete("/deleteFromCart", carts.deleteFromCartController);
router.get("/cartById/:id", carts.cartByIdController);
module.exports = router;
