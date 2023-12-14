// Squaring a Sorted Array

// Problem Statement
// Given a sorted array, create a new array containing squares of
// all the number of the input array in the sorted order.

// Example 1:
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// Example 2:
// Input: [-3, -1, 0, 1, 2]
// Output: [0 1 1 4 9]

function sqauringSortedArray(arr) {
  let start = 0,
    end = (p = arr.length - 1);

  const items = [];

  while (start <= end) {
    const startSqrt = arr[start] ** 2;
    const endSqrt = arr[end] ** 2;

    if (startSqrt > endSqrt) {
      items[p] = startSqrt;
      start++;
    } else {
      items[p] = endSqrt;
      end--;
    }
    p--;
  }

  return items;
}

console.log(sqauringSortedArray([-3, -1, 0, 1, 2]));
