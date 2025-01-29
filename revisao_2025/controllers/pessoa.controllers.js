const { response } = require("express");
const conn = require("../db.conn");

module.exports = ({
    inserir: async (request, reponse) =>{
        const {nome, idade} = request.body;
        try {
            if (!nome){
                response.status(309).send ({msg: "O campo nome é obrigatório"});
            }
            await conn.raw(`INSERT INTO pessoa (nome, email) VALUES ("${nome}", ${!email ? null : `"${email}"`})`);
            response.status(200).send({msg: "Pessoa cadastrada com sucesso"});
        } catch (error) {
            response.status(500).send ({msg: "Erro ao cadastrar pessoa"})
        }
    },
    consultar: async (request,response) =>{
        try{
            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send ({msg: "Erro ao carregar lista"})

        }
    },

    atualizar: async(request, response) =>{
        const { id } = request.params;
        const {nome, email} = request.body;

        await conn.raw(`update pessoa nome = "${nome}", email = "${email}" WHERE id = ${id}`);
    },
    deletar: async (request, response) =>{
         const { id } = request.params;

         try{
            await conn.raw(`DELETE FROM pessoa WHERE id = ${id}`);
            response.status(200).send({msg: "Registro excluido com sucesso"});
         }
         catch{
         response.status(500).send({msg: "Erro ao excluir registro"})
         }
    }
});