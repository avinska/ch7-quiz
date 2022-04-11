const express = require("express");
router = express.Router();
const { Home, getAdd, postAdd, editProduct, updateProduct } = require("../controller");

//homepage
router.get("/", Home);

//create
router.get("/add", getAdd);

router.post("/add", postAdd);

// update
router.get("/product/edit/:uuid", editProduct);
router.post("/product/update", updateProduct);
module.exports = router;
