let readlineSync = require('readline-sync');
var name = readlineSync.question('Qual o seu nome lindo? ');
console.log(`Olá ${name}, seja muito bem vindo ao readlineSync.`);