let regExp = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result.index);
console.log(result.input);
//OS QUANTIFICADORES PODEM SER APLICADOS A CARACTERES, GRUPOS, CONJUNTOS OU METACARACTERES.
//{n} - QUANTIFICA UM NÚMERO ESPECÍFICO.
//{n,} - QUANTIFICA UM NÚMERO MÍNIMO.
//{n,m} - QUANTIFICA UM NÚMERO MÍNIMO E UM NPUMERO MÁXIMO.
// ? - ZERO OU UM
// * - ZERO OU MAIS
// + - UM OU MAIS