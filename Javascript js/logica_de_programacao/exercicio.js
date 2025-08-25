/* Escreva um codigo que exiba "Bom dia!","Boa tarde!","Boa noite"
com base em um valor da variável hora
06:00 as 12:00 => Bom dia;
12:01 as 18:00 => Boa tarde;
18:01 as 05:59 => Boa noite.
*/

let hora = 20;

    if(hora < 12){
        console.log("Bom dia!, agora sao: " + hora);

    }else if(hora < 19){
        console.log("Boa Tarde!, agora sao: " + hora);
    }else{
        console.log("Bom dia!, agora sao: " + hora);
        
    }
