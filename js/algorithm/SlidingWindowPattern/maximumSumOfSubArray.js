function maximumSumOfSubArray(n, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let sumOfMaxArry = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= n - 1) {
      sumOfMaxArry = Math.max(windowSum, sumOfMaxArry);

      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return sumOfMaxArry;
}

console.log(maximumSumOfSubArray(3, [2, 1, 5, 1, 3, 2])); // Output: 9 , maximum sum is [5, 1, 3].
