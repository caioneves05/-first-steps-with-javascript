const convidados = [
  {nome: 'Felipe', idade: 37, genero: 'masculino'},
  {nome: 'Amanda', idade: 17, genero: 'feminino'},
  {nome: 'João', idade: 15, genero: 'masculino'},
  {nome: 'Daniel', idade: 21, genero: 'masculino'},
  {nome: 'Helena', idade: 18, genero: 'feminino'}
];

let result = {
  maioresQue18 : [],
  menores:[],
};


convidados.map((convidado) =>{
  if(convidado.idade >= 18){
    result.maioresQue18.push(convidado)
  }else{
    result.menores.push(convidado)
  }
})




let generos = {
  masculino: [],
  feminino: []
}

convidados.map((convidado) =>{
  if(convidado.genero === 'masculino'){
    generos.masculino.push(convidado)
  }else{
    generos.feminino.push(convidado)
  }
});






let generosConvidados = generos.masculino.concat(generos.feminino)
console.log(generosConvidados)
