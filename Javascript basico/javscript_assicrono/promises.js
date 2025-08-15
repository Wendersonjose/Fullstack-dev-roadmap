
const { resolve } = require("styled-jsx/css")

const promise = new Promise ((resolve,reject) =>{
    let deuCerto = false

    if (deuCerto){
        resolve('Deu Certo')
    }else{
        reject('Deu Errado')
    }
})

promise
    .then((resultado) =>{
        console.log(resultado)
    })

    .catch((resultado) =>{
        console.log(resultado)
    })


    const esperar = new Promise ((resolve) =>{
        setTimeout(() => {
            resolve()
        },2000)
    })

    esperar.then(() =>{
        console.log('Estou rodando apos 2 segundo ')
    })


    ///////////

    function prepararIngredientes(){
        return new Promise((resolve) =>{
            console.log("Preparando Ingredientes...");

            setTimeout(() =>{
                console.log("Ingredientes preparados...");
                resolve()
            },2000);

        })
}

function cozinhar(){
    return new Promise((resolve) =>{
        console.log("Cozinhando...");        
        setTimeout(() =>{
            console.log("Prato Pronto")
            resolve()
        },4000)

    })
}

function servir(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Prato servido,Bom apetite")
            resolve()
        },5000)
    })
}

prepararIngredientes()
    .then(() => cozinhar())
    .then(() => servir())
    .then(() => console.log('Programa finalizado'))
    
     

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((resposta) =>{
            if(resposta.ok) {
                return resposta.json()
                
            }else{
                throw new Error('Deu Erro')

            }
        })

        .then((respostaEmJson) => {
            console.log(respostaEmJson)
        })

        .catch((error) =>{
            console.log(error)
        })
