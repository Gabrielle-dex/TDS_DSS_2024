const express = require('express');
const bodyParser = require('body-parser');

//inicializar uma lista vazia para cliente
let clientesLista = [];
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const clientes = [{
    ID: x,
    nome:"Gabi"
}]; 

const validadorID = indetificador.filter(validaID);

function validaID(){

}

function soma(){
    for (x = int; x <= ultimocadastro; x++)
        return;
}
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