// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Ana', idade: 20}
];

// const nomePessoa = pessoas.map(valor => valor.nome);
// console.log(nomePessoa)

// const idade = pessoas.map(valor => ({ idade: valor.idade}));
// console.log(idade);

const comIds = pessoas.map(function(valor, indice) {
    const newValor = { ...valor };
    newValor.id = indice;
    return newValor;
});
console.log(comIds);