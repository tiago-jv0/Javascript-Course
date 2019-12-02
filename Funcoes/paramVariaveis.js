function soma(){
    let soma = 0
    for(let index in arguments){
        soma += arguments[index]
    }
    return soma
}

console.log(soma(1,2,3,4,5,6))
console.log(soma())
console.log(soma(1,2,3))