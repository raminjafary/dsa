const SinglyLinkedList = require("./singlyLinkedList");

class Queue {
  constructor() {
    this.queue = new SinglyLinkedList();
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue.head;
  }
}