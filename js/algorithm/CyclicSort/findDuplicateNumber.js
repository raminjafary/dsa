// Find the Duplicate Number

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
// The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space.
// You are, however, allowed to modify the input array.

// Example 1:
// Input: [1, 4, 4, 3, 2]
// Output: 4

// Example 2:
// Input: [2, 1, 3, 3, 5, 4]
// Output: 3

// Example 3:
// Input: [2, 4, 1, 4, 4]
// Output: 3

function findDuplicateNumber(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      const j = arr[i] - 1;

      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        return arr[i];
      }
    } else {
      i++;
    }
  }
  return -1;
}

console.log(findDuplicateNumber([1, 4, 4, 3, 2]));
console.log(findDuplicateNumber([2, 1, 3, 3, 5, 4]));
console.log(findDuplicateNumber([2, 4, 1, 4, 4]));
