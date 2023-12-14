const MinHeap = require("../../data-structure/heap");

// Kth Smallest Number in M Sorted Lists

// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

// Example 1:
// Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
// Output: 4
// Explanation: The 5th smallest number among all the arrays is 4, this can be verified from the merged
// list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

// Example 2:
// Input: L1=[5, 8, 9], L2=[1, 7], K=3
// Output: 7
// Explanation: The 3rd smallest number among all the arrays is 7.

function findKthSmallestNumberInMSortedLists(lists, k) {
  const minHeap = new MinHeap((a, b) => a[0] < b[0]);

  for (let i = 0; i < lists.length; i++) {
    minHeap.insert([lists[i][0], 0, lists[i]]);
  }

  let numberCount = 0;
  let number = 0;

  while (minHeap.length) {
    [number, i, list] = minHeap.delete();

    numberCount++;

    if (numberCount === k) {
      break;
    }

    if (list.length > i + 1) {
      minHeap.insert([list[i + 1], i + 1, list]);
    }
  }

  return number;
}

console.log(
  findKthSmallestNumberInMSortedLists(
    [
      [2, 6, 8],
      [3, 6, 7],
      [1, 3, 4],
    ],
    5
  )
);
