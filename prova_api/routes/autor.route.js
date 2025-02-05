const routes = require("express").Router();
//const express = require ("express"); RETIRAR
const autorcontroller = require("../controllers/autor.controller");

//CRUD

routes.post("/", autorcontroller.inserir);
routes.put("/:id([0-9]+)", autorcontroller.atualizar);
routes.get("/", autorcontroller.consultar);
routes.delete("/:id([0-9]+)", autorcontroller.delete);

module.exports = routes;