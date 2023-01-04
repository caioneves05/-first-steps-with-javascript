const Livro = function (nome, editora, paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
      return gNome;
    }

    this.getEditora = function(){
      return gEditora;
    }

    this.getPaginas = function(){
      return gPaginas;
    }

}

const grapQL = new Livro("grapQL", "Casa do Código", 186);
console.log(grapQL.getEditora())
console.log(grapQL.getNome())
console.log(grapQL.getPaginas())