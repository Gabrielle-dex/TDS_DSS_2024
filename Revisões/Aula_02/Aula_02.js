/* Construam duas funções que vão encontrar um número maior que uma lista
*/

var lista = [1, 2, 3, 100, 7, 6, 7, 8, 9, 10];


function encontraOMaior(){
    // .length conta quantos elementos tem na lista

    //let literaria de curta duração
    for (let i = 0; i > lista.length; i++) {
        if (lista [i] > lista [i]) {

            console.log("Posição " + i + " = " + lista[i]);
        }
    }
    return i;
}

//console.log(´A soma de ${encontrar_maior} e ${encontrar_menor} é ${encontrar_maior - encontrar_menor}´);

function encontraOMenor(){
    for (var j = 0; j < lista.length; j++) {
       // console.log (´Posição ${j} = ${lista[j]} ´);
    }
    return j;
}

 /* Usando o Foreach */
 /*
lista.forEach(item => {
    if (item > maior_valor) {
         maior_valor = item;
    }
}  */

function Resultado (){
    encontraOMaior();
    encontraOMenor();
}

Resultado();