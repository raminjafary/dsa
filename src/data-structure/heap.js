class MinHeap {
  constructor(comparator) {
    this.length = 0;
    this.data = [];
    this.comparator = comparator;
  }

  insert(value) {
    this.data[this.length] = value;
    this.nonRecursiveHeapifyUp(this.length);
    this.length++;
  }

  insertRecursice(value) {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete() {
    if (this.length === 0) {
      return -1;
    }

    const value = this.data[0];

    this.length--;

    if (this.length === 0) {
      this.data = [];
      return value;
    }

    this.data[0] = this.data[this.length];

    this.nonRecursiveHeapifyDown(0);

    return value;
  }

  deleteRecursive() {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];

    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];

    this.heapifyDown(0);

    return out;
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  leftChildValue(index) {
    return this.data[this.leftChildIndex(index)];
  }

  rightChildValue(index) {
    return this.data[this.rightChildIndex(index)];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  parentValue(index) {
    return this.data[this.parentIndex(index)];
  }

  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.length;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.length;
  }

  swap(indexOne, indexTwo) {
    const temp = this.data[indexOne];
    this.data[indexOne] = this.data[indexTwo];
    this.data[indexTwo] = temp;
  }

  peek() {
    return this.data[0];
  }

  heapifyDown(index) {
    const leftIndex = this.leftChildIndex(index);
    const rightIndex = this.rightChildIndex(index);

    if (index >= this.length || leftIndex >= this.length) return;

    const leftValue = this.leftChildValue(index);
    const rightValue = this.rightChildValue(index);

    const value = this.data[index];

    if (leftValue > rightValue && value > rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    } else if (leftValue < rightValue && value > leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    }
  }

  nonRecursiveHeapifyDown(index) {
    const condition = (index) =>
      this.comparator
        ? this.comparator(
            this.rightChildValue(index),
            this.leftChildValue(index)
          ) < 0
        : this.rightChildValue(index) < this.leftChildValue(index);

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);

      if (this.hasRightChild(index) && condition(index)) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      if (this.data[index] < this.data[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  nonRecursiveHeapifyUp(index) {
    const condition = (index) =>
      this.comparator
        ? this.comparator(this.parentValue(index), this.data[index]) < 0
        : this.parentValue(index) > this.data[index];

    while (this.hasParent(index) && condition(index)) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  heapifyUp(index) {
    if (index === 0) return;

    const parentIdx = this.parentIndex(index);
    const parentValue = this.parentValue(index);
    const value = this.data[index];

    if (parentValue > value) {
      this.data[index] = parentValue;
      this.data[parentIdx] = value;
      this.heapifyUp(parentIdx);
    }
  }
}

module.exports = MinHeap;
