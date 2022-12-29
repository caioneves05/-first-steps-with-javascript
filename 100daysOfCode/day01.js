/*

Converter idade em dias


Crie uma função que pegue a idade e retorne a idade em dias.

Notas:
Use 365 dias como a duração de um ano para este desafio.
Ignore os anos e dias bissextos entre o último aniversário e agora.
Espere apenas entradas de números inteiros positivos.

*/

function calAge(age){
    if(age < 0){
        return `Aceitamos apenas números negativos.`
    }else{
    return age * 365;
    }
};
console.log(calAge(-1));
console.log(calAge(65));
