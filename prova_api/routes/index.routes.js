const express = require ("express");
const livroroutes = require("./livros.routes");

routes.use("/livros.routes", livroroutes);

module.exports = routes;