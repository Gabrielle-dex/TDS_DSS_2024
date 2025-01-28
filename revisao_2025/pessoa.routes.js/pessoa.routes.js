const routes = express.routes();
const express = require ("express");
const PessoaController = require("../pessoa.controllers.js");

//CRUD
routes.post("/", pessoaController.inserir);
routes.get("/", pessoaController.consultar);
routes.put("/", pessoaController.alterar);
routes.delete("/", pessoaController.excluir);

module.exports = routes();
