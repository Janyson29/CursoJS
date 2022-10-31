/*
Primitivos (Imutáveis) - String, Number, Boolean, Undefined, Null (bigint, symbol) - passados por valor

Referência (Mutável) - Array, Object, Function - passados por referência
*/
//          0123
/*let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);*/ // L Luiz

/*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

/*let a = [1, 2, 3];
let b = a; // Referência
let c = [...a]; // Cópia
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(a, b, c);*/

/*const a = {
    nome: 'Luiz',
    sobrenome: 'otávio',
}

//const b = a; // Referência
const b = {...a}; // Cópia

a.nome = 'João';
console.log(a, b);*/