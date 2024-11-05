// pode ser utilizado const { deletar } = require("../controller/cliente.controller");
const conn = require ("../mysql-connection");

//CRUD 
module.exports = {

    cadastro: async (req, res) => {
        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send (data[0]);
        } catch (error){
            console.log(error);
            return res.status(500).send ({msg:"Erro ao cadastrar o produto!"});
        }
    },

    consultar: async (req, res) => {
        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send (data[0]);
        } catch(error){
            console.log(error);
            return res.status(500).send ({msg:"Erro ao consultar os produtos!"});
        }

    },

    atualizar: async (req,res) => {
        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send (data[0]);
        }catch (error){
            console.log(error);
            return res.status(500).send ({msg:"Erro ao atualizar o produto!"});
        }
    },

    deletar: async (req, res) => {
        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
        }catch (error){
            console.log(error);
            return res.status(500).send ({msg: "Erro ao deletar o produto!"});
        }

    }
}
 