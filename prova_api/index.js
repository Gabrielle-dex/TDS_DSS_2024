const express = require ("express");
const bodyParser = require("body-parser");
const indexRoutes =  require ("./routes/index.routes");

const app = express();

app.use(bodyParser.json());
app.use(index.routes);

app.listen (8080, (err) =>{
    if (err){
        console.error("Não foi possivel conectar o servidor", err);
    }
    else
        console.log("Servidor iniciado com sucesso na porta 8080");
});