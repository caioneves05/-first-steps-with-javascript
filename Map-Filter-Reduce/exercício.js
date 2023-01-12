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