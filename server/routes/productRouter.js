const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');
const allowIfLoggedin = require ("../middlewares/allowIfLoggedIn")
const grantAccess = require("../grantAccess/userAccess");
const {defineProductRoles} = require("../roles/productRole");

router.post("/", allowIfLoggedin, grantAccess(defineProductRoles, "createAny", "product") , productController.createProduct);
router.get("/", allowIfLoggedin , grantAccess(defineProductRoles, "readAny", "product") ,productController.getProducts);
router.get("/:productId", allowIfLoggedin, grantAccess(defineProductRoles, "readAny", "product") ,productController.getProduct);
router.put("/:productId", allowIfLoggedin, grantAccess(defineProductRoles, "updateAny", "product"), productController.updateProduct);
router.delete("/:productId", allowIfLoggedin, grantAccess(defineProductRoles, "deleteAny", "product"), productController.deleteProduct);

module.exports = router;