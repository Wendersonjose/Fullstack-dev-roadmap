//Soma de Números Crie um algoritmo que some dois números e exiba o resultado no console.

let number1 = 10;
let number2 = 5 ;
console.log(number1 + number2)

//Validação de Idade Faça um programa que determine se uma idade predefinida é maior ou menor de 18 anos e exiba a mensagem correspondente.

let idade = 15;
if(idade >= 18){
    console.log("Maior de idade")
}else {
    console.log("Menor de idade")
}

//Tabuada Desenvolva um algoritmo que exiba a 
// tabuada de um número predefinido, do 1 ao 10.
let number = 5;
for( let i = 1; i <=10; i++){
    console.log(`${number} x ${i} =${number * i}`);
}

//Par ou Ímpar Crie um programa que verifica se um número predefinido 
// é par ou ímpar e exiba a resposta no console.
let num = 5

if (num % 2 === 0){
    console.log("par")
}else{
    console.log("impar")
}

//Calculadora de Média Desenvolva um algoritmo que calcule a 
// média de três notas predefinidas
// e determine se o aluno foi aprovado ou reprovado (média mínima: 7).

let nota1 = 5
let nota2 = 10
let nota3 = 7

let media = (nota1 + nota2 + nota3) / 3 ;

if(media >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

//Descubra o Maior Número Escreva um algoritmo que
//compare três números predefinidos e determine qual deles é o maior.

let num1 = 1
let num2 = 5
let num3 = 7

if(num1 > num2 && num1 > num3){
    console.log("Numero 1 é maior de todos")
}else if(num2 > num3 && num2 > num1){
    console.log("Numero 2 é maior de todos")
}else{
    console.log("Numero 3 é maior de todos")
}


