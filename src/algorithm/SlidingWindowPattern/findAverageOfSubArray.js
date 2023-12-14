// Given an array, find the average of all contiguous subarrays of size ‘n’ in it.
// Input: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], n=5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

function findAverageOfSubArrays(n, arr) {
  let sum = 0;
  let windowStart = 0;
  const result = [];

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= n - 1) {
      result.push(sum / n);
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return result;
}

console.log(findAverageOfSubArrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
