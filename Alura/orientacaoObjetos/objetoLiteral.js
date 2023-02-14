const user  = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "10/02/21002",
    role: "admin",
    ativo: true,
    exibirInfo: function(){
        console.log(user.email, user.nome)
    } 
}

user.exibirInfo()

const exibir = function(){
    console.log(this.nome);
}
//O bind serve para ligar algo a outra outra coisa, ou seja ele dá constesto (propriedades) ao exibir()
const exibirNome = exibir.bind(user)

exibirNome()
exibir()