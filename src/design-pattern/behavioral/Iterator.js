// The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

class Iterable {
  constructor(items) {
    this.items = items;
  }

  createIterator() {
    return new Iterator(this.items);
  }
}

class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

const iterable = new Iterable([1, 2, 3, 4, 5]);
const iterator = iterable.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
