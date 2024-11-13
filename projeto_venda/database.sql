
/*Banco de dados dll */
    CREATE DATABASE projeto_venda;

    CREATE TABLE cliente(
        ID_Cliente  PRIMARY KEYINT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefone DECIMAL (11,0),


    );

    CREATE TABLE produto(
        ID  PRIMARY KEYINT NOT NULL AUTO_INCREMENT,

    );

    CREATE TABLE   anotação do problema (
    descricao  VARCHAR(255),
    /*imagem , */
    );
    /*CRUD */

INSERT INTO projeto_venda.cliente(nome, email, telefone) VALUES("Vitor", "vitor@gmail.com" ,"46995575848");
    SELECT FROM * cliente;
    