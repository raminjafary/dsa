const MinHeap = require("../../data-structure/heap");

// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Example 1:
// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
// Output: [12, 11]
// Explanation: Both '11' and '12' apeared twice.

// Example 2:
// Input: [5, 12, 11, 3, 11], K = 2
// Output: [11, 5] or [11, 12] or [11, 3]
// Explanation: Only '11' appeared twice, all other numbers appeared once.

function findKFrequentNumbers(nums, k) {
  const frequency = {};

  nums.forEach((num) => {
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }
  });

  const minHeap = new MinHeap((a, b) => b[0] - a[0]);

  for (const key in frequency) {
    minHeap.insert([frequency[key], +key]);

    if (minHeap.length > k) {
      minHeap.delete();
    }
  }

  const topNumbers = [];

  while (minHeap.length) {
    topNumbers.push(minHeap.delete()[1]);
  }

  return topNumbers;
}

console.log(findKFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2));
