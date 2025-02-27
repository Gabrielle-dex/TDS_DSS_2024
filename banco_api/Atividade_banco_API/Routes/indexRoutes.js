const express = require('express');
const router = express.Router();

const agenciaRoute = require("./agenciaRouter");
const clienteRoute = require("./clienteRouter");
const contaRoute = require("./contaRouter");
const gerenteRoute = require("./gerenteRouter");

router.use("/agencia", agenciaRoute);
router.use("/cliente", clienteRoute);
router.use("/conta", contaRoute);
router.use("/gerente", gerenteRoute);

module.exports = router;