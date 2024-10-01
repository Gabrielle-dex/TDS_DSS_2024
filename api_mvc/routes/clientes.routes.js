const express = require('express');
const clientesController = require('../controllers/clientes.controller');

const routers = express.Router();

routers.post("/cadastro", clientesController.cadastro);
routers.get("/consulta", clientesController.consulta);


module.exports = routers;