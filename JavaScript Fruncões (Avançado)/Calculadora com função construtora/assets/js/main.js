function Calculadora() {
    {
        this.display = document.querySelector('.display');

        this.inicia = function() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        };

        this.pressionaBackSpace = () => {
            this.display.addEventListener('keydown', event => {
              if (event.keyCode === 8) {
                event.preventDefault();
                this.clearDisplay();
              }
            });
          };

        this.pressionaEnter = () => {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (event) {
                alert('Conta inválida');
                return;
            }
        };

        this.clearDisplay = () => {
            this.display.value = '';
        };

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1);
        };
        
        this.cliqueBotoes = () => {
            document.addEventListener('click', (event) => {
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        };

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
        }

    };
}

const calculadora = new Calculadora();
calculadora.inicia();