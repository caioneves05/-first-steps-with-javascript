function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    /* this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome; 
    }*/
    
    //Quando o Javascript procura a função nomeCompleto() dentro do objeto e não acha, ele então procura essa função dentro do prototype do objeto. 
};

var joao = new pessoa('João', 'Raimundo');
var maria = new pessoa('Maria', 'Neves');
//O new automáticamente retorna uma função construtora.

pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}



console.log(joao);
console.log(joao.nomeCompleto())
console.log(maria);
console.log(maria.nomeCompleto())