const express = require ("express");
const controllesAlunos = require("../Controlles/controlles.alunos");
const routes = express.Router();

//CRUD
routes.post("/", controllesAlunos.cadastrar);
routes.get("/", controllesAlunos.consultar);
routes.get("/:ra([0-9]+)", controllesAlunos.buscaPorRa);
routes.put("/", controllesAlunos.atualizar);
routes.delete("/:ra([0-9]+)", controllesAlunos.deletar);

module.exports = routes;