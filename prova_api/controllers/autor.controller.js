const conn = require("../db-conn");

module.exports = ({
    inserir: async (request, response) => {
        // const será pedida no corpo
        const { id, nome, nacilidade } = request.body;

        try {
            if (!autor) {
                response.status(309).send({ msg: "O campo é obrigatorio" });
            }
            await conn.raw(`INSERT INTO BIBLIOTECA.AUTOR(id, nome, nacionalidade) VALUES (${id}, ${nome}, ${nacilidade})`);
            response.status(200).send({ msg: "Cadastrado com sucesso" });

        } catch (error) {
            response.status(500).send({ msg: "Erro ao cadastrar" });
        }
    },

    consultar: (request, response) => {
        try {
            const data = []
            response.status(200).send(data[0]);
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao carregar os autores" })
        }
    },

    atualizar: async (request, response) => {

        const { id, id_autor, genero } = request.body;

        // vai precisar do where por ser o id escolhido
        conn.raw(`UPDATE AUTOR SET nome='${nome}', 
        nacilidade='${nacilidade}' WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                response.status(200).send({ msg: "Atualizado com sucesso" })
            }).catch((error) => {
                console.log(error);
                response.status(500).send({ msg: "Error ao atualizar" });
            });

    },
    delete: async (request, response) => {
        const { id } = request.params;

        try {
            await conn.raw(`DELETE FROM pessoa WHERE id = ${id}`);
            response.status(200).send({ msg: "Registro excluido com sucesso" });
        }
        catch {
            response.status(500).send({ msg: "Erro ao excluir registro" })
        }
    },

});