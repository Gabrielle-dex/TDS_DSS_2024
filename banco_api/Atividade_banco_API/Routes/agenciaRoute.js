const express = require ("express");
const routes = express.Router();
const agenciaController = require('../Controllers/agenciaController');

routes.get("/agencia", agenciaController.getAgencia);
routes.post("/agencia", agenciaController.createAgencia);
routes.put("/agencia/:id([0-9]+)", agenciaController.updateAgencia);
routes.delete("/agencia/:id([0-9]+)", agenciaController.deleteAgencia);

module.exports = routes;