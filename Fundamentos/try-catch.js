function imprimirNomeGritando({ name }) {
    try {
        console.log(`${name.toUpperCase()} !!!!`);
    }catch ({name,  message}){
        console.log(name , message)
    }finally {
        console.log('final')
    }
}

//const obj = { nome: 'Tiago' };
const obj = { name: 'Tiago' };
imprimirNomeGritando(obj);
