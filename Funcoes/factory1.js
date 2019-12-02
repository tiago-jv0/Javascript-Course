//Factory simples

function criarPessoa(nome ,sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa('Tiago José' , 'Vieira de Oliveira'))