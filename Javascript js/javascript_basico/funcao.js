
/*
function darBoaTarde(nome){
    console.log("Bom Dia", nome)
    console.log("Boa Tarde", nome)
    console.log("Boa Noite", nome)
}

darBoaTarde("Wenderson")
*/

/*function somar(numeroA, numeroB){
    return numeroA + numeroB
}
let resultado = somar(5,4)

console.log(resultado)
*/

//calculador onde irá somar dois numeros e 
// um string representado a operacao
//calculador(3,2, '+')

function calculadora(A,B, operacao){
    switch(operacao){
        case '+':
            return A + B
            case "-" :
                return A - B
                case "*" :
                    return A * B
                    case "/" : 
                    return A / B 
                    default :
                    console.log("Operação Invalidá")
                    return
    } 
}

let calculo = calculadora(3, 2, "/")

console.log(calculo)



