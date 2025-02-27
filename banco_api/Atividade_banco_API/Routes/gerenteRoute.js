const express = require ("express");
const routes = express.Router();
const GerenteController = require('../Controllers/gerenteController');

routes.get("/gerente", gerenteController.getGerentes);
routes.post("/gerente", gerenteController.createGerente);
routes.put("/gerente/:id([0-9]+)", gerenteController.updateGerente);
routes.delete("/gerente/:id([0-9]+)", gerenteController.deleteGerente);

module.exports = routes;