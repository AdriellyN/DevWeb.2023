const Matematica = () => {
    alert('Raízes da Equação Quadrada');
    console.log('Matematica');
};

const eventClique = () => {
    console.log('X1: ', x1);
    console.log('X2: ' , segundaRaiz())
};

var a = 3;
var b = 4;
var c = -5;

const delta = b * b - 4 * a * c;

const segundaRaiz = () => {
    return x2
}

const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);


