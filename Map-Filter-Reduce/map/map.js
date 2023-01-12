const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const muiltiplica = function(item){
    return item*2
};

console.log(numeros.map(muiltiplica));




//or 




const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]; //temperatura em fahrenheit


const celcius = fahrenheit.map(function(item){
  return Math.round((item - 32)*5/9);
});

console.log(celcius)





//or




const convidados = [
  {nome: "felipe", vip: false}, 
  {nome: "danIEl", vip: true}, 
  {nome: "João", vip: true}
];

const convidadosUpper = convidados.map(function(item){
  return Object.assign(item, {nome: item.nome.toUpperCase()});
  //Object.assign(destino, origem).
});


console.log(convidadosUpper)