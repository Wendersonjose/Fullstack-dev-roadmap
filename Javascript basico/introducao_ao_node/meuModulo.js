function saudacao(nome){
    console.log("Olá", nome)
}


module.exports = {
    saudacao,
    nome: "Wenderson"
}

console.log(module.exports)