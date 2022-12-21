let regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result = regExp.exec("jane@hotmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
//[abc] - ACEITA QUALQUER CARACTERE DENTRO DO GRUPO, NESSE CASO A,B,C.
//[^abc] - NÃO ACEITA QUALQUER CARACTERE DENTRO DO GRUPO, NESSE CASO A,B,C.
//[0-9] - ACEITA QUALQUER CARACTERE DENTRE 0 E 9.
//[^0-9] - NÃO ACEITA QUALQUER CARACTERE DENTRE 0 E 9.
