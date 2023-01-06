class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const node = this.head;
    this.head = node.next;
    node.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return node;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let node = this.head;
    let prev = this.head;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    this.tail = prev;

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return node;
  }

  remove(index) {
    if (!this.head) {
      return undefined;
    }

    const prevNode = this.get(index - 1);

    if (index === this.length) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const currentNode = prevNode.next;

    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }

    currentNode.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return currentNode;
  }

  insertAt(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const node = new Node(value);

    if (this.index === 0) {
      return this.unshift(value);
    }

    if (this.index === this.length) {
      return this.push(value);
    }

    const prevNode = this.get(index - 1);
    const currentNode = this.get(index);

    prevNode.next = node;
    node.next = currentNode;

    this.length++;
  }

  get(index) {
    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }
}

exports = SinglyLinkedList;

const doublyLinkedList = new SinglyLinkedList();
doublyLinkedList.push("A");
doublyLinkedList.push("B");
doublyLinkedList.push("C");
doublyLinkedList.unshift("D");
console.log(doublyLinkedList.remove(1));
console.log();
console.log(doublyLinkedList);
