// String Permutations by changing case

// Given a string, find all of its permutations preserving the character sequence but changing case.

// Example 1:
// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52"

// Example 2:
// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

function stringPermutationsChangingCase(str) {
  const permutations = [];
  permutations.push(str)
  let i = 0;

  while (i < str.length) {
    if (isNaN(parseInt(str[i]), 10)) {

      const n = permutations.length;

      for (let j = 0; j < n; j++) {
        const chs = permutations[j].split("");

        if (chs[i] === chs[i].toLowerCase()) {
          chs[i] = chs[i].toUpperCase();
        } else {
          chs[i] = chs[i].toLowerCase();
        }

        permutations.push(chs.join(""));
      }
    }

    i++;
  }

  return permutations;
}

console.log(stringPermutationsChangingCase("ad52"));
console.log(stringPermutationsChangingCase("ab7c"));
