var notaMarcos = 5 ;
var notaMinima = 7 ;

if(notaMarcos >= notaMinima){
    console.log("Você está APROVADO!")
}
else{
    console.log("Você está REPROVADO!")
}
console.clear()

// impar ou par
// se a sobra da divisão do número por 2 for 
// 1 é impar
// se a sobra da divisão do número por 2 for
// 0 esse número é par
var imparPar = 10 ;
if(imparPar % 2 == 1){
    console.log("É impar")
}else{
    console.log("É par")
}
console.clear()

// Validação encadeada
// primeira validação se é par
// segunda validação numero maior que 10
//"O número é par e maior que 10"
//"O número é par porém é menor 10"
var imparPar2 = 10 ;
if(imparPar2 % 2 == 1){
    console.log("É impar")
}else{
    if(imparPar2 > 10){
        console.log('O número é par e maior que 10')
    }else{
        console.log("O número é par porém é menor 10")
    }
}
console.clear()

var imparPar3 = 10 ;
// if(imparPar3 % 2 == 1){
//     console.log("É impar")
// }else{
//     console.log("É Par")
// }

var resultado = imparPar3 % 2 == 1 ? console.log("É impar") : console.log("É par") //Expressão ternária do if/else 

// Se é maior que 7 apresenta "Aprovado"
// Se é menor que 7 apresenta "Reprovado"
// Se está entre 7 e 5 "Aprovado por Conselho"
console.clear()

if(4 > 7){
    console.log("Aprovado")
}else if(4 < 6.9 && 4 > 5){
    console.log("Aprovado por conselho")
}else{
    console.log("Reprovado")
};


// Switch

var notaMarcos = 5 ;

switch(notaMarcos > 7){
    case true:
    console.log("Aprovado")
    break;
    case false:
    console.log("Reprovado")
    break;
}