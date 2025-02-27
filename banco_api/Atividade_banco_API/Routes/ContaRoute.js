const express = require ("express");
const routes = express.Router();
const ContaController = require('../Controllers/contaController');

routes.get("/conta", contaController.getConta);
routes.post("/conta", contaController.createConta);
routes.put("/conta/:id([0-9]+)", contaController.updateConta);
routes.delete("/conta/:id([0-9]+)", contaController.deleteConta);

module.exports = routes;