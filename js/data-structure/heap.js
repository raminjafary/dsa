class MinHeap {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value) {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete() {
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

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  heapifyDown(index) {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (index >= this.length || leftIndex >= this.length) return;

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];

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

  heapifyUp(index) {
    if (index === 0) return;

    const parentIdx = this.parent(index);
    const parentValue = this.data[parentIdx];
    const value = this.data[index];

    if (parentValue > value) {
      this.data[index] = parentValue;
      this.data[parentIdx] = value;
      this.heapifyUp(parentIdx);
    }
  }
}

module.exports = MinHeap;

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(45);
minHeap.insert(6);
minHeap.insert(8);
// minHeap.delete()
// minHeap.delete()
console.log(minHeap);
