const express = require("express");
router = express.Router();
const { Home, getAdd, postAdd, productDetails, editProduct, updateProduct, Delete } = require("../controller");

//route to homepage
router.get("/", Home);

//route to create new data page
router.get("/add", getAdd);

//route to post new data
router.post("/add", postAdd);

// route to product details page
router.get("/product/details/:id", productDetails);

// route to edit data page
router.get("/product/edit/:uuid", editProduct);

//route to update page
router.post("/product/edit/:uuid", updateProduct);

//route to delete data
router.delete('/delete/:id', Delete);

module.exports = router;
