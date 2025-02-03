const routes = express.routes();
const express = require ("express");
const autorcontroller = require ("../controllers/autor.controller");

//CRUD

routes.post("/", autorcontroller.inserir);
routes.put("/", autorcontroller.atualizar);
routes.get("/", autorcontroller.consultar);
routes.delete("/", autorcontroller.deletar);

module.experts = routes();