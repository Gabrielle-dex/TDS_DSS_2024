const aluno = [];

// CRUD
module.exports = ({
    cadastrar: (req, res) => {
        alunos.push(req.body);
        return res.send(req.body) 
     },

    atualizar: (req, res) => {
         const {nome, email, ra} = req.body;
         alunos.filter(item => {
             if(item.ra == ra){
                 item.nome = nome;
                 item.email = email;
                 return res.send(atulizado);
             }
         })
         return res.status(400).send("Aluno não encontrado");
     },

    excluir: (req, res) => { 
        const {ra} = req.params;
        const index = alunos.findindex(item => item.ra == ra);

         if (index === -1){
             return res.status(400).send("Aluno ra não encontrado");
         }
         
         alunos.splice(index, 1);
         return res.send(alunos);
    },

    consultar: (req, res) => { 
        return res.send(alunos);
    },

    buscaPorRa: (req, res) => {

        const { ra } = req.params;

        const aluno = alunos.filter(item => item.ra == ra);

        if (!aluno.length) {
            res.status(400).send("Aluno não encontrado!");
        }

        res.send(aluno);

    }
    
})