/* Declare uma variável usando var, outra com let e
outra com const. Modifique o valor das variaveis
declaradas com var e let. tente altarar a variavel const e observe o que acontece*/

var number = 1
let numeros = 0
const nome = 'wenderson'

number = 2
numeros = 10


console.log(number,numeros,nome)


/* Defina duas variaveis booleanas(true e false) e use operadores logicos(
AND,OR,NOT) para criar diferentes combinaçoes de resultados.*/

let logado = false
let bloqueado = false
let isAdmin = false

if((logado && !bloqueado || isAdmin )){
    console.log("Usuario Logado")
}else{
    console.log("Usuario sem permissão de acesso")
}
    
/*Escreva um código que use uma estrutura condicional ( if/else ) para verificar 
se um número é positivo, negativo ou zero.*/

let verificar = 2

if(verificar > 0 ){
    console.log("Numero Positivo")
}else if(verificar == 0){
    console.log("Esse Numero é Neutro")
}else{
    console.log("Numero Negativo")}


/*Utilize o operador ternário para verificar se uma idade é maior ou igual a 18. 
Exiba "Maior de idade" ou "Menor de idade" com base na condição*/

let idade = 17

let mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade'

console.log(mensagem)


/*Crie um laço  for  que exiba todos os números 
de 1 a 10 no console*/

for(i = 1; i<=10; i++){
    console.log(i)
}
    
   /*Usando um laço  while , some os números de 1 a 100 e exiba o resultado final no 
console*/


let contador = 1;
let total = 0;

while(contador <= 100){
    total += contador;
    contador++
 }

 console.log("A Soma de 1 a 100 é: ", total);
 

 /*Declare uma função que receba dois números como parâmetros e retorne a 
soma deles. Chame essa função e exiba o resultado no console*/

function somar(a, b) {
    return a + b;
}
console.log(somar(1, 2));


/*Crie um array com os nomes de 5 frutas. 
Exiba o terceiro item do array no 
console. Depois, adicione uma fruta ao final do array e 
remova a primeira fruta. 
Exiba o array atualizado.*/

let frutas = ["maça","banana", "morango","maracujá","kiwi"]

console.log(frutas[2])

frutas.push("laranja")

frutas.shift()

console.log(frutas)



/*
1) Crie um objeto que represente uma pessoa, contendo as propriedades  nome , 
idade  e  profissão . Acesse e exiba o valor da propriedade  nome.
2)Adicione uma nova propriedade chamada  hobby  ao objeto criado no exercício 
anterior. Atualize o valor da propriedade  idade  para um número diferente.
*/
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};

pessoa.hobby = "Tocar Violão"
pessoa.idade = 38
pessoa.nome = "Wenderson"

console.log(pessoa)


/*Crie uma função que receba um array de números e retorne apenas os 
números pares.*/


const n = [1,2,3,4,5,6,7,8,9]

const nPAres = n.filter(n => n % 2 === 0)

console.log(nPAres)


/*Faça um programa que use uma estrutura de repetição ( for ) para calcular o 
fatorial de um número previamente definido*/


let numeross = 9

let resultado = 1

for(let i = 1; i <= numeross; i++){
    resultado = resultado * i;
}
    
console.log("Fatorial de " + numeross + " é: " + resultado);

/*Defina dois objetos que representem livros, contendo  título , 
 autor  e  ano de 
publicação . Crie uma função que compare os anos de publicação e determine 
qual livro foi publicado primeiro.
*/
let livro1 = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1954
};

let livro2 = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949
};

function livroPublicadoPrimeiro(l1, l2) {
  if (l1.ano < l2.ano) {
    return `${l1.titulo} foi publicado primeiro.`;
  } else if (l2.ano < l1.ano) {
    return `${l2.titulo} foi publicado primeiro.`;
  } else {
    return `Ambos os livros foram publicados no mesmo ano.`;
  }
}

console.log(livroPublicadoPrimeiro(livro1, livro2));

