import User from './user.js';

//Herança de classes
class Admin extends User {
    constructor(nome, nascimento, email, role = 'admin', ativo = true){
        //Trazendo todas as classes que queremos aproveitar de User.
        super(nome, nascimento, email, role, ativo)

    }

    criarCurso(nomeCurso, qntdVagas) {
        return `Curso ${nomeCurso} criado, ${qntdVagas} vagas disponíveis.`
    }
}

const novoAdmin = new Admin('Caio', '10/09/2003', 'c@c.com')

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('FullStack 2003', 267));