// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const authController = require('../controllers/auth');
const { registerValidation } = require('../middlewares/validations/auth.validation');

router.get('/iniciar-sesion', authController.login);
router.post('/iniciar-sesion', authController.loginProcess)

router.get('/registrarse', authController.register);
router.post('/registrarse', registerValidation, authController.registerProcess); 

module.exports = router;