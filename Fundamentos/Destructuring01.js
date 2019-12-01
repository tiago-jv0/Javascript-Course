//novo recurso do ES2015

const pessoa = {
    nome : 'Tiago',
    idade : '19',
    endereco : {
        logradouro : 'Rua ABC',
        numero : 1000
    }
}

const {nome , idade} = pessoa;

const { endereco : {logradouro, numero} } = pessoa

console.log(nome, idade , logradouro, numero)