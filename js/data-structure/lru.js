function createNode(value) {
  return { value };
}

class LRU {
  constructor(capacity = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map();
    this.reverseLookup = new Map();
  }

  get(key) {
    const node = this.lookup.get(key);

    if (!node) {
      return undefined;
    }

    this.detach(node);
    this.prepend(node);

    return node.value;
  }

  update(key, value) {
    let node = this.lookup.get(key);

    if (!node) {
      node = createNode(node);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, noed);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  detach(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head == node) {
      this.head = this.head.next;
    }

    if (this.tail == node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  prepend(node) {
    if (!this.head) {
      this.head = this.tail = undefined;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  trimCache() {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail;
    this.detach(tail);

    const key = this.reverseLookup.get(tail);
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
