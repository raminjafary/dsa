// Smallest Subarray with a given sum

// Given an array of positive numbers and a positive number ‘n’,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘n’. Return 0, if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], n=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

// Input: [2, 1, 5, 2, 8], n=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

// Input: [3, 4, 1, 1, 6], n=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

function smallestSumOfSubArray(n, arr) {
  let minLength = Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= n) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

console.log(smallestSumOfSubArray(7, [2, 1, 5, 2, 3, 2]));
