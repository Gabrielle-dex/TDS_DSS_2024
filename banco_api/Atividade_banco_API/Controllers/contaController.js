const express = require('express');
const routes = require('./routes');
const app = express();
let contas = [
    { id: 1, nome: 'Conta 1', saldo: 100 },
    { id: 2, nome: 'Conta 2', saldo: 200 },
  ];

exports.createConta = async (req, res) => {
    const { nome, saldo } = req.body;

    try {
        const novaConta = new Conta({ nome, saldo });
        await novaConta.save();
        res.status(201).json(novaConta);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar a conta", error });
    }
};

exports.updateConta = async (req, res) => {
    const { id } = req.params;
    const { nome, saldo } = req.body;

    try {
        const conta = await Conta.findByIdAndUpdate(id, { nome, saldo }, { new: true });

        if (!conta) {
            return res.status(404).json({ message: "Conta não encontrada" });
        }

        res.status(200).json(conta);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar a conta", error });
    }
};

exports.deleteConta = async (req, res) => {
    const { id } = req.params;

    try {
        const conta = await Conta.findByIdAndDelete(id);

        if (!conta) {
            return res.status(404).json({ message: "Conta não encontrada" });
        }

        res.status(200).json({ message: "Conta deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar a conta", error });
    }
};

