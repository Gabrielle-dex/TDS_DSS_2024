/*Validar para não repetir o Id nem o e-mail */
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//.filter
// request reponse padrão call back
//cadastrar uma rota
//indentificar BaseURL = http://localhost:8080/ essa ultima barra é o motivo de por / no começo
// push só existe dentro de uma lista
// const global
const clientes = []; 
// response/responde é o retorno
// request usuario enviou os dados
app.post("/Cadastro", (request, response) => {

    clientes.push(request.body);
// antes de incluir precisa verificar as propriedades do body
    response.send(request.body)
})

app.get("/Consulta", (request, response) => {
    response.send(clientes)
})

app.listen(8080, (err) =>{
    console.log("Servidor iniciado na porta 8080");
})
