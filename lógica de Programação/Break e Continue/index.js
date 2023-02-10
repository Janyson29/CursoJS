// Continue = continua para a próxima iteração
// Break = sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if (numero === 2 || numero === 5) {
        console.log('PULEI')
        continue; // serve pra pular um número
    };
    
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;  // serve pra parar a contagem 
    };
};