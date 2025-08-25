const Stack = require('./Stack');

let stack = new Stack();

stack.push("Memorias póstumas de Bras Cunha");
stack.push("Dom Casmurro");
stack.push("O Guarani");
stack.push("Iracema");


stack.printAllElements(); // [ "Iracema", "O Guarani", "Dom Casmurro", "Memorias póstumas de Bras Cunha" ]

stack.pop();
stack.printAllElements(); // [ "O Guarani", "Dom Casmurro", "Memorias póstumas de Bras Cunha" ]

console.log(stack.peek())