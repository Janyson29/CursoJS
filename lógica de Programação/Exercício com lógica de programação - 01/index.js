// Escreva uma função que recebe 2 números e retorne o maior deles

function max(x, y) {
    if (x > y) {
    return x;
    } else {
    return y;
    };
};

console.log(max(25, 5));

const max2 = (x, y) => x > y ? x : y;

console.log(max2(20, 50))