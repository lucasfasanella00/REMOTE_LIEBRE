const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// /productos

router.get("/detalles-de-producto", productsController.details)


module.exports = router