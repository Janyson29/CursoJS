// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {


    const sobrenome = 'silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('luis'));
    }

    falaNome();
    console.log(`Tenho ${idade} anos de idade, peso ${peso} kilos e tenho ${altura} de altura.`)

})(25, 80, 1.75);