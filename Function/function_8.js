const soma = function(){
    let total = 0;
    for( let argument in arguments){
        total += arguments[argument];
    }
    return total;
}
console.log(soma(1,2,3,4,5,6,7,8,9));
//45




//Por meio da variável implícita arguments é possível acessar os parâmetros da função invocada.

//ARGUMENTS retorna os parâmetros em forma de "array", porém em um OBJETO.