// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/products');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.list); 


/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', productsController.detail); 




module.exports = router;