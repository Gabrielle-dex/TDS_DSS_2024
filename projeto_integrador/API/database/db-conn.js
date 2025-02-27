const knex = require("knex");

module.exports = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "DELIVERY LATCH"
    }
});

const mysql = require('mysql2');

connection.connect((err) =>{
    if(err) {
        console.error('Erro de conexão');
        return;
    }
    console.log('conectado ao banco de dados');
});

module.exports = connection;