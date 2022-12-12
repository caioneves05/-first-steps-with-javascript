
//Vinculação implícita

/* const person = {
    name: 'Caio',
    jogos: ['Gta 5', 'GTA San Andreas', 'Fortine'],

    getJogos() {
        return this.jogos;
    }
};
console.log(person.getJogos())  */



//Vinculação Explícita

const jogo = {
    name: 'Gta 5',
    ano: 2020
};

const carro = {
    name: 'Civic',
    ano: 1984,
    mostrarNome() {
        return this.name;
    },
    //Trocando valores das propriedades com oo Call e Apply. 
    trocarAno(ano) {
        this.ano = ano;
    }
}
console.log(carro.mostrarNome.call(jogo));
carro.trocarAno(1999);
console.log(`Anteriormente o ano do carro era 1984, porém agora foi trocado para ${carro.ano}.`);


carro.trocarAno.call(jogo,2021);
console.log(`O ano do Jogo era 2020, porém foi atualizado para ${jogo.ano}.`);

//O bind cria uma nova função, reutilizando a função de outra propriedade de outra propriedade.
const trocarAnoJogo = carro.trocarAno.bind(jogo,2025);

trocarAnoJogo();
console.log(`O ano do jogo foi trocado novamente de 2021 para ${jogo.ano}.`)