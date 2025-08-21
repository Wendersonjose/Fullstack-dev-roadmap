const Node = require('./node');

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(value){
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    pop(){
        if(this.top === null) return null;
        const popped = this.top.value;
        this.top = this.top.next;
        this.size--;
        return popped;
    }
    peek(){
        return this.top ? this.top.value : null;
    }
    isEmpty(){
        return this.size === 0;
    }

    printAllElements(){
        if(this.isEmpty()) {
            console.log("A pilha está vazia.");
            return;
        }
        console.log("Elementos da pilha:");
        let current = this.top;
        let str = "[ ";

        while(current) {
            str += current.value;
            if(current.next) {
                str += ", ";
            }

            current = current.next;
        }
        str += " ]";
        console.log(str);
    }
}

module.exports = Stack;