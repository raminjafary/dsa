// Triplet Sum to Zero

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.

// Example 2:
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

function findTripletSumToZero(arr) {
  const triplets = [];

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    const targetSum = -arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[left] + arr[right];

      if (currentSum === targetSum) {
        triplets.push([-targetSum, arr[left], arr[right]]);

        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (targetSum > currentSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(findTripletSumToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(findTripletSumToZero([-5, 2, -1, -2, 3]));
