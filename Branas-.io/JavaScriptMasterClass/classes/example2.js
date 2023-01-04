class Livro {
    constructor(nome, editora, paginas) {
      this.nome = nome;
      this.editora = editora;
      this.paginas = paginas;
    }
    anunciarTitulo() {
      return `A Alura recomenda o livro ${this.nome}.`
    };
    descreverTitulo() {
      return `O livro ${this.nome} foi escrito pela editora ${this.editora} e tem ${this.paginas} páginas.`
    }
  };
  
  const graphQL = new Livro("GraphQL","Casa do Código", 186);
  
  console.log(graphQL.anunciarTitulo())
  console.log(graphQL.descreverTitulo()) 
  
  class LivroExclusivos extends Livro{
    constructor(nome, nomeColecao){
        super(nome);
        this.nomeColecao = nomeColecao;
    }
  
    descreverColeção(){
      return `O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`
    }
  };
  
  const logicaprogramacao = new LivroExclusivos("Lógica de Programação", "Curso em Vídeo");
  
  console.log(logicaprogramacao.descreverColeção())