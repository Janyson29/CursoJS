// For In > Lê os indices ou chaves do objeto 
// 0      1      2
const pessoa = {
    nome: 'ana',
    sobrenome: 'Silva',
    idade: 100
};

for ( let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


// const frutas = ['maçã', 'uva', 'pera'];

// for (let indice in frutas) {  // For In
//     console.log(frutas[indice]);
// }

// for ( let i = 0; i < frutas.length ; i++) {
//     console.log(frutas[i])
// }
