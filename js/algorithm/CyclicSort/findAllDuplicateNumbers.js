// Find all Duplicate Numbers

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some duplicates, find all the duplicate numbers without using any extra space.

// Example 1:
// Input: [3, 4, 4, 5, 5]
// Output: [4, 5]

// Example 2:
// Input: [5, 4, 7, 2, 3, 5, 3]
// Output: [3, 5]

function findAllDuplicateNumbers(arr) {
  let i = 0;

  while (i < arr.length) {
    const j = arr[i] - 1;

    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

console.log(findAllDuplicateNumbers([3, 4, 4, 5, 5]));
console.log(findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 3]));
