const livros = require('./listaLivros');
const menorValor = require('./index');

for(let i = 0; i < livros.length - 1; i++) {
// Vhamando a função dentro do for depois de importá-la.
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log(`Esse é o livro atual: ${JSON.stringify(livros[i])}`);
    let livrosMenorPreco = livros[menor];
    console.log('Esse é o menor livro: ', livros[menor]);

    livros[i] = livrosMenorPreco;
    livros[menor] = livroAtual;
};

console.log(livros);