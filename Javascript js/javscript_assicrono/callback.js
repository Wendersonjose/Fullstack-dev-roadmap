console.log('inicio')

function rodardepoisde2segundos(callback){
    setTimeout(() =>{
        callback('Executando apos o tempo ')
    },2000)
}

rodardepoisde2segundos((mensagem) =>{
    console.log(mensagem)
})

console.log('fim ')


function prepararIngredientes(callback){
    console.log("Preparando Ingredientes...");
    setTimeout(() =>{
        console.log("Ingredientes preparados...");
        callback();
    },2000);
}

function cozinhar(callback){
    console.log("Cozinhando...");
    
    setTimeout(() =>{
        console.log("Prato Pronto")
        callback();
    },4000)
}

function servir(callback){
    setTimeout(() => {
        console.log("Prato servido,Bom apetite")
        callback();
    },5000)
}

prepararIngredientes(() =>{
    cozinhar(() =>{
        servir(() => {
            console.log("Finalizado")
        })
    })

})