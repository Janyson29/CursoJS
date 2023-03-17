// Valor por referência
//                0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// const novo = [...nomes];
// Strings, Objetos, Funções, Números
// nomes[2] = 'João';
// nomes[3] = 'Pedro';   // ou
// nomes.push('Pedro');  // add no final
// nomes.push('José');
// nomes.unshift('Gabrielly'); // add no começo
// nomes.unshift('Dayara');

// delete nomes[1];

// novo.pop();
// console.log(nomes);
// console.log(novo);
// console.log(nomes.length);

// const removido = nomes.pop();
// const removido2 = nomes.shift();
// console.log(nomes, removido, removido2);

// console.log(nomes);

// const novo = nomes.slice(1, 4);
// const novo1 = nomes.slice(1, -4);

// console.log(nomes);
// console.log(novo);
// console.log(novo1);

// const nome = 'Luis Otávio Miranda';
// const nomes = nome.split(' ');

const nomes = [ 'Luis', 'Otávio', 'Miranda' ]
const nome = nomes.join(' ')
console.log(nome);
