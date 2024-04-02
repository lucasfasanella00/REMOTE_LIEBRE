const { loadData, saveData } = require("../../data")
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) { //Sino existe errores
        const { name, price, discount, description, category } = req.body;
        const image = req.file;
        const products = loadData();
        const newId = products[products.length - 1].id + 1;
        const newProduct = {
            id: newId,
            name: name.trim(),
            price: +price,
            discount: +discount,
            description: description.trim(),
            category: category?.trim(),
            image: image ? image.filename : "default-image.png"
        };

        products.push(newProduct)
        saveData(products)

        res.redirect(`/productos/detalle/${newId}`);
    } else { //Si existe errores
        const errorsMapped = errors.mapped()
        const old = req.body;

        res.render("admin/createProduct", {
            errors: errorsMapped,
            old
        })

    }


}