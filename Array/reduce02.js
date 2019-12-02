const alunos = [
    { nome: 'Maria', nota: 10, bolsista: false },
    { nome: 'Ana', nota: 9, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'João', nota: 9, bolsista: true }
];

// Todos os alunos são bolsistas ?

let resultado = alunos.map((aluno) => aluno.bolsista).reduce((previous, current) => {
    return previous && current;
});

console.log(resultado);

//Algum aluno é bolsista ?
resultado = alunos.map((aluno) => aluno.bolsista).reduce((previous, current) => {
    return previous || current;
});

console.log(resultado);
