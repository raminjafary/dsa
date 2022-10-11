function findAverageOfSubArray(n, arr) {
  const result = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    result.push(sum / n);
  }

  return result;
}

function optimizedFindAverageOfSubArray(n, arr) {
  const result = [];
  let windowStart = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (i >= n - 1) {
      result.push(sum / n);
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return result;
}

console.log(findAverageOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])); // Output: [2.2, 2.8, 2.4, 3.6, 2.8]
console.log(optimizedFindAverageOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])); // Output: [2.2, 2.8, 2.4, 3.6, 2.8]
