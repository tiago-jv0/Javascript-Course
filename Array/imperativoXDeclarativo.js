const alunos = [
    { nome: 'Maria', nota: 10, bolsista: false },
    { nome: 'Ana', nota: 9, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'João', nota: 9, bolsista: true }
];


//Imperativo
let total = 0;

for (let index = 0 ; index < alunos.length ; index++){
    total += alunos[index].nota;
};

console.log(total/alunos.length)

//Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

total = alunos.map(getNota).reduce(soma);

console.log(total/alunos.length)