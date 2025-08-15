function dizerOi(callback){
    console.log('Olá')
    callback()
}

dizerOi(() =>{
    console.log('Olá eu sou a callback')
})

//setInterval(() =>{
   //console.log('Estou executando')
//},100)

// 1. Declara a função principal
function apresentarCallback(callback) {
    console.log("Antes da execução da callback");
    callback();
    console.log("Depois da execução da callback");
}

// 2. Declara ou passa a função callback
apresentarCallback(() => {
    console.log("Sou a função callback!");
});
