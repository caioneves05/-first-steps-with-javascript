//O filter é uma das funções mais úteis do conjunto, mas ela pode ser um pouco lenta. Especialmente porque ela retorna um novo array, isso significa que arrays muito, muito, muito longos podem consumir memória excessivamente.



const numeros = [1,2,3,4,5,6,7,8,9];

const maiorque10 = function(item){
  return item > 5;
}

const novosNumeros = numeros.filter(maiorque10);

console.log(novosNumeros)




//or




const nomes = ['Caio','Bruno','Zezinho','Fulano','Douglas'];


const convidados = nomes.filter(function(item){
  return item.charAt(0) === 'Z'
});

console.log(convidados)




//or




const numeros2 = [10, 18, 1, 15, 2, 12, 21, 33, 100];

const pares = numeros1.filter(function(item){
  return item % 2 == 0;
});

console.log(pares)



//or




const filmes = [
  {titulo: 'Titanic', duracao: 195, nota: 7.5},
  {titulo: 'The Avengers', duracao: 203, nota: 9.5},
  {titulo: 'Bean', duracao: 90, nota: 6.5}
]

const notaDeCorte = 8

const filmesBons = filmes.filter(function(item){
  return item.nota > notaDeCorte;
})

console.log(filmesBons)




//or




const convidados2 = [
  {nome: "Daniel", vip: true, idade: 21},
  {nome: "Gabriel", vip: true, idade: 54},
  {nome: "Felipe", vip: false, idade: 37}
]

const convidadosVips = convidados.filter(function(item){
  return item.vip === true;
});

console.log(convidadosVips);