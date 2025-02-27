const express = require ("express");
const routes = express.Router();
const agenciaController = require('../Controllers/agenciaController');

routes.get("/agencia", clienteController.getAgencia);
routes.post("/agencia", clienteController.createAgencia);
routes.put("/agencia/:id([0-9]+)", clienteController.updateAgencia);
routes.delete("/agencia/:id([0-9]+)", clienteController.deleteAgencia);

module.exports = routes;