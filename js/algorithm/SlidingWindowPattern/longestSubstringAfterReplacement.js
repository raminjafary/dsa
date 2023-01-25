// Longest Substring with Same Letters after Replacement
// Given a string with lowercase letters only,
// if you are allowed to replace no more than ‘n’ letters with any letter,
// find the length of the longest substring having the same letters after replacement.

// Input: String="aabccbb", n=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// Input: String="abbcb", n=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

// Input: String="abccde", n=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

function longestSubstringAfterReplacement(str, n) {
  let windowStart = 0;
  let maxLen = 0;
  let maxRepeatedLength = 0;
  const charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endString = str[windowEnd];

    if (!charFrequency[endString]) {
      charFrequency[endString] = 0;
    }

    charFrequency[endString] += 1;
    maxRepeatedLength = Math.max(maxRepeatedLength, charFrequency[endString]);

    if (windowEnd - windowStart + 1 - maxRepeatedLength > n) {
      const startString = str[windowStart];
      charFrequency[startString] -= 1;
      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

console.log(longestSubstringAfterReplacement("aabccbb", 2));
