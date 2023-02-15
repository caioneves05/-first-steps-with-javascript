 export default class User {
    constructor(nome, nascimento, email, role, ativo = true) {
        this.nome = nome,
        this.nascimento = nascimento,
        this.email = email,
        this.role = role || 'estudante',
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}.`
    }
}
