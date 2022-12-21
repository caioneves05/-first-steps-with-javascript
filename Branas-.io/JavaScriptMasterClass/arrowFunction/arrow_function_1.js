const sum = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}
const calculator = function(fn){
    return function (a,b){
        return fn(a,b);
    };
};
console.log(calculator(sum)(5,5));
//10


//Arrow functions tem uma abordagem mais simples e direta para escrever uma função e podem melhorar a legibilidade do código em diversar situações.