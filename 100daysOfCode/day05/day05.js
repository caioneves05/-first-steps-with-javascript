//Joseph está fazendo as malas para as férias. Ele está tendo um pouco de dificuldade para encontrar todas as suas meias, no entanto.

//Escreva uma função que retorne o número de pares de meias que ele possui. Um par de meias consiste em duas letras iguais, como "AA". As meias são representadas como uma sequência não ordenada.

class Socks {
    constructor(socks){
        this.socks = socks;
    }

    countPairs(){
        const socks = this.socks.split("").sort();
        let pairs = 0;

        for(let i = 0; i< socks.length; i +=2) {
            if(socks[i] == socks[i+1]){
                pairs++;
            }
        }
        return pairs;
    }
};

const socks = new Socks("CABBACCC");
console.log(socks.countPairs()); 

module.exports = Socks;