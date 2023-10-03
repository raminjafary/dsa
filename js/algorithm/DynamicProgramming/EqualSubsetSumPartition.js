// Equal Subset Sum Partition (medium)

// Problem Statement
// Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.
//
// Example 1:
//
// Input: {1, 2, 3, 4}
// Output: True
// Explanation: The given set can be partitioned into two subsets with equal sum: {1, 4} & {2, 3}
// Example 2:
//
// Input: {1, 1, 3, 4, 7}
// Output: True
// Explanation: The given set can be partitioned into two subsets with equal sum: {1, 3, 4} & {1, 7}
// Example 3:
//
// Input: {2, 3, 4, 6}
// Output: False
// Explanation: The given set cannot be partitioned into two subsets with equal sum.

// {1, 2, 3, 4}
function _canPartitionTopDown(num, sum, currentIndex, dep) {
  if (sum === 0) return true;

  if (currentIndex >= num.length || num.length === 0) return false;

  dep[currentIndex] = dep[currentIndex] || [];

  if (typeof dep[currentIndex][sum] === "undefined") {
    if (num[currentIndex] <= sum) {
      if (
        _canPartitionTopDown(
          num,
          sum - num[currentIndex],
          currentIndex + 1,
          dep
        )
      )
        dep[currentIndex][sum] = true;
      return true;
    }
  }

  dep[currentIndex][sum] = _canPartitionTopDown(
    num,
    sum,
    currentIndex + 1,
    dep
  );

  return dep[currentIndex][sum];
}

function canPartitionTopDown(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  if (sum % 2 !== 0) return false;

  const dep = [];
  return _canPartitionTopDown(num, sum / 2, 0, dep);
}

function canPartitionBottomUp(num) {
  const n = num.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += num[i];
  }

  if (sum % 2 !== 0) return false;

  sum /= 2;

  const dep = new Array(n)
    .fill(false)
    .map(() => new Array(sum + 1).fill(false));

  for (let i = 0; i < n; i++) {
    dep[i][0] = true;
  }

  for (let i = 1; i <= sum; i++) {
    dep[0][i] = num[0] == i;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (dep[i - 1][j]) {
        dep[i][j] = dep[i - 1][j];
      } else if (j >= num[i]) {
        dep[i][j] = dep[i - 1][j - num[i]];
      }
    }
  }

  return dep[n - 1][sum];
}

console.log(canPartitionBottomUp([1, 2, 3, 4]));
console.log(canPartitionBottomUp([1, 2, 3, 4, 7]));

console.log(canPartitionTopDown([1, 2, 3, 4]));
console.log(canPartitionTopDown([1, 2, 3, 4, 7]));
