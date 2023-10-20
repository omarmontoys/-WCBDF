const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const facturasController = require("../controllers/facturas.controller.js");

//Definir las rutas
router.get("/", facturasController.getAllFactura);
router.get("/:id", facturasController.getFacturaId);
router.post("/", facturasController.createFactura);
router.put("/:id", facturasController.updateFactura);
router.delete("/:id", facturasController.deleteFactura);

module.exports = router;
