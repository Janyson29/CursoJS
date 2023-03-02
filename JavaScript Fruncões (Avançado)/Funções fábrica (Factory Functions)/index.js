function criaNome(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        }, 
        altura: altura,
        peso: peso,
        imc() {
            const indece = peso / (altura ** 2);
            return indece.toFixed(2);
        }
    }
} 

const p1 = criaNome('luis', 'miranda', 1.80, 80);
console.log(p1.imc());
const p2 = criaNome('joana', 'maria', 1.62, 60);
console.log(p2.imc())
console.log(p2.fala('falando sobre js'));
