const conn = require("../db.conn");

module.exports = ({
    inserir:(request, reponse) =>{
        conn.raw
        // reponse.status(200).send(data[0]); 
         //then e catch
    },
    consultar: async (request,response) =>{
      try{
        //filtro .where("id, valor desejado")
        const data = await conn.(pessoas);
          reponse.status(200).send(data[0]);
            }catch(error){
                response.status(500).send ({"msg: Erro ao carregar lista"});
            }
        }
});