const obj1 = {}

obj1.nome = 'Tiago'
//obj1['nome'] = 'José'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome;
}

const obj2 = new Obj('Tiago José')

console.log(obj2.nome)