async function buscarDados(){
const resultado = await fetch('https://api.thecatapi.com/v1/images/search')
    if(resultado.ok){
        const json = await resultado.json()
        console.log (json) 
    }else{
        throw new Error('Deu Erro')
    }
}

buscarDados()