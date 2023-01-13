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
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    const tmp = this.tail;

    this.tail = tmp.prev;

    if (tmp.prev) {
      tmp.prev.next = null;
      tmp.prev = null;
    }

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return tmp;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;

    this.head = temp.next;

    if (temp.next) {
      temp.next.prev = null;
      temp.next = null;
    }

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return temp;
  }

  remove(index) {
    if (index < 0 && index >= this.length) return undefined;

    const node = this.get(index);

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = this.head = null;
    }

    return node;
  }

  get(index) {
    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  insert(index, value) {
    if (index < 0 && index >= this.length) return undefined;

    if (index === this.length) {
      return this.push(value);
    }

    if (index === 0) {
      return this.unshift(value);
    }

    const node = new Node(value);

    const currentNode = this.get(index);

    node.next = currentNode;
    node.prev = currentNode.prev;
    currentNode.prev.next = node;
    currentNode.prev = node;

    this.length++;
  }
}
