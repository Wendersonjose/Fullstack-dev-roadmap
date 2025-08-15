class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
    falar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
    apresentacao(){
        console.log(`
            Nome:${this.nome},
            Idade:${this.idade}
            Profissao:${this.profissao}
            `)
    }
    aniversario(){
        this.idade +=1
        console.log(`${this.nome} fez aniversario, e agora tem ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa("Wenderson", 38, "Programador")


const pessoa2 = {
    nome:"João",
    idade: 30,
    falar: function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    },
    
    // Solução: adicionar o método manualmente em pessoa2 
    /*apresentacao: function(){
        console.log(`
            Nome:${this.nome},
            Idade:${this.idade}
            `)
    }*/
  
};

const pessoa3 = new Pessoa("maria", 20, "Cozinheira")
const pessoa4 = new Pessoa("Ana Laura", 6, "Estudante ")

pessoa1.falar()
pessoa2.falar()
pessoa3.falar()
pessoa4.falar()

pessoa1.apresentacao()
pessoa3.apresentacao()
pessoa4.apresentacao()
//pessoa2.apresentacao() //está tentando chamar pessoa2.apresentacao() como se fosse uma função, mas o JavaScript está dizendo que apresentacao não é uma função.

pessoa1.aniversario()




