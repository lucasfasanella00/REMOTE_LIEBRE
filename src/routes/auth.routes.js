// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const authController = require('../controllers/auth');

router.get('/iniciar-sesion', authController.login); 
router.get('/registrarse', authController.register); 

module.exports = router;