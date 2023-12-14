// Subsets

// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:
// Input: [1, 3]
// Output: [], [1], [3], [1,3]
// Example 2:
// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

function findSubsets(arr) {
  const subsets = [[]];
  let i = 0;

  while (i < arr.length) {
    const current = arr[i];

    const n = subsets.length;

    for (let j = 0; j < n; j++) {
      const set = subsets[j].slice(0);
      set.push(current);
      subsets.push(set);
    }

    i++;
  }

  return subsets;
}

console.log(findSubsets([1, 3]));
console.log(findSubsets([1, 5, 3]));
