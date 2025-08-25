/*const numeros = [1, 2, 3, 4, 5]

numeros.forEach((elemento) =>{
    console.log(elemento)
})

// map Retorna novo array transformando os itens
const arrayDobrado = numeros.map((elemento) => { //const arrayDobrado = numeros.map(elemento => elemento * )  esse e outro modelo simplificado 
    return elemento * 2
})

console.log(arrayDobrado)

// filter Retorna novo array com itens que passam uma condição 
const arrayFiltrado = numeros.filter((elemento ) =>{
    return elemento % 2 === 0
} )

console.log(arrayFiltrado)

// find Retorna o primeiro item que atende à condição 
// ele e muito utilizado para buscar no array determinados elementos 
// ex: array de nomes utiliza o metodo find para buscar um determinado nome.
const pesquisa = numeros.find((elemento ) =>{
    return elemento == 5
})

console.log(pesquisa)


// some e every retorna um boolean; ou é true ou é false 
//some Verifica se pelo menos um item do array satisfaz uma condição. retorna true ou false
//every Verifica se todos os itens do array satisfazem uma condição. retorna true ou false
const some = numeros.some(elemento => elemento === 1)

console.log(some)

const every = numeros.every(elemento => elemento === 1)

console.log(every)*/

/*DESAFIO*/
//Com base na lista de produtos abaixo
//(✔️)Use filter para encontrar produtos com preço menor de 50.
//(✔️ )Use map para colocar os nomes em caixa alta
//(✔️)Itere sobre o array com caixa alta
//(✔️)Verifica se todos os produtos custam mais de 100

const produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Teclado', preco: 100},
    {nome:'Mouse', preco: 50},
    {nome: 'Monitor', preco: 800}
]

const produtosMenor50 = produtos.filter((produto) => {
    return produto.preco <= 50
}) 
console.log(produtosMenor50)

const novaLista = produtos.map((produto) =>{
    return{
        ...produto,
        nome: produto.nome.toUpperCase()
    }
})

console.log(novaLista)

novaLista.forEach((produtos) =>{
    console.log(`Nome: ${produtos.nome}, Preço: R$ ${produtos.preco}`)

    })

const todosAcimaDe100 = produtos.every(produto => produto.preco >= 100)

console.log(todosAcimaDe100)




