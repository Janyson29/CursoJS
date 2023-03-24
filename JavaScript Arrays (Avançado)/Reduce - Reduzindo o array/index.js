// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador,valor, indice, array) {
    acumulador += valor;
    // console.log(acumulador, valor);
    return acumulador;
}, 0);
// console.log(`Esse é o valor total de números acumulado do array: ${total}`);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador,valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(`Esse são os valores pares do array: ${total}`);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador,valor) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(`Esse são o dobro dos valores do array: ${total}`);


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
