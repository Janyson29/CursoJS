// arguments sustenta todos os argumentos enviado

// function funcao() {
//     console.log(arguments[11]);
// }
// funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'luiz');

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6);

// function funcao(a, b = 9){
//     console.log(a + b);
// }
// funcao(2, 5);

// function funcao( { nome, sobrenome, idade } ) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'janyson', sobrenome: 'silva', idade: 22 };
// funcao(obj);

// function conta(operador, acumulador, ...numeros) {
//     console.log(operador, acumulador, numeros);
// }
// conta('+', 0, 10, 20, 30, 40, 50);

const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 10, 20, 30, 40, 50);