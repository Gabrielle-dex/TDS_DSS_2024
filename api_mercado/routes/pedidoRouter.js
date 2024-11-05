const routes = require("express").Router();
const pedidoController = require("../controller/pedido.controller");

routes.get("/", pedidoController.consultar);

module.exports = routes;