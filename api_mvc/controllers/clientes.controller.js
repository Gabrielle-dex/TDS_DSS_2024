const clientes = []; 

module.exports = ({
    cadastro : (request, response)=>{
        const {id, nome, email, senha} = request.body;
        console.log(request.body);
        
        clientes = push({
            id, nome, email, senha
        })
    
        response.send(req.body);
    },
    atualizar: (request, response)=>{
        response.send("atualizar");
    },
    deletar: (request, response)=>{
        response.send("deletar");
    },
    consulta: (request, response)=>{
        response.send("consulta");
    },
    constultaPorID:(request, response)=>{
        response.send("consultaPorID");
    }
});