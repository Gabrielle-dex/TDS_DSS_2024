const express = require ("express");
const bodyParser = require('body-parser');
const indexRoutes = require("./routes/index.routes");

// em cima
const app = express();
app.use(bodyParser.json());
app.use(indexRoutes);

app.listen(8080,(err) =>{
    if (err){
        console.error("Erro ao iniciar o servidor:", err);
    }
    else{
        console.log("Servidor iniciado na porta 8080");
    }
});

