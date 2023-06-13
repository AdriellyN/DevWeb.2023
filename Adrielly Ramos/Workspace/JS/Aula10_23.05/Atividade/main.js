class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    getIdade() {
        const hoje = new Date();
        const anoNascimento = this.dataNascimento.getFullYear();
        const anoAtual = hoje.getFullYear();
        let idade = anoAtual - anoNascimento;

        const mesNascimento = this.dataNascimento.getMonth();
        const diaNascimento = this.dataNascimento.getDate();
        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }
}

const pessoas = new Array(10);

pessoas[0] = new Pessoa('Fulano 1', new Date(1990, 5, 15));
pessoas[1] = new Pessoa('Fulano 2', new Date(1985, 8, 10));
pessoas[2] = new Pessoa('Fulano 3', new Date(1998, 2, 25));
pessoas[3] = new Pessoa('Fulano 4', new Date(1976, 11, 5));
pessoas[4] = new Pessoa('Fulano 5', new Date(2000, 0, 1));
pessoas[5] = new Pessoa('Fulano 6', new Date(1995, 4, 20));
pessoas[6] = new Pessoa('Fulano 7', new Date(1982, 9, 8));
pessoas[7] = new Pessoa('Fulano 8', new Date(1993, 6, 30));
pessoas[8] = new Pessoa('Fulano 9', new Date(1978, 3, 18));
pessoas[9] = new Pessoa('Fulano 10', new Date(2002, 7, 12));

Date.prototype.getNiver = function () {
    const hoje = new Date();
    return this.getMonth() <= hoje.getMonth() && this.getDate() <= hoje.getDate();
};

for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.dataNascimento.getNiver();
    let mensagem = `${pessoa.nome} tem ${idade} anos e `;
    mensagem += fezAniversario ? 'já fez aniversário esse ano.' : 'ainda não fez aniversário esse ano.';
    console.log(mensagem);
}
