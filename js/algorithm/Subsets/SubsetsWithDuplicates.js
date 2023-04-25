// Subsets With Duplicates

// Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Example 1:
// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]
// Example 2:
// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]

function findSubsetsWithDupliacates(arr) {
  const subsets = [[]];
  let i = 0;
  let startIndex = 0;
  let endIndex = 0;

  arr.sort();

  while (i < arr.length) {
    const current = arr[i];

    if (i > 0 && arr[i] === arr[i - 1]) {
      startIndex = endIndex + 1;
    }

    endIndex = subsets.length - 1;

    for (let j = startIndex; j < endIndex + 1; j++) {
      const set = subsets[j].slice(0);
      set.push(arr[i]);
      subsets.push(set);
    }

    i++;
  }

  return subsets;
}

console.log(findSubsetsWithDupliacates([1, 3, 3]));
console.log(findSubsetsWithDupliacates([1, 5, 3, 3]));
