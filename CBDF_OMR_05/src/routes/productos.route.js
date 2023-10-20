const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const productosController = require("../controllers/productos.controller.js");

//Definir las rutas
router.get("/", productosController.getAllProducto);
router.get("/:id", productosController.getProductoId);
router.post("/", productosController.createProducto);
router.put("/:id", productosController.updateProducto);
router.delete("/:id", productosController.deleteProducto);

module.exports = router;
