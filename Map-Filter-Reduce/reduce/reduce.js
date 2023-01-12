const numbers = [1,2,3,4,5];

const result = numbers.reduce((acc, item) => {
    return acc + item;
});

console.log(result); //15




//or




const palavras = ['oi', 'Olá','OláoiOlá']

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) =>{
  if(palavraAtual.length > maiorPalavra.length){
    return palavraAtual;
  }

  return maiorPalavra;
}, '');

console.log(maiorPalavra)




//or




const pokemons = [
    {
      name: 'Pikachu',
      type: 'eletric'
    },
    {
      name: 'Squirtle',
      type: 'water'
    },
    {
      name: 'Magikarp',
      type: 'water'
    }
  ]
  
  const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo,pokemonAtual) =>{

    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] ||[];
    
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    
    return pokemonsPorTipo
  
  }, {});
  
  console.log(pokemonsPorTipo.eletric)
  
  
  const objetoFinal = {
    eletric: [],
    water: [],
  }



  //or



  const numbers1 = [1.5,2,4,10];


const media = numbers1.reduce((total,item, indice, array )=>{
  total += item
  if(indice === array.length -1){
    return total / array.length
  }
  return total
}, 0);

console.log(media) 




//or




const numbers2 = [1.5,2,4,10];

const numbersDouble = numbers2.reduce((total, item)=>{
  return total.concat(item*3)
}, []);

console.log(numbersDouble)