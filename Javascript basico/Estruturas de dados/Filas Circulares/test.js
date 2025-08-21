const Queue = require('./Queue');

const queue = new Queue();

queue.enqueue("Pedro");
queue.enqueue("Erick");
queue.enqueue("Tomaz");

queue.printQueue(); // [ "Pedro", "Erick", "Tomaz" ]

queue.dequeue();

queue.printQueue(); // [ "Erick", "Tomaz" ]
