// Classes
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
// Intanciando objetos à classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);
//Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);
console.log(meuCarro2.nome);
console.log(meuCarro2.ano);
class NomeClasse {
    constructor() {}
    metodo_1() {}
    metodo_2() {}
    metodo_3() {}
}
// Declarar nova classe com métodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();
// console.log(dataHoje);
// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));

// Mais um exmeplo de classe
console.clear();
class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');
console.log(pessoa1);
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());
console.log(pessoa1.getFullName());

// Lexical this em uma função
console.clear();
// Constructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Instanciando os objetos
const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');
console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.getBirthYear = function () {
    return this.dob.getFullYear();
};
const getFirstName = () => {
    return `${this.firstName} ${this.lastName}`;
};

// Adicionando prototipos
PessoaFunc.prototype.getBirthDayMonth = function () {
    return dados;
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
};
PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};
console.clear();
console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());



// const nome = [
//     new Pessoa("Marjorie", '1982-03-08'),
//     new Pessoa("Joan", '1958-09-22'),
//     new Pessoa("Ramona", '2001-06-04'),
//     new Pessoa("Marie", '1930-07-09'),
//     new Pessoa("Taylor", '1989-12-18'),
//     new Pessoa("Nneka", '1992-02-17'),
//     new Pessoa("Jeremy", '1985-09-01'),
//     new Pessoa("Dominic", '1992-02-17'),
//     new Pessoa("Benjamin", '2005-06-13'),
//     new Pessoa("Lupin", '1982-12-24')
// ]