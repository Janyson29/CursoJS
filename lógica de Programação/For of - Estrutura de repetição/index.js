// For Clássico - Geralmente com iteráveis (array, strings)
// For in - Retorna o índice ou chave (array, string, objetos)
// For of - Retorna o valor em si (iteráveis, array, strings)

// const nomes = ['janyson', 'bruno', 'pedro'];

// const nomes = {
//     nome1: 'janyson',
//     nome2: 'bruno',
//     nome3: 'pedro'
// }

for (let i = 0; i < nomes.length; i++) {
    console.log(i, nomes[i]);
}

console.log('__________');


for (let i in nomes) {
    console.log(i, nomes[i]);
}

console.log('__________');

for (let valor of nomes) {
    console.log(valor);
}

console.log('__________')

nomes.forEach(function(indice, valor) {
    console.log(indice, valor);
})