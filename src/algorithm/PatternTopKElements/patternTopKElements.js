const MinHeap = require("../../data-structure/heap");

// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:
// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]

// Example 2:
// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]

function findKLargestNumber(nums, k) {
  const minHeap = new MinHeap((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    minHeap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.delete();
      minHeap.insert(nums[i]);
    }
  }

  return minHeap;
}

console.log(findKLargestNumber([3, 1, 5, 12, 2, 11], 3));
