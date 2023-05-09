// Concatenar Strings
var texto1 = "Aula 02 - Socorro" ;

var texto2 = "Aula" + "02" + '- Socorro' ;

console.log(texto1) ;

console.log(texto2) ;
console.log(texto1 + texto2) //apresenta informação

console.clear() // limpa as informações apresentadas 

var silencio
console.log(silencio)

// NaN

var zeroByZero = 0 / 0
console.log(zeroByZero)

var num1 = 8 * null
console.log(num1)

console.clear()

//Operadores aritméticos
var ovo1 = 5
var ovo2 = 4

// adição
var adicao = ovo1 + ovo2
console.log("Resultado da adição: 5 + 4 = " + adicao)

// subtração
var subtracao = ovo1 - ovo2
console.log(subtracao)

// divisão
var divisao = ovo1 / ovo2
console.log(divisao)

// multiplicação
var multiplicacao = ovo1 * ovo2
console.log(multiplicacao)

var adicao = 10
console.log(adicao)

//alert("Resultado da multiplicação " + multiplicacao)

console.clear()

//precedência dos operadores 
// () / * + -
var numero3 = (3+5) / 4 + 6

//Operadores de comparação (relacionais)
var ovo1 = 5
var ovo2 = 4
var compara = ovo1 < ovo2
console.log(compara) // false

// terceiro tipo de comparação
var variavel1 = 3
var variavel2 = "3"
var compara2 = variavel1 == variavel2 //true
console.log(compara2)

var compara3 = variavel1 === variavel2
console.log(compara3)

var compara4 = variavel1 != variavel2
console.log("comparação 4: " + compara4)
console.clear()

var variavel3 = 3
var variavel4 = "3"

var comparaTudo = variavel3 >= variavel4 && variavel3 > variavel4
//                         true           E           false            = false

var comparaTudo = variavel3 >= variavel4 || variavel3 > variavel4
//                         true           ou           false            = verdadeiro

var comparaTudo = variavel3 > variavel4 != variavel3 > variavel4
//                         falso        diferente           false            = false





// Operadores
var X = 2

X += 4 ;
console.log(X)


// O objeto console "sai" do vanilla script (mais básico de tudo, cria variável, e opera variável) e entra no javascript6 (versão atual).
