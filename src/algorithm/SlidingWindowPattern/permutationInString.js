// Permutation in a String
// Given a string and a pattern, find out if the string contains any permutation of the pattern.
//
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
//
// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have n! permutations.

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.
//
// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.
//
// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.
//
// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

function findPermutations(str, pattern) {
  let hasPermutations = false;
  let petternLength = 0;
  let windowStart = 0;
  let patternCharFrquency = {};

  for (const item of pattern) {
    if (!(item in patternCharFrquency)) {
      patternCharFrquency[item] = 0;
      petternLength++;
    }

    patternCharFrquency[item] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endString = str[windowEnd];

    if (endString in patternCharFrquency) {
      patternCharFrquency[endString] -= 1;

      if (patternCharFrquency[endString] === 0) {
        petternLength--;
      }
    }

    if (!petternLength) {
      hasPermutations = true;
    }

    if (windowEnd >= pattern.length - 1) {
      const startString = str[windowStart];

      if (startString in patternCharFrquency) {
        patternCharFrquency[startString] += 1;
        petternLength++;
      }
      windowStart += 1;
    }
  }

  return hasPermutations;
}

console.log(findPermutations("bcdxabcdy", "bcdyabcdx"));
