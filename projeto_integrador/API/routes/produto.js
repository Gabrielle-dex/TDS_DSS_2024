const express = require('express');
const router = express.Router();
const connection = require('/Curso/TDS_DSS_2024/projeto_integrador/database/db-conn');

//CRUD
routes.get("/", (require, resquest) => {
    connection.query('SELECT * FROM Produto', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
routes.post("/", controller.inserir);
routes.put("/:id([0-9]+)", controller.atualizar);
routes.delete("/:id([0-9]+)", controller.delete);