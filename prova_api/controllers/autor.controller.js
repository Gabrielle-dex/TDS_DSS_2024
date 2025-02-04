const {response} = require ("express");
const conn = require ("../db-conn");

module.exports = ({
      inserir: async (require, response) =>{
            const {id} = request.body;
         
        try{
            if (!autor){
                response.status(309).send ({msg: "O campo é obrigatorio"});
            
            }
        await conn.raw (`INSERT INTO BIBLIOTECA.AUTOR(id, nome, nacionalidade) VALUES (${id}, ${nome}, ${nacilidade})`);
         response.status(200).send ({msg: "Cadastrado com sucesso"});
    
        }catch (error){
            response.status(500).send ({msg: "Erro ao cadastrar"});
        }
        },

        consultar: (require, response) => {
            try{
                response.status(200).send(data[0]);
            }
            catch (error){
                response.status(500).send({msg:"Erro ao carregar os autores"})
            }
        },
atualizar: async (require, response) =>{

    const { id, id_autor, genero} = req.body;

    conn.raw(`UPDATE CLIENTE SET nome='${nome}', nacilidade='${nacilidade}'`)
        .then((data) => {
            console.log(data);
            response.status(200).send({ msg: "Atualizado com sucesso" })
        }).catch((error) => {
            console.log(error);
            response.status(500).send({ msg: "Error ao atualizar" });
        });
    },

    delete: async(require, response) =>{
        const { id } = request.params;

        try{
           await conn.raw(`DELETE FROM pessoa WHERE id = ${id}`);
           response.status(200).send({msg: "Registro excluido com sucesso"});
        }
        catch{
        response.status(500).send({msg: "Erro ao excluir registro"})
        }
    },

});