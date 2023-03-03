function criaNome(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },

        fala: function(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}`;
        }, 

        altura: altura,
        peso: peso,
        imc() {
        // get imc() {              // se usar get, o código vai entender que o imc é um atribupo não uma função   
            const indece = peso / (altura ** 2);
            return indece.toFixed(2);
        }
    }
} 

const p1 = criaNome('luis', 'miranda', 1.80, 80);
// console.log(p1.nome + ' ' + p1.sobrenome);

// console.log(p1.imc());
// console. log(p1.imc)  // pra quando tiver usando o get, não preci colocar ()
// const p2 = criaNome('joana', 'maria', 1.62, 60);
// console.log(p2.imc())
// console.log(p2.fala('falando sobre js'));

p1.nomeCompleto = 'Gustavo Lima Silva'

console.log(p1.nomeCompleto);
console.log(p1.fala())

