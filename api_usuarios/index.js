const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, (err) =>{
    console.long("Servidor iniciado na porta 8080");
})

// request reponse padrão call back
//cadastrar uma rota
//indentificar BaseURL = http://localhost:8080/ essa ultima barra é o motivo de por / no começo
app.post("/Cadastro", (request, response) => {

    var list = [].push = {
        ID:"" ,
        Nome:""  ,
        Email:"" ,
        Senha: ""
        }

        return; 
    })

app.get("Consulta", (request, response) => {
    
})