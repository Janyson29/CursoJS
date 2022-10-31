function meuEscopo () {
    const form = document.querySelector('.form');

    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('Formulário enviado.');
    //};

    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Formulário enviado. ${contador}`);
        contador++;
    };

    form.addEventListener('submit', recebeEventoForm);
};

console.log('Formulário enviado.');

