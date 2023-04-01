// Number Range

// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// Example 1:
// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]

// Example 2:
// Input: [1, 3, 8, 10, 15], key = 10
// Output: [3, 3]

// Example 3:
// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]

function binarySearch(arr, key, findMaxIndex) {
  let end = arr.length - 1;
  let start = 0;
  let lastIndex = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      lastIndex = mid;
      if (findMaxIndex) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return lastIndex;
}

function findNumberRange(arr, key) {
  const result = [-1, -1];

  result[0] = binarySearch(arr, key, false);

  if (result[0] !== -1) {
    result[1] = binarySearch(arr, key, true);
  }

  return result;
}

console.log(findNumberRange([4, 6, 6, 6, 9], 6));
console.log(findNumberRange([1, 3, 8, 10, 15], 10));
console.log(findNumberRange([1, 3, 8, 10, 15], 12));
