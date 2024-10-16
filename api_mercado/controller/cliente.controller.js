const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => { },
    consultar: (req, res) => {
        conn.raw("SELECT * FORM CLEINTES").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os clientes!");
        });
    },
    atualizar: (req, res) => { 
        const { id, nome, telefone, status } = req.body;
        conn.raw(`UPDATE CLIENTE SET nome= '${nome}',
            telefone='${telefone}',  status=${status} WHERE id=${id}`).then((data) => {
                console.log(data);
                res.status(200).send({msg:"Atualizado com sucesso!"})
            }).catch((erro) => {
                console.log(erro);
                res.status(500).send({msg: "Erro ao atualizar o cliente!"});
            })
    },

    deletar: (req, res) => { }
})