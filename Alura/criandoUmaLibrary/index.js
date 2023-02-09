import chalk from 'chalk';
import fs from 'fs';


const textoTest = "A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.). [Teste de retorno 400](https://httpstat.us/404). [gatinho salsicha](http://gatinhosalsicha.com.br/)";

function extraiLinks(text) {
    // as espressões regulares tem que ser colocadas dentr de /espressão/
    const regexp = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm ;
    const capturas = [...text.matchAll(regexp)];
    
    console.log(chalk.blue(capturas))
}


function trataErro(error) {
    // Instanciado um novo Objeto error
    throw new Error(chalk.red(error.code, ': Não há nenhum arquivo.'));
}



async function pegaArquivo(data) {
    try {
        const encoding ='utf-8'
    
    const text = await fs.promises.readFile(data, encoding);
    console.log(chalk.green(text));
    } catch(error){
        trataErro(error)
    } finally {
        console.log(chalk.yellow("Operação finalizada."))
    }
}



extraiLinks(textoTest);