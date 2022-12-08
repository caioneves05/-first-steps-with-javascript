const soma = function (a=1, b=1){
    return a+b;
}
console.log(soma(2,2));
//4, pois os dois valores foram declarados.
console.log(soma(5));
//6 pois o segundo parâmetro não foi declarado.
console.log(soma());
//2 pois nenhum dos parâmetros foram declarados.



//Podemos definir valores padrão para cada um dos parâmetros de uma função.
