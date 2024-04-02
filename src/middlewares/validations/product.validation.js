const { check } = require('express-validator');

const fieldName = check("name")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .ball()
    .isAlphanumeric("es-ES", {ignore: " "})
    .withMessage("El campo nombre debe ser alfanumerico").ball()
    .isLength({ min: 5, max: 80 })
    .withMessage("La longitud del nombre es incorrecto")

const fieldPrice = check("price")
    .notEmpty().withMessage("El campo precio es requerido")
    .ball()
    .isNumeric().withMessage("El valor ingresado es incorrecto")

const fieldDiscount = check("discount")
    .optional({
        nullable: true
    })
    .isNumeric()
    .withMessage("El campo descuento debe ser un numero")

const fieldDescription = check("description")
    .notEmpty()
    .withMessage("La descripcion es requerida").ball()
    .isAlphanumeric('es-ES')
    .withMessage("El campo debe ser alfanumerico").ball()
    .isLength({ min: 30, max: 500 })
    .withMessage("La longitud del nombre es incorrecto")

const fieldImg = body("img").custom((value, {req})=>{
    const image = req.file
    const extValid = [".png",".webp",".jpg",".jpeg"]

    if(image?.filename){
        const file = req.file 
        const ext = path.extname(image.filename)

        if(!file){
            throw new Error('El archivo es requerido')
        }else{
            if(!extValid.includes(ext)){
                throw new Error('El tipo de imagen es incorrecto')
            }
        }
        
    }
    return true
})


const fieldCategory = check("category")
    .isIn(["in-sale", "visited",""]).withMessage("El valor ingresados son incorrectos")

module.exports = [
    fieldName,
    fieldPrice,
    fieldDiscount,
    fieldDescription,
    fieldCategory
]