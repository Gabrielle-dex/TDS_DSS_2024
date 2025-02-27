let clientes = [
    {
        id: 1,
        nome: "lisboa"
    }   
]; 
exports.createCliente = async (req, res )=> {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ message: 'O campo nome é obrigatório.' });
    }
}