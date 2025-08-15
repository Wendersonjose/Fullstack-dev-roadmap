//string é um tipo de dado que representa um texto

//podemos declarar com aspas duplas ou simples ou templetestrings
let nome = "wenderson";
let sobrenome = 'Jose da silva';
let mensagem = `Olá, eu me chamo ${nome} ${sobrenome}`;


//length
console.log(mensagem);


//let mensagemCompleta=  mensagem +" " + nome + " " + sobrenome;
//console.log(mensagemCompleta)

//length conta os caracteres 
//toUpperCase() coloca todos os caracteres em letras MAIUSCULAS
//toLowerCase() coloca todos os caracteres em letras minusculas

console.log(mensagem.length);
console.log(mensagem.toUpperCase());
console.log(mensagem.toLowerCase());

//exemplo criar um programa que armazena uma variavel e 
// exibe uma mensagem que o produto esta com desconto,
//  e toda a mensagem tem que estar em letra maiuscula
let produto = "Arroz"
let mensagemProduto = `produto ${produto.toUpperCase()} esta com super desconto `
console.log(mensagemProduto)
