// string é uma corda, junção de chars
// variavel nome
var nome = "Gabrielle";

function nometraco(){

// variavel de espaço
let montaNome ='';

// for para percorrer o nome
    for(let i=0; i < nome.length; i++){

    // se o varivel i + 1 ( porque somar o valor mais um )
    // 2 + 1 = 3 ou seja a próxima posição eigual tamanho do nome
    // [i] posição
        if( i +1 == nome.length){
         //se ainda tiver letra depois de somar 1 continuar pro else, caso não não colocar -
            montaNome = montaNome + nome[i]    
        }else{
            montaNome = montaNome + nome[i] + '-'
        }
    
    }
}
// tranformar uppercase
    nome = nome.toUpperCase();

/* Var i = 0;
    while (i < nome.length){
     i++ }
     */
//mostrar no terminal
console.log(nometraco);
//AWAIT