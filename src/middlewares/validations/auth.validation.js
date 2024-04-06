const { body } = require("express-validator")
const { loadData } = require("../../data")
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

const fieldEmailRegister = body("email")
    .notEmpty().withMessage("El email es requerido").bail()
    .isEmail().withMessage("Formato invalido").bail()
    .custom((value, { req }) => {
        const users = loadData("users")
        const existUser = users.find(u => u.email == value.trim())

        if (existUser) {
            throw new Error("Ya existe un usuario registrado con ese email")
        }

        return true;
    })

const fieldPasswordRegister = body("password")
    .notEmpty().withMessage("Campo requerido").bail()
    .isLength({ min: 8, max: 16 }).withMessage("Longitud invalida").bail()
    .matches(regExPass).withMessage("La contraseña es invalida");



module.exports = {
    loginValidation: [],
    registerValidation: [fieldEmailRegister, fieldPasswordRegister]
}