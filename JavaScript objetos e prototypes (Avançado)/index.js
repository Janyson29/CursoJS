// const pessoa = {
//     nome: 'Luis',
//     sobrenome: 'Otávio'
// };
// // console.log(pessoa.sobrenome);

// const chave = 'nome';
// console.log(pessoa[chave]);

// const pessao1 = new Object();
// pessao1.nome = 'Luis';
// pessao1.sobrenome = 'Otávio';

// const pessao2 = {
//     nome: 'Luis',
//     sobrenome: 'Otávio'
// };

// console.log(pessao1);
// console.log(pessao2);

// const pessao1 = new Object();
// pessao1.nome = 'Luis';
// pessao1.sobrenome = 'Otávio';

// delete pessao1.nome;
// console.log(pessao1);

// const pessao1 = new Object();
// pessao1.nome = 'Luis';
// pessao1.sobrenome = 'Otávio';
// pessao1.idade = 53;
// pessao1.falarNome = function(){
//     return (`${this.nome} está falando o seu nome.`);
// };
// pessao1.getDataDeNascimento = function() {
//     const dataAtual = new Date('2022-10-04');
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chaves in pessao1) {
//     console.log(pessao1[chaves]);
// };


// Factory function / Constructor function / Classes

// Factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Luis', 'Otávio');
// console.log(p1.nomeCompleto);


// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = `${nome} ${sobrenome}`;
}

const p1 = new Pessoa('Luis', 'Otávio');
console.log(p1);