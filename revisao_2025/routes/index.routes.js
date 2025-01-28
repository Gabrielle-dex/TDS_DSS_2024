const express = require ("express");
const pessoaRoute = require("./pessoa.routes");

const routes = express.Router();

routes.use("/pessoa", pessoaRoute);

module.exports = routes;