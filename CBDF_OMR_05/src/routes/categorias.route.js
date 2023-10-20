const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const categorysController = require("../controllers/categorias.controller.js");

//Definir las rutas
router.get("/", categorysController.getAllCategory);
router.get("/:id", categorysController.getCategoryId);
router.post("/", categorysController.createCategory);
router.put("/:id", categorysController.updateCategory);
router.delete("/:id", categorysController.deleteCategory);

module.exports = router;
