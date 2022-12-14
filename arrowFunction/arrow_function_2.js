const sum = (a,b) => {
    return a+b;
};
const subtract = (a,b) => {
    return a-b;
};
const calculator = (fn) => {
    return function(a,b){
        return fn(a,b);
    };
};
console.log(calculator(sum)(4,8))
//12

//Sempre que tiramos as chaves da Arrrow Function automaticamente temos um retorno.