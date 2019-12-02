const pilotos = ['Vettel' , 'Alonso' , 'Raikkonen' , 'Massa'];

pilotos.pop(); //Remove o ultimo elemento da lista
console.log(pilotos);

pilotos.push('Verstappen'); //Adiciona um elemento na última posição da lista
console.log(pilotos);

pilotos.shift(); //Remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); //Adiciona um elemento na primeira posição da lista
console.log(pilotos);


//splice pode adicionar e remover elementos

pilotos.splice(2 , 0 , 'Bottas ','Massa'); //adicionar
console.log(pilotos);

pilotos.splice(3 , 1); //remover elemento
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //gera um novo array com um subconjunto do array original
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2)