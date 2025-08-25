const LinkedList = require('./linkedList');

let ll = new LinkedList();

ll.push(1);
ll.unShift(0);
ll.push(3);
ll.insertAtIndex(2, 2);

ll.printAllElements(); // [ 0, 1, 2, 3 ]

console.log(ll.findValueByIndex(2)); // 2
console.log(ll.findValueByIndex(4)); // null

ll.pop();
ll.shift();

ll.printAllElements(); // [ 1, 2 ]