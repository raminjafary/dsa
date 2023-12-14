const MaxHeap = require("../../data-structure/maxHeap");

// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:
// Input: [1, 5, 12, 2, 11, 5], K = 3
// Output: 5
// Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].

// Example 2:
// Input: [1, 5, 12, 2, 11, 5], K = 4
// Output: 5
// Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].

// Example 3:
// Input: [5, 12, 11, -1, 12], K = 3
// Output: 11
// Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].

function findKthSmallestNumber(nums, k) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < k; i++) {
    maxHeap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.delete();
      maxHeap.insert(nums[i]);
    }
  }

  return maxHeap.peek();
}

console.log(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3));
