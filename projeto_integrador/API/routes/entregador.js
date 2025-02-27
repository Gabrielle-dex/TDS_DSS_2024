const express = require('express');
const router = express.Router();
const connection = require('/Curso/TDS_DSS_2024/projeto_integrador/database/db-conn');

//CRUD

routes.post("/", controller.inserir);
routes.put("/:id([0-9]+)", controller.atualizar);
routes.get("/", controller.consultar);
routes.delete("/:id([0-9]+)", controller.delete);