// Método forEach()
const frutas = ['apple', 'orange', 'cherry'];

frutas.forEach(minhaFuncao);

function minhaFuncao(valor, posicao) {
    console.log(`Valor: ${valor}`);
    console.log(`Posição: ${posicao}`);
}

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((valor, posicao) => {
    console.log(`Índice: ${valor}`);
    console.log(`Elemento: ${posicao}`);
});

// forEach() com array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto));

//Método Map: para utilizar o método meu array deve ser criado dentro de uma variável "let"
// Método map()
const numeros = [4, 9, 16, 25];

const newArray = numeros.map(Math.sqrt);

console.clear();
console.log('Números:');
console.log(numeros);

console.log('Novo array:');
console.log(newArray);

// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText);

// Método filter
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log('Array Original');
console.log(idades);
console.log('Array Modificado');
console.log(filtroIdade);

// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

// Método find()
console.clear();
const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];
console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);
