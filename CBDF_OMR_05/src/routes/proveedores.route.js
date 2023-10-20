const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const proveedorController = require("../controllers/proveedores.controller.js");

//Definir las rutas
router.get("/", proveedorController.getAllProveedor);
router.get("/:id", proveedorController.getProveedorId);
router.post("/", proveedorController.createProveedor);
router.put("/:id", proveedorController.updateProveedor);
router.delete("/:id", proveedorController.deleteProveedor);

module.exports = router;
