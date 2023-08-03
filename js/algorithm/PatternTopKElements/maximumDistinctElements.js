const Heap = require("../../data-structure/heap");

// Maximum Distinct Elements

// Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers from the array
// such that we are left with maximum distinct numbers.

// Example 1:
// Input: [7, 3, 5, 8, 5, 3, 3], and K=2
// Output: 3
// Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have
// to skip 5 because it is not distinct and occurred twice.
// Another solution could be to remove one instance of '5' and '3' each to be left with three
// distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.

// Example 2:
// Input: [3, 5, 12, 11, 12], and K=3
// Output: 2
// Explanation: We can remove one occurrence of 12, after which all numbers will become distinct. Then
// we can delete any two numbers which will leave us 2 distinct numbers in the result.

// Example 3:
// Input: [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], and K=2
// Output: 3
// Explanation: We can remove one occurrence of '4' to get three distinct numbers.

function findMaximumDistinctChars(nums, k) {
  let distinctCharsCount = 0;

  if (nums.length <= k) {
    return distinctCharsCount;
  }

  const charFrequency = {};

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];

    if (key in charFrequency) {
      charFrequency[key]++;
    } else {
      charFrequency[key] = 1;
    }
  }

  const minHeap = new Heap();

  for (const key in charFrequency) {
    if (charFrequency[key] === 1) {
      distinctCharsCount++;
    } else {
      minHeap.insert(charFrequency[key]);
    }
  }

  while (k > 0 && minHeap.length) {
    const frequency = minHeap.delete();

    k -= frequency - 1;

    if (k >= 0) {
      distinctCharsCount++;
    }
  }

  if (k > 0) {
    distinctCharsCount -= k;
  }

  return distinctCharsCount;
}

console.log(findMaximumDistinctChars([7, 3, 5, 8, 5, 3, 3], 2));
console.log(findMaximumDistinctChars([3, 5, 12, 11, 12], 3));
console.log(findMaximumDistinctChars([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2));
