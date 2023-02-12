import chalk from "chalk";

function trataErro(error) {
    // Instanciado um novo Objeto error
    throw new Error(chalk.red(error.code, ': Não há nenhum arquivo.'));
}

export default trataErro;