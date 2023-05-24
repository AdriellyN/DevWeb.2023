class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
}

function datas(){ 
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const anoNascimento = this.dataNascimento.getFullYear();
    return anoAtual - anoNascimento;
}

getIdade()