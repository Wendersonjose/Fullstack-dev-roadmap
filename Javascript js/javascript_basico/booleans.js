// booleanos so pode ser "true" ou "false"

let verdadeiro = true
let falso = false

console.log(5 > 6)
console.log(6 > 5)
console.log(5 >= 5)
console.log(5 <= 4)
console.log(5 == 6)
console.log(5 === "5")

// &&( e )as duas condicoes tem que ser true
// true && false = false
// true && true = verdadeiro 
// false && false = false

// ||(ou) uma das duas pode ser verdadeiras 
// true || false = true
//false || true = true 
//false || false = false 
//true || true = verdadeiro

let idade = 15
let temCarteira = false

if(idade >=18 || temCarteira){
    console.log("pode dirigir")
}else{
    console.log("Não pode dirigir")
}


