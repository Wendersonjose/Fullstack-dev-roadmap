
const pessoas = {
    nome:"Wenderson",
    idade: 30,
    cidade: "Uberlandia"
};

const { idade } = pessoas
console.log(idade)


const numeros = [1,2,3,4]

const[primeiro, segundo] = numeros
console.log(primeiro,segundo )

const[ , , terceiro,quarto] = numeros
console.log(terceiro,quarto)


function apresentar({nome,idade,cidade,estado}){
    console.log(`
        Meu nome é ${nome} e tenho ${idade} anos e sou de ${cidade} 
        ${estado}
        `)
}

const pessoa ={
    nome:"Wenderson",
    idade: 38,
    cidade:"Uberlândia",
    estado:"Minas Gerais"
}

apresentar(pessoa)

function somarEMultiplicar(a,b){
    return [ a + b, a * b ]
}
const [soma,multiplicacao] = somarEMultiplicar(2,5)

/*let soma = resultado[0]
let multiplicacao = resultado[1]*/

console.log(soma, multiplicacao)
