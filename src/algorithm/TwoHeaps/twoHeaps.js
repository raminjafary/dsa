// Design a class to calculate the median of a number stream. The class should have the following two methods:

const MinHeap = require("../../data-structure/heap");
const MaxHeap = require("../../data-structure/maxHeap");

// 1. insertNum(int num): stores the number in the class
// 2. findMedian(): returns the median of all numbers inserted in the class
// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

// Example 1:
// 1. insertNum(3)
// 2. insertNum(1)
// 3. findMedian() -> output: 2
// 4. insertNum(5)
// 5. findMedian() -> output: 3
// 6. insertNum(4)
// 7. findMedian() -> output: 3.5

class MedianOfStream {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  insert(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.insert(this.maxHeap.delete());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.insert(this.minHeap.delete());
    }
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
    }

    return this.maxHeap.peek();
  }
}

const medianOfStream = new MedianOfStream();

medianOfStream.insert(3);
medianOfStream.insert(1);

console.log(medianOfStream.findMedian());

medianOfStream.insert(5);

console.log(medianOfStream.findMedian());

medianOfStream.insert(4);

console.log(medianOfStream.findMedian());
