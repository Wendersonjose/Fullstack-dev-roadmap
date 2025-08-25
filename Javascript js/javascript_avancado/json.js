//json = javscript object notation

const pessoa = {
    
    nome: "Wenderson",
    idade: 38,
    hobbies: ["pescar", "academia"],
    endereço:{
        rua:"rua x",
        numero: 51,
        bairro: "bairro y"
    }
}

console.log(JSON.stringify(pessoa))

const pessoas = JSON.parse(`{
    "nome":"Wenderson",
    "idade":38,
    "hobbies":["pescar","academia"],
    "endereço": {
        "rua":"rua x",
        "numero":51,
        "bairro":"bairro y"
    }
}`);

console.log(pessoa)