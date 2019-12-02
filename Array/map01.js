const nums = [1,2,3,4,5];

//For com propósito

let resultado = nums.map((numero) => numero * 2);

console.log(resultado)

const paraDinheiro = resultado.map((element) => `R$ ${parseFloat(element).toFixed(2).replace('.' , ',')}`)

console.log(paraDinheiro)