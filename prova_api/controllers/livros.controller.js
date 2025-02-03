const {response} = require ("express");
const conn = require ("../db-conn");

module.exports = ({
    inserir: async (require, response) =>{
        const {livro} = request.body;
     
    try{
        if (!livro){
            response.status(309).send ({msg: "O campo é obrigatorio"});
        }
    }
    await conn.raw (`INSERT INTO BIBLIOTECA.AUTOR(titulo, id_autor, genero) VALUES ("{$titulo}", $!email ?)`)

    catch
    }
})