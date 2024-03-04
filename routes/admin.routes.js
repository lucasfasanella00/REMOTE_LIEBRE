const express = require('express');
const router = express.Router();

const { create, store, edit, update, destroy } = require("../controllers/admin");

router.get("/crear-producto", create);
router.post("/crear-producto", store);

router.get("/editar-producto/:id", edit);
router.put("/editar-producto/:id", update);

router.delete("/eliminar-producto/:id", destroy);

module.exports = router;