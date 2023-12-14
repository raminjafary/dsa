class MaxHeap {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value) {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  leftChildValue(index) {
    return this.data[this.leftChildIndex(index)];
  }

  rightChildIndex(index) {
    return 2 * index + 2;
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

  delete() {
    if (this.length === 0) {
      return;
    }

    const value = this.data[0];

    this.length--;

    if (this.length === 0) {
      this.data = [];
      return value;
    }

    this.data[0] = this.data[this.length];

    this.data.pop();

    this.heapifyDown(0);

    return value;
  }

  heapifyUp(index) {
    if (index === 0) return;

    const value = this.data[index];
    const parentValue = this.parentValue(index);
    const parentIndex = this.parentIndex(index);

    if (value > parentValue) {
      this.data[index] = parentValue;
      this.data[parentIndex] = value;
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftIndex = this.leftChildIndex(index);
    const rightIndex = this.rightChildIndex(index);

    if (index >= this.length || leftIndex >= this.length) {
      return;
    }

    const leftValue = this.leftChildValue(index);
    const rightValue = this.rightChildValue(index);
    const value = this.data[index];

    if (value < leftValue && leftValue > rightValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    } else if (value < rightValue && rightValue > leftValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    }
  }

  peek() {
    return this.data[0];
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(50);
maxHeap.insert(100);
maxHeap.insert(40);

maxHeap.delete();

console.log(maxHeap);

module.exports = MaxHeap;
