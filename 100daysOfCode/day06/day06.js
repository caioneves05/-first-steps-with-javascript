//Dado um número inteiro, crie uma função que retorne o próximo primo. Se o número for primo, retorna o próprio número.


const nextPrime = (num) => {
    if (isPrime(num)) {
      return num
    }
    return nextPrime(num + 1)
};
  
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
  }
  
  
const result = nextPrime(9)
console.log(result)


module.exports = { isPrime, nextPrime};
