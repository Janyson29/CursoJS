//               -5      -4        -3         -2        -1
//                0       1         2          3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice(atual, que quero mexer), delete(a quantidade que quero deletar), eleme1, eleme2, eleme3);

// pop
// const removidos = nomes.splice(3, 1);

// shift
// const removidos = nomes.splice(0, 1);

// console.log(nomes, removidos);

// Push
// nomes.splice(nomes.length, 0, 'Luiz');


// unshitf 
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);