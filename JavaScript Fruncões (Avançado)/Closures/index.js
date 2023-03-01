// function retornaFuncao() {
//     const nome = 'luis';
//     return function() {
//         return nome;
//     };
// }

// const funcao = retornaFuncao();
// console.log(funcao);

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('luis');
const funcao2 = retornaFuncao('joao');
 
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())