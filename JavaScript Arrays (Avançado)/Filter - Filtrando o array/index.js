// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indece, array) {
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);

// OU

// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10; 
// });


// OU

const numerosFiltrados = numeros.filter(valor => valor > 10);

// exemplo mostrando tudo 
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10; 
//     });

// console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo o nome termina com 'A'.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Ana', idade: 20}
];

// const pessoasComNomeGrande = pessoas.filter(valor => {
//     if (valor.nome.length >= 5) {
//         return true
//     } else {
//         return false
//     }
// });

// OU 

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
//  console.log(pessoasComNomeGrande);

const pessoasComMaisDeCiquenta = pessoas.filter(valor => valor.idade > 50);
// console.log(pessoasComMaisDeCiquenta);

const pessoasComNomeQueTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeQueTerminaComA);