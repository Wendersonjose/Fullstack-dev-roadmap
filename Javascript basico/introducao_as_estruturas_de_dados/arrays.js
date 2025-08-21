//ARRAYS


//criando arrays
const arr = [1, 2, 3, 4, 5];

const arr2 = new Array(5);

//Acessando um indice

console.log(arr[2]); // 3
console.log(arr2[0]); // undefined      

//Inserindo elementos

arr.push(6); //Insere no final do array. o(1)
arr.unshift(0); //Insere no começo do array. o(n)

//Removendo elementos

arr.pop();// Remove o último elemento. o(1)
arr.shift(); // Remove o primeiro elemento. o(n)

console.log(arr); // [1, 2, 3, 4, 5]

const str = "Estrutura de dados"

console.log(str.charAt(5)) // t


