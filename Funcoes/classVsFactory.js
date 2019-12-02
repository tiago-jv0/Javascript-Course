class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar() {
        return `Meu nome é ${this.nome}`;
    }
}

const p1 = new Pessoa('Tiago');

console.log(p1.falar())

const criarPessoa = nome => {
    return {
        falar : () => `Meu nome é ${nome}`
    }
}

const p2 = criarPessoa('Tiago');

console.log(p2.falar())
