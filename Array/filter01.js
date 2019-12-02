const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.49, fragil: false }
];

console.log(produtos.filter((produto) => produto.fragil === true));

console.log(
    produtos.filter((produto) => {
        return produto.preco > 2000 && produto.fragil;
    })
);
