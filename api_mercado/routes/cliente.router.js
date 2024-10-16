const routes = require("express").Router();
const clienteController = require("../controller/cliente.controller");

// CRUD
routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.put("/:id([0-9]+)", clienteController.atualizar);
routes.delete("/", clienteController.deletar);

module.exports = routes;
//pegar parametro (do link em cima)
//params
module.exports = ({
    cadastro: (req, res) =>{

    },
    atualizar: (req, res) =>{

    },
    
    deletar: (req, res)=> {

    },

    buscarporID: (req, res) =>{
        const {id} = req.params;

        conn.raw (`SELECT * FROM CLIENTE WHERE ID =${id}`)
        .then((data) =>{
            console.log(data);
            res.status(200).send(data[0]);
        }) .catch((error) =>{
            console.log(error);
            res.status(500).send("Erro ao buscar o cliente");
        })
    },
    consultar: (req, res) =>{

    }
})