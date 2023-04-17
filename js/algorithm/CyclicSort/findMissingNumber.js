// Find the Missing Number

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

// Example 1:
// Input: [4, 0, 3, 1]
// Output: 2

// Example 2:
// Input: [8, 3, 5, 2, 4, 6, 0, 1]
// Output: 7

function findMissingNumber(arr) {
  let i = 0;

  while (i < arr.length) {
    const j = arr[i];

    if (arr[i] < arr.length && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) {
      return i;
    }
  }

  return arr.length;
}

console.log(findMissingNumber([4, 0, 3, 1]));
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
