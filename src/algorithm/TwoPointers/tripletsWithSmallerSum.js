// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that
// arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.

// Example 1:
// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// Example 2:
// Input: [-1, 4, 2, 1, 3], target=5
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

function findTripletsWithSmallerSum(arr, targetSum) {
  const result = [];
  let count = 0;
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let currentSum = arr[i];

    while (left < right) {
      if (arr[left] + arr[right] < targetSum - currentSum) {
        count += right - left;

        // If we want to return the triplets
        for (let j = right; j > left; j--) {
          result.push([arr[i], arr[left], arr[j]]);
        }

        left++;
      } else {
        right--;
      }
    }
  }

  return { result, count };
}

console.log(findTripletsWithSmallerSum([-1, 0, 2, 3], 3));
console.log(findTripletsWithSmallerSum([-1, 4, 2, 1, 3], 5));
