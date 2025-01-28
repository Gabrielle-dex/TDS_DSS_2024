const express = require ("express");
const pessoaRoute = require("./pessoa.routes.js");

const routes = express.routes();
routes.use("/pessoa", pessoaRoute);

module.exports = routes;