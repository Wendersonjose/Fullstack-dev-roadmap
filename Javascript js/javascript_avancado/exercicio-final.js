/* 
Crie uma variável com valor  null 
 e outra com  undefined . Use um  if/else  para 
verificar se as variáveis têm valor ou não.
 Explique o comportamento no console
 */

 let pessoa ={
    nome:"Wenderson",
    idade: null
 }
  console.log(pessoa.idade)

 /* 
 Utilize a desestruturação para extrair valores de um objeto que representa um 
usuário, contendo  nome ,  idade  e  email . Depois, use a desestruturação para 
extrair elementos de um array com três números
*/

function apresentar({nome,idade,hobbie,cidade}){
    console.log(`
        Olá, Meu Nome é ${nome}, tenho ${idade} anos, eu gosto de ${hobbie}, e sou da cidade de ${cidade}
        `)
}
const pessoas = {
    nome:"Wenderson",
    idade: 38,
    hobbie: "Pescar",
    cidade:"Uberlândia"
}

apresentar(pessoas)

/*
Implemente uma função que use o operador rest para receber uma quantidade 
indefinida de números como argumentos e retorne a soma deles
*/

function somar(...numeros){
    let total = 0
    numeros.forEach(numero => total += numero)
    return total
}
const total = somar(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(total)

/*
Utilize o operador spread para combinar dois arrays e, em seguida, para criar 
uma cópia de um objeto adicionando uma nova propriedade.*/

const endereco = {
    cidade: "Uberlandia",
    estado:"Minas Gerais",
    cep:"38.410-490"
}
    
const combinacoes ={
    ...pessoas,
    ...endereco
}
console.log(combinacoes)

/*Escreva uma função que utilize arrow functions para calcular a potência de um 
número (base elevado ao expoente)*/

const potencia = (a, b) => a ** b;

console.log(potencia(2, 3))
console.log(potencia(5, 2))
console.log(potencia(2, 9))

/*Crie uma função que receba outra função como argumento (callback). A 
função principal deve executar a callback e exibir uma mensagem antes e 
depois de sua execução*/

function apresentarCallback(callback) {
    console.log("Antes da execução da callback");
    callback();
    console.log("Depois da execução da callback");
}

apresentarCallback(() => {
    console.log("Sou a função callback!");
});

/*Pratique métodos de arrays: Use  map  para dobrar os valores de um array, 
filter  para retornar apenas os valores pares e  reduce  para calcular a soma de 
todos os elementos do array*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayDobrado = numeros.map(elemento => elemento * 2);

const arrayPares = numeros.filter(elemento => elemento % 2 === 0);

const arraySoma = numeros.reduce((a, b) => a + b, 0);

console.log("Array Dobrado:", arrayDobrado)
console.log("Array Pares", arrayPares)
console.log("Array Somado:", arraySoma)

/*Implemente um código que utiliza o  for...of  para iterar sobre um array de 
strings e o  for...in  para iterar sobre as propriedades de um objeto*/

for(const numero of numeros ){
    console.log(numero)
}

for(combinacao in combinacoes){
    console.log(combinacao)
}

/*Transforme um objeto em uma string JSON usando  JSON.stringify  e, em 
seguida, reconverta para um objeto usando  JSON.parse .
*/
const pessoass = {
    
    nome: "Wenderson",
    idade: 38,
    hobbies: ["pescar", "academia"],
    endereço:{
        rua:"rua x",
        numero: 51,
        bairro: "bairro y"
    }
}

console.log(JSON.stringify( pessoass))

const pessoasss = JSON.parse(`{
    "nome":"Wenderson",
    "idade":38,
    "hobbies":["pescar","academia"],
    "endereço": {
        "rua":"rua x",
        "numero":51,
        "bairro":"bairro y"
    }
}`);

console.log("json para string", pessoasss)

/*Crie um código que combine desestruturação, operador spread e métodos de 
arrays. Por exemplo, extraia o primeiro elemento de um array, use spread para 
pegar o restante, e aplique um método ( map ,  filter , etc.) no array restante.*/

const number = [10, 20, 30, 40, 50];

// Desestruturação: pega o primeiro elemento e o restante
const [primeiro, ...restante] = number;

console.log("Primeiro número:", primeiro);

// Usa spread com o restante do array para aplicar um map que dobra os valores
const dobrados = [...restante].map(num => num * 2);

console.log("Restante dobrado:", dobrados);
