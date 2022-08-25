 function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),



        inicia() {
            alert('Oi, iniciei');
            this.cliqueBotoes();
            this.pressionaEnter();

        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
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
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta invalida');
                    return;
                }
                this.display.value = conta;

            } catch(e) {
                alert('conta invalida');
                return;
            }
        }
    };
 }

 const calculadora = criaCalculadora();
 calculadora.inicia();
