const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const clientsController = require("../controllers/clientes.controller.js");

//Definir las rutas
router.get("/", clientsController.getAllCliente);
router.get("/:id", clientsController.getClienteId);
router.post("/", clientsController.createCliente);
router.put("/:id", clientsController.updateCliente);
router.delete("/:id", clientsController.deleteCliente);

module.exports = router;
