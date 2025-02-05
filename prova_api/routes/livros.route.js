const express = require("express");
//const express = require ("express"); RETIRAR
const livrocontroller = require("../controllers/livros.controller");

const routes = express.Router();
//CRUD

 routes.post("/", livrocontroller.inserir);
 routes.put ("/:id([0-9]+)", livrocontroller.atualizar);
 routes.get ("/", livrocontroller.consultar);
//  routes.get("/:id[0-9]+)", livrocontroller.buscarPorID);
 routes.delete("/:id([0-9]+)", livrocontroller.delete);

// para pegar e deletar usuario especifico

module.exports = routes;