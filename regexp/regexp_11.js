let regExp = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.exec("mary@gmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result.index);
console.log(result.input);
/*
\w -REPRESENTA O CONJUNTO [a-zA-Z0-9_]
\W - REPRESENTA O CONJUNTO [^a-zA-Z0-9_]
\d - REPRESENTA [0-9]
\D - REPRESENTA [^0-9]
\s - REPRESENTA UM ESPAÇO EM BRANCO
\S - REPRESENTA UM NÃO ESPAÇO EM BRANCO
\n - REPRESENTA UMA QUEBRA DE LINHA
\t REPRESENTA UM TAB
*/