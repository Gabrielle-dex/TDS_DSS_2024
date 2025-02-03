const routes = express.routes();
const express = require ("express");
const livrocontroller = require ("../controllers/livros.controller");

//CRUD

 routes.post("/", livrocontroller.inserir);
 routes.put ("/", livrocontroller.atualizar);
 routes.get("/", livrocontroller.consultar);
 routes.delete("/", livrocontroller.delete);

 module.exports = routes();
