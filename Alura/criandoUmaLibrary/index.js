import chalk from 'chalk';
import fs from 'fs';


function trataErro(error) {
    // Instanciado um novo Objeto error
    throw new Error(error);
}
/* 
function pegaArquivo(data) {
    const encoding = 'utf8';
    fs.readFile(data, encoding, (erro, texto) =>{
        if(erro){
            trataErro(erro,"Não há arquivo no diretório.")
        }
        console.log(chalk.green(texto));
    });
    
};
*/
function pegaArquivo(data) {

    const enconding = 'utf-8';
    //promise
    fs.promises
        .readFile(data, enconding)
        //resolve a promise e retorna o valor dela.
        .then((text)=> console.log(chalk.blue(text)))
        //em caso der erro, ele retornará error.
        .catch((trataErro))
}

pegaArquivo('./arquivos/texto.md');