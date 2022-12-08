let regExp = /([a-z]+)@([\.a-z]+)/;
let result = regExp.exec("mary@hotmail.com");
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result.index);
console.log(result.input);
//GRUPOS DE CAPTURA 
//() DETERMINA UM GRUPO DE CAPTURA PARA REALIZAR A EXTRAÇÃO DE VALORES DE UMA DETERMINADA STRING.