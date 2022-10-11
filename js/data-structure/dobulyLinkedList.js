class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}

class DBLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    this.length++;
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(value, idx) {
    let i = 0;
    let currentNode = this.head;
    const node = new Node(value);

    if (idx === this.length) {
      this.append(value);
      return;
    } else if (idx === 0) {
      this.prepend(value);
      return;
    } else if (idx > this.length) {
      return;
    }

    this.length++;

    while (currentNode.next) {
      if (currentNode.value && i === idx) {
        node.next = currentNode;
        node.prev = currentNode.prev;
        currentNode.prev.next = node;
        currentNode.prev = node;
        break;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  append(value) {
    this.length++;
    const node = new Node(value);
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  removeAt(idx) {
    const node = this.getAt(idx);

    if (!node) {
      return;
    }

    return this.removeNode(node);
  }

  removeNode(node) {
    this.length--;

    if (this.length === 0) {
      const head = this.head;
      this.head = this.tail = undefined;
      return head;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = null;

    return node.value;
  }

  getAt(idx) {
    const node = this.head;
    for (let i = 0; i < idx; i++) {
      if (node.value) break;
      node = node.next;
    }
    return node;
  }
}

const ls = new DBLinkedList();
ls.prepend(12);
// ls.prepend(1);
ls.insertAt(50, 1);
// ls.append(100);
// ls.removeAt(0);

console.log(ls.head);
