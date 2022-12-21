const sum = (a,b) => a+b;
const subtract = (a,b) => a-b;
const calculator = fn => function(a,b){ return fn(a,b)};

console.log(calculator(sum)(5,7))

//Quando for utilizar a Arrow Function tiver apenas um parâmetro a ser passado, podemos eliminar o parênteses.