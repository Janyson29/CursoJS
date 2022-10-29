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

let a = [1, 2, 3];
let b = a; // Referência
console.log(a, b);

a.push(4);
console.log(a, b);