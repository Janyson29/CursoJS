function Calculadora() {
    {
    // Propriedade display recebe o elemento HTML com a classe 'display'
    this.display = document.querySelector('.display');

    // Função que inicializa a calculadora
    this.inicia = function() {
        // Chamada das funções cliqueBotoes, pressionaBackSpace e pressionaEnter
        this.cliqueBotoes();
        this.pressionaBackSpace();
        this.pressionaEnter();
    };

    // Função que escuta o evento de tecla 'backspace'
    this.pressionaBackSpace = () => {
        this.display.addEventListener('keydown', event => {
            // Verifica se a tecla pressionada é o 'backspace'
            if (event.keyCode === 8) {
            event.preventDefault(); // Evita que o navegador navegue para trás
            this.clearDisplay(); // Chama a função clearDisplay para limpar o display
            }
        });
    };

    // Função que escuta o evento de tecla 'enter'
    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (event) => {
            // Verifica se a tecla pressionada é o 'enter'
            if (event.keyCode === 13) {
            this.realizaConta(); // Chama a função realizaConta para realizar a operação
            }
        });
    };

    // Função que realiza a operação matemática
    this.realizaConta = () => {
        let conta = this.display.value; // Recebe o valor do display

        try {
            conta = eval(conta); // Realiza a operação

            // Verifica se o resultado é válido
            if(!conta) {
            alert('Conta inválida'); // Exibe mensagem de erro
            return;
            }

            this.display.value = String(conta); // Exibe o resultado no display
        } catch (event) {
        alert('Conta inválida'); // Exibe mensagem de erro
        return;
        }
    };

    // Função que limpa o display
    this.clearDisplay = () => {
        this.display.value = '';
    };

    // Função que apaga o último caractere do display
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    // Função que escuta o evento de clique nos botões
    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            // Verifica se o botão clicado é um número
            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText); // Chama a função btnParaDisplay para exibir o número no display
            }

            // Verifica se o botão clicado é o botão 'C'
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay(); // Chama a função clearDisplay para limpar o display
            }

            // Verifica se o botão clicado é o botão 'DEL'
            if(el.classList.contains('btn-del')) {
                this.apagaUm(); // Chama a função apagaUm para apagar o último caractere do display
            }

            // Verifica se o botão clicado é o botão '='
            if(el.classList.contains('btn-eq')) {
                this.realizaConta(); // Chama a função realizaConta para realizar a operação
            }

            this.display.focus(); // Foca o display
        });
    };

    // Função que adiciona um número
    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }

    };
}

// Iniciar calculadora
const calculadora = new Calculadora();
calculadora.inicia();