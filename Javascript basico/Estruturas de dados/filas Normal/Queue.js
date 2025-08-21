const Node = require('./node');

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        const node = new node(value)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    dequeue(){
        if(this.head === null) return null;
        const removed = this.head.value;
        this.head = this.head.next;
        this.size--;

        if(this.size === 0) {
            this.tail = null; 
        }
        return removed;
    }

    front(){
        return this.head ? this.head.value : null;
    }

    printQueue(){
        if(this.head === null) {
            console.log("Não há elementos na fila");
            return;
        }
        let current = this.head;
        let str = "[ ";
        while(current) {
            str += current.value;
            if(current.next) {
                str += " , ";
            }
            current = current.next;
        }

        str += " ]"

        console.log(str);
    }

}

module.exports = Queue;