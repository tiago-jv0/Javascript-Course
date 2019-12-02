const soma = function (a , b) {
    return a + b
}

const imprimirResultado = function( a , b , operacao = soma){
    console.log( operacao(a , b) )
}

imprimirResultado( 2 , 4)
imprimirResultado(3, 4 , function (a , b){
    return a * b
})