const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unShift(value) {
    const node = new Node(value);
    if (this.head === null) {
      //A Lista está vazia? já tem um primeiro elemento na lista ?
      this.head = node; //se estiver vazia
      this.tail = node;
    } else {
      //se já houver um primeiro elemento
      node.next = this.head; // o antigo primeiro elemento vai ser o proximo para o novo nó
      this.head = node;
    }

    this.size++;
  }

  push(value) {
    const node = new Node(value);
    if (this.tail === null) {
      // A lista está vazia?
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.unShift(value);
      return;
    }
    if (index === this.size) {
      this.push(value);
      return;
    }

    const node = new Node(value);
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = node;
    node.next = current;
    this.size++;
  }

  printAllElements() {
    if (this.size === 0) {
      console.log("Não há elementos na lista");
      return;
    }

    let current = this.head;
    let all = " [ ";
    while (current != null) {
      all += current.value;
      if (current.next != null) {
        all += ", ";
      }
      current = current.next;
    }
    all += " ] ";
    console.log(all);
  }
  shift() {
    if (this.head === null) return null; // Lista vazia

    const removedValue = this.head.value;
    this.size--;

    if (this.size === 0) {
      // Lista com um único elemento
      this.tail = null;
      return removedValue;
    }
  }
  pop() {
    if (this.head === null) return null; // Lista vazia

    if (this.head === this.tail) {
      const val = this.head.value;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return val;
    }

    let current = this.head;
    let previous = null;

    while (current.next != null) {
      previous = current;
      current = current.next;
    }

    const val = current.value;
    previous.next = null;
    this.tail = previous;
    this.size--;

    return val;
  }
  findIndexByValue(value){
    let index = 0;
    let current = this.head;

    while( current != null){
      if(current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }
}

module.exports = LinkedList;
