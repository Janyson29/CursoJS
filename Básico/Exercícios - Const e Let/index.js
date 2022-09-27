const nome = 'Janyson Silva';
const sobrenome = 'Marques';
let idade = 22;
let peso = 78;
const alturaEmMetros = 1.70;
let indiceDeMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2022 - idade;
console.log(nome,sobrenome,'tem', idade,'anos, pesa', peso, 'kg.');
console.log(`tem ${alturaEmMetros} de altura seu imc é de ${indiceDeMassaCorporal}`);
console.log(nome + ' nasceu em ' + anoNascimento+'.')

