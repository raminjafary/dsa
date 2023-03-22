// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
// The flag of the Netherlands consists of three colors: red, white and blue; and
// since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

// Example 1:
// Input: [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

// Example 2:
// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]

function dutchNationalFlagSort(arr) {
  let right = arr.length - 1;
  let left = 0;
  let i = 0;

  while (i <= right) {
    if (arr[i] === 0) {
      const temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      i++;
      left++;
    } else if (arr[i] === 1) {
      i++;
    } else if (arr[i] === 2) {
      const temp = arr[i];
      arr[i] = arr[right];
      arr[right] = temp;
      right--;
    }
  }

  return arr;
}

console.log(dutchNationalFlagSort([1, 0, 2, 1, 0]));
console.log(dutchNationalFlagSort([2, 2, 0, 1, 2, 0]));
