const express = require('express');
const bodyParser = require('body-parser');

//inicializar uma lista vazia para cliente
let clientesLista = [];
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const clientes = [{
    ID: 1,
    nome:"Gabi"
}]; 

app.post("/cadastro", (request, response) => {
    console.log(request.body.id);
    const {id, nome, email, senha} = request.body;
    // Negação ! ou seja não pode ter outro id
    // criou uma rota para que o percorra para não colocar igual
    if(!id){
        return response.status(400).send("É obrigatorio enviar o campo id!");
    }else if(!nome){
        return response.status(400).send("É obrigatorio enviar o campo nome!");
    }else if(!email){
        return response.status(400).send("É obrigatorio enviar o campo email!");
    }else if(!senha){
        return response.status(400).send("É obrigatorio enviar o campo senha!");
    }

    clientes.push(request.body);
    return response.status(200).send(cliente);
})
// modo de fazer com for
for (let i = 0; i < clientes.length; i++) {
    if(cliente[i].id == id){
        return response.status (400).send (`O código ${id} já existe!`);
    }
}

//modo de fazer com filter
clientes.filter((item) =>{
    if(item.id == id){
         return response.status(400).send(`O ID ${id} não existe!`);
    }})
const validadorID = indetificador.filter(validaID);

//fazer um filtro que retorne o cliente com base no parametro
app.get("/Clientes/: id([0-9]+)", (request, response) => {
    const { id } = request.params;

    const cliente = cliente.filter (item => item.id == id)
 

    if(!cliente.length){
        return response.status(400).send(`O ID ${id} não existe!`);
    }
    return response.send(cliente);
})

app.delete ("cliente/: id([0-9]+)", (request, response) => {
    const { id } = request.params;
   return response.send(request.params.id);
})

app.atualizar ("cliente/: id([0-9]+)", (request, response) => {
   return response.send(request.params.id);
})
app.post("/Cadastro", (request, response) => {

    clientes.push(request.body);
// antes de incluir precisa verificar as propriedades do body
    response.send(request.body)
})

app.get("/Consulta", (request, response) => {
    response.send(clientes)
})

app.get("/clientes")
clientes.filter()


app.listen(8080, (err) =>{
    console.log("Servidor iniciado na porta 8080");
})