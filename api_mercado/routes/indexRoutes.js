const routes = require("express").Router();
const clienteRouter = require("./clienteRouter");
const produtoRouter = require("./produtoRouter");
const pedidoRouter = require("./pedidoRouter");


routes.use("/cliente", clienteRouter);
routes.use("/produto", produtoRouter);
routes.use("/pedido", pedidoRouter);

module.exports = routes;