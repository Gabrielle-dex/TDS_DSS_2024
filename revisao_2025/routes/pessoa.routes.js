const routes = express.routes();
const express = require ("express");
const PessoaController = require("../controllers/pessoa.controllers");

//CRUD
routes.post("/", pessoaController.inserir);
routes.get("/", pessoaController.consultar);
routes.put("/", pessoaController.alterar);
routes.delete("/", pessoaController.excluir);

module.exports = routes();
