const produtoController = require("../controller/produto.controller");

const routes = require("express").Router()


routes.get("/", produtoController.consultar)

module.exports = routes;