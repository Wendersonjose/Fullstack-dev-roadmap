class Animal{
    constructor(nome){
        this.nome = nome
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

class Gato extends Animal{
    constructor(nome,cor){
        super(nome)
        this.cor = cor

    }
    miar(){
     
        console.log(`o gatinho ${this.nome} de cor ${this.cor} está miando`)
    }
    comer(){
        console.log(`o gatinho ${this.nome} está comendo e sua cor é ${this.cor} `)
    }
}

class Cachorro extends Animal{
    latir(){
console.log(`Au Au`)
    }

}

const gato = new Gato('Teco', 'Laranja')

const cachorro = new Cachorro('Thor')


gato.comer()
gato.miar()
cachorro.latir()
cachorro.comer()