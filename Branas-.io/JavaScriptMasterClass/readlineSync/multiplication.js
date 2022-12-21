let readlineSync = require('readline-sync');
let userNumber = readlineSync.question('Escolha o numero em que deseja ver a tabela: ')
let timesMultiplied = readlineSync.question('Quantas vezes deseja multiplicar esse numero: ')

let multiplication = () =>{
    for(multipliedNumber = 0; multipliedNumber <= timesMultiplied; multipliedNumber++){
        mathematicalOperation = userNumber * multipliedNumber;
        console.log(`${userNumber} X ${multipliedNumber} = ${mathematicalOperation}`);
    }
};

multiplication()