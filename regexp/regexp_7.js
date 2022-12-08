//A BARRA É UTILIZADA ANTES DE CARACTERES ESPECIAIS, COM O OBJETIVO DE ESCAPÁ-LOS

let regExp = /john@gmail\.com/;
let result = regExp.exec("E-Mail: john@gmailxcom");
console.log(result);
