// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const otherController = require('../controllers/other');

router.get('/', otherController.home); 
router.get('/buscar', otherController.search); 

module.exports = router;