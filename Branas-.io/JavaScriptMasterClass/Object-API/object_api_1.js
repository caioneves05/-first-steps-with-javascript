const javascript = Object.create({});
Object.assign(javascript,{
    name: 'JavaScript',
    year: 1986,
    paradigm: 'OO an functional'
}, {
    author: 'Caio Neves', 
    infleuncyBy: 'Java, scheme and Self'
});
console.log(javascript)

//O object.assign faz a cópia das propriedades dos objetos passados por parâmetro para o objetivo alvo, que é retornado.