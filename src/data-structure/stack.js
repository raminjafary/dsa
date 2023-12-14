const SinglyLinkedList = require("./singlyLinkedList");

class Stack {
  constructor() {
    this.stack = new SinglyLinkedList();
  }

  push(value) {
    this.stack.unshift(value);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack.head;
  }

  pop() {
    return this.stack.shift();
  }
}
