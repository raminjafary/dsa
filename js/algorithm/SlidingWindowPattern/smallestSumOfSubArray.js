function smallestSumOfSubArray(sum, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let smallestLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= sum) {
      smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (smallestLength === Infinity) {
    return 0;
  }

  return smallestLength;
}

console.log(smallestSumOfSubArray(7, [2, 1, 5, 2, 3, 2])); // Output: 2 , The smallest subarray with a sum greater than or equal to '7' is [5, 2].
