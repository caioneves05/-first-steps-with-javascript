//Todas a classe sgue as regras de STRICT MODE

import User from './user.js';

class Docente extends User {
    constructor(nome, nascimento, email, role = 'socente', ativo){
        super(nome, nascimento, email, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `${estudante} foi aprovado no curso ${curso}.`
    }
}

const novoDocent = new Docente('Mariana', '08/89/2004', 'o@o.com')

console.log(novoDocent.exibirInfos())
console.log(novoDocent.aprovaEstudante('Juliana', ' FullStack 2023'))