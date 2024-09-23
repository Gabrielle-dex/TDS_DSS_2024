//variaveis
// require vai requisitar
const express = require("express");
//importar
const bodyparser = require("body-parser");

// app
const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
// base url onde o servidor esta executando
//  http://localhost:8800

// response trans informação 
//e o request do cliente, muito mais vem o body
app.get ("/", (request, response) => {
    response.status(200).send("O seu servidor está funcionando ");
});

// se não passar reponse ele adiciona por deful ( padrão 200)
// primeira é o do cliente depois a sua
// nf restruturação, quebrar em partes
// tornar o projeto escalavel (responsivo)
// sem listen o servidor não inicia

app.get("/clientes", (request, response) => {
    // objeto {}  
    //lista []
    const clientes = [
        {   
            ID: 1,
            nome: "Gabi",
            idade: 24
        },

    ]
    response.send (clientes);
});

app.post ("/cliente", (request, response) => {
    response.send ("teste");
})


// porta que vai rodar
app.listen (8080, () => {
    console.log("Servidor iniciado na porta 8080");
})

// ele atualiza automaticamente 
//nodemon node index.js
// npm start: forma de visualizar o servidor
/*para instalar um pacote
// - d cria uma propriedade dev (desenvolvimento)
npm install -d nodemon */