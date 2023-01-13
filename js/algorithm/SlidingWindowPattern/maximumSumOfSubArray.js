// Maximum Sum Subarray of Size n

// Given an array of positive numbers and a positive number ‘n’, find the maximum sum of any contiguous subarray of size ‘n’.
// Input: [2, 1, 5, 1, 3, 2], n=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

function maximumSumOfSubArrays(n, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let sumOfMaxArry = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= n - 1) {
      sumOfMaxArry = Math.max(windowSum, sumOfMaxArry);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return sumOfMaxArry;
}

console.log(maximumSumOfSubArrays(3, [2, 1, 5, 1, 3, 2]));
