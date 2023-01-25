// Longest Subarray with Ones after Replacement

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘n’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], n=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], n=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

function longestSubarrayAfterReplacement(arr, n) {
  let windowStart = 0;
  let maxLen = 0;
  let maxOnesCount = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd]) {
      maxOnesCount++;
    }

    if (windowEnd - windowStart + 1 - maxOnesCount > n) {
      if (arr[windowStart]) {
        maxOnesCount--;
      }
      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

console.log(
  longestSubarrayAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
