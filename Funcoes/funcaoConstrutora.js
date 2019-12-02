function Carro(velocidadeMax = 200 , delta = 5){
    let velocidadeAtual = 0;

    this.velocidadeMax = velocidadeMax;
    this.delta = delta;

    this.acelerar = () => {
        if(velocidadeAtual + this.delta <= this.velocidadeMax){
            velocidadeAtual += this.delta;
        }else {
            velocidadeAtual = velocidadeMax;
        }
    }

    this.getVelocidadeAtual = () =>{
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350 , 20);
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())