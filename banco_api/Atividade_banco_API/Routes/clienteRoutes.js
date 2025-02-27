const express = require ("express");
const routes = express.Router();
const ClienteController = require('../Controllers/clienteController');

routes.get("/cliente", clienteController.getCliente);
routes.post("/cliente", clienteController.createCliente);
routes.put("/cliente/:id([0-9]+)", clienteController.updateCliente);
routes.delete("/cliente/:id([0-9]+)", clienteController.deleteCliente);

module.exports = routes;