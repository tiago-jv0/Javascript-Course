const alunos = [
    { nome: 'Maria', nota: 10, bolsista: false },
    { nome: 'Ana', nota: 9, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'João', nota: 9, bolsista: true }
];

const resultado = alunos
    .map((aluno) => {
        return aluno.nota;
    })
    .reduce((acumulador, atual) => {
        console.log(acumulador, atual);
        return acumulador + atual;
    });

console.log(resultado)