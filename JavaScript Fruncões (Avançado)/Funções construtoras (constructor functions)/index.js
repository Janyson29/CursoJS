// Função construtora -> objetos
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados 
    const id = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome} eu sou um metodo`)
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Silva');

p1.metodo()