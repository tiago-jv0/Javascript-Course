console.log(typeof Array , typeof new Array, typeof []);

let aprovados = new Array('Bia' , 'Carlos' , 'Ana');
console.log(aprovados);

aprovados = ['Bia' , 'Carlos' , 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = 'Paulo'
console.log(aprovados[3]);

aprovados.push('Abia');
console.log(aprovados.length);

aprovados.sort();
console.log(aprovados);

delete aprovados[1]; //coloca undefined nessa posição do array
console.log(aprovados)

aprovados.splice(aprovados.indexOf('Carlos') , 1);
console.log(aprovados)