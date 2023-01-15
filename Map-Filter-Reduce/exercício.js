const carros = [
  {marca: 'Audi', cor: 'preto'},
  {marca: 'Audi', cor: 'branco'},
  {marca: 'Ferarri', cor: 'vermelho'},
  {marca: 'Ford', cor: 'branco'},
  {marca: 'Peugot', cor: 'branco'}
];

/* 
E que agora você precise agrupar os carros por marca ou cor. Como fazer?

Uma das formas é utilizar o reduce para, a partir das propriedades do objeto, reduzir ao nível de chave e depois incluir os objetos. Falei complicado, vamos ver na prática:
*/

function groupBy(array,prop) {
  const value = array.reduce(function(total, item){
    const key = item[prop];
    total[key] = (total[key] || [].concat(item));

    return total;
  }, {});
  return value;
};

const agrupados = groupBy(carros, 'marca');

console.log(agrupados)




//or




const produtos = [
  {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
  {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
  {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
]

Array.prototype.groupBy = function(prop) {
  let value = this.reduce(function(total,item) {
    let key = item[prop];
    total[key] = (total[key] || []).concat(item);

    return total;
  });
  return value;
};

const produtosFiltrados = produtos.filter(function(item){
  return item.cor == 'preto';
}).filter(function(item){
  return item.tamanho == 'G';
}).groupBy('categoria'); 

console.log(produtosFiltrados)