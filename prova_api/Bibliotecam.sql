-- Criação do banco de dados
CREATE DATABASE BIBLIOTECA;

-- Criação da tabela AUTORES
CREATE TABLE BIBLIOTECA.AUTORES (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    NACIONALIDADE VARCHAR(50)
);

-- Criação da tabela LIVROS
CREATE TABLE BIBLIOTECA.LIVROS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TITULO VARCHAR(150) NOT NULL,
    ID_AUTOR INT NOT NULL,
    GENERO VARCHAR(50),
    FOREIGN KEY (ID_AUTOR) REFERENCES AUTORES(ID) ON DELETE CASCADE
);
-- Insere registro autores
INSERT INTO BIBLIOTECA.AUTORES (nome, nacionalidade) VALUES 
('J.K. Rowling', 'Britânica'),
('George R.R. Martin', 'Americano'),
('J.R.R. Tolkien', 'Britânico'),
('Agatha Christie', 'Britânica'),
('Isaac Asimov', 'Russo-Americano');

-- Insere registro livros
INSERT INTO BIBLIOTECA.LIVROS (titulo, id_autor, genero) VALUES
('Harry Potter e a Pedra Filosofal', 1, 'Fantasia'),
('Harry Potter e o Cálice de Fogo', 1, 'Fantasia'),
('A Guerra dos Tronos', 2, 'Fantasia'),
('O Senhor dos Anéis: A Sociedade do Anel', 3, 'Fantasia'),
('O Senhor dos Anéis: As Duas Torres', 3, 'Fantasia'),
('Assassinato no Expresso do Oriente', 4, 'Mistério'),
('E Não Sobrou Nenhum', 4, 'Mistério'),
('Fundação', 5, 'Ficção Científica'),
('Eu, Robô', 5, 'Ficção Científica'),
('O Hobbit', 3, 'Fantasia');