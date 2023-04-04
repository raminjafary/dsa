// Minimum Difference Element

// Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

// Example 1:
// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array

// Example 2:
// Input: [4, 6, 10], key = 4
// Output: 4

// Example 3:
// Input: [1, 3, 8, 10, 15], key = 12
// Output: 10

// Example 4:
// Input: [4, 6, 10], key = 17
// Output: 10

function findMinimumDifferenceElement(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  if (key > arr[end]) return arr[end];

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }

  return arr[start] - key < key - arr[end] ? arr[start] : arr[end];
}

console.log(findMinimumDifferenceElement([4, 6, 10], 7));
console.log(findMinimumDifferenceElement([4, 6, 10], 4));
console.log(findMinimumDifferenceElement([1, 3, 8, 10, 15], 12));
console.log(findMinimumDifferenceElement([4, 6, 10], 10));
