// ...resto = pega o resto dos elementos do array
// ... = spread (espalhar)
//               0   1   2   3   4   5   6   7   8   9
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const [um , , tres, , cinco, , sete, , , dez] = numeros;
// console.log(um, tres, cinco, sete, dez);

//          0          1          2
//       0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [, [, , seis], [, oito,]] = numeros;
// console.log(seis, oito)
const [lista1, lista2, lista3] = numeros;
console.log(lista1[0], lista2[1], lista3[2]);
