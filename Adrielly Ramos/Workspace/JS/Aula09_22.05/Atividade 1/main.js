let arrayzin = [17, 43, 8, 4, 97, 56, 29];

arrayzin.forEach(minhaFuncao);

function minhaFuncao(valor, posicao) {
    if (valor % 2 == 1) {
        console.log(`${valor} - É impar`);
    } else {
        console.log(`${valor} - É par`);
    }
}


