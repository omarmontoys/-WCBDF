const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const ventasController = require("../controllers/ventas.controller.js");

//Definir las rutas
router.get("/", ventasController.getAllVentas);
router.get("/:id", ventasController.getVentasId);
router.post("/", ventasController.createVentas);
router.put("/:id", ventasController.updateVentas);
router.delete("/:id", ventasController.deleteVentas);

module.exports = router;
