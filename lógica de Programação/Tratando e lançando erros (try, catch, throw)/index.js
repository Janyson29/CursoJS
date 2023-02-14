
// try {
//     console.log(naoExisto);
// } catch (erro) {
//     console.log('naoExisto não existe.');
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y
} 

try {
    console.log(soma(2, 4))
    console.log(soma('1', 3))
} catch(error) {
    console.log('alguma coisa amigavel')
}