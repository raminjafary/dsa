const MinHeap = require("../../data-structure/heap");

// Smallest Number Range

// Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

// Example 1:
// Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
// Output: [4, 7]
// Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.
//
// Example 2:
// Input: L1=[1, 9], L2=[4, 12], L3=[7, 10, 16]
// Output: [9, 12]
// Explanation: The range [9, 12] includes 9 from L1, 12 from L2 and 10 from L3.

function findSmallestNumberRange(lists) {
  const minHeap = new MinHeap((a, b) => b[0] - a[0]);

  let rangeStart = 0;
  let rangeEnd = Infinity;
  let currentMaxNumber = -Infinity;

  for (let i = 0; i < lists.length; i++) {
    minHeap.insert([lists[i][0], 0, lists[i]]);
    currentMaxNumber = Math.max(currentMaxNumber, lists[i][0]);
  }

  while (minHeap.length === lists.length) {
    [number, i, list] = minHeap.delete();

    if (rangeEnd - rangeStart > currentMaxNumber - number) {
      rangeStart = number;
      rangeEnd = currentMaxNumber;
    }

    if (list.length > i + 1) {
      minHeap.insert([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}

console.log(
  findSmallestNumberRange([
    [1, 5, 8],
    [4, 12],
    [7, 8, 10],
  ])
);
