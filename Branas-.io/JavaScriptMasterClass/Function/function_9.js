const soma = function(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
console.log(soma(1,2,3,4,5,6,7,8,9));
//45



//Também é possível acessar os parâmetros da função invocada por meio do rest parameter, retornando um ARRAY.

