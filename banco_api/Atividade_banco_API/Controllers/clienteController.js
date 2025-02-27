let clientes = [
    {
        id: 1,
        nome: "Beatriz",
        email: "beatriz@gmail.com",
        telefone: "9999999999"
    }   
]; 

exports.createCliente = async (req, res) => {
    const { nome, email, telefone } = req.body;
  
    if (!nome || !email || !telefone) {
      return res.status(400).json({ message: 'Todos os campos (nome, email, telefone) são obrigatórios.' });
    }
}