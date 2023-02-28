// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (objetos de primeira classe)
// Funtion expression 
const souUmDado = function() {
    console.log('Sou um dado');
}
// souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    //falar: function() {  // pode usar dessa forma ou da forma de baixo
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();