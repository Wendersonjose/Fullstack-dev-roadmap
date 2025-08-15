/*
| Estrutura  | Itera sobre | Ideal para      |
| ---------- | ----------- | --------------- |
| `for...in` | **Chaves**  | Objetos         |
| `for...of` | **Valores** | Arrays, strings |
*/ 

const numeros =[1, 2, 3, 4, 5, 6, 7, 8]

for ( const numero of numeros){
    console.log(numero);
    
}

const nome = "Javascript"

for (const caracteres of nome){
   // console.log(caracteres);
    
}

const produtos ={
    nome: 'Notebook',
    preço: 1500,
    temEstoque: true,
    marca:'Dell'
}

for (const propriedade in produtos){
    console.log(propriedade, produtos[propriedade]);
    
}
