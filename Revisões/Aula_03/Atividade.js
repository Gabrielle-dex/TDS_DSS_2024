/* 
    Operadores aritméticos: + - / * % 
    Logicos: > < >= <=
     == (igual) != (diferente) && (E) || (Ou) ! (não)
*/
 /* camelcase  tecnica
    snakecase  tecnica
    Pascalcase  tecnica
 */
// Fazer uma função que recebe 2 parametros e recebe os números comparando qual é o maior
 
function compararNumb (x, y){
    // receber
    //console.log("Digite o primeiro número: ");

    //console.log("Digite o segundo número: ");

    // fazer o calculo
     if(x > y){
        return x + " é maior que " + y ;
     }if (x < y){
            return y + "é maior que " + x;
        }
        else{
            return "Os números sao iguais";
        }
}

function compararNumbm (a , b){
    if (a == b){
        Console.log("Os números sao iguais");
    } 
    else (a > b)
}
/*                           ---- forma simples ---
    ? se
    : senao      */

(a == b) ? 
console.log("Os números sao iguais") : 
(a > b) ? console.log(a + " é maior que " + b) :
  console.log(b + " é maior que " + a);


/*Formas de passar os aparametro para a função*/
compararNumb(x, y);
//console.log(compararNumeros(5, 10));

// asncy await
//switch case é dificil de dar manutenção
// Enum teste{ ADMIN, CLIENTE}