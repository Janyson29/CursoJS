// IEEE 2008

let num1 = 0.7; //Number
let num2 = 0.1; //Number

// num1 += num2; // = 0.8         // num1 = num1 + num2
// num1 += num2; // = 0.9
// num1 += num2; // = 1.0
// num1 += num2; // = 1.1
// num1 += num2; // = 1.2
// num1 += num2; // = 1.3
// num1 += num2; // = 1.4
// num1 += num2; // = 1.5
// num1 += num2; // = 1.6
// num1 += num2; // = 1.7
// num1 += num2; // = 1.8
// num1 += num2; // = 1.9
// num1 += num2; // = 2.0

// num1 = parseFloat(num1.toFixed(2)); // Pode ser tanto parseFloat como Number

num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.8  Modo matemático de fazer a mesma coisa
num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100 // 1.0

console.log(num1);
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2); // transformando temporariamente um número em uma string 
// num1 = num1.toString(); // Assim que transforma um número em uma string
// console.log(num1.toString(2)); // Repesentação binária 
// console.log(num1.toFixed(2)); // Para casas decimais
// console.log(Number.isInteger(num1)); // Para saber se um número é inteiro ou não
// let temp = num1 * '5';
// console.log(Number.isNaN(temp)); // Para saber se a conta foi invalida