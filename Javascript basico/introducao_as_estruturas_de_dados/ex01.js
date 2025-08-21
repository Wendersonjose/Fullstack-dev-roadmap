// Exercício 1 — soma sem métodos de array (OK)
const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma:", soma); // 15

// Nó para lista duplamente encadeada
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Adiciona no final
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  // Dado um índice, retorna o valor (nome condizente)
  findValueByIndex(index) {
    if (index < 0 || index >= this.size) throw new Error("Out of Bounds");
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.value;
  }

  // Dado um valor, retorna o índice da 1ª ocorrência
  findIndexByValue(value) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    }
    return -1; // não achou
  }

  // (Opcional) índice da última ocorrência
  findLastIndexByValue(value) {
    let current = this.tail;
    let i = this.size - 1;
    while (current) {
      if (current.value === value) return i;
      current = current.prev;
      i--;
    }
    return -1;
  }
}

// Exemplo do enunciado
const lista = new DoublyLinkedList();
[3, 5, 6, 7, 8, 2, 1, 3].forEach(n => lista.append(n));

console.log("Valor no índice 2:", lista.findValueByIndex(2));  // 6
console.log("Índice da 1ª ocorrência de 3:", lista.findIndexByValue(3)); // 0
console.log("Índice da última ocorrência de 3:", lista.findLastIndexByValue(3)); // 7
