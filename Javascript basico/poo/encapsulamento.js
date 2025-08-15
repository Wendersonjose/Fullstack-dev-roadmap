class Cofre{
    #senha
    #saldo
    constructor(senha){
        this.#senha = senha
        this.#saldo = 0
    }

    #validarSenha(senha){
        return senha === this.#senha
    }

    verSaldo(senha){
        if(this.#validarSenha(senha)){
            console.log(`Saldo do cofre: R$${this.#saldo}`)
        }else{
            console.log("Senha Invalida")
        }
    }

    depositar(senha, valor){
        if(this.#validarSenha(senha)){
            this.#saldo += valor
        }else{
            console.log("Senha Invalida")
        }
    }

    sacar(senha, valor){
        if(this.#validarSenha(senha)){
            if( valor > this.#saldo){
                console.log('Valor a ser Retirado e maior que o saldo')
            }else{
                console.log(`Valor de R$ ${valor} foi sacado, saldo atual R$ ${this.#saldo}`)
            }
            
        }else{
            console.log('Senha Inválida')
        }
    }
        
    }


const cofre = new Cofre('123456')

cofre.verSaldo('123456')
cofre.depositar('123456', 100)
cofre.verSaldo('123456')
cofre.sacar('123456', 70)

