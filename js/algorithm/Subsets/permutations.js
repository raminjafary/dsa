// Permutations

// Given a set of distinct numbers, find all of its permutations.
// Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:
// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}
// If a set has ‘n’ distinct elements it will have n! permutations.

// Example 1:
// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

function findPermutations(arr) {
  const permutations = [[]];
  const result = [];
  let i = 0;

  while (i < arr.length) {
    const current = arr[i];

    let n = permutations.length;

    for (let j = 0; j < n; j++) {
      const oldPermutations = permutations.shift();

      for (let k = 0; k < oldPermutations.length + 1; k++) {
        const newPermutations = oldPermutations.slice(0);

        newPermutations.splice(k, 0, current);

        if (newPermutations.length === arr.length) {
          result.push(newPermutations);
        } else {
          permutations.push(newPermutations);
        }
      }
    }
    i++;
  }

  return result;
}

console.log(findPermutations([1, 3, 5]));

function findPermutationsRecursice(arr, index, currentPermutations, result) {
  if (index === arr.length) {
    result.push(currentPermutations);
  } else {
    for (let i = 0; i < currentPermutations.length + 1; i++) {
      const newPermutations = currentPermutations.slice(0);
      newPermutations.splice(i, 0, arr[index]);

      findPermutationsRecursice(arr, index + 1, newPermutations, result);
    }
  }
}

function genPermutationsRecursice(arr) {
  const result = [];
  findPermutationsRecursice(arr, 0, [], result);
  return result;
}

console.log(genPermutationsRecursice([1, 3, 5]));
