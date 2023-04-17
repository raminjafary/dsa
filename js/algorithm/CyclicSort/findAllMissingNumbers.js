// Find all Missing Numbers

// We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
// The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

// Example 1:
// Input: [2, 3, 1, 8, 2, 3, 5, 1]
// Output: 4, 6, 7
// Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

// Example 2:
// Input: [2, 4, 1, 2]
// Output: 3

// Example 3:
// Input: [2, 3, 2, 1]
// Output: 4

function findAllMissingNumbers(arr) {
  let i = 0;

  while (i < arr.length) {
    const j = arr[i] - 1;

    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  const missingHumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) {
      missingHumbers.push(i + 1);
    }
  }

  return missingHumbers;
}

console.log(findAllMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(findAllMissingNumbers([2, 4, 1, 2]));
console.log(findAllMissingNumbers([2, 3, 2, 1]));
