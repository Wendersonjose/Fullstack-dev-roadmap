class Instrumento{
    tocar(){
        console.log("Tocando um som Generico")
    }
}

class Violao extends Instrumento{
    tocar(){
        console.log('Tocando um som de violao')
    }
}

class Piano extends Instrumento{
    tocar(){
        console.log('Tocando um som de piano')
    }
}

class Violino extends Instrumento{
    tocar(){
        console.log('Tocando um som de violino')
    }
}

const violao = new Violao
const piano = new Piano
const violino = new Violino

violao.tocar()
piano.tocar()
violino.tocar()