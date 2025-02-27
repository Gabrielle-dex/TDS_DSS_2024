let Gerente = [
    {
        id: 1,
        nome: "Gabriela"
    }   
]; 

exports.createGerente = async (require, resquest) => {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ message: 'O campo nome é obrigatório.' });
    }
}

exports.deleteGerente = async (require, resquest) => {
    const { id } = req.params;
    try {
        const cliente = await Gerente.findByIdAndDelete(id);
        if (!cliente) {
          return res.status(404).json({ message: 'Gerente não encontrado.' });
        }
    
        res.status(200).json({ message: 'Gerente deletado com sucesso.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar gerente.', error });
      }
    };