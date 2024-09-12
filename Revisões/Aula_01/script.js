// ctrl + " abre o terminal no vscode

console.log('Hello, World!');
// atividade: construa uma função que receberá um lista como parâmetro e ela deve retomar,
//  essa lista de forma ordenada.

// listar a lista
var list = [1, 2, 3, 4, 5];

//percorrer a lista
function arry(list) {
    // começa a contagem no 0
    // para cada elemento menor < a variavel list criada a cima 
    // printar o elemento
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}    

// chamar a função
arry(list);
// -------------------------------------Explicações-----------------------------------
//object.
console.log(typeof list);
// estrutura função 
//tecnica de empasulamento de codigo
//entrada e saida
function OrdenaLista(parametro){
    return 0;
}

//comando de saida
console.log();
// var sofre alteração
// const não sofre alteração
//let escopo de função/ local/ não guardar memoria

// string: "sauash" - ' ' - ´iashsuha ${00}´
//´´ permite interpolação de dados 
//number: 1, 1.0, 0-1
//Objetct - Arry: {nome: idade:} - [1,1]
// boolean: 0(desligado) 1(ligado) - false, true
//date: new Date() buscar data atual do computador
// . é para pegar .gethours() para buscar o horário
