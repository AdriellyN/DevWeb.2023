//Array unidimensional
var abraao = true; //boolean

var grimaldo = [true, 171, 'Gabriel', 3.14];
//         0     1       2        3

console.log(abraao);
console.log(grimaldo);
console.log(grimaldo[2]);
console.log(grimaldo[1]);

// boolean
// númerico
// string
// numero ponto flutuante


// //Array Bidimensional

console.clear()
const turma = [
    ["Turma 1", "Gabriel", 7], //Linha 0
    ["Turma 1", "Carina", 10], //Linha 1
    ['Turma 1', "Felipe", 9] // Linha 2
];

console.table(turma);
turma [1][1] = "Ramiro";
console.table(turma)

console.log(turma[1][1]); // [Linha][posiçao dentro do array]
console.table(turma);

console.clear()

const array1 = ["Maçã", "Kiwi", "Pera", "Tomate"];
console.log(array1)

array1[2] = "melão";
console.log(array1.toString());

var atrasado = ["Matheus", "Abraao", "Erick", "Jhonattan"]
console.log(atrasado.join("*"))

console.log(atrasado.length)
let atrasado2 = atrasado.pop()
console.log(atrasado2)
console.log(atrasado)

let atraso2min = atrasado.push("Fequer");
console.log(atraso2min)
console.log(atrasado)

//Shift
let atrasada3min = atrasado.shift();
console.log(atrasada3min)
console.log(atrasado)


console.clear()
let outroAtrasado = atrasado.unshift('Adrielly');
console.log(outroAtrasado);
console.log(atrasado);

console.clear()
delete atrasado[2]
console.log(atrasado)

