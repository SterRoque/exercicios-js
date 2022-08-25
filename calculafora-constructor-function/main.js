function Calculadora() {

    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        alert('Oi, iniciei');
        this.cliqueBotoes();
        this.pressionaEnter();
    }
    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.botoesDisplay(el.innerText);
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
        });
    }
    this.botoesDisplay = valor => {
        this.display.value += valor;
    }
    this.clearDisplay = () => {
        this.display.value = '';
    }
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Invalida');
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta Invalida');
            return;
        }
    }


}
const calc = new Calculadora();
calc.inicia();
