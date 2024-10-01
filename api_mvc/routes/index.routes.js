const express = require('express');
const clientesRouter = require("./clientes.routes")


const routes = express.Router();

routes.use("/clientes", clientesRouter)

module.exports = routes;