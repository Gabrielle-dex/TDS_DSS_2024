const express = require("express");
const bodyParser = require("body-parser");
//para o CRUD 
const req = require("express/lib/request");
const res = require("express/lib/response");
//pasta
const indexRoutes = require("./routes/index_routes");


app.use(bodyParser.json());
const app = express();

app.use(indexRoutes);

app.listen (8080, ()=>{
        console.log("O servidor está rodando na porta 8080");
})