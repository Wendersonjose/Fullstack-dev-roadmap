const numeros = [1,2,3,4]
const numeros2 = [5,6,7,8]
const copia = [...numeros]

const soma = [...numeros,...numeros2]

console.log(soma, copia)


const pessoa = {
    nome:"Wenderson",
    idade:38
}
const endereco ={
    cidade:"Uberlandia",
    estado:"Minas Gerais"
}

const combinacoes = {
    ...pessoa,
    ...endereco
}
console.log(combinacoes)

function somar(...numeros){
    let total  = 0

    numeros.forEach(numero => total += numero)
    return total
}
const total = somar(1, 2, 3, 4, 5)

console.log(total);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [primeiro, segundo, ...resto] = numero

console.log(primeiro, segundo)
console.log(resto)

const pessoas = {
    nome: "Ana",
    idade: 16,
    cidade:"uberlandia",
    estado:"Minas Gerais"
}

const {nome, idade, ...endereços}= pessoas
console.log(nome,idade)
console.log(endereços)

