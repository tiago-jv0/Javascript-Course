const carrinho = [
    '{"nome" : "Borracha" , "preco" : 3.45}',
    '{"nome" : "Caderno" , "preco" : 13.99}',
    '{"nome" : "Kit de lapis" , "preco" : 41.22}',
    '{"nome" : "Caneta" , "preco" : 7.50}'
];

//Retornar array apenas com os preços

let carrinhoJson = carrinho.map((json) => JSON.parse(json));
let precos = carrinhoJson.map((produto) => produto.preco);

console.log(precos);
