const pessoa = {
    //nome: 'Ana',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua Brasil',
        numero: 360,
        cep: '00000-000'
}
}

// const nome = pessoa.nome
// console.log(nome)

// atribuição via desestruturação
// const { sobrenome } = pessoa
// console.log(sobrenome)

// const { nome = 'julia', sobrenome, idade: anos } = pessoa
// console.log(nome, sobrenome, anos)

// const { endereco: { rua, numero, cep } } = pessoa
// console.log(rua, numero, cep)

const {nome, ...resto} = pessoa
console.log(resto)