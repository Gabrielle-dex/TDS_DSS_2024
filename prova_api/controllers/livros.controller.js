const conn = require("../db-conn");

module.exports = ({
    inserir: async (request, response) => {
        // const { id } = request.body;

        try {
            if (!livro) {
                response.status(309).send({ msg: "O campo é obrigatorio" });
            }
            await conn.raw(`INSERT INTO BIBLIOTECA.LIVRO(titulo, id_autor, genero) VALUES ('${titulo}', '${id_autor}', '${genero}'`);
            response.status(200).send({ msg: "Cadastrado com sucesso" });

        } catch (error) {
            response.status(500).send({ msg: "Erro ao cadastrar" });
        }
    },

    consultar: async (request, response) => {
        try {
            const data = await conn.raw('SELECT * FROM LIVROS');
            response.status(200).send(data[0]);
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao carregar os livros" })
        }
    },

    atualizar: async (request, response) => {

        const { id, id_autor, genero } = request.body;

        conn.raw(`UPDATE CLIENTE SET titulo='${titulo}', id_autor ='${id_autor}, genero ='${genero}'`)
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
    }

});