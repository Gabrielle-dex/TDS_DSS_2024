const Knex = require("knex");

modulo.exports = knex({
    connection: {
        host: localhost,
        port: 3306,
        user: "root",
        passoword:"",
        database: "REGISTRO"
    }
});